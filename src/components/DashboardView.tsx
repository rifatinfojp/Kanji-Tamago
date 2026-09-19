import React from 'react';
import {
  BookOpen,
  Brain,
  CheckCircle,
  Flame,
  HelpCircle,
  Sparkles,
  Trophy,
  Target,
  ArrowRight,
  Grid,
} from 'lucide-react';
import {
  AppView,
  JLPTLevel,
  LanguageSettings,
  UserProgress,
} from '../types';
import { ALL_KANJI, getKanjiByLevel } from '../data/kanjiData';
import { CATEGORIES } from '../data/categories';
import { saveUserProgress } from '../utils/storage';

interface DashboardViewProps {
  userProgress: UserProgress;
  setUserProgress: React.Dispatch<React.SetStateAction<UserProgress>>;
  selectedLevel: JLPTLevel;
  setCurrentView: (view: AppView) => void;
  langSettings: LanguageSettings;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  userProgress,
  setUserProgress,
  selectedLevel,
  setCurrentView,
  langSettings,
}) => {
  const currentLevelKanji = getKanjiByLevel(selectedLevel);
  const totalCount = currentLevelKanji.length;

  const learnedCount = currentLevelKanji.filter((k) =>
    userProgress.learnedKanjiIds.includes(k.id)
  ).length;

  const percentage = Math.round((learnedCount / (totalCount || 1)) * 100);

  const todayCount = userProgress.todayCompletedIds.length;
  const goal = userProgress.dailyGoal || 5;
  const todayPercentage = Math.min(100, Math.round((todayCount / goal) * 100));

  const srsCount = Object.keys(userProgress.srsItems).length;

  // Calculate Quiz Accuracy
  let totalAttempted = 0;
  let totalCorrect = 0;
  userProgress.quizHistory.forEach((q) => {
    totalAttempted += q.total;
    totalCorrect += q.score;
  });
  const quizAccuracy =
    totalAttempted > 0 ? Math.round((totalCorrect / totalAttempted) * 100) : 0;

  const handleGoalChange = (newGoal: number) => {
    const updated = { ...userProgress, dailyGoal: newGoal };
    setUserProgress(updated);
    saveUserProgress(updated);
  };

  return (
    <div className="space-y-8 animate-fadeIn pb-12">
      {/* Top Banner - Artistic Flair Terracotta / Charcoal */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#2D2424] via-[#3D3030] to-[#2D2424] p-6 sm:p-8 text-[#FAF7F2] shadow-md border border-[#2D2424]/20">
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-[#D2665E] text-white text-xs font-bold uppercase tracking-wider">
                {selectedLevel === 'TAMAGO' ? '漢字たまご (Kanji Tamago)' : `JLPT ${selectedLevel}`} কোর্স
              </span>
              <span className="flex items-center gap-1 text-xs font-bold text-[#E5B299]">
                <Flame className="w-4 h-4 fill-[#D2665E] text-[#D2665E]" />
                {userProgress.streakDays} দিন স্ট্রিক!
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-serif-title font-bold tracking-tight">
              স্বাগতম, কান্জি মাস্টার! 👋
            </h2>

            <p className="text-xs sm:text-sm text-[#FAF7F2]/80 max-w-xl leading-relaxed">
              প্রতিদিনের নির্দিষ্ট লক্ষ্য পূরণ করে সহজেই JLPT N5 ও N4 কান্জিতে
              দক্ষতা অর্জন করুন। কুইজ ও স্মার্ট রিভিশন দিয়ে প্রস্তুতি ঝালিয়ে নিন।
            </p>
          </div>

          {/* Start Lesson Action CTA */}
          <button
            onClick={() => setCurrentView('learn')}
            className="px-6 py-3.5 rounded-2xl bg-[#D2665E] text-white font-semibold text-sm shadow-sm hover:bg-[#b8544c] active:scale-95 transition flex items-center gap-2 border border-white/10"
          >
            <BookOpen className="w-5 h-5" />
            <span>আজকের পড়া শুরু করুন</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Decorative Background Kanji */}
        <div className="absolute -right-6 -bottom-10 text-[180px] font-serif-jp text-[#FAF7F2]/5 select-none pointer-events-none">
          学
        </div>
      </div>

      {/* Daily Target Goal Card */}
      <div className="p-6 rounded-3xl bg-white dark:bg-[#241F1E] border border-[#2D2424]/10 dark:border-[#FAF7F2]/10 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#F5F2ED] dark:bg-[#2D2726] text-[#D2665E] flex items-center justify-center font-bold">
              <Target className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-serif-title font-bold text-[#2D2424] dark:text-[#FAF7F2]">
                আজকের লক্ষ্য: {todayCount} / {goal} কান্জি সম্পন্ন
              </h3>
              <p className="text-xs text-[#2D2424]/60 dark:text-[#FAF7F2]/60">
                দৈনিক নির্দিষ্ট লক্ষ্য সেট করে ধারাবাহিকভাবে শিখুন
              </p>
            </div>
          </div>

          {/* Goal Picker Selector Buttons */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-[#2D2424]/60 dark:text-[#FAF7F2]/60">
              দৈনিক টার্গেট:
            </span>
            <div className="flex bg-[#F5F2ED] dark:bg-[#2D2726] p-1 rounded-xl border border-[#2D2424]/10 dark:border-[#FAF7F2]/10 text-xs font-bold">
              {[5, 10, 15, 20].map((g) => (
                <button
                  key={g}
                  onClick={() => handleGoalChange(g)}
                  className={`px-3 py-1.5 rounded-lg transition ${
                    goal === g
                      ? 'bg-[#2D2424] text-[#FAF7F2] dark:bg-[#FAF7F2] dark:text-[#2D2424] shadow-xs'
                      : 'text-[#2D2424]/60 dark:text-[#FAF7F2]/60 hover:text-[#2D2424] dark:hover:text-[#FAF7F2]'
                  }`}
                >
                  {g}টি
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="space-y-1.5">
          <div className="w-full h-3 bg-[#F5F2ED] dark:bg-[#2D2726] rounded-full overflow-hidden p-0.5 border border-[#2D2424]/5 dark:border-[#FAF7F2]/5">
            <div
              className="h-full bg-[#D2665E] rounded-full transition-all duration-500"
              style={{ width: `${todayPercentage}%` }}
            />
          </div>
          <div className="flex items-center justify-between text-xs text-[#2D2424]/60 dark:text-[#FAF7F2]/60 font-medium px-1">
            <span>{todayPercentage}% সম্পন্ন</span>
            <span>
              {todayPercentage >= 100
                ? '🎉 আজকের লক্ষ্য পূরণ হয়েছে!'
                : `আর ${Math.max(0, goal - todayCount)}টি কান্জি বাকি`}
            </span>
          </div>
        </div>
      </div>

      {/* Metrics Overview Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Total Learned */}
        <div className="p-5 rounded-2xl bg-white dark:bg-[#241F1E] border border-[#2D2424]/10 dark:border-[#FAF7F2]/10 shadow-xs space-y-2">
          <div className="flex items-center justify-between text-[#2D2424]/60 dark:text-[#FAF7F2]/60">
            <span className="text-xs font-bold uppercase tracking-wider">
              সর্বমোট অর্জিত
            </span>
            <CheckCircle className="w-5 h-5 text-[#D2665E]" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-serif-title font-extrabold text-[#2D2424] dark:text-[#FAF7F2]">
              {learnedCount}
            </span>
            <span className="text-xs text-[#2D2424]/50 dark:text-[#FAF7F2]/50 font-semibold">
              / {totalCount} ({percentage}%)
            </span>
          </div>
          <p className="text-[11px] text-[#2D2424]/50 dark:text-[#FAF7F2]/50">
            {selectedLevel === 'ALL'
              ? 'N5 ও N4 মিলিয়ে মোট কান্জি'
              : selectedLevel === 'TAMAGO'
              ? '漢字たまご (Kanji Tamago) সিলেবাসের কান্জি'
              : `${selectedLevel} লেভেলের কান্জি`}
          </p>
        </div>

        {/* Smart SRS Review Queue */}
        <div
          onClick={() => setCurrentView('review')}
          className="p-5 rounded-2xl bg-white dark:bg-[#241F1E] border border-[#2D2424]/10 dark:border-[#FAF7F2]/10 shadow-xs space-y-2 cursor-pointer hover:border-[#D2665E]/50 transition"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D2665E]">
              স্মার্ট রিভিউ ঝুড়ি
            </span>
            <Brain className="w-5 h-5 text-[#D2665E]" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-serif-title font-extrabold text-[#D2665E]">
              {srsCount}
            </span>
            <span className="text-xs text-[#2D2424]/50 dark:text-[#FAF7F2]/50">টি কান্জি</span>
          </div>
          <p className="text-[11px] text-[#2D2424]/50 dark:text-[#FAF7F2]/50">
            কুইজে ভুল করা কান্জির তালিকা
          </p>
        </div>

        {/* Quiz Accuracy */}
        <div
          onClick={() => setCurrentView('quiz')}
          className="p-5 rounded-2xl bg-white dark:bg-[#241F1E] border border-[#2D2424]/10 dark:border-[#FAF7F2]/10 shadow-xs space-y-2 cursor-pointer hover:border-[#2D2424]/30 dark:hover:border-[#FAF7F2]/30 transition"
        >
          <div className="flex items-center justify-between text-[#2D2424]/60 dark:text-[#FAF7F2]/60">
            <span className="text-xs font-bold uppercase tracking-wider">
              কুইজ সঠিকতার হার
            </span>
            <Trophy className="w-5 h-5 text-[#D2665E]" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-serif-title font-extrabold text-[#2D2424] dark:text-[#FAF7F2]">
              {quizAccuracy}%
            </span>
            <span className="text-xs text-[#2D2424]/50 dark:text-[#FAF7F2]/50 font-semibold">
              ({totalCorrect}/{totalAttempted})
            </span>
          </div>
          <p className="text-[11px] text-[#2D2424]/50 dark:text-[#FAF7F2]/50">অনলাইন কুইজ ট্র্যাকিং</p>
        </div>

        {/* Bookmarks */}
        <div
          onClick={() => setCurrentView('library')}
          className="p-5 rounded-2xl bg-white dark:bg-[#241F1E] border border-[#2D2424]/10 dark:border-[#FAF7F2]/10 shadow-xs space-y-2 cursor-pointer hover:border-[#D2665E]/50 transition"
        >
          <div className="flex items-center justify-between text-[#2D2424]/60 dark:text-[#FAF7F2]/60">
            <span className="text-xs font-bold uppercase tracking-wider">
              বুকমার্ক করা
            </span>
            <Sparkles className="w-5 h-5 text-[#D2665E]" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-serif-title font-extrabold text-[#2D2424] dark:text-[#FAF7F2]">
              {userProgress.bookmarkedKanjiIds.length}
            </span>
            <span className="text-xs text-[#2D2424]/50 dark:text-[#FAF7F2]/50">টি প্রিয়</span>
          </div>
          <p className="text-[11px] text-[#2D2424]/50 dark:text-[#FAF7F2]/50">সংরক্ষিত কান্জি সংকলন</p>
        </div>
      </div>

      {/* Main Navigation Quick Grid */}
      <div>
        <h3 className="text-base font-serif-title font-bold text-[#2D2424] dark:text-[#FAF7F2] mb-4 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-[#D2665E]" />
          <span>পড়াশোনা ও অনুশীলনের মাধ্যম</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div
            onClick={() => setCurrentView('learn')}
            className="p-5 rounded-2xl bg-white dark:bg-[#241F1E] border border-[#2D2424]/10 dark:border-[#FAF7F2]/10 shadow-xs hover:border-[#D2665E]/50 transition cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-[#2D2424] dark:bg-[#FAF7F2] text-[#FAF7F2] dark:text-[#2D2424] flex items-center justify-center font-bold mb-3 group-hover:scale-105 transition">
              <BookOpen className="w-5 h-5" />
            </div>
            <h4 className="font-serif-title font-bold text-[#2D2424] dark:text-[#FAF7F2] text-sm mb-1">
              কান্জি পাঠ (Learn)
            </h4>
            <p className="text-xs text-[#2D2424]/70 dark:text-[#FAF7F2]/70 leading-relaxed">
              রেন্ডম বা সিরিয়ালি শব্দ, উচ্চারণ ও বাক্যসহ পড়ুন।
            </p>
          </div>

          <div
            onClick={() => setCurrentView('categories')}
            className="p-5 rounded-2xl bg-white dark:bg-[#241F1E] border border-[#2D2424]/10 dark:border-[#FAF7F2]/10 shadow-xs hover:border-[#D2665E]/50 transition cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-[#D2665E] text-white flex items-center justify-center font-bold mb-3 group-hover:scale-105 transition">
              <Grid className="w-5 h-5" />
            </div>
            <h4 className="font-serif-title font-bold text-[#2D2424] dark:text-[#FAF7F2] text-sm mb-1">
              টপিক অনুযায়ী পাঠ
            </h4>
            <p className="text-xs text-[#2D2424]/70 dark:text-[#FAF7F2]/70 leading-relaxed">
              পড়াশোনা, ভ্রমণ, কাজ বা প্রতিদিনের বিষয়ের ক্যাটাগরি।
            </p>
          </div>

          <div
            onClick={() => setCurrentView('quiz')}
            className="p-5 rounded-2xl bg-white dark:bg-[#241F1E] border border-[#2D2424]/10 dark:border-[#FAF7F2]/10 shadow-xs hover:border-[#D2665E]/50 transition cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-[#2D2424] dark:bg-[#FAF7F2] text-[#FAF7F2] dark:text-[#2D2424] flex items-center justify-center font-bold mb-3 group-hover:scale-105 transition">
              <HelpCircle className="w-5 h-5" />
            </div>
            <h4 className="font-serif-title font-bold text-[#2D2424] dark:text-[#FAF7F2] text-sm mb-1">
              অনুশীলন কুইজ
            </h4>
            <p className="text-xs text-[#2D2424]/70 dark:text-[#FAF7F2]/70 leading-relaxed">
              কান্জি থেকে অর্থ, উচ্চারণ ও বাক্য পূরণের ইন্টারেক্টিভ কুইজ।
            </p>
          </div>

          <div
            onClick={() => setCurrentView('review')}
            className="p-5 rounded-2xl bg-white dark:bg-[#241F1E] border border-[#2D2424]/10 dark:border-[#FAF7F2]/10 shadow-xs hover:border-[#D2665E]/50 transition cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-[#D2665E] text-white flex items-center justify-center font-bold mb-3 group-hover:scale-105 transition">
              <Brain className="w-5 h-5" />
            </div>
            <h4 className="font-serif-title font-bold text-[#2D2424] dark:text-[#FAF7F2] text-sm mb-1">
              স্মার্ট রিভিশন ঝুড়ি
            </h4>
            <p className="text-xs text-[#2D2424]/70 dark:text-[#FAF7F2]/70 leading-relaxed">
              ভুল হওয়া শব্দগুলো বারবার স্মরণ করিয়ে দেওয়ার স্মার্ট সিস্টেম।
            </p>
          </div>
        </div>
      </div>

      {/* Categories Progress Breakdown */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base font-serif-title font-bold text-[#2D2424] dark:text-[#FAF7F2]">
            বিষয়ভিত্তিক অগ্রগতির চিত্র (Categories)
          </h3>
          <button
            onClick={() => setCurrentView('categories')}
            className="text-xs font-bold text-[#D2665E] hover:underline flex items-center gap-1"
          >
            <span>সবগুলো ক্যাটাগরি দেখুন</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {CATEGORIES.slice(0, 6).map((cat) => {
            const catKanji = ALL_KANJI.filter((k) => k.category === cat.id);
            const catLearned = catKanji.filter((k) =>
              userProgress.learnedKanjiIds.includes(k.id)
            ).length;
            const catPct =
              catKanji.length > 0
                ? Math.round((catLearned / catKanji.length) * 100)
                : 0;

            return (
              <div
                key={cat.id}
                onClick={() => setCurrentView('categories')}
                className="p-4 rounded-2xl bg-white dark:bg-[#241F1E] border border-[#2D2424]/10 dark:border-[#FAF7F2]/10 shadow-xs hover:border-[#D2665E]/50 transition cursor-pointer flex items-center justify-between"
              >
                <div>
                  <h4 className="font-serif-title font-bold text-xs text-[#2D2424] dark:text-[#FAF7F2]">
                    {langSettings.bn
                      ? cat.name.bn
                      : langSettings.en
                      ? cat.name.en
                      : cat.name.ja}
                  </h4>
                  <p className="text-[11px] text-[#2D2424]/60 dark:text-[#FAF7F2]/60 mt-0.5">
                    {catLearned} / {catKanji.length} সম্পন্ন
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full border-2 border-[#D2665E] flex items-center justify-center text-[11px] font-bold text-[#D2665E]">
                  {catPct}%
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
