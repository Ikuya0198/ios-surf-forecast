/**
 * 関東サーフ予報 - Kanto Surf Forecast
 * Open-Meteo Marine API を使用した波情報予報システム
 */

// ========================================
// サーフスポット定義
// ========================================
const SURF_SPOTS = [
    // 湘南エリア
    {
        id: 'kugenuma',
        name: '鵠沼',
        region: '湘南',
        lat: 35.3167,
        lon: 139.4667,
        facing: 180, // 南向き
        description: '初心者〜上級者まで楽しめる人気スポット'
    },
    {
        id: 'tsujido',
        name: '辻堂',
        region: '湘南',
        lat: 35.3250,
        lon: 139.4500,
        facing: 180,
        description: 'ビーチブレイク、波が良い日が多い'
    },
    {
        id: 'chigasaki',
        name: '茅ヶ崎',
        region: '湘南',
        lat: 35.3167,
        lon: 139.4000,
        facing: 180,
        description: 'サザンビーチ周辺、アクセス良好'
    },
    {
        id: 'kamakura',
        name: '鎌倉',
        region: '湘南',
        lat: 35.3083,
        lon: 139.5333,
        facing: 180,
        description: '由比ヶ浜〜稲村ヶ崎、景色も最高'
    },
    {
        id: 'zaimokuza',
        name: '材木座',
        region: '湘南',
        lat: 35.3000,
        lon: 139.5500,
        facing: 180,
        description: '穏やかな波、初心者にオススメ'
    },
    // 千葉エリア
    {
        id: 'ichinomiya',
        name: '一宮',
        region: '千葉',
        lat: 35.3833,
        lon: 140.3833,
        facing: 90, // 東向き
        description: 'オリンピック会場、パワフルな波'
    },
    {
        id: 'taito',
        name: '太東',
        region: '千葉',
        lat: 35.2833,
        lon: 140.4333,
        facing: 90,
        description: 'リーフブレイク、上級者向け'
    },
    {
        id: 'katagai',
        name: '片貝',
        region: '千葉',
        lat: 35.4333,
        lon: 140.4167,
        facing: 90,
        description: 'ビーチブレイク、初心者にも◎'
    },
    {
        id: 'kujukuri',
        name: '九十九里',
        region: '千葉',
        lat: 35.5000,
        lon: 140.4333,
        facing: 90,
        description: '広大なビーチ、混雑少なめ'
    },
    // 茨城エリア
    {
        id: 'oarai',
        name: '大洗',
        region: '茨城',
        lat: 36.3167,
        lon: 140.5833,
        facing: 90,
        description: '波質が良い、比較的空いている'
    },
    // 伊豆エリア
    {
        id: 'shirahama',
        name: '白浜',
        region: '伊豆',
        lat: 34.6667,
        lon: 138.9667,
        facing: 135, // 南東向き
        description: '下田の人気スポット、パワフルな波'
    },
    {
        id: 'tatado',
        name: '多々戸浜',
        region: '伊豆',
        lat: 34.6500,
        lon: 138.9500,
        facing: 180,
        description: 'ビーチブレイク、透明度抜群'
    },
    {
        id: 'irita',
        name: '入田浜',
        region: '伊豆',
        lat: 34.6583,
        lon: 138.9417,
        facing: 180,
        description: '穏やかで美しいビーチ'
    },
    {
        id: 'kisami',
        name: '吉佐美',
        region: '伊豆',
        lat: 34.6417,
        lon: 138.9333,
        facing: 180,
        description: 'ローカル人気、良質な波'
    }
];

// ========================================
// グローバル状態
// ========================================
let currentSpot = SURF_SPOTS[0];
let forecastData = null;

// ========================================
// 潮汐計算（月齢ベース簡易版）
// ========================================

/**
 * 月齢を計算（0-29.5）
 */
function getMoonAge(date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    // 簡易月齢計算
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
    moonAge = moonAge - 30 * Math.floor(moonAge / 30);

    return moonAge;
}

/**
 * 潮の種類を判定
 */
function getTideType(moonAge) {
    // 新月(0)、満月(15)付近が大潮
    // 上弦(7)、下弦(22)付近が小潮
    const normalized = moonAge % 29.5;

    if (normalized <= 2 || normalized >= 27.5 || (normalized >= 13.5 && normalized <= 16.5)) {
        return { type: 'spring', label: '大潮', icon: '🌊', desc: '潮の干満差が大きい' };
    } else if ((normalized >= 5.5 && normalized <= 9.5) || (normalized >= 20.5 && normalized <= 24.5)) {
        return { type: 'neap', label: '小潮', icon: '🌙', desc: '潮の干満差が小さい' };
    } else if ((normalized >= 2 && normalized <= 5.5) || (normalized >= 16.5 && normalized <= 20.5)) {
        return { type: 'middle', label: '中潮', icon: '🌓', desc: '普通の干満差' };
    } else {
        return { type: 'long', label: '長潮', icon: '🌑', desc: '干満差が最も小さい' };
    }
}

/**
 * 簡易的な潮汐時刻を計算（港の基準値ベース）
 * 注意: これは概算値です。実際の潮汐は気象条件により変動します
 */
function calculateTideTimes(date, region) {
    const moonAge = getMoonAge(date);
    const tideType = getTideType(moonAge);

    // 関東エリアの平均的な潮汐パターン（東京湾基準 + 地域補正）
    // 実際は観測地点により異なります
    const regionOffset = {
        '湘南': 0.5,    // 相模湾（東京湾より約30分遅い）
        '千葉': -0.3,   // 外房（東京湾より約20分早い）
        '茨城': -0.5,   // 鹿島灘（東京湾より約30分早い）
        '伊豆': 0.8     // 下田周辺（東京湾より約50分遅い）
    };

    const offset = regionOffset[region] || 0;

    // 月齢に基づく満潮時刻のシフト（1日約50分ずつ遅れる）
    const moonShift = (moonAge * 50) / 60; // 時間単位

    // 基準満潮時刻（朝）
    let highTide1 = (6.5 + moonShift + offset) % 24;
    // 2回目の満潮（約12.5時間後）
    let highTide2 = (highTide1 + 12.4) % 24;
    // 干潮時刻（満潮の約6.2時間後）
    let lowTide1 = (highTide1 + 6.2) % 24;
    let lowTide2 = (highTide2 + 6.2) % 24;

    // 時刻をフォーマット
    const formatTime = (hours) => {
        const h = Math.floor(hours);
        const m = Math.round((hours - h) * 60);
        return `${h}:${String(m).padStart(2, '0')}`;
    };

    // 時刻順にソート
    const tides = [
        { type: 'high', time: highTide1, label: '満潮' },
        { type: 'low', time: lowTide1, label: '干潮' },
        { type: 'high', time: highTide2, label: '満潮' },
        { type: 'low', time: lowTide2, label: '干潮' }
    ].sort((a, b) => a.time - b.time);

    return {
        tideType,
        moonAge: Math.round(moonAge * 10) / 10,
        times: tides.map(t => ({
            ...t,
            timeStr: formatTime(t.time)
        }))
    };
}

// ========================================
// ユーティリティ関数
// ========================================

/**
 * 風向きを矢印に変換
 */
function getWindArrow(degrees) {
    const arrows = ['↓', '↙', '←', '↖', '↑', '↗', '→', '↘'];
    const index = Math.round(degrees / 45) % 8;
    return arrows[index];
}

/**
 * 波の方向を日本語に変換
 */
function getDirectionText(degrees) {
    const directions = ['北', '北東', '東', '南東', '南', '南西', '西', '北西'];
    const index = Math.round(degrees / 45) % 8;
    return directions[index];
}

/**
 * 波高をアイコンに変換
 */
function getWaveIcon(height) {
    if (height < 0.5) return '🌊';
    if (height < 1.0) return '🌊';
    if (height < 1.5) return '🌊🌊';
    if (height < 2.0) return '🌊🌊';
    return '🌊🌊🌊';
}

/**
 * 日付をフォーマット
 */
function formatDate(dateStr) {
    const date = new Date(dateStr);
    const days = ['日', '月', '火', '水', '木', '金', '土'];
    return {
        dayName: days[date.getDay()],
        date: `${date.getMonth() + 1}/${date.getDate()}`,
        full: date
    };
}

/**
 * 時刻をフォーマット（ISO文字列から時間を抽出）
 */
function formatHour(isoString) {
    const date = new Date(isoString);
    return `${date.getHours()}時`;
}

// ========================================
// サーフィンコンディション判定
// ========================================

/**
 * 波のスコアを計算（0-100）
 */
function calculateWaveScore(waveHeight, wavePeriod, waveDirection, spotFacing) {
    let score = 0;

    // 波高スコア（0.5m〜2.0mが理想）
    if (waveHeight >= 0.5 && waveHeight <= 2.0) {
        if (waveHeight >= 0.8 && waveHeight <= 1.5) {
            score += 40; // 最適
        } else {
            score += 25; // 良好
        }
    } else if (waveHeight > 2.0 && waveHeight <= 3.0) {
        score += 15; // やや大きい
    } else if (waveHeight > 0.3) {
        score += 10; // 小さい
    }

    // 波周期スコア（8秒以上が良い）
    if (wavePeriod >= 10) {
        score += 30; // うねり
    } else if (wavePeriod >= 8) {
        score += 25;
    } else if (wavePeriod >= 6) {
        score += 15;
    } else {
        score += 5; // 風波
    }

    // 波の向きスコア（ビーチの向きに対して正面から来るのが理想）
    if (waveDirection !== null && !isNaN(waveDirection)) {
        const angleDiff = Math.abs(waveDirection - spotFacing);
        const normalizedDiff = angleDiff > 180 ? 360 - angleDiff : angleDiff;

        if (normalizedDiff <= 30) {
            score += 30; // 正面
        } else if (normalizedDiff <= 60) {
            score += 20; // やや斜め
        } else if (normalizedDiff <= 90) {
            score += 10; // 斜め
        }
    } else {
        score += 15; // データなしの場合は中間点
    }

    return Math.min(100, score);
}

/**
 * 風のコンディション判定
 */
function getWindCondition(windSpeed, windDirection, spotFacing) {
    // オフショア（陸から海への風）が理想
    const angleDiff = Math.abs(windDirection - spotFacing);
    const normalizedDiff = angleDiff > 180 ? 360 - angleDiff : angleDiff;

    // 150-210度の差がオフショア（ビーチの向きの反対側から風が吹く）
    const isOffshore = normalizedDiff >= 150 && normalizedDiff <= 210;
    const isOnshore = normalizedDiff <= 30 || normalizedDiff >= 330;

    if (windSpeed < 3) {
        return { type: 'calm', label: '無風', class: 'wind-offshore' };
    } else if (isOffshore) {
        return { type: 'offshore', label: 'オフショア', class: 'wind-offshore' };
    } else if (isOnshore) {
        if (windSpeed > 8) {
            return { type: 'strong-onshore', label: '強オンショア', class: 'wind-onshore' };
        }
        return { type: 'onshore', label: 'オンショア', class: 'wind-onshore' };
    } else {
        return { type: 'cross', label: 'サイドショア', class: 'wind-cross' };
    }
}

/**
 * 総合レーティングを取得
 */
function getRating(score) {
    if (score >= 75) {
        return {
            class: 'excellent',
            label: '最高',
            desc: 'サーフィン日和！今すぐ海へ',
            emoji: '🔥'
        };
    } else if (score >= 55) {
        return {
            class: 'good',
            label: '良い',
            desc: '楽しめるコンディション',
            emoji: '👍'
        };
    } else if (score >= 35) {
        return {
            class: 'fair',
            label: 'まあまあ',
            desc: '初心者には厳しいかも',
            emoji: '🤔'
        };
    } else {
        return {
            class: 'poor',
            label: '厳しい',
            desc: 'サイズ不足または荒れ模様',
            emoji: '😓'
        };
    }
}

// ========================================
// API呼び出し
// ========================================

/**
 * Open-Meteo Marine APIからデータを取得
 */
async function fetchMarineData(lat, lon) {
    const params = new URLSearchParams({
        latitude: lat,
        longitude: lon,
        hourly: [
            'wave_height',
            'wave_direction',
            'wave_period',
            'swell_wave_height',
            'swell_wave_direction',
            'swell_wave_period',
            'wind_wave_height',
            'wind_wave_direction',
            'wind_wave_period',
            'sea_surface_temperature'
        ].join(','),
        daily: [
            'wave_height_max',
            'wave_direction_dominant',
            'wave_period_max'
        ].join(','),
        timezone: 'Asia/Tokyo',
        forecast_days: 7
    });

    const marineUrl = `https://marine-api.open-meteo.com/v1/marine?${params}`;

    // 天気データも取得（日の出・日の入り含む）
    const weatherParams = new URLSearchParams({
        latitude: lat,
        longitude: lon,
        hourly: ['wind_speed_10m', 'wind_direction_10m', 'temperature_2m', 'weather_code'].join(','),
        daily: ['weather_code', 'temperature_2m_max', 'temperature_2m_min', 'sunrise', 'sunset'].join(','),
        timezone: 'Asia/Tokyo',
        forecast_days: 7
    });

    const weatherUrl = `https://api.open-meteo.com/v1/forecast?${weatherParams}`;

    try {
        const [marineRes, weatherRes] = await Promise.all([
            fetch(marineUrl),
            fetch(weatherUrl)
        ]);

        if (!marineRes.ok || !weatherRes.ok) {
            throw new Error('API request failed');
        }

        const marineData = await marineRes.json();
        const weatherData = await weatherRes.json();

        return {
            marine: marineData,
            weather: weatherData,
            timestamp: new Date()
        };
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
}

// ========================================
// UI更新
// ========================================

/**
 * スポットタブを生成
 */
function renderSpotTabs() {
    const container = document.getElementById('spotTabs');

    // 地域ごとにグループ化
    const regions = {};
    SURF_SPOTS.forEach(spot => {
        if (!regions[spot.region]) {
            regions[spot.region] = [];
        }
        regions[spot.region].push(spot);
    });

    container.innerHTML = SURF_SPOTS.map(spot => `
        <button class="spot-tab ${spot.id === currentSpot.id ? 'active' : ''}"
                data-spot-id="${spot.id}">
            ${spot.name}
            <span class="region">${spot.region}</span>
        </button>
    `).join('');

    // イベントリスナー設定
    container.querySelectorAll('.spot-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const spotId = tab.dataset.spotId;
            const spot = SURF_SPOTS.find(s => s.id === spotId);
            if (spot) {
                selectSpot(spot);
            }
        });
    });
}

/**
 * ウェットスーツの目安を取得
 */
function getWetsuitRecommendation(seaTemp) {
    if (seaTemp === null) return null;

    if (seaTemp >= 24) {
        return { suit: 'トランクス/ラッシュ', icon: '🩳', season: '夏' };
    } else if (seaTemp >= 22) {
        return { suit: 'スプリング', icon: '🏄', season: '初夏' };
    } else if (seaTemp >= 20) {
        return { suit: 'シーガル', icon: '🦭', season: '春秋' };
    } else if (seaTemp >= 17) {
        return { suit: '3mmフルスーツ', icon: '🧥', season: '春秋' };
    } else if (seaTemp >= 14) {
        return { suit: '5mmセミドライ', icon: '🥶', season: '冬' };
    } else {
        return { suit: 'ドライスーツ', icon: '❄️', season: '真冬' };
    }
}

/**
 * 日の出・日の入り時刻をフォーマット
 */
function formatSunTime(isoString) {
    if (!isoString) return '--:--';
    const date = new Date(isoString);
    return `${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')}`;
}

/**
 * サーフィンアドバイスを生成
 */
function generateAdvice(waveHeight, wavePeriod, windCond, score) {
    const advices = [];

    // 波高に基づくアドバイス
    if (waveHeight < 0.3) {
        advices.push({ icon: '😴', text: 'フラット...今日は休息日かも' });
    } else if (waveHeight < 0.5) {
        advices.push({ icon: '🏄', text: 'ロングボード向き' });
    } else if (waveHeight >= 0.8 && waveHeight <= 1.5) {
        advices.push({ icon: '🔥', text: '良いサイズ！' });
    } else if (waveHeight > 2.0) {
        advices.push({ icon: '⚠️', text: '上級者向け、注意して' });
    }

    // 風に基づくアドバイス
    if (windCond.type === 'offshore') {
        advices.push({ icon: '🌬️', text: 'オフショアで面がキレイ' });
    } else if (windCond.type === 'strong-onshore') {
        advices.push({ icon: '💨', text: '強風でチョッピー' });
    } else if (windCond.type === 'onshore') {
        advices.push({ icon: '🌊', text: 'オンショアで面が乱れ気味' });
    }

    // 周期に基づくアドバイス
    if (wavePeriod >= 10) {
        advices.push({ icon: '🌏', text: '良いうねり入ってます' });
    } else if (wavePeriod < 6) {
        advices.push({ icon: '💨', text: '風波メイン' });
    }

    return advices.slice(0, 2); // 最大2つ
}

/**
 * 現在のコンディションを表示
 */
function renderCurrentConditions(data) {
    const container = document.getElementById('currentConditions');
    const now = new Date();
    const currentHourIndex = now.getHours();

    const hourly = data.marine.hourly;
    const weather = data.weather.hourly;
    const weatherDaily = data.weather.daily;

    // 現在の時間に最も近いデータを取得
    const waveHeight = hourly.wave_height[currentHourIndex] || 0;
    const wavePeriod = hourly.wave_period[currentHourIndex] || 0;
    const waveDirection = hourly.wave_direction[currentHourIndex];
    const swellHeight = hourly.swell_wave_height?.[currentHourIndex] || 0;
    const windSpeed = weather.wind_speed_10m[currentHourIndex] || 0;
    const windDirection = weather.wind_direction_10m[currentHourIndex] || 0;
    const temp = weather.temperature_2m[currentHourIndex] || 0;
    const seaTemp = hourly.sea_surface_temperature?.[currentHourIndex] || null;

    // 日の出・日の入り
    const sunrise = weatherDaily.sunrise?.[0];
    const sunset = weatherDaily.sunset?.[0];

    // ウェットスーツ目安
    const wetsuit = getWetsuitRecommendation(seaTemp);

    const score = calculateWaveScore(waveHeight, wavePeriod, waveDirection, currentSpot.facing);
    const rating = getRating(score);
    const windCond = getWindCondition(windSpeed, windDirection, currentSpot.facing);
    const advices = generateAdvice(waveHeight, wavePeriod, windCond, score);

    // 潮汐情報を計算
    const tideInfo = calculateTideTimes(now, currentSpot.region);

    container.innerHTML = `
        <h2>現在のコンディション - ${currentSpot.name}</h2>

        <div class="surf-rating fade-in">
            <div class="rating-score ${rating.class}">${rating.emoji}</div>
            <div class="rating-info">
                <div class="rating-label">${rating.label}</div>
                <div class="rating-desc">${rating.desc}</div>
            </div>
        </div>

        ${advices.length > 0 ? `
        <div class="advice-box fade-in">
            ${advices.map(a => `
                <div class="advice-item">
                    <span class="advice-icon">${a.icon}</span>
                    <span class="advice-text">${a.text}</span>
                </div>
            `).join('')}
        </div>
        ` : ''}

        <div class="condition-grid fade-in">
            <div class="condition-card">
                <div class="value">${waveHeight.toFixed(1)}<span class="unit">m</span></div>
                <div class="label">波高</div>
            </div>
            <div class="condition-card">
                <div class="value">${wavePeriod.toFixed(0)}<span class="unit">秒</span></div>
                <div class="label">周期</div>
            </div>
            <div class="condition-card">
                <div class="value">
                    <span class="direction-arrow">${getWindArrow(waveDirection || 0)}</span>
                    ${getDirectionText(waveDirection || 0)}
                </div>
                <div class="label">波向き</div>
            </div>
            <div class="condition-card">
                <div class="value">${swellHeight.toFixed(1)}<span class="unit">m</span></div>
                <div class="label">うねり</div>
            </div>
            <div class="condition-card">
                <div class="value ${windCond.class}">${windSpeed.toFixed(0)}<span class="unit">m/s</span></div>
                <div class="label">${windCond.label}</div>
            </div>
            <div class="condition-card">
                <div class="value">${temp.toFixed(0)}<span class="unit">°C</span></div>
                <div class="label">気温</div>
            </div>
            ${seaTemp !== null ? `
            <div class="condition-card sea-temp">
                <div class="value">${seaTemp.toFixed(1)}<span class="unit">°C</span></div>
                <div class="label">水温 🌡️</div>
            </div>
            ` : ''}
        </div>

        <!-- 日の出・日の入り & ウェットスーツ -->
        <div class="info-cards fade-in">
            <div class="sun-card">
                <div class="sun-item sunrise">
                    <span class="sun-icon">🌅</span>
                    <span class="sun-label">日の出</span>
                    <span class="sun-time">${formatSunTime(sunrise)}</span>
                </div>
                <div class="sun-item sunset">
                    <span class="sun-icon">🌇</span>
                    <span class="sun-label">日の入り</span>
                    <span class="sun-time">${formatSunTime(sunset)}</span>
                </div>
            </div>
            ${wetsuit ? `
            <div class="wetsuit-card">
                <div class="wetsuit-icon">${wetsuit.icon}</div>
                <div class="wetsuit-info">
                    <div class="wetsuit-label">ウェットスーツ目安</div>
                    <div class="wetsuit-suit">${wetsuit.suit}</div>
                    <div class="wetsuit-season">${wetsuit.season}シーズン</div>
                </div>
            </div>
            ` : ''}
        </div>

        <!-- 潮汐情報 -->
        <div class="tide-section fade-in">
            <div class="tide-header">
                <span class="tide-icon">${tideInfo.tideType.icon}</span>
                <span class="tide-type">${tideInfo.tideType.label}</span>
                <span class="tide-desc">${tideInfo.tideType.desc}</span>
            </div>
            <div class="tide-times">
                ${tideInfo.times.map(t => `
                    <div class="tide-time ${t.type}">
                        <span class="tide-label">${t.label}</span>
                        <span class="tide-value">${t.timeStr}</span>
                    </div>
                `).join('')}
            </div>
            <div class="tide-note">※潮汐は概算値です</div>
        </div>
    `;
}

/**
 * 明日の予報を表示（ベストタイム付き）
 */
function renderTomorrowForecast(data) {
    const container = document.getElementById('tomorrowForecast');
    const hourly = data.marine.hourly;
    const weather = data.weather.hourly;

    // 明日の日付
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowStr = tomorrow.toISOString().split('T')[0];

    // 5時〜18時まで全時間帯を計算
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

        allHours.push({
            hour,
            label: `${hour}:00`,
            waveHeight,
            wavePeriod,
            waveDirection,
            windSpeed,
            windDirection,
            score,
            rating,
            windCond
        });
    }

    if (allHours.length === 0) {
        container.innerHTML = `
            <h2>明日の予報</h2>
            <div class="error">明日のデータが取得できませんでした</div>
        `;
        return;
    }

    // ベストタイムを計算（スコアが最も高い時間帯）
    const bestHour = allHours.reduce((best, current) =>
        current.score > best.score ? current : best
    );

    // ベストタイムの時間帯を特定（連続する良い時間を探す）
    const goodHours = allHours.filter(h => h.score >= bestHour.score - 10);
    const bestStart = Math.min(...goodHours.map(h => h.hour));
    const bestEnd = Math.max(...goodHours.map(h => h.hour));
    const bestTimeRange = bestStart === bestEnd
        ? `${bestStart}:00`
        : `${bestStart}:00〜${bestEnd}:00`;

    // 時間帯アイコン
    const getTimeIcon = (hour) => {
        if (hour < 7) return '🌅';
        if (hour < 10) return '☀️';
        if (hour < 14) return '🌞';
        if (hour < 17) return '🌤️';
        return '🌇';
    };

    // サマリー用の3時間帯
    const summaryTimes = [
        { label: '早朝', hours: allHours.filter(h => h.hour >= 5 && h.hour < 9) },
        { label: '午前', hours: allHours.filter(h => h.hour >= 9 && h.hour < 13) },
        { label: '午後', hours: allHours.filter(h => h.hour >= 13 && h.hour <= 18) }
    ];

    const summaryData = summaryTimes.map(period => {
        if (period.hours.length === 0) return null;
        const avgScore = period.hours.reduce((sum, h) => sum + h.score, 0) / period.hours.length;
        const maxWave = Math.max(...period.hours.map(h => h.waveHeight));
        const bestInPeriod = period.hours.reduce((best, h) => h.score > best.score ? h : best);
        return {
            label: period.label,
            avgScore,
            maxWave,
            bestHour: bestInPeriod,
            rating: getRating(avgScore)
        };
    }).filter(Boolean);

    container.innerHTML = `
        <h2>明日の予報 - ${currentSpot.name}</h2>

        <!-- ベストタイム表示 -->
        <div class="best-time-banner fade-in">
            <div class="best-time-icon">${getTimeIcon(bestHour.hour)}</div>
            <div class="best-time-info">
                <div class="best-time-label">ベストタイム</div>
                <div class="best-time-value">${bestTimeRange}</div>
                <div class="best-time-detail">
                    波高 ${bestHour.waveHeight.toFixed(1)}m /
                    <span class="${bestHour.windCond.class}">${bestHour.windCond.label}</span>
                </div>
            </div>
            <div class="best-time-rating ${bestHour.rating.class}">${bestHour.rating.emoji}</div>
        </div>

        <!-- 時間帯サマリー -->
        <div class="tomorrow-grid fade-in">
            ${summaryData.map(s => `
                <div class="time-block ${s.bestHour.hour === bestHour.hour ? 'best' : ''}">
                    <div class="time-label">${s.label}</div>
                    <div class="wave-height">${s.maxWave.toFixed(1)}<span>m</span></div>
                    <div class="details">
                        ${s.bestHour.label}が◎ /
                        <span class="${s.bestHour.windCond.class}">${s.bestHour.windCond.label}</span>
                    </div>
                    <span class="rating-badge ${s.rating.class}">${s.rating.label}</span>
                </div>
            `).join('')}
        </div>

        <!-- 時間別詳細 -->
        <div class="hourly-tomorrow fade-in">
            <h3>時間別詳細</h3>
            <div class="hourly-scroll">
                <div class="hourly-grid">
                    ${allHours.map(h => `
                        <div class="hour-card ${h.hour === bestHour.hour ? 'best' : ''}">
                            <div class="hour">${h.label}</div>
                            <div class="wave">${h.waveHeight.toFixed(1)}m</div>
                            <div class="wind ${h.windCond.class}">
                                ${h.windCond.label.slice(0, 3)}
                            </div>
                            <div class="rating-dot ${h.rating.class}"></div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

/**
 * 週間予報を表示
 */
function renderWeeklyForecast(data) {
    const container = document.getElementById('weeklyForecast');
    const daily = data.marine.daily;
    const weatherDaily = data.weather.daily;

    const today = new Date().toISOString().split('T')[0];

    const days = daily.time.map((dateStr, i) => {
        const { dayName, date } = formatDate(dateStr);
        const isToday = dateStr === today;

        const waveHeight = daily.wave_height_max[i] || 0;
        const waveDirection = daily.wave_direction_dominant[i];
        const wavePeriod = daily.wave_period_max[i] || 0;

        const score = calculateWaveScore(waveHeight, wavePeriod, waveDirection, currentSpot.facing);
        const rating = getRating(score);

        return {
            dateStr,
            dayName,
            date,
            isToday,
            waveHeight,
            rating
        };
    });

    container.innerHTML = `
        <h2>週間予報 - ${currentSpot.name}</h2>
        <div class="weekly-grid fade-in">
            ${days.map(d => `
                <div class="day-card ${d.isToday ? 'today' : ''}">
                    <div class="day-name">${d.isToday ? '今日' : d.dayName}</div>
                    <div class="day-date">${d.date}</div>
                    <div class="wave-icon-small">${getWaveIcon(d.waveHeight)}</div>
                    <div class="wave-height-small">${d.waveHeight.toFixed(1)}m</div>
                    <div class="rating-dot ${d.rating.class}" title="${d.rating.label}"></div>
                </div>
            `).join('')}
        </div>
    `;
}

/**
 * 時間別詳細を表示
 */
function renderHourlyDetail(data) {
    const container = document.getElementById('hourlyDetail');
    const hourly = data.marine.hourly;
    const weather = data.weather.hourly;

    // 今日と明日の48時間分を表示
    const now = new Date();
    const currentHour = now.getHours();

    // 現在時刻から48時間分
    const hours = [];
    for (let i = 0; i < 48; i++) {
        if (currentHour + i >= hourly.time.length) break;

        const index = currentHour + i;
        const time = hourly.time[index];
        const waveHeight = hourly.wave_height[index] || 0;
        const windSpeed = weather.wind_speed_10m[index] || 0;
        const windDirection = weather.wind_direction_10m[index] || 0;

        hours.push({
            time,
            hour: formatHour(time),
            waveHeight,
            windSpeed,
            windDirection
        });
    }

    container.innerHTML = `
        <h2>時間別予報（48時間）</h2>
        <div class="hourly-scroll">
            <div class="hourly-grid fade-in">
                ${hours.map(h => `
                    <div class="hour-card">
                        <div class="hour">${h.hour}</div>
                        <div class="wave">${h.waveHeight.toFixed(1)}m</div>
                        <div class="wind">
                            <span class="wind-arrow" style="transform: rotate(${h.windDirection}deg)">↑</span>
                            ${h.windSpeed.toFixed(0)}m/s
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

/**
 * エラー表示
 */
function renderError(message) {
    const sections = ['currentConditions', 'tomorrowForecast', 'weeklyForecast'];
    sections.forEach(id => {
        const container = document.getElementById(id);
        container.innerHTML = `
            <h2>${container.querySelector('h2')?.textContent || 'エラー'}</h2>
            <div class="error">
                <div class="error-icon">⚠️</div>
                <p>${message}</p>
                <p>しばらくしてから再度お試しください</p>
            </div>
        `;
    });
}

// ========================================
// メイン処理
// ========================================

/**
 * スポットを選択してデータを更新
 */
async function selectSpot(spot) {
    currentSpot = spot;

    // タブのアクティブ状態を更新
    document.querySelectorAll('.spot-tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.spotId === spot.id);
    });

    // ローディング表示
    const sections = ['currentConditions', 'tomorrowForecast', 'weeklyForecast'];
    sections.forEach(id => {
        const container = document.getElementById(id);
        const title = container.querySelector('h2')?.textContent || '';
        container.innerHTML = `<h2>${title}</h2><div class="loading">データを読み込み中...</div>`;
    });

    try {
        forecastData = await fetchMarineData(spot.lat, spot.lon);

        renderCurrentConditions(forecastData);
        renderTomorrowForecast(forecastData);
        renderWeeklyForecast(forecastData);

        // 更新時刻を表示
        const now = new Date();
        const timeStr = `${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}`;
        document.getElementById('lastUpdate').textContent = `最終更新: ${timeStr}`;
    } catch (error) {
        console.error('Failed to load forecast:', error);
        renderError('データの取得に失敗しました');
    }
}

/**
 * 初期化
 */
async function init() {
    renderSpotTabs();
    await selectSpot(currentSpot);

    // 更新ボタンのイベントリスナー
    document.getElementById('refreshBtn').addEventListener('click', () => {
        selectSpot(currentSpot);
    });

    // 15分ごとに自動更新
    setInterval(() => {
        selectSpot(currentSpot);
    }, 15 * 60 * 1000);
}

// DOMContentLoaded で初期化
document.addEventListener('DOMContentLoaded', init);
