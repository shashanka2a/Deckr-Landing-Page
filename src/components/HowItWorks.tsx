import React from 'react';
import { Palette, Edit3, Send } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Choose Template",
      description: "Start with a professional template or create from scratch.",
      icon: Palette
    },
    {
      number: "02", 
      title: "Design & Collaborate",
      description: "Use our drag-and-drop editor and work with your team in real-time.",
      icon: Edit3
    },
    {
      number: "03",
      title: "Share",
      description: "Share your presentation with a simple link and track engagement.",
      icon: Send
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl text-slate-900 mb-4">
            How it works
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Three simple steps to create and share your presentation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto relative">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div 
                key={index}
                className="text-center group hover:-translate-y-1 transition-all duration-300 relative"
              >
                {/* Icon */}
                <div className="w-20 h-20 bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:from-teal-100 group-hover:to-teal-200 group-hover:scale-105 transition-all duration-300 shadow-sm group-hover:shadow-md">
                  <IconComponent size={28} className="text-teal-600" />
                </div>
              
              {/* Step number */}
              <div className="w-7 h-7 bg-gradient-to-r from-teal-600 to-teal-700 text-white rounded-full flex items-center justify-center text-sm font-semibold mx-auto mb-4 shadow-sm">
                {step.number}
              </div>
              
              <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-teal-700 transition-colors duration-300">
                {step.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed">
                {step.description}
              </p>

              {/* Arrow connector for non-last items */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 -right-6 z-10">
                  <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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