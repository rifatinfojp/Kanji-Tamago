import React, { useState, useEffect } from 'react';
import { AppView, JLPTLevel, LanguageSettings, UserProgress } from './types';
import {
  loadLanguageSettings,
  loadUserProgress,
  saveLanguageSettings,
  saveUserProgress,
} from './utils/storage';
import { Navbar } from './components/Navbar';
import { DashboardView } from './components/DashboardView';
import { LearnView } from './components/LearnView';
import { CategoryView } from './components/CategoryView';
import { QuizView } from './components/QuizView';
import { ReviewView } from './components/ReviewView';
import { LibraryView } from './components/LibraryView';
import { SettingsView } from './components/SettingsView';

export function App() {
  const [currentView, setCurrentView] = useState<AppView>('dashboard');
  const [selectedLevel, setSelectedLevel] = useState<JLPTLevel>('ALL');
  const [langSettings, setLangSettings] = useState<LanguageSettings>(loadLanguageSettings);
  const [userProgress, setUserProgress] = useState<UserProgress>(loadUserProgress);

  // Sync state to local storage when changed
  useEffect(() => {
    saveLanguageSettings(langSettings);
  }, [langSettings]);

  useEffect(() => {
    saveUserProgress(userProgress);
  }, [userProgress]);

  const reviewQueueCount = Object.keys(userProgress.srsItems).length;

  return (
    <div className="min-h-screen bg-[#FAF7F2] dark:bg-[#1A1615] text-[#2D2424] dark:text-[#FAF7F2] font-sans antialiased selection:bg-[#D2665E] selection:text-white">
      {/* Navigation Bar Header */}
      <Navbar
        currentView={currentView}
        setCurrentView={setCurrentView}
        selectedLevel={selectedLevel}
        setSelectedLevel={setSelectedLevel}
        streakDays={userProgress.streakDays}
        langSettings={langSettings}
        setLangSettings={setLangSettings}
        reviewQueueCount={reviewQueueCount}
      />

      {/* Main View Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        {currentView === 'dashboard' && (
          <DashboardView
            userProgress={userProgress}
            setUserProgress={setUserProgress}
            selectedLevel={selectedLevel}
            setCurrentView={setCurrentView}
            langSettings={langSettings}
          />
        )}

        {currentView === 'learn' && (
          <LearnView
            selectedLevel={selectedLevel}
            setSelectedLevel={setSelectedLevel}
            langSettings={langSettings}
            userProgress={userProgress}
            setUserProgress={setUserProgress}
          />
        )}

        {currentView === 'categories' && (
          <CategoryView
            selectedLevel={selectedLevel}
            langSettings={langSettings}
            userProgress={userProgress}
            setUserProgress={setUserProgress}
          />
        )}

        {currentView === 'quiz' && (
          <QuizView
            selectedLevel={selectedLevel}
            langSettings={langSettings}
            userProgress={userProgress}
            setUserProgress={setUserProgress}
          />
        )}

        {currentView === 'review' && (
          <ReviewView
            selectedLevel={selectedLevel}
            langSettings={langSettings}
            userProgress={userProgress}
            setUserProgress={setUserProgress}
          />
        )}

        {currentView === 'library' && (
          <LibraryView
            selectedLevel={selectedLevel}
            langSettings={langSettings}
            userProgress={userProgress}
            setUserProgress={setUserProgress}
          />
        )}

        {currentView === 'settings' && (
          <SettingsView
            langSettings={langSettings}
            setLangSettings={setLangSettings}
            userProgress={userProgress}
            setUserProgress={setUserProgress}
          />
        )}
      </main>

      {/* Subtle Footer */}
      <footer className="border-t border-[#2D2424]/10 dark:border-[#FAF7F2]/10 py-6 mt-12 bg-white dark:bg-[#241F1E] text-center text-xs text-[#2D2424]/60 dark:text-[#FAF7F2]/60 font-serif-title">
        <p>
          © KanjiMaster N5 & N4 | 日本語漢字学習アプリ — বাংলা, English ও 日本語
          সহায়িকা
        </p>
      </footer>
    </div>
  );
}

export default App;
