import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CustomPrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 18l-6-6 6-6"/>
      </svg>
    </button>
  );
};

const CustomNextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18l6-6-6-6"/>
      </svg>
    </button>
  );
};

const Portfolio: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);
  const imageExtensions: { [key: string]: string } = {
    'British American Tobacco': 'BAT.jpg',
    'Nigerian Breweries': 'NB.png',
    'Nigerian Breweries Plc': 'NB.png',
    'P&G': 'P&G.png',
    'Unilever': 'unilever.jpeg',
    'Heineken': 'heineken.jpeg',
    'MTN': 'mtn.jpg',
    'Airtel': 'airtel.png',
    'Coca Cola': 'cocacola.png',
    'Promasidor': 'promasidor.png',
    'Guinness': 'guinness.png',
    'Samsung': 'samsung.png',
    'Samsung Electronics': 'samsung.png',
    'Nestle': 'nestle.png'
  };

  const getImagePath = (name: string) => {
    const baseName = name.split(' Nigeria')[0];
    const filename = imageExtensions[baseName];
    return filename ? `/${filename}` : `/${name.toLowerCase().replace(/\s+/g, '')}.png`;
  };

  const footprintLogos = [
    'British American Tobacco',
    'Nigerian Breweries Plc',
    'MTN',
    'Coca Cola',
    'P&G',
    'Unilever',
    'Promasidor',
    'Guinness',
    'Heineken',
    'Samsung',
    'Airtel',
    'Nestle'
  ];

  const currentClients = [
    'MTN Nigeria',
    'Coca Cola Nigeria',
    'Nigerian Breweries',
    'P&G Nigeria',
    'Samsung Electronics',
    'Airtel Nigeria',
    'Guinness Nigeria',
    'Heineken Nigeria'
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Our Footprints */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 font-ubuntu">
              Our <span className="text-[#e71c76]">Footprints</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-light">
              Over 25 years of excellence working with industry giants across Nigeria
            </p>
            <div className="w-24 h-1 bg-[#ffd504] mx-auto mt-6"></div>
          </div>

          {isMobile ? (
            <div className="relative px-8">
              <Slider
                dots={false}
                infinite={true}
                speed={500}
                slidesToShow={1}
                slidesToScroll={1}
                autoplay={true}
                autoplaySpeed={3000}
                prevArrow={<CustomPrevArrow />}
                nextArrow={<CustomNextArrow />}
                className="max-w-xs mx-auto"
              >
                {footprintLogos.map((brand, index) => (
                  <div key={index} className="px-2">
                    <div className="group bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-lg hover:border-[#e71c76] transition-all duration-300 flex items-center justify-center h-48">
                      <div className="text-center">
                        <img 
                          src={getImagePath(brand)} 
                          alt={brand}
                          className="w-16 h-16 mx-auto mb-2 object-contain"
                        />
                        <span className="text-sm font-medium text-gray-700 group-hover:text-black transition-colors duration-300">
                          {brand}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {footprintLogos.map((brand, index) => (
                <div
                  key={index}
                  className="group bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-lg hover:border-[#e71c76] transition-all duration-300 flex items-center justify-center h-48"
                >
                  <div className="text-center">
                    <img 
                      src={getImagePath(brand)} 
                      alt={brand}
                      className="w-24 h-24 mx-auto mb-2 object-contain"
                    />
                    <span className="text-sm font-medium text-gray-700 group-hover:text-black transition-colors duration-300">
                      {brand}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Current Clients */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Our <span className="text-[#ffd504]">Clients</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-light">
              Currently trusted by leading brands across various industries
            </p>
            <div className="w-24 h-1 bg-[#e71c76] mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentClients.map((client, index) => (
              <div
                key={index}
                className="group  p-6 rounded-xl text-black hover:from-[#e71c76] hover:to-[#d1185f] transition-all duration-500 transform hover:scale-105 shadow-lg"
              >
                <div className="text-center">
                  <img 
                    src={getImagePath(client)}
                    alt={client}
                    className="w-24 h-24 mx-auto mb-3 object-contain"
                  />
                  <span className="font-semibold text-lg">{client}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-[#ffd504] to-[#e71c76] rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold text-black mb-8">Our Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-black mb-2">200+</div>
              <div className="text-lg text-gray-800">Brands Served</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-black mb-2">25+</div>
              <div className="text-lg text-gray-800">Years of Excellence</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-black mb-2">1000+</div>
              <div className="text-lg text-gray-800">Successful Campaigns</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;