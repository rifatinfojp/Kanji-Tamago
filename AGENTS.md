# Expert Japanese Language Tutor Guidelines

This file records persistent rules and pronunciation guidelines for the Japanese Kanji & Language learning application.

## Pronunciation & Reading Rules

1. **Contextual & Canonical Reading Selection**:
   - **Canonical Textbook Identity (KANJI_CANONICAL_PRONUNCIATIONS)**:
     - For standalone Kanji cards, use the primary pedagogical reading intended by textbooks (e.g., `生` -> `セイ`, `学` -> `ガク`, `校` -> `コウ`, `語` -> `ゴ`, `才` -> `サイ`).
     - Standalone native nouns (e.g., 山 `やま`, 川 `かわ`, 水 `みず`, 雨 `あめ`, 車 `くるま`) maintain their natural Kunyomi.
   - **Okurigana Rule for Verbs/Adjectives**:
     - When a Kanji's Kunyomi has okurigana (marked by a dot, e.g. `い.きる`, `まな.ぶ`), the standalone character MUST NOT be pronounced with the missing inflection suffix. If not in the canonical map, it falls back to its prominent Onyomi root.
   - **Onyomi (音読み) for Compound Words (熟語 / Jukugo)**: Compound words and Sino-Japanese roots (e.g., 郵便局, 案内, 図書館, 電話, 学生, 先生) must use their correct Onyomi readings, accounting for rendaku (連濁) and gemination (促音).
   - **Irregular Readings (熟字訓 / Jukujikun)**: Words with irregular contextual readings (e.g., 今日 `きょう`, 明日 `あした`, 一日 `ついたち`, 大人 `おとな`) must prioritize their designated kana reading.

2. **Phonetic Sanitization for Text-to-Speech**:
   - Dictionary representations containing okurigana separator dots (e.g., `た.べる`, `ひく.い`, `と.まる`) and affix hyphens (e.g., `-じ`) must be sanitized into seamless kana strings (`たべる`, `ひくい`, `とまる`) before dispatching to speech synthesis.

3. **Sentence Grammar & Prosody**:
   - Japanese sentences must be delivered with natural pedagogical cadence (~0.85-0.90x speed) and pitch (1.0).
   - Standard grammatical particle pronunciation (e.g., `は` as *wa*, `へ` as *e*, `を` as *o*) must be preserved.
