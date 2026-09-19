import { KanjiItem } from '../types';

export const N5_KANJI_LIST: KanjiItem[] = [
  {
    id: 'n5-1',
    kanji: '人',
    level: 'N5',
    category: 'people_family',
    onyomi: ['ジン', 'ニン'],
    kunyomi: ['ひと'],
    strokeCount: 2,
    meaning: { bn: 'মানুষ / ব্যক্তি', en: 'Person / Human', ja: 'ひと・人間' },
    vocabulary: [
      { kanji: '日本人', reading: 'にほんじん', meaning: { bn: 'জাপানি ব্যক্তি', en: 'Japanese person', ja: '日本人' } },
      { kanji: '一人', reading: 'ひとり', meaning: { bn: 'একলা / একজন', en: 'One person / Alone', ja: '1人' } },
      { kanji: '大人', reading: 'おとな', meaning: { bn: 'প্রাপ্তবয়স্ক', en: 'Adult', ja: '大人' } }
    ],
    sentences: [
      { ja: 'あの人は誰ですか。', reading: 'あのひとはだれですか。', translation: { bn: 'ওই ব্যক্তিটি কে?', en: 'Who is that person?', ja: 'あの人は誰ですか。' } },
      { ja: '教室に人がたくさんいます。', reading: 'きょうしつにひとがたくさんいます。', translation: { bn: 'শ্রেণীকক্ষে অনেক মানুষ আছে।', en: 'There are many people in the classroom.', ja: '教室に人がたくさんいます。' } }
    ]
  },
  {
    id: 'n5-2',
    kanji: '一',
    level: 'N5',
    category: 'time_numbers',
    onyomi: ['イチ', 'イツ'],
    kunyomi: ['ひと', 'ひと.つ'],
    strokeCount: 1,
    meaning: { bn: 'এক (১)', en: 'One', ja: 'いち・1つ' },
    vocabulary: [
      { kanji: '一つ', reading: 'ひとつ', meaning: { bn: 'একটি', en: 'One thing', ja: '1つ' } },
      { kanji: '一月', reading: 'いちがつ', meaning: { bn: 'জানুয়ারি মাস', en: 'January', ja: '1月' } },
      { kanji: '一日', reading: 'ついたち', meaning: { bn: 'মাসের প্রথম দিন', en: 'First day of month', ja: '1日' } }
    ],
    sentences: [
      { ja: 'りんごを一つください。', reading: 'りんごをひとつください。', translation: { bn: 'আমাকে একটি আপেল দিন।', en: 'Please give me one apple.', ja: 'りんごを一つください。' } }
    ]
  },
  {
    id: 'n5-3',
    kanji: '日',
    level: 'N5',
    category: 'time_numbers',
    onyomi: ['ニチ', 'ジツ'],
    kunyomi: ['ひ', '-び', '-か'],
    strokeCount: 4,
    meaning: { bn: 'দিন / সূর্য', en: 'Day / Sun', ja: 'ひ・太陽・日曜日' },
    vocabulary: [
      { kanji: '日曜日', reading: 'にちようび', meaning: { bn: 'রবিবার', en: 'Sunday', ja: '日曜日' } },
      { kanji: '日本', reading: 'にほん', meaning: { bn: 'জাপান', en: 'Japan', ja: '日本' } },
      { kanji: '毎日', reading: 'まいにち', meaning: { bn: 'প্রতিদিন', en: 'Every day', ja: '毎日' } }
    ],
    sentences: [
      { ja: '今日はいい日ですね。', reading: 'きょうはいいひですね。', translation: { bn: 'আজ সুন্দর একটি দিন, তাই না?', en: 'Today is a nice day, isn\'t it?', ja: '今日はいい日ですね。' } }
    ]
  },
  {
    id: 'n5-4',
    kanji: '大',
    level: 'N5',
    category: 'daily_life',
    onyomi: ['ダイ', 'タイ'],
    kunyomi: ['おお', 'おお.きい'],
    strokeCount: 3,
    meaning: { bn: 'বড় / বিশালাকার', en: 'Big / Large', ja: 'おおきい・重大' },
    vocabulary: [
      { kanji: '大きい', reading: 'おおきい', meaning: { bn: 'বড়', en: 'Big', ja: '大きい' } },
      { kanji: '大学', reading: 'だいがく', meaning: { bn: 'বিশ্ববিদ্যালয়', en: 'University', ja: '大学' } },
      { kanji: '大好き', reading: 'だいすき', meaning: { bn: 'খুব পছন্দ / ভালোবাসা', en: 'Love / Like very much', ja: '大好き' } }
    ],
    sentences: [
      { ja: 'このバッグはとても大きいです。', reading: 'このバッグはとてもおおきいです。', translation: { bn: 'এই ব্যাগটি অনেক বড়।', en: 'This bag is very big.', ja: 'このバッグはとても大きいです。' } }
    ]
  },
  {
    id: 'n5-5',
    kanji: '年',
    level: 'N5',
    category: 'time_numbers',
    onyomi: ['ネン'],
    kunyomi: ['とし'],
    strokeCount: 6,
    meaning: { bn: 'বছর / সাল', en: 'Year / Age', ja: 'とし・1年' },
    vocabulary: [
      { kanji: '今年', reading: 'ことし', meaning: { bn: 'এই বছর', en: 'This year', ja: '今年' } },
      { kanji: '来年', reading: 'らいねん', meaning: { bn: 'আগামী বছর', en: 'Next year', ja: '来年' } },
      { kanji: '一年生', reading: 'いちねんせい', meaning: { bn: 'প্রথম বর্ষের ছাত্র', en: 'First year student', ja: '1年生' } }
    ],
    sentences: [
      { ja: '今年は日本へ行きます。', reading: 'ことしはにほんへいきます。', translation: { bn: 'এই বছর আমি জাপানে যাবো।', en: 'I will go to Japan this year.', ja: '今年は日本へ行きます。' } }
    ]
  },
  {
    id: 'n5-6',
    kanji: '出',
    level: 'N5',
    category: 'actions_verbs',
    onyomi: ['シュツ', 'シュツ'],
    kunyomi: ['で.る', 'だ.す'],
    strokeCount: 5,
    meaning: { bn: 'বের হওয়া / বের করা', en: 'Exit / Leave / Put out', ja: 'でる・だす' },
    vocabulary: [
      { kanji: '出口', reading: 'でぐち', meaning: { bn: 'প্রস্থান পথ', en: 'Exit', ja: '出口' } },
      { kanji: 'かける', reading: 'でかける', meaning: { bn: 'বাইরে যাওয়া', en: 'Go out', ja: '出かける' } },
      { kanji: '出す', reading: 'だす', meaning: { bn: 'জমা দেওয়া / বের করা', en: 'Submit / Take out', ja: '出す' } }
    ],
    sentences: [
      { ja: '7時に家を出ます。', reading: 'しちじにいえをでます。', translation: { bn: 'আমি ৭ টায় বাড়ি থেকে বের হই।', en: 'I leave home at 7 o\'clock.', ja: '7時に家を出ます。' } }
    ]
  },
  {
    id: 'n5-7',
    kanji: '本',
    level: 'N5',
    category: 'school_study',
    onyomi: ['ホン'],
    kunyomi: ['もと'],
    strokeCount: 5,
    meaning: { bn: 'বই / মূল / উৎস', en: 'Book / Main / Origin', ja: 'ほん・根元' },
    vocabulary: [
      { kanji: '本屋', reading: 'ほんや', meaning: { bn: 'বইয়ের দোকান', en: 'Bookstore', ja: '本屋' } },
      { kanji: '日本語', reading: 'にほんご', meaning: { bn: 'জাপানি ভাষা', en: 'Japanese language', ja: '日本語' } },
      { kanji: '山本', reading: 'やまもと', meaning: { bn: 'ইয়ামামোতো (নাম)', en: 'Yamamoto (Name)', ja: '山本' } }
    ],
    sentences: [
      { ja: '図書室で本を読みます。', reading: 'としょしつでほんをよみます。', translation: { bn: 'আমি লাইব্রেরিতে বই পড়ি।', en: 'I read books in the library.', ja: '図書室で本を読みます。' } }
    ]
  },
  {
    id: 'n5-8',
    kanji: '中',
    level: 'N5',
    category: 'travel_directions',
    onyomi: ['チュウ'],
    kunyomi: ['なか'],
    strokeCount: 4,
    meaning: { bn: 'ভিতরে / মাঝখানে', en: 'Inside / Middle', ja: 'なか・真ん中' },
    vocabulary: [
      { kanji: '部屋の中', reading: 'へやのなか', meaning: { bn: 'ঘরের ভিতরে', en: 'Inside the room', ja: '部屋の中' } },
      { kanji: '一日中', reading: 'いちにちじゅう', meaning: { bn: 'সারাদিন ধরে', en: 'All day long', ja: '一日中' } },
      { kanji: '中学', reading: 'ちゅうがく', meaning: { bn: 'জুনিয়র হাই স্কুল', en: 'Junior high school', ja: '中学' } }
    ],
    sentences: [
      { ja: '箱の中に何がありますか。', reading: 'はこのなかになにがありますか。', translation: { bn: 'বাক্সের ভেতরে কী আছে?', en: 'What is inside the box?', ja: '箱の中に何がありますか。' } }
    ]
  },
  {
    id: 'n5-9',
    kanji: '子',
    level: 'N5',
    category: 'people_family',
    onyomi: ['シ', 'ス'],
    kunyomi: ['こ'],
    strokeCount: 3,
    meaning: { bn: 'শিশু / সন্তান', en: 'Child', ja: 'こ・子ども' },
    vocabulary: [
      { kanji: '子供', reading: 'こども', meaning: { bn: 'শিশু / বাচ্চা', en: 'Child / Children', ja: '子供' } },
      { kanji: '女子', reading: 'じょし', meaning: { bn: 'মেয়ে / নারী', en: 'Girl / Female', ja: '女子' } },
      { kanji: '男子', reading: 'だんし', meaning: { bn: 'ছেলে / পুরুষ', en: 'Boy / Male', ja: '男子' } }
    ],
    sentences: [
      { ja: '公園で子供たちが遊んでいます。', reading: 'こうえんでこどもたちがあそんでいます。', translation: { bn: 'পার্কে শিশুরা খেলা করছে।', en: 'Children are playing in the park.', ja: '公園で子供たちが遊んでいます。' } }
    ]
  },
  {
    id: 'n5-10',
    kanji: '見',
    level: 'N5',
    category: 'actions_verbs',
    onyomi: ['ケン'],
    kunyomi: ['み.る', 'み.える', 'み.せる'],
    strokeCount: 7,
    meaning: { bn: 'দেখা / পর্যবেক্ষণ করা', en: 'See / Look / Watch', ja: 'みる・みせる' },
    vocabulary: [
      { kanji: '見る', reading: 'みる', meaning: { bn: 'দেখা', en: 'To watch / see', ja: '見る' } },
      { kanji: '見せる', reading: 'みせる', meaning: { bn: 'দেখানো', en: 'To show', ja: '見せる' } },
      { kanji: '意見', reading: 'いけん', meaning: { bn: 'মতামত', en: 'Opinion', ja: '意見' } }
    ],
    sentences: [
      { ja: '昨日映画を見ました。', reading: 'きのうえいがをみました。', translation: { bn: 'গতকাল আমি সিনেমা দেখেছি।', en: 'I watched a movie yesterday.', ja: '昨日映画を見ました。' } }
    ]
  },
  {
    id: 'n5-11',
    kanji: '国',
    level: 'N5',
    category: 'travel_directions',
    onyomi: ['コク'],
    kunyomi: ['くに'],
    strokeCount: 8,
    meaning: { bn: 'দেশ / রাষ্ট্র', en: 'Country / Nation', ja: 'くに・国家' },
    vocabulary: [
      { kanji: '外国', reading: 'がいこく', meaning: { bn: 'বিদেশ', en: 'Foreign country', ja: '外国' } },
      { kanji: '韓国', reading: 'かんこく', meaning: { bn: 'দক্ষিণ কোরিয়া', en: 'South Korea', ja: '韓国' } },
      { kanji: '国語', reading: 'こくご', meaning: { bn: 'জাতীয় ভাষা', en: 'National language', ja: '国語' } }
    ],
    sentences: [
      { ja: 'あなたの国はどこですか。', reading: 'あなたのくにはどこですか。', translation: { bn: 'আপনার দেশ কোথায়?', en: 'Where is your country?', ja: 'あなたの国はどこですか。' } }
    ]
  },
  {
    id: 'n5-12',
    kanji: '上',
    level: 'N5',
    category: 'travel_directions',
    onyomi: ['ジョウ', 'ショウ'],
    kunyomi: ['うえ', 'あ.がる', 'のぼ.る'],
    strokeCount: 3,
    meaning: { bn: 'উপরে / উচ্চে', en: 'Above / Up / On', ja: 'うえ・あがる' },
    vocabulary: [
      { kanji: '机の上', reading: 'つくえのうえ', meaning: { bn: 'টেবিলের উপরে', en: 'On the desk', ja: '机の上' } },
      { kanji: '上手', reading: 'じょうず', meaning: { bn: 'দক্ষ / পারদর্শী', en: 'Skillful', ja: '上手' } },
      { kanji: '上着', reading: 'うわぎ', meaning: { bn: 'জ্যাকেট / পোশাক', en: 'Jacket / Coat', ja: '上着' } }
    ],
    sentences: [
      { ja: '本はテレビの上にあります。', reading: 'ほんはてれびのうえにあります。', translation: { bn: 'বইটি টিভির উপরে আছে।', en: 'The book is on top of the TV.', ja: '本はテレビの上にあります。' } }
    ]
  },
  {
    id: 'n5-13',
    kanji: '分',
    level: 'N5',
    category: 'time_numbers',
    onyomi: ['ブン', 'フン', 'ブ'],
    kunyomi: ['わ.かる', 'わ.ける'],
    strokeCount: 4,
    meaning: { bn: 'মিনিট / বোঝা / ভাগ', en: 'Minute / Understand / Divide', ja: 'ふん・わかる' },
    vocabulary: [
      { kanji: '5分', reading: 'ごふん', meaning: { bn: '৫ মিনিট', en: '5 minutes', ja: '5分' } },
      { kanji: '分かる', reading: 'わかる', meaning: { bn: 'বুঝতে পারা', en: 'To understand', ja: '分かる' } },
      { kanji: '自分', reading: 'じぶん', meaning: { bn: 'নিজের / নিজে', en: 'Oneself', ja: '自分' } }
    ],
    sentences: [
      { ja: '日本語が少し分かります。', reading: 'にほんごがすこしわかります。', translation: { bn: 'আমি একটু একটু জাপানি বুঝি।', en: 'I understand a little Japanese.', ja: '日本語が少し分かります。' } }
    ]
  },
  {
    id: 'n5-14',
    kanji: '生',
    level: 'N5',
    category: 'school_study',
    onyomi: ['セイ', 'ショウ'],
    kunyomi: ['い.きる', 'う.まれる', 'なま'],
    strokeCount: 5,
    meaning: { bn: 'জীবন / জন্মগ্রহণ / ছাত্র', en: 'Life / Birth / Student', ja: 'いきる・うまれる・学生' },
    vocabulary: [
      { kanji: '学生', reading: 'がくせい', meaning: { bn: 'ছাত্র / শিক্ষার্থী', en: 'Student', ja: '学生' } },
      { kanji: '先生', reading: 'せんせい', meaning: { bn: 'শিক্ষক', en: 'Teacher', ja: '先生' } },
      { kanji: '誕生日', reading: 'たんじょうび', meaning: { bn: 'জন্মদিন', en: 'Birthday', ja: '誕生日' } }
    ],
    sentences: [
      { ja: '私は大学生です。', reading: 'わたしはだいがくせいです。', translation: { bn: 'আমি একজন বিশ্ববিদ্যালয়ের ছাত্র।', en: 'I am a university student.', ja: '私は大学生です。' } }
    ]
  },
  {
    id: 'n5-15',
    kanji: '行',
    level: 'N5',
    category: 'actions_verbs',
    onyomi: ['コウ', 'ギョウ'],
    kunyomi: ['い.く', 'おこな.う'],
    strokeCount: 6,
    meaning: { bn: 'যাওয়া / পরিচালনা', en: 'Go / Conduct', ja: 'いく・おこなう' },
    vocabulary: [
      { kanji: '行く', reading: 'いく', meaning: { bn: 'যাওয়া', en: 'To go', ja: '行く' } },
      { kanji: '旅行', reading: 'りょこう', meaning: { bn: 'ভ্রমণ', en: 'Travel / Trip', ja: '旅行' } },
      { kanji: '銀行', reading: 'ぎんこう', meaning: { bn: 'ব্যাংক', en: 'Bank', ja: '銀行' } }
    ],
    sentences: [
      { ja: '明日学校へ行きます。', reading: 'あしたがっこうへいきます。', translation: { bn: 'আগামীকাল আমি স্কুলে যাবো।', en: 'I will go to school tomorrow.', ja: '明日学校へ行きます。' } }
    ]
  },
  {
    id: 'n5-16',
    kanji: '二',
    level: 'N5',
    category: 'time_numbers',
    onyomi: ['ニ'],
    kunyomi: ['ふた', 'ふた.つ'],
    strokeCount: 2,
    meaning: { bn: 'দুই (২)', en: 'Two', ja: 'に・2つ' },
    vocabulary: [
      { kanji: '二つ', reading: 'ふたつ', meaning: { bn: 'দুইটি', en: 'Two things', ja: '2つ' } },
      { kanji: '二月', reading: 'にがつ', meaning: { bn: 'ফেব্রুয়ারি', en: 'February', ja: '2月' } },
      { kanji: '二人', reading: 'ふたり', meaning: { bn: 'দুইজন', en: 'Two people', ja: '2人' } }
    ],
    sentences: [
      { ja: 'コーヒーを二つください。', reading: 'こーひーをふたつください。', translation: { bn: 'আমাকে দুইটি কফি দিন।', en: 'Two coffees please.', ja: 'コーヒーを二つください。' } }
    ]
  },
  {
    id: 'n5-17',
    kanji: '間',
    level: 'N5',
    category: 'time_numbers',
    onyomi: ['カン', 'ケン'],
    kunyomi: ['あいだ', 'ま'],
    strokeCount: 12,
    meaning: { bn: 'সময়কাল / মধ্যে / স্থান', en: 'Interval / Between / Duration', ja: 'あいだ・時間' },
    vocabulary: [
      { kanji: '時間', reading: 'じかん', meaning: { bn: 'সময়', en: 'Time / Hour', ja: '時間' } },
      { kanji: '一時間', reading: 'いちじかん', meaning: { bn: 'এক ঘণ্টা', en: 'One hour', ja: '1時間' } },
      { kanji: '間に合う', reading: 'まにあう', meaning: { bn: 'সময়ে পৌঁছানো', en: 'Be in time', ja: '間に合う' } }
    ],
    sentences: [
      { ja: '駅と学校の間に本屋があります。', reading: 'えきとがっこうのあいだにほんやがあります。', translation: { bn: 'স্টেশন ও স্কুলের মাঝখানে একটি বইয়ের দোকান আছে।', en: 'There is a bookstore between the station and the school.', ja: '駅と学校の間に本屋があります。' } }
    ]
  },
  {
    id: 'n5-18',
    kanji: '時',
    level: 'N5',
    category: 'time_numbers',
    onyomi: ['ジ'],
    kunyomi: ['とき'],
    strokeCount: 10,
    meaning: { bn: 'সময় / কয়টা (ঘণ্টা)', en: 'Time / O\'clock', ja: 'とき・〜時' },
    vocabulary: [
      { kanji: '時計', reading: 'とけい', meaning: { bn: 'ঘড়ি', en: 'Clock / Watch', ja: '時計' } },
      { kanji: '時々', reading: 'ときどき', meaning: { bn: 'মাঝে মাঝে', en: 'Sometimes', ja: '時々' } },
      { kanji: '三時', reading: 'さんじ', meaning: { bn: 'তিনটা (৩ টা)', en: '3 o\'clock', ja: '3時' } }
    ],
    sentences: [
      { ja: '今何時ですか。', reading: 'いまなんじですか。', translation: { bn: 'এখন কয়টা বাজে?', en: 'What time is it now?', ja: '今何時ですか。' } }
    ]
  },
  {
    id: 'n5-19',
    kanji: '気',
    level: 'N5',
    category: 'mind_emotions',
    onyomi: ['キ', 'ケ'],
    kunyomi: [],
    strokeCount: 6,
    meaning: { bn: 'মনোভাব / মেজাজ / আবহাওয়া', en: 'Spirit / Mind / Feeling', ja: 'き・気持ち' },
    vocabulary: [
      { kanji: '天気', reading: 'てんき', meaning: { bn: 'আবহাওয়া', en: 'Weather', ja: '天気' } },
      { kanji: '元気', reading: 'げんき', meaning: { bn: 'সুস্থ / প্রাণবন্ত', en: 'Healthy / Energetic', ja: '元気' } },
      { kanji: '電気', reading: 'でんき', meaning: { bn: 'বিদ্যুৎ / আলো', en: 'Electricity / Light', ja: '電気' } }
    ],
    sentences: [
      { ja: 'お元気ですか。', reading: 'おげんきですか。', translation: { bn: 'আপনি কেমন আছেন?', en: 'How are you?', ja: 'お元気ですか。' } }
    ]
  },
  {
    id: 'n5-20',
    kanji: '十',
    level: 'N5',
    category: 'time_numbers',
    onyomi: ['ジュウ', 'ジッ'],
    kunyomi: ['とお', 'と'],
    strokeCount: 2,
    meaning: { bn: 'দশ (১০)', en: 'Ten', ja: 'じゅう・10' },
    vocabulary: [
      { kanji: '十', reading: 'とお', meaning: { bn: '১০ টি', en: 'Ten items', ja: '10' } },
      { kanji: '十月', reading: 'じゅうがつ', meaning: { bn: 'অক্টোবর', en: 'October', ja: '10月' } },
      { kanji: '二十歳', reading: 'はたち', meaning: { bn: '২০ বছর বয়স', en: '20 years old', ja: '20歳' } }
    ],
    sentences: [
      { ja: 'みかんを十個買いました。', reading: 'みかんをじゅっこかいのした。', translation: { bn: 'আমি ১০টি কমলা কিনেছি।', en: 'I bought 10 oranges.', ja: 'みかんを十個買いました。' } }
    ]
  },
  {
    id: 'n5-21',
    kanji: '女',
    level: 'N5',
    category: 'people_family',
    onyomi: ['ジョ', 'ニョ'],
    kunyomi: ['おんな', 'め'],
    strokeCount: 3,
    meaning: { bn: 'নারী / মেয়ে', en: 'Woman / Female', ja: 'おんな・女性' },
    vocabulary: [
      { kanji: '女の子', reading: 'おんなのこ', meaning: { bn: 'ছোট মেয়ে', en: 'Girl', ja: '女の子' } },
      { kanji: '女性', reading: 'じょせい', meaning: { bn: 'মহিলা', en: 'Woman / Female', ja: '女性' } },
      { kanji: '彼女', reading: 'かのじょ', meaning: { bn: 'সে (মেয়ে) /বান্ধবী', en: 'She / Girlfriend', ja: '彼女' } }
    ],
    sentences: [
      { ja: 'あそこに女の人がいます。', reading: 'あそこにおんなのひとがいます。', translation: { bn: 'ওখানে একজন মহিলা আছেন।', en: 'There is a woman over there.', ja: 'あそこに女の人がいます。' } }
    ]
  },
  {
    id: 'n5-22',
    kanji: '三',
    level: 'N5',
    category: 'time_numbers',
    onyomi: ['サン'],
    kunyomi: ['み', 'み.つ', 'みっ.つ'],
    strokeCount: 3,
    meaning: { bn: 'তিন (৩)', en: 'Three', ja: 'さん・3つ' },
    vocabulary: [
      { kanji: '三つ', reading: 'みっつ', meaning: { bn: 'তিনটি', en: 'Three things', ja: '3つ' } },
      { kanji: '三月', reading: 'さんがつ', meaning: { bn: 'মার্চ মাস', en: 'March', ja: '3月' } },
      { kanji: '三人', reading: 'さんにん', meaning: { bn: 'তিনজন', en: 'Three people', ja: '3人' } }
    ],
    sentences: [
      { ja: '卵を三つ買いました。', reading: 'たまごをみっつかいのした。', translation: { bn: 'আমি ৩টি ডিম কিনেছি।', en: 'I bought three eggs.', ja: '卵を三つ買いました。' } }
    ]
  },
  {
    id: 'n5-23',
    kanji: '前',
    level: 'N5',
    category: 'travel_directions',
    onyomi: ['ゼン'],
    kunyomi: ['まえ'],
    strokeCount: 9,
    meaning: { bn: 'সামনে / আগে', en: 'Front / Before', ja: 'まえ・以前' },
    vocabulary: [
      { kanji: '駅の前', reading: 'えきのまえ', meaning: { bn: 'স্টেশনের সামনে', en: 'In front of station', ja: '駅の前' } },
      { kanji: '午前', reading: 'ごぜん', meaning: { bn: 'পূর্বাহ্ন (AM)', en: 'Morning / AM', ja: '午前' } },
      { kanji: '名前', reading: 'なまえ', meaning: { bn: 'নাম', en: 'Name', ja: '名前' } }
    ],
    sentences: [
      { ja: 'ホテルの前で会いましょう。', reading: 'ほてるのまえであいましょう。', translation: { bn: 'হোটেলের সামনে দেখা করি।', en: 'Let\'s meet in front of the hotel.', ja: 'ホテルの前で会いましょう。' } }
    ]
  },
  {
    id: 'n5-24',
    kanji: '入',
    level: 'N5',
    category: 'actions_verbs',
    onyomi: ['ニュウ'],
    kunyomi: ['はい.る', 'い.れる'],
    strokeCount: 2,
    meaning: { bn: 'ঢোকা / প্রবেশ করানো', en: 'Enter / Put in', ja: 'はいる・いれる' },
    vocabulary: [
      { kanji: '入る', reading: 'はいる', meaning: { bn: 'প্রবেশ করা', en: 'To enter', ja: '入る' } },
      { kanji: '入れる', reading: 'いれる', meaning: { bn: 'ভেতরে রাখা', en: 'To put inside', ja: '入れる' } },
      { kanji: '入口', reading: 'いりぐち', meaning: { bn: 'প্রবেশপথ', en: 'Entrance', ja: '入口' } }
    ],
    sentences: [
      { ja: 'どうぞ中に入ってください。', reading: 'どうぞなかにはいってください。', translation: { bn: 'দয়া করে ভেতরে আসুন।', en: 'Please enter inside.', ja: 'どうぞ中に入ってください。' } }
    ]
  },
  {
    id: 'n5-25',
    kanji: '小',
    level: 'N5',
    category: 'daily_life',
    onyomi: ['ショウ'],
    kunyomi: ['ちい.さい', 'こ'],
    strokeCount: 3,
    meaning: { bn: 'ছোট / ক্ষুদ্র', en: 'Small / Little', ja: 'ちいさい・小' },
    vocabulary: [
      { kanji: '小さい', reading: 'ちいさい', meaning: { bn: 'ছোট', en: 'Small', ja: '小さい' } },
      { kanji: '小学校', reading: 'しょうがっこう', meaning: { bn: 'প্রাইমারি স্কুল', en: 'Elementary school', ja: '小学校' } },
      { kanji: '小川', reading: 'おがわ', meaning: { bn: 'ছোট নদী / খাল', en: 'Stream / Brook', ja: '小川' } }
    ],
    sentences: [
      { ja: 'この犬はとても小さいです。', reading: 'このいぬはとてもちいさいです。', translation: { bn: 'এই কুকুরটি খুবই ছোট।', en: 'This dog is very small.', ja: 'この犬はとても小さいです。' } }
    ]
  },
  {
    id: 'n5-26',
    kanji: '後',
    level: 'N5',
    category: 'time_numbers',
    onyomi: ['ゴ', 'コウ'],
    kunyomi: ['うしろ', 'あと', 'おく.れる'],
    strokeCount: 9,
    meaning: { bn: 'পিছনে / পরে', en: 'Behind / After / Later', ja: 'うしろ・あと' },
    vocabulary: [
      { kanji: '後ろ', reading: 'うしろ', meaning: { bn: 'পিছনে', en: 'Behind', ja: '後ろ' } },
      { kanji: '午後', reading: 'ごご', meaning: { bn: 'অপরাহ্ন (PM)', en: 'Afternoon / PM', ja: '午後' } },
      { kanji: '最後', reading: 'さいご', meaning: { bn: 'সর্বশেষ', en: 'Last / Final', ja: '最後' } }
    ],
    sentences: [
      { ja: '椅子の後ろに猫がいます。', reading: 'いすのうしろにねこがいます。', translation: { bn: 'চেয়ারের পিছনে বিড়াল আছে।', en: 'There is a cat behind the chair.', ja: '椅子の後ろに猫がいます。' } }
    ]
  },
  {
    id: 'n5-27',
    kanji: '長',
    level: 'N5',
    category: 'daily_life',
    onyomi: ['チョウ'],
    kunyomi: ['なが.い'],
    strokeCount: 8,
    meaning: { bn: 'লম্বা / প্রধান', en: 'Long / Leader', ja: 'ながい・長官' },
    vocabulary: [
      { kanji: '長い', reading: 'ながい', meaning: { bn: 'লম্বা', en: 'Long', ja: '長い' } },
      { kanji: '社長', reading: 'しゃちょう', meaning: { bn: 'কোম্পানি প্রেসিডেন্ট', en: 'Company president', ja: '社長' } },
      { kanji: '部長', reading: 'ぶちょう', meaning: { bn: 'ডিপার্টমেন্ট হেড', en: 'Department manager', ja: '部長' } }
    ],
    sentences: [
      { ja: '彼女の髪はとても provides長い。', reading: 'かのじょのかみはとてもながい。', translation: { bn: 'তার চুল অনেক লম্বা।', en: 'Her hair is very long.', ja: '彼女の髪はとても長い。' } }
    ]
  },
  {
    id: 'n5-28',
    kanji: '下',
    level: 'N5',
    category: 'travel_directions',
    onyomi: ['カ', 'ゲ'],
    kunyomi: ['した', 'さ.げる', 'くだ.さい'],
    strokeCount: 3,
    meaning: { bn: 'নিচে / নামা', en: 'Under / Below / Down', ja: 'した・さがる' },
    vocabulary: [
      { kanji: '机の下', reading: 'つくえのした', meaning: { bn: 'টেবিলের নিচে', en: 'Under the desk', ja: '机の下' } },
      { kanji: '地下鉄', reading: 'ちかてつ', meaning: { bn: 'মেট্রো / পাতাল রেল', en: 'Subway', ja: '地下鉄' } },
      { kanji: '下さい', reading: 'ください', meaning: { bn: 'দয়া করে দিন', en: 'Please give me', ja: '下さい' } }
    ],
    sentences: [
      { ja: 'テーブルの下に靴があります。', reading: 'てーぶるのしたにくつがあります。', translation: { bn: 'টেবিলের নিচে জুতো আছে।', en: 'There are shoes under the table.', ja: 'テーブルの下に靴があります。' } }
    ]
  },
  {
    id: 'n5-29',
    kanji: '学',
    level: 'N5',
    category: 'school_study',
    onyomi: ['ガク'],
    kunyomi: ['まな.ぶ'],
    strokeCount: 8,
    meaning: { bn: 'শেখা / পড়াশোনা', en: 'Study / Learn / Science', ja: 'まなぶ・学問' },
    vocabulary: [
      { kanji: '学校', reading: 'がっこう', meaning: { bn: 'স্কুল', en: 'School', ja: '学校' } },
      { kanji: '学生', reading: 'がくせい', meaning: { bn: 'শিক্ষার্থী', en: 'Student', ja: '学生' } },
      { kanji: '学ぶ', reading: 'まなぶ', meaning: { bn: 'শেখা', en: 'To learn', ja: '学ぶ' } }
    ],
    sentences: [
      { ja: '毎日日本語を学びます。', reading: 'まいにちにほんごをまなびます。', translation: { bn: 'আমি প্রতিদিন জাপানি ভাষা শিখি।', en: 'I learn Japanese every day.', ja: '毎日日本語を学びます。' } }
    ]
  },
  {
    id: 'n5-30',
    kanji: '月',
    level: 'N5',
    category: 'nature_weather',
    onyomi: ['ゲツ', 'ガツ'],
    kunyomi: ['つき'],
    strokeCount: 4,
    meaning: { bn: 'চাঁদ / মাস', en: 'Moon / Month', ja: 'つき・月曜日' },
    vocabulary: [
      { kanji: '月曜日', reading: 'げつようび', meaning: { bn: 'সোমবার', en: 'Monday', ja: '月曜日' } },
      { kanji: '今月', reading: 'こんげつ', meaning: { bn: 'এই মাস', en: 'This month', ja: '今月' } },
      { kanji: 'お月様', reading: 'おつきさま', meaning: { bn: 'চাঁদ মামা / চাঁদ', en: 'Moon', ja: 'お月様' } }
    ],
    sentences: [
      { ja: '今夜は月がきれいです。', reading: 'こんやはつきがきれいです。', translation: { bn: 'আজ রাতে চাঁদটি সুন্দর।', en: 'The moon is beautiful tonight.', ja: '今夜は月がきれいです。' } }
    ]
  },
  {
    id: 'n5-31',
    kanji: '何',
    level: 'N5',
    category: 'daily_life',
    onyomi: ['カ'],
    kunyomi: ['なに', 'なん'],
    strokeCount: 7,
    meaning: { bn: 'কী / কোনটি', en: 'What', ja: 'なに・なん' },
    vocabulary: [
      { kanji: '何時', reading: 'なんじ', meaning: { bn: 'কয়টা বাজে', en: 'What time', ja: '何時' } },
      { kanji: '何人', reading: 'なにじん', meaning: { bn: 'কোন দেশের মানুষ', en: 'What nationality', ja: '何人' } },
      { kanji: '何色', reading: 'なにいろ', meaning: { bn: 'কী রঙ', en: 'What color', ja: '何色' } }
    ],
    sentences: [
      { ja: '朝ごはんに何を食べましたか。', reading: 'あさごはんになにをたべましたか。', translation: { bn: 'সকালের নাস্তায় কী খেয়েছেন?', en: 'What did you eat for breakfast?', ja: '朝ごはんに何を食べましたか。' } }
    ]
  },
  {
    id: 'n5-32',
    kanji: '来',
    level: 'N5',
    category: 'actions_verbs',
    onyomi: ['ライ'],
    kunyomi: ['く.る', 'き.ます', 'こ.ない'],
    strokeCount: 7,
    meaning: { bn: 'আসা / আগমন', en: 'Come / Next', ja: 'くる・来週' },
    vocabulary: [
      { kanji: '来る', reading: 'くる', meaning: { bn: 'আসা', en: 'To come', ja: '来る' } },
      { kanji: '来週', reading: 'らいしゅう', meaning: { bn: 'আগামী সপ্তাহ', en: 'Next week', ja: '来週' } },
      { kanji: '来月', reading: 'らいげつ', meaning: { bn: 'আগামী মাস', en: 'Next month', ja: '来月' } }
    ],
    sentences: [
      { ja: '友だちが家にきます。', reading: 'ともだちがいえにきます。', translation: { bn: 'বন্ধু বাড়িতে আসছে।', en: 'A friend is coming to my home.', ja: '友だちが家にきます。' } }
    ]
  },
  {
    id: 'n5-33',
    kanji: '話',
    level: 'N5',
    category: 'actions_verbs',
    onyomi: ['ワ'],
    kunyomi: ['はな.す', 'はなし'],
    strokeCount: 13,
    meaning: { bn: 'কথা বলা / গল্প', en: 'Speak / Talk / Story', ja: 'はなす・会話' },
    vocabulary: [
      { kanji: '話す', reading: 'はなす', meaning: { bn: 'কথা বলা', en: 'To speak', ja: '話す' } },
      { kanji: '電話', reading: 'でんわ', meaning: { bn: 'ফোন', en: 'Telephone', ja: '電話' } },
      { kanji: '会話', reading: 'かいわ', meaning: { bn: 'কথোপকথন', en: 'Conversation', ja: '会話' } }
    ],
    sentences: [
      { ja: '日本語で話しましょう。', reading: 'にほんごではなしましょう。', translation: { bn: 'চলুন জাপানিতে কথা বলি।', en: 'Let\'s speak in Japanese.', ja: '日本語で話しましょう。' } }
    ]
  },
  {
    id: 'n5-34',
    kanji: '山',
    level: 'N5',
    category: 'nature_weather',
    onyomi: ['サン'],
    kunyomi: ['やま'],
    strokeCount: 3,
    meaning: { bn: 'পাহাড় / পর্বত', en: 'Mountain', ja: 'やま・富士山' },
    vocabulary: [
      { kanji: '富士山', reading: 'ふじさん', meaning: { bn: 'মাউন্ট ফুজি', en: 'Mt. Fuji', ja: '富士山' } },
      { kanji: '山登り', reading: 'やまのぼり', meaning: { bn: 'পাহাড়ে চড়া', en: 'Mountain climbing', ja: '山登り' } },
      { kanji: '火山', reading: 'かざん', meaning: { bn: 'আগ্নেয়গিরি', en: 'Volcano', ja: '火山' } }
    ],
    sentences: [
      { ja: '週末に山へ登りました。', reading: 'しゅうまつにやまへのぼりました。', translation: { bn: 'সপ্তাহান্তে পাহাড়ে উঠেছিলাম।', en: 'I climbed a mountain on the weekend.', ja: '週末に山へ登りました。' } }
    ]
  },
  {
    id: 'n5-35',
    kanji: '高',
    level: 'N5',
    category: 'daily_life',
    onyomi: ['コウ'],
    kunyomi: ['たか.い'],
    strokeCount: 10,
    meaning: { bn: 'উঁচু / দামী', en: 'High / Expensive', ja: 'たかい・高校' },
    vocabulary: [
      { kanji: '高い', reading: 'たかい', meaning: { bn: 'উঁচু / দামী', en: 'Tall / Expensive', ja: '高い' } },
      { kanji: '高校', reading: 'こうこう', meaning: { bn: 'হাই স্কুল', en: 'High school', ja: '高校' } },
      { kanji: '最高', reading: 'さいこう', meaning: { bn: 'সেরা / সর্বোচ্চ', en: 'The best / Highest', ja: '最高' } }
    ],
    sentences: [
      { ja: 'この時計はとても高いです。', reading: 'このとけいはとてもたかいです。', translation: { bn: 'এই ঘড়িটি খুব দামী।', en: 'This watch is very expensive.', ja: 'この時計はとても高いです。' } }
    ]
  },
  {
    id: 'n5-36',
    kanji: '今',
    level: 'N5',
    category: 'time_numbers',
    onyomi: ['コン', 'キン'],
    kunyomi: ['いま'],
    strokeCount: 4,
    meaning: { bn: 'এখন / বর্তমান', en: 'Now / Present', ja: 'いま・現在' },
    vocabulary: [
      { kanji: '今日', reading: 'きょう', meaning: { bn: 'আজ', en: 'Today', ja: '今日' } },
      { kanji: '今週', reading: 'こんしゅう', meaning: { bn: 'এই সপ্তাহ', en: 'This week', ja: '今週' } },
      { kanji: '今年', reading: 'ことし', meaning: { bn: 'এই বছর', en: 'This year', ja: '今年' } }
    ],
    sentences: [
      { ja: '今何をして言いますか。', reading: 'いまなにをしていますか。', translation: { bn: 'এখন কী করছেন?', en: 'What are you doing now?', ja: '今何をしていますか。' } }
    ]
  },
  {
    id: 'n5-37',
    kanji: '書',
    level: 'N5',
    category: 'actions_verbs',
    onyomi: ['ショ'],
    kunyomi: ['か.く'],
    strokeCount: 10,
    meaning: { bn: 'লেখা / পুস্তক', en: 'Write / Document', ja: 'かく・書類' },
    vocabulary: [
      { kanji: '書く', reading: 'かく', meaning: { bn: 'লেখা', en: 'To write', ja: '書く' } },
      { kanji: '図書館', reading: 'としょかん', meaning: { bn: 'লাইব্রেরি', en: 'Library', ja: '図書館' } },
      { kanji: '辞書', reading: 'じしょ', meaning: { bn: 'অভিধান / ডিকশনারি', en: 'Dictionary', ja: '辞書' } }
    ],
    sentences: [
      { ja: 'ノートに名前を書きます。', reading: 'のーとになまえをかきます。', translation: { bn: 'খাতায় নাম লিখি।', en: 'I write my name on the notebook.', ja: 'ノートに名前を書きます。' } }
    ]
  },
  {
    id: 'n5-38',
    kanji: '五',
    level: 'N5',
    category: 'time_numbers',
    onyomi: ['ゴ'],
    kunyomi: ['いつ', 'いつ.つ'],
    strokeCount: 4,
    meaning: { bn: 'পাঁচ (৫)', en: 'Five', ja: 'ご・5つ' },
    vocabulary: [
      { kanji: '五つ', reading: 'いつつ', meaning: { bn: 'পাঁচটি', en: 'Five items', ja: '5つ' } },
      { kanji: '五月', reading: 'ごがつ', meaning: { bn: 'মে মাস', en: 'May', ja: '5月' } },
      { kanji: '五日', reading: 'いつか', meaning: { bn: '৫ম দিন', en: '5th day of month', ja: '5日' } }
    ],
    sentences: [
      { ja: 'みかんを五つください。', reading: 'みかんをいつつください。', translation: { bn: 'আমাকে ৫টি কমলা দিন।', en: 'Please give me five oranges.', ja: 'みかんを五つください。' } }
    ]
  },
  {
    id: 'n5-39',
    kanji: '名',
    level: 'N5',
    category: 'people_family',
    onyomi: ['メイ', 'ミョウ'],
    kunyomi: ['な'],
    strokeCount: 6,
    meaning: { bn: 'নাম / খ্যাতি', en: 'Name / Famous', ja: 'な・名前' },
    vocabulary: [
      { kanji: '名前', reading: 'なまえ', meaning: { bn: 'নাম', en: 'Name', ja: '名前' } },
      { kanji: '有名', reading: 'ゆうめい', meaning: { bn: 'বিখ্যাত', en: 'Famous', ja: '有名' } },
      { kanji: '名刺', reading: 'めいし', meaning: { bn: 'ভিজিটিং কার্ড', en: 'Business card', ja: '名刺' } }
    ],
    sentences: [
      { ja: 'お名前は何ですか。', reading: 'おなまえはなんですか。', translation: { bn: 'আপনার নাম কী?', en: 'What is your name?', ja: 'お名前は何ですか。' } }
    ]
  },
  {
    id: 'n5-40',
    kanji: '金',
    level: 'N5',
    category: 'daily_life',
    onyomi: ['キン', 'コン'],
    kunyomi: ['かね', 'かな-'],
    strokeCount: 8,
    meaning: { bn: 'টাকা / সোনা / শুক্রবার', en: 'Money / Gold / Friday', ja: 'かね・金曜日' },
    vocabulary: [
      { kanji: 'お金', reading: 'おかね', meaning: { bn: 'টাকা / অর্থ', en: 'Money', ja: 'お金' } },
      { kanji: '金曜日', reading: 'きんようび', meaning: { bn: 'শুক্রবার', en: 'Friday', ja: '金曜日' } },
      { kanji: '金メダル', reading: 'きんめだる', meaning: { bn: 'স্বর্ণপদক', en: 'Gold medal', ja: '金メダル' } }
    ],
    sentences: [
      { ja: '金曜日に映画を見に行きます。', reading: 'きんようびにえいがをみにいきます。', translation: { bn: 'শুক্রবার সিনেমা দেখতে যাবো।', en: 'I will go see a movie on Friday.', ja: '金曜日に映画を見に行きます。' } }
    ]
  },
  {
    id: 'n5-41',
    kanji: '男',
    level: 'N5',
    category: 'people_family',
    onyomi: ['ダン', 'ナン'],
    kunyomi: ['おとこ'],
    strokeCount: 7,
    meaning: { bn: 'পুরুষ / ছেলে', en: 'Man / Male', ja: 'おとこ・男性' },
    vocabulary: [
      { kanji: '男の人', reading: 'おとこのひと', meaning: { bn: 'পুরুষ মানুষ', en: 'Man', ja: '男の人' } },
      { kanji: '男の子', reading: 'おとこのこ', meaning: { bn: 'ছোট ছেলে', en: 'Boy', ja: '男の子' } },
      { kanji: '男子', reading: 'だんし', meaning: { bn: 'যুবক / ছেলে', en: 'Male / Boy', ja: '男子' } }
    ],
    sentences: [
      { ja: '男の子がサッカーをしています。', reading: 'おとこのこがさっかーをしています。', translation: { bn: 'একটি ছেলে ফুটবল খেলছে।', en: 'A boy is playing soccer.', ja: '男の子がサッカーをしています。' } }
    ]
  },
  {
    id: 'n5-42',
    kanji: '外',
    level: 'N5',
    category: 'travel_directions',
    onyomi: ['ガイ', 'ゲ'],
    kunyomi: ['そと', 'ほか', 'はず.す'],
    strokeCount: 5,
    meaning: { bn: 'বাইরে / অন্যান্য', en: 'Outside / Foreign', ja: 'そと・外国' },
    vocabulary: [
      { kanji: '外', reading: 'そと', meaning: { bn: 'বাইরে', en: 'Outside', ja: '外' } },
      { kanji: '外国', reading: 'がいこく', meaning: { bn: 'বিদেশ', en: 'Foreign country', ja: '外国' } },
      { kanji: '海外', reading: 'かいがい', meaning: { bn: 'ওভারসিজ / বিদেশ', en: 'Overseas', ja: '海外' } }
    ],
    sentences: [
      { ja: '外は雨が降っています。', reading: 'そとはあめがふっています。', translation: { bn: 'বাইরে বৃষ্টি হচ্ছে।', en: 'It is raining outside.', ja: '外は雨が降っています。' } }
    ]
  },
  {
    id: 'n5-43',
    kanji: '四',
    level: 'N5',
    category: 'time_numbers',
    onyomi: ['シ'],
    kunyomi: ['よ', 'よ.つ', 'よっ.つ', 'よん'],
    strokeCount: 5,
    meaning: { bn: 'চার (৪)', en: 'Four', ja: 'よん・4' },
    vocabulary: [
      { kanji: '四つ', reading: 'よっつ', meaning: { bn: 'চারটি', en: 'Four items', ja: '4つ' } },
      { kanji: '四月', reading: 'しがつ', meaning: { bn: 'এপ্রিল', en: 'April', ja: '4月' } },
      { kanji: '四人', reading: 'よにん', meaning: { bn: 'চারজন', en: 'Four people', ja: '4人' } }
    ],
    sentences: [
      { ja: '家族は四人です。', reading: 'かぞくはよにんです。', translation: { bn: 'আমার পরিবারে চারজন সদস্য।', en: 'My family has four members.', ja: '家族は四人です。' } }
    ]
  },
  {
    id: 'n5-44',
    kanji: '先',
    level: 'N5',
    category: 'school_study',
    onyomi: ['セン'],
    kunyomi: ['さき'],
    strokeCount: 6,
    meaning: { bn: 'আগে / শিক্ষক / অতীত', en: 'Ahead / Previous / First', ja: 'さき・先生' },
    vocabulary: [
      { kanji: '先生', reading: 'せんせい', meaning: { bn: 'শিক্ষক', en: 'Teacher', ja: '先生' } },
      { kanji: '先週', reading: 'せんしゅう', meaning: { bn: 'গত সপ্তাহ', en: 'Last week', ja: '先週' } },
      { kanji: 'お先に', reading: 'おさきに', meaning: { bn: 'আপনার আগে', en: 'Ahead / Before you', ja: 'お先に' } }
    ],
    sentences: [
      { ja: '先生、質問があります。', reading: 'せんせい、しつもんがあります。', translation: { bn: 'স্যার, আমার একটি প্রশ্ন আছে।', en: 'Teacher, I have a question.', ja: '先生、質問があります。' } }
    ]
  },
  {
    id: 'n5-45',
    kanji: '川',
    level: 'N5',
    category: 'nature_weather',
    onyomi: ['セン'],
    kunyomi: ['かわ'],
    strokeCount: 3,
    meaning: { bn: 'নদী / প্রবহমান ধারা', en: 'River / Stream', ja: 'かわ・河川' },
    vocabulary: [
      { kanji: '川', reading: 'かわ', meaning: { bn: 'নদী', en: 'River', ja: '川' } },
      { kanji: '小川', reading: 'おがわ', meaning: { bn: 'ছোট খাল', en: 'Stream', ja: '小川' } },
      { kanji: 'ナイル川', reading: 'ないるがわ', meaning: { bn: 'নীলনদ', en: 'Nile River', ja: 'ナイル川' } }
    ],
    sentences: [
      { ja: '川で魚を釣りました。', reading: 'かわでさかなをつりました。', translation: { bn: 'নদীতে মাছ ধরেছিলাম।', en: 'I fished in the river.', ja: '川で魚を釣りました。' } }
    ]
  },
  {
    id: 'n5-46',
    kanji: '東',
    level: 'N5',
    category: 'travel_directions',
    onyomi: ['トウ'],
    kunyomi: ['ひがし'],
    strokeCount: 8,
    meaning: { bn: 'পূর্ব দিক', en: 'East', ja: 'ひがし・東洋' },
    vocabulary: [
      { kanji: '東京', reading: 'とうきょう', meaning: { bn: 'টোকিও', en: 'Tokyo', ja: '東京' } },
      { kanji: '東口', reading: 'ひがしぐち', meaning: { bn: 'পূর্ব গেট', en: 'East exit', ja: '東口' } },
      { kanji: '東南', reading: 'とうなん', meaning: { bn: 'দক্ষিণ-পূর্ব', en: 'Southeast', ja: '東南' } }
    ],
    sentences: [
      { ja: '太陽は東から昇ります。', reading: 'たいようはひがしからのぼります。', translation: { bn: 'সূর্য পূর্ব দিকে ওঠে।', en: 'The sun rises in the east.', ja: '太陽は東から昇ります。' } }
    ]
  },
  {
    id: 'n5-47',
    kanji: '聞',
    level: 'N5',
    category: 'actions_verbs',
    onyomi: ['ブン', 'モン'],
    kunyomi: ['き.く', 'き.こえる'],
    strokeCount: 14,
    meaning: { bn: 'শোনা / জিজ্ঞাসা করা', en: 'Hear / Listen / Ask', ja: 'きく・新聞' },
    vocabulary: [
      { kanji: '聞く', reading: 'きく', meaning: { bn: 'শোনা / জিজ্ঞেস করা', en: 'To hear / ask', ja: '聞く' } },
      { kanji: '新聞', reading: 'しんぶん', meaning: { bn: 'সংবাদপত্র / পেপার', en: 'Newspaper', ja: '新聞' } },
      { kanji: '聞こえる', reading: 'きこえる', meaning: { bn: 'শোনা যাওয়া', en: 'Be audible', ja: '聞こえる' } }
    ],
    sentences: [
      { ja: '毎朝音楽を聞きます。', reading: 'まいあさおんがくをききます。', translation: { bn: 'আমি প্রতিদিন সকালে গান শুনি।', en: 'I listen to music every morning.', ja: '毎朝音楽を聞きます。' } }
    ]
  },
  {
    id: 'n5-48',
    kanji: '語',
    level: 'N5',
    category: 'school_study',
    onyomi: ['ゴ'],
    kunyomi: ['かた.る'],
    strokeCount: 14,
    meaning: { bn: 'ভাষা / শব্দ', en: 'Language / Word', ja: 'ご・語学' },
    vocabulary: [
      { kanji: '日本語', reading: 'にほんご', meaning: { bn: 'জাপানি ভাষা', en: 'Japanese language', ja: '日本語' } },
      { kanji: '英語', reading: 'えいご', meaning: { bn: 'ইংরেজি ভাষা', en: 'English language', ja: '英語' } },
      { kanji: '単語', reading: 'たんご', meaning: { bn: 'শব্দ / ভোকাবুলারি', en: 'Vocabulary word', ja: '単語' } }
    ],
    sentences: [
      { ja: '英語と日本語を話せます。', reading: 'えいごとにほんごをはなせます。', translation: { bn: 'আমি ইংরেজি ও জাপানি বলতে পারি।', en: 'I can speak English and Japanese.', ja: '英語と日本語を話せます。' } }
    ]
  },
  {
    id: 'n5-49',
    kanji: '九',
    level: 'N5',
    category: 'time_numbers',
    onyomi: ['キュウ', 'ク'],
    kunyomi: ['ここの', 'ここの.つ'],
    strokeCount: 2,
    meaning: { bn: 'নয় (৯)', en: 'Nine', ja: 'きゅう・9' },
    vocabulary: [
      { kanji: '九つ', reading: 'ここのつ', meaning: { bn: 'নয়টি', en: 'Nine items', ja: '9つ' } },
      { kanji: '九月', reading: 'くがつ', meaning: { bn: 'সেপ্টেম্বর', en: 'September', ja: '9月' } },
      { kanji: '九時', reading: 'くじ', meaning: { bn: '৯টা বাজে', en: '9 o\'clock', ja: '9時' } }
    ],
    sentences: [
      { ja: '9時に学校へ行きます。', reading: 'くじにがっこうへいきます。', translation: { bn: 'আমি ৯ টায় স্কুলে যাই।', en: 'I go to school at 9 o\'clock.', ja: '9時に学校へ行きます。' } }
    ]
  },
  {
    id: 'n5-50',
    kanji: '食',
    level: 'N5',
    category: 'food_drink',
    onyomi: ['ショク', 'ジキ'],
    kunyomi: ['た.べる', 'く.う'],
    strokeCount: 9,
    meaning: { bn: 'খাওয়া / খাদ্য', en: 'Eat / Food', ja: 'たべる・食事' },
    vocabulary: [
      { kanji: '食べる', reading: 'たべる', meaning: { bn: 'খাওয়া', en: 'To eat', ja: '食べる' } },
      { kanji: '食堂', reading: 'しょくどう', meaning: { bn: 'ক্যান্টিন / ডাইনিং', en: 'Cafeteria / Dining hall', ja: '食堂' } },
      { kanji: '食べ物', reading: 'たべもの', meaning: { bn: 'খাবার', en: 'Food', ja: '食べ物' } }
    ],
    sentences: [
      { ja: 'レストランでラーメンを食べました。', reading: 'れすとらんでらーめんをたべました。', translation: { bn: 'রেস্তোরাঁয় রামেন খেয়েছিলাম।', en: 'I ate ramen at a restaurant.', ja: 'レストランでラーメンを食べました。' } }
    ]
  },
  {
    id: 'n5-51',
    kanji: '八',
    level: 'N5',
    category: 'time_numbers',
    onyomi: ['ハチ'],
    kunyomi: ['や', 'や.つ', 'やっ.つ', 'よう'],
    strokeCount: 2,
    meaning: { bn: 'আট (৮)', en: 'Eight', ja: 'はち・8' },
    vocabulary: [
      { kanji: '八つ', reading: 'やっつ', meaning: { bn: 'আটটি', en: 'Eight items', ja: '8つ' } },
      { kanji: '八月', reading: 'はちがつ', meaning: { bn: 'আগস্ট', en: 'August', ja: '8月' } },
      { kanji: '八日', reading: 'ようか', meaning: { bn: '৮ই তারিখ', en: '8th day', ja: '8日' } }
    ],
    sentences: [
      { ja: 'りんごを八つ買いました。', reading: 'りんごをやっつかいのした。', translation: { bn: 'আমি আটটি আপেল কিনেছি।', en: 'I bought eight apples.', ja: 'りんごを八つ買いました。' } }
    ]
  },
  {
    id: 'n5-52',
    kanji: '水',
    level: 'N5',
    category: 'nature_weather',
    onyomi: ['スイ'],
    kunyomi: ['みず'],
    strokeCount: 4,
    meaning: { bn: 'পানি / জল / বুধবার', en: 'Water / Wednesday', ja: 'みず・水曜日' },
    vocabulary: [
      { kanji: '水', reading: 'みず', meaning: { bn: 'পানি', en: 'Water', ja: '水' } },
      { kanji: '水曜日', reading: 'すいようび', meaning: { bn: 'বুধবার', en: 'Wednesday', ja: '水曜日' } },
      { kanji: '水着', reading: 'みずぎ', meaning: { bn: 'সাঁতারের পোশাক', en: 'Swimsuit', ja: '水着' } }
    ],
    sentences: [
      { ja: '冷たい水を飲みたいです。', reading: 'つめたいみずをのみたいです。', translation: { bn: 'আমি ঠান্ডা পানি খেতে চাই।', en: 'I want to drink cold water.', ja: '冷たい水を飲みたいです。' } }
    ]
  },
  {
    id: 'n5-53',
    kanji: '天',
    level: 'N5',
    category: 'nature_weather',
    onyomi: ['テン'],
    kunyomi: ['あまつ', 'あめ'],
    strokeCount: 4,
    meaning: { bn: 'আকাশ / স্বর্গ', en: 'Heaven / Sky', ja: 'てん・天国' },
    vocabulary: [
      { kanji: '天気', reading: 'てんき', meaning: { bn: 'আবহাওয়া', en: 'Weather', ja: '天気' } },
      { kanji: '天才', reading: 'てんさい', meaning: { bn: 'জিনিয়াস / মহাপ্রতিভা', en: 'Genius', ja: '天才' } },
      { kanji: '天ぷら', reading: 'てんぷら', meaning: { bn: 'তেমপুরা (খাবার)', en: 'Tempura', ja: '天ぷら' } }
    ],
    sentences: [
      { ja: '今日はいい天気ですね。', reading: 'きょうはいいてんきですね。', translation: { bn: 'আজ চমৎকার আবহাওয়া, তাই না?', en: 'The weather is nice today, isn\'t it?', ja: '今日はいい天気ですね。' } }
    ]
  },
  {
    id: 'n5-54',
    kanji: '木',
    level: 'N5',
    category: 'nature_weather',
    onyomi: ['モク', 'ボク'],
    kunyomi: ['き'],
    strokeCount: 4,
    meaning: { bn: 'গাছ / কাঠ / বৃহস্পতিবার', en: 'Tree / Wood / Thursday', ja: 'き・木曜日' },
    vocabulary: [
      { kanji: '木曜日', reading: 'もくようび', meaning: { bn: 'বৃহস্পতিবার', en: 'Thursday', ja: '木曜日' } },
      { kanji: '大木', reading: 'たいぼく', meaning: { bn: 'বিশাল গাছ', en: 'Large tree', ja: '大木' } },
      { kanji: '木の下', reading: 'きのした', meaning: { bn: 'গাছের নিচে', en: 'Under the tree', ja: '木の下' } }
    ],
    sentences: [
      { ja: '公園に大きな木があります。', reading: 'こうえんにおおきなきがあります。', translation: { bn: 'পার্কে একটি বিশাল গাছ আছে।', en: 'There is a big tree in the park.', ja: '公園に大きな木があります。' } }
    ]
  },
  {
    id: 'n5-55',
    kanji: '六',
    level: 'N5',
    category: 'time_numbers',
    onyomi: ['ロク'],
    kunyomi: ['む', 'む.つ', 'むっ.つ', 'むい'],
    strokeCount: 4,
    meaning: { bn: 'ছয় (৬)', en: 'Six', ja: 'ろく・6' },
    vocabulary: [
      { kanji: '六つ', reading: 'むっつ', meaning: { bn: 'ছয়টি', en: 'Six items', ja: '6つ' } },
      { kanji: '六月', reading: 'ろくがつ', meaning: { bn: 'জুন মাস', en: 'June', ja: '6月' } },
      { kanji: '六日', reading: 'むいか', meaning: { bn: '৬ই তারিখ', en: '6th day', ja: '6日' } }
    ],
    sentences: [
      { ja: '卵を六つ買いました。', reading: 'たまごをむっつかいのした。', translation: { bn: 'আমি ৬টি ডিম কিনেছি।', en: 'I bought six eggs.', ja: '卵を六つ買いました。' } }
    ]
  },
  {
    id: 'n5-56',
    kanji: '万',
    level: 'N5',
    category: 'time_numbers',
    onyomi: ['マン', 'バン'],
    kunyomi: [],
    strokeCount: 3,
    meaning: { bn: 'দশ হাজার (১০,০০০)', en: 'Ten thousand', ja: 'まん・10,000' },
    vocabulary: [
      { kanji: '一万円', reading: 'いちまんえん', meaning: { bn: '১০,০০০ ইয়েন', en: '10,000 Yen', ja: '1万円' } },
      { kanji: '万国', reading: 'ばんこく', meaning: { bn: 'সব দেশ', en: 'All countries', ja: '万国' } }
    ],
    sentences: [
      { ja: 'このカメラは一万円です。', reading: 'このかめらはいちまんえんです。', translation: { bn: 'এই ক্যামেরাটির দাম ১০,০০০ ইয়েন।', en: 'This camera is 10,000 yen.', ja: 'このカメラは一万円です。' } }
    ]
  },
  {
    id: 'n5-57',
    kanji: '白',
    level: 'N5',
    category: 'daily_life',
    onyomi: ['ハク', 'ビャク'],
    kunyomi: ['しろ', 'しろ.い'],
    strokeCount: 5,
    meaning: { bn: 'সাদা রঙ', en: 'White', ja: 'しろ・白色' },
    vocabulary: [
      { kanji: '白い', reading: 'しろい', meaning: { bn: 'সাদা', en: 'White', ja: '白い' } },
      { kanji: '面白い', reading: 'おもしろい', meaning: { bn: 'মজার / আকর্ষণীয়', en: 'Interesting', ja: '面白い' } },
      { kanji: '白鳥', reading: 'はくちょう', meaning: { bn: 'রাজহাঁস', en: 'Swan', ja: '白鳥' } }
    ],
    sentences: [
      { ja: '白いシャツを着ています。', reading: 'しろいしゃつをきています。', translation: { bn: 'আমি একটি সাদা শার্ট পরে আছি।', en: 'I am wearing a white shirt.', ja: '白いシャツを着ています。' } }
    ]
  },
  {
    id: 'n5-58',
    kanji: '七',
    level: 'N5',
    category: 'time_numbers',
    onyomi: ['シチ'],
    kunyomi: ['なな', 'なな.つ', 'なの'],
    strokeCount: 2,
    meaning: { bn: 'সাত (৭)', en: 'Seven', ja: 'なな・7' },
    vocabulary: [
      { kanji: '七つ', reading: 'ななつ', meaning: { bn: 'সাতটি', en: 'Seven items', ja: '7つ' } },
      { kanji: '七月', reading: 'しちがつ', meaning: { bn: 'জুলাই', en: 'July', ja: '7月' } },
      { kanji: '七時', reading: 'しちじ', meaning: { bn: '৭টা বাজে', en: '7 o\'clock', ja: '7時' } }
    ],
    sentences: [
      { ja: '毎朝7時に起きます。', reading: 'まいあさしちじにおきます。', translation: { bn: 'আমি প্রতিদিন ৭ টায় উঠি।', en: 'I wake up at 7 o\'clock every morning.', ja: '毎朝7時に起きます。' } }
    ]
  },
  {
    id: 'n5-59',
    kanji: '円',
    level: 'N5',
    category: 'daily_life',
    onyomi: ['エン'],
    kunyomi: ['まる.い'],
    strokeCount: 4,
    meaning: { bn: 'ইয়েন (জাপানি মুদ্রা) / গোল', en: 'Yen / Circle', ja: 'えん・円形' },
    vocabulary: [
      { kanji: '100円', reading: 'ひゃくえん', meaning: { bn: '১০০ ইয়েন', en: '100 Yen', ja: '100円' } },
      { kanji: '円高', reading: 'えんだか', meaning: { bn: 'ইয়েনের মূল্য বৃদ্ধি', en: 'Strong Yen', ja: '円高' } }
    ],
    sentences: [
      { ja: 'このりんごは100円です。', reading: 'このりんごはひゃくえんです。', translation: { bn: 'এই আপেলটির দাম ১০০ ইয়েন।', en: 'This apple is 100 yen.', ja: 'このりんごは100円です。' } }
    ]
  },
  {
    id: 'n5-60',
    kanji: '電',
    level: 'N5',
    category: 'daily_life',
    onyomi: ['デン'],
    kunyomi: [],
    strokeCount: 13,
    meaning: { bn: 'বিদ্যুৎ / ইলেকট্রিক', en: 'Electricity', ja: 'でんき・電車' },
    vocabulary: [
      { kanji: '電車', reading: 'でんしゃ', meaning: { bn: 'ট্রেন', en: 'Train', ja: '電車' } },
      { kanji: '電話', reading: 'でんわ', meaning: { bn: 'টেলিফোন', en: 'Telephone', ja: '電話' } },
      { kanji: '電気', reading: 'でんき', meaning: { bn: 'কারেন্ট / বিদ্যুৎ', en: 'Electricity', ja: '電気' } }
    ],
    sentences: [
      { ja: '電車で会社へ通います。', reading: 'でんしゃでかいしゃへかよいます。', translation: { bn: 'আমি ট্রেনে অফিসে যাতায়াত করি।', en: 'I commute to work by train.', ja: '電車で会社へ通います。' } }
    ]
  },
  {
    id: 'n5-61',
    kanji: '父',
    level: 'N5',
    category: 'people_family',
    onyomi: ['フ'],
    kunyomi: ['ちち'],
    strokeCount: 4,
    meaning: { bn: 'বাবা / পিতা', en: 'Father', ja: 'ちち・父親' },
    vocabulary: [
      { kanji: '父', reading: 'ちち', meaning: { bn: 'আমার বাবা', en: 'My father', ja: '父' } },
      { kanji: 'お父さん', reading: 'おとうさん', meaning: { bn: 'আপনার/অন্যের বাবা', en: 'Father (polite)', ja: 'お父さん' } },
      { kanji: '父母', reading: 'ふぼ', meaning: { bn: 'বাবা-মা', en: 'Parents', ja: '父母' } }
    ],
    sentences: [
      { ja: '父は会社員です。', reading: 'ちちはかいしゃいんです。', translation: { bn: 'আমার বাবা একজন চাকরিজীবী।', en: 'My father is an office worker.', ja: '父は会社員です。' } }
    ]
  },
  {
    id: 'n5-62',
    kanji: '北',
    level: 'N5',
    category: 'travel_directions',
    onyomi: ['ホク'],
    kunyomi: ['きた'],
    strokeCount: 5,
    meaning: { bn: 'উত্তর দিক', en: 'North', ja: 'きた・北方' },
    vocabulary: [
      { kanji: '北', reading: 'きた', meaning: { bn: 'উত্তর দিক', en: 'North', ja: '北' } },
      { kanji: '北海道', reading: 'ほっかいどう', meaning: { bn: 'হোক্কাইদো (দ্বীপ)', en: 'Hokkaido', ja: '北海道' } },
      { kanji: '北口', reading: 'きたぐち', meaning: { bn: 'উত্তর গেট', en: 'North exit', ja: '北口' } }
    ],
    sentences: [
      { ja: '駅の北口で待っています。', reading: 'えきのきたぐちでまっています。', translation: { bn: 'স্টেশনের উত্তর গেটে অপেক্ষা করছি।', en: 'I am waiting at the north exit of the station.', ja: '駅の北口で待っています。' } }
    ]
  },
  {
    id: 'n5-63',
    kanji: '車',
    level: 'N5',
    category: 'travel_directions',
    onyomi: ['シャ'],
    kunyomi: ['くるま'],
    strokeCount: 7,
    meaning: { bn: 'গাড়ি / চাকা', en: 'Car / Vehicle', ja: 'くるま・自動車' },
    vocabulary: [
      { kanji: '車', reading: 'くるま', meaning: { bn: 'গাড়ি', en: 'Car', ja: '車' } },
      { kanji: '電車', reading: 'でんしゃ', meaning: { bn: 'ট্রেন', en: 'Train', ja: '電車' } },
      { kanji: '自動車', reading: 'じどうしゃ', meaning: { bn: 'মোটর গাড়ি', en: 'Automobile', ja: '自動車' } }
    ],
    sentences: [
      { ja: '新しい車を買いました。', reading: 'あたらしいくるまをかいのした。', translation: { bn: 'আমি নতুন গাড়ি কিনেছি।', en: 'I bought a new car.', ja: '新しい車を買いました。' } }
    ]
  },
  {
    id: 'n5-64',
    kanji: '母',
    level: 'N5',
    category: 'people_family',
    onyomi: ['ボ'],
    kunyomi: ['はは'],
    strokeCount: 5,
    meaning: { bn: 'মা / মাতা', en: 'Mother', ja: 'はは・母親' },
    vocabulary: [
      { kanji: '母', reading: 'はは', meaning: { bn: 'আমার মা', en: 'My mother', ja: '母' } },
      { kanji: 'お母さん', reading: 'おかあさん', meaning: { bn: 'অন্যের মা / আম্মু', en: 'Mother (polite)', ja: 'お母さん' } },
      { kanji: '母国', reading: 'ぼこく', meaning: { bn: 'মাতৃভূমি', en: 'Motherland', ja: '母国' } }
    ],
    sentences: [
      { ja: '母の料理はとても美味しいです。', reading: 'ははのりょうりはとてもおいしいです。', translation: { bn: 'আমার মায়ের রান্না খুব সুস্বাদু।', en: 'My mother\'s cooking is very delicious.', ja: '母の料理はとても美味しいです。' } }
    ]
  },
  {
    id: 'n5-65',
    kanji: '半',
    level: 'N5',
    category: 'time_numbers',
    onyomi: ['ハン'],
    kunyomi: ['なか.ば'],
    strokeCount: 5,
    meaning: { bn: 'অর্ধেক / সাড়ে', en: 'Half / Semi-', ja: 'はん・半分' },
    vocabulary: [
      { kanji: '半分', reading: 'はんぶん', meaning: { bn: 'অর্ধেক', en: 'Half', ja: '半分' } },
      { kanji: '7時半', reading: 'しちじはん', meaning: { bn: 'সাড়ে সাতটা', en: 'Half past seven', ja: '7時半' } },
      { kanji: '半年', reading: 'はんとし', meaning: { bn: 'ছয় মাস / আধা বছর', en: 'Half a year', ja: '半年' } }
    ],
    sentences: [
      { ja: '7時半に朝ごはんを食べます。', reading: 'しちじはんにあさごはんをたべます。', translation: { bn: 'আমি সাড়ে ৭ টায় নাস্তা খাই।', en: 'I eat breakfast at 7:30.', ja: '7時半に朝ごはんを食べます。' } }
    ]
  },
  {
    id: 'n5-66',
    kanji: '百',
    level: 'N5',
    category: 'time_numbers',
    onyomi: ['ヒャク'],
    kunyomi: [],
    strokeCount: 6,
    meaning: { bn: 'শত (১০০)', en: 'Hundred', ja: 'ひゃく・100' },
    vocabulary: [
      { kanji: '100円', reading: 'ひゃくえん', meaning: { bn: '১০০ ইয়েন', en: '100 Yen', ja: '100円' } },
      { kanji: '三百', reading: 'さんびゃく', meaning: { bn: '৩০০', en: '300', ja: '300' } },
      { kanji: '六百', reading: 'ろっぽん', meaning: { bn: '৬০০', en: '600', ja: '600' } }
    ],
    sentences: [
      { ja: 'このノートは百円です。', reading: 'こののーとはひゃくえんです。', translation: { bn: 'এই খাতাটির দাম ১০০ ইয়েন।', en: 'This notebook is 100 yen.', ja: 'このノートは百円です。' } }
    ]
  },
  {
    id: 'n5-67',
    kanji: '土',
    level: 'N5',
    category: 'nature_weather',
    onyomi: ['ド', 'ト'],
    kunyomi: ['つち'],
    strokeCount: 3,
    meaning: { bn: 'মাটি / শনিবার', en: 'Soil / Earth / Saturday', ja: 'つち・土曜日' },
    vocabulary: [
      { kanji: '土曜日', reading: 'どようび', meaning: { bn: 'শনিবার', en: 'Saturday', ja: '土曜日' } },
      { kanji: '土', reading: 'つち', meaning: { bn: 'মাটি', en: 'Soil / Earth', ja: '土' } },
      { kanji: '土産', reading: 'みやげ', meaning: { bn: 'উপহার / স্মরণিকা', en: 'Souvenir', ja: '土産' } }
    ],
    sentences: [
      { ja: '土曜日に友達と遊びます。', reading: 'どようびにともだちとあそびます。', translation: { bn: 'শনিবার বন্ধুদের সাথে ঘুরে বেড়াব।', en: 'I will hang out with friends on Saturday.', ja: '土曜日に友達と遊びます。' } }
    ]
  },
  {
    id: 'n5-68',
    kanji: '西',
    level: 'N5',
    category: 'travel_directions',
    onyomi: ['セイ', 'サイ'],
    kunyomi: ['にし'],
    strokeCount: 6,
    meaning: { bn: 'পশ্চিম দিক', en: 'West', ja: 'にし・西方' },
    vocabulary: [
      { kanji: '西', reading: 'にし', meaning: { bn: 'পশ্চিম দিক', en: 'West', ja: '西' } },
      { kanji: '西口', reading: 'にしぐち', meaning: { bn: 'পশ্চিম গেট', en: 'West exit', ja: '西口' } },
      { kanji: '関西', reading: 'かんさい', meaning: { bn: 'কানসাই এলাকা', en: 'Kansai region', ja: '関西' } }
    ],
    sentences: [
      { ja: '太陽は西に沈みます。', reading: 'たいようはにしにしずみます。', translation: { bn: 'সূর্য পশ্চিমে অস্ত যায়।', en: 'The sun sets in the west.', ja: '太陽は西に沈みます。' } }
    ]
  },
  {
    id: 'n5-69',
    kanji: '読',
    level: 'N5',
    category: 'actions_verbs',
    onyomi: ['ドク', 'トク'],
    kunyomi: ['よ.む'],
    strokeCount: 14,
    meaning: { bn: 'পড়া / পাঠ করা', en: 'Read', ja: 'よむ・読書' },
    vocabulary: [
      { kanji: '読む', reading: 'よむ', meaning: { bn: 'পড়া', en: 'To read', ja: '読む' } },
      { kanji: '読書', reading: 'どくしょ', meaning: { bn: 'বই পড়া / পাঠ', en: 'Reading books', ja: '読書' } },
      { kanji: '読み方', reading: 'よみかた', meaning: { bn: 'উচ্চারণ / পড়ার নিয়ম', en: 'Way of reading', ja: '読み方' } }
    ],
    sentences: [
      { ja: '寝る前に本を読みます。', reading: 'ねるまえにほんをよみます。', translation: { bn: 'ঘুমানোর আগে বই পড়ি।', en: 'I read a book before going to sleep.', ja: '寝る前に本を読みます。' } }
    ]
  },
  {
    id: 'n5-70',
    kanji: '千',
    level: 'N5',
    category: 'time_numbers',
    onyomi: ['セン'],
    kunyomi: ['ち'],
    strokeCount: 3,
    meaning: { bn: 'হাজার (১,০০০)', en: 'Thousand', ja: 'せん・1000' },
    vocabulary: [
      { kanji: '千円', reading: 'せんえん', meaning: { bn: '১,০০০ ইয়েন', en: '1,000 Yen', ja: '1000円' } },
      { kanji: '三千', reading: 'さんぜん', meaning: { bn: '৩,০০০', en: '3,000', ja: '3000' } },
      { kanji: '千葉', reading: 'ちば', meaning: { bn: 'চিবা প্রিফেকচার', en: 'Chiba', ja: '千葉' } }
    ],
    sentences: [
      { ja: 'このTシャツは千円です。', reading: 'このてぃーしゃつはせんえんです。', translation: { bn: 'এই টি-শার্টটি ১,০০০ ইয়েন।', en: 'This t-shirt is 1,000 yen.', ja: 'このTシャツは千円です。' } }
    ]
  },
  {
    id: 'n5-71',
    kanji: '校',
    level: 'N5',
    category: 'school_study',
    onyomi: ['コウ'],
    kunyomi: [],
    strokeCount: 10,
    meaning: { bn: 'বিদ্যালয় / স্থান', en: 'School / Exam', ja: 'がっこう・校舎' },
    vocabulary: [
      { kanji: '学校', reading: 'がっこう', meaning: { bn: 'স্কুল', en: 'School', ja: '学校' } },
      { kanji: '高校', reading: 'こうこう', meaning: { bn: 'হাই স্কুল', en: 'High school', ja: '高校' } },
      { kanji: '校長先生', reading: 'こうちょうせんせい', meaning: { bn: 'হেডমাস্টার / প্রিন্সিপাল', en: 'Principal', ja: '校長先生' } }
    ],
    sentences: [
      { ja: '歩いて学校へ行きます。', reading: 'あるいてがっこうへいきます。', translation: { bn: 'আমি হেঁটে স্কুলে যাই।', en: 'I walk to school.', ja: '歩いて学校へ行きます。' } }
    ]
  },
  {
    id: 'n5-72',
    kanji: '右',
    level: 'N5',
    category: 'travel_directions',
    onyomi: ['ウ', 'ユウ'],
    kunyomi: ['みぎ'],
    strokeCount: 5,
    meaning: { bn: 'ডান দিক', en: 'Right', ja: 'みぎ・右側' },
    vocabulary: [
      { kanji: '右', reading: 'みぎ', meaning: { bn: 'ডান দিক', en: 'Right side', ja: '右' } },
      { kanji: '右手', reading: 'みぎて', meaning: { bn: 'ডান হাত', en: 'Right hand', ja: '右手' } },
      { kanji: '右折', reading: 'うせつ', meaning: { bn: 'ডানে মোড়', en: 'Right turn', ja: '右折' } }
    ],
    sentences: [
      { ja: '交差点を右に曲がってください。', reading: 'こうさてんをみぎにまがってください。', translation: { bn: 'মোড়ে ডান দিকে ঘুরুন।', en: 'Turn right at the intersection.', ja: '交差点を右に曲がってください。' } }
    ]
  },
  {
    id: 'n5-73',
    kanji: '南',
    level: 'N5',
    category: 'travel_directions',
    onyomi: ['ナン'],
    kunyomi: ['みなみ'],
    strokeCount: 9,
    meaning: { bn: 'দক্ষিণ দিক', en: 'South', ja: 'みなみ・南方' },
    vocabulary: [
      { kanji: '南', reading: 'みなみ', meaning: { bn: 'দক্ষিণ দিক', en: 'South', ja: '南' } },
      { kanji: '南口', reading: 'みなみぐち', meaning: { bn: 'দক্ষিণ গেট', en: 'South exit', ja: '南口' } },
      { kanji: '東南アジア', reading: 'とうなんあじあ', meaning: { bn: 'দক্ষিণ-পূর্ব এশিয়া', en: 'Southeast Asia', ja: '東南アジア' } }
    ],
    sentences: [
      { ja: '南の島へ旅行したいです。', reading: 'みなみのしまへりょこうしたいです。', translation: { bn: 'দক্ষিণের কোন দ্বীপে ঘুরতে যেতে চাই।', en: 'I want to travel to a southern island.', ja: '南の島へ旅行したいです。' } }
    ]
  },
  {
    id: 'n5-74',
    kanji: '左',
    level: 'N5',
    category: 'travel_directions',
    onyomi: ['サ'],
    kunyomi: ['ひだり'],
    strokeCount: 5,
    meaning: { bn: 'বাম দিক', en: 'Left', ja: 'ひだり・左側' },
    vocabulary: [
      { kanji: '左', reading: 'ひだり', meaning: { bn: 'বাম দিক', en: 'Left side', ja: '左' } },
      { kanji: '左手', reading: 'ひだりて', meaning: { bn: 'বাম হাত', en: 'Left hand', ja: '左手' } },
      { kanji: '左折', reading: 'させつ', meaning: { bn: 'বামে মোড়', en: 'Left turn', ja: '左折' } }
    ],
    sentences: [
      { ja: '銀行は左側にあります。', reading: 'ぎんこうはひだりがわにあります。', translation: { bn: 'ব্যাংকটি বাম পাশে অবস্থিত।', en: 'The bank is on the left side.', ja: '銀行は左側にあります。' } }
    ]
  },
  {
    id: 'n5-75',
    kanji: '友',
    level: 'N5',
    category: 'people_family',
    onyomi: ['ユウ'],
    kunyomi: ['とも'],
    strokeCount: 4,
    meaning: { bn: 'বন্ধু / সখা', en: 'Friend', ja: 'とも・友人' },
    vocabulary: [
      { kanji: '友達', reading: 'ともだち', meaning: { bn: 'বন্ধু', en: 'Friend', ja: '友達' } },
      { kanji: '友人', reading: 'ゆうじん', meaning: { bn: 'ঘনিষ্ঠ বন্ধু', en: 'Friend (formal)', ja: '友人' } },
      { kanji: '友情', reading: 'ゆうじょう', meaning: { bn: 'বন্ধুত্ব', en: 'Friendship', ja: '友情' } }
    ],
    sentences: [
      { ja: '週末に友達と映画を見ました。', reading: 'しゅうまつにともだちとえいがをみました。', translation: { bn: 'সপ্তাহান্তে বন্ধুর সাথে সিনেমা দেখেছি।', en: 'I watched a movie with my friend over the weekend.', ja: '週末に友達と映画を見ました。' } }
    ]
  },
  {
    id: 'n5-76',
    kanji: '火',
    level: 'N5',
    category: 'nature_weather',
    onyomi: ['カ'],
    kunyomi: ['ひ', '-び', 'ほ-'],
    strokeCount: 4,
    meaning: { bn: 'আগুন / মঙ্গলবার', en: 'Fire / Tuesday', ja: 'ひ・火曜日' },
    vocabulary: [
      { kanji: '火曜日', reading: 'かようび', meaning: { bn: 'মঙ্গলবার', en: 'Tuesday', ja: '火曜日' } },
      { kanji: '花火', reading: 'はなび', meaning: { bn: 'আতশবাজি', en: 'Fireworks', ja: '花火' } },
      { kanji: '火事', reading: 'かじ', meaning: { bn: 'আগুন লাগা / অগ্নিকাণ্ড', en: 'Fire outbreak', ja: '火事' } }
    ],
    sentences: [
      { ja: '夏休みに花火を見ました。', reading: 'なつやすみにはなびをみました。', translation: { bn: 'গ্রীষ্মের ছুটিতে আতশবাজি দেখেছি।', en: 'I watched fireworks during summer vacation.', ja: '夏休みに花火を見ました。' } }
    ]
  },
  {
    id: 'n5-77',
    kanji: '毎',
    level: 'N5',
    category: 'time_numbers',
    onyomi: ['マイ'],
    kunyomi: [],
    strokeCount: 6,
    meaning: { bn: 'প্রতি / প্রতিনিয়ত', en: 'Every', ja: 'まい・毎日' },
    vocabulary: [
      { kanji: '毎日', reading: 'まいにち', meaning: { bn: 'প্রতিদিন', en: 'Every day', ja: '毎日' } },
      { kanji: '毎朝', reading: 'まいあさ', meaning: { bn: 'প্রতি সকালে', en: 'Every morning', ja: '毎朝' } },
      { kanji: '毎週', reading: 'まいしゅう', meaning: { bn: 'প্রতি সপ্তাহে', en: 'Every week', ja: '毎週' } }
    ],
    sentences: [
      { ja: '毎朝6時に起きます。', reading: 'まいあさろくじにおきます。', translation: { bn: 'আমি প্রতিদিন সকাল ৬টায় উঠি।', en: 'I wake up at 6 every morning.', ja: '毎朝6時に起きます。' } }
    ]
  },
  {
    id: 'n5-78',
    kanji: '雨',
    level: 'N5',
    category: 'nature_weather',
    onyomi: ['ウ'],
    kunyomi: ['あめ', 'あま-'],
    strokeCount: 8,
    meaning: { bn: 'বৃষ্টি', en: 'Rain', ja: 'あめ・大雨' },
    vocabulary: [
      { kanji: '雨', reading: 'あめ', meaning: { bn: 'বৃষ্টি', en: 'Rain', ja: '雨' } },
      { kanji: '大雨', reading: 'おおあめ', meaning: { bn: 'ভারী বর্ষণ', en: 'Heavy rain', ja: '大雨' } },
      { kanji: '雨期', reading: 'うき', meaning: { bn: 'বর্ষাকাল', en: 'Rainy season', ja: '雨期' } }
    ],
    sentences: [
      { ja: '今日は雨が降っています。', reading: 'きょうはあめがふっています。', translation: { bn: 'আজ বৃষ্টি হচ্ছে।', en: 'It is raining today.', ja: '今日は雨が降っています。' } }
    ]
  },
  {
    id: 'n5-79',
    kanji: '休',
    level: 'N5',
    category: 'daily_life',
    onyomi: ['キュウ'],
    kunyomi: ['やす.む', 'やす.み'],
    strokeCount: 6,
    meaning: { bn: 'বিশ্রাম / ছুটি', en: 'Rest / Holiday', ja: 'やすむ・休日' },
    vocabulary: [
      { kanji: '休む', reading: 'やすむ', meaning: { bn: 'বিশ্রাম নেওয়া', en: 'To rest / take break', ja: '休む' } },
      { kanji: '夏休み', reading: 'なつやすみ', meaning: { bn: 'গ্রীষ্মের ছুটি', en: 'Summer vacation', ja: '夏休み' } },
      { kanji: '休日', reading: 'きゅうじつ', meaning: { bn: 'ছুটির দিন', en: 'Holiday', ja: '休日' } }
    ],
    sentences: [
      { ja: '少し休みましょう。', reading: 'すこしやすみましょう。', translation: { bn: 'চলুন একটু বিশ্রাম নিই।', en: 'Let\'s take a short break.', ja: '少し休みましょう。' } }
    ]
  },
  {
    id: 'n5-80',
    kanji: '午',
    level: 'N5',
    category: 'time_numbers',
    onyomi: ['ゴ'],
    kunyomi: ['うま'],
    strokeCount: 4,
    meaning: { bn: 'দুপুর / মধ্যাহ্ন', en: 'Noon', ja: 'ご・正午' },
    vocabulary: [
      { kanji: '午前', reading: 'ごぜん', meaning: { bn: 'সকাল / AM', en: 'Morning / AM', ja: '午前' } },
      { kanji: '午後', reading: 'ごご', meaning: { bn: 'বিকেল / PM', en: 'Afternoon / PM', ja: '午後' } },
      { kanji: '正午', reading: 'しょうご', meaning: { bn: 'দুপুর ১২টা', en: 'Noon / 12 PM', ja: '正午' } }
    ],
    sentences: [
      { ja: '午後2時に会いましょう。', reading: 'ごごにじにあいましょう。', translation: { bn: 'বিকেল ২টায় দেখা করি।', en: 'Let\'s meet at 2 PM.', ja: '午後2時に会いましょう。' } }
    ]
  }
];
