import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle, Sparkles } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section ref={sectionRef} id="contact" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#ffd504] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#e71c76] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#ffd504] to-[#e71c76] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
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
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">No one covers Nigeria</span> like we do
          </h2>
          <h3 className="text-5xl md:text-7xl font-bold mb-8">
            Let's <span className="text-[#e71c76]">Connect</span>
          </h3>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            Ready to make your brand shine?
          </p>
          <div className="w-32 h-2 bg-gradient-to-r from-[#ffd504] to-[#e71c76] mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="bg-white/10 backdrop-blur-lg p-10 rounded-3xl border border-gray-700 shadow-2xl hover:shadow-3xl transition-all duration-500">
              <h4 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Sparkles className="w-8 h-8 text-[#ffd504] animate-pulse" />
                Get In Touch
              </h4>
              
              {isSubmitted ? (
                <div className="text-center py-12 transform animate-bounce">
                  <CheckCircle className="w-20 h-20 text-[#ffd504] mx-auto mb-6 animate-pulse" />
                  <h5 className="text-2xl font-bold text-[#ffd504] mb-4">Thank You!</h5>
                  <p className="text-xl text-gray-300">We'll be in touch soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="group">
                      <label htmlFor="name" className="block text-lg font-bold text-gray-300 mb-3">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-6 py-4 bg-white/5 border-2 border-gray-600 rounded-xl text-white text-lg focus:border-[#ffd504] focus:ring-2 focus:ring-[#ffd504]/50 transition-all duration-300 group-hover:border-gray-500"
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="group">
                      <label htmlFor="email" className="block text-lg font-bold text-gray-300 mb-3">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-6 py-4 bg-white/5 border-2 border-gray-600 rounded-xl text-white text-lg focus:border-[#ffd504] focus:ring-2 focus:ring-[#ffd504]/50 transition-all duration-300 group-hover:border-gray-500"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="group">
                    <label htmlFor="company" className="block text-lg font-bold text-gray-300 mb-3">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 bg-white/5 border-2 border-gray-600 rounded-xl text-white text-lg focus:border-[#ffd504] focus:ring-2 focus:ring-[#ffd504]/50 transition-all duration-300 group-hover:border-gray-500"
                      placeholder="Your company name"
                    />
                  </div>
                  
                  <div className="group">
                    <label htmlFor="message" className="block text-lg font-bold text-gray-300 mb-3">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 bg-white/5 border-2 border-gray-600 rounded-xl text-white text-lg focus:border-[#ffd504] focus:ring-2 focus:ring-[#ffd504]/50 transition-all duration-300 resize-none group-hover:border-gray-500"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="group relative w-full bg-gradient-to-r from-[#e71c76] to-[#d1185f] text-white px-10 py-6 rounded-xl font-bold text-xl hover:shadow-2xl hover:shadow-[#e71c76]/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 flex items-center justify-center gap-3 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#ffd504] to-[#e6c004] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <Send size={24} className="relative z-10 group-hover:animate-pulse" />
                    <span className="relative z-10">Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div className={`space-y-10 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div>
              <h4 className="text-3xl font-bold mb-10 flex items-center gap-3">
                <Sparkles className="w-8 h-8 text-[#e71c76] animate-pulse" />
                Let's Connect
              </h4>
              
              <div className="space-y-8">
                <div className="group flex items-start gap-6 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-gray-700 hover:bg-white/10 hover:border-[#ffd504] transition-all duration-500 transform hover:-translate-y-2">
                  <div className="p-4 bg-gradient-to-r from-[#ffd504] to-[#e6c004] rounded-2xl group-hover:animate-pulse">
                    <MapPin className="w-8 h-8 text-black" />
                  </div>
                  <div>
                    <h5 className="font-bold text-2xl mb-3 text-[#ffd504]">Location</h5>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      Lagos, Nigeria<br />
                      <span className="text-sm text-gray-400">(Covering all of Nigeria)</span>
                    </p>
                  </div>
                </div>

                <div className="group flex items-start gap-6 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-gray-700 hover:bg-white/10 hover:border-[#e71c76] transition-all duration-500 transform hover:-translate-y-2">
                  <div className="p-4 bg-gradient-to-r from-[#e71c76] to-[#d1185f] rounded-2xl group-hover:animate-pulse">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h5 className="font-bold text-2xl mb-3 text-[#e71c76]">Phone</h5>
                    <p className="text-gray-300 text-lg">+234 (0) 1 234 5678</p>
                  </div>
                </div>

                <div className="group flex items-start gap-6 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-gray-700 hover:bg-white/10 hover:border-[#ffd504] transition-all duration-500 transform hover:-translate-y-2">
                  <div className="p-4 bg-gradient-to-r from-[#ffd504] to-[#e6c004] rounded-2xl group-hover:animate-pulse">
                    <Mail className="w-8 h-8 text-black" />
                  </div>
                  <div>
                    <h5 className="font-bold text-2xl mb-3 text-[#ffd504]">Email</h5>
                    <p className="text-gray-300 text-lg">hello@towncriers.com.ng</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;