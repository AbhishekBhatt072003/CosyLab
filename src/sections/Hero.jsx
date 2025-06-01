import React from 'react';
import chefImage from '../assets/chef.png';

const HeroSection = () => {
  return (
    <header className="relative min-h-screen bg-gradient-to-br overflow-hidden flex items-center py-8 pt-20 lg:pt-24">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          <div className="flex flex-col justify-center space-y-6 lg:space-y-8 lg:order-1 order-2">

            {/* Title Section */}
            <div className="space-y-2 lg:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight animate-fade-in-up">
                Symposium on
              </h1>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight animate-fade-in-up animation-delay-300">
                Computational Gastronomy
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-yellow-500 font-semibold animate-fade-in-up animation-delay-600">
                #GastroSym2024
              </p>
            </div>


            <a
              href="#about"
              className="bg-[#8b1c3b] hover:bg-[#6f122e] text-white font-semibold px-6 py-3 rounded shadow-md w-fit transition-colors duration-300 animate-fade-in-up animation-delay-900">
              Learn More
            </a>


            <div className="text-gray-700 text-lg lg:text-xl leading-relaxed animate-fade-in-up animation-delay-1200">
              <p><span className="font-semibold">Date:</span> 14th December 2024</p>
              <p><span className="font-semibold">Location:</span> IIIT Delhi</p>
            </div>

            {/* Countdown Section */}
            <div className="animate-fade-in-up animation-delay-1500">
              <div className="text-gray-600 text-sm uppercase tracking-widest mb-4">
                Event Countdown
              </div>

              {/* Flip Clock Container - Leave empty for plugin */}
              <div id="flip-countdown" className="flip-clock-container">
                {/* Flip clock plugin will be initialized here */}
              </div>
            </div>
          </div>


          <div className="relative flex flex-col items-center justify-center lg:order-2 order-1">

            <div className="relative mb-4 lg:mb-8 animate-celebration-entrance w-full max-w-sm">
              <div className="relative px-4 sm:px-6 lg:px-8 py-3 lg:py-4 transform -rotate-1 hover:rotate-0 transition-transform duration-500 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 rounded-lg shadow-xl lg:shadow-2xl animate-shimmer"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-lg animate-shine"></div>


                <div className="absolute -top-1 -left-1 lg:-top-2 lg:-left-2 w-4 h-4 lg:w-6 lg:h-6 bg-red-500 rounded-full animate-pulse"></div>
                <div className="absolute -top-1 -right-1 lg:-top-2 lg:-right-2 w-4 h-4 lg:w-6 lg:h-6 bg-red-500 rounded-full animate-pulse animation-delay-500"></div>
                <div className="absolute -bottom-1 -left-1 lg:-bottom-2 lg:-left-2 w-3 h-3 lg:w-4 lg:h-4 bg-yellow-600 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-1 -right-1 lg:-bottom-2 lg:-right-2 w-3 h-3 lg:w-4 lg:h-4 bg-yellow-600 rounded-full animate-bounce animation-delay-700"></div>

                <div className="relative z-10 text-center">
                  <div className="flex items-center justify-center space-x-1 lg:space-x-2 mb-1">
                    <span className="text-lg lg:text-2xl animate-bounce">🎉</span>
                    <span className="text-red-800 font-bold text-sm lg:text-lg tracking-wider uppercase">Celebrating</span>
                    <span className="text-lg lg:text-2xl animate-bounce animation-delay-300">🎊</span>
                  </div>
                  <div className="text-red-900 font-extrabold text-xl lg:text-2xl xl:text-3xl tracking-tight">
                    1 DECADE
                  </div>
                  <div className="text-red-800 font-semibold text-xs lg:text-sm xl:text-base tracking-widest">
                    OF COMPUTATIONAL GASTRONOMY
                  </div>
                </div>
              </div>
            </div>


            {/* chef image  */}
            <div className="relative animate-fade-in-right animation-delay-500 w-full max-w-xs lg:max-w-md">
              <img
                src= {chefImage}
                alt="Chef Illustration"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Floating Elements - Hidden on small screens, visible on larger screens */}
            <div className="absolute inset-0 hidden lg:block">
              <div className="absolute top-1/2 left-1/10 w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center text-xl lg:text-2xl animate-float" style={{ backgroundColor: 'rgba(142, 43, 63, 0.1)', backdropFilter: 'blur(10px)', border: '1px solid rgba(142, 43, 63, 0.2)' }}>
                🔬
              </div>
              <div className="absolute top-1/2 right-1/5 w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center text-xl lg:text-2xl animate-float animation-delay-1000" style={{ backgroundColor: 'rgba(254, 196, 0, 0.1)', backdropFilter: 'blur(10px)', border: '1px solid rgba(254, 196, 0, 0.2)' }}>
                🍳
              </div>
              <div className="absolute bottom-1/10 left-1/5 w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center text-xl lg:text-2xl animate-float animation-delay-2000" style={{ backgroundColor: 'rgba(142, 43, 63, 0.1)', backdropFilter: 'blur(10px)', border: '1px solid rgba(142, 43, 63, 0.2)' }}>
                📊
              </div>
              <div className="absolute bottom-1/15 right-1/10 w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center text-xl lg:text-2xl animate-float animation-delay-1500" style={{ backgroundColor: 'rgba(254, 196, 0, 0.1)', backdropFilter: 'blur(10px)', border: '1px solid rgba(254, 196, 0, 0.2)' }}>
                🤖
              </div>
            </div>

            {/* Mobile floating elements - simplified and positioned better */}
            <div className="absolute inset-0 lg:hidden">
              <div className="absolute top-4 left-4 w-8 h-8 rounded-full flex items-center justify-center text-lg animate-float" style={{ backgroundColor: 'rgba(142, 43, 63, 0.1)', backdropFilter: 'blur(10px)', border: '1px solid rgba(142, 43, 63, 0.2)' }}>
                🔬
              </div>
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-lg animate-float animation-delay-1000" style={{ backgroundColor: 'rgba(254, 196, 0, 0.1)', backdropFilter: 'blur(10px)', border: '1px solid rgba(254, 196, 0, 0.2)' }}>
                🍳
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% { 
            transform: translateY(0px); 
          }
          50% { 
            transform: translateY(-15px); 
          }
        }

        @keyframes celebrationEntrance {
          0% {
            opacity: 0;
            transform: translateY(-50px) scale(0.8);
          }
          50% {
            transform: translateY(10px) scale(1.05);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 1s ease forwards;
          opacity: 0;
        }

        .animate-fade-in-right {
          animation: fadeInRight 1.2s ease forwards;
          opacity: 0;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-celebration-entrance {
          animation: celebrationEntrance 1.5s ease-out forwards;
          opacity: 0;
        }

        .animate-shimmer {
          background-size: 200% 100%;
          animation: shimmer 2s linear infinite;
        }

        .animate-shine {
          animation: shine 3s ease-in-out infinite;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
        }

        .animation-delay-500 {
          animation-delay: 0.5s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        .animation-delay-700 {
          animation-delay: 0.7s;
        }

        .animation-delay-900 {
          animation-delay: 0.9s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-1200 {
          animation-delay: 1.2s;
        }

        .animation-delay-1500 {
          animation-delay: 1.5s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        /* Custom responsive utilities */
        @media (max-width: 640px) {
          .animate-float {
            animation: float 2s ease-in-out infinite;
          }
        }
      `}</style>
    </header>
  );
};

export default HeroSection;