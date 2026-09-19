import { CategoryId, JLPTLevel, KanjiItem } from '../types';
import { N5_KANJI_LIST } from './n5Kanji';
import { N4_KANJI_PART1 } from './n4KanjiPart1';
import { N4_KANJI_PART2 } from './n4KanjiPart2';
import {
  TAMAGO_CHAR_TO_LESSON_MAP,
  TAMAGO_LESSONS,
  TAMAGO_SUPPLEMENTARY_KANJI,
  TamagoLessonInfo,
} from './tamagoData';

// Combine all kanji lists ensuring exact Tamago mapping
const baseList: KanjiItem[] = [
  ...N5_KANJI_LIST,
  ...N4_KANJI_PART1,
  ...N4_KANJI_PART2,
  ...TAMAGO_SUPPLEMENTARY_KANJI,
];

const uniqueMap = new Map<string, KanjiItem>();
baseList.forEach((item) => {
  if (!uniqueMap.has(item.kanji)) {
    const lesson = TAMAGO_CHAR_TO_LESSON_MAP[item.kanji];
    uniqueMap.set(item.kanji, {
      ...item,
      isTamago: lesson !== undefined,
      tamagoLesson: lesson,
    });
  }
});

export const ALL_KANJI: KanjiItem[] = Array.from(uniqueMap.values());

export { TAMAGO_LESSONS };
export type { TamagoLessonInfo };

export function getKanjiByTamagoLesson(lessonId: number): KanjiItem[] {
  return ALL_KANJI.filter((k) => k.tamagoLesson === lessonId);
}

export function getKanjiByLevel(level: JLPTLevel): KanjiItem[] {
  if (level === 'ALL') return ALL_KANJI;
  if (level === 'TAMAGO') return ALL_KANJI.filter((k) => k.isTamago);
  return ALL_KANJI.filter((k) => k.level === level);
}

export function getKanjiByCategory(category: CategoryId, level: JLPTLevel = 'ALL'): KanjiItem[] {
  return ALL_KANJI.filter((k) => {
    const levelMatch =
      level === 'ALL'
        ? true
        : level === 'TAMAGO'
        ? k.isTamago
        : k.level === level;
    return levelMatch && k.category === category;
  });
}

export function getKanjiById(id: string): KanjiItem | undefined {
  return ALL_KANJI.find((k) => k.id === id);
}

export function searchKanji(query: string, level: JLPTLevel = 'ALL'): KanjiItem[] {
  const q = query.trim().toLowerCase();
  if (!q) return getKanjiByLevel(level);

  return ALL_KANJI.filter((k) => {
    if (level === 'TAMAGO' && !k.isTamago) return false;
    if (level !== 'ALL' && level !== 'TAMAGO' && k.level !== level) return false;

    const matchKanji = k.kanji.includes(q);
    const matchOnyomi = k.onyomi.some((o) => o.includes(q));
    const matchKunyomi = k.kunyomi.some((ku) => ku.includes(q));
    const matchBn = k.meaning.bn.toLowerCase().includes(q);
    const matchEn = k.meaning.en.toLowerCase().includes(q);
    const matchJa = k.meaning.ja.toLowerCase().includes(q);
    const matchVocab = k.vocabulary.some(
      (v) =>
        v.kanji.includes(q) ||
        v.reading.includes(q) ||
        v.meaning.bn.toLowerCase().includes(q) ||
        v.meaning.en.toLowerCase().includes(q)
    );

    return (
      matchKanji ||
      matchOnyomi ||
      matchKunyomi ||
      matchBn ||
      matchEn ||
      matchJa ||
      matchVocab
    );
  });
}

export function getRandomKanjiSet(
  count: number,
  level: JLPTLevel = 'ALL',
  categoryId?: CategoryId
): KanjiItem[] {
  let pool = ALL_KANJI;

  if (level === 'TAMAGO') {
    pool = pool.filter((k) => k.isTamago);
  } else if (level !== 'ALL') {
    pool = pool.filter((k) => k.level === level);
  }

  if (categoryId) {
    pool = pool.filter((k) => k.category === categoryId);
  }

  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}
