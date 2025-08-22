import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0">
      {/* Background pattern */}

      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6  lg:px-8 text-center">
        <div className="max-w-4xl  mx-auto">
          {/* Main headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-black mb-6  leading-tight"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Nigeria's most{' '}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="gradient-text"
            >
              versatile
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              ,{' '}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="gradient-text"
            >
              experienced
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.6 }}
            >
              , and{' '}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5, duration: 0.6 }}
              className="gradient-text"
            >
              resourceful
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.7, duration: 0.8 }}
            >
              {' '}experiential marketing agency.
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
             initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.9, duration: 1.0 }}
          className="text-xl md:text-2xl text-black mb-8 leading-relaxed max-w-3xl mx-auto">
            From street corners to center stage, we create experiences that connect consumers to brands
          </motion.p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-[#ffd504] text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#e6c004] transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
              Get Started
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
     
          </div>

          {/* Stats */}
          <div ref={ref} className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-gray-700">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#ffd504] mb-2">
                {inView && (
                  <CountUp
                    end={25}
                    suffix="+"
                    duration={2.5}
                    enableScrollSpy
                  />
                )}
              </div>
              <div className="text-gray-400 text-sm md:text-base">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#e71c76] mb-2">
                {inView && (
                  <CountUp
                    end={200}
                    suffix="+"
                    duration={3.5}
                    enableScrollSpy
                  />
                )}
              </div>
              <div className="text-gray-400 text-sm md:text-base">Brands Partnered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#ffd504] mb-2">
                {inView && (
                  <CountUp
                    end={100}
                    suffix="+"
                    duration={3.5}
                    enableScrollSpy
                  />
                )}
              </div>
              <div className="text-gray-400 text-sm md:text-base">Years Team Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;