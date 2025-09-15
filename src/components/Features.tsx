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
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl text-slate-900 mb-4">
            Everything you need
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="text-center"
              >
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center text-teal-600 mx-auto mb-4">
                  <IconComponent size={20} />
                </div>
                
                <h3 className="text-lg text-slate-900 mb-2">
                  {feature.title}
                </h3>
                
                <p className="text-slate-600 text-sm">
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