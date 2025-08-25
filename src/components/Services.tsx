import React, { useState, useEffect, useRef } from 'react';
import { Zap, Video, Calendar, ArrowRight, ExternalLink, Sparkles } from 'lucide-react';

const Services: React.FC = () => {
  const [activeService, setActiveService] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: 'Activations',
      icon: <Zap className="w-10 h-10" />,
      description: 'Immersive experiences that drive deeper brand connections.',
      offerings: [
        'Consumer Promotions',
        'Trade Promotions', 
        'Merchandising',
        'Roadshows',
        'Town-storming'
      ],
      bgColor: 'from-yellow-400 via-yellow-500 to-yellow-600',
      glowColor: 'shadow-yellow-500/50'
    },
    {
      title: 'Content',
      icon: <Video className="w-10 h-10" />,
      description: 'Bespoke content that brings brands to life across platforms.',
      offerings: [
        'Gameshows',
        'Drama',
        'Musical',
        'Sporting platforms',
        'Sponsorship packaging',
        'TV/Radio Development'
      ],
      bgColor: 'from-pink-400 via-pink-500 to-pink-600',
      glowColor: 'shadow-pink-500/50'
    },
    {
      title: 'Events',
      icon: <Calendar className="w-10 h-10" />,
      description: 'From club parties to mega concerts that resonate.',
      offerings: [
        'Event Management',
        'Concerts',
        'Launches',
        'Sports Events',
        'Stage/Set Construction'
      ],
      bgColor: 'from-gray-700 via-gray-800 to-black',
      glowColor: 'shadow-gray-500/50'
    }
  ];

  return (
    <section ref={sectionRef} id="services" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#ffd504] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#e71c76] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-8">
            Our <span className="gradient-text">ACE</span> Offering
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            <span className="bg-gradient-to-r from-[#ffd504] to-[#e71c76] bg-clip-text text-transparent font-bold text-xl sm:text-2xl md:text-3xl">Activations • Content • Events</span>
          </p>
          <div className="w-32 h-2 bg-gradient-to-r from-[#ffd504] to-[#e71c76] mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Service Tabs */}
        <div className={`flex flex-wrap justify-center mb-16 gap-6 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => setActiveService(index)}
              className={`group relative flex items-center gap-4 px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 rounded-2xl font-bold text-base sm:text-lg md:text-xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 ${
                activeService === index
                  ? `bg-gradient-to-r ${service.bgColor} text-white shadow-2xl ${service.glowColor}`
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-gray-600'
              }`}
            >
              <div className={`transition-transform duration-500 ${activeService === index ? 'animate-pulse' : 'group-hover:animate-spin'}`}>
                {service.icon}
              </div>
              {service.title}
              {activeService === index && (
                <Sparkles className="w-6 h-6 animate-pulse" />
              )}
            </button>
          ))}
        </div>

        {/* Active Service Content */}
        <div className="max-w-6xl mx-auto">
          <div className={`bg-gradient-to-r ${services[activeService].bgColor} p-12 md:p-16 rounded-3xl text-white mb-12 shadow-2xl ${services[activeService].glowColor} transform transition-all duration-1000 hover:scale-105`}>
            <div className="flex items-start gap-8 mb-8">
              <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm">
                <div className="animate-pulse">
                  {services[activeService].icon}
                </div>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                  {services[activeService].title}
                </h3>
                <p className="text-base sm:text-xl md:text-2xl leading-relaxed opacity-90 font-light">
                  {services[activeService].description}
                </p>
              </div>
            </div>
          </div>

          {/* Offerings Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services[activeService].offerings.map((offering, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-gray-600 hover:bg-white/20 hover:border-[#e71c76] transition-all duration-500 hover:shadow-2xl hover:shadow-[#e71c76]/20 transform hover:-translate-y-2 hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white text-sm sm:text-base md:text-lg group-hover:text-[#ffd504] transition-colors duration-300">
                    {offering}
                  </span>
                  <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-[#e71c76] group-hover:translate-x-2 group-hover:scale-125 transition-all duration-300" />
                </div>
              </div>
            ))}
          </div>

          {/* Explore More Button */}
          <div className="text-center">
            <button className="group relative inline-flex items-center gap-4 bg-gradient-to-r from-[#e71c76] to-[#d1185f] text-white px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 rounded-2xl font-bold text-base sm:text-lg md:text-xl hover:shadow-2xl hover:shadow-[#e71c76]/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#ffd504] to-[#e6c004] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <ExternalLink size={24} className="relative z-10 group-hover:animate-pulse" />
              <span className="relative z-10">Explore {services[activeService].title}</span>
              <ArrowRight size={24} className="relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;