import React from 'react';

const HeroSection = () => {
    return (
        <header className="relative h-screen bg-gradient-to-br overflow-hidden flex items-center">
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    {/* Left Content */}
                    <div className="flex flex-col justify-center space-y-8 lg:order-1 order-2">

                        {/* Title Section */}
                        <div className="space-y-4">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight animate-fade-in-up">
                                Symposium on
                            </h1>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight animate-fade-in-up animation-delay-300">
                                Computational Gastronomy
                            </h1>
                            <p className="text-2xl text-yellow-500 font-semibold animate-fade-in-up animation-delay-600">
                                #GastroSym2024
                            </p>
                        </div>

                        {/* Learn More Button */}
                        {/* <button className="bg-gradient-to-r from-red-800 to-red-700 hover:from-red-900 hover:to-red-800 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg w-fit animate-fade-in-up animation-delay-900" style={{backgroundColor: '#8e2b3f'}}>
              Learn More
            </button> */}

                        <a
                            href="#about"
                            className="bg-[#8b1c3b] hover:bg-[#6f122e] text-white font-semibold px-4 py-2 rounded shadow-md">
                            Learn More
                        </a>

                        {/* Event Details */}
                        <div className="text-gray-700 text-xl leading-relaxed animate-fade-in-up animation-delay-1200">
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

                    {/* Right Illustration */}
                    <div className="relative flex flex-col items-center justify-center lg:order-2 order-1">
                        {/* Celebration Banner */}
                        <div className="relative mb-8 animate-celebration-entrance">
                            <div className="relative px-8 py-4 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 rounded-lg shadow-2xl animate-shimmer"></div>
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-lg animate-shine"></div>

                                {/* Decorative elements */}
                                <div className="absolute -top-2 -left-2 w-6 h-6 bg-red-500 rounded-full animate-pulse"></div>
                                <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full animate-pulse animation-delay-500"></div>
                                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-yellow-600 rounded-full animate-bounce"></div>
                                <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-yellow-600 rounded-full animate-bounce animation-delay-700"></div>

                                {/* Text content */}
                                <div className="relative z-10 text-center">
                                    <div className="flex items-center justify-center space-x-2 mb-1">
                                        <span className="text-2xl animate-bounce">🎉</span>
                                        <span className="text-red-800 font-bold text-lg tracking-wider uppercase">Celebrating</span>
                                        <span className="text-2xl animate-bounce animation-delay-300">🎊</span>
                                    </div>
                                    <div className="text-red-900 font-extrabold text-2xl md:text-3xl tracking-tight">
                                        1 DECADE
                                    </div>
                                    <div className="text-red-800 font-semibold text-sm md:text-base tracking-widest">
                                        OF COMPUTATIONAL GASTRONOMY
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Chef Image */}
                        <div className="relative mt-4 animate-fade-in-right animation-delay-500">
                            <img
                                src="/src/assets/chef.png"
                                alt="Chef Illustration"
                                className="w-full max-w-md h-auto object-contain"
                            />
                        </div>

                        {/* Floating Elements */}
                        <div className="absolute inset-0">
                            <div className="absolute top-1/2 left-1/10 w-12 h-12 rounded-full flex items-center justify-center text-2xl animate-float" style={{ backgroundColor: 'rgba(142, 43, 63, 0.1)', backdropFilter: 'blur(10px)', border: '1px solid rgba(142, 43, 63, 0.2)' }}>
                                🔬
                            </div>
                            <div className="absolute top-1/2 right-1/5 w-12 h-12 rounded-full flex items-center justify-center text-2xl animate-float animation-delay-1000" style={{ backgroundColor: 'rgba(254, 196, 0, 0.1)', backdropFilter: 'blur(10px)', border: '1px solid rgba(254, 196, 0, 0.2)' }}>
                                🍳
                            </div>
                            <div className="absolute bottom-1/10 left-1/5 w-12 h-12 rounded-full flex items-center justify-center text-2xl animate-float animation-delay-2000" style={{ backgroundColor: 'rgba(142, 43, 63, 0.1)', backdropFilter: 'blur(10px)', border: '1px solid rgba(142, 43, 63, 0.2)' }}>
                                📊
                            </div>
                            <div className="absolute bottom-1/15 right-1/10 w-12 h-12 rounded-full flex items-center justify-center text-2xl animate-float animation-delay-1500" style={{ backgroundColor: 'rgba(254, 196, 0, 0.1)', backdropFilter: 'blur(10px)', border: '1px solid rgba(254, 196, 0, 0.2)' }}>
                                🤖
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
            transform: translateY(-20px); 
          }
        }

        @keyframes celebrationEntrance {
          0% {
            opacity: 0;
            transform: translateY(-50px) scale(0.8);
          }
          50% {
            transform: translateY(10px) scale(1.1);
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

        @keyframes twinkle {
          0%, 100% {
            opacity: 0.3;
            transform: scale(0.8);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
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

        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
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
      `}</style>
        </header>
    );
};

export default HeroSection;