import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className=" text-black py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Tagline */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/towncriers.png"
                alt="Towncriers Logo"
                className="h-16 w-auto"
              />
            </div>
            <p className="text-black text-sm">
              Creating experiences that connect consumers to brands since 1995.
            </p>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-black text-sm flex items-center justify-center gap-1">
              © {new Date().getFullYear()} Towncriers. Made with{' '}
              <Heart className="w-4 h-4 text-[#e71c76] fill-current" /> in Nigeria
            </p>
          </div>

          {/* Back to top */}
          <div className="text-right">
            <button
              onClick={scrollToTop}
              className="group inline-flex items-center gap-2 text-black hover:text-white transition-colors duration-300"
            >
              <span className="text-sm">Back to top</span>
              <ArrowUp className="w-4 h-4 group-hover:translate-y-[-2px] transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Bottom border */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-xs text-gray-500">
            Nigeria's Premier Experiential Marketing Agency • Activations • Content • Events
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;