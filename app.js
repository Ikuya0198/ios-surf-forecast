/**
 * Find the Peak!!! - Global Surf Forecast
 * Waves Forecast for friendly surfers Created by Genius IO
 */

// ========================================
// Language System
// ========================================
let currentLang = 'en';

const translations = {
    en: {
        currentConditions: 'Current Conditions',
        tomorrowForecast: "Tomorrow's Forecast",
        weeklyForecast: 'Weekly Forecast',
        selectSpot: 'Select Surf Spot',
        selectDesc: 'Choose from 14 popular spots in Japan. More countries coming soon!',
        waveHeight: 'Wave',
        waveNote: '* Beach breaks are typically 20-30% bigger than shown',
        todayHourly: "Today's Hourly",
        showHourly: 'Show hourly details',
        hideHourly: 'Hide hourly details',
        time: 'Time',
        period: 'Period',
        waveDir: 'Direction',
        swell: 'Swell',
        wind: 'Wind',
        airTemp: 'Air',
        waterTemp: 'Water',
        sunrise: 'Sunrise',
        sunset: 'Sunset',
        wetsuit: 'Wetsuit',
        bestTime: 'Best Time',
        highTide: 'High',
        lowTide: 'Low',
        tideNote: '* Tide times are approximate',
        loading: 'Loading data...',
        lastUpdate: 'Last update',
        hourlyDetail: 'Hourly Detail',
        early: 'Early',
        morning: 'Morning',
        afternoon: 'Afternoon',
        today: 'Today',
        // Directions
        N: 'N', NE: 'NE', E: 'E', SE: 'SE', S: 'S', SW: 'SW', W: 'W', NW: 'NW',
        // Wind conditions
        calm: 'Calm',
        offshore: 'Offshore',
        onshore: 'Onshore',
        strongOnshore: 'Strong Onshore',
        sideshore: 'Sideshore',
        // Ratings
        excellent: 'Epic',
        good: 'Good',
        fair: 'Meh',
        poor: 'Flat',
        // Tide types
        springTide: 'Spring Tide',
        neapTide: 'Neap Tide',
        middleTide: 'Mid Tide',
        longTide: 'Long Tide',
        springDesc: 'Big tidal range',
        neapDesc: 'Small tidal range',
        middleDesc: 'Normal tidal range',
        longDesc: 'Minimal tidal range',
        // Wetsuit
        trunks: 'Boardshorts',
        spring: 'Spring Suit',
        seagull: 'Short John',
        fullsuit3mm: '3mm Fullsuit',
        semidry: '5mm Semidry',
        drysuit: 'Drysuit',
        // Regions
        japan: 'Japan',
        // Weather
        weatherClear: 'Clear',
        weatherPartlyCloudy: 'Partly Cloudy',
        weatherCloudy: 'Cloudy',
        weatherFog: 'Fog',
        weatherDrizzle: 'Drizzle',
        weatherRain: 'Rain',
        weatherSnow: 'Snow',
        weatherThunder: 'Thunderstorm',
        weather: 'Weather',
        // Forecast interpretation
        forecastAdvice: 'Forecast Advice',
        // Intro
        introText: 'Free surf forecast for friendly surfers worldwide. Real-time wave data & prediction algorithm. Check the conditions and find your peak!',
        // Footer
        payForward: 'I will never take revenue from this site. If you catch a good wave, Pay it Forward!',
        coffeeText: 'Buy the site owner a morning coffee!',
        donateDescription: 'This site is completely non-profit, but there are some operating costs. If the forecast helps you catch a good wave, your support means a lot! (But no guarantees if it\'s wrong... haha)',
        charityTitle: 'Other recommended Pay it Forward options',
        charityDescription: 'I personally support these organizations. May everyone enjoy the best surfing in a sustainable, beautiful environment with an amazing community...',
        communityTitle: 'Join the Community',
        communityDescription: 'Connect with fellow surfers! Share trips, find surf buddies, get local tips, and more.',
        discordBtnText: 'Join Discord Server'
    },
    ja: {
        currentConditions: '現在のコンディション',
        tomorrowForecast: '明日の予報',
        weeklyForecast: '週間予報',
        selectSpot: 'サーフスポットを選択',
        selectDesc: '日本の人気14スポットから選んでください。他の国も近日追加予定！',
        waveHeight: '波高',
        waveNote: '※ビーチブレイクでは実際の波は表示より2〜3割大きくなります',
        todayHourly: '今日の時間別',
        showHourly: '時間別を見る',
        hideHourly: '時間別を隠す',
        time: '時間',
        period: '周期',
        waveDir: '波向き',
        swell: 'うねり',
        wind: '風',
        airTemp: '気温',
        waterTemp: '水温',
        sunrise: '日の出',
        sunset: '日の入',
        wetsuit: 'ウェットスーツ',
        bestTime: 'ベストタイム',
        highTide: '満潮',
        lowTide: '干潮',
        tideNote: '※潮汐は概算値です',
        loading: 'データを読み込み中...',
        lastUpdate: '最終更新',
        hourlyDetail: '時間別詳細',
        early: '早朝',
        morning: '午前',
        afternoon: '午後',
        today: '今日',
        // Directions
        N: '北', NE: '北東', E: '東', SE: '南東', S: '南', SW: '南西', W: '西', NW: '北西',
        // Wind conditions
        calm: '無風',
        offshore: 'オフショア',
        onshore: 'オンショア',
        strongOnshore: '強オンショア',
        sideshore: 'サイドショア',
        // Ratings
        excellent: '最高',
        good: '良い',
        fair: 'まあまあ',
        poor: '厳しい',
        // Tide types
        springTide: '大潮',
        neapTide: '小潮',
        middleTide: '中潮',
        longTide: '長潮',
        springDesc: '潮の干満差が大きい',
        neapDesc: '潮の干満差が小さい',
        middleDesc: '普通の干満差',
        longDesc: '干満差が最も小さい',
        // Wetsuit
        trunks: 'トランクス',
        spring: 'スプリング',
        seagull: 'シーガル',
        fullsuit3mm: '3mmフルスーツ',
        semidry: '5mmセミドライ',
        drysuit: 'ドライスーツ',
        // Regions
        japan: '日本',
        // Weather
        weatherClear: '晴れ',
        weatherPartlyCloudy: 'くもり時々晴れ',
        weatherCloudy: 'くもり',
        weatherFog: '霧',
        weatherDrizzle: '小雨',
        weatherRain: '雨',
        weatherSnow: '雪',
        weatherThunder: '雷雨',
        weather: '天気',
        // Forecast interpretation
        forecastAdvice: '予報アドバイス',
        // Intro
        introText: '世界中のフレンドリーサーファーのための無料波予報。リアルタイム波データ＆予測アルゴリズム。コンディションをチェックしてピークを見つけよう！',
        // Footer
        payForward: 'このサイトから収益は一切いただきません。いい波に乗れたら、Pay it Forward！',
        coffeeText: '運営者に朝のコーヒーをお願いね！',
        donateDescription: '完全に非収益ですが、どうしても感謝したい方はどうぞ。でも外れても知らんからな！このタブから開発者に寄付ができるよ。',
        charityTitle: 'その他おすすめのPay it Forward先',
        charityDescription: 'I personally support these organizations. May everyone enjoy the best surfing in a sustainable, beautiful environment with an amazing community...',
        communityTitle: 'コミュニティに参加',
        communityDescription: 'サーファー仲間とつながろう！トリップ募集、バディ探し、ローカル情報など。',
        discordBtnText: 'Discordサーバーに参加'
    }
};

function t(key) {
    return translations[currentLang][key] || key;
}

// ========================================
// Surf Spots by Country/Region
// ========================================
const COUNTRIES = {
    japan: {
        name: { en: '🇯🇵 Japan', ja: '🇯🇵 日本' },
        flag: '🇯🇵',
        regions: {
            shonan: {
                name: { en: 'Shonan', ja: '湘南' },
                spots: [
                    { id: 'kugenuma', name: { en: 'Kugenuma', ja: '鵠沼' }, lat: 35.3167, lon: 139.4667, facing: 180 },
                    { id: 'chigasaki', name: { en: 'Chigasaki', ja: '茅ヶ崎' }, lat: 35.3167, lon: 139.4000, facing: 180 },
                    { id: 'kamakura', name: { en: 'Kamakura', ja: '鎌倉' }, lat: 35.3083, lon: 139.5333, facing: 180 }
                ]
            },
            chiba: {
                name: { en: 'Chiba', ja: '千葉' },
                spots: [
                    { id: 'ichinomiya', name: { en: 'Ichinomiya', ja: '一宮' }, lat: 35.3833, lon: 140.3833, facing: 90 },
                    { id: 'katagai', name: { en: 'Katagai', ja: '片貝' }, lat: 35.4333, lon: 140.4167, facing: 90 },
                    { id: 'kujukuri', name: { en: 'Kujukuri', ja: '九十九里' }, lat: 35.5000, lon: 140.4333, facing: 90 }
                ]
            },
            izu: {
                name: { en: 'Izu', ja: '伊豆' },
                spots: [
                    { id: 'shirahama', name: { en: 'Shirahama', ja: '白浜' }, lat: 34.6667, lon: 138.9667, facing: 135 },
                    { id: 'tatado', name: { en: 'Tatadohama', ja: '多々戸浜' }, lat: 34.6500, lon: 138.9500, facing: 180 },
                    { id: 'kisami', name: { en: 'Kisami', ja: '吉佐美' }, lat: 34.6417, lon: 138.9333, facing: 180 }
                ]
            }
        }
    },
    philippines: {
        name: { en: '🇵🇭 Philippines', ja: '🇵🇭 フィリピン' },
        flag: '🇵🇭',
        regions: {
            elyu: {
                name: { en: 'La Union (ELYU)', ja: 'ラウニオン (ELYU)' },
                spots: [
                    { id: 'san-juan', name: { en: 'San Juan', ja: 'サンファン' }, lat: 16.6697, lon: 120.3150, facing: 270 },
                    { id: 'urbiztondo', name: { en: 'Urbiztondo', ja: 'ウルビストンド' }, lat: 16.6180, lon: 120.3170, facing: 270 },
                    { id: 'bacnotan', name: { en: 'Bacnotan', ja: 'バクノタン' }, lat: 16.7320, lon: 120.3480, facing: 270 }
                ]
            },
            siargao: {
                name: { en: 'Siargao Island', ja: 'シャルガオ島' },
                spots: [
                    { id: 'cloud9', name: { en: 'Cloud 9', ja: 'クラウド9' }, lat: 9.8486, lon: 126.1631, facing: 90 },
                    { id: 'stimpy', name: { en: "Stimpy's", ja: 'スティンピーズ' }, lat: 9.8450, lon: 126.1600, facing: 90 },
                    { id: 'jacking-horse', name: { en: 'Jacking Horse', ja: 'ジャッキングホース' }, lat: 9.8520, lon: 126.1650, facing: 90 }
                ]
            }
        }
    },
    indonesia: {
        name: { en: '🇮🇩 Indonesia', ja: '🇮🇩 インドネシア' },
        flag: '🇮🇩',
        regions: {
            bali: {
                name: { en: 'Bali', ja: 'バリ' },
                spots: [
                    { id: 'uluwatu', name: { en: 'Uluwatu', ja: 'ウルワツ' }, lat: -8.8291, lon: 115.0849, facing: 225 },
                    { id: 'padang', name: { en: 'Padang Padang', ja: 'パダンパダン' }, lat: -8.8144, lon: 115.0986, facing: 225 },
                    { id: 'kuta', name: { en: 'Kuta Beach', ja: 'クタビーチ' }, lat: -8.7180, lon: 115.1686, facing: 225 }
                ]
            }
        }
    },
    hawaii: {
        name: { en: '🇺🇸 Hawaii', ja: '🇺🇸 ハワイ' },
        flag: '🇺🇸',
        regions: {
            oahu: {
                name: { en: 'Oahu North Shore', ja: 'オアフ・ノースショア' },
                spots: [
                    { id: 'pipeline', name: { en: 'Pipeline', ja: 'パイプライン' }, lat: 21.6650, lon: -158.0539, facing: 315 },
                    { id: 'sunset', name: { en: 'Sunset Beach', ja: 'サンセットビーチ' }, lat: 21.6783, lon: -158.0419, facing: 315 },
                    { id: 'waimea', name: { en: 'Waimea Bay', ja: 'ワイメアベイ' }, lat: 21.6419, lon: -158.0656, facing: 315 }
                ]
            }
        }
    },
    australia: {
        name: { en: '🇦🇺 Australia', ja: '🇦🇺 オーストラリア' },
        flag: '🇦🇺',
        regions: {
            goldcoast: {
                name: { en: 'Gold Coast', ja: 'ゴールドコースト' },
                spots: [
                    { id: 'snapper', name: { en: 'Snapper Rocks', ja: 'スナッパーロックス' }, lat: -28.1656, lon: 153.5494, facing: 90 },
                    { id: 'kirra', name: { en: 'Kirra', ja: 'キラ' }, lat: -28.1653, lon: 153.5336, facing: 90 },
                    { id: 'burleigh', name: { en: 'Burleigh Heads', ja: 'バーレーヘッズ' }, lat: -28.0864, lon: 153.4556, facing: 90 }
                ]
            }
        }
    },
    portugal: {
        name: { en: '🇵🇹 Portugal', ja: '🇵🇹 ポルトガル' },
        flag: '🇵🇹',
        regions: {
            peniche: {
                name: { en: 'Peniche', ja: 'ペニシェ' },
                spots: [
                    { id: 'supertubos', name: { en: 'Supertubos', ja: 'スーパーチューボス' }, lat: 39.3558, lon: -9.3708, facing: 270 },
                    { id: 'nazare', name: { en: 'Nazaré', ja: 'ナザレ' }, lat: 39.6017, lon: -9.0714, facing: 270 },
                    { id: 'ericeira', name: { en: 'Ericeira', ja: 'エリセイラ' }, lat: 38.9631, lon: -9.4189, facing: 270 }
                ]
            }
        }
    },
    california: {
        name: { en: '🇺🇸 California', ja: '🇺🇸 カリフォルニア' },
        flag: '🇺🇸',
        regions: {
            socal: {
                name: { en: 'Southern California', ja: '南カリフォルニア' },
                spots: [
                    { id: 'trestles', name: { en: 'Trestles', ja: 'トレッスルズ' }, lat: 33.3825, lon: -117.5886, facing: 225 },
                    { id: 'huntington', name: { en: 'Huntington Beach', ja: 'ハンティントンビーチ' }, lat: 33.6553, lon: -117.9992, facing: 225 },
                    { id: 'malibu', name: { en: 'Malibu', ja: 'マリブ' }, lat: 34.0369, lon: -118.6778, facing: 180 }
                ]
            }
        }
    }
};

// Flatten spots for easy access
function getAllSpots() {
    const spots = [];
    Object.entries(COUNTRIES).forEach(([countryId, country]) => {
        Object.entries(country.regions).forEach(([regionId, region]) => {
            region.spots.forEach(spot => {
                spots.push({
                    ...spot,
                    countryId,
                    regionId,
                    regionName: region.name,
                    countryName: country.name
                });
            });
        });
    });
    return spots;
}

const ALL_SPOTS = getAllSpots();

// ========================================
// Global State
// ========================================
let currentSpot = ALL_SPOTS[0];
let forecastData = null;

// ========================================
// Funny Comments System
// ========================================
function generateFunnyComment(waveHeight, wavePeriod, windCond, score, lang) {
    const comments = {
        en: {
            flat: [
                "Netflix and chill? The ocean sure is...",
                "Perfect day to fix your dings",
                "SUP yoga anyone?",
                "Time to practice your pop-ups on land",
                "The ocean called in sick today",
                "Even the fish are bored",
                "Flatter than a pancake out there",
                "Good day to organize your wetsuit drawer",
                "The lake called, wants its waves back",
                "Meditation session at the beach?"
            ],
            small: [
                "Longboard therapy session",
                "Knee-high fun rides",
                "Perfect for learning or chilling",
                "Small but playful!",
                "Log it up, bro",
                "Mellow vibes only",
                "Bring the foamie!",
                "Cruisy day ahead",
                "Fun-sized waves",
                "Summer vibes, winter size"
            ],
            good: [
                "Get out there! No excuses!",
                "Your boss won't notice you're gone",
                "Call in sick, it's worth it",
                "The waves are calling your name",
                "Stoke levels: HIGH",
                "Time to earn those tan lines",
                "Cancel your afternoon meetings",
                "The ocean is serving today",
                "Paddle out and find out!",
                "Good things come to those who surf"
            ],
            epic: [
                "DROP EVERYTHING AND GO!!!",
                "This is not a drill! EPIC conditions!",
                "You'll regret missing this one",
                "Tell your boss you have food poisoning",
                "Best day of the year maybe?!",
                "Legends are made on days like this",
                "Your board is literally crying for you",
                "This is what we live for!!!",
                "Quit your job. Just kidding. Maybe.",
                "The surf gods have blessed us today"
            ],
            big: [
                "Big wave, big dreams, big hospital bills maybe",
                "Know your limits, legend",
                "Experts only - seriously",
                "Hold-downs are free today",
                "Respect the ocean today",
                "Check your life insurance first",
                "Gun day. You brought your gun, right?",
                "Not for the faint of heart"
            ],
            offshore: [
                "Glass! Clean faces ahead",
                "Offshore perfection incoming",
                "Silky smooth conditions",
                "The wind is your friend today",
                "Glassy goodness awaits",
                "Mirror-like conditions"
            ],
            onshore: [
                "Bit choppy but still fun",
                "Bring your positive attitude",
                "Character building conditions",
                "Bumpy ride ahead",
                "Wind won't stop the determined",
                "Embrace the chop!"
            ],
            swell: [
                "Nice groundswell coming through!",
                "Quality swell in the water",
                "Long period energy = good times",
                "The ocean is pumping today",
                "Swell is looking juicy!",
                "Power from the deep"
            ]
        },
        ja: {
            flat: [
                "今日はNetflixの日かな...",
                "板のリペアに最適な日！",
                "SUPヨガでもする？",
                "陸トレの日だね",
                "海がお休みモード",
                "魚も暇そうだね",
                "プールより平ら",
                "ウェット整理の日にしよう",
                "湖かな？って思うレベル",
                "ビーチで瞑想でもする？"
            ],
            small: [
                "ロングボードでまったり",
                "膝波で遊ぼう",
                "初心者にぴったり",
                "小さいけど楽しい！",
                "ログでクルージング",
                "まったりバイブスで",
                "スポンジボード持ってきて！",
                "ゆるゆるデイ",
                "ミニサイズでも楽しめる",
                "夏の気分、冬のサイズ"
            ],
            good: [
                "海行くしかない！言い訳無用！",
                "上司にバレないよ多分",
                "仮病使ってでも行く価値あり",
                "波が君を呼んでいる",
                "ストークレベル：MAX",
                "日焼けする準備OK？",
                "午後の会議キャンセルしよ",
                "海がご馳走を用意してる",
                "パドルアウトあるのみ！",
                "サーフィンする者に幸あれ"
            ],
            epic: [
                "今すぐ仕事やめて海へ！！！",
                "これは訓練ではない！最高の波！",
                "逃したら後悔するやつ",
                "食中毒ってことにしとけ",
                "今年ベストの日かも？！",
                "伝説はこういう日に生まれる",
                "板が泣いて呼んでるよ",
                "これが生きる理由！！！",
                "仕事辞める？冗談...いや本気かも",
                "サーフの神様が微笑んでる"
            ],
            big: [
                "デカ波、ビッグドリーム、病院代もビッグかも",
                "限界を知ろう、レジェンド",
                "上級者オンリー、マジで",
                "巻かれ放題",
                "今日は海をリスペクト",
                "保険入ってる？",
                "ガンの日。ガン持ってきた？",
                "心臓弱い人は見学で"
            ],
            offshore: [
                "グラッシー！面ツル確定",
                "オフショア最高",
                "シルキースムース",
                "風が味方してくれてる",
                "鏡みたいな海面",
                "無風パラダイス"
            ],
            onshore: [
                "ちょいチョッピーだけど楽しめる",
                "ポジティブマインドで",
                "修行日和",
                "ガタガタ道だけど前進あるのみ",
                "風に負けない心で",
                "チョッピーを楽しめ！"
            ],
            swell: [
                "いいグランドスウェル来てる！",
                "クオリティスウェル",
                "ロングピリオド＝グッドタイム",
                "海がパンプしてる！",
                "うねりがジューシー！",
                "深海からのパワー"
            ]
        }
    };

    const langComments = comments[lang] || comments.en;
    let pool = [];

    if (waveHeight < 0.3) {
        pool = langComments.flat;
    } else if (waveHeight < 0.5) {
        pool = langComments.small;
    } else if (score >= 75) {
        pool = langComments.epic;
    } else if (score >= 55) {
        pool = langComments.good;
    } else if (waveHeight > 2.0) {
        pool = langComments.big;
    }

    // Add wind/swell comments
    if (windCond.type === 'offshore') {
        pool = [...pool, ...langComments.offshore];
    } else if (windCond.type === 'onshore') {
        pool = [...pool, ...langComments.onshore];
    }
    if (wavePeriod >= 10) {
        pool = [...pool, ...langComments.swell];
    }

    if (pool.length === 0) pool = langComments.good;
    return pool[Math.floor(Math.random() * pool.length)];
}

function generateForecastInterpretation(bestScore, bestWaveHeight, bestWindCond, avgScore, lang) {
    const interpretations = {
        en: {
            epic: [
                "Tomorrow is looking FIRE! Set your alarm early, tell your boss you have a dentist appointment, and get ready for some epic sessions. The wind and swell are aligning perfectly - this is the kind of day you'll be talking about at the bar for weeks!",
                "OK so... tomorrow might be one of those days. You know, THE days. The kind where you call in sick, grab your favorite board, and make memories. The ocean is basically sending you a personal invitation!",
                "Alert alert! The surf gods have spoken and they're feeling generous tomorrow. Clean conditions, solid swell, and the kind of waves that make you forget all your problems. Don't you dare miss this!"
            ],
            good: [
                "Looking pretty solid for tomorrow! Not quite 'quit your job' territory, but definitely worth setting that alarm a bit earlier. Conditions should be clean and fun - perfect for some quality water time.",
                "Tomorrow's shaping up nicely! The waves are rolling in and the wind is playing nice. It's the kind of day that reminds you why you fell in love with surfing in the first place.",
                "Hey, tomorrow's got potential! Maybe not postcard-perfect, but good enough to get your stoke on. Pack your board, bring your smile, and enjoy what the ocean's serving up."
            ],
            fair: [
                "Tomorrow's a bit of a mixed bag, not gonna lie. But hey, a day in the water beats a day anywhere else, right? Might need to work a little harder for those waves, but they're out there waiting.",
                "It's not going to be magazine cover material tomorrow, but there's still fun to be had. Lower your expectations slightly, bring a positive attitude, and you'll find some gems out there.",
                "Tomorrow's forecast is basically saying 'maybe'. Could be fun, could be meh. But you know what? Sometimes those 'meh' days surprise you with the best waves when you least expect it."
            ],
            poor: [
                "Tomorrow's looking pretty flat, friend. The ocean's taking a day off, and honestly, maybe you should too. Good day for board maintenance, watching surf videos, or just dreaming about better days.",
                "Not gonna sugarcoat it - tomorrow's a pass. Unless you've got a 10-foot longboard and endless patience, maybe use the day for some cross-training or catching up on sleep.",
                "The surf forecast is basically showing the ocean's screensaver tomorrow. But don't worry, conditions change! Use the downtime to wax your board and visualize your next epic session."
            ]
        },
        ja: {
            epic: [
                "明日はヤバいよ！早起きして、上司には歯医者って言っておいて、最高のセッションの準備をしよう。風とうねりが完璧に揃ってる - これは何週間も語り継がれるような一日になるかも！",
                "えーっと...明日はあの日かもしれない。そう、THE DAY。仮病使って、お気に入りの板を持って、思い出を作る日。海からの個人的な招待状が届いてるよ！",
                "アラート！サーフの神様が明日は気前がいいみたい。クリーンなコンディション、しっかりしたうねり、悩みを全部忘れさせてくれる波。絶対逃しちゃダメ！"
            ],
            good: [
                "明日はかなり良さそう！「仕事辞める」レベルではないけど、いつもより早起きする価値あり。コンディションはクリーンで楽しい - 質の高いサーフタイムが過ごせそう。",
                "明日はいい感じ！波は来てるし、風も味方してくれてる。サーフィンを好きになった理由を思い出させてくれる、そんな一日になりそう。",
                "明日はポテンシャルあり！絵葉書みたいに完璧じゃないけど、ストーク上げるには十分。板を積んで、笑顔を忘れずに、海が用意してくれてるものを楽しもう。"
            ],
            fair: [
                "正直、明日は微妙かも。でもさ、どこにいるよりも海にいる方がいいでしょ？波をつかむのにちょっと頑張らないといけないかもだけど、待ってる波はあるよ。",
                "明日は雑誌の表紙にはならないけど、楽しみはある。期待値をちょい下げて、ポジティブな気持ちで行けば、宝石みたいな波が見つかるかも。",
                "明日の予報は基本的に「たぶん」って言ってる。楽しいかも、微妙かも。でもさ、そういう「微妙」な日に限って、最高の波が来たりするんだよね。"
            ],
            poor: [
                "明日はかなりフラットっぽい、友よ。海がお休みモードだから、君もそうした方がいいかも。板のメンテナンス、サーフ動画鑑賞、もっといい日を夢見る、そんな日にしよう。",
                "オブラートに包まない - 明日はパス。10フィートのロングボードと無限の忍耐がない限り、クロストレーニングか睡眠に充てた方がいいかも。",
                "明日のサーフ予報は海のスクリーンセーバー状態。でも心配しないで、コンディションは変わるから！ダウンタイムを使って板にワックス塗って、次のエピックセッションをイメージしよう。"
            ]
        }
    };

    const langInterp = interpretations[lang] || interpretations.en;
    let pool;

    // Adjusted thresholds for stricter scoring system
    if (bestScore >= 65) {
        pool = langInterp.epic;
    } else if (bestScore >= 45) {
        pool = langInterp.good;
    } else if (bestScore >= 25) {
        pool = langInterp.fair;
    } else {
        pool = langInterp.poor;
    }

    return pool[Math.floor(Math.random() * pool.length)];
}

// ========================================
// Tide Calculation
// ========================================
function getMoonAge(date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    let c = Math.floor(year / 100);
    let y = year - 19 * Math.floor(year / 19);
    let k = Math.floor((c - 17) / 25);
    let i = c - Math.floor(c / 4) - Math.floor((c - k) / 3) + 19 * y + 15;
    i = i - 30 * Math.floor(i / 30);
    i = i - Math.floor(i / 28) * (1 - Math.floor(i / 28) * Math.floor(29 / (i + 1)) * Math.floor((21 - y) / 11));
    let j = year + Math.floor(year / 4) + i + 2 - c + Math.floor(c / 4);
    j = j - 7 * Math.floor(j / 7);
    let l = i - j;
    let moonAge = month + day + l;
    return moonAge - 30 * Math.floor(moonAge / 30);
}

function getTideType(moonAge) {
    const normalized = moonAge % 29.5;
    if (normalized <= 2 || normalized >= 27.5 || (normalized >= 13.5 && normalized <= 16.5)) {
        return { type: 'spring', labelKey: 'springTide', descKey: 'springDesc' };
    } else if ((normalized >= 5.5 && normalized <= 9.5) || (normalized >= 20.5 && normalized <= 24.5)) {
        return { type: 'neap', labelKey: 'neapTide', descKey: 'neapDesc' };
    } else if ((normalized >= 2 && normalized <= 5.5) || (normalized >= 16.5 && normalized <= 20.5)) {
        return { type: 'middle', labelKey: 'middleTide', descKey: 'middleDesc' };
    }
    return { type: 'long', labelKey: 'longTide', descKey: 'longDesc' };
}

function calculateTideTimes(date, regionId) {
    const moonAge = getMoonAge(date);
    const tideType = getTideType(moonAge);
    const regionOffset = { shonan: 0.5, chiba: -0.3, ibaraki: -0.5, izu: 0.8 };
    const offset = regionOffset[regionId] || 0;
    const moonShift = (moonAge * 50) / 60;

    let highTide1 = (6.5 + moonShift + offset) % 24;
    let highTide2 = (highTide1 + 12.4) % 24;
    let lowTide1 = (highTide1 + 6.2) % 24;
    let lowTide2 = (highTide2 + 6.2) % 24;

    const formatTime = (hours) => {
        const h = Math.floor(hours);
        const m = Math.round((hours - h) * 60);
        return `${h}:${String(m).padStart(2, '0')}`;
    };

    const tides = [
        { type: 'high', time: highTide1 },
        { type: 'low', time: lowTide1 },
        { type: 'high', time: highTide2 },
        { type: 'low', time: lowTide2 }
    ].sort((a, b) => a.time - b.time);

    return {
        tideType,
        times: tides.map(t => ({ ...t, timeStr: formatTime(t.time) }))
    };
}

// ========================================
// Utility Functions
// ========================================
function getWindArrow(degrees) {
    const arrows = ['↓', '↙', '←', '↖', '↑', '↗', '→', '↘'];
    return arrows[Math.round(degrees / 45) % 8];
}

function getDirectionText(degrees) {
    const keys = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    return t(keys[Math.round(degrees / 45) % 8]);
}

function formatDate(dateStr) {
    const date = new Date(dateStr);
    const daysEn = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const daysJa = ['日', '月', '火', '水', '木', '金', '土'];
    const days = currentLang === 'ja' ? daysJa : daysEn;
    return {
        dayName: days[date.getDay()],
        date: `${date.getMonth() + 1}/${date.getDate()}`,
        full: date
    };
}

function formatSunTime(isoString) {
    if (!isoString) return '--:--';
    const date = new Date(isoString);
    return `${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')}`;
}

// ========================================
// Surf Condition Scoring
// ========================================
function calculateWaveScore(waveHeight, wavePeriod, waveDirection, spotFacing) {
    let score = 0;

    // Wave height is PRIMARY factor (0-50 points)
    // Stricter scoring - small waves = low score
    if (waveHeight < 0.3) {
        score += 0;  // Flat - not surfable
    } else if (waveHeight < 0.5) {
        score += 10; // Barely surfable, longboard only
    } else if (waveHeight < 0.8) {
        score += 25; // Small but fun
    } else if (waveHeight < 1.2) {
        score += 40; // Good size
    } else if (waveHeight < 1.8) {
        score += 50; // Ideal
    } else if (waveHeight < 2.5) {
        score += 40; // Getting big
    } else if (waveHeight < 3.5) {
        score += 25; // Expert only
    } else {
        score += 10; // Dangerous
    }

    // Bonus multiplier based on wave height - small waves get reduced bonuses
    let bonusMultiplier;
    if (waveHeight < 0.3) {
        bonusMultiplier = 0.2;  // Almost no bonus for flat
    } else if (waveHeight < 0.5) {
        bonusMultiplier = 0.3;  // Minimal bonus for tiny waves
    } else if (waveHeight < 0.8) {
        bonusMultiplier = 0.6;  // Reduced bonus for small waves
    } else {
        bonusMultiplier = 1.0;  // Full bonus for good size
    }

    // Period bonus (0-25 points) - scaled by wave height
    if (wavePeriod >= 12) score += Math.round(25 * bonusMultiplier);
    else if (wavePeriod >= 10) score += Math.round(20 * bonusMultiplier);
    else if (wavePeriod >= 8) score += Math.round(15 * bonusMultiplier);
    else if (wavePeriod >= 6) score += Math.round(10 * bonusMultiplier);
    else score += Math.round(5 * bonusMultiplier);

    // Direction bonus (0-25 points) - scaled by wave height
    if (waveDirection !== null && !isNaN(waveDirection)) {
        const angleDiff = Math.abs(waveDirection - spotFacing);
        const normalizedDiff = angleDiff > 180 ? 360 - angleDiff : angleDiff;
        if (normalizedDiff <= 30) score += Math.round(25 * bonusMultiplier);
        else if (normalizedDiff <= 60) score += Math.round(18 * bonusMultiplier);
        else if (normalizedDiff <= 90) score += Math.round(10 * bonusMultiplier);
        else score += Math.round(5 * bonusMultiplier);
    }

    return Math.min(100, Math.round(score));
}

// Wind adjustment to score
function adjustScoreForWind(baseScore, windCond) {
    let adjustment = 0;
    switch (windCond.type) {
        case 'offshore': adjustment = 10; break;
        case 'calm': adjustment = 5; break;
        case 'cross': adjustment = 0; break;
        case 'onshore': adjustment = -10; break;
        case 'strong-onshore': adjustment = -20; break;
    }
    return Math.max(0, Math.min(100, baseScore + adjustment));
}

function getWindCondition(windSpeed, windDirection, spotFacing) {
    const angleDiff = Math.abs(windDirection - spotFacing);
    const normalizedDiff = angleDiff > 180 ? 360 - angleDiff : angleDiff;
    const isOffshore = normalizedDiff >= 150 && normalizedDiff <= 210;
    const isOnshore = normalizedDiff <= 30 || normalizedDiff >= 330;

    if (windSpeed < 3) return { type: 'calm', labelKey: 'calm', class: 'wind-offshore' };
    if (isOffshore) return { type: 'offshore', labelKey: 'offshore', class: 'wind-offshore' };
    if (isOnshore) {
        if (windSpeed > 8) return { type: 'strong-onshore', labelKey: 'strongOnshore', class: 'wind-onshore' };
        return { type: 'onshore', labelKey: 'onshore', class: 'wind-onshore' };
    }
    return { type: 'cross', labelKey: 'sideshore', class: 'wind-cross' };
}

function getRating(score) {
    // Adjusted thresholds for stricter scoring system
    if (score >= 65) return { class: 'epic', labelKey: 'excellent' };
    if (score >= 45) return { class: 'good', labelKey: 'good' };
    if (score >= 25) return { class: 'fair', labelKey: 'fair' };
    return { class: 'poor', labelKey: 'poor' };
}

function getWetsuitRecommendation(seaTemp) {
    if (seaTemp === null) return null;
    if (seaTemp >= 24) return { suitKey: 'trunks' };
    if (seaTemp >= 22) return { suitKey: 'spring' };
    if (seaTemp >= 20) return { suitKey: 'seagull' };
    if (seaTemp >= 17) return { suitKey: 'fullsuit3mm' };
    if (seaTemp >= 14) return { suitKey: 'semidry' };
    return { suitKey: 'drysuit' };
}

function getWeatherInfo(weatherCode) {
    // WMO Weather interpretation codes with emoji icons
    if (weatherCode === 0) return { labelKey: 'weatherClear', emoji: '\u2600\uFE0F' }; // sun
    if (weatherCode <= 3) return { labelKey: 'weatherPartlyCloudy', emoji: '\u26C5' }; // cloud-sun
    if (weatherCode <= 49) return { labelKey: 'weatherFog', emoji: '\uD83C\uDF2B\uFE0F' }; // fog
    if (weatherCode <= 59) return { labelKey: 'weatherDrizzle', emoji: '\uD83C\uDF27\uFE0F' }; // rain
    if (weatherCode <= 69) return { labelKey: 'weatherRain', emoji: '\uD83C\uDF27\uFE0F' }; // rain
    if (weatherCode <= 79) return { labelKey: 'weatherSnow', emoji: '\u2744\uFE0F' }; // snow
    if (weatherCode <= 84) return { labelKey: 'weatherRain', emoji: '\uD83C\uDF27\uFE0F' }; // rain
    if (weatherCode <= 94) return { labelKey: 'weatherSnow', emoji: '\u2744\uFE0F' }; // snow
    if (weatherCode <= 99) return { labelKey: 'weatherThunder', emoji: '\u26A1' }; // thunder
    return { labelKey: 'weatherCloudy', emoji: '\u2601\uFE0F' }; // cloud
}

// Icons as unicode escape sequences to avoid editor issues
const ICONS = {
    wave: '\uD83C\uDF0A',      // wave emoji
    wind: '\uD83D\uDCA8',      // wind emoji
    weather: '\uD83C\uDF24\uFE0F' // sun behind cloud
};

// ========================================
// API
// ========================================
async function fetchMarineData(lat, lon) {
    const marineParams = new URLSearchParams({
        latitude: lat, longitude: lon,
        hourly: ['wave_height', 'wave_direction', 'wave_period', 'swell_wave_height', 'swell_wave_direction', 'swell_wave_period', 'wind_wave_height', 'wind_wave_direction', 'wind_wave_period', 'sea_surface_temperature'].join(','),
        daily: ['wave_height_max', 'wave_direction_dominant', 'wave_period_max'].join(','),
        timezone: 'Asia/Tokyo',
        forecast_days: 7
    });

    const weatherParams = new URLSearchParams({
        latitude: lat, longitude: lon,
        hourly: ['wind_speed_10m', 'wind_direction_10m', 'temperature_2m', 'weather_code'].join(','),
        daily: ['weather_code', 'temperature_2m_max', 'temperature_2m_min', 'sunrise', 'sunset'].join(','),
        timezone: 'Asia/Tokyo',
        forecast_days: 7
    });

    const [marineRes, weatherRes] = await Promise.all([
        fetch(`https://marine-api.open-meteo.com/v1/marine?${marineParams}`),
        fetch(`https://api.open-meteo.com/v1/forecast?${weatherParams}`)
    ]);

    if (!marineRes.ok || !weatherRes.ok) throw new Error('API request failed');

    return {
        marine: await marineRes.json(),
        weather: await weatherRes.json(),
        timestamp: new Date()
    };
}

// ========================================
// UI Rendering
// ========================================
function renderSpotTabs() {
    const container = document.getElementById('spotTabs');

    // Build country options
    let countryOptions = '';
    Object.entries(COUNTRIES).forEach(([countryId, country]) => {
        const isSelected = countryId === currentSpot.countryId;
        countryOptions += `<option value="${countryId}" ${isSelected ? 'selected' : ''}>${country.name[currentLang]}</option>`;
    });

    // Build spot options for current country
    const currentCountry = COUNTRIES[currentSpot.countryId];
    let spotOptions = '';
    Object.entries(currentCountry.regions).forEach(([regionId, region]) => {
        spotOptions += `<optgroup label="${region.name[currentLang]}">`;
        region.spots.forEach(spot => {
            const isSelected = spot.id === currentSpot.id;
            spotOptions += `<option value="${spot.id}" ${isSelected ? 'selected' : ''}>${spot.name[currentLang]}</option>`;
        });
        spotOptions += `</optgroup>`;
    });

    container.innerHTML = `
        <div class="spot-selector-wrap">
            <div class="spot-selector country-select">
                <select id="countrySelect" class="spot-dropdown">
                    ${countryOptions}
                </select>
            </div>
            <div class="spot-selector spot-select">
                <select id="spotSelect" class="spot-dropdown">
                    ${spotOptions}
                </select>
            </div>
        </div>
        <div class="spot-count">${ALL_SPOTS.length} spots worldwide</div>
    `;

    // Country change handler
    document.getElementById('countrySelect').addEventListener('change', (e) => {
        const countryId = e.target.value;
        const country = COUNTRIES[countryId];
        const firstRegion = Object.values(country.regions)[0];
        const firstSpot = firstRegion.spots[0];
        const spot = ALL_SPOTS.find(s => s.id === firstSpot.id);
        if (spot) selectSpot(spot);
    });

    // Spot change handler
    document.getElementById('spotSelect').addEventListener('change', (e) => {
        const spot = ALL_SPOTS.find(s => s.id === e.target.value);
        if (spot) selectSpot(spot);
    });
}

function renderCurrentConditions(data) {
    const container = document.getElementById('currentConditions');
    const now = new Date();
    const hourIndex = now.getHours();

    const hourly = data.marine.hourly;
    const weather = data.weather.hourly;
    const weatherDaily = data.weather.daily;

    const waveHeight = hourly.wave_height[hourIndex] || 0;
    const wavePeriod = hourly.wave_period[hourIndex] || 0;
    const waveDirection = hourly.wave_direction[hourIndex];
    const swellHeight = hourly.swell_wave_height?.[hourIndex] || 0;
    const windSpeed = weather.wind_speed_10m[hourIndex] || 0;
    const windDirection = weather.wind_direction_10m[hourIndex] || 0;
    const temp = weather.temperature_2m[hourIndex] || 0;
    const seaTemp = hourly.sea_surface_temperature?.[hourIndex] || null;

    const sunrise = weatherDaily.sunrise?.[0];
    const sunset = weatherDaily.sunset?.[0];
    const wetsuit = getWetsuitRecommendation(seaTemp);
    const weatherCode = weather.weather_code?.[hourIndex] || 0;
    const weatherInfo = getWeatherInfo(weatherCode);

    const windCond = getWindCondition(windSpeed, windDirection, currentSpot.facing);
    const baseScore = calculateWaveScore(waveHeight, wavePeriod, waveDirection, currentSpot.facing);
    const score = adjustScoreForWind(baseScore, windCond);
    const rating = getRating(score);
    const tideInfo = calculateTideTimes(now, currentSpot.regionId);

    const funnyComment = generateFunnyComment(waveHeight, wavePeriod, windCond, score, currentLang);

    // Determine wind card class
    const isOnshore = windCond.type === 'onshore' || windCond.type === 'strong-onshore';
    const windCardClass = isOnshore ? 'wind-card onshore-card' : 'wind-card';

    container.innerHTML = `
        <h2>${t('currentConditions')}</h2>

        <!-- Header: Spot | Rating | Score | Comment -->
        <div class="condition-header fade-in">
            <div class="condition-spot-name">${currentSpot.name[currentLang]}</div>
            <div class="condition-rating-wrap">
                <div class="rating-badge-compact ${rating.class}">${t(rating.labelKey)}</div>
                <div class="condition-score">${score}<span class="score-unit">pt</span></div>
            </div>
            <div class="condition-comment">"${funnyComment}"</div>
        </div>

        <!-- Primary: Wave Height + Wind + Weather -->
        <div class="primary-stats fade-in">
            <div class="primary-stat-card wave-card">
                <div class="primary-stat-info">
                    <div class="primary-stat-label">${ICONS.wave} ${t('waveHeight')}</div>
                    <div class="primary-stat-value">${waveHeight.toFixed(1)}<span class="unit">m</span></div>
                    <div class="primary-stat-sub">${wavePeriod.toFixed(0)}s ${getWindArrow(waveDirection || 0)} ${getDirectionText(waveDirection || 0)}</div>
                </div>
            </div>
            <div class="primary-stat-card ${windCardClass}">
                <div class="primary-stat-info">
                    <div class="primary-stat-label">${ICONS.wind} ${t('wind')}</div>
                    <div class="primary-stat-value">${windSpeed.toFixed(0)}<span class="unit">m/s</span></div>
                    <div class="primary-stat-sub ${windCond.class}">${t(windCond.labelKey)} ${getWindArrow(windDirection)}</div>
                </div>
            </div>
            <div class="primary-stat-card weather-card">
                <div class="primary-stat-info">
                    <div class="primary-stat-label">${weatherInfo.emoji} ${t('weather')}</div>
                    <div class="primary-stat-value weather-value">${t(weatherInfo.labelKey)}</div>
                </div>
            </div>
        </div>
        <div class="wave-note fade-in">${t('waveNote')}</div>

        <!-- Secondary: Air Temp, Water Temp, Swell, Wetsuit -->
        <div class="secondary-stats fade-in">
            <div class="secondary-stat">
                <div class="secondary-stat-value">${temp.toFixed(0)}<span class="unit">°C</span></div>
                <div class="secondary-stat-label">${t('airTemp')}</div>
            </div>
            ${seaTemp !== null ? `
            <div class="secondary-stat">
                <div class="secondary-stat-value">${seaTemp.toFixed(1)}<span class="unit">°C</span></div>
                <div class="secondary-stat-label">${t('waterTemp')}</div>
            </div>` : ''}
            <div class="secondary-stat">
                <div class="secondary-stat-value">${swellHeight.toFixed(1)}<span class="unit">m</span></div>
                <div class="secondary-stat-label">${t('swell')}</div>
            </div>
            ${wetsuit ? `
            <div class="secondary-stat wetsuit-stat">
                <div class="secondary-stat-value">${t(wetsuit.suitKey)}</div>
                <div class="secondary-stat-label">${t('wetsuit')}</div>
            </div>` : ''}
        </div>

        <!-- Tertiary: Sun + Tide -->
        <div class="tertiary-info fade-in">
            <div class="sun-info-compact">
                <div class="sun-info-item">
                    <span class="sun-info-label">${t('sunrise')}</span>
                    <span class="sun-info-time">${formatSunTime(sunrise)}</span>
                </div>
                <div class="sun-info-item">
                    <span class="sun-info-label">${t('sunset')}</span>
                    <span class="sun-info-time">${formatSunTime(sunset)}</span>
                </div>
            </div>
            <div class="tide-info-compact">
                <span class="tide-type-badge">${t(tideInfo.tideType.labelKey)}</span>
                <div class="tide-times-compact">
                    ${tideInfo.times.map(ti => `
                        <div class="tide-time-compact ${ti.type}">
                            <span class="tide-icon">${ti.type === 'high' ? '▲' : '▼'}</span>
                            <span class="tide-val">${ti.timeStr}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>

        <!-- Collapsible Hourly Section -->
        <div class="hourly-toggle-section fade-in">
            <button class="hourly-toggle-btn" onclick="toggleTodayHourly()">
                <span class="toggle-icon">▼</span>
                <span class="toggle-text">${t('showHourly')}</span>
            </button>
            <div class="today-hourly-content" id="todayHourlyContent" style="display: none;">
                ${generateTodayHourlyTable(data)}
            </div>
        </div>
    `;
}

function generateTodayHourlyTable(data) {
    const hourly = data.marine.hourly;
    const weather = data.weather.hourly;
    const now = new Date();
    const todayStr = now.toISOString().split('T')[0];
    const currentHour = now.getHours();

    let rows = '';
    for (let hour = 5; hour <= 20; hour++) {
        const targetTime = `${todayStr}T${String(hour).padStart(2, '0')}:00`;
        const index = hourly.time.findIndex(time => time === targetTime);
        if (index === -1) continue;

        const waveHeight = hourly.wave_height[index] || 0;
        const wavePeriod = hourly.wave_period[index] || 0;
        const waveDirection = hourly.wave_direction[index];
        const windSpeed = weather.wind_speed_10m[index] || 0;
        const windDirection = weather.wind_direction_10m[index] || 0;

        const windCond = getWindCondition(windSpeed, windDirection, currentSpot.facing);
        const baseScore = calculateWaveScore(waveHeight, wavePeriod, waveDirection, currentSpot.facing);
        const score = adjustScoreForWind(baseScore, windCond);
        const rating = getRating(score);

        const isCurrentHour = hour === currentHour;
        const isPast = hour < currentHour;
        const rowClass = isCurrentHour ? 'current-hour' : (isPast ? 'past-hour' : '');

        rows += `
            <tr class="${rowClass}">
                <td class="hourly-time">${hour}:00</td>
                <td class="hourly-wave">${waveHeight.toFixed(1)}m</td>
                <td class="hourly-period">${wavePeriod.toFixed(0)}s</td>
                <td class="hourly-wind">${windSpeed.toFixed(0)}m/s ${getWindArrow(windDirection)}</td>
                <td class="hourly-score"><span class="mini-badge ${rating.class}">${score}</span></td>
            </tr>
        `;
    }

    return `
        <table class="today-hourly-table">
            <thead>
                <tr>
                    <th>${t('time')}</th>
                    <th>${t('waveHeight')}</th>
                    <th>${t('period')}</th>
                    <th>${t('wind')}</th>
                    <th>Score</th>
                </tr>
            </thead>
            <tbody>
                ${rows}
            </tbody>
        </table>
    `;
}

function toggleTodayHourly() {
    const content = document.getElementById('todayHourlyContent');
    const btn = document.querySelector('.hourly-toggle-btn');
    const icon = btn.querySelector('.toggle-icon');
    const text = btn.querySelector('.toggle-text');

    if (content.style.display === 'none') {
        content.style.display = 'block';
        icon.textContent = '▲';
        text.textContent = t('hideHourly');
    } else {
        content.style.display = 'none';
        icon.textContent = '▼';
        text.textContent = t('showHourly');
    }
}

function renderTomorrowForecast(data) {
    const container = document.getElementById('tomorrowForecast');
    const hourly = data.marine.hourly;
    const weather = data.weather.hourly;

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowStr = tomorrow.toISOString().split('T')[0];

    const allHours = [];
    for (let hour = 5; hour <= 18; hour++) {
        const targetTime = `${tomorrowStr}T${String(hour).padStart(2, '0')}:00`;
        const index = hourly.time.findIndex(time => time === targetTime);
        if (index === -1) continue;

        const waveHeight = hourly.wave_height[index] || 0;
        const wavePeriod = hourly.wave_period[index] || 0;
        const waveDirection = hourly.wave_direction[index];
        const windSpeed = weather.wind_speed_10m[index] || 0;
        const windDirection = weather.wind_direction_10m[index] || 0;

        const windCond = getWindCondition(windSpeed, windDirection, currentSpot.facing);
        const baseScore = calculateWaveScore(waveHeight, wavePeriod, waveDirection, currentSpot.facing);
        const score = adjustScoreForWind(baseScore, windCond);
        const rating = getRating(score);

        allHours.push({ hour, label: `${hour}:00`, waveHeight, score, rating, windCond });
    }

    if (allHours.length === 0) {
        container.innerHTML = `<h2>${t('tomorrowForecast')}</h2><div class="error">No data available</div>`;
        return;
    }

    const bestHour = allHours.reduce((best, curr) => curr.score > best.score ? curr : best);
    // Find continuous range of good hours around best hour (within 5 points)
    const bestIdx = allHours.findIndex(h => h.hour === bestHour.hour);
    let startIdx = bestIdx;
    let endIdx = bestIdx;
    // Expand backwards
    while (startIdx > 0 && allHours[startIdx - 1].score >= bestHour.score - 5) {
        startIdx--;
    }
    // Expand forwards
    while (endIdx < allHours.length - 1 && allHours[endIdx + 1].score >= bestHour.score - 5) {
        endIdx++;
    }
    // Limit to max 4 hour range
    if (endIdx - startIdx > 3) {
        const midIdx = Math.floor((startIdx + endIdx) / 2);
        startIdx = Math.max(startIdx, midIdx - 1);
        endIdx = Math.min(endIdx, midIdx + 2);
    }
    const bestStart = allHours[startIdx].hour;
    const bestEnd = allHours[endIdx].hour;
    const bestTimeRange = bestStart === bestEnd ? `${bestStart}:00` : `${bestStart}:00 - ${bestEnd}:00`;

    // Calculate average score and generate interpretation
    const avgScore = allHours.reduce((sum, h) => sum + h.score, 0) / allHours.length;
    const forecastInterpretation = generateForecastInterpretation(bestHour.score, bestHour.waveHeight, bestHour.windCond, avgScore, currentLang);

    const periods = [
        { key: 'early', hours: allHours.filter(h => h.hour >= 5 && h.hour < 9) },
        { key: 'morning', hours: allHours.filter(h => h.hour >= 9 && h.hour < 13) },
        { key: 'afternoon', hours: allHours.filter(h => h.hour >= 13 && h.hour <= 18) }
    ];

    const summaryData = periods.map(p => {
        if (p.hours.length === 0) return null;
        const avgScore = p.hours.reduce((sum, h) => sum + h.score, 0) / p.hours.length;
        const maxWave = Math.max(...p.hours.map(h => h.waveHeight));
        const best = p.hours.reduce((b, h) => h.score > b.score ? h : b);
        return { label: t(p.key), avgScore, maxWave, bestHour: best, rating: getRating(avgScore) };
    }).filter(Boolean);

    container.innerHTML = `
        <h2>${t('tomorrowForecast')} - ${currentSpot.name[currentLang]}</h2>

        <div class="best-time-banner fade-in">
            <div class="best-time-info">
                <div class="best-time-label">${t('bestTime')}</div>
                <div class="best-time-value">${bestTimeRange}</div>
                <div class="best-time-detail">${bestHour.waveHeight.toFixed(1)}m / <span class="${bestHour.windCond.class}">${t(bestHour.windCond.labelKey)}</span></div>
            </div>
            <div class="best-time-score">${bestHour.score}<span class="score-unit">pt</span></div>
            <div class="best-time-rating ${bestHour.rating.class}">${t(bestHour.rating.labelKey)}</div>
        </div>

        <div class="forecast-interpretation fade-in">
            <div class="interpretation-label">${t('forecastAdvice')}</div>
            <p class="interpretation-text">${forecastInterpretation}</p>
        </div>

        <div class="tomorrow-grid fade-in">
            ${summaryData.map(s => `
                <div class="time-block ${s.bestHour.hour === bestHour.hour ? 'best' : ''}">
                    <div class="time-label">${s.label}</div>
                    <div class="wave-height">${s.maxWave.toFixed(1)}<span>m</span></div>
                    <div class="score-display">${Math.round(s.avgScore)}<span>pt</span></div>
                    <div class="details">${s.bestHour.label} / <span class="${s.bestHour.windCond.class}">${t(s.bestHour.windCond.labelKey)}</span></div>
                    <span class="rating-badge ${s.rating.class}">${t(s.rating.labelKey)}</span>
                </div>
            `).join('')}
        </div>

        <div class="hourly-timeline fade-in">
            <h3>${t('hourlyDetail')}</h3>
            <div class="hourly-data-row">
                ${allHours.map(h => `
                    <div class="hourly-data-cell ${h.hour === bestHour.hour ? 'best' : ''}">
                        <div class="hourly-time">${h.label}</div>
                        <div class="hourly-wave">${h.waveHeight.toFixed(1)}m</div>
                        <div class="hourly-wind ${h.windCond.class}">${t(h.windCond.labelKey)}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderWeeklyForecast(data) {
    const container = document.getElementById('weeklyForecast');
    const daily = data.marine.daily;
    const today = new Date().toISOString().split('T')[0];

    const days = daily.time.map((dateStr, i) => {
        const { dayName, date } = formatDate(dateStr);
        const isToday = dateStr === today;
        const waveHeight = daily.wave_height_max[i] || 0;
        const waveDirection = daily.wave_direction_dominant[i];
        const wavePeriod = daily.wave_period_max[i] || 0;
        const score = calculateWaveScore(waveHeight, wavePeriod, waveDirection, currentSpot.facing);
        return { dayName, date, isToday, waveHeight, rating: getRating(score) };
    });

    container.innerHTML = `
        <h2>${t('weeklyForecast')} - ${currentSpot.name[currentLang]}</h2>
        <div class="weekly-grid fade-in">
            ${days.map(d => `
                <div class="day-card ${d.isToday ? 'today' : ''}">
                    <div class="day-name">${d.isToday ? t('today') : d.dayName}</div>
                    <div class="day-date">${d.date}</div>
                    <div class="wave-height-small">${d.waveHeight.toFixed(1)}m</div>
                    <div class="rating-dot ${d.rating.class}"></div>
                </div>
            `).join('')}
        </div>
    `;
}

function renderError(message) {
    ['currentConditions', 'tomorrowForecast', 'weeklyForecast'].forEach(id => {
        document.getElementById(id).innerHTML = `<div class="error"><p>${message}</p></div>`;
    });
}

// ========================================
// Main Functions
// ========================================
async function selectSpot(spot) {
    currentSpot = spot;

    // Update spot dropdown to reflect new country
    renderSpotTabs();

    ['currentConditions', 'tomorrowForecast', 'weeklyForecast'].forEach(id => {
        document.getElementById(id).innerHTML = `<div class="loading">${t('loading')}</div>`;
    });

    try {
        forecastData = await fetchMarineData(spot.lat, spot.lon);
        renderCurrentConditions(forecastData);
        renderTomorrowForecast(forecastData);
        renderWeeklyForecast(forecastData);

        const now = new Date();
        document.getElementById('lastUpdate').textContent = `${t('lastUpdate')}: ${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}`;
    } catch (error) {
        console.error('Failed to load forecast:', error);
        renderError('Failed to load data. Please try again.');
    }
}

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'ja' : 'en';
    document.getElementById('langToggle').textContent = currentLang === 'en' ? '日本語' : 'English';
    document.getElementById('introText').textContent = t('introText');
    document.getElementById('payForwardText').textContent = t('payForward');
    document.getElementById('coffeeText').textContent = t('coffeeText');
    document.getElementById('donateDescription').textContent = t('donateDescription');
    document.getElementById('charityTitle').textContent = t('charityTitle');
    document.getElementById('charityDescription').textContent = t('charityDescription');
    document.getElementById('communityTitle').textContent = t('communityTitle');
    document.getElementById('communityDescription').textContent = t('communityDescription');
    document.getElementById('discordBtnText').textContent = t('discordBtnText');
    renderSpotTabs();
    if (forecastData) {
        renderCurrentConditions(forecastData);
        renderTomorrowForecast(forecastData);
        renderWeeklyForecast(forecastData);
    }
}

async function init() {
    document.getElementById('langToggle').addEventListener('click', toggleLanguage);
    document.getElementById('refreshBtn').addEventListener('click', () => selectSpot(currentSpot));

    renderSpotTabs();
    await selectSpot(currentSpot);

    setInterval(() => selectSpot(currentSpot), 15 * 60 * 1000);
}

document.addEventListener('DOMContentLoaded', init);
