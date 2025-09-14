export function Features() {
  const features = [
    {
      icon: (
        <div className="relative">
          <div className="w-12 h-8 bg-gradient-to-br from-teal-100 to-teal-200 rounded-lg relative overflow-hidden">
            <div className="absolute top-1 left-1 w-3 h-2 bg-teal-400 rounded opacity-80"></div>
            <div className="absolute top-1 right-1 w-2 h-2 bg-teal-300 rounded opacity-60"></div>
            <div className="absolute bottom-1 left-1 w-4 h-1 bg-teal-500 rounded opacity-70"></div>
          </div>
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-yellow-300 rounded-full flex items-center justify-center text-xs">✋</div>
        </div>
      ),
      title: "Drag & Drop Editor",
      description: "Create stunning presentations with simple drag & drop."
    },
    {
      icon: (
        <div className="relative">
          <div className="flex -space-x-2">
            <div className="w-6 h-6 bg-gradient-to-br from-blue-300 to-blue-400 rounded-full border-2 border-white flex items-center justify-center text-xs">👤</div>
            <div className="w-6 h-6 bg-gradient-to-br from-green-300 to-green-400 rounded-full border-2 border-white flex items-center justify-center text-xs">👤</div>
            <div className="w-6 h-6 bg-gradient-to-br from-purple-300 to-purple-400 rounded-full border-2 border-white flex items-center justify-center text-xs">👤</div>
          </div>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-2 left-2 text-xs opacity-70">💬</div>
        </div>
      ),
      title: "Real-time Collaboration",
      description: "Work together instantly with your team."
    },
    {
      icon: (
        <div className="relative">
          <div className="grid grid-cols-2 gap-1 w-8 h-8">
            <div className="bg-gradient-to-br from-pink-200 to-pink-300 rounded aspect-square flex items-center justify-center text-xs">📊</div>
            <div className="bg-gradient-to-br from-orange-200 to-orange-300 rounded aspect-square flex items-center justify-center text-xs">🎨</div>
            <div className="bg-gradient-to-br from-violet-200 to-violet-300 rounded aspect-square flex items-center justify-center text-xs">📈</div>
            <div className="bg-gradient-to-br from-cyan-200 to-cyan-300 rounded aspect-square flex items-center justify-center text-xs">✨</div>
          </div>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full flex items-center justify-center text-xs">⚡</div>
        </div>
      ),
      title: "Smart Templates",
      description: "Start fast with beautiful, professional templates."
    },
    {
      icon: (
        <div className="relative">
          <div className="w-8 h-6 bg-gradient-to-r from-teal-100 to-teal-200 rounded-lg flex items-center justify-center relative">
            <div className="w-4 h-3 bg-white rounded border border-teal-300 flex items-center justify-center text-xs">📄</div>
          </div>
          <div className="absolute -top-1 -right-2 flex items-center space-x-1">
            <div className="w-1 h-1 bg-teal-400 rounded-full animate-bounce"></div>
            <div className="w-1 h-1 bg-teal-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
            <div className="w-1 h-1 bg-teal-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
          </div>
          <div className="absolute -bottom-1 -right-1 text-sm">🔗</div>
        </div>
      ),
      title: "Easy Sharing",
      description: "Share your presentations with a simple link."
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-teal-50 to-transparent rounded-full opacity-60"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-tl from-blue-50 to-transparent rounded-full opacity-40"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-50 to-transparent opacity-20"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl text-slate-900 mb-4">
            Essential tools for
            <span className="text-teal-600"> great presentations</span>
          </h2>
          <p className="text-2xl text-slate-700 mb-4 max-w-2xl mx-auto font-medium">
            Built for modern teams who value simplicity
          </p>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Everything you need to create, collaborate, and share your story.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl border border-slate-100 hover:border-teal-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 mb-6 group-hover:bg-teal-100 group-hover:scale-110 transition-all duration-300">
                {feature.icon}
              </div>
              
              <h3 className="text-xl text-slate-900 mb-4 group-hover:text-teal-700 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}