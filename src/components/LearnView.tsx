import React, { useState, useMemo } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Shuffle,
  ListOrdered,
  Grid,
  CheckCircle,
  RotateCcw,
  BookOpen,
} from 'lucide-react';
import {
  CategoryId,
  JLPTLevel,
  LanguageSettings,
  StudyMode,
  UserProgress,
} from '../types';
import { ALL_KANJI, getKanjiByLevel, TAMAGO_LESSONS } from '../data/kanjiData';
import { CATEGORIES } from '../data/categories';
import { KanjiDetailCard } from './KanjiDetailCard';
import { recordKanjiLearned } from '../utils/storage';

interface LearnViewProps {
  selectedLevel: JLPTLevel;
  setSelectedLevel: (level: JLPTLevel) => void;
  langSettings: LanguageSettings;
  userProgress: UserProgress;
  setUserProgress: React.Dispatch<React.SetStateAction<UserProgress>>;
}

export const LearnView: React.FC<LearnViewProps> = ({
  selectedLevel,
  setSelectedLevel,
  langSettings,
  userProgress,
  setUserProgress,
}) => {
  const [studyMode, setStudyMode] = useState<StudyMode>('sequential');
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | 'ALL'>('ALL');
  const [selectedTamagoLesson, setSelectedTamagoLesson] = useState<number | 'ALL'>('ALL');
  const [currentIndex, setCurrentIndex] = useState(0);

  // Filter pool based on level, category, and tamago lesson
  const filteredList = useMemo(() => {
    let list = getKanjiByLevel(selectedLevel);

    if (selectedLevel === 'TAMAGO' && selectedTamagoLesson !== 'ALL') {
      list = list.filter((k) => k.tamagoLesson === selectedTamagoLesson);
    }

    if (selectedCategory !== 'ALL') {
      list = list.filter((k) => k.category === selectedCategory);
    }

    if (studyMode === 'random') {
      return [...list].sort((a, b) => a.id.localeCompare(b.id) * 0.5 - Math.random());
    }

    return list;
  }, [selectedLevel, selectedCategory, selectedTamagoLesson, studyMode]);

  const currentKanji = filteredList[currentIndex] || filteredList[0];

  const handleNext = () => {
    if (currentIndex < filteredList.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCurrentIndex(0); // Loop back
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    } else {
      setCurrentIndex(filteredList.length - 1);
    }
  };

  const handleMarkAsLearned = () => {
    if (!currentKanji) return;
    const updated = recordKanjiLearned(currentKanji.id, userProgress);
    setUserProgress(updated);
    handleNext();
  };

  if (!currentKanji) {
    return (
      <div className="p-12 text-center space-y-4">
        <p className="text-[#2D2424]/60 dark:text-[#FAF7F2]/60 font-medium">
          এই ফিল্টারে কোনো কান্জি পাওয়া যায়নি।
        </p>
        <button
          onClick={() => {
            setSelectedCategory('ALL');
            setSelectedLevel('ALL');
          }}
          aria-label="ফিল্টার রিসেট করুন"
          className="px-4 py-2 rounded-xl bg-[#D2665E] text-white font-bold text-xs"
        >
          ফিল্টার রিসেট করুন
        </button>
      </div>
    );
  }

  const isLearned = userProgress.learnedKanjiIds.includes(currentKanji.id);

  return (
    <div className="space-y-6 pb-12 animate-fadeIn max-w-4xl mx-auto">
      {/* Top Filter Bar */}
      <div className="p-4 rounded-3xl bg-white dark:bg-[#241F1E] border border-[#2D2424]/10 dark:border-[#FAF7F2]/10 shadow-xs flex flex-wrap items-center justify-between gap-4">
        {/* Mode Selector */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-[#2D2424]/60 dark:text-[#FAF7F2]/60 uppercase tracking-wider">
            ক্রমানুসার:
          </span>
          <div className="flex bg-[#F5F2ED] dark:bg-[#2D2726] p-1 rounded-xl border border-[#2D2424]/10 dark:border-[#FAF7F2]/10 text-xs font-bold">
            <button
              onClick={() => {
                setStudyMode('sequential');
                setCurrentIndex(0);
              }}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-lg transition ${
                studyMode === 'sequential'
                  ? 'bg-[#2D2424] text-[#FAF7F2] dark:bg-[#FAF7F2] dark:text-[#2D2424] shadow-xs'
                  : 'text-[#2D2424]/70 dark:text-[#FAF7F2]/70'
              }`}
            >
              <ListOrdered className="w-3.5 h-3.5" />
              <span>সিরিয়ালি</span>
            </button>
            <button
              onClick={() => {
                setStudyMode('random');
                setCurrentIndex(0);
              }}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-lg transition ${
                studyMode === 'random'
                  ? 'bg-[#2D2424] text-[#FAF7F2] dark:bg-[#FAF7F2] dark:text-[#2D2424] shadow-xs'
                  : 'text-[#2D2424]/70 dark:text-[#FAF7F2]/70'
              }`}
            >
              <Shuffle className="w-3.5 h-3.5" />
              <span>রেন্ডম</span>
            </button>
          </div>
        </div>

        {/* Tamago Lesson Filter (when TAMAGO level is selected) */}
        {selectedLevel === 'TAMAGO' && (
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-[#D2665E]" />
            <select
              value={selectedTamagoLesson}
              onChange={(e) => {
                const val = e.target.value;
                setSelectedTamagoLesson(val === 'ALL' ? 'ALL' : Number(val));
                setCurrentIndex(0);
              }}
              className="px-3 py-1.5 rounded-xl bg-[#F5F2ED] dark:bg-[#2D2726] border border-[#2D2424]/10 dark:border-[#FAF7F2]/10 text-xs font-bold text-[#2D2424] dark:text-[#FAF7F2] focus:outline-none cursor-pointer"
            >
              <option value="ALL">সকল লেসন (Lesson 1-15)</option>
              {TAMAGO_LESSONS.map((lesson) => (
                <option key={lesson.id} value={lesson.id}>
                  {lesson.titleBn} ({lesson.titleJa})
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Category Dropdown Filter */}
        <div className="flex items-center gap-2">
          <Grid className="w-4 h-4 text-[#D2665E]" />
          <select
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value as CategoryId | 'ALL');
              setCurrentIndex(0);
            }}
            className="px-3 py-1.5 rounded-xl bg-[#F5F2ED] dark:bg-[#2D2726] border border-[#2D2424]/10 dark:border-[#FAF7F2]/10 text-xs font-bold text-[#2D2424] dark:text-[#FAF7F2] focus:outline-none cursor-pointer"
          >
            <option value="ALL">সকল টপিক / ক্যাটাগরি</option>
            {CATEGORIES.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {langSettings.bn
                  ? cat.name.bn
                  : langSettings.en
                  ? cat.name.en
                  : cat.name.ja}
              </option>
            ))}
          </select>
        </div>

        {/* Position Counter */}
        <div className="text-xs font-serif-title font-bold text-[#2D2424]/70 dark:text-[#FAF7F2]/70">
          কান্জি {currentIndex + 1} / {filteredList.length}
        </div>
      </div>

      {/* Main Kanji Detail Card */}
      <KanjiDetailCard
        kanjiItem={currentKanji}
        langSettings={langSettings}
        userProgress={userProgress}
        setUserProgress={setUserProgress}
      />

      {/* Bottom Navigation Toolbar */}
      <div className="flex items-center justify-between gap-4 p-4 rounded-3xl bg-white dark:bg-[#241F1E] border border-[#2D2424]/10 dark:border-[#FAF7F2]/10 shadow-md">
        <button
          onClick={handlePrev}
          className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#F5F2ED] dark:bg-[#2D2726] hover:bg-[#E5E1DA] text-[#2D2424] dark:text-[#FAF7F2] font-bold text-xs transition border border-[#2D2424]/5"
        >
          <ChevronLeft className="w-5 h-5" />
          <span>পূর্ববর্তী</span>
        </button>

        <button
          onClick={handleMarkAsLearned}
          className={`flex items-center gap-2 px-6 py-3 rounded-2xl text-xs font-bold transition shadow-xs ${
            isLearned
              ? 'bg-[#2D2424] text-white'
              : 'bg-[#D2665E] text-white hover:bg-[#b8544c]'
          }`}
        >
          <CheckCircle className="w-4 h-4" />
          <span>{isLearned ? 'পরবর্তী কান্জি' : 'শিখেছি ও পরবর্তী'}</span>
        </button>

        <button
          onClick={handleNext}
          className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#2D2424] text-[#FAF7F2] dark:bg-[#FAF7F2] dark:text-[#2D2424] font-bold text-xs hover:opacity-90 transition"
        >
          <span>পরবর্তী</span>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
