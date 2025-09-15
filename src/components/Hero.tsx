import React from 'react';
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
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-teal-50 text-teal-700 rounded-full text-sm transition-all duration-300 hover:bg-teal-100 hover:scale-105">
                <span className="w-2 h-2 bg-teal-500 rounded-full mr-2 animate-pulse"></span>
                Design. Create. Share.
              </div>
              
              <h1 className="text-5xl lg:text-7xl text-slate-900 tracking-tight leading-tight">
                Tell your
                <span className="block text-teal-600 relative">
                  story.
                  <svg className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-full h-4 max-w-xs" viewBox="0 0 200 20" fill="none">
                    <path d="M5 15C50 5 150 5 195 15" stroke="currentColor" strokeWidth="3" fill="none" className="text-teal-300"/>
                  </svg>
                </span>
              </h1>
              
              <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Create stunning presentations that captivate your audience. 
                Deckr makes it simple to design, collaborate, and share your ideas.
              </p>
            </div>
            
            <div className="flex justify-center">
              <Button className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white px-8 py-3 text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg">
                Start Creating
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}