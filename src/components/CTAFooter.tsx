import { Button } from './ui/button';

export function CTAFooter() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-900 to-slate-800 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-400 rounded-full opacity-5 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-5xl lg:text-6xl text-white mb-6 leading-tight">
            Ready to tell your
            <span className="text-teal-400"> story?</span>
          </h2>
          
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join thousands of creators who trust Deckr to bring their presentations to life. 
            Start creating today—no credit card required.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button className="bg-teal-600 hover:bg-teal-700 text-white px-10 py-4 text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              Get Notified
            </Button>
            <Button variant="outline" className="border-slate-400 text-slate-300 hover:bg-slate-800 hover:text-white px-10 py-4 text-lg transition-all duration-300 hover:scale-105">
              Learn More
            </Button>
          </div>

          {/* Coming Soon Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-900 rounded-full text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-300">
              <span className="w-3 h-3 bg-slate-900 rounded-full mr-3 animate-pulse"></span>
              Coming Soon
            </div>
          </div>

          {/* Waitlist Signup */}
          <div className="max-w-md mx-auto mb-16">
            <p className="text-slate-300 text-center mb-6">Be the first to try Deckr when we launch</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 rounded-lg bg-slate-800 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20"
              />
              <button className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg font-medium transition-colors duration-300 whitespace-nowrap">
                Join Waitlist
              </button>
            </div>
            <p className="text-xs text-slate-400 text-center mt-3">No spam, just updates on our launch progress ✨</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-700 pt-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Brand */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
              </div>
              <span className="text-xl text-white">Deckr</span>
            </div>

            {/* Essential Links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="#features" className="text-slate-400 hover:text-teal-400 transition-colors">Features</a>
              <a href="#pricing" className="text-slate-400 hover:text-teal-400 transition-colors">Pricing</a>
              <a href="#about" className="text-slate-400 hover:text-teal-400 transition-colors">About</a>
              <a href="#contact" className="text-slate-400 hover:text-teal-400 transition-colors">Contact</a>
            </div>

            {/* Email Contact */}
            <div className="text-center md:text-right">
              <p className="text-slate-400 text-sm">Questions?</p>
              <a href="mailto:hello@deckr.com" className="text-teal-400 hover:text-teal-300 transition-colors text-sm">
                hello@deckr.com
              </a>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-8 pt-6 text-center">
            <p className="text-slate-400 text-sm">
              © 2024 Deckr. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}