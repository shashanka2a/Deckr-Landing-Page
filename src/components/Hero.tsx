import { Button } from './ui/button';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-slate-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-teal-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-200 rounded-full opacity-10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-teal-50 text-teal-700 rounded-full text-sm transition-all duration-300 hover:bg-teal-100 hover:scale-105">
                <span className="w-2 h-2 bg-teal-500 rounded-full mr-2 animate-pulse"></span>
                Design. Create. Share.
              </div>
              
              <h1 className="text-5xl lg:text-7xl text-slate-900 tracking-tight leading-tight">
                Tell your
                <span className="block text-teal-600 relative">
                  story.
                  <svg className="absolute -bottom-4 left-0 w-full h-4" viewBox="0 0 200 20" fill="none">
                    <path d="M5 15C50 5 150 5 195 15" stroke="currentColor" strokeWidth="3" fill="none" className="text-teal-300"/>
                  </svg>
                </span>
              </h1>
              
              <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
                Create stunning presentations that captivate your audience. 
                Deckr makes it simple to design, collaborate, and share your ideas.
              </p>
            </div>
            
            <div className="flex justify-center lg:justify-start">
              <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                Start Creating
              </Button>
            </div>
          </div>
          
          {/* Right content - Clean presentation illustration */}
          <div className="relative flex items-center justify-center">
            <div className="w-96 h-96 bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl flex items-center justify-center transform hover:scale-105 transition-transform duration-500">
              {/* Simple presentation illustration */}
              <div className="relative">
                {/* Person presenting */}
                <div className="relative z-10">
                  <svg className="w-32 h-32 text-teal-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                {/* Presentation screen */}
                <div className="absolute -top-8 -right-8 w-20 h-14 bg-white rounded-lg shadow-lg border-2 border-teal-200 flex items-center justify-center">
                  <div className="space-y-1">
                    <div className="w-8 h-1 bg-teal-300 rounded"></div>
                    <div className="w-6 h-1 bg-teal-200 rounded"></div>
                    <div className="w-10 h-1 bg-teal-100 rounded"></div>
                  </div>
                </div>
                {/* Pointer/cursor */}
                <div className="absolute -bottom-2 right-2 w-3 h-3 bg-teal-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}