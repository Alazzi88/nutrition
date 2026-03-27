'use client';

import Image from "next/image";
import React, { useState } from "react";

const Footer: React.FC = () => {
  const [isPrivacyOpen, setPrivacyOpen] = useState(false);

  const quickLinks = [
    { label: "التغذية العلاجية", href: "/man" },
    { label: "تغذية المرأة", href: "/women" },
    { label: "تغذية الطفل", href: "/child" },
    { label: "تغذية السكري", href: "/diabetic" },
    { label: "تغذية الرياضيين", href: "/athletes" },
    { label: "تغذية الأورام", href: "/cancer" },
  ];

  return (
    <footer dir="rtl" className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 60%, #0f172a 100%)" }}>
      {/* موجة علوية */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,0 L0,0 Z" fill="#f8fafc" />
        </svg>
      </div>

      {/* تأثيرات ضوئية خلفية */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-500 opacity-5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-indigo-500 opacity-5 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-10 lg:px-8">
        {/* الصف العلوي: الشعار + روابط سريعة + وزارة الصحة */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-white/10">
          {/* الشعار والوصف */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="relative">
              <div className="absolute -inset-2 bg-sky-500 opacity-20 rounded-full blur-xl" />
              <Image
                src="/img/logo.webp"
                alt="تجمع جازان الصحي"
                width={80}
                height={80}
                className="relative rounded-full"
              />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg">تجمع جازان الصحي</h3>
              <p className="text-gray-400 text-sm mt-1 leading-relaxed">
                مسار التغذية العلاجية — نحو حياة صحية مستدامة
              </p>
            </div>
            <div className="flex gap-3 mt-2">
              {["🏥", "🥗", "💊"].map((icon, i) => (
                <div key={i} className="w-9 h-9 rounded-xl flex items-center justify-center text-lg bg-white/5 hover:bg-sky-500/20 transition-colors duration-300 cursor-pointer border border-white/10">
                  {icon}
                </div>
              ))}
            </div>
          </div>

          {/* روابط سريعة */}
          <div>
            <h4 className="text-white font-semibold text-base mb-5 flex items-center gap-2">
              <span className="w-1 h-5 rounded-full bg-sky-400 inline-block" />
              روابط سريعة
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-sky-400 text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-4 h-px bg-gray-600 group-hover:bg-sky-400 group-hover:w-6 transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* روابط ذات صلة */}
          <div>
            <h4 className="text-white font-semibold text-base mb-5 flex items-center gap-2">
              <span className="w-1 h-5 rounded-full bg-indigo-400 inline-block" />
              روابط تهمك
            </h4>
            <a
              href="https://www.moh.gov.sa/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-sky-400/30 transition-all duration-300 group"
            >
              <Image
                src="/img/min.webp"
                alt="وزارة الصحة"
                width={48}
                height={48}
                className="rounded-full group-hover:scale-110 transition-transform duration-300"
              />
              <div>
                <p className="text-white text-sm font-semibold">وزارة الصحة</p>
                <p className="text-gray-500 text-xs mt-0.5">moh.gov.sa</p>
              </div>
              <span className="mr-auto text-gray-500 group-hover:text-sky-400 transition-colors">←</span>
            </a>

            {/* سياسة الخصوصية */}
            <div className="mt-4 p-4 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-xs text-gray-400 leading-relaxed">
                نحن نحترم خصوصيتك. بياناتك لا تُستخدم لأغراض التسويق.{" "}
                <button
                  onClick={() => setPrivacyOpen(true)}
                  className="text-sky-400 underline hover:text-sky-300 transition-colors focus:outline-none"
                >
                  سياسة الخصوصية
                </button>
              </p>
            </div>
          </div>
        </div>

        {/* الشريط السفلي */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            جميع الحقوق محفوظة &copy; {new Date().getFullYear()} — تجمع جازان الصحي
          </p>
          <p className="text-gray-600 text-xs">
            Developed by{" "}
            <span className="text-sky-400 font-medium">Yahya Alizzi</span>
          </p>
        </div>
      </div>

      {/* نافذة سياسة الخصوصية */}
      {isPrivacyOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="bg-white rounded-3xl w-full max-w-2xl shadow-2xl overflow-hidden">
            {/* هيدر النافذة */}
            <div className="p-6 flex items-center justify-between" style={{ background: "linear-gradient(135deg, #0f172a, #1e3a5f)" }}>
              <div>
                <h2 className="text-xl font-bold text-white">سياسة الخصوصية</h2>
                <p className="text-sky-300 text-sm mt-1">تجمع جازان الصحي</p>
              </div>
              <button
                onClick={() => setPrivacyOpen(false)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              >
                ✕
              </button>
            </div>
            {/* محتوى سياسة الخصوصية */}
            <div className="p-6 overflow-y-auto max-h-[65vh] space-y-5 text-right" dir="rtl">
              {[
                { title: "مقدمة", text: "نحن في تجمع جازان الصحي نلتزم بحماية خصوصيتك واحترام بياناتك الشخصية. توضح هذه السياسة كيفية جمع واستخدام وحماية معلوماتك." },
                { title: "جمع المعلومات", text: "نقوم بجمع: رقم الهوية، الاسم الكامل، رقم الجوال، تاريخ الميلاد — لأغراض تقديم خدمات التغذية العلاجية فقط." },
                { title: "استخدام المعلومات", text: "تُستخدم بياناتك للتحقق من الهوية وتقديم خدمات مخصصة والتواصل بشأن الاستشارات. لا نشاركها مع أطراف ثالثة لأغراض تسويقية." },
                { title: "حماية المعلومات", text: "نتخذ إجراءات أمنية مناسبة لحماية معلوماتك من الوصول غير المصرح به أو التعديل أو الكشف." },
                { title: "اتصل بنا", text: "للاستفسار عن سياسة الخصوصية: 3zzoezzo@gmail.com" },
              ].map((sec, i) => (
                <div key={i} className="border-r-4 border-sky-400 pr-4">
                  <h3 className="font-bold text-gray-800 mb-1">{sec.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{sec.text}</p>
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-gray-100 flex justify-center">
              <button
                onClick={() => setPrivacyOpen(false)}
                className="px-8 py-2.5 rounded-xl text-white text-sm font-semibold transition-all duration-300"
                style={{ background: "linear-gradient(135deg, #0ea5e9, #6366f1)" }}
              >
                إغلاق
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
