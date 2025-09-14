import { ImageWithFallback } from './figma/ImageWithFallback';

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Choose Your Template",
      description: "Start with one of our professionally designed templates or create from scratch. Our smart template library adapts to your content.",
      image: "https://images.unsplash.com/photo-1593300806914-e1884ba37524?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwb2ZmaWNlJTIwc2V0dXB8ZW58MXx8fHwxNzU3ODU0MjY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      highlight: "300+ Templates"
    },
    {
      number: "02", 
      title: "Design & Collaborate",
      description: "Use our intuitive drag-and-drop editor to bring your story to life. Invite team members to collaborate in real-time.",
      image: "https://images.unsplash.com/photo-1700561570982-5f845601c505?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHRlYW0lMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc1Nzg0OTQxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      highlight: "Real-time Editing"
    },
    {
      number: "03",
      title: "Share & Present",
      description: "Share your presentation with a simple link or download in multiple formats. Track engagement with detailed analytics.",
      image: "https://images.unsplash.com/photo-1705909773420-8d7af2a343f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzU3ODMxMTQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      highlight: "One-click Sharing"
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl text-slate-900 mb-6">
            How it works
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Create stunning presentations in three simple steps. 
            No design experience needed.
          </p>
        </div>

        <div className="space-y-24">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-teal-600 text-white rounded-xl flex items-center justify-center text-xl transition-all duration-300 hover:scale-110">
                    {step.number}
                  </div>
                  <div className="inline-flex items-center px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm">
                    {step.highlight}
                  </div>
                </div>
                
                <h3 className="text-3xl text-slate-900">
                  {step.title}
                </h3>
                
                <p className="text-lg text-slate-600 leading-relaxed">
                  {step.description}
                </p>

                {/* Progress connector for non-last items */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block mt-12">
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-teal-200 rounded-full"></div>
                      <div className="flex-1 h-px bg-gradient-to-r from-teal-200 to-transparent ml-4"></div>
                    </div>
                  </div>
                )}
              </div>

              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="relative z-10 group">
                  <div className="rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500">
                    <ImageWithFallback 
                      src={step.image}
                      alt={step.title}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -z-10 top-8 left-8 w-full h-full bg-teal-100 rounded-2xl opacity-50"></div>
                </div>

                {/* Floating step indicator */}
                <div className="absolute top-6 right-6 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                  <span className="text-teal-600 text-sm">{step.number}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Connection line for desktop */}
        <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-teal-200 to-transparent opacity-30"></div>
      </div>
    </section>
  );
}