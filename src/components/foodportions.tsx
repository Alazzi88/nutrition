'use client';

import { useState } from "react";

const foods = [
  { name: "أرز مطبوخ",    emoji: "🍚", portion: 100, calories: 130, protein: 2.7, carbs: 28,  fat: 0.3,  color: "#fbbf24" },
  { name: "دجاج مشوي",   emoji: "🍗", portion: 100, calories: 165, protein: 31,  carbs: 0,   fat: 3.6,  color: "#f97316" },
  { name: "تفاح",         emoji: "🍎", portion: 100, calories: 52,  protein: 0.3, carbs: 14,  fat: 0.2,  color: "#ef4444" },
  { name: "بيض مسلوق",   emoji: "🥚", portion: 100, calories: 155, protein: 13,  carbs: 1.1, fat: 11,   color: "#84cc16" },
  { name: "لوز",          emoji: "🌰", portion: 100, calories: 575, protein: 21,  carbs: 22,  fat: 49,   color: "#a78bfa" },
  { name: "سلمون مشوي",  emoji: "🐟", portion: 100, calories: 208, protein: 20,  carbs: 0,   fat: 13,   color: "#38bdf8" },
  { name: "بروكلي",       emoji: "🥦", portion: 100, calories: 34,  protein: 2.8, carbs: 7,   fat: 0.4,  color: "#4ade80" },
  { name: "موز",          emoji: "🍌", portion: 100, calories: 89,  protein: 1.1, carbs: 23,  fat: 0.3,  color: "#facc15" },
];

const plateSegments = [
  { label: "خضروات", pct: 25, color: "#4ade80", icon: "🥦", desc: "غنية بالألياف والفيتامينات" },
  { label: "فواكه",  pct: 25, color: "#a78bfa", icon: "🍎", desc: "مصدر طبيعي للسكريات والمعادن" },
  { label: "بروتين", pct: 25, color: "#f87171", icon: "🍗", desc: "لبناء العضلات والأنسجة" },
  { label: "حبوب",   pct: 25, color: "#fbbf24", icon: "🌾", desc: "مصدر الطاقة والكربوهيدرات" },
];

// حساب مسار قوس SVG
function describeArc(cx: number, cy: number, r: number, startAngle: number, endAngle: number) {
  const rad = (d: number) => (d * Math.PI) / 180;
  const x1 = cx + r * Math.cos(rad(startAngle));
  const y1 = cy + r * Math.sin(rad(startAngle));
  const x2 = cx + r * Math.cos(rad(endAngle));
  const y2 = cy + r * Math.sin(rad(endAngle));
  const large = endAngle - startAngle > 180 ? 1 : 0;
  return `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${large} 1 ${x2} ${y2} Z`;
}

export default function FoodPortions() {
  const [activeFood, setActiveFood] = useState<number | null>(null);
  const [activeSegment, setActiveSegment] = useState<number | null>(null);

  let cumAngle = -90;

  return (
    <section className="py-16 px-4" style={{ background: "linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)" }} dir="rtl">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* ===== عنوان القسم ===== */}
        <div className="text-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold text-emerald-600 bg-emerald-100 mb-4">
            🥗 التغذية السليمة
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
            الحصص الغذائية و{" "}
            <span className="shimmer-text">الطبق الصحي</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            تعرّف على القيم الغذائية للأطعمة الشائعة وكيفية توزيع وجبتك بشكل صحي ومتوازن
          </p>
        </div>

        {/* ===== بطاقات الأطعمة ===== */}
        <div>
          <h3 className="text-xl font-extrabold text-gray-800 mb-6 flex items-center gap-2">
            <span className="w-1.5 h-6 rounded-full bg-sky-400 inline-block" />
            جدول الحصص الغذائية
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {foods.map((food, i) => (
              <div
                key={i}
                onClick={() => setActiveFood(activeFood === i ? null : i)}
                className="rounded-2xl p-4 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border"
                style={{
                  background: activeFood === i
                    ? `linear-gradient(135deg, ${food.color}22, ${food.color}11)`
                    : "white",
                  borderColor: activeFood === i ? food.color : "#e5e7eb",
                  boxShadow: activeFood === i ? `0 8px 30px ${food.color}33` : undefined,
                }}
              >
                <div className="text-4xl mb-2 text-center">{food.emoji}</div>
                <h4 className="font-bold text-gray-800 text-sm text-center mb-3">{food.name}</h4>

                {/* شريط السعرات */}
                <div className="space-y-1.5">
                  {[
                    { label: "سعرات", val: food.calories, max: 600, color: "#f97316", unit: "" },
                    { label: "بروتين", val: food.protein,  max: 35,  color: "#60a5fa", unit: "g" },
                    { label: "كارب",  val: food.carbs,    max: 30,  color: "#4ade80", unit: "g" },
                    { label: "دهون",  val: food.fat,      max: 55,  color: "#a78bfa", unit: "g" },
                  ].map(bar => (
                    <div key={bar.label}>
                      <div className="flex justify-between text-xs text-gray-500 mb-0.5">
                        <span>{bar.label}</span>
                        <span className="font-semibold" style={{ color: bar.color }}>{bar.val}{bar.unit}</span>
                      </div>
                      <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full rounded-full transition-all duration-700"
                          style={{ width: `${Math.min((bar.val / bar.max) * 100, 100)}%`, background: bar.color }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* زر تحميل PDF */}
          <div className="text-center mt-8">
            <a href="/files/SaudiHealthyDishGuide.pdf" download
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl text-white font-bold shadow-lg hover:shadow-sky-300 hover:-translate-y-0.5 transition-all duration-300"
              style={{ background: "linear-gradient(135deg, #0ea5e9, #6366f1)" }}>
              📄 تحميل الدليل الغذائي الكامل PDF
            </a>
          </div>
        </div>

        {/* ===== الطبق الصحي ===== */}
        <div className="rounded-3xl overflow-hidden shadow-2xl" style={{ background: "linear-gradient(135deg, #0f172a, #1e3a5f)" }}>
          <div className="p-8 sm:p-12">
            <div className="text-center mb-10">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">🍽️ الطبق الصحي المثالي</h3>
              <p className="text-sky-300 text-sm">مرر فوق كل قسم لمعرفة تفاصيله</p>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-10">
              {/* SVG الطبق */}
              <div className="relative flex-shrink-0">
                {/* ظل خارجي */}
                <div className="absolute inset-0 rounded-full blur-3xl opacity-30"
                  style={{ background: activeSegment !== null ? plateSegments[activeSegment].color : "#38bdf8" }} />
                <svg viewBox="0 0 260 260" width="260" height="260" className="relative drop-shadow-2xl">
                  {/* طبق خارجي */}
                  <circle cx="130" cy="130" r="128" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
                  {/* قطاعات الطبق */}
                  {plateSegments.map((seg, i) => {
                    const angle = seg.pct * 3.6;
                    const path = describeArc(130, 130, 110, cumAngle, cumAngle + angle);
                    const midAngle = cumAngle + angle / 2;
                    const iconX = 130 + 68 * Math.cos((midAngle * Math.PI) / 180);
                    const iconY = 130 + 68 * Math.sin((midAngle * Math.PI) / 180);
                    cumAngle += angle;
                    return (
                      <g key={i} onMouseEnter={() => setActiveSegment(i)} onMouseLeave={() => setActiveSegment(null)}
                        className="cursor-pointer transition-all duration-300">
                        <path d={path} fill={seg.color}
                          opacity={activeSegment === null || activeSegment === i ? 1 : 0.5}
                          transform={activeSegment === i ? `translate(${3 * Math.cos(((midAngle - angle / 2 + angle / 2) * Math.PI) / 180)}, ${3 * Math.sin(((midAngle) * Math.PI) / 180)})` : ""}
                          style={{ filter: activeSegment === i ? `drop-shadow(0 0 12px ${seg.color})` : undefined, transition: "all 0.3s" }}
                        />
                        <text x={iconX} y={iconY} textAnchor="middle" dominantBaseline="middle" fontSize="18">{seg.icon}</text>
                      </g>
                    );
                  })}
                  {/* دائرة مركزية */}
                  <circle cx="130" cy="130" r="32" fill="rgba(15,23,42,0.9)" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
                  <text x="130" y="130" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="11" fontWeight="bold">
                    {activeSegment !== null ? `${plateSegments[activeSegment].pct}%` : "100%"}
                  </text>
                </svg>
              </div>

              {/* معلومات القطاعات */}
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {plateSegments.map((seg, i) => (
                  <div key={i}
                    onMouseEnter={() => setActiveSegment(i)}
                    onMouseLeave={() => setActiveSegment(null)}
                    className="p-5 rounded-2xl cursor-pointer transition-all duration-300 border"
                    style={{
                      background: activeSegment === i ? `${seg.color}22` : "rgba(255,255,255,0.05)",
                      borderColor: activeSegment === i ? seg.color : "rgba(255,255,255,0.1)",
                      boxShadow: activeSegment === i ? `0 0 20px ${seg.color}44` : undefined,
                    }}>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-xl flex items-center justify-center text-lg"
                        style={{ background: `${seg.color}33` }}>
                        {seg.icon}
                      </div>
                      <div>
                        <p className="text-white font-bold text-sm">{seg.label}</p>
                        <p className="font-bold text-xs" style={{ color: seg.color }}>{seg.pct}% من الطبق</p>
                      </div>
                    </div>
                    <p className="text-gray-400 text-xs leading-relaxed">{seg.desc}</p>
                    {/* شريط */}
                    <div className="mt-3 h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full rounded-full transition-all duration-700"
                        style={{ width: activeSegment === i ? "100%" : `${seg.pct}%`, background: seg.color }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* نصيحة */}
            <div className="mt-8 p-5 rounded-2xl text-center" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
              <p className="text-sky-200 text-sm leading-relaxed">
                🌟 <strong className="text-white">نصيحة:</strong> حاول أن يحتوي طبقك يومياً على هذه المجموعات الأربع بنسب متوازنة للحصول على جسم صحي ومناعة قوية.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
