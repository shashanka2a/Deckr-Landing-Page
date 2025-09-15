import React from 'react';
import { Button } from './ui/button';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-white overflow-hidden">
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl text-slate-900 tracking-tight leading-tight">
                Tell your story.
              </h1>
              
              <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Create stunning presentations in minutes with AI-powered design tools.
              </p>
            </div>
            
            <div className="flex justify-center">
              <a 
                href="#waitlist"
                className="inline-flex items-center justify-center bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white px-8 py-3 text-lg font-medium rounded-md transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-400/50 focus:ring-offset-2 focus:ring-offset-white"
              >
                Join Waitlist
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}