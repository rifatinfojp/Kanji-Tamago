import React from 'react';
import {
  BookOpen,
  LayoutDashboard,
  Brain,
  HelpCircle,
  Grid,
  Library,
  Flame,
  Settings,
  Languages,
} from 'lucide-react';
import { AppLanguage, AppView, JLPTLevel, LanguageSettings } from '../types';

interface NavbarProps {
  currentView: AppView;
  setCurrentView: (view: AppView) => void;
  selectedLevel: JLPTLevel;
  setSelectedLevel: (level: JLPTLevel) => void;
  streakDays: number;
  langSettings: LanguageSettings;
  setLangSettings: React.Dispatch<React.SetStateAction<LanguageSettings>>;
  reviewQueueCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  setCurrentView,
  selectedLevel,
  setSelectedLevel,
  streakDays,
  langSettings,
  setLangSettings,
  reviewQueueCount,
}) => {
  const toggleLang = (lang: AppLanguage) => {
    setLangSettings((prev) => {
      const next = { ...prev, [lang]: !prev[lang] };
      // Ensure at least one language is active
      if (!next.bn && !next.en && !next.ja) {
        return prev;
      }
      return next;
    });
  };

  const navItems = [
    { id: 'dashboard' as AppView, label: 'ড্যাশবোর্ড', icon: LayoutDashboard },
    { id: 'learn' as AppView, label: 'শিখুন', icon: BookOpen },
    { id: 'categories' as AppView, label: 'টপিক', icon: Grid },
    { id: 'quiz' as AppView, label: 'কুইজ', icon: HelpCircle },
    {
      id: 'review' as AppView,
      label: 'স্মার্ট রিভিউ',
      icon: Brain,
      badge: reviewQueueCount > 0 ? reviewQueueCount : undefined,
    },
    { id: 'library' as AppView, label: 'লাইব্রেরি', icon: Library },
    { id: 'settings' as AppView, label: 'সেটিংস', icon: Settings },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 dark:bg-[#1A1615]/95 backdrop-blur-md border-b border-[#2D2424]/10 dark:border-[#FAF7F2]/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div
            onClick={() => setCurrentView('dashboard')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-full bg-[#D2665E] flex items-center justify-center text-white font-serif-jp text-xl shadow-xs group-hover:scale-105 transition-transform border border-white/20">
              漢
            </div>
            <div>
              <h1 className="font-serif-title font-bold text-[#2D2424] dark:text-[#FAF7F2] text-lg leading-tight tracking-tight">
                KanjiMaster
              </h1>
              <p className="text-[11px] text-[#D2665E] font-medium tracking-wide">
                N5 & N4 কান্জি শিক্ষা
              </p>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentView(item.id)}
                  className={`relative flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold transition ${
                    isActive
                      ? 'bg-[#2D2424] text-[#FAF7F2] dark:bg-[#FAF7F2] dark:text-[#2D2424] shadow-xs'
                      : 'text-[#2D2424]/70 dark:text-[#FAF7F2]/70 hover:bg-[#2D2424]/5 dark:hover:bg-[#FAF7F2]/10 hover:text-[#2D2424] dark:hover:text-[#FAF7F2]'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                  {item.badge !== undefined && (
                    <span className="ml-1 px-1.5 py-0.5 text-[10px] font-bold rounded-full bg-[#D2665E] text-white">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Controls: Level Switcher & Languages */}
          <div className="flex items-center gap-2">
            {/* Streak Badge */}
            <div
              className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#F5F2ED] dark:bg-[#2D2726] text-[#2D2424] dark:text-[#FAF7F2] border border-[#2D2424]/10 dark:border-[#FAF7F2]/10 text-xs font-bold"
              title="দৈনিক ধারাবাহিকতা (Daily Streak)"
            >
              <Flame className="w-4 h-4 text-[#D2665E] fill-[#D2665E]" />
              <span>{streakDays} দিন</span>
            </div>

            {/* Level Selector Pill */}
            <div className="flex bg-[#F5F2ED] dark:bg-[#2D2726] p-0.5 rounded-lg border border-[#2D2424]/10 dark:border-[#FAF7F2]/10 text-xs font-semibold">
              {(
                [
                  { id: 'ALL', label: 'ALL' },
                  { id: 'N5', label: 'N5' },
                  { id: 'N4', label: 'N4' },
                  { id: 'TAMAGO', label: '漢字たまご' },
                ] as { id: JLPTLevel; label: string }[]
              ).map((lvl) => (
                <button
                  key={lvl.id}
                  onClick={() => setSelectedLevel(lvl.id)}
                  className={`px-2 py-1 rounded-md transition ${
                    selectedLevel === lvl.id
                      ? 'bg-[#2D2424] text-[#FAF7F2] dark:bg-[#FAF7F2] dark:text-[#2D2424] font-bold shadow-xs'
                      : 'text-[#2D2424]/60 dark:text-[#FAF7F2]/60 hover:text-[#2D2424] dark:hover:text-[#FAF7F2]'
                  }`}
                  title={lvl.id === 'TAMAGO' ? 'Kanji Tamago (漢字たまご) textbook list' : `JLPT ${lvl.label}`}
                >
                  {lvl.label}
                </button>
              ))}
            </div>

            {/* Multi-language Toggles */}
            <div className="hidden sm:flex items-center gap-1 border-l border-[#2D2424]/10 dark:border-[#FAF7F2]/10 pl-2">
              <Languages className="w-4 h-4 text-[#2D2424]/40 dark:text-[#FAF7F2]/40 mr-0.5" />
              <button
                onClick={() => toggleLang('bn')}
                className={`px-2 py-1 text-xs font-medium rounded-md transition ${
                  langSettings.bn
                    ? 'bg-[#D2665E] text-white font-bold'
                    : 'bg-[#F5F2ED] dark:bg-[#2D2726] text-[#2D2424]/60 dark:text-[#FAF7F2]/60 hover:text-[#2D2424]'
                }`}
                title="বাংলা অন/অফ"
              >
                বাংলা
              </button>
              <button
                onClick={() => toggleLang('en')}
                className={`px-2 py-1 text-xs font-medium rounded-md transition ${
                  langSettings.en
                    ? 'bg-[#2D2424] text-white dark:bg-[#FAF7F2] dark:text-[#2D2424] font-bold'
                    : 'bg-[#F5F2ED] dark:bg-[#2D2726] text-[#2D2424]/60 dark:text-[#FAF7F2]/60 hover:text-[#2D2424]'
                }`}
                title="English ON/OFF"
              >
                EN
              </button>
              <button
                onClick={() => toggleLang('ja')}
                className={`px-2 py-1 text-xs font-medium rounded-md transition ${
                  langSettings.ja
                    ? 'bg-[#D2665E] text-white font-bold'
                    : 'bg-[#F5F2ED] dark:bg-[#2D2726] text-[#2D2424]/60 dark:text-[#FAF7F2]/60 hover:text-[#2D2424]'
                }`}
                title="日本語 ON/OFF"
              >
                日本語
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Row */}
        <div className="md:hidden flex items-center justify-between py-2 border-t border-[#2D2424]/10 dark:border-[#FAF7F2]/10 overflow-x-auto no-scrollbar gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setCurrentView(item.id)}
                className={`flex-shrink-0 flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium ${
                  isActive
                    ? 'bg-[#2D2424] text-[#FAF7F2] dark:bg-[#FAF7F2] dark:text-[#2D2424] font-bold'
                    : 'text-[#2D2424]/70 dark:text-[#FAF7F2]/70'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{item.label}</span>
                {item.badge !== undefined && (
                  <span className="px-1 py-0.2 text-[9px] rounded-full bg-[#D2665E] text-white">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
