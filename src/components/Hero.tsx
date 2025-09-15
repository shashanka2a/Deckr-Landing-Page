import React from 'react';
import { Button } from './ui/button';
import workflowImage from '../assets/AI_presentation_creation_workflow_9735a82a.png';

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
          
          {/* Right content - AI Workflow Illustration */}
          <div className="relative flex items-center justify-center">
            <div className="relative">
              <img 
                src={workflowImage} 
                alt="AI-powered presentation creation workflow showing user typing an idea, AI transformation, and beautiful slide output"
                className="w-full max-w-2xl h-auto rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-500 hover:shadow-2xl"
              />
              {/* Floating elements for extra visual appeal */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-teal-500 rounded-full opacity-20 animate-bounce"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-purple-500 rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-blue-500 rounded-full opacity-25 animate-ping"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}