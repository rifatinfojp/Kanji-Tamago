import React, { useState } from 'react';
import { Brain, CheckCircle, RotateCcw, Volume2, Sparkles, AlertCircle } from 'lucide-react';
import { JLPTLevel, LanguageSettings, UserProgress } from '../types';
import { ALL_KANJI, getKanjiById } from '../data/kanjiData';
import { speakKanjiItem } from '../utils/audio';
import { recordSRSSuccess, saveUserProgress } from '../utils/storage';

interface ReviewViewProps {
  selectedLevel: JLPTLevel;
  langSettings: LanguageSettings;
  userProgress: UserProgress;
  setUserProgress: React.Dispatch<React.SetStateAction<UserProgress>>;
}

export const ReviewView: React.FC<ReviewViewProps> = ({
  selectedLevel,
  langSettings,
  userProgress,
  setUserProgress,
}) => {
  const [flippedMap, setFlippedMap] = useState<Record<string, boolean>>({});

  const srsKanjiIds = Object.keys(userProgress.srsItems);
  const srsItemsList = srsKanjiIds
    ? srsKanjiIds
        .map((id) => getKanjiById(id))
        .filter((item): item is NonNullable<typeof item> => item !== undefined)
    : [];

  const handleCardFlip = (id: string) => {
    setFlippedMap((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleMastered = (id: string) => {
    const updated = recordSRSSuccess(id, userProgress);
    setUserProgress(updated);
  };

  const handleClearAllReview = () => {
    const updated = {
      ...userProgress,
      srsItems: {},
    };
    setUserProgress(updated);
    saveUserProgress(updated);
  };

  return (
    <div className="space-y-6 pb-12 animate-fadeIn max-w-5xl mx-auto">
      {/* Header Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#2D2424] text-[#FAF7F2] border border-[#D2665E]/30 shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Brain className="w-6 h-6 text-[#D2665E]" />
            <h2 className="text-2xl font-serif-title font-bold text-white">স্মার্ট রিভিশন ঝুড়ি (SRS)</h2>
          </div>
          <p className="text-xs text-[#FAF7F2]/80 max-w-xl">
            কুইজে বা অনুশীলনে ভুল হওয়া শব্দগুলো এই ঝুড়িতে জমা থাকে। বারবার প্র্যাকটিস করে এগুলো জয় করুন!
          </p>
        </div>

        {srsItemsList.length > 0 && (
          <button
            onClick={handleClearAllReview}
            className="px-4 py-2 rounded-2xl bg-[#D2665E] hover:bg-[#b8544c] text-white font-bold text-xs transition border border-[#FAF7F2]/10"
          >
            ঝুড়ি খালি করুন
          </button>
        )}
      </div>

      {srsItemsList.length === 0 ? (
        /* Empty State */
        <div className="p-12 text-center bg-white dark:bg-[#241F1E] rounded-3xl border border-[#2D2424]/10 dark:border-[#FAF7F2]/10 shadow-xs space-y-3">
          <div className="w-16 h-16 rounded-2xl bg-[#D2665E]/10 text-[#D2665E] flex items-center justify-center mx-auto border border-[#D2665E]/20">
            <Sparkles className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-serif-title font-bold text-[#2D2424] dark:text-[#FAF7F2]">
            অসাধারণ! আপনার ভুল হওয়া কোনো কান্জি অবশিষ্ট নেই।
          </h3>
          <p className="text-xs text-[#2D2424]/60 dark:text-[#FAF7F2]/60 max-w-md mx-auto">
            কুইজ টেস্ট দেওয়ার সময় কোনো প্রশ্নে ভুল হলে সেই কান্জিটি স্বয়ংক্রিয়ভাবে এখানে চলে আসবে।
          </p>
        </div>
      ) : (
        /* SRS Review Cards Grid */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {srsItemsList.map((item) => {
            const isFlipped = !!flippedMap[item.id];
            const srsData = userProgress.srsItems[item.id];

            return (
              <div
                key={item.id}
                className="p-5 rounded-3xl bg-white dark:bg-[#241F1E] border border-[#2D2424]/10 dark:border-[#FAF7F2]/10 shadow-xs space-y-4 hover:border-[#D2665E]/50 transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#D2665E]/10 text-[#D2665E] text-[10px] font-bold border border-[#D2665E]/20">
                      ভুলের সংখ্যা: {srsData?.mistakeCount || 1}
                    </span>
                    <span className="text-[10px] font-serif-title font-bold text-[#2D2424]/50 dark:text-[#FAF7F2]/50">
                      JLPT {item.level}
                    </span>
                  </div>

                  {/* Main Kanji & Audio */}
                  <div className="text-center py-4 bg-[#F5F2ED] dark:bg-[#2D2726] rounded-2xl border border-[#2D2424]/5 relative">
                    <span className="text-6xl font-serif-jp font-bold text-[#2D2424] dark:text-[#FAF7F2]">
                      {item.kanji}
                    </span>
                    <button
                      onClick={() => speakKanjiItem(item, 'auto')}
                      className="absolute bottom-2 right-2 p-2 rounded-full bg-white dark:bg-[#241F1E] text-[#2D2424] dark:text-[#FAF7F2] shadow-xs hover:text-[#D2665E] border border-[#2D2424]/10"
                      title="সঠিক উচ্চারণ শুনুন"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Card Front vs Back Flip Reveal */}
                  {isFlipped ? (
                    <div className="space-y-2 pt-3 text-xs animate-fadeIn">
                      <p className="font-serif-jp font-bold text-[#2D2424] dark:text-[#FAF7F2]">
                        উচ্চারণ: {item.onyomi.concat(item.kunyomi).join(', ')}
                      </p>
                      {langSettings.bn && (
                        <p className="font-semibold text-[#D2665E]">
                          অর্থ: {item.meaning.bn}
                        </p>
                      )}
                      {langSettings.en && (
                        <p className="text-[#2D2424]/70 dark:text-[#FAF7F2]/70">
                          English: {item.meaning.en}
                        </p>
                      )}
                      {item.vocabulary[0] && (
                        <p className="text-[11px] text-[#2D2424]/60 dark:text-[#FAF7F2]/60 pt-1 border-t border-[#2D2424]/10">
                          শব্দ: {item.vocabulary[0].kanji} ({item.vocabulary[0].meaning.bn})
                        </p>
                      )}
                    </div>
                  ) : (
                    <div className="py-4 text-center">
                      <button
                        onClick={() => handleCardFlip(item.id)}
                        className="text-xs font-bold text-[#D2665E] hover:underline"
                      >
                        অর্থ ও উচ্চারণ দেখতে ক্লিক করুন
                      </button>
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-2 border-t border-[#2D2424]/10 dark:border-[#FAF7F2]/10">
                  <button
                    onClick={() => handleCardFlip(item.id)}
                    className="flex-1 py-2 rounded-xl bg-[#F5F2ED] dark:bg-[#2D2726] text-[#2D2424] dark:text-[#FAF7F2] font-bold text-xs border border-[#2D2424]/5 hover:bg-[#E5E1DA]"
                  >
                    {isFlipped ? 'লুকান' : 'ফ্লিপ করুন'}
                  </button>
                  <button
                    onClick={() => handleMastered(item.id)}
                    className="flex-1 py-2 rounded-xl bg-[#2D2424] text-[#FAF7F2] dark:bg-[#FAF7F2] dark:text-[#2D2424] font-bold text-xs hover:opacity-90 transition flex items-center justify-center gap-1"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-[#D2665E]" />
                    <span>আয়ত্ত করেছি</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
