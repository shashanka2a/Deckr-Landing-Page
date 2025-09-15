import React from 'react';
import { MousePointer, Layout, Share2 } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: MousePointer,
      title: "Drag & Drop",
      description: "Create presentations with simple drag & drop."
    },
    {
      icon: Layout,
      title: "Smart Templates",
      description: "Start fast with beautiful templates."
    },
    {
      icon: Share2,
      title: "Easy Sharing",
      description: "Share your presentations with a simple link."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white scroll-mt-24">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl text-slate-900 mb-4">
            Everything you need
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="group p-6 rounded-xl border border-slate-100 bg-white hover:bg-gradient-to-br hover:from-teal-50/50 hover:to-white hover:border-teal-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer text-center"
              >
                <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600 mx-auto mb-6 group-hover:bg-teal-200 group-hover:scale-110 transition-all duration-300 shadow-sm group-hover:shadow-md">
                  <IconComponent size={24} className="group-hover:text-teal-700 transition-colors duration-300" />
                </div>
                
                <h3 className="text-xl text-slate-900 mb-3 group-hover:text-teal-700 transition-colors duration-300 font-semibold">
                  {feature.title}
                </h3>
                
                <p className="text-slate-600 group-hover:text-slate-700 transition-colors duration-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}