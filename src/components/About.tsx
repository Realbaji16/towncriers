import React, { useEffect, useRef, useState } from 'react';
import { Target, Eye, Heart, Users, Zap, TrendingUp, Sparkles } from 'lucide-react';

const About: React.FC = () => {
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

  const values = [
    { icon: <Zap className="w-6 h-6" />, text: 'Innovative', color: 'from-yellow-400 to-yellow-600' },
    { icon: <Target className="w-6 h-6" />, text: 'Resilient', color: 'from-pink-400 to-pink-600' },
    { icon: <Eye className="w-6 h-6" />, text: 'Sophisticated', color: 'from-purple-400 to-purple-600' },
    { icon: <Heart className="w-6 h-6" />, text: 'Youthful', color: 'from-red-400 to-red-600' },
    { icon: <Users className="w-6 h-6" />, text: 'Daring', color: 'from-blue-400 to-blue-600' },
  ];

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#ffd504] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#e71c76] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-5xl md:text-7xl font-bold text-black mb-8">
            About <span className="gradient-text animate-pulse">Towncriers</span>
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-[#ffd504] to-[#e71c76] mx-auto rounded-full"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Story Card */}
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="bg-white p-10 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-[#ffd504] to-[#e71c76] rounded-2xl flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-black">Since 1995</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Pioneering Nigeria's experiential marketing with <span className="font-bold text-[#e71c76]">200+ brand partnerships</span> including industry giants.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#ffd504] rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-xl">25+</span>
                </div>
                <span className="text-gray-600 font-medium">Years of Excellence</span>
              </div>
            </div>
          </div>

          {/* Belief Card */}
          <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="relative bg-gradient-to-br from-[#ffd504] via-[#e71c76] to-black p-10 rounded-3xl text-white overflow-hidden group hover:scale-105 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-black via-[#e71c76] to-[#ffd504] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Sparkles className="w-8 h-8" />
                  THE WOW EFFECT
                </h3>
                <p className="text-xl leading-relaxed font-light">
                  The extra touch that makes experiences unforgettable and bonds consumers to brands.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Vision, Mission, Values Grid */}
        <div className={`grid md:grid-cols-3 gap-8 mb-16 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Vision */}
          <div className="group text-center p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 border border-gray-100">
            <div className="w-20 h-20 bg-gradient-to-r from-[#ffd504] to-[#e6c004] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-spin">
              <Eye className="w-10 h-10 text-black" />
            </div>
            <h3 className="text-2xl font-bold text-black mb-4">Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              Africa's best experiential agency creating profitable solutions.
            </p>
          </div>

          {/* Mission */}
          <div className="group text-center p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 border border-gray-100">
            <div className="w-20 h-20 bg-gradient-to-r from-[#e71c76] to-[#d1185f] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse">
              <Target className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-black mb-4">Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              Deliver unforgettable experiences that capture consumers' hearts.
            </p>
          </div>

          {/* Team */}
          <div className="group text-center p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 border border-gray-100">
            <div className="w-20 h-20 bg-gradient-to-r from-black to-gray-800 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-bounce">
              <Users className="w-10 h-10 text-[#ffd504]" />
            </div>
            <h3 className="text-2xl font-bold text-black mb-4">Team</h3>
            <p className="text-gray-600 leading-relaxed">
              100+ years combined experience from Nigeria's best agencies.
            </p>
          </div>
        </div>

        {/* Animated Values */}
        <div className={`text-center transform transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h3 className="text-3xl font-bold text-black mb-10">Our Values</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className={`group flex items-center gap-3 bg-gradient-to-r ${value.color} text-white px-8 py-4 rounded-full hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 cursor-pointer`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="group-hover:animate-spin transition-transform duration-500">
                  {value.icon}
                </div>
                <span className="font-bold text-lg">{value.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;