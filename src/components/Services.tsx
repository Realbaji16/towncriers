import React, { useState } from 'react';
import { Zap, Video, Calendar, ArrowRight, ExternalLink } from 'lucide-react';

const Services: React.FC = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      title: 'Activations',
      icon: <Zap className="w-8 h-8" />,
      description: 'We bring brands to life through immersive and memorable experiences that drive deeper connections and create lasting impressions, to win over consumers.',
      offerings: [
        'Consumer Promotions',
        'Trade Promotions',
        'Merchandising',
        'Roadshows',
        'Town-storming'
      ],
      color: '#ffd504',
      bgColor: 'from-yellow-400 to-yellow-600'
    },
    {
      title: 'Content',
      icon: <Video className="w-8 h-8" />,
      description: 'We create bespoke content for brand propagation purposes across different platforms to bring brands to life in more endearing ways.',
      offerings: [
        'Gameshows',
        'Drama',
        'Musical',
        'Sporting platforms',
        'Sponsorship packaging',
        'TV/Radio Programme development'
      ],
      color: '#e71c76',
      bgColor: 'from-pink-500 to-pink-700'
    },
    {
      title: 'Events',
      icon: <Calendar className="w-8 h-8" />,
      description: 'From club parties to mega concerts, trade briefings to product consumer launches, indoor sports to mega outdoor events, we deliver events that resonate.',
      offerings: [
        'Event Marketing and Management',
        'Concerts',
        'Launches',
        'Sports Events',
        'Stage/Set design & Construction'
      ],
      color: '#000000',
      bgColor: 'from-gray-800 to-black'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Our <span className="text-[#e71c76]">Offering</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We deliver cutting edge business solutions across these three categories under the acronym <span className="font-bold text-[#ffd504] bg-black px-2 py-1 rounded">ACE</span> – Activations, Content, Events
          </p>
          <div className="w-24 h-1 bg-[#ffd504] mx-auto mt-6"></div>
        </div>

        {/* Service Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => setActiveService(index)}
              className={`flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                activeService === index
                  ? 'bg-black text-white shadow-xl'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              {service.icon}
              {service.title}
            </button>
          ))}
        </div>

        {/* Active Service Content */}
        <div className="max-w-4xl mx-auto">
          <div className={`bg-gradient-to-r ${services[activeService].bgColor} p-8 md:p-12 rounded-3xl text-white mb-8 shadow-2xl`}>
            <div className="flex items-start gap-6 mb-6">
              <div className="p-3 bg-white/20 rounded-xl">
                {services[activeService].icon}
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  {services[activeService].title}
                </h3>
                <p className="text-lg leading-relaxed opacity-90">
                  {services[activeService].description}
                </p>
              </div>
            </div>
          </div>

          {/* Offerings Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {services[activeService].offerings.map((offering, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover:border-[#e71c76] group"
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-800 group-hover:text-[#e71c76] transition-colors duration-300">
                    {offering}
                  </span>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#e71c76] group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </div>
            ))}
          </div>

          {/* Explore More Button */}
          <div className="text-center">
            <button
              className="group inline-flex items-center gap-2 bg-[#e71c76] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#d1185f] transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <ExternalLink size={20} />
              Explore {services[activeService].title} Projects
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;