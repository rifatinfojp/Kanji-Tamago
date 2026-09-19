import React from 'react';
import {
  Settings,
  Languages,
  Target,
  RotateCcw,
  Download,
  Upload,
  CheckCircle,
} from 'lucide-react';
import { AppLanguage, LanguageSettings, UserProgress } from '../types';
import {
  DEFAULT_USER_PROGRESS,
  saveLanguageSettings,
  saveUserProgress,
} from '../utils/storage';

interface SettingsViewProps {
  langSettings: LanguageSettings;
  setLangSettings: React.Dispatch<React.SetStateAction<LanguageSettings>>;
  userProgress: UserProgress;
  setUserProgress: React.Dispatch<React.SetStateAction<UserProgress>>;
}

export const SettingsView: React.FC<SettingsViewProps> = ({
  langSettings,
  setLangSettings,
  userProgress,
  setUserProgress,
}) => {
  const toggleLanguage = (lang: AppLanguage) => {
    setLangSettings((prev) => {
      const updated = { ...prev, [lang]: !prev[lang] };
      // Prevent turning off all languages
      if (!updated.bn && !updated.en && !updated.ja) return prev;
      saveLanguageSettings(updated);
      return updated;
    });
  };

  const handleGoalChange = (goal: number) => {
    const updated = { ...userProgress, dailyGoal: goal };
    setUserProgress(updated);
    saveUserProgress(updated);
  };

  const handleResetProgress = () => {
    if (
      window.confirm(
        'আপনি কি নিশ্চিত যে আপনার সমস্ত পড়াশোনা ও স্ট্রিক ডাটা রিসেট করতে চান?'
      )
    ) {
      setUserProgress(DEFAULT_USER_PROGRESS);
      saveUserProgress(DEFAULT_USER_PROGRESS);
    }
  };

  const handleExportData = () => {
    const dataStr =
      'data:text/json;charset=utf-8,' +
      encodeURIComponent(JSON.stringify(userProgress));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute(
      'download',
      `kanji_master_backup_${new Date().toISOString().split('T')[0]}.json`
    );
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6 pb-12 animate-fadeIn">
      <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#241F1E] border border-[#2D2424]/10 dark:border-[#FAF7F2]/10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-[#D2665E]/10 text-[#D2665E] flex items-center justify-center font-bold border border-[#D2665E]/20">
            <Settings className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-serif-title font-bold text-[#2D2424] dark:text-[#FAF7F2]">
              এপ সেটিংস ও কন্ট্রোল
            </h2>
            <p className="text-xs text-[#2D2424]/60 dark:text-[#FAF7F2]/60">
              ভাষা প্রদর্শন, দৈনিক টার্গেট ও ডাটা ব্যাকআপ পরিচালনা করুন
            </p>
          </div>
        </div>

        {/* Language Toggles Section */}
        <div className="p-5 rounded-2xl bg-[#F5F2ED] dark:bg-[#2D2726] border border-[#2D2424]/10 space-y-3">
          <div className="flex items-center gap-2 text-sm font-serif-title font-bold text-[#2D2424] dark:text-[#FAF7F2]">
            <Languages className="w-4 h-4 text-[#D2665E]" />
            <span>ভাষা প্রদর্শন সেট করুন (Language Visibility)</span>
          </div>
          <p className="text-xs text-[#2D2424]/60 dark:text-[#FAF7F2]/60">
            আপনি একসাথে বাংলা, ইংরেজি বা জাপানিজ ভাষা এক বা একাধিক অন/অফ রাখতে পারেন।
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            {[
              { id: 'bn' as AppLanguage, title: 'বাংলা (Bengali)', flag: '🇧🇩' },
              { id: 'en' as AppLanguage, title: 'English', flag: '🇺🇸' },
              { id: 'ja' as AppLanguage, title: '日本語 (Japanese)', flag: '🇯🇵' },
            ].map((l) => {
              const isActive = langSettings[l.id];
              return (
                <button
                  key={l.id}
                  onClick={() => toggleLanguage(l.id)}
                  className={`p-3.5 rounded-2xl border font-bold text-xs flex items-center justify-between transition ${
                    isActive
                      ? 'border-2 border-[#D2665E] bg-white dark:bg-[#241F1E] text-[#D2665E] shadow-xs'
                      : 'border-[#2D2424]/10 bg-[#FAF7F2]/50 dark:bg-[#241F1E]/50 text-[#2D2424]/40 dark:text-[#FAF7F2]/40'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span>{l.flag}</span>
                    <span>{l.title}</span>
                  </span>
                  {isActive && <CheckCircle className="w-4 h-4 text-[#D2665E]" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Daily Goal Section */}
        <div className="p-5 rounded-2xl bg-[#F5F2ED] dark:bg-[#2D2726] border border-[#2D2424]/10 space-y-3">
          <div className="flex items-center gap-2 text-sm font-serif-title font-bold text-[#2D2424] dark:text-[#FAF7F2]">
            <Target className="w-4 h-4 text-[#D2665E]" />
            <span>দৈনিক কান্জি টার্গেট</span>
          </div>

          <div className="flex gap-2 pt-1">
            {[5, 10, 15, 20].map((goal) => (
              <button
                key={goal}
                onClick={() => handleGoalChange(goal)}
                className={`flex-1 py-2.5 rounded-xl font-bold text-xs transition ${
                  userProgress.dailyGoal === goal
                    ? 'bg-[#2D2424] text-[#FAF7F2] dark:bg-[#FAF7F2] dark:text-[#2D2424] shadow-xs'
                    : 'bg-white dark:bg-[#241F1E] text-[#2D2424]/70 dark:text-[#FAF7F2]/70 border border-[#2D2424]/10'
                }`}
              >
                {goal}টি / দিন
              </button>
            ))}
          </div>
        </div>

        {/* Backup & Reset Data Section */}
        <div className="p-5 rounded-2xl bg-[#F5F2ED] dark:bg-[#2D2726] border border-[#2D2424]/10 space-y-3">
          <h3 className="text-sm font-serif-title font-bold text-[#2D2424] dark:text-[#FAF7F2]">
            পড়াশোনার ডাটা ব্যাকআপ ও রিসেট
          </h3>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleExportData}
              className="flex-1 py-3 px-4 rounded-xl bg-white dark:bg-[#241F1E] border border-[#2D2424]/10 text-[#2D2424] dark:text-[#FAF7F2] font-bold text-xs hover:bg-[#E5E1DA] transition flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4 text-[#D2665E]" />
              <span>অগ্রগতির ব্যাকআপ ডাউনলোড করুন</span>
            </button>

            <button
              onClick={handleResetProgress}
              className="py-3 px-4 rounded-xl bg-[#D2665E]/10 text-[#D2665E] font-bold text-xs hover:bg-[#D2665E]/20 transition flex items-center justify-center gap-2 border border-[#D2665E]/20"
            >
              <RotateCcw className="w-4 h-4" />
              <span>সমস্ত ডাটা রিসেট</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
