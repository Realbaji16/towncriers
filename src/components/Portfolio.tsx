import React, { useEffect, useRef, useState } from 'react';
import { Star, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/carousel.css';

const Portfolio: React.FC = () => {
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

  const footprintBrands = [
    { name: 'British American Tobacco', category: 'Tobacco', logo: '/BAT.jpg' },
    { name: 'Nigerian Breweries', category: 'Beverages', logo: '/NB.png' },
    { name: 'MTN', category: 'Telecommunications', logo: '/mtn.jpg' },
    { name: 'Coca Cola', category: 'Beverages', logo: '/cocacola.png' },
    { name: 'P&G', category: 'Consumer Goods', logo: '/P&G.png' },
    { name: 'Unilever', category: 'Consumer Goods', logo: '/unilever.jpeg' },
    { name: 'Promasidor', category: 'Food & Beverages', logo: '/promasidor.png' },
    { name: 'Guinness', category: 'Beverages', logo: '/guinness.png' },
    { name: 'Heineken', category: 'Beverages', logo: '/heineken.jpeg' },
    { name: 'Samsung', category: 'Technology', logo: '/samsung.png' },
    { name: 'Airtel', category: 'Telecommunications', logo: '/airtel.png' },
    { name: 'Nestlé', category: 'Food & Beverages', logo: '/nestle.png' }
  ];

  const currentClients = [
    { name: 'MTN Nigeria', status: 'Active', years: '5+', logo: '/mtn.jpg' },
    { name: 'Coca Cola Nigeria', status: 'Active', years: '8+', logo: '/cocacola.png' },
    { name: 'Nigerian Breweries', status: 'Active', years: '10+', logo: '/NB.png' },
    { name: 'P&G Nigeria', status: 'Active', years: '6+', logo: '/P&G.png' },
    { name: 'Samsung Electronics', status: 'Active', years: '4+', logo: '/samsung.png' },
    { name: 'Airtel Nigeria', status: 'Active', years: '3+', logo: '/airtel.png' },
    { name: 'Guinness Nigeria', status: 'Active', years: '7+', logo: '/guinness.png' },
    { name: 'Heineken Nigeria', status: 'Active', years: '5+', logo: '/heineken.jpeg' }
  ];

  return (
    <section ref={sectionRef} id="portfolio" className="py-20 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#ffd504] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#e71c76] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Our Footprints */}
        <div className="mb-24">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-8">
              Our <span className="gradient-text">Footprints</span>
            </h2>
            <p className="text-2xl text-gray-700 max-w-3xl mx-auto font-light">
              25 years of excellence with industry giants
            </p>
            <div className="w-32 h-2 bg-gradient-to-r from-[#ffd504] to-[#e71c76] mx-auto mt-8 rounded-full"></div>
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden">
            <Slider
              dots={true}
              infinite={true}
              speed={500}
              slidesToShow={1.2}
              slidesToScroll={1}
              autoplay={true}
              autoplaySpeed={3000}
              centerMode={true}
              centerPadding="40px"
              arrows={true}
              nextArrow={<div className="slick-next"><ChevronRight className="w-6 h-6 text-[#e71c76]" /></div>}
              prevArrow={<div className="slick-prev"><ChevronLeft className="w-6 h-6 text-[#e71c76]" /></div>}
              className="footprints-carousel"
            >
              {footprintBrands.map((brand, index) => (
                <div key={index} className="px-2">
                  <div className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-[#e71c76]/20 transition-all duration-500 border border-gray-100 cursor-pointer">
                    <div className="text-center">
                      <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 overflow-hidden group-hover:scale-110 transition-transform duration-300">
                        <img
                          src={brand.logo}
                          alt={`${brand.name} logo`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <h4 className="font-bold text-base text-black mb-2 group-hover:text-[#e71c76] transition-colors duration-300 truncate">
                        {brand.name}
                      </h4>
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        {brand.category}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {footprintBrands.map((brand, index) => (
              <div
                key={index}
                className={`group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-[#e71c76]/20 transition-all duration-500 hover:-translate-y-4 hover:scale-105 border border-gray-100 cursor-pointer ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-center">
                  <div className="w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-4 overflow-hidden group-hover:scale-110 transition-transform duration-300">
                    <img
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h4 className="font-bold text-base sm:text-lg text-black mb-2 group-hover:text-[#e71c76] transition-colors duration-300">
                    {brand.name}
                  </h4>
                  <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {brand.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Current Clients */}
        <div className="mb-20">
          <div className={`text-center mb-16 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-5xl md:text-7xl font-bold text-black mb-8">
              Active <span className="text-[#ffd504]">Partnerships</span>
            </h2>
            <p className="text-2xl text-gray-700 max-w-3xl mx-auto font-light">
              Currently trusted by leading brands
            </p>
            <div className="w-32 h-2 bg-gradient-to-r from-[#e71c76] to-[#ffd504] mx-auto mt-8 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentClients.map((client, index) => (
              <div
                key={index}
                className={`group relative bg-gradient-to-br from-black via-gray-800 to-black p-8 rounded-2xl text-white hover:from-[#e71c76] hover:via-[#d1185f] hover:to-[#e71c76] transition-all duration-1000 transform hover:scale-110 hover:-translate-y-4 shadow-2xl cursor-pointer overflow-hidden delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#ffd504] to-[#e71c76] opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                <div className="relative z-10 text-center">
                  <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 p-2 group-hover:scale-110 transition-transform duration-300">
                    <img
                      src={client.logo}
                      alt={`${client.name} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h4 className="font-bold text-xl mb-2">{client.name}</h4>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Star className="w-4 h-4 text-[#ffd504] fill-current" />
                    <span className="text-sm text-gray-300">{client.years} partnership</span>
                  </div>
                  <span className="inline-block bg-green-500 text-white text-xs px-3 py-1 rounded-full">
                    {client.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Animated Stats */}
        <div className={`bg-gradient-to-r from-[#ffd504] via-[#e71c76] to-black rounded-3xl p-16 text-center shadow-2xl transform transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h3 className="text-4xl font-bold text-white mb-12 flex items-center justify-center gap-4">
            <TrendingUp className="w-10 h-10 animate-pulse" />
            Our Impact
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="group transform hover:scale-110 transition-all duration-500">
              <div className="text-6xl md:text-7xl font-bold text-white mb-4 group-hover:animate-bounce">200+</div>
              <div className="text-2xl text-gray-200 font-light">Brands Served</div>
            </div>
            <div className="group transform hover:scale-110 transition-all duration-500">
              <div className="text-6xl md:text-7xl font-bold text-white mb-4 group-hover:animate-bounce">25+</div>
              <div className="text-2xl text-gray-200 font-light">Years Excellence</div>
            </div>
            <div className="group transform hover:scale-110 transition-all duration-500">
              <div className="text-6xl md:text-7xl font-bold text-white mb-4 group-hover:animate-bounce">1000+</div>
              <div className="text-2xl text-gray-200 font-light">Campaigns</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;