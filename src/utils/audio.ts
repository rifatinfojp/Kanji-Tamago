import { KanjiItem, Vocabulary, Sentence } from '../types';

/**
 * Canonical Pronunciation Map for Textbook (Kanji Tamago & JLPT N5/N4):
 * 
 * Defines the contextually appropriate representative pronunciation when a single Kanji
 * character is inspected or spoken in isolation:
 * - Compounds & textbook roots (e.g. 生 in 学生/先生 -> セイ, 学 in 学校/学生 -> ガク)
 * - Pure standalone nouns (e.g. 山 -> やま, 川 -> かわ, 水 -> みず, 雨 -> あめ, 車 -> くるま)
 * - Time & counter kanji (e.g. 時 -> ジ, 分 -> フン, 年 -> ネン, 才 -> サイ)
 */
export const KANJI_CANONICAL_PRONUNCIATIONS: Record<string, string> = {
  // N5 & Kanji Tamago Core
  '生': 'セイ',   // 学生, 先生, 生年月日 (prevents incorrect 'いきる' when okurigana is absent)
  '学': 'ガク',   // 学校, 学生, 大学 (prevents incorrect 'まなぶ' when okurigana 'ぶ' is absent)
  '校': 'コウ',   // 学校, 高校
  '語': 'ゴ',     // 日本語, 英語 (prevents 'かたる')
  '才': 'サイ',   // 〜才 (20才, 5才)
  '先': 'セン',   // 先生, 先週, 先月
  '名': 'な',     // 名前, 名刺 (also 'メイ')
  '本': 'ほん',   // 本, 日本
  '日': 'ひ',     // 日, 毎日
  '月': 'つき',   // 月, 今月
  '火': 'ひ',     // 火
  '水': 'みず',   // 水
  '木': 'き',     // 木
  '金': 'かね',   // お金, 金
  '土': 'つち',   // 土
  '山': 'やま',   // 山
  '川': 'かわ',   // 川
  '田': 'た',     // 田中, 山田, 田んぼ
  '人': 'ひと',   // 人 (日本人 -> じん)
  '男': 'おとこ', // 男の人
  '女': 'おんな', // 女の人
  '子': 'こ',     // 子供
  '私': 'わたし', // 私
  '友': 'とも',   // 友達
  '何': 'なに',   // 何
  '時': 'ジ',     // 1時, 時間
  '分': 'フン',   // 5分, 半分
  '半': 'ハン',   // 3時半
  '間': 'カン',   // 1時間
  '年': 'ネン',   // 1年, 去年
  '今': 'いま',   // 今, 今日
  '前': 'まえ',   // 前, 名前, 午前
  '後': 'あと',   // 後ろ, 午後
  '午': 'ゴ',     // 午前, 午後
  '毎': 'マイ',   // 毎日, 毎週
  '週': 'シュウ', // 今週, 先週
  '電': 'デン',   // 電車, 電気, 電話
  '車': 'くるま', // 車
  '駅': 'エキ',   // 駅
  '店': 'みせ',   // 店, 店員
  '社': 'シャ',   // 会社, 神社
  '会': 'カイ',   // 会社, 会う
  '員': 'イン',   // 会社員, 店員
  '病': 'ビョウ', // 病院, 病気
  '院': 'イン',   // 病院, 大学院
  '天': 'テン',   // 天気
  '気': 'キ',     // 天気, 元気
  '雨': 'あめ',   // 雨
  '道': 'みち',   // 道
  '町': 'まち',   // 町
  '花': 'はな',   // 花
  '魚': 'さかな', // 魚
  '肉': 'ニク',   // 肉, 牛肉
  '茶': 'チャ',   // お茶
  '飯': 'はん',   // ご飯
  '物': 'もの',   // 食べ物, 飲み物
  '食': 'ショク', // 食事, 食堂 (食べる in vocab)
  '飲': 'イン',   // 飲み物, 飲料 (飲む in vocab)
  '買': 'か',     // 買う, 買い物
  '見': 'み',     // 見る
  '聞': 'き',     // 聞く, 新聞
  '書': 'か',     // 書く
  '読': 'よ',     // 読む
  '話': 'はなし', // 話す, 電話
  '行': 'コウ',   // 行く, 旅行, 銀行
  '来': 'ライ',   // 来る, 来週
  '帰': 'かえ',   // 帰る
  '休': 'やす',   // 休み, 休日
  '立': 'た',     // 立つ
  '出': 'で',     // 出る, 出口
  '入': 'はい',   // 入る, 入口
  '上': 'うえ',   // 上
  '下': 'した',   // 下
  '中': 'なか',   // 中
  '外': 'そと',   // 外, 外国
  '右': 'みぎ',   // 右
  '左': 'ひだり', // 左
  '北': 'きた',   // 北
  '南': 'みなみ', // 南
  '東': 'ひがし', // 東, 東京
  '西': 'にし',   // 西
  '大': 'おお',   // 大きい, 大学
  '小': 'ちい',   // 小さい, 小学校
  '高': 'たか',   // 高い, 高校
  '安': 'やす',   // 安い, 安心
  '新': 'あたら', // 新しい, 新聞
  '古': 'ふる',   // 古い
  '長': 'なが',   // 長い, 社長
  '多': 'おお',   // 多い
  '少': 'すく',   // 少ない, 少し
  '白': 'しろ',   // 白い
  '黒': 'くろ',   // 黒い
  '赤': 'あか',   // 赤い
  '青': 'あお',   // 青い
  '国': 'くに',   // 国, 外国
  '足': 'あし',   // 足
  '手': 'て',     // 手, 上手
  '目': 'め',     // 目
  '耳': 'みみ',   // 耳
  '口': 'くち',   // 口, 入口

  // Kanji Tamago Lesson & Pre-Intermediate Kanji
  '局': 'キョク', // 郵便局, 薬局
  '歯': 'は',     // 歯, 歯医者
  '医': 'イ',     // 医者, 医院
  '者': 'シャ',   // 医者, 若者
  '光': 'ひかり', // 光
  '止': 'と',     // 止まる, 止める
  '台': 'ダイ',   // 台所, 1台
  '低': 'ひく',   // 低い
  '冷': 'つめ',   // 冷たい
  '交': 'コウ',   // 交番, 交通
  '通': 'ツウ',   // 通る, 交通
  '死': 'し',     // 死ぬ
  '度': 'ド',     // 今度, 温度
  '強': 'つよ',   // 強い, 勉強
  '心': 'こころ', // 心, 心配, 安心
  '思': 'おも',   // 思う, 思い出
  '家': 'いえ',   // 家, 家族
  '世': 'セ',     // 世界, 世話
  '界': 'カイ',   // 世界
  '教': 'きょう', // 教える, 教室
  '室': 'シツ',   // 教室
  '不': 'フ',     // 不便, 不安
  '作': 'つく',   // 作る, 作文
  '用': 'ヨウ',   // 用事, 利用
  '公': 'コウ',   // 公園
  '持': 'も',     // 持つ, 気持ち
  '野': 'ヤ',     // 野菜, 野球
  '正': 'ただ',   // 正しい, お正月
  '屋': 'や',     // 本屋, 部屋
  '理': 'リ',     // 料理, 理由
  '料': 'リョウ', // 料理, 料金
};

/**
 * Japanese Phonetic Cleaner:
 * Cleans dictionary formatting such as okurigana separator dots (e.g. 'た.べる' -> 'たべる')
 * and hyphen indicators for affixes (e.g. '-じ' -> 'じ').
 */
export function cleanKanaReading(reading: string): string {
  if (!reading) return '';
  return reading.replace(/[.\-・]/g, '').trim();
}

/**
 * Resolves the contextually accurate canonical pronunciation for a standalone Kanji:
 * 1. Checks explicit canonical pronunciation map (e.g. 生 -> セイ, 学 -> ガク)
 * 2. If kunyomi has an okurigana separator dot (indicating an inflected verb/adjective),
 *    prefers Onyomi for the standalone kanji unless only Kunyomi exists.
 * 3. Pure native nouns (no dot in kunyomi, like 山, 川, 水) use Kunyomi.
 * 4. Fallback to first available reading or character itself.
 */
export function getCanonicalPronunciation(item: KanjiItem): string {
  if (KANJI_CANONICAL_PRONUNCIATIONS[item.kanji]) {
    return KANJI_CANONICAL_PRONUNCIATIONS[item.kanji];
  }

  const firstKun = item.kunyomi && item.kunyomi[0] ? item.kunyomi[0] : '';
  const firstOn = item.onyomi && item.onyomi[0] ? item.onyomi[0] : '';

  // If kunyomi contains a dot '.' (okurigana separator), the standalone kanji
  // does not carry the okurigana suffix, so Onyomi is usually preferred.
  if (firstKun.includes('.')) {
    if (firstOn) {
      return cleanKanaReading(firstOn);
    }
    return cleanKanaReading(firstKun);
  }

  // If kunyomi is a standalone noun (no dot), use it
  if (firstKun) {
    return cleanKanaReading(firstKun);
  }

  if (firstOn) {
    return cleanKanaReading(firstOn);
  }

  return item.kanji;
}

/**
 * Finds the most natural Japanese speech synthesis voice.
 * Prioritizes high-quality native Japanese voices like Google 日本語,
 * Apple Kyoko/Otoya, or Microsoft Nanami/Keita.
 */
function getBestJapaneseVoice(): SpeechSynthesisVoice | null {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return null;
  }

  const voices = window.speechSynthesis.getVoices();
  const jaVoices = voices.filter(
    (v) => v.lang.startsWith('ja') || v.lang.includes('JP') || v.lang.includes('jp')
  );

  if (jaVoices.length === 0) return null;

  const preferredVoice = jaVoices.find(
    (v) =>
      v.name.includes('Google') ||
      v.name.includes('Kyoko') ||
      v.name.includes('Otoya') ||
      v.name.includes('Nanami') ||
      v.name.includes('Keita') ||
      v.name.includes('Natural')
  );

  return preferredVoice || jaVoices[0];
}

/**
 * Core speech dispatcher using Web Speech API with contextually accurate Japanese pronunciation.
 */
export function speakJapanese(text: string, rate: number = 0.88): void {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    console.warn('Speech synthesis is not supported in this environment.');
    return;
  }

  const cleanedText = cleanKanaReading(text);
  if (!cleanedText) return;

  window.speechSynthesis.cancel(); // Stop any pending utterances

  const utterance = new SpeechSynthesisUtterance(cleanedText);
  utterance.lang = 'ja-JP';
  utterance.rate = rate; // Slightly paced for instructional clarity
  utterance.pitch = 1.0;

  const jaVoice = getBestJapaneseVoice();
  if (jaVoice) {
    utterance.voice = jaVoice;
  }

  window.speechSynthesis.speak(utterance);
}

/**
 * Japanese Tutor Pronunciation Engine for Kanji:
 * 
 * Rules:
 * - 'auto': Uses getCanonicalPronunciation (e.g. 生 -> 'セイ', 学 -> 'ガク', 水 -> 'みず')
 * - 'kunyomi': Specifically pronounces the cleaned Kunyomi reading
 * - 'onyomi': Specifically pronounces the cleaned Onyomi reading
 */
export function speakKanjiItem(
  item: KanjiItem,
  mode: 'auto' | 'kunyomi' | 'onyomi' = 'auto'
): void {
  if (mode === 'kunyomi' && item.kunyomi && item.kunyomi.length > 0) {
    speakJapanese(cleanKanaReading(item.kunyomi[0]));
    return;
  }

  if (mode === 'onyomi' && item.onyomi && item.onyomi.length > 0) {
    speakJapanese(cleanKanaReading(item.onyomi[0]));
    return;
  }

  // Auto mode: Uses canonical representative textbook pronunciation
  const canonicalReading = getCanonicalPronunciation(item);
  speakJapanese(canonicalReading);
}

/**
 * Compound Words (熟語 / Jukugo) & Vocabulary Pronunciation:
 * 
 * Prioritizes the exact Kana reading to guarantee accurate pronunciation:
 * - Ensures correct Onyomi combinations (e.g. 郵便局 -> ゆうびんきょく)
 * - Handles rendaku (sequential voicing) and gemination (促音)
 * - Resolves irregular readings (熟字訓: 今日 -> きょう, 明日 -> あした)
 * - Verbs with okurigana (e.g. 生きる -> いきる, 学生 -> がくせい, 先生 -> せんせい)
 */
export function speakVocab(vocab: Vocabulary | { kanji: string; reading?: string }): void {
  if (vocab.reading) {
    speakJapanese(cleanKanaReading(vocab.reading));
  } else {
    speakJapanese(vocab.kanji);
  }
}

/**
 * Contextual Sentence Pronunciation:
 * Follows standard Japanese grammatical flow, handling particles (は/へ/を)
 * and natural clause pauses.
 */
export function speakSentence(sentence: Sentence | { ja: string; reading?: string }): void {
  if (sentence.ja) {
    speakJapanese(sentence.ja, 0.85);
  } else if (sentence.reading) {
    speakJapanese(sentence.reading, 0.85);
  }
}

// Pre-load speech voices
if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = () => {
    window.speechSynthesis.getVoices();
  };
}
