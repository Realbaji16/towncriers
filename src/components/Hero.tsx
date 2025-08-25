import React, { useEffect, useState } from 'react';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import CountUp from 'react-countup';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#ffd504] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-[#e71c76] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-[#ffd504] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            <Sparkles className="w-4 h-4 text-[#ffd504] opacity-30" />
          </div>
        ))}
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Animated main headline */}
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
              Nigeria's most{' '}
              <span className="relative inline-block">
                <span className="gradient-text animate-pulse">versatile</span>
                <div className="absolute -inset-1 bg-gradient-to-r from-[#ffd504] to-[#e71c76] rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
              </span>
              <br />
              experiential agency
            </h1>
          </div>

          {/* Animated subtitle */}
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <p className="text-2xl md:text-3xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto font-light">
              From street corners to center stage
            </p>
          </div>

          {/* Animated CTA Buttons */}
          <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <button className="group relative bg-gradient-to-r from-[#ffd504] to-[#e6c004] text-black px-10 py-5 rounded-full font-bold text-xl hover:shadow-2xl hover:shadow-[#ffd504]/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 flex items-center gap-3 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#e6c004] to-[#ffd504] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative z-10">Start Your Journey</span>
                <ArrowRight size={24} className="relative z-10 group-hover:translate-x-2 transition-transform duration-500" />
              </button>
              
              <button className="group relative border-3 border-[#e71c76] text-[#e71c76] px-10 py-5 rounded-full font-bold text-xl hover:bg-[#e71c76] hover:text-white transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 flex items-center gap-3 overflow-hidden">
                <div className="absolute inset-0 bg-[#e71c76] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <Play size={24} className="relative z-10 group-hover:scale-125 transition-transform duration-500" />
                <span className="relative z-10">Watch Our Story</span>
              </button>
            </div>
          </div>

          {/* Animated Stats */}
          <div className={`transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="group text-center transform hover:scale-110 transition-all duration-500">
                <div className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#ffd504] to-[#e71c76] bg-clip-text text-transparent mb-3 group-hover:animate-bounce">
                  <CountUp
                    end={25}
                    suffix="+"
                    duration={2.5}
                    enableScrollSpy
                    delay={1.5}
                  />
                </div>
                <div className="text-gray-400 text-lg font-medium">Years</div>
              </div>
              <div className="group text-center transform hover:scale-110 transition-all duration-500">
                <div className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#e71c76] to-[#ffd504] bg-clip-text text-transparent mb-3 group-hover:animate-bounce">
                  <CountUp
                    end={200}
                    suffix="+"
                    duration={2.5}
                    enableScrollSpy
                    delay={1.8}
                  />
                </div>
                <div className="text-gray-400 text-lg font-medium">Brands</div>
              </div>
              <div className="group text-center transform hover:scale-110 transition-all duration-500">
                <div className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#ffd504] to-[#e71c76] bg-clip-text text-transparent mb-3 group-hover:animate-bounce">
                  <CountUp
                    end={100}
                    suffix="+"
                    duration={2.5}
                    enableScrollSpy
                    delay={2.1}
                  />
                </div>
                <div className="text-gray-400 text-lg font-medium">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-[#ffd504] rounded-full flex justify-center cursor-pointer hover:border-[#e71c76] transition-colors duration-300">
          <div className="w-2 h-4 bg-[#ffd504] rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;