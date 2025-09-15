import React, { useState } from 'react';
import { Button } from './ui/button';

export function CTAFooter() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      // Reset after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section id="waitlist" className="relative py-24 bg-slate-900 scroll-mt-24">

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-lg mx-auto">
          <h2 className="text-4xl text-white mb-4 leading-tight">
            Be the first to experience Deckr.
          </h2>
          
          <p className="text-lg text-slate-300 mb-8">
            Join our waitlist for early access.
          </p>

          {/* Primary Waitlist Signup */}
          <div className="w-full relative">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col gap-4">
                  <label htmlFor="waitlist-email" className="sr-only">Email address for waitlist</label>
                  <input 
                    id="waitlist-email"
                    type="email" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address" 
                    className="w-full px-6 py-4 text-lg rounded-lg bg-slate-800 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all duration-300 hover:border-slate-500"
                  />
                  <Button 
                    type="submit"
                    disabled={!email.trim()}
                    className="w-full bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 disabled:from-slate-600 disabled:to-slate-700 disabled:cursor-not-allowed text-white px-8 py-4 text-lg font-bold rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 disabled:hover:scale-100 disabled:hover:shadow-none"
                  >
                    Join Waitlist
                  </Button>
                </div>
              </form>
            ) : (
              <div className="text-center py-8 animate-fadeIn">
                <div className="text-6xl mb-4 animate-bounce">✨</div>
                <h3 className="text-2xl text-white font-bold mb-2">You're in!</h3>
                <p className="text-slate-300">We'll notify you when Deckr launches.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-700 pt-8 mt-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center gap-4 text-center">
            {/* Brand */}
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-teal-600 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
              </div>
              <span className="text-lg text-white">Deckr</span>
            </div>

            {/* Copyright & Contact */}
            <div className="space-y-2">
              <p className="text-slate-400 text-sm">
                © 2024 Deckr. All rights reserved.
              </p>
              <div className="flex justify-center gap-4 text-sm">
                <a href="mailto:hello@deckr.com" className="text-slate-400 hover:text-teal-400 transition-colors">
                  hello@deckr.com
                </a>
                <span className="text-slate-600">•</span>
                <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">Privacy</a>
                <span className="text-slate-600">•</span>
                <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">Terms</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}