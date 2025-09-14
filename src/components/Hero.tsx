import { ImageWithFallback } from './figma/ImageWithFallback';
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
        <div className="grid lg:grid-cols-2 gap-16 items-center">
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
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                Start Creating
              </Button>
              <Button variant="outline" className="border-teal-200 text-teal-700 hover:bg-teal-50 px-8 py-3 text-lg transition-all duration-300 hover:scale-105">
                Watch Demo
              </Button>
            </div>
            
            {/* Stats */}
            <div className="flex justify-center lg:justify-start gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl text-slate-900 mb-1">50k+</div>
                <div className="text-sm text-slate-500">Creators</div>
              </div>
              <div className="text-center">
                <div className="text-2xl text-slate-900 mb-1">1M+</div>
                <div className="text-sm text-slate-500">Presentations</div>
              </div>
              <div className="text-center">
                <div className="text-2xl text-slate-900 mb-1">99%</div>
                <div className="text-sm text-slate-500">Satisfaction</div>
              </div>
            </div>
          </div>
          
          {/* Right content - Hero image */}
          <div className="relative">
            <div className="relative z-10 transform hover:scale-105 transition-transform duration-700">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1705909773420-8d7af2a343f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzU3ODMxMTQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Modern workspace design"
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -left-6 bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-slate-600">Live collaboration</span>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <span className="text-sm text-slate-600">Auto-save</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}