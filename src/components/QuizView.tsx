import React, { useState, useMemo } from 'react';
import confetti from 'canvas-confetti';
import {
  HelpCircle,
  CheckCircle,
  XCircle,
  RotateCcw,
  Volume2,
  Trophy,
  Brain,
  ArrowRight,
} from 'lucide-react';
import {
  JLPTLevel,
  LanguageSettings,
  UserProgress,
  KanjiItem,
} from '../types';
import { getKanjiByLevel } from '../data/kanjiData';
import { speakJapanese, speakKanjiItem, speakSentence } from '../utils/audio';
import { addSRSMistake, saveUserProgress } from '../utils/storage';

interface QuizViewProps {
  selectedLevel: JLPTLevel;
  langSettings: LanguageSettings;
  userProgress: UserProgress;
  setUserProgress: React.Dispatch<React.SetStateAction<UserProgress>>;
}

type QuizType = 'kanji_to_meaning' | 'meaning_to_kanji' | 'reading' | 'sentence';

interface Question {
  kanjiItem: KanjiItem;
  promptText: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export const QuizView: React.FC<QuizViewProps> = ({
  selectedLevel,
  langSettings,
  userProgress,
  setUserProgress,
}) => {
  const [quizType, setQuizType] = useState<QuizType>('kanji_to_meaning');
  const [questionCount, setQuestionCount] = useState<number>(10);
  const [isQuizActive, setIsQuizActive] = useState<boolean>(false);
  const [currentQIndex, setCurrentQIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [score, setScore] = useState<number>(0);
  const [mistakesMade, setMistakesMade] = useState<KanjiItem[]>([]);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  // Generate quiz questions pool
  const questions: Question[] = useMemo(() => {
    if (!isQuizActive) return [];

    const available = getKanjiByLevel(selectedLevel);
    if (available.length < 4) return [];

    const shuffled = [...available].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, Math.min(questionCount, available.length));

    return selected.map((kanjiItem) => {
      // Pick 3 wrong options from available list
      const wrongItems = available
        .filter((k) => k.id !== kanjiItem.id)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);

      let promptText = '';
      let correctAnswer = '';
      let options: string[] = [];
      let explanation = '';

      if (quizType === 'kanji_to_meaning') {
        promptText = kanjiItem.kanji;
        correctAnswer = langSettings.bn
          ? kanjiItem.meaning.bn
          : langSettings.en
          ? kanjiItem.meaning.en
          : kanjiItem.meaning.ja;

        options = [
          correctAnswer,
          ...wrongItems.map((w) =>
            langSettings.bn
              ? w.meaning.bn
              : langSettings.en
              ? w.meaning.en
              : w.meaning.ja
          ),
        ].sort(() => Math.random() - 0.5);

        explanation = `কান্জি: ${kanjiItem.kanji} | পড়া: ${kanjiItem.onyomi.concat(kanjiItem.kunyomi).join(', ')}`;
      } else if (quizType === 'meaning_to_kanji') {
        promptText = langSettings.bn
          ? kanjiItem.meaning.bn
          : langSettings.en
          ? kanjiItem.meaning.en
          : kanjiItem.meaning.ja;
        correctAnswer = kanjiItem.kanji;

        options = [correctAnswer, ...wrongItems.map((w) => w.kanji)].sort(
          () => Math.random() - 0.5
        );

        explanation = `অর্থ: ${promptText} -> সঠিক কান্জি: ${kanjiItem.kanji}`;
      } else if (quizType === 'reading') {
        promptText = kanjiItem.kanji;
        correctAnswer = kanjiItem.kunyomi[0] || kanjiItem.onyomi[0] || '';
        if (!correctAnswer) {
          correctAnswer = kanjiItem.vocabulary[0]?.reading || 'みず';
        }

        const wrongReadings = wrongItems.map(
          (w) => w.kunyomi[0] || w.onyomi[0] || 'ひ'
        );

        options = [correctAnswer, ...wrongReadings].sort(
          () => Math.random() - 0.5
        );

        explanation = `কান্জি: ${kanjiItem.kanji} -> উচ্চারণ: ${correctAnswer}`;
      } else {
        // Sentence mode
        const sentenceObj = kanjiItem.sentences[0] || {
          ja: `${kanjiItem.kanji}が好きです。`,
          reading: '',
          translation: { bn: '', en: '', ja: '' },
        };

        // Replace target kanji in sentence with blank
        promptText = sentenceObj.ja.replace(kanjiItem.kanji, '【 ？ 】');
        correctAnswer = kanjiItem.kanji;
        options = [correctAnswer, ...wrongItems.map((w) => w.kanji)].sort(
          () => Math.random() - 0.5
        );

        explanation = `পূর্ণ বাক্য: ${sentenceObj.ja} (${sentenceObj.translation.bn || sentenceObj.translation.en})`;
      }

      return {
        kanjiItem,
        promptText,
        options,
        correctAnswer,
        explanation,
      };
    });
  }, [isQuizActive, quizType, selectedLevel, questionCount, langSettings]);

  const currentQ = questions[currentQIndex];

  const handleStartQuiz = () => {
    setIsQuizActive(true);
    setCurrentQIndex(0);
    setSelectedOption(null);
    setScore(0);
    setMistakesMade([]);
    setIsFinished(false);
  };

  const handleAnswerSelect = (opt: string) => {
    if (selectedOption !== null || !currentQ) return;
    setSelectedOption(opt);

    const isCorrect = opt === currentQ.correctAnswer;
    if (isCorrect) {
      setScore((prev) => prev + 1);
    } else {
      // Record mistake into smart review system!
      const updated = addSRSMistake(currentQ.kanjiItem.id, userProgress);
      setUserProgress(updated);
      setMistakesMade((prev) => [...prev, currentQ.kanjiItem]);
    }
  };

  const handleNextQuestion = () => {
    if (currentQIndex < questions.length - 1) {
      setCurrentQIndex((prev) => prev + 1);
      setSelectedOption(null);
    } else {
      // Quiz Finished!
      setIsFinished(true);
      const finalScore = score + (selectedOption === currentQ?.correctAnswer ? 0 : 0);
      const total = questions.length;

      // Confetti celebrations for good score
      if (finalScore / total >= 0.7) {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });
      }

      // Record to user progress history
      const historyRecord = {
        id: Date.now().toString(),
        date: new Date().toISOString().split('T')[0],
        score: finalScore,
        total,
        level: selectedLevel,
        mode: quizType,
      };

      const updatedProgress = {
        ...userProgress,
        quizHistory: [historyRecord, ...userProgress.quizHistory],
      };

      setUserProgress(updatedProgress);
      saveUserProgress(updatedProgress);
    }
  };

  if (!isQuizActive) {
    return (
      <div className="max-w-2xl mx-auto space-y-6 pb-12 animate-fadeIn">
        <div className="p-8 rounded-3xl bg-white dark:bg-[#241F1E] border border-[#2D2424]/10 dark:border-[#FAF7F2]/10 shadow-xl space-y-6">
          <div className="text-center space-y-2">
            <div className="w-16 h-16 rounded-2xl bg-[#D2665E]/10 text-[#D2665E] flex items-center justify-center font-bold mx-auto border border-[#D2665E]/20">
              <HelpCircle className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-serif-title font-bold text-[#2D2424] dark:text-[#FAF7F2]">
              ইন্টারেক্টিভ কান্জি কুইজ
            </h2>
            <p className="text-xs text-[#2D2424]/60 dark:text-[#FAF7F2]/60">
              আপনার শেখা কান্জির সঠিকতা পরীক্ষা করুন। ভুল হওয়া শব্দসমূহ স্বয়ংক্রিয়ভাবে স্মার্ট রিভিউ ঝুড়িতে যুক্ত হবে।
            </p>
          </div>

          {/* Quiz Type Selector */}
          <div className="space-y-3">
            <label className="text-xs font-bold text-[#2D2424]/70 dark:text-[#FAF7F2]/70 uppercase tracking-wider">
              কুইজের ধরন বেছে নিন:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                {
                  id: 'kanji_to_meaning' as QuizType,
                  title: 'কান্জি ➔ অর্থ',
                  desc: 'কান্জি দেখে সঠিক বাংলা/ইংরেজি অর্থ চয়ন করুন',
                },
                {
                  id: 'meaning_to_kanji' as QuizType,
                  title: 'অর্থ ➔ কান্জি',
                  desc: 'অর্থ পড়ে সঠিক জাপানি কান্জিটি নির্বাচন করুন',
                },
                {
                  id: 'reading' as QuizType,
                  title: 'উচ্চারণ ম্যাচ (Furigana)',
                  desc: 'কান্জির সঠিক Onyomi বা Kunyomi বেছে নিন',
                },
                {
                  id: 'sentence' as QuizType,
                  title: 'বাক্য পূরণ (Fill-in-blank)',
                  desc: 'জাপানি বাক্যের শূন্যস্থানে সঠিক কান্জি বসান',
                },
              ].map((m) => (
                <div
                  key={m.id}
                  onClick={() => setQuizType(m.id)}
                  className={`p-4 rounded-2xl border transition cursor-pointer ${
                    quizType === m.id
                      ? 'border-2 border-[#D2665E] bg-[#D2665E]/5 dark:bg-[#D2665E]/15 shadow-xs'
                      : 'border-[#2D2424]/10 dark:border-[#FAF7F2]/10 hover:border-[#D2665E]/40'
                  }`}
                >
                  <h4 className="font-serif-title font-bold text-sm text-[#2D2424] dark:text-[#FAF7F2]">
                    {m.title}
                  </h4>
                  <p className="text-xs text-[#2D2424]/60 dark:text-[#FAF7F2]/60 mt-1">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Question Count Selector */}
          <div className="flex items-center justify-between p-4 rounded-2xl bg-[#F5F2ED] dark:bg-[#2D2726] border border-[#2D2424]/10 dark:border-[#FAF7F2]/10">
            <span className="text-xs font-bold text-[#2D2424] dark:text-[#FAF7F2]">
              প্রশ্নের সংখ্যা:
            </span>
            <div className="flex gap-2">
              {[5, 10, 15].map((cnt) => (
                <button
                  key={cnt}
                  onClick={() => setQuestionCount(cnt)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                    questionCount === cnt
                      ? 'bg-[#2D2424] text-[#FAF7F2] dark:bg-[#FAF7F2] dark:text-[#2D2424]'
                      : 'bg-white dark:bg-[#241F1E] text-[#2D2424]/70 dark:text-[#FAF7F2]/70 border border-[#2D2424]/10'
                  }`}
                >
                  {cnt}টি
                </button>
              ))}
            </div>
          </div>

          {/* Start CTA */}
          <button
            onClick={handleStartQuiz}
            className="w-full py-4 rounded-2xl bg-[#2D2424] text-[#FAF7F2] dark:bg-[#FAF7F2] dark:text-[#2D2424] font-serif-title font-bold text-sm shadow-md hover:opacity-90 active:scale-98 transition flex items-center justify-center gap-2"
          >
            <span>কুইজ শুরু করুন</span>
            <ArrowRight className="w-5 h-5 text-[#D2665E]" />
          </button>
        </div>
      </div>
    );
  }

  // Quiz Finished Screen
  if (isFinished) {
    const accuracy = Math.round((score / (questions.length || 1)) * 100);

    return (
      <div className="max-w-xl mx-auto space-y-6 pb-12 animate-fadeIn text-center">
        <div className="p-8 rounded-3xl bg-white dark:bg-[#241F1E] border border-[#2D2424]/10 dark:border-[#FAF7F2]/10 shadow-xl space-y-6">
          <div className="w-20 h-20 rounded-full bg-[#D2665E]/10 text-[#D2665E] flex items-center justify-center mx-auto border border-[#D2665E]/20">
            <Trophy className="w-10 h-10" />
          </div>

          <div className="space-y-1">
            <h2 className="text-2xl font-serif-title font-bold text-[#2D2424] dark:text-[#FAF7F2]">
              কুইজ সম্পন্ন হয়েছে! 🎉
            </h2>
            <p className="text-xs text-[#2D2424]/60 dark:text-[#FAF7F2]/60">
              আপনার অর্জিত স্কোর নিচে দেওয়া হলো
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#F5F2ED] dark:bg-[#2D2726] border border-[#2D2424]/10 space-y-2">
            <span className="text-4xl font-serif-title font-bold text-[#D2665E]">
              {score} / {questions.length}
            </span>
            <p className="text-xs font-bold text-[#2D2424] dark:text-[#FAF7F2]">
              সঠিকতার হার: {accuracy}%
            </p>
          </div>

          {/* Mistakes alert */}
          {mistakesMade.length > 0 && (
            <div className="p-4 rounded-2xl bg-[#D2665E]/10 border border-[#D2665E]/30 text-left space-y-2">
              <div className="flex items-center gap-2 text-[#D2665E] font-bold text-xs">
                <Brain className="w-4 h-4" />
                <span>
                  {mistakesMade.length}টি কান্জি ভুল হয়েছে (রিভিউতে যোগ করা হয়েছে)
                </span>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {mistakesMade.map((m) => (
                  <span
                    key={m.id}
                    className="px-2.5 py-1 rounded-lg bg-white dark:bg-[#2D2726] border border-[#D2665E]/20 text-[#2D2424] dark:text-[#FAF7F2] font-serif-jp font-bold text-sm"
                  >
                    {m.kanji}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="flex gap-3">
            <button
              onClick={() => setIsQuizActive(false)}
              className="flex-1 py-3 rounded-2xl bg-[#F5F2ED] dark:bg-[#2D2726] text-[#2D2424] dark:text-[#FAF7F2] font-bold text-xs border border-[#2D2424]/10 hover:bg-[#E5E1DA] transition"
            >
              নতুন কুইজ নির্বাচন
            </button>
            <button
              onClick={handleStartQuiz}
              className="flex-1 py-3 rounded-2xl bg-[#2D2424] text-[#FAF7F2] dark:bg-[#FAF7F2] dark:text-[#2D2424] font-bold text-xs hover:opacity-90 transition"
            >
              পুনরায় কুইজ দিন
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Active Quiz Question Interface
  return (
    <div className="max-w-2xl mx-auto space-y-6 pb-12 animate-fadeIn">
      {/* Progress Bar & Header */}
      <div className="flex items-center justify-between text-xs font-serif-title font-bold text-[#2D2424]/70 dark:text-[#FAF7F2]/70">
        <span>
          প্রশ্ন {currentQIndex + 1} / {questions.length}
        </span>
        <span>বর্তমান স্কোর: {score}</span>
      </div>

      <div className="w-full h-2 bg-[#F5F2ED] dark:bg-[#2D2726] rounded-full overflow-hidden border border-[#2D2424]/5">
        <div
          className="h-full bg-[#D2665E] transition-all duration-300"
          style={{ width: `${((currentQIndex + 1) / questions.length) * 100}%` }}
        />
      </div>

      {/* Question Card */}
      <div className="p-8 rounded-3xl bg-white dark:bg-[#241F1E] border border-[#2D2424]/10 dark:border-[#FAF7F2]/10 shadow-xl space-y-6">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#D2665E]">
            {quizType === 'kanji_to_meaning'
              ? 'অর্থ বাছাই করুন'
              : quizType === 'meaning_to_kanji'
              ? 'সঠিক কান্জি নির্বাচন করুন'
              : quizType === 'reading'
              ? 'উচ্চারণ নির্বাচন করুন'
              : 'শূন্যস্থানে সঠিক কান্জি বসান'}
          </span>

          <div className="flex items-center justify-center gap-3">
            <h2 className="text-5xl sm:text-6xl font-serif-jp font-bold text-[#2D2424] dark:text-[#FAF7F2]">
              {currentQ?.promptText}
            </h2>
            {quizType !== 'meaning_to_kanji' && (
              <button
                onClick={() => {
                  if (!currentQ) return;
                  if (quizType === 'sentence') {
                    const s = currentQ.kanjiItem.sentences[0];
                    if (s) speakSentence(s);
                    else speakJapanese(currentQ.kanjiItem.kanji);
                  } else {
                    speakKanjiItem(currentQ.kanjiItem, 'auto');
                  }
                }}
                className="p-2.5 rounded-full bg-[#D2665E]/10 text-[#D2665E] hover:scale-110 transition border border-[#D2665E]/20"
                title="সঠিক উচ্চারণ শুনুন"
              >
                <Volume2 className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>

        {/* Options Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
          {currentQ?.options.map((option, idx) => {
            const isSelected = selectedOption === option;
            const isCorrect = option === currentQ.correctAnswer;

            let btnStyle =
              'border-[#2D2424]/10 dark:border-[#FAF7F2]/10 hover:border-[#D2665E]/40 bg-white dark:bg-[#2D2726] text-[#2D2424] dark:text-[#FAF7F2]';

            if (selectedOption !== null) {
              if (isCorrect) {
                btnStyle =
                  'border-2 border-emerald-600 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-200 font-bold';
              } else if (isSelected) {
                btnStyle =
                  'border-2 border-[#D2665E] bg-[#D2665E]/10 text-[#D2665E] font-bold';
              }
            }

            return (
              <button
                key={idx}
                disabled={selectedOption !== null}
                onClick={() => handleAnswerSelect(option)}
                className={`p-4 rounded-2xl border text-sm font-serif-jp font-bold transition flex items-center justify-between ${btnStyle}`}
              >
                <span>{option}</span>
                {selectedOption !== null && isCorrect && (
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                )}
                {selectedOption !== null && isSelected && !isCorrect && (
                  <XCircle className="w-5 h-5 text-[#D2665E]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Explanation Box on Answer Selected */}
        {selectedOption !== null && (
          <div className="p-4 rounded-2xl bg-[#F5F2ED] dark:bg-[#2D2726] border border-[#2D2424]/10 text-xs text-[#2D2424] dark:text-[#FAF7F2] space-y-1 animate-fadeIn">
            <span className="font-bold text-[#D2665E]">ব্যাখ্যা:</span> {currentQ?.explanation}
          </div>
        )}

        {/* Next Question Button */}
        {selectedOption !== null && (
          <button
            onClick={handleNextQuestion}
            className="w-full py-3.5 rounded-2xl bg-[#2D2424] text-[#FAF7F2] dark:bg-[#FAF7F2] dark:text-[#2D2424] font-serif-title font-bold text-xs shadow-md hover:opacity-90 transition flex items-center justify-center gap-2"
          >
            <span>
              {currentQIndex < questions.length - 1
                ? 'পরবর্তী প্রশ্ন'
                : 'ফলাফল দেখুন'}
            </span>
            <ArrowRight className="w-4 h-4 text-[#D2665E]" />
          </button>
        )}
      </div>
    </div>
  );
};
