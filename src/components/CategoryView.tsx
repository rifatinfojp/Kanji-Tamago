import React, { useState } from 'react';
import { CategoryId, JLPTLevel, LanguageSettings, UserProgress } from '../types';
import { CATEGORIES } from '../data/categories';
import { ALL_KANJI, getKanjiByCategory, getKanjiByTamagoLesson, TAMAGO_LESSONS } from '../data/kanjiData';
import { KanjiDetailCard } from './KanjiDetailCard';
import { BookOpen, ArrowLeft, Layers, CheckCircle2 } from 'lucide-react';

interface CategoryViewProps {
  selectedLevel: JLPTLevel;
  langSettings: LanguageSettings;
  userProgress: UserProgress;
  setUserProgress: React.Dispatch<React.SetStateAction<UserProgress>>;
}

export const CategoryView: React.FC<CategoryViewProps> = ({
  selectedLevel,
  langSettings,
  userProgress,
  setUserProgress,
}) => {
  const [activeCategoryId, setActiveCategoryId] = useState<CategoryId | null>(null);
  const [activeTamagoLessonId, setActiveTamagoLessonId] = useState<number | null>(null);
  const [selectedKanjiId, setSelectedKanjiId] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'topics' | 'tamago_lessons'>(
    selectedLevel === 'TAMAGO' ? 'tamago_lessons' : 'topics'
  );

  const activeCategory = CATEGORIES.find((c) => c.id === activeCategoryId);
  const activeTamagoLesson = TAMAGO_LESSONS.find((l) => l.id === activeTamagoLessonId);

  let currentKanjiList = ALL_KANJI;
  if (activeCategoryId) {
    currentKanjiList = getKanjiByCategory(activeCategoryId, selectedLevel);
  } else if (activeTamagoLessonId !== null) {
    currentKanjiList = getKanjiByTamagoLesson(activeTamagoLessonId);
  }

  const selectedKanjiItem = selectedKanjiId
    ? ALL_KANJI.find((k) => k.id === selectedKanjiId)
    : null;

  return (
    <div className="space-y-6 pb-12 animate-fadeIn max-w-6xl mx-auto">
      {/* Detail list view when a category or tamago lesson is selected */}
      {activeCategory || activeTamagoLesson ? (
        <div className="space-y-6">
          {/* Header Back Button */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => {
                setActiveCategoryId(null);
                setActiveTamagoLessonId(null);
                setSelectedKanjiId(null);
              }}
              className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-white dark:bg-[#241F1E] border border-[#2D2424]/10 dark:border-[#FAF7F2]/10 text-[#2D2424] dark:text-[#FAF7F2] font-bold text-xs hover:bg-[#F5F2ED] transition shadow-xs"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>তালিকায় ফিরে যান</span>
            </button>

            <span className="text-xs font-serif-title font-bold text-[#2D2424]/60 dark:text-[#FAF7F2]/60">
              {activeTamagoLesson ? activeTamagoLesson.titleJa : `JLPT ${selectedLevel}`} | {currentKanjiList.length}টি কান্জি
            </span>
          </div>

          {/* Banner */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#2D2424] text-[#FAF7F2] border border-[#D2665E]/30 shadow-md space-y-2">
            <h2 className="text-2xl font-serif-title font-bold text-white">
              {activeCategory
                ? langSettings.bn
                  ? activeCategory.name.bn
                  : langSettings.en
                  ? activeCategory.name.en
                  : activeCategory.name.ja
                : activeTamagoLesson?.titleBn}
            </h2>
            <p className="text-xs sm:text-sm text-[#FAF7F2]/80 leading-relaxed">
              {activeCategory
                ? langSettings.bn
                  ? activeCategory.description.bn
                  : activeCategory.description.en
                : `Kanji Tamago (漢字たまご) পাঠের অন্তর্ভুক্ত কান্জিসমূহ (${activeTamagoLesson?.titleJa})`}
            </p>
          </div>

          {/* Detailed Kanji Modal Card if item selected */}
          {selectedKanjiItem && (
            <div className="space-y-3">
              <KanjiDetailCard
                kanjiItem={selectedKanjiItem}
                langSettings={langSettings}
                userProgress={userProgress}
                setUserProgress={setUserProgress}
              />
            </div>
          )}

          {/* Kanji Grid Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {currentKanjiList.map((item) => {
              const isLearned = userProgress.learnedKanjiIds.includes(item.id);
              const isSelected = selectedKanjiId === item.id;

              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedKanjiId(item.id)}
                  className={`p-4 rounded-2xl bg-white dark:bg-[#241F1E] border transition cursor-pointer flex flex-col items-center justify-between text-center relative group ${
                    isSelected
                      ? 'border-2 border-[#D2665E] shadow-sm'
                      : 'border-[#2D2424]/10 dark:border-[#FAF7F2]/10 hover:border-[#D2665E]/50'
                  }`}
                >
                  {isLearned && (
                    <CheckCircle2 className="w-4 h-4 text-[#D2665E] absolute top-2 right-2" />
                  )}

                  <span className="text-3xl font-serif-jp font-bold text-[#2D2424] dark:text-[#FAF7F2] my-2 group-hover:scale-110 transition">
                    {item.kanji}
                  </span>

                  <div className="text-[11px] font-semibold text-[#2D2424]/80 dark:text-[#FAF7F2]/80 line-clamp-1">
                    {langSettings.bn
                      ? item.meaning.bn
                      : langSettings.en
                      ? item.meaning.en
                      : item.meaning.ja}
                  </div>

                  <span className="text-[10px] font-bold text-[#D2665E] mt-1">
                    {item.level}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        /* Overview Mode Selection: Topics vs Kanji Tamago Textbook Lessons */
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h2 className="text-2xl font-serif-title font-bold text-[#2D2424] dark:text-[#FAF7F2]">
                ক্যাটাগরি ও পাঠভিত্তিক কান্জি সূচি
              </h2>
              <p className="text-xs text-[#2D2424]/60 dark:text-[#FAF7F2]/60">
                টপিক অনুযায়ী অথবা কান্জি তামাগো (Kanji Tamago) পাঠ্যবই এর Lesson 1-15 অনুযায়ী শিখুন
              </p>
            </div>

            {/* View Mode Toggle */}
            <div className="flex bg-[#F5F2ED] dark:bg-[#2D2726] p-1 rounded-2xl border border-[#2D2424]/10 text-xs font-bold self-start sm:self-auto">
              <button
                onClick={() => setViewMode('tamago_lessons')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition ${
                  viewMode === 'tamago_lessons'
                    ? 'bg-[#2D2424] text-[#FAF7F2] dark:bg-[#FAF7F2] dark:text-[#2D2424] shadow-xs'
                    : 'text-[#2D2424]/70 dark:text-[#FAF7F2]/70'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>漢字たまご (15 লেসন)</span>
              </button>
              <button
                onClick={() => setViewMode('topics')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition ${
                  viewMode === 'topics'
                    ? 'bg-[#2D2424] text-[#FAF7F2] dark:bg-[#FAF7F2] dark:text-[#2D2424] shadow-xs'
                    : 'text-[#2D2424]/70 dark:text-[#FAF7F2]/70'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>টপিক অনুযায়ী</span>
              </button>
            </div>
          </div>

          {/* Kanji Tamago Lessons Grid View */}
          {viewMode === 'tamago_lessons' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {TAMAGO_LESSONS.map((lesson) => {
                const lessonKanji = getKanjiByTamagoLesson(lesson.id);
                const learnedCount = lessonKanji.filter((k) =>
                  userProgress.learnedKanjiIds.includes(k.id)
                ).length;
                const pct =
                  lessonKanji.length > 0
                    ? Math.round((learnedCount / lessonKanji.length) * 100)
                    : 0;

                return (
                  <div
                    key={lesson.id}
                    onClick={() => setActiveTamagoLessonId(lesson.id)}
                    className="p-6 rounded-3xl bg-white dark:bg-[#241F1E] border border-[#2D2424]/10 dark:border-[#FAF7F2]/10 shadow-xs hover:border-[#D2665E]/50 transition cursor-pointer flex flex-col justify-between space-y-4 group"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="px-3 py-1 rounded-full bg-[#D2665E]/10 text-[#D2665E] font-bold text-xs border border-[#D2665E]/20">
                          {lesson.id === 0 ? 'পার্টস' : `Lesson ${lesson.id}`}
                        </span>
                        <span className="text-xs font-bold text-[#2D2424]/60 dark:text-[#FAF7F2]/60 bg-[#F5F2ED] dark:bg-[#2D2726] px-2.5 py-1 rounded-full">
                          {lessonKanji.length}টি কান্জি
                        </span>
                      </div>

                      <div>
                        <h3 className="text-lg font-serif-title font-bold text-[#2D2424] dark:text-[#FAF7F2]">
                          {lesson.titleBn}
                        </h3>
                        <p className="text-xs font-serif-jp text-[#D2665E] font-bold mt-0.5">
                          {lesson.titleJa}
                        </p>
                      </div>

                      {/* Sample Kanji preview pills */}
                      <div className="flex flex-wrap gap-1 pt-1">
                        {lesson.kanjiList.map((ch) => (
                          <span
                            key={ch}
                            className="w-7 h-7 rounded-lg bg-[#F5F2ED] dark:bg-[#2D2726] text-[#2D2424] dark:text-[#FAF7F2] font-serif-jp font-bold text-sm flex items-center justify-center border border-[#2D2424]/5"
                          >
                            {ch}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="space-y-1.5 pt-3 border-t border-[#2D2424]/10 dark:border-[#FAF7F2]/10">
                      <div className="flex justify-between text-xs font-semibold text-[#2D2424]/60 dark:text-[#FAF7F2]/60">
                        <span>শিখেছি: {learnedCount}/{lessonKanji.length}</span>
                        <span className="text-[#D2665E] font-bold">{pct}%</span>
                      </div>
                      <div className="w-full h-2 bg-[#F5F2ED] dark:bg-[#2D2726] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#D2665E] rounded-full transition-all duration-300"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            /* Topic Categories Grid View */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {CATEGORIES.map((cat) => {
                const catKanji = getKanjiByCategory(cat.id, selectedLevel);
                const learnedCount = catKanji.filter((k) =>
                  userProgress.learnedKanjiIds.includes(k.id)
                ).length;
                const pct =
                  catKanji.length > 0
                    ? Math.round((learnedCount / catKanji.length) * 100)
                    : 0;

                return (
                  <div
                    key={cat.id}
                    onClick={() => setActiveCategoryId(cat.id)}
                    className="p-6 rounded-3xl bg-white dark:bg-[#241F1E] border border-[#2D2424]/10 dark:border-[#FAF7F2]/10 shadow-xs hover:border-[#D2665E]/50 transition cursor-pointer flex flex-col justify-between space-y-4 group"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-2xl bg-[#D2665E] text-white flex items-center justify-center font-bold text-lg shadow-xs group-hover:scale-105 transition">
                          <BookOpen className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-bold text-[#2D2424]/60 dark:text-[#FAF7F2]/60 bg-[#F5F2ED] dark:bg-[#2D2726] px-2.5 py-1 rounded-full border border-[#2D2424]/5">
                          {catKanji.length}টি কান্জি
                        </span>
                      </div>

                      <h3 className="text-lg font-serif-title font-bold text-[#2D2424] dark:text-[#FAF7F2]">
                        {langSettings.bn
                          ? cat.name.bn
                          : langSettings.en
                          ? cat.name.en
                          : cat.name.ja}
                      </h3>

                      <p className="text-xs text-[#2D2424]/70 dark:text-[#FAF7F2]/70 leading-relaxed">
                        {langSettings.bn
                          ? cat.description.bn
                          : langSettings.en
                          ? cat.description.en
                          : cat.description.ja}
                      </p>
                    </div>

                    {/* Progress bar */}
                    <div className="space-y-1.5 pt-2 border-t border-[#2D2424]/10 dark:border-[#FAF7F2]/10">
                      <div className="flex justify-between text-xs font-semibold text-[#2D2424]/60 dark:text-[#FAF7F2]/60">
                        <span>অগ্রগতি: {learnedCount}টি সম্পূর্ণ</span>
                        <span className="text-[#D2665E] font-bold">{pct}%</span>
                      </div>
                      <div className="w-full h-2 bg-[#F5F2ED] dark:bg-[#2D2726] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#D2665E] rounded-full transition-all duration-300"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
