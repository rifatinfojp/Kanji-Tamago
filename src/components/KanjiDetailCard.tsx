import React, { useState } from 'react';
import {
  Volume2,
  Bookmark,
  CheckCircle,
  PenTool,
  BookOpen,
  Sparkles,
  HelpCircle,
  Brain,
} from 'lucide-react';
import { KanjiItem, LanguageSettings, UserProgress } from '../types';
import { CATEGORIES } from '../data/categories';
import {
  speakJapanese,
  speakKanjiItem,
  speakVocab,
  speakSentence,
  getCanonicalPronunciation,
} from '../utils/audio';
import { StrokeCanvas } from './StrokeCanvas';
import {
  recordKanjiLearned,
  toggleBookmark,
  addSRSMistake,
} from '../utils/storage';

interface KanjiDetailCardProps {
  kanjiItem: KanjiItem;
  langSettings: LanguageSettings;
  userProgress: UserProgress;
  setUserProgress: React.Dispatch<React.SetStateAction<UserProgress>>;
  onClose?: () => void;
}

export const KanjiDetailCard: React.FC<KanjiDetailCardProps> = ({
  kanjiItem,
  langSettings,
  userProgress,
  setUserProgress,
}) => {
  const [showCanvas, setShowCanvas] = useState(false);

  const category = CATEGORIES.find((c) => c.id === kanjiItem.category);
  const isLearned = userProgress.learnedKanjiIds.includes(kanjiItem.id);
  const isBookmarked = userProgress.bookmarkedKanjiIds.includes(kanjiItem.id);
  const isInSRS = !!userProgress.srsItems[kanjiItem.id];

  const handleLearnToggle = () => {
    const updated = recordKanjiLearned(kanjiItem.id, userProgress);
    setUserProgress(updated);
  };

  const handleBookmarkToggle = () => {
    const updated = toggleBookmark(kanjiItem.id, userProgress);
    setUserProgress(updated);
  };

  const handleAddToSRS = () => {
    const updated = addSRSMistake(kanjiItem.id, userProgress);
    setUserProgress(updated);
  };

  return (
    <div className="bg-white dark:bg-[#241F1E] rounded-3xl border border-[#2D2424]/10 dark:border-[#FAF7F2]/10 shadow-md overflow-hidden transition-all">
      {/* Top Banner - Charcoal & Terracotta */}
      <div className="bg-[#2D2424] p-6 text-[#FAF7F2] relative border-b border-[#D2665E]/30">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#D2665E] text-white">
              JLPT {kanjiItem.level}
            </span>
            {category && (
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#FAF7F2]/10 text-[#FAF7F2]/90">
                {langSettings.bn
                  ? category.name.bn
                  : langSettings.en
                  ? category.name.en
                  : category.name.ja}
              </span>
            )}
          </div>
          <span className="text-xs text-[#FAF7F2]/70 font-medium">
            স্ট্রোক সংখা: {kanjiItem.strokeCount}
          </span>
        </div>

        {/* Kanji Main Display */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 py-2">
          <div className="flex items-center gap-6">
            <div className="relative group">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-[#FAF7F2]/10 border border-[#FAF7F2]/20 flex items-center justify-center text-7xl sm:text-8xl font-serif-jp font-bold shadow-inner text-[#FAF7F2]">
                {kanjiItem.kanji}
              </div>
              <button
                onClick={() => speakKanjiItem(kanjiItem, 'auto')}
                className="absolute -bottom-2 -right-2 p-2.5 rounded-full bg-[#D2665E] text-white shadow-md hover:scale-110 active:scale-95 transition flex items-center justify-center"
                title={`প্রধান সঠিক উচ্চারণ শুনুন (${getCanonicalPronunciation(kanjiItem)})`}
              >
                <Volume2 className="w-5 h-5 fill-white" />
              </button>
            </div>

            {/* Readings & Meanings */}
            <div>
              {/* Canonical Reading Badge */}
              <div className="mb-2">
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[#FAF7F2]/15 text-[#FAF7F2] text-xs font-serif-jp font-semibold">
                  <span className="text-[#E5B299] text-[10px]">প্রধান উচ্চারণ:</span>
                  <span>{getCanonicalPronunciation(kanjiItem)}</span>
                </span>
              </div>
              {/* Readings */}
              <div className="space-y-1 mb-3">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-[#E5B299] font-bold uppercase text-[11px] tracking-wide">
                    Onyomi (音読み):
                  </span>
                  <span className="font-serif-jp font-semibold text-[#FAF7F2]">
                    {kanjiItem.onyomi.join(', ') || '-'}
                  </span>
                  {kanjiItem.onyomi.length > 0 && (
                    <button
                      onClick={() => speakKanjiItem(kanjiItem, 'onyomi')}
                      className="text-[#FAF7F2]/70 hover:text-white"
                      title="Onyomi উচ্চারণ শুনুন"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-[#E5B299] font-bold uppercase text-[11px] tracking-wide">
                    Kunyomi (訓読み):
                  </span>
                  <span className="font-serif-jp font-semibold text-[#FAF7F2]">
                    {kanjiItem.kunyomi.join(', ') || '-'}
                  </span>
                  {kanjiItem.kunyomi.length > 0 && (
                    <button
                      onClick={() => speakKanjiItem(kanjiItem, 'kunyomi')}
                      className="text-[#FAF7F2]/70 hover:text-white"
                      title="Kunyomi উচ্চারণ শুনুন"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>

              {/* Meanings according to user language settings */}
              <div className="space-y-1">
                {langSettings.bn && (
                  <p className="text-lg font-serif-title font-bold text-white">
                    বাংলা: {kanjiItem.meaning.bn}
                  </p>
                )}
                {langSettings.en && (
                  <p className="text-sm font-semibold text-[#FAF7F2]/80">
                    English: {kanjiItem.meaning.en}
                  </p>
                )}
                {langSettings.ja && (
                  <p className="text-sm text-[#E5B299]">
                    日本語: {kanjiItem.meaning.ja}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Practice Canvas Toggle Button */}
          <button
            onClick={() => setShowCanvas(!showCanvas)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#FAF7F2]/10 hover:bg-[#FAF7F2]/20 border border-[#FAF7F2]/20 text-[#FAF7F2] text-xs font-bold transition shadow-xs"
          >
            <PenTool className="w-4 h-4" />
            <span>{showCanvas ? 'ক্যানভাস লুকান' : 'লিখা অনুশীলন করুন'}</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-6 space-y-6">
        {/* Stroke Canvas Box */}
        {showCanvas && (
          <div className="p-4 bg-[#FAF7F2] dark:bg-[#1A1615] rounded-2xl border border-[#2D2424]/10 dark:border-[#FAF7F2]/10 animate-fadeIn">
            <StrokeCanvas kanji={kanjiItem.kanji} />
          </div>
        )}

        {/* Mnemonic / Tip */}
        {kanjiItem.mnemonic && (
          <div className="p-4 rounded-2xl bg-[#F5F2ED] dark:bg-[#2D2726] border border-[#2D2424]/10 dark:border-[#FAF7F2]/10 flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-[#D2665E] flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold uppercase text-[#D2665E] mb-1">
                স্মরণ রাখার সহজ উপায় (Memory Tip)
              </h4>
              {langSettings.bn && (
                <p className="text-xs text-[#2D2424] dark:text-[#FAF7F2] font-medium leading-relaxed">
                  {kanjiItem.mnemonic.bn}
                </p>
              )}
              {langSettings.en && (
                <p className="text-xs text-[#2D2424]/80 dark:text-[#FAF7F2]/80">
                  {kanjiItem.mnemonic.en}
                </p>
              )}
            </div>
          </div>
        )}

        {/* Vocabulary Compound Section */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <BookOpen className="w-5 h-5 text-[#D2665E]" />
            <h3 className="text-sm font-serif-title font-bold text-[#2D2424] dark:text-[#FAF7F2] uppercase tracking-wider">
              পরীক্ষায় আসা প্রয়োজনীয় শব্দাবলী (Common Vocabulary)
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {kanjiItem.vocabulary.map((vocab, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-2xl bg-[#FAF7F2] dark:bg-[#2D2726] border border-[#2D2424]/10 dark:border-[#FAF7F2]/10 hover:border-[#D2665E]/50 transition flex items-start justify-between group"
              >
                <div>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-lg font-bold text-[#2D2424] dark:text-[#FAF7F2] font-serif-jp">
                      {vocab.kanji}
                    </span>
                    <span className="text-xs text-[#D2665E] font-semibold font-serif-jp">
                      ({vocab.reading})
                    </span>
                  </div>

                  {/* Vocabulary meanings based on active settings */}
                  <div className="space-y-0.5">
                    {langSettings.bn && (
                      <p className="text-xs font-medium text-[#2D2424]/80 dark:text-[#FAF7F2]/80">
                        {vocab.meaning.bn}
                      </p>
                    )}
                    {langSettings.en && (
                      <p className="text-[11px] text-[#2D2424]/60 dark:text-[#FAF7F2]/60">
                        {vocab.meaning.en}
                      </p>
                    )}
                    {langSettings.ja && (
                      <p className="text-[11px] text-[#D2665E]">
                        {vocab.meaning.ja}
                      </p>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => speakVocab(vocab)}
                  className="p-2 rounded-xl bg-white dark:bg-[#241F1E] text-[#2D2424] dark:text-[#FAF7F2] border border-[#2D2424]/10 hover:border-[#D2665E] hover:text-[#D2665E] transition"
                  title="শব্দের সঠিক উচ্চারণ শুনুন"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Example Sentences Section */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <HelpCircle className="w-5 h-5 text-[#D2665E]" />
            <h3 className="text-sm font-serif-title font-bold text-[#2D2424] dark:text-[#FAF7F2] uppercase tracking-wider">
              বাক্যে ব্যবহার (Example Sentences)
            </h3>
          </div>

          <div className="space-y-3">
            {kanjiItem.sentences.map((sentence, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-[#FAF7F2] dark:bg-[#2D2726] border border-[#2D2424]/10 dark:border-[#FAF7F2]/10 space-y-2"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-base font-bold text-[#2D2424] dark:text-[#FAF7F2] font-serif-jp leading-relaxed">
                      {sentence.ja}
                    </p>
                    <p className="text-xs font-medium text-[#D2665E] font-serif-jp mt-0.5">
                      উচ্চারণ: {sentence.reading}
                    </p>
                  </div>
                  <button
                    onClick={() => speakSentence(sentence)}
                    className="p-2 rounded-xl bg-[#2D2424] text-[#FAF7F2] hover:bg-[#D2665E] transition flex-shrink-0"
                    title="সম্পূর্ণ বাক্য শুনুন"
                  >
                    <Volume2 className="w-4.5 h-4.5" />
                  </button>
                </div>

                {/* Sentence Translations */}
                <div className="pt-2 border-t border-[#2D2424]/10 dark:border-[#FAF7F2]/10 space-y-1">
                  {langSettings.bn && (
                    <p className="text-xs font-medium text-[#2D2424]/90 dark:text-[#FAF7F2]/90">
                      🇧🇩 {sentence.translation.bn}
                    </p>
                  )}
                  {langSettings.en && (
                    <p className="text-xs text-[#2D2424]/70 dark:text-[#FAF7F2]/70">
                      🇺🇸 {sentence.translation.en}
                    </p>
                  )}
                  {langSettings.ja && (
                    <p className="text-xs text-[#D2665E]">
                      🇯🇵 {sentence.translation.ja}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Controls Bar */}
        <div className="pt-4 border-t border-[#2D2424]/10 dark:border-[#FAF7F2]/10 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={handleLearnToggle}
              className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold transition shadow-xs ${
                isLearned
                  ? 'bg-[#2D2424] text-white hover:bg-[#3D3030]'
                  : 'bg-[#F5F2ED] text-[#2D2424] dark:bg-[#2D2726] dark:text-[#FAF7F2] hover:bg-[#D2665E] hover:text-white'
              }`}
            >
              <CheckCircle className="w-4 h-4" />
              <span>{isLearned ? 'শিখা সম্পন্ন হয়েছে' : 'শিখেছি মার্ক করুন'}</span>
            </button>

            <button
              onClick={handleBookmarkToggle}
              className={`flex items-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-bold transition ${
                isBookmarked
                  ? 'bg-[#D2665E] text-white'
                  : 'bg-[#F5F2ED] dark:bg-[#2D2726] text-[#2D2424] dark:text-[#FAF7F2] hover:bg-[#E5E1DA]'
              }`}
              title="বুকমার্ক"
            >
              <Bookmark className="w-4 h-4" />
              <span>{isBookmarked ? 'বুকমার্কড' : 'বুকমার্ক'}</span>
            </button>
          </div>

          <button
            onClick={handleAddToSRS}
            className={`flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-bold transition ${
              isInSRS
                ? 'bg-[#D2665E] text-white'
                : 'bg-[#F5F2ED] dark:bg-[#2D2726] text-[#D2665E] hover:bg-[#D2665E] hover:text-white'
            }`}
            title="ভুল হলে এই কান্জিটি স্মার্ট রিভিউ ঝুড়িতে জমা রাখুন"
          >
            <Brain className="w-4 h-4" />
            <span>
              {isInSRS ? 'রিভিউ ঝুড়িতে আছে' : 'স্মার্ট রিভিউ ঝুড়িতে যোগ করুন'}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
