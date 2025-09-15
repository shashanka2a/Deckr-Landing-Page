import React, { useState } from 'react';
import { Palette, Edit3, Send, Users } from 'lucide-react';

export function HowItWorks() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const steps = [
    {
      title: "Choose Template",
      icon: Palette,
      description: "Pick from beautiful templates",
      animation: "hover:rotate-12"
    },
    {
      title: "Design Together",
      icon: Edit3,
      description: "Collaborate in real-time",
      animation: "hover:scale-110"
    },
    {
      title: "Share Instantly",
      icon: Send,
      description: "One-click sharing",
      animation: "hover:translate-x-2"
    }
  ];

  return (
    <section id="how-it-works" className="py-16 bg-slate-50 scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl text-slate-900 mb-4">
            How it works
          </h2>
        </div>

        <div className="flex justify-center items-center space-x-8 max-w-4xl mx-auto">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="flex items-center">
                <div 
                  className="group relative text-center cursor-pointer p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300"
                  onMouseEnter={() => setHoveredStep(index)}
                  onMouseLeave={() => setHoveredStep(null)}
                >
                  <div className="relative w-16 h-16 bg-gradient-to-br from-teal-100 to-teal-200 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:from-teal-200 group-hover:to-teal-300 group-hover:shadow-md transition-all duration-300">
                    <IconComponent 
                      size={24} 
                      className={`text-teal-600 group-hover:text-teal-700 transition-all duration-300 ${step.animation}`} 
                    />
                    {hoveredStep === index && (
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                    )}
                  </div>
                  
                  <h3 className="text-lg font-semibold text-slate-900 mb-1 group-hover:text-teal-700 transition-colors duration-300">
                    {step.title}
                  </h3>
                  
                  <p className={`text-sm text-slate-600 transition-all duration-300 ${hoveredStep === index ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-2'}`}>
                    {step.description}
                  </p>

                  {/* Special animation for Design Together step */}
                  {index === 1 && hoveredStep === index && (
                    <div className="absolute top-2 right-2 animate-bounce">
                      <Users size={12} className="text-teal-500" />
                    </div>
                  )}
                </div>
                
                {index < steps.length - 1 && (
                  <div className="mx-6">
                    <svg className={`w-6 h-6 text-slate-400 transition-all duration-300 ${hoveredStep === index || hoveredStep === index + 1 ? 'text-teal-500 scale-110' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}