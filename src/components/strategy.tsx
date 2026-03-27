import React from "react";

const StrategyPage = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center py-16 px-4 sm:px-6 lg:px-8"
      style={{background: "linear-gradient(180deg, #f0f9ff 0%, #ffffff 50%, #f8fafc 100%)"}}
      dir="rtl"
    >
      {/* Header Section */}
      <header className="text-center mb-14 sm:mb-20">
        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold text-sky-600 bg-sky-100 mb-4 animate-fade-in">
          🎯 رؤيتنا ورسالتنا
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-5 animate-slide-up">
          أهدافنا{" "}
          <span className="shimmer-text">وقيمنا</span>
        </h1>
        <div className="w-20 h-1 rounded-full mx-auto mb-5" style={{background: "linear-gradient(90deg, #0ea5e9, #6366f1)"}} />
        <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          نعمل على تحقيق التميز في مجال التغذية العلاجية والوقاية من الأمراض من خلال تقديم خدمات مبتكرة وموثوقة تساعد الأفراد على تحقيق صحة مستدامة.
        </p>
      </header>

      {/* Goals Section */}
      <section className="w-full max-w-7xl mb-16 sm:mb-20">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-sky-600 text-center mb-8 relative group">
          <span className="relative inline-block">
            الأهداف
            <span className="absolute left-0 right-0 bottom-[-6px] h-[3px] bg-sky-500 rounded-full scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
          </span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {[
            { icon: "🏥", text: "تحسين صحة المرضى: توفير استشارات غذائية وعلاجية مخصصة لتحسين صحة الأفراد المصابين بحالات صحية متنوعة مثل السمنة، السكري، وأمراض القلب." },
            { icon: "🛡️", text: "الوقاية من الأمراض: تعزيز التثقيف الغذائي لتقليل انتشار الأمراض المزمنة المرتبطة بالتغذية مثل السمنة والسكري." },
            { icon: "📋", text: "إدارة العلاجات الغذائية: تقديم خطط غذائية دقيقة تتوافق مع احتياجات المرضى وتساعد في تسريع شفائهم." },
            { icon: "💡", text: "الارتقاء بالوعي الصحي: نشر الوعي الغذائي بين أفراد المجتمع لتبني أنماط حياة صحية مستدامة." },
            { icon: "⭐", text: "تحسين الجودة والرعاية: تحسين مستوى الرعاية الصحية من خلال دمج التغذية العلاجية ضمن الخطط العلاجية." },
            { icon: "🤝", text: "التعاون مع المؤسسات الصحية: بناء شراكات مع الجهات الصحية لتعزيز كفاءة الخدمات المقدمة." },
          ].map((goal, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-gray-900 rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 group"
              style={{background: "linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%)"}}
            >
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-4 shadow-md group-hover:scale-110 transition-transform duration-300"
                style={{background: "linear-gradient(135deg, #0ea5e9, #6366f1)"}}>
                {goal.icon}
              </div>
              <div className="w-8 h-0.5 rounded-full bg-sky-400 mb-4 group-hover:w-16 transition-all duration-300" />
              <p className="text-center text-sm sm:text-base leading-relaxed text-gray-600">{goal.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full max-w-7xl">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-sky-600 text-center mb-8 relative group">
          <span className="relative inline-block">
            القيم
            <span className="absolute left-0 right-0 bottom-[-6px] h-[3px] bg-sky-500 rounded-full scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
          </span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {[
            { icon: "🏆", title: "الجودة", text: "تقديم خدمات تغذية علاجية عالية الجودة تواكب المعايير الطبية الحديثة." },
            { icon: "👔", title: "الاحترافية", text: "العمل بروح الفريق الواحد والاهتمام بتقديم الرعاية الصحية المتكاملة." },
            { icon: "✅", title: "الالتزام", text: "التأكيد على أهمية الالتزام بتوجيهات الأخصائيين الغذائيين لضمان النجاح في العلاج." },
            { icon: "🔬", title: "الابتكار", text: "تبني حلول غذائية مبتكرة ومتجددة تلائم احتياجات المرضى المختلفة." },
            { icon: "🔍", title: "الشفافية", text: "توفير معلومات واضحة ودقيقة للمرضى حول خياراتهم الغذائية وعلاجاتهم." },
            { icon: "❤️", title: "التعاطف", text: "فهم احتياجات المرضى وتقديم دعم نفسي ومعنوي خلال رحلتهم العلاجية." },
          ].map((value, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-gray-900 rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group overflow-hidden relative"
              style={{background: "linear-gradient(135deg, #0f172a, #1e3a5f)"}}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-t-3xl" />
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300 bg-white/10">
                {value.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{value.title}</h3>
              <div className="w-8 h-0.5 rounded-full bg-sky-400 mb-3 group-hover:w-16 transition-all duration-300" />
              <p className="text-center text-sm leading-relaxed text-gray-300">{value.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default StrategyPage;
