"use client";

import React from "react";

// استيراد مكونات وإضافات Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

// استيراد أنماط Swiper الأساسية وأنماط الـ Pagination والـ Navigation
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// بيانات البطاقات
const supportLinks = [
  {
    name: "تغذية الرجل",
    href: "/man",
    description: "تفاصيل خاصة بتغذية الرجل",
    image: "/img/manimage.webp",
  },
  {
    name: "تغذية المرأة",
    href: "/women",
    description: "تفاصيل خاصة بتغذية المرأة",
    image: "/img/womenimage.webp",
  },
  {
    name: "تغذية الطفل",
    href: "/child",
    description: "تفاصيل خاصة بتغذية الطفل",
    image: "/img/childimage.webp",
  },
  {
    name: "تغذية الحامل والمرضع",
    href: "/pregnant",
    description: "تفاصيل خاصة بتغذية الحامل والمرضع",
    image: "/img/womenpreimage.webp",
  },
  {
    name: "تغذية مرضى سكري الحمل",
    href: "/womenpregnant",
    description: "تفاصيل خاصة بتغذية مرضى سكري الحمل",
    image: "/img/womenpregnantdmimage.webp",
  },
  {
    name: "تغذية السكري",
    href: "/diabetic",
    description: "تفاصيل خاصة بتغذية مرضى السكري",
    image: "/img/dmimage.webp",
  },
  {
    name: "تغذية الرياضيين",
    href: "/athletes",
    description: "تفاصيل خاصة بتغذية الرياضيين",
    image: "/img/nutritionsport.webp",
  },
  {
    name: "تغذية الأمراض المزمنة",
    href: "/chronicDisease",
    description: "تفاصيل خاصة بتغذية أمراض الكلى",
    image: "/img/chronic_disease.webp",
  },
  {
    name: "تغذية الأورام",
    href: "/cancer",
    description: "تفاصيل خاصة بتغذية الأورام",
    image: "/img/cancer.webp",
  },
  {
    name: "تغذية كبار السن",
    href: "/elderly",
    description: "تفاصيل خاصة بتغذية كبار السن",
    image: "/img/elderlyy.webp",
  },
  {
    name: "تغذية مرضى السيلياك",
    href: "/celiac",
    description: "تفاصيل خاصة بتغذية مرضى السيلياك",
    image: "/img/celiacc.webp",
  },
  {
    name: "تغذية صيام رمضان",
    href: "/fasting",
    description: "تفاصيل خاصة بالتغذية أثناء الصيام",
    image: "/img/fastingg.webp",
  },
];

export default function Welcome() {
  return (
    <div dir="rtl" className="bg-white">
      {/* Header */}
      <div className="relative pb-32" style={{background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 60%, #0c4a6e 100%)"}}>
        <div className="absolute inset-0 overflow-hidden">
          <img
            alt="logo"
            src="/img/logo.webp"
            className="size-full object-contain opacity-5"
          />
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500 opacity-10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600 opacity-10 rounded-full blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 flex flex-col items-center text-center gap-6">
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl animate-slide-up drop-shadow-2xl">
            تجمع{" "}
            <span className="shimmer-text">جازان</span>
            {" "}الصحي
          </h1>
          <div className="w-24 h-1 rounded-full bg-gradient-to-r from-sky-400 to-indigo-500 animate-fade-in" />
          <h2 className="text-xl sm:text-2xl font-semibold text-sky-200 animate-slide-up" style={{animationDelay: "0.2s"}}>
            مسار التغذية العلاجية
          </h2>
        </div>
      </div>

      {/* قسم السلايدر (Carousel) */}
      <section
        aria-labelledby="contact-heading"
        className="relative z-10 mx-auto mb-1 -mt-32 max-w-7xl px-6 pb-2 lg:px-8"
      >
        <h2 id="contact-heading" className="sr-only">
          Contact us
        </h2>

        {/* استخدام Swiper لإنشاء Carousel */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000, // الانتقال كل 3 ثوانٍ
            disableOnInteraction: false,
          }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="my-10"
        >
          {supportLinks.map((link, index) => (
            <SwiperSlide key={link.name}>
              <div
                className="flex flex-col rounded-3xl mb-12 overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 animate-slide-left bg-white group border border-gray-100"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* الصورة أعلى البطاقة */}
                <div className="relative overflow-hidden bg-gradient-to-br from-sky-50 to-indigo-50">
                  <img
                    src={link.image}
                    alt={link.name}
                    className="w-full h-40 object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* المحتوى النصي */}
                <div className="p-4 flex flex-col items-center justify-center text-center flex-1">
                  <h3 className="text-lg font-bold text-gray-800 group-hover:text-sky-600 transition-colors duration-300">
                    {link.name}
                  </h3>
                  <p className="mt-2 text-xs text-gray-500 leading-relaxed">
                    {link.description}
                  </p>
                </div>

                {/* الزر في الأسفل */}
                <div className="px-4 py-3 text-center bg-gradient-to-r from-gray-50 to-sky-50">
                  <a
                    href={link.href}
                    className="inline-block px-6 py-2 text-sm font-semibold text-white bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 rounded-2xl shadow-md hover:shadow-sky-300 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    للإطلاع
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* لتخصيص لون الأسهم (Navigation) و حجمها، وكذلك لون الـ Pagination */}
        <style jsx global>{`
  /* تصغير الأسهم وتلوينها بالـ sky-500 */
  .swiper-button-next::after,
  .swiper-button-prev::after {
    font-size: 26px;
    color: #0ea5e9; /* Sky-500 */
  }
  .swiper-button-next:hover::after,
  .swiper-button-prev:hover::after {
    color: #0284c7; /* Sky-600 */
  }

  /* تلوين نقاط الـ Pagination بلون sky-500 وتكبير حجمها قليلاً */
  .swiper-pagination-bullet {
    background: #0ea5e9; /* Sky-500 */
    width: 10px;
    height: 10px;
    opacity: 0.7;
  }
  .swiper-pagination-bullet-active {
    background: #0284c7; /* Sky-600 */
    opacity: 1;
  }

  /* تحريك نقاط الـ Pagination إلى الأسفل */
  .swiper-pagination {
    display: none !important;
  }
`}</style>

      </section>
    </div>
  );
}
