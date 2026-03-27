"use client";
import { useRef, useState, useEffect } from "react";
import useTypewriter from "./useTypewriter";

const nutritionTips = [
  {
    icon: "💧",
    title: "الترطيب اليومي",
    desc: "اشرب 8-10 أكواب من الماء يومياً للحفاظ على وظائف الجسم وتحسين عملية الهضم.",
    color: "from-blue-400 to-cyan-500",
    shadow: "shadow-blue-300",
  },
  {
    icon: "🥦",
    title: "الخضروات الورقية",
    desc: "تناول 3 حصص يومياً من الخضروات الورقية الغنية بالحديد وحمض الفوليك والفيتامينات.",
    color: "from-green-400 to-emerald-600",
    shadow: "shadow-green-300",
  },
  {
    icon: "🐟",
    title: "البروتين الصحي",
    desc: "أدرج الأسماك في وجباتك مرتين أسبوعياً لتعزيز أوميغا-3 وتقليل الالتهابات.",
    color: "from-sky-400 to-blue-600",
    shadow: "shadow-sky-300",
  },
  {
    icon: "🌾",
    title: "الحبوب الكاملة",
    desc: "استبدل الحبوب المكررة بالكاملة لزيادة الألياف وتنظيم سكر الدم بشكل صحي.",
    color: "from-amber-400 to-orange-500",
    shadow: "shadow-amber-300",
  },
  {
    icon: "🫐",
    title: "مضادات الأكسدة",
    desc: "التوت والفراولة والرمان غنية بمضادات الأكسدة التي تحمي الخلايا وتعزز المناعة.",
    color: "from-purple-400 to-violet-600",
    shadow: "shadow-purple-300",
  },
  {
    icon: "🥑",
    title: "الدهون الصحية",
    desc: "الأفوكادو والمكسرات وزيت الزيتون توفر دهوناً صحية ضرورية لصحة القلب والدماغ.",
    color: "from-lime-400 to-green-600",
    shadow: "shadow-lime-300",
  },
];

const macroCards = [
  { label: "بروتين", percent: 25, color: "#f87171", icon: "🥩", desc: "لبناء العضلات والأنسجة" },
  { label: "كربوهيدرات", percent: 50, color: "#60a5fa", icon: "🍞", desc: "مصدر الطاقة الأساسي" },
  { label: "دهون", percent: 25, color: "#a78bfa", icon: "🫒", desc: "للهرمونات والفيتامينات" },
];

export default function Manager() {
  const managerText =
    `نؤمن في تجمع جازان الصحي بأن التغذية السليمة هي حجر الزاوية لتحقيق حياة صحية، ولذلك نحن نعمل على توفير خدمات غذائية علاجية قائمة على أسس علمية وطبّية حديثة، بالتعاون مع فريق من الأخصائيين المؤهلين لضمان تقديم أفضل رعاية صحية للمرضى. نحن ملتزمون بتقديم المشورة الغذائية المناسبة لكل حالة مرضية، وذلك من خلال تقديم برامج غذائية متخصصة تساهم في تحسين جودة الحياة وتعزيز الشفاء.`

  const blockquoteRef = useRef<HTMLQuoteElement>(null);
  const [startTyping, setStartTyping] = useState(false);
  const [visibleCards, setVisibleCards] = useState<boolean[]>(
    new Array(nutritionTips.length).fill(false)
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStartTyping(true);
      },
      { threshold: 0.2 }
    );
    if (blockquoteRef.current) observer.observe(blockquoteRef.current);
    return () => {
      if (blockquoteRef.current) observer.unobserve(blockquoteRef.current);
    };
  }, []);

  useEffect(() => {
    nutritionTips.forEach((_, i) => {
      setTimeout(() => {
        setVisibleCards((prev) => {
          const next = [...prev];
          next[i] = true;
          return next;
        });
      }, i * 150);
    });
  }, []);

  const typedText = useTypewriter(startTyping ? managerText : "", 25);

  return (
    <div dir="rtl">
      {/* ===== قسم الفيديو والاقتباس ===== */}
      <section className="relative overflow-hidden py-20 px-4" style={{background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%)"}}>
        {/* خلفية متحركة */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-10 w-72 h-72 bg-sky-500 opacity-10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-500 opacity-10 rounded-full blur-3xl animate-pulse" style={{animationDelay: "1s"}} />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-teal-400 opacity-5 rounded-full blur-3xl animate-pulse" style={{animationDelay: "2s"}} />
          {/* نقاط زخرفية */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 bg-sky-400 rounded-full opacity-30 animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${3 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        <div className="relative mx-auto max-w-5xl">
          {/* الفيديو */}
          <div className="flex justify-center mb-12">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-sky-400 to-indigo-600 rounded-2xl blur opacity-50 group-hover:opacity-80 transition duration-500" />
              <div className="relative w-full max-w-2xl overflow-hidden rounded-2xl shadow-2xl" style={{perspective: "1000px"}}>
                <video
                  className="w-full h-auto max-h-[420px] object-contain bg-black"
                  src="/img/vid.mov"
                  poster="/img/imgvid.webp"
                  controls
                />
              </div>
            </div>
          </div>

          {/* الشعار */}
          <div className="flex justify-center mb-8">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-300" />
              <img
                alt="Logo"
                src="/img/logo.webp"
                className="relative h-16 sm:h-20 drop-shadow-2xl"
              />
            </div>
          </div>

          {/* الاقتباس */}
          <figure className="mt-4">
            <blockquote
              ref={blockquoteRef}
              className="relative text-center text-base sm:text-xl font-semibold italic leading-relaxed px-4 py-8 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#e2e8f0",
              }}
            >
              <span className="text-sky-400 text-5xl leading-none font-serif">&ldquo;</span>
              <p className="mt-2">{typedText}</p>
              <span className="text-sky-400 text-5xl leading-none font-serif">&rdquo;</span>
            </blockquote>
            <figcaption className="mt-8">
              {/* صورة المدير */}
              <img
                alt="Manager"
                src="img/manager.webp"
                className="mx-auto h-16 sm:h-24 w-16 sm:w-24 rounded-full shadow-md border-2 border-sky-400"
              />
              {/* اسم المدير وتوصيفه */}
              <div className="mt-4 flex flex-col items-center text-sm sm:text-base text-gray-400">
                <div className="font-semibold text-white text-base sm:text-lg">
                  أ. فالح بن ناصر الشهراني
                </div>
                <div className="flex items-center mt-1 text-sky-300">
                  <span>الرئيس التنفيذي لتجمع جازان الصحي</span>
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ===== قسم نصائح التغذية ===== */}
      <section className="py-20 px-4" style={{background: "linear-gradient(180deg, #f0f9ff 0%, #ffffff 100%)"}}>
        <div className="mx-auto max-w-7xl">
          {/* العنوان */}
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold text-sky-600 bg-sky-100 mb-4">
              🌿 التغذية الصحية
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              نصائح غذائية{" "}
              <span className="bg-clip-text text-transparent" style={{backgroundImage: "linear-gradient(135deg, #0ea5e9, #6366f1)"}}>
                يومية أساسية
              </span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              اتبع هذه الإرشادات الغذائية العلمية للحصول على صحة مثالية وحياة متوازنة
            </p>
          </div>

          {/* بطاقات النصائح - 3D Flip Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {nutritionTips.map((tip, i) => (
              <div
                key={i}
                className={`nutrition-card-3d transition-all duration-700 ${visibleCards[i] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{transitionDelay: `${i * 100}ms`}}
              >
                <div className="group relative h-56 cursor-pointer" style={{perspective: "1000px"}}>
                  <div className="relative w-full h-full transition-transform duration-700 ease-in-out group-hover:[transform:rotateY(180deg)]" style={{transformStyle: "preserve-3d"}}>
                    {/* الوجه الأمامي */}
                    <div
                      className={`absolute inset-0 rounded-2xl p-6 flex flex-col items-center justify-center text-white shadow-xl ${tip.shadow}`}
                      style={{backfaceVisibility: "hidden", background: `linear-gradient(135deg, var(--tw-gradient-from), var(--tw-gradient-to))`, backgroundImage: `linear-gradient(135deg, ${tip.color.includes("blue-400") ? "#60a5fa" : tip.color.includes("green-400") ? "#4ade80" : tip.color.includes("sky-400") ? "#38bdf8" : tip.color.includes("amber-400") ? "#fbbf24" : tip.color.includes("purple-400") ? "#c084fc" : "#a3e635"}, ${tip.color.includes("cyan-500") ? "#06b6d4" : tip.color.includes("emerald-600") ? "#059669" : tip.color.includes("blue-600") ? "#2563eb" : tip.color.includes("orange-500") ? "#f97316" : tip.color.includes("violet-600") ? "#7c3aed" : "#16a34a"})`}}
                    >
                      <span className="text-6xl mb-3 filter drop-shadow-lg">{tip.icon}</span>
                      <h3 className="text-xl font-bold text-center drop-shadow">{tip.title}</h3>
                      <p className="text-xs mt-2 opacity-80">اضغط لمعرفة المزيد</p>
                    </div>
                    {/* الوجه الخلفي */}
                    <div
                      className="absolute inset-0 rounded-2xl p-6 flex flex-col items-center justify-center bg-white shadow-xl"
                      style={{backfaceVisibility: "hidden", transform: "rotateY(180deg)"}}
                    >
                      <span className="text-4xl mb-3">{tip.icon}</span>
                      <h3 className="text-lg font-bold text-gray-800 mb-3 text-center">{tip.title}</h3>
                      <p className="text-sm text-gray-600 text-center leading-relaxed">{tip.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ===== توزيع المغذيات الكبرى ===== */}
          <div className="rounded-3xl p-8 sm:p-12 shadow-2xl mb-12" style={{background: "linear-gradient(135deg, #0f172a, #1e3a5f)"}}>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white text-center mb-2">
              التوزيع المثالي للمغذيات الكبرى
            </h3>
            <p className="text-sky-300 text-center mb-10 text-sm">لصحة مثالية يومياً</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {macroCards.map((m, i) => (
                <div key={i} className="flex flex-col items-center group">
                  <div className="relative w-36 h-36 mb-5">
                    <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
                      <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="12" />
                      <circle
                        cx="60" cy="60" r="50" fill="none"
                        stroke={m.color} strokeWidth="12"
                        strokeDasharray={`${2 * Math.PI * 50 * m.percent / 100} ${2 * Math.PI * 50}`}
                        strokeLinecap="round"
                        className="macro-circle"
                        style={{
                          strokeDashoffset: 0,
                          transition: "stroke-dasharray 1.5s ease-in-out",
                          filter: `drop-shadow(0 0 8px ${m.color})`,
                        }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-2xl">{m.icon}</span>
                      <span className="text-white font-extrabold text-xl">{m.percent}%</span>
                    </div>
                  </div>
                  <h4 className="text-white font-bold text-lg mb-1">{m.label}</h4>
                  <p className="text-gray-400 text-sm text-center">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ===== حقائق غذائية سريعة ===== */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { num: "2000", unit: "سعرة", label: "الاحتياج اليومي للبالغين", icon: "🔥" },
              { num: "8", unit: "أكواب", label: "الماء الضروري يومياً", icon: "💧" },
              { num: "5", unit: "حصص", label: "فواكه وخضروات يومياً", icon: "🥗" },
              { num: "3", unit: "وجبات", label: "مع وجبتين خفيفتين", icon: "🍽️" },
            ].map((stat, i) => (
              <div
                key={i}
                className="rounded-2xl p-5 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                style={{background: "linear-gradient(135deg, #ffffff, #f0f9ff)"}}
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-extrabold text-sky-600">{stat.num}</div>
                <div className="text-sm font-semibold text-gray-700">{stat.unit}</div>
                <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
