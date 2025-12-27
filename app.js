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
        // Intro
        introText: 'Free surf forecast for friendly surfers worldwide. Real-time wave data powered by Open-Meteo Marine API. Check the conditions and find your peak!'
    },
    ja: {
        currentConditions: '現在のコンディション',
        tomorrowForecast: '明日の予報',
        weeklyForecast: '週間予報',
        selectSpot: 'サーフスポットを選択',
        selectDesc: '日本の人気14スポットから選んでください。他の国も近日追加予定！',
        waveHeight: '波高',
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
        // Intro
        introText: '世界中のフレンドリーサーファーのための無料波予報。Open-Meteo Marine APIによるリアルタイム波データ。コンディションをチェックしてピークを見つけよう！'
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
                "The ocean called in sick today"
            ],
            small: [
                "Longboard therapy session",
                "Knee-high fun rides",
                "Perfect for learning or chilling",
                "Small but playful!",
                "Log it up, bro"
            ],
            good: [
                "Get out there! No excuses!",
                "Your boss won't notice you're gone",
                "Call in sick, it's worth it",
                "The waves are calling your name",
                "Stoke levels: HIGH"
            ],
            epic: [
                "DROP EVERYTHING AND GO!!!",
                "This is not a drill! EPIC conditions!",
                "You'll regret missing this one",
                "Tell your boss you have food poisoning",
                "Best day of the year maybe?!"
            ],
            big: [
                "Big wave, big dreams, big hospital bills maybe",
                "Know your limits, legend",
                "Experts only - seriously",
                "Hold-downs are free today"
            ],
            offshore: [
                "Glass! Clean faces ahead",
                "Offshore perfection incoming",
                "Silky smooth conditions"
            ],
            onshore: [
                "Bit choppy but still fun",
                "Bring your positive attitude",
                "Character building conditions"
            ],
            swell: [
                "Nice groundswell coming through!",
                "Quality swell in the water",
                "Long period energy = good times"
            ]
        },
        ja: {
            flat: [
                "今日はNetflixの日かな...",
                "板のリペアに最適な日！",
                "SUPヨガでもする？",
                "陸トレの日だね",
                "海がお休みモード"
            ],
            small: [
                "ロングボードでまったり",
                "膝波で遊ぼう",
                "初心者にぴったり",
                "小さいけど楽しい！",
                "ログでクルージング"
            ],
            good: [
                "海行くしかない！言い訳無用！",
                "上司にバレないよ多分",
                "仮病使ってでも行く価値あり",
                "波が君を呼んでいる",
                "ストークレベル：MAX"
            ],
            epic: [
                "今すぐ仕事やめて海へ！！！",
                "これは訓練ではない！最高の波！",
                "逃したら後悔するやつ",
                "食中毒ってことにしとけ",
                "今年ベストの日かも？！"
            ],
            big: [
                "デカ波、ビッグドリーム、病院代もビッグかも",
                "限界を知ろう、レジェンド",
                "上級者オンリー、マジで",
                "巻かれ放題"
            ],
            offshore: [
                "グラッシー！面ツル確定",
                "オフショア最高",
                "シルキースムース"
            ],
            onshore: [
                "ちょいチョッピーだけど楽しめる",
                "ポジティブマインドで",
                "修行日和"
            ],
            swell: [
                "いいグランドスウェル来てる！",
                "クオリティスウェル",
                "ロングピリオド＝グッドタイム"
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
    if (waveHeight >= 0.5 && waveHeight <= 2.0) {
        score += (waveHeight >= 0.8 && waveHeight <= 1.5) ? 40 : 25;
    } else if (waveHeight > 2.0 && waveHeight <= 3.0) {
        score += 15;
    } else if (waveHeight > 0.3) {
        score += 10;
    }

    if (wavePeriod >= 10) score += 30;
    else if (wavePeriod >= 8) score += 25;
    else if (wavePeriod >= 6) score += 15;
    else score += 5;

    if (waveDirection !== null && !isNaN(waveDirection)) {
        const angleDiff = Math.abs(waveDirection - spotFacing);
        const normalizedDiff = angleDiff > 180 ? 360 - angleDiff : angleDiff;
        if (normalizedDiff <= 30) score += 30;
        else if (normalizedDiff <= 60) score += 20;
        else if (normalizedDiff <= 90) score += 10;
    } else {
        score += 15;
    }
    return Math.min(100, score);
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
    if (score >= 75) return { class: 'excellent', labelKey: 'excellent' };
    if (score >= 55) return { class: 'good', labelKey: 'good' };
    if (score >= 35) return { class: 'fair', labelKey: 'fair' };
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

    let html = '';
    Object.entries(COUNTRIES).forEach(([countryId, country]) => {
        html += `<div class="country-section">
            <div class="country-label">${country.name[currentLang]}</div>
            <div class="regions-wrap">`;

        Object.entries(country.regions).forEach(([regionId, region]) => {
            html += `<div class="region-group">
                <div class="region-label">${region.name[currentLang]}</div>
                <div class="spots-wrap">`;

            region.spots.forEach(spot => {
                const isActive = spot.id === currentSpot.id;
                html += `<button class="spot-tab ${isActive ? 'active' : ''}" data-spot-id="${spot.id}">
                    ${spot.name[currentLang]}
                </button>`;
            });

            html += `</div></div>`;
        });

        html += `</div></div>`;
    });

    container.innerHTML = html;

    container.querySelectorAll('.spot-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const spot = ALL_SPOTS.find(s => s.id === tab.dataset.spotId);
            if (spot) selectSpot(spot);
        });
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

    const score = calculateWaveScore(waveHeight, wavePeriod, waveDirection, currentSpot.facing);
    const rating = getRating(score);
    const windCond = getWindCondition(windSpeed, windDirection, currentSpot.facing);
    const tideInfo = calculateTideTimes(now, currentSpot.regionId);

    const funnyComment = generateFunnyComment(waveHeight, wavePeriod, windCond, score, currentLang);

    container.innerHTML = `
        <h2>${t('currentConditions')} - ${currentSpot.name[currentLang]}</h2>

        <div class="surf-rating fade-in">
            <div class="rating-badge-large ${rating.class}">${t(rating.labelKey)}</div>
            <div class="current-score">${score}<span class="score-unit">pt</span></div>
            <div class="rating-comment">"${funnyComment}"</div>
        </div>

        <div class="condition-grid fade-in">
            <div class="condition-card">
                <div class="value">${waveHeight.toFixed(1)}<span class="unit">m</span></div>
                <div class="label">${t('waveHeight')}</div>
            </div>
            <div class="condition-card">
                <div class="value">${wavePeriod.toFixed(0)}<span class="unit">s</span></div>
                <div class="label">${t('period')}</div>
            </div>
            <div class="condition-card">
                <div class="value"><span class="direction-arrow">${getWindArrow(waveDirection || 0)}</span>${getDirectionText(waveDirection || 0)}</div>
                <div class="label">${t('waveDir')}</div>
            </div>
            <div class="condition-card">
                <div class="value">${swellHeight.toFixed(1)}<span class="unit">m</span></div>
                <div class="label">${t('swell')}</div>
            </div>
            <div class="condition-card">
                <div class="value ${windCond.class}">${windSpeed.toFixed(0)}<span class="unit">m/s</span></div>
                <div class="label">${t(windCond.labelKey)}</div>
            </div>
            <div class="condition-card">
                <div class="value">${temp.toFixed(0)}<span class="unit">°C</span></div>
                <div class="label">${t('airTemp')}</div>
            </div>
            ${seaTemp !== null ? `
            <div class="condition-card sea-temp">
                <div class="value">${seaTemp.toFixed(1)}<span class="unit">°C</span></div>
                <div class="label">${t('waterTemp')}</div>
            </div>` : ''}
        </div>

        <div class="info-row fade-in">
            <div class="info-card sun-card">
                <div class="info-item">
                    <span class="info-label">${t('sunrise')}</span>
                    <span class="info-value">${formatSunTime(sunrise)}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">${t('sunset')}</span>
                    <span class="info-value">${formatSunTime(sunset)}</span>
                </div>
            </div>
            ${wetsuit ? `
            <div class="info-card wetsuit-card">
                <span class="info-label">${t('wetsuit')}</span>
                <span class="info-value">${t(wetsuit.suitKey)}</span>
            </div>` : ''}
        </div>

        <div class="tide-section fade-in">
            <div class="tide-header">
                <span class="tide-type">${t(tideInfo.tideType.labelKey)}</span>
                <span class="tide-desc">${t(tideInfo.tideType.descKey)}</span>
            </div>
            <div class="tide-times">
                ${tideInfo.times.map(ti => `
                    <div class="tide-time ${ti.type}">
                        <span class="tide-label">${ti.type === 'high' ? t('highTide') : t('lowTide')}</span>
                        <span class="tide-value">${ti.timeStr}</span>
                    </div>
                `).join('')}
            </div>
            <div class="tide-note">${t('tideNote')}</div>
        </div>
    `;
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

        const score = calculateWaveScore(waveHeight, wavePeriod, waveDirection, currentSpot.facing);
        const rating = getRating(score);
        const windCond = getWindCondition(windSpeed, windDirection, currentSpot.facing);

        allHours.push({ hour, label: `${hour}:00`, waveHeight, score, rating, windCond });
    }

    if (allHours.length === 0) {
        container.innerHTML = `<h2>${t('tomorrowForecast')}</h2><div class="error">No data available</div>`;
        return;
    }

    const bestHour = allHours.reduce((best, curr) => curr.score > best.score ? curr : best);
    const goodHours = allHours.filter(h => h.score >= bestHour.score - 10);
    const bestStart = Math.min(...goodHours.map(h => h.hour));
    const bestEnd = Math.max(...goodHours.map(h => h.hour));
    const bestTimeRange = bestStart === bestEnd ? `${bestStart}:00` : `${bestStart}:00 - ${bestEnd}:00`;

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

        <div class="hourly-tomorrow fade-in">
            <h3>${t('hourlyDetail')}</h3>
            <div class="hourly-scroll">
                <div class="hourly-grid">
                    ${allHours.map(h => `
                        <div class="hour-card ${h.hour === bestHour.hour ? 'best' : ''}">
                            <div class="hour">${h.label}</div>
                            <div class="wave">${h.waveHeight.toFixed(1)}m</div>
                            <div class="hour-score">${h.score}pt</div>
                            <div class="wind ${h.windCond.class}">${t(h.windCond.labelKey).slice(0, 3)}</div>
                            <div class="rating-dot ${h.rating.class}"></div>
                        </div>
                    `).join('')}
                </div>
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

    document.querySelectorAll('.spot-tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.spotId === spot.id);
    });

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
    document.getElementById('selectSpotTitle').textContent = t('selectSpot');
    document.getElementById('selectSpotDesc').textContent = t('selectDesc');
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
