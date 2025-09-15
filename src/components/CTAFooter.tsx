import React from 'react';
import { Button } from './ui/button';

export function CTAFooter() {
  return (
    <section className="relative py-24 bg-slate-900">

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-lg mx-auto">
          <h2 className="text-4xl text-white mb-4 leading-tight">
            Ready to tell your story?
          </h2>
          
          <p className="text-lg text-slate-300 mb-8">
            Be the first to experience Deckr when we launch.
          </p>

          {/* Primary Waitlist Signup */}
          <div id="waitlist" className="w-full">
            <form onSubmit={(e) => { e.preventDefault(); /* TODO: Handle form submission */ }} className="space-y-4">
              <div className="flex flex-col gap-4">
                <label htmlFor="waitlist-email" className="sr-only">Email address for waitlist</label>
                <input 
                  id="waitlist-email"
                  type="email" 
                  required
                  placeholder="Enter your email address" 
                  className="w-full px-6 py-4 text-lg rounded-lg bg-slate-800 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-all duration-300"
                />
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white px-8 py-4 text-lg font-bold rounded-lg transition-all duration-300 hover:shadow-lg"
                >
                  Join Waitlist
                </Button>
              </div>
            </form>
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