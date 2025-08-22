import React from 'react';
import { Target, Eye, Heart, Users, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useRef } from 'react';

const About: React.FC = () => {
  const values = [
    { icon: <Zap className="w-6 h-6" />, text: 'Innovative' },
    { icon: <Target className="w-6 h-6" />, text: 'Resilient' },
    { icon: <Eye className="w-6 h-6" />, text: 'Sophisticated' },
    { icon: <Heart className="w-6 h-6" />, text: 'Youthful' },
    { icon: <Users className="w-6 h-6" />, text: 'Daring' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            About <span className="text-[#e71c76]">Towncriers</span>
          </h2>
          <div className="w-24 h-1 bg-[#ffd504] mx-auto"></div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h3 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-2xl font-bold text-black mb-6"
            >
              Our Story
            </motion.h3>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Towncriers origin dates back to <span className="font-semibold text-[#e71c76]">1995</span> when Funmi Onabolu and Kayode Olagesin played pioneering roles in Nigeria's experiential marketing industry with proprietary platforms for Benson & Hedges and Star Lager that disrupted the status quo.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                Towncriers took full flight in <span className="font-semibold text-[#e71c76]">2000</span>, becoming the go-to BTL agency for bold, culture-shifting experiences. Over the years, we have partnered with over <span className="font-semibold text-[#ffd504] bg-black px-1 rounded">200 brands</span> working with industry giants like British American Tobacco, Nigerian Breweries Plc, MTN, Coca Cola, P&G, Unilever, Promasidor, to mention a few.
              </motion.p>
            </div>
          </motion.div>

          {/* Belief */}
          <div className="bg-gradient-to-br from-[#ffd504] to-[#e71c76] p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-6">Our Belief</h3>
            <div className="space-y-4">
              <p className="font-semibold text-xl">THE WOW EFFECT</p>
              <p className="leading-relaxed">
                The extra touch that makes an experience unforgettable and bonds the consumer to the brand. It does not necessarily mean more expensive, but more thoughtful & creative.
              </p>
            </div>
          </div>
        </div>

        {/* Philosophy */}
        <div className="bg-gray-50 p-8 rounded-2xl mb-16">
          <p className="text-xl text-gray-800 leading-relaxed text-center italic">
            "Consumers are not statistics. They are simple folks at heart and can be communicated with in simple ways. Growth feeds growth. This consciously promotes a growth ecosystem where the growth of our clients, our business, our people, and suppliers is intertwined."
          </p>
        </div>

        {/* Vision, Mission, Values Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Vision */}
          <div className="text-center p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-[#ffd504] rounded-full flex items-center justify-center mx-auto mb-4">
              <Eye className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-xl font-bold text-black mb-4">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To be one of the best experiential agencies in Africa, creating ideas for profitable solutions.
            </p>
          </div>

          {/* Mission */}
          <div className="text-center p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-[#e71c76] rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-black mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To always deliver unforgettable experiences that capture the consumers' heart.
            </p>
          </div>

          {/* Team */}
          <div className="text-center p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-[#ffd504]" />
            </div>
            <h3 className="text-xl font-bold text-black mb-4">Our Team</h3>
            <p className="text-gray-700 leading-relaxed">
              Our team has over 100 years of experience, cutting across marketing communications garnered from the best agencies in Nigeria.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-black mb-8">Our Values</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {values.map((value, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full hover:bg-[#e71c76] transition-colors duration-300"
              >
                {value.icon}
                <span className="font-medium">{value.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;