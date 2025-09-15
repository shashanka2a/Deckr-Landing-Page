import React from 'react';
import { MousePointer, Users, Layout, Share2 } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: MousePointer,
      title: "Drag & Drop Editor",
      description: "Create stunning presentations with simple drag & drop."
    },
    {
      icon: Users,
      title: "Real-time Collaboration", 
      description: "Work together instantly with your team."
    },
    {
      icon: Layout,
      title: "Smart Templates",
      description: "Start fast with beautiful, professional templates."
    },
    {
      icon: Share2,
      title: "Easy Sharing",
      description: "Share your presentations with a simple link."
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-teal-50 to-transparent rounded-full opacity-60"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-tl from-blue-50 to-transparent rounded-full opacity-40"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-50 to-transparent opacity-20"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl text-slate-900 mb-4">
            Essential tools for
            <span className="text-teal-600"> great presentations</span>
          </h2>
          <p className="text-2xl text-slate-700 mb-4 max-w-2xl mx-auto font-medium">
            Built for modern teams who value simplicity
          </p>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Everything you need to create, collaborate, and share your story.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="group p-8 rounded-2xl border border-slate-100 bg-gradient-to-br from-white to-slate-50/50 hover:border-teal-200 hover:shadow-xl hover:bg-gradient-to-br hover:from-teal-50/30 hover:to-white transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl flex items-center justify-center text-teal-600 mb-6 group-hover:from-teal-100 group-hover:to-teal-200 group-hover:scale-110 transition-all duration-300 shadow-sm group-hover:shadow-md">
                  <IconComponent size={24} />
                </div>
                
                <h3 className="text-xl text-slate-900 mb-4 group-hover:text-teal-700 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed">
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