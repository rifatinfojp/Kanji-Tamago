import { KanjiItem } from '../types';

export interface TamagoLessonInfo {
  id: number; // 1..15, or 0 for Parts
  titleJa: string;
  titleBn: string;
  titleEn: string;
  kanjiList: string[];
}

export const TAMAGO_LESSONS: TamagoLessonInfo[] = [
  {
    id: 1,
    titleJa: '第1課 どうぞよろしく！',
    titleBn: '১ম পাঠ: পরিচয় (どうぞよろしく！)',
    titleEn: 'Lesson 1: Nice to meet you!',
    kanjiList: ['私', '人', '才', '学', '生', '校', '日', '本', '語']
  },
  {
    id: 2,
    titleJa: '第2課 買い物',
    titleBn: '২য় পাঠ: কেনাকাটা (買い物)',
    titleEn: 'Lesson 2: Shopping',
    kanjiList: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '百', '千', '万', '円']
  },
  {
    id: 3,
    titleJa: '第3課 いつ、どこで？',
    titleBn: '৩য় পাঠ: কখন ও কোথায়? (いつ、どこで？)',
    titleEn: 'Lesson 3: When & Where?',
    kanjiList: ['月', '火', '水', '木', '金', '土', '曜', '何', '年', '時', '間', '分']
  },
  {
    id: 4,
    titleJa: '第4課 新しい町で',
    titleBn: '৪র্থ পাঠ: নতুন শহরে (新しい町で)',
    titleEn: 'Lesson 4: In a New Town',
    kanjiList: ['東', '京', '名', '前', '国', '男', '女', '区', '市']
  },
  {
    id: 5,
    titleJa: '第5課 楽しい週末',
    titleBn: '৫ম পাঠ: আনন্দের ছুটির দিন (楽しい週末)',
    titleEn: 'Lesson 5: Fun Weekend',
    kanjiList: ['先', '週', '毎', '午', '後', '見', '食', '飲', '買', '物', '行', '休']
  },
  {
    id: 6,
    titleJa: '第6課 一緒に！',
    titleBn: '৬ষ্ঠ পাঠ: একসাথে! (一緒に！)',
    titleEn: 'Lesson 6: Together!',
    kanjiList: ['今', '来', '帰', '会', '社', '聞', '読', '書', '話']
  },
  {
    id: 0,
    titleJa: '漢字のパーツ',
    titleBn: 'বিশেষ: কান্জির উপাদান / পার্টস (パーツ)',
    titleEn: 'Special: Kanji Components',
    kanjiList: ['寺', '言', '貝', '田', '力', '門']
  },
  {
    id: 7,
    titleJa: '第7課 何を食べる？',
    titleBn: '৭ম পাঠ: কি খাবেন? (何を食べる？)',
    titleEn: 'Lesson 7: What to Eat?',
    kanjiList: ['肉', '料', '理', '野', '半', '大', '小']
  },
  {
    id: 8,
    titleJa: '第8課 家族のこと',
    titleBn: '৮ম পাঠ: পরিবার সম্পর্ক (家族のこと)',
    titleEn: 'Lesson 8: About Family',
    kanjiList: ['家', '族', '父', '母', '兄', '弟', '姉', '妹', '犬', '高', '長', '短']
  },
  {
    id: 9,
    titleJa: '第9課 好きなこと',
    titleBn: '৯ম পাঠ: পছন্দের বিষয় ও শখ (好きなこと)',
    titleEn: 'Lesson 9: Things You Like',
    kanjiList: ['好', '歌', '音', '楽', '車', '映', '画', '旅', '海', '外']
  },
  {
    id: 10,
    titleJa: '第10課 待ち合わせ',
    titleBn: '১০ম পাঠ: দেখা করার স্থান ও দিক (待ち合わせ)',
    titleEn: 'Lesson 10: Meeting Up',
    kanjiList: ['駅', '上', '下', '地', '図', '館', '右', '左', '道']
  },
  {
    id: 11,
    titleJa: '第11課 何時に、何をする？',
    titleBn: '১১তম পাঠ: সময় ও দৈনন্দিন কাজ (何時に、何をする？)',
    titleEn: 'Lesson 11: Daily Schedule',
    kanjiList: ['起', '歩', '乗', '始', '終', '勉', '強', '朝', '昼', '夜']
  },
  {
    id: 12,
    titleJa: '第12課 病気のとき',
    titleBn: '১২তম পাঠ: অসুস্থতার সময় (病気のとき)',
    titleEn: 'Lesson 12: When You Are Sick',
    kanjiList: ['体', '目', '耳', '口', '歯', '病', '院', '薬', '局']
  },
  {
    id: 13,
    titleJa: '第13課 旅行に行こう',
    titleBn: '১৩তম পাঠ: ভ্রমণে যাওয়া (旅行に行こう)',
    titleEn: 'Lesson 13: Let\'s Go Traveling',
    kanjiList: ['世', '界', '春', '夏', '秋', '冬', '早', '夕', '予', '約', '光']
  },
  {
    id: 14,
    titleJa: '第14課 気をつけて！',
    titleBn: '১৪তম পাঠ: সাবধানে থাকা ও সাইনবোর্ড (気をつけて！)',
    titleEn: 'Lesson 14: Be Careful!',
    kanjiList: ['入', '出', '持', '立', '使', '用', '中', '新', '古', '注', '意', '止']
  },
  {
    id: 15,
    titleJa: '第15課 どんなニュース？',
    titleBn: '১৫তম পাঠ: খবর ও আবহাওয়া (どんなニュース？)',
    titleEn: 'Lesson 15: What Kind of News?',
    kanjiList: ['天', '気', '雨', '台', '風', '多', '低', '度', '交', '通', '死']
  }
];

// Map character to lesson number
export const TAMAGO_CHAR_TO_LESSON_MAP: Record<string, number> = {};
TAMAGO_LESSONS.forEach((lesson) => {
  lesson.kanjiList.forEach((char) => {
    TAMAGO_CHAR_TO_LESSON_MAP[char] = lesson.id;
  });
});

// Extra Kanji items specifically from Kanji Tamago syllabus to guarantee 100% textbook coverage
export const TAMAGO_SUPPLEMENTARY_KANJI: KanjiItem[] = [
  {
    id: 'tamago-1',
    kanji: '局',
    level: 'N4',
    category: 'travel_directions',
    onyomi: ['キョク'],
    kunyomi: ['つぼね'],
    strokeCount: 7,
    meaning: { bn: 'ব্যুরো / অফিস / পোস্ট অফিস', en: 'Bureau / Office / Station', ja: 'きょく・郵便局' },
    vocabulary: [
      { kanji: '郵便局', reading: 'ゆうびんきょく', meaning: { bn: 'পোস্ট অফিস', en: 'Post office', ja: '郵便局' } },
      { kanji: '薬局', reading: 'やっきょく', meaning: { bn: 'ফার্মেসি / ওষুধের দোকান', en: 'Pharmacy', ja: '薬局' } }
    ],
    sentences: [
      { ja: '薬局で薬を買いました。', reading: 'やっきょくでくすりをかいまし た。', translation: { bn: 'ফার্মেসি থেকে ওষুধ কিনেছি।', en: 'I bought medicine at the pharmacy.', ja: '薬局で薬を買いました。' } }
    ]
  },
  {
    id: 'tamago-2',
    kanji: '歯',
    level: 'N4',
    category: 'daily_life',
    onyomi: ['シ'],
    kunyomi: ['は'],
    strokeCount: 12,
    meaning: { bn: 'দাঁত', en: 'Tooth', ja: 'は・歯医者' },
    vocabulary: [
      { kanji: '歯医者', reading: 'はいしゃ', meaning: { bn: 'দাঁতের ডাক্তার', en: 'Dentist', ja: '歯医者' } },
      { kanji: '虫歯', reading: 'むしば', meaning: { bn: 'দাঁতের পোকা / ক্যাভিটি', en: 'Cavity / Decayed tooth', ja: '虫歯' } }
    ],
    sentences: [
      { ja: '毎朝歯を磨きます。', reading: 'まいあさはをみがきます。', translation: { bn: 'প্রতিদিন সকালে ব্রাশ করি।', en: 'I brush my teeth every morning.', ja: '毎朝歯を磨きます。' } }
    ]
  },
  {
    id: 'tamago-3',
    kanji: '予',
    level: 'N4',
    category: 'daily_life',
    onyomi: ['ヨ'],
    kunyomi: ['あらかじ.め'],
    strokeCount: 4,
    meaning: { bn: 'আগে থেকে / পূর্বাভাস', en: 'Beforehand / Advance', ja: 'あらかじめ・予約' },
    vocabulary: [
      { kanji: '予約', reading: 'よやく', meaning: { bn: 'বুকিং / রিজার্ভেশন', en: 'Reservation', ja: '予約' } },
      { kanji: '天気予報', reading: 'てんきよほう', meaning: { bn: 'আবহাওয়ার পূর্বাভাস', en: 'Weather forecast', ja: '天気予報' } }
    ],
    sentences: [
      { ja: 'ホテルを予約しました。', reading: 'ほてるをよやくしました。', translation: { bn: 'হোটেল বুকিং করেছি।', en: 'I reserved a hotel.', ja: 'ホテルを予約しました。' } }
    ]
  },
  {
    id: 'tamago-4',
    kanji: '約',
    level: 'N4',
    category: 'daily_life',
    onyomi: ['ヤク'],
    kunyomi: ['つづ.まるところ'],
    strokeCount: 9,
    meaning: { bn: 'চুক্তি / প্রায় / বুকিং', en: 'Promise / Approximately', ja: 'やく・約束' },
    vocabulary: [
      { kanji: '約束', reading: 'やくそく', meaning: { bn: 'কথা / প্রতিশ্রুতি', en: 'Promise', ja: '約束' } },
      { kanji: '予約', reading: 'よやく', meaning: { bn: 'রিজার্ভেশন', en: 'Reservation', ja: '予約' } }
    ],
    sentences: [
      { ja: '友達と約束があります。', reading: 'ともだちとやくそくがあります。', translation: { bn: 'বন্ধুর সাথে কথা দেওয়া আছে।', en: 'I have a promise with my friend.', ja: '友達と約束があります。' } }
    ]
  },
  {
    id: 'tamago-5',
    kanji: '光',
    level: 'N4',
    category: 'nature_weather',
    onyomi: ['コウ'],
    kunyomi: ['ひかり', 'ひかる'],
    strokeCount: 6,
    meaning: { bn: 'আলো / রশ্মি / দর্শনীয়', en: 'Light / Ray', ja: 'ひかり・観光' },
    vocabulary: [
      { kanji: '日光', reading: 'にっこう', meaning: { bn: 'সূর্যালোক', en: 'Sunlight', ja: '日光' } },
      { kanji: '観光', reading: 'かんこう', meaning: { bn: 'দর্শনীয় স্থান ভ্রমণ / সাইটসিয়িং', en: 'Sightseeing', ja: '観光' } }
    ],
    sentences: [
      { ja: '京都へ観光に行きます。', reading: 'きょうとへかんこうにいきます。', translation: { bn: 'কিয়োটোতে ঘুরতে যাচ্ছি।', en: 'I am going sightseeing in Kyoto.', ja: '京都へ観光に行きます。' } }
    ]
  },
  {
    id: 'tamago-6',
    kanji: '止',
    level: 'N4',
    category: 'actions_verbs',
    onyomi: ['シ'],
    kunyomi: ['と.まる', 'と.める'],
    strokeCount: 4,
    meaning: { bn: 'থামা / বন্ধ করা', en: 'Stop', ja: 'とまる・禁止' },
    vocabulary: [
      { kanji: '通行止', reading: 'つうこうどめ', meaning: { bn: 'রাস্তা বন্ধ', en: 'Road closed', ja: '通行止' } },
      { kanji: '中止', reading: 'ちゅうし', meaning: { bn: 'বাতিল / স্থগিত', en: 'Cancellation', ja: '中止' } }
    ],
    sentences: [
      { ja: '車を止めます。', reading: 'くるまをとめます。', translation: { bn: 'গাড়ি থামাচ্ছি।', en: 'I stop the car.', ja: '車を止めます。' } }
    ]
  },
  {
    id: 'tamago-7',
    kanji: '台',
    level: 'N4',
    category: 'nature_weather',
    onyomi: ['ダイ', 'タイ'],
    kunyomi: ['うてな'],
    strokeCount: 5,
    meaning: { bn: 'মঞ্চ / কাউন্টার / টাইফুন', en: 'Stand / Counter for vehicles', ja: 'だい・台風' },
    vocabulary: [
      { kanji: '台風', reading: 'たいふう', meaning: { bn: 'টাইফুন / ঘূর্ণিঝড়', en: 'Typhoon', ja: '台風' } },
      { kanji: '一台', reading: 'いちだい', meaning: { bn: 'একটি গাড়ি/যন্ত্র', en: 'One machine/car', ja: '1台' } }
    ],
    sentences: [
      { ja: '台風が来ています。', reading: 'たいふうがきています。', translation: { bn: 'টাইফুন আসছে।', en: 'A typhoon is coming.', ja: '台風が来ています。' } }
    ]
  },
  {
    id: 'tamago-8',
    kanji: '低',
    level: 'N4',
    category: 'daily_life',
    onyomi: ['テイ'],
    kunyomi: ['ひく.い', 'ひく.める'],
    strokeCount: 7,
    meaning: { bn: 'কম / নিচু', en: 'Low', ja: 'ひくい・低気圧' },
    vocabulary: [
      { kanji: '低い', reading: 'ひくい', meaning: { bn: 'নিচু / কম', en: 'Low', ja: '低い' } },
      { kanji: '低気圧', reading: 'ていきあつ', meaning: { bn: 'নিম্নচাপ', en: 'Low pressure', ja: '低気圧' } }
    ],
    sentences: [
      { ja: '気温が低いです。', reading: 'きおんがひくいです。', translation: { bn: 'তাপমাত্রা কম।', en: 'The temperature is low.', ja: '気温が低いです。' } }
    ]
  },
  {
    id: 'tamago-9',
    kanji: '度',
    level: 'N4',
    category: 'time_numbers',
    onyomi: ['ド', 'ト', 'タク'],
    kunyomi: ['たび', 'た.び'],
    strokeCount: 9,
    meaning: { bn: 'ডিগ্রি / বার / মাত্রা', en: 'Degree / Times', ja: 'ど・今度' },
    vocabulary: [
      { kanji: '今度', reading: 'こんど', meaning: { bn: 'পরের বার / এই বার', en: 'Next time', ja: '今度' } },
      { kanji: '一度', reading: 'いちど', meaning: { bn: 'একবার', en: 'Once', ja: '一度' } },
      { kanji: '温度', reading: 'おんど', meaning: { bn: 'তাপমাত্রা', en: 'Temperature', ja: '温度' } }
    ],
    sentences: [
      { ja: 'もう一度言ってください。', reading: 'もういちどいってください。', translation: { bn: 'দয়া করে আরেকবার বলুন।', en: 'Please say it once more.', ja: 'もう一度言ってください。' } }
    ]
  },
  {
    id: 'tamago-10',
    kanji: '交',
    level: 'N4',
    category: 'travel_directions',
    onyomi: ['コウ'],
    kunyomi: ['まじ.わる', 'かわ.す'],
    strokeCount: 6,
    meaning: { bn: 'আদান-প্রদান / যাতায়াত', en: 'Exchange / Traffic', ja: 'こう・交通' },
    vocabulary: [
      { kanji: '交通', reading: 'こうつう', meaning: { bn: 'পরিবহন / ট্রাফিক', en: 'Traffic / Transport', ja: '交通' } },
      { kanji: '交番', reading: 'こうばん', meaning: { bn: 'পুলিশ বক্স', en: 'Police box', ja: '交番' } }
    ],
    sentences: [
      { ja: '交通の便が良いです。', reading: 'こうつうのべんが良いです。', translation: { bn: 'পরিবহন ব্যবস্থা সুবিধাজনক।', en: 'Transportation is convenient.', ja: '交通の便が良いです。' } }
    ]
  },
  {
    id: 'tamago-11',
    kanji: '通',
    level: 'N4',
    category: 'actions_verbs',
    onyomi: ['ツウ', 'ツ'],
    kunyomi: ['とお.る', 'かよ.う'],
    strokeCount: 10,
    meaning: { bn: 'যাতায়াত করা / যাওয়া', en: 'Pass through / Commute', ja: 'とおる・通う' },
    vocabulary: [
      { kanji: '通う', reading: 'かよう', meaning: { bn: 'নিয়মিত যাওয়া-আসা করা', en: 'Commute', ja: '通う' } },
      { kanji: '通り', reading: 'とおり', meaning: { bn: 'রাস্তা / অ্যাভিনিউ', en: 'Street', ja: '通り' } }
    ],
    sentences: [
      { ja: '毎日大学へ通っています。', reading: 'まいにちだいがくへかよっています。', translation: { bn: 'প্রতিদিন বিশ্ববিদ্যালয়ে যাতায়াত করি।', en: 'I commute to university every day.', ja: '毎日大学へ通っています。' } }
    ]
  },
  {
    id: 'tamago-12',
    kanji: '死',
    level: 'N4',
    category: 'actions_verbs',
    onyomi: ['シ'],
    kunyomi: ['し.ぬ'],
    strokeCount: 6,
    meaning: { bn: 'মারা যাওয়া / মৃত্যু', en: 'Die / Death', ja: 'しぬ・必死' },
    vocabulary: [
      { kanji: '死ぬ', reading: 'しぬ', meaning: { bn: 'মারা যাওয়া', en: 'Die', ja: '死ぬ' } },
      { kanji: '必死', reading: 'ひっし', meaning: { bn: 'প্রাণপণ চেষ্টা', en: 'Desperate effort', ja: '必死' } }
    ],
    sentences: [
      { ja: '魚が死にました。', reading: 'さかながしにました。', translation: { bn: 'মাছটি মারা গেছে।', en: 'The fish died.', ja: '魚が死にました。' } }
    ]
  }
];
