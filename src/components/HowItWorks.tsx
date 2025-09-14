export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Choose Template",
      description: "Start with a professional template or create from scratch.",
      icon: (
        <div className="relative">
          <div className="w-12 h-9 bg-gradient-to-br from-teal-100 to-teal-200 rounded-xl overflow-hidden relative">
            <div className="grid grid-cols-3 gap-1 p-2">
              <div className="bg-gradient-to-br from-pink-300 to-pink-400 rounded h-3"></div>
              <div className="bg-gradient-to-br from-blue-300 to-blue-400 rounded h-3"></div>
              <div className="bg-gradient-to-br from-green-300 to-green-400 rounded h-3"></div>
              <div className="bg-gradient-to-br from-yellow-300 to-yellow-400 rounded h-3"></div>
              <div className="bg-gradient-to-br from-purple-300 to-purple-400 rounded h-3"></div>
              <div className="bg-gradient-to-br from-orange-300 to-orange-400 rounded h-3"></div>
            </div>
          </div>
          <div className="absolute -top-1 -right-1 text-lg">🎨</div>
        </div>
      )
    },
    {
      number: "02", 
      title: "Design & Collaborate",
      description: "Use our drag-and-drop editor and work with your team in real-time.",
      icon: (
        <div className="relative">
          <div className="w-12 h-10 bg-gradient-to-br from-violet-100 to-violet-200 rounded-xl flex items-center justify-center relative">
            <div className="absolute top-1 left-1 w-4 h-3 bg-white rounded border border-violet-300 flex items-center justify-center">
              <div className="text-xs">🖊</div>
            </div>
            <div className="absolute bottom-1 right-1 flex -space-x-1">
              <div className="w-3 h-3 bg-blue-400 rounded-full border border-white"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full border border-white"></div>
            </div>
          </div>
          <div className="absolute -top-1 -right-1 text-lg animate-pulse">💬</div>
        </div>
      )
    },
    {
      number: "03",
      title: "Share",
      description: "Share your presentation with a simple link and track engagement.",
      icon: (
        <div className="relative">
          <div className="w-12 h-8 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xl flex items-center justify-center relative">
            <div className="w-6 h-4 bg-white rounded border border-emerald-300 flex items-center justify-center text-xs">📄</div>
          </div>
          <div className="absolute -top-2 -right-3 flex items-center space-x-1">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-ping"></div>
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
          </div>
          <div className="absolute -bottom-1 -right-1 text-lg">🚀</div>
        </div>
      )
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl text-slate-900 mb-6">
            How it works
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Three simple steps to create and share your presentation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="text-center group hover:-translate-y-2 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-20 h-20 bg-teal-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-teal-100 group-hover:scale-110 transition-all duration-300">
                {step.icon}
              </div>
              
              {/* Step number */}
              <div className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm mx-auto mb-4">
                {step.number}
              </div>
              
              <h3 className="text-xl text-slate-900 mb-3">
                {step.title}
              </h3>
              
              <p className="text-slate-600">
                {step.description}
              </p>

              {/* Arrow connector for non-last items */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 right-0 transform translate-x-1/2">
                  <svg className="w-6 h-6 text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}