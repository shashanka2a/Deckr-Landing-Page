import React from 'react';
import { Palette, Edit3, Send } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      title: "Choose Template",
      icon: Palette
    },
    {
      title: "Design Together",
      icon: Edit3
    },
    {
      title: "Share Instantly",
      icon: Send
    }
  ];

  return (
    <section id="how-it-works" className="py-16 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl text-slate-900 mb-4">
            How it works
          </h2>
        </div>

        <div className="flex justify-center items-center space-x-8 max-w-2xl mx-auto">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="flex items-center">
                <div className="text-center">
                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <IconComponent size={18} className="text-teal-600" />
                  </div>
                  <h3 className="text-sm text-slate-700">
                    {step.title}
                  </h3>
                </div>
                {index < steps.length - 1 && (
                  <div className="mx-4">
                    <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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