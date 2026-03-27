'use client';

import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Dayjs } from "dayjs";
import { useForm, ValidationError } from "@formspree/react";

// ===================== BMI Calculator =====================
const BMICalculator: React.FC = () => {
  const [weight, setWeight] = useState<number | "">("");
  const [height, setHeight] = useState<number | "">("");
  const [age, setAge] = useState<number | "">("");
  const [gender, setGender] = useState("male");
  const [activityLevel, setActivityLevel] = useState("1.2");
  const [bmi, setBmi] = useState<number | null>(null);
  const [calories, setCalories] = useState<number | null>(null);
  const [bmiCategory, setBmiCategory] = useState("");
  const [bmiColor, setBmiColor] = useState("");

  const getBMIData = (b: number) => {
    if (b < 18.5) return { cat: "نقصان في الوزن", color: "#60a5fa", bg: "from-blue-400 to-blue-600", pct: (b / 40) * 100 };
    if (b < 25)   return { cat: "وزن طبيعي",      color: "#4ade80", bg: "from-green-400 to-emerald-500", pct: (b / 40) * 100 };
    if (b < 30)   return { cat: "وزن زائد",         color: "#fbbf24", bg: "from-yellow-400 to-orange-400", pct: (b / 40) * 100 };
    if (b < 35)   return { cat: "سمنة درجة أولى",  color: "#fb923c", bg: "from-orange-400 to-red-500", pct: (b / 40) * 100 };
    return               { cat: "سمنة مفرطة",       color: "#f87171", bg: "from-red-400 to-rose-600", pct: Math.min((b / 40) * 100, 100) };
  };

  const handleCalculate = () => {
    if (!weight || !height) return;
    const bmiVal = parseFloat((+weight / (+height / 100) ** 2).toFixed(2));
    const data = getBMIData(bmiVal);
    setBmi(bmiVal);
    setBmiCategory(data.cat);
    setBmiColor(data.color);

    if (age) {
      const bmr = gender === "male"
        ? 10 * +weight + 6.25 * +height - 5 * +age + 5
        : 10 * +weight + 6.25 * +height - 5 * +age - 161;
      setCalories(Math.round(bmr * parseFloat(activityLevel)));
    }
  };

  const bmiData = bmi ? getBMIData(bmi) : null;
  const barWidth = bmiData ? Math.min(bmiData.pct, 100) : 0;

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all duration-200 placeholder-gray-400";
  const labelClass = "block text-sm font-semibold text-gray-600 mb-1.5";

  return (
    <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100" style={{ background: "linear-gradient(145deg, #ffffff, #f0f9ff)" }}>
      {/* هيدر */}
      <div className="p-6 pb-5" style={{ background: "linear-gradient(135deg, #0f172a, #1e3a5f)" }}>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl bg-white/10">
            ⚖️
          </div>
          <div>
            <h2 className="text-white font-extrabold text-xl">حاسبة كتلة الجسم</h2>
            <p className="text-sky-300 text-xs mt-0.5">احسب مؤشرك الصحي والسعرات اليومية</p>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-4" dir="rtl">
        {/* الصف الأول: الوزن والطول */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>الوزن (كجم)</label>
            <input type="number" placeholder="مثال: 70" value={weight}
              onChange={e => setWeight(e.target.value ? parseFloat(e.target.value) : "")}
              className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>الطول (سم)</label>
            <input type="number" placeholder="مثال: 170" value={height}
              onChange={e => setHeight(e.target.value ? parseFloat(e.target.value) : "")}
              className={inputClass} />
          </div>
        </div>

        {/* الصف الثاني: العمر والجنس */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>العمر</label>
            <input type="number" placeholder="مثال: 30" value={age}
              onChange={e => setAge(e.target.value ? parseFloat(e.target.value) : "")}
              className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>الجنس</label>
            <div className="flex gap-2">
              {[{ val: "male", label: "ذكر", icon: "👨" }, { val: "female", label: "أنثى", icon: "👩" }].map(g => (
                <button key={g.val} onClick={() => setGender(g.val)}
                  className={`flex-1 py-3 rounded-xl text-sm font-semibold border transition-all duration-200 flex items-center justify-center gap-1.5 ${gender === g.val
                    ? "border-sky-500 bg-sky-50 text-sky-700"
                    : "border-gray-200 bg-gray-50 text-gray-500 hover:border-sky-300"}`}>
                  {g.icon} {g.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* مستوى النشاط */}
        <div>
          <label className={labelClass}>مستوى النشاط</label>
          <select value={activityLevel} onChange={e => setActivityLevel(e.target.value)} className={inputClass}>
            <option value="1.2">🛋️ قليل الحركة</option>
            <option value="1.375">🚶 نشاط خفيف (1-3 أيام)</option>
            <option value="1.55">🏃 نشاط متوسط (3-5 أيام)</option>
            <option value="1.725">💪 نشاط عالي (6-7 أيام)</option>
            <option value="1.9">🏋️ نشاط مكثف جداً</option>
          </select>
        </div>

        {/* زر الحساب */}
        <button onClick={handleCalculate}
          className="w-full py-3.5 rounded-xl text-white font-bold text-base shadow-lg hover:shadow-sky-300 hover:-translate-y-0.5 transition-all duration-300"
          style={{ background: "linear-gradient(135deg, #0ea5e9, #6366f1)" }}>
          احسب الآن ✦
        </button>

        {/* النتائج */}
        {bmi !== null && bmiData && (
          <div className="mt-2 space-y-4 animate-fade-in">
            {/* شريط BMI */}
            <div className="p-5 rounded-2xl border border-gray-100 bg-white shadow-md">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold text-gray-600">مؤشر كتلة الجسم</span>
                <span className="text-2xl font-extrabold" style={{ color: bmiColor }}>{bmi}</span>
              </div>
              <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full rounded-full transition-all duration-1000"
                  style={{ width: `${barWidth}%`, background: `linear-gradient(90deg, ${bmiColor}, ${bmiColor}aa)` }} />
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: bmiColor }} />
                <span className="font-bold text-sm" style={{ color: bmiColor }}>{bmiCategory}</span>
              </div>
            </div>

            {/* السعرات */}
            {calories !== null && (
              <div className="p-5 rounded-2xl flex items-center gap-4 text-white shadow-lg"
                style={{ background: "linear-gradient(135deg, #0f172a, #1e3a5f)" }}>
                <div className="text-4xl">🔥</div>
                <div>
                  <p className="text-sky-300 text-xs font-medium">السعرات الحرارية اليومية</p>
                  <p className="text-3xl font-extrabold mt-0.5">
                    {calories} <span className="text-base font-normal text-gray-400">سعرة</span>
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

// ===================== Contact Form =====================
const ContactForm: React.FC = () => {
  const [birthDate, setBirthDate] = useState<Dayjs | null>(null);
  const [step, setStep] = useState(1);
  const [state, handleSubmit] = useForm("mleyqqlg");

  if (state.succeeded) {
    return (
      <div className="rounded-3xl overflow-hidden shadow-2xl flex flex-col items-center justify-center p-12 text-center"
        style={{ background: "linear-gradient(145deg, #ffffff, #f0fdf4)", minHeight: 520 }}>
        <div className="w-24 h-24 rounded-full flex items-center justify-center text-5xl mb-6 shadow-lg"
          style={{ background: "linear-gradient(135deg, #4ade80, #059669)" }}>
          ✓
        </div>
        <h2 className="text-2xl font-extrabold text-gray-800 mb-3">تم الإرسال بنجاح!</h2>
        <p className="text-gray-500 mb-8 max-w-xs leading-relaxed">
          شكراً لك! تم استلام طلبك وسيتواصل معك الفريق المختص قريباً.
        </p>
        <button onClick={() => window.location.reload()}
          className="px-8 py-3 rounded-xl text-white font-bold shadow-lg transition-all duration-300 hover:-translate-y-0.5"
          style={{ background: "linear-gradient(135deg, #0ea5e9, #6366f1)" }}>
          عودة للصفحة الرئيسية
        </button>
      </div>
    );
  }

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all duration-200 placeholder-gray-400";
  const labelClass = "block text-sm font-semibold text-gray-600 mb-1.5";

  return (
    <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100" style={{ background: "linear-gradient(145deg, #ffffff, #f0f9ff)" }}>
      {/* هيدر */}
      <div className="p-6 pb-5" style={{ background: "linear-gradient(135deg, #1e3a5f, #0c4a6e)" }}>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl bg-white/10">
            📅
          </div>
          <div>
            <h2 className="text-white font-extrabold text-xl">حجز موعد افتراضي</h2>
            <p className="text-sky-300 text-xs mt-0.5">استشارة مع أخصائي تغذية علاجية</p>
          </div>
        </div>
        {/* مؤشر الخطوات */}
        <div className="flex items-center gap-2">
          {[1, 2, 3].map(s => (
            <React.Fragment key={s}>
              <div className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${step >= s ? "bg-sky-400 text-white" : "bg-white/20 text-white/50"}`}>
                {step > s ? "✓" : s}
              </div>
              {s < 3 && <div className={`flex-1 h-0.5 rounded-full transition-all duration-500 ${step > s ? "bg-sky-400" : "bg-white/20"}`} />}
            </React.Fragment>
          ))}
        </div>
        <p className="text-sky-200 text-xs mt-2">
          {step === 1 ? "البيانات الشخصية" : step === 2 ? "معلومات التواصل" : "سبب الاستشارة"}
        </p>
      </div>

      <div className="p-6" dir="rtl">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* الخطوة 1 */}
          {step === 1 && (
            <div className="space-y-4 animate-fade-in">
              <div>
                <label className={labelClass}>🪪 رقم الهوية الوطنية</label>
                <input type="text" name="national_id" required placeholder="أدخل رقم هويتك" className={inputClass} />
                <ValidationError field="national_id" prefix="الهوية" errors={state.errors} className="text-red-400 text-xs mt-1" />
              </div>
              <div>
                <label className={labelClass}>👤 الاسم الكامل</label>
                <input type="text" name="name" required placeholder="أدخل اسمك الكامل" className={inputClass} />
                <ValidationError field="name" prefix="الاسم" errors={state.errors} className="text-red-400 text-xs mt-1" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>العمر</label>
                  <input type="number" name="age" required placeholder="مثال: 30" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>الجنس</label>
                  <select name="gender" required className={inputClass}>
                    <option value="">اختر...</option>
                    <option value="ذكر">ذكر</option>
                    <option value="أنثى">أنثى</option>
                  </select>
                </div>
              </div>
              <button type="button" onClick={() => setStep(2)}
                className="w-full py-3.5 rounded-xl text-white font-bold shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                style={{ background: "linear-gradient(135deg, #0ea5e9, #6366f1)" }}>
                التالي ←
              </button>
            </div>
          )}

          {/* الخطوة 2 */}
          {step === 2 && (
            <div className="space-y-4 animate-fade-in">
              <div>
                <label className={labelClass}>📅 تاريخ الميلاد</label>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    value={birthDate}
                    onChange={(v: Dayjs | null) => setBirthDate(v)}
                    views={["year", "month", "day"]}
                    slotProps={{
                      textField: {
                        required: true,
                        placeholder: "اختر تاريخ ميلادك",
                        className: "w-full",
                        size: "small",
                        sx: {
                          width: "100%",
                          "& .MuiOutlinedInput-root": {
                            borderRadius: "12px",
                            backgroundColor: "#f9fafb",
                            fontSize: "14px",
                          },
                        },
                      },
                    }}
                  />
                </LocalizationProvider>
                <input type="hidden" name="birth_date" value={birthDate ? birthDate.format("YYYY-MM-DD") : ""} />
              </div>
              <div>
                <label className={labelClass}>📱 رقم الهاتف</label>
                <input type="tel" name="phone" required placeholder="05XXXXXXXX" dir="rtl" className={inputClass} />
                <ValidationError field="phone" prefix="الهاتف" errors={state.errors} className="text-red-400 text-xs mt-1" />
              </div>
              <div className="flex gap-3">
                <button type="button" onClick={() => setStep(1)}
                  className="flex-1 py-3.5 rounded-xl font-bold border border-gray-200 text-gray-600 hover:bg-gray-50 transition-all duration-200">
                  → رجوع
                </button>
                <button type="button" onClick={() => setStep(3)}
                  className="flex-1 py-3.5 rounded-xl text-white font-bold shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                  style={{ background: "linear-gradient(135deg, #0ea5e9, #6366f1)" }}>
                  التالي ←
                </button>
              </div>
            </div>
          )}

          {/* الخطوة 3 */}
          {step === 3 && (
            <div className="space-y-4 animate-fade-in">
              <div>
                <label className={labelClass}>🩺 سبب الاستشارة</label>
                <textarea name="consultation_reason" required placeholder="اكتب سبب طلب الاستشارة بالتفصيل..." rows={4}
                  className={`${inputClass} resize-none`} />
                <ValidationError field="consultation_reason" prefix="السبب" errors={state.errors} className="text-red-400 text-xs mt-1" />
              </div>
              {/* ملخص */}
              <div className="p-4 rounded-2xl bg-sky-50 border border-sky-100 text-sm text-sky-700">
                <p className="font-semibold mb-1">📋 سيتم التواصل معك خلال 24-48 ساعة</p>
                <p className="text-sky-600 text-xs">الاستشارات متاحة من الأحد إلى الخميس</p>
              </div>
              <div className="flex gap-3">
                <button type="button" onClick={() => setStep(2)}
                  className="flex-1 py-3.5 rounded-xl font-bold border border-gray-200 text-gray-600 hover:bg-gray-50 transition-all duration-200">
                  → رجوع
                </button>
                <button type="submit" disabled={state.submitting}
                  className="flex-1 py-3.5 rounded-xl text-white font-bold shadow-lg hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{ background: "linear-gradient(135deg, #4ade80, #059669)" }}>
                  {state.submitting ? "⏳ جار الإرسال..." : "✓ إرسال الطلب"}
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

// ===================== Main =====================
const CombinedPage: React.FC = () => {
  return (
    <section className="py-16 px-4" style={{ background: "linear-gradient(180deg, #ffffff 0%, #f0f9ff 100%)" }} dir="rtl">
      <div className="mx-auto max-w-7xl">
        {/* عنوان القسم */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold text-sky-600 bg-sky-100 mb-4">
            🧮 أدوات تفاعلية
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
            حاسبتك الصحية و{" "}
            <span className="shimmer-text">حجز موعدك</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            استخدم حاسبة مؤشر كتلة الجسم أو احجز استشارة مع أخصائي التغذية العلاجية
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <BMICalculator />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default CombinedPage;
