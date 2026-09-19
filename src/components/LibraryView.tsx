import React, { useState, useMemo } from 'react';
import { Search, Library, Bookmark, CheckCircle, Volume2 } from 'lucide-react';
import { JLPTLevel, LanguageSettings, UserProgress, KanjiItem } from '../types';
import { ALL_KANJI, searchKanji } from '../data/kanjiData';
import { KanjiDetailCard } from './KanjiDetailCard';
import { speakKanjiItem } from '../utils/audio';

interface LibraryViewProps {
  selectedLevel: JLPTLevel;
  langSettings: LanguageSettings;
  userProgress: UserProgress;
  setUserProgress: React.Dispatch<React.SetStateAction<UserProgress>>;
}

type TabFilter = 'all' | 'learned' | 'bookmarked';

export const LibraryView: React.FC<LibraryViewProps> = ({
  selectedLevel,
  langSettings,
  userProgress,
  setUserProgress,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<TabFilter>('all');
  const [selectedKanji, setSelectedKanji] = useState<KanjiItem | null>(null);

  const filteredKanji = useMemo(() => {
    let list = searchKanji(searchQuery, selectedLevel);

    if (activeTab === 'learned') {
      list = list.filter((k) => userProgress.learnedKanjiIds.includes(k.id));
    } else if (activeTab === 'bookmarked') {
      list = list.filter((k) => userProgress.bookmarkedKanjiIds.includes(k.id));
    }

    return list;
  }, [searchQuery, selectedLevel, activeTab, userProgress]);

  return (
    <div className="space-y-6 pb-12 animate-fadeIn max-w-6xl mx-auto">
      {/* Search Header */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#241F1E] border border-[#2D2424]/10 dark:border-[#FAF7F2]/10 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#D2665E]/10 text-[#D2665E] flex items-center justify-center font-bold border border-[#D2665E]/20">
              <Library className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-serif-title font-bold text-[#2D2424] dark:text-[#FAF7F2]">
                কান্জি অভিধান ও ডিরেক্টরি
              </h2>
              <p className="text-xs text-[#2D2424]/60 dark:text-[#FAF7F2]/60">
                সকল N5 ও N4 কান্জি খুঁজুন, শিখুন ও সংরক্ষণ করুন
              </p>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex bg-[#F5F2ED] dark:bg-[#2D2726] p-1 rounded-2xl text-xs font-bold border border-[#2D2424]/10">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 rounded-xl transition ${
                activeTab === 'all'
                  ? 'bg-[#2D2424] text-[#FAF7F2] dark:bg-[#FAF7F2] dark:text-[#2D2424] shadow-xs'
                  : 'text-[#2D2424]/70 dark:text-[#FAF7F2]/70'
              }`}
            >
              সকল ({ALL_KANJI.length})
            </button>
            <button
              onClick={() => setActiveTab('learned')}
              className={`px-3 py-1.5 rounded-xl transition ${
                activeTab === 'learned'
                  ? 'bg-[#D2665E] text-white shadow-xs'
                  : 'text-[#2D2424]/70 dark:text-[#FAF7F2]/70'
              }`}
            >
              শিখেছি ({userProgress.learnedKanjiIds.length})
            </button>
            <button
              onClick={() => setActiveTab('bookmarked')}
              className={`px-3 py-1.5 rounded-xl transition ${
                activeTab === 'bookmarked'
                  ? 'bg-[#2D2424] text-[#FAF7F2] dark:bg-[#FAF7F2] dark:text-[#2D2424] shadow-xs'
                  : 'text-[#2D2424]/70 dark:text-[#FAF7F2]/70'
              }`}
            >
              বুকমার্ক ({userProgress.bookmarkedKanjiIds.length})
            </button>
          </div>
        </div>

        {/* Search Input */}
        <div className="relative">
          <Search className="w-5 h-5 text-[#D2665E] absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="কান্জি, উচ্চারণ (Onyomi/Kunyomi), বাংলা বা ইংরেজি অর্থ দিয়ে খুঁজুন..."
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-[#F5F2ED] dark:bg-[#2D2726] border border-[#2D2424]/10 dark:border-[#FAF7F2]/10 text-sm font-medium text-[#2D2424] dark:text-[#FAF7F2] placeholder-[#2D2424]/40 dark:placeholder-[#FAF7F2]/40 focus:outline-none focus:ring-2 focus:ring-[#D2665E] transition"
          />
        </div>
      </div>

      {/* Selected Kanji Modal View */}
      {selectedKanji && (
        <div className="space-y-3">
          <div className="flex justify-between items-center px-1">
            <h3 className="text-sm font-serif-title font-bold text-[#2D2424] dark:text-[#FAF7F2]">
              বিস্তারিত তথ্য:
            </h3>
            <button
              onClick={() => setSelectedKanji(null)}
              className="text-xs font-bold text-[#D2665E] hover:underline"
            >
              বন্ধ করুন ✕
            </button>
          </div>
          <KanjiDetailCard
            kanjiItem={selectedKanji}
            langSettings={langSettings}
            userProgress={userProgress}
            setUserProgress={setUserProgress}
          />
        </div>
      )}

      {/* Kanji Directory Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {filteredKanji.map((item) => {
          const isLearned = userProgress.learnedKanjiIds.includes(item.id);
          const isBookmarked = userProgress.bookmarkedKanjiIds.includes(item.id);
          const isSelected = selectedKanji?.id === item.id;

          return (
            <div
              key={item.id}
              onClick={() => setSelectedKanji(item)}
              className={`p-4 rounded-2xl bg-white dark:bg-[#241F1E] border transition cursor-pointer flex flex-col items-center justify-between text-center relative group ${
                isSelected
                  ? 'border-2 border-[#D2665E] shadow-sm'
                  : 'border-[#2D2424]/10 dark:border-[#FAF7F2]/10 hover:border-[#D2665E]/50'
              }`}
            >
              <div className="flex items-center gap-1 absolute top-2 right-2">
                {isLearned && (
                  <CheckCircle className="w-3.5 h-3.5 text-[#D2665E]" />
                )}
                {isBookmarked && (
                  <Bookmark className="w-3.5 h-3.5 text-[#2D2424] dark:text-[#FAF7F2] fill-[#2D2424] dark:fill-[#FAF7F2]" />
                )}
              </div>

              <span className="text-3xl font-serif-jp font-bold text-[#2D2424] dark:text-[#FAF7F2] my-2 group-hover:scale-105 transition">
                {item.kanji}
              </span>

              <div className="text-[11px] font-semibold text-[#2D2424]/80 dark:text-[#FAF7F2]/80">
                {langSettings.bn
                  ? item.meaning.bn
                  : langSettings.en
                  ? item.meaning.en
                  : item.meaning.ja}
              </div>

              <div className="flex items-center justify-between w-full mt-2 pt-2 border-t border-[#2D2424]/10 dark:border-[#FAF7F2]/10 text-[10px] text-[#2D2424]/60 dark:text-[#FAF7F2]/60 font-serif-title font-bold">
                <span>
                  {item.tamagoLesson !== undefined
                    ? `JLPT ${item.level} · L${item.tamagoLesson}`
                    : `JLPT ${item.level}`}
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    speakKanjiItem(item, 'auto');
                  }}
                  className="hover:text-[#D2665E]"
                  title="কান্জি সঠিক উচ্চারণ শুনুন"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
