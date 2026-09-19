export type JLPTLevel = 'N5' | 'N4' | 'TAMAGO' | 'ALL';

export type CategoryId =
  | 'time_numbers'
  | 'people_family'
  | 'school_study'
  | 'work_business'
  | 'travel_directions'
  | 'daily_life'
  | 'nature_weather'
  | 'food_drink'
  | 'actions_verbs'
  | 'mind_emotions';

export interface CategoryInfo {
  id: CategoryId;
  name: {
    bn: string;
    en: string;
    ja: string;
  };
  icon: string;
  color: string;
  description: {
    bn: string;
    en: string;
    ja: string;
  };
}

export interface Vocabulary {
  kanji: string;
  reading: string;
  meaning: {
    bn: string;
    en: string;
    ja: string;
  };
}

export interface Sentence {
  ja: string;
  reading: string;
  translation: {
    bn: string;
    en: string;
    ja: string;
  };
}

export interface KanjiItem {
  id: string;
  kanji: string;
  level: 'N5' | 'N4';
  category: CategoryId;
  isTamago?: boolean;
  tamagoLesson?: number;
  onyomi: string[];
  kunyomi: string[];
  strokeCount: number;
  meaning: {
    bn: string;
    en: string;
    ja: string;
  };
  mnemonic?: {
    bn: string;
    en: string;
    ja: string;
  };
  vocabulary: Vocabulary[];
  sentences: Sentence[];
}

export type AppLanguage = 'bn' | 'en' | 'ja';

export interface LanguageSettings {
  bn: boolean;
  en: boolean;
  ja: boolean;
}

export interface SRSItem {
  kanjiId: string;
  mistakeCount: number;
  correctCount: number;
  lastReviewed: string; // ISO string
  nextReviewDays: number; // SRS interval
}

export interface UserProgress {
  learnedKanjiIds: string[];
  bookmarkedKanjiIds: string[];
  srsItems: Record<string, SRSItem>;
  dailyGoal: number;
  todayCompletedIds: string[];
  lastActiveDate: string; // YYYY-MM-DD
  streakDays: number;
  quizHistory: {
    id: string;
    date: string;
    score: number;
    total: number;
    level: string;
    mode: string;
  }[];
}

export type AppView =
  | 'dashboard'
  | 'learn'
  | 'categories'
  | 'quiz'
  | 'review'
  | 'library'
  | 'settings';

export type StudyMode = 'sequential' | 'random' | 'category';
