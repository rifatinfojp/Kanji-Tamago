import { LanguageSettings, SRSItem, UserProgress } from '../types';

const STORAGE_KEY_PROGRESS = 'kanji_master_user_progress_v1';
const STORAGE_KEY_LANG = 'kanji_master_language_settings_v1';

export const DEFAULT_LANG_SETTINGS: LanguageSettings = {
  bn: true,
  en: true,
  ja: false,
};

export const DEFAULT_USER_PROGRESS: UserProgress = {
  learnedKanjiIds: [],
  bookmarkedKanjiIds: [],
  srsItems: {},
  dailyGoal: 5,
  todayCompletedIds: [],
  lastActiveDate: new Date().toISOString().split('T')[0],
  streakDays: 1,
  quizHistory: [],
};

export function loadLanguageSettings(): LanguageSettings {
  try {
    const saved = localStorage.getItem(STORAGE_KEY_LANG);
    if (saved) {
      const parsed = JSON.parse(saved);
      return {
        bn: parsed.bn ?? true,
        en: parsed.en ?? true,
        ja: parsed.ja ?? false,
      };
    }
  } catch (e) {
    console.error('Failed to load language settings:', e);
  }
  return DEFAULT_LANG_SETTINGS;
}

export function saveLanguageSettings(settings: LanguageSettings): void {
  try {
    localStorage.setItem(STORAGE_KEY_LANG, JSON.stringify(settings));
  } catch (e) {
    console.error('Failed to save language settings:', e);
  }
}

export function loadUserProgress(): UserProgress {
  try {
    const saved = localStorage.getItem(STORAGE_KEY_PROGRESS);
    if (saved) {
      const parsed: UserProgress = JSON.parse(saved);
      const today = new Date().toISOString().split('T')[0];

      // Calculate streak logic
      if (parsed.lastActiveDate !== today) {
        const lastDate = new Date(parsed.lastActiveDate);
        const currentDate = new Date(today);
        const diffDays = Math.floor(
          (currentDate.getTime() - lastDate.getTime()) / (1000 * 3600 * 24)
        );

        if (diffDays === 1) {
          // Continuous day, maintain streak
        } else if (diffDays > 1) {
          // Streak broken
          parsed.streakDays = 1;
        }
        // Reset today's completed list for new calendar day
        parsed.todayCompletedIds = [];
        parsed.lastActiveDate = today;
      }

      return {
        ...DEFAULT_USER_PROGRESS,
        ...parsed,
      };
    }
  } catch (e) {
    console.error('Failed to load user progress:', e);
  }
  return DEFAULT_USER_PROGRESS;
}

export function saveUserProgress(progress: UserProgress): void {
  try {
    localStorage.setItem(STORAGE_KEY_PROGRESS, JSON.stringify(progress));
  } catch (e) {
    console.error('Failed to save user progress:', e);
  }
}

export function recordKanjiLearned(kanjiId: string, progress: UserProgress): UserProgress {
  const today = new Date().toISOString().split('T')[0];
  const isAlreadyLearned = progress.learnedKanjiIds.includes(kanjiId);
  const updatedLearned = isAlreadyLearned
    ? progress.learnedKanjiIds
    : [...progress.learnedKanjiIds, kanjiId];

  const isTodayCompleted = progress.todayCompletedIds.includes(kanjiId);
  const updatedTodayCompleted = isTodayCompleted
    ? progress.todayCompletedIds
    : [...progress.todayCompletedIds, kanjiId];

  const newProgress: UserProgress = {
    ...progress,
    learnedKanjiIds: updatedLearned,
    todayCompletedIds: updatedTodayCompleted,
    lastActiveDate: today,
  };

  saveUserProgress(newProgress);
  return newProgress;
}

export function toggleBookmark(kanjiId: string, progress: UserProgress): UserProgress {
  const isBookmarked = progress.bookmarkedKanjiIds.includes(kanjiId);
  const updated = isBookmarked
    ? progress.bookmarkedKanjiIds.filter((id) => id !== kanjiId)
    : [...progress.bookmarkedKanjiIds, kanjiId];

  const newProgress = {
    ...progress,
    bookmarkedKanjiIds: updated,
  };

  saveUserProgress(newProgress);
  return newProgress;
}

export function addSRSMistake(kanjiId: string, progress: UserProgress): UserProgress {
  const existing: SRSItem = progress.srsItems[kanjiId] || {
    kanjiId,
    mistakeCount: 0,
    correctCount: 0,
    lastReviewed: new Date().toISOString(),
    nextReviewDays: 1,
  };

  const updatedItem: SRSItem = {
    ...existing,
    mistakeCount: existing.mistakeCount + 1,
    lastReviewed: new Date().toISOString(),
    nextReviewDays: 1, // reset interval to 1 day on mistake
  };

  const newProgress: UserProgress = {
    ...progress,
    srsItems: {
      ...progress.srsItems,
      [kanjiId]: updatedItem,
    },
  };

  saveUserProgress(newProgress);
  return newProgress;
}

export function recordSRSSuccess(kanjiId: string, progress: UserProgress): UserProgress {
  const existing = progress.srsItems[kanjiId];
  if (!existing) return progress;

  const correctCount = existing.correctCount + 1;
  // Increase interval exponentially on success
  const nextReviewDays = existing.nextReviewDays * 2;

  let newSrsItems = { ...progress.srsItems };

  // If answered correctly 3 times in a row or mistake count reduced, mark as mastered/cleared from active review
  if (correctCount >= 3) {
    delete newSrsItems[kanjiId];
  } else {
    newSrsItems[kanjiId] = {
      ...existing,
      correctCount,
      lastReviewed: new Date().toISOString(),
      nextReviewDays,
    };
  }

  const newProgress: UserProgress = {
    ...progress,
    srsItems: newSrsItems,
  };

  saveUserProgress(newProgress);
  return newProgress;
}
