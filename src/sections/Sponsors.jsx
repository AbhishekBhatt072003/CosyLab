import React from 'react';

const SponsorsSection = () => {
    const sponsors = [
        { id: 1, name: 'FoodScope', logo: '/src/assets/sponsors/foodscope.png'},
        { id: 2, name: 'Govt of India', logo: '/src/assets/sponsors/gov.png'},
        { id: 3, name: 'IIITD', logo: '/src/assets/sponsors/iiid.jpg' },
        { id: 4, name: 'Infosys', logo: '/src/assets/sponsors/infosys.png'},
        { id: 5, name: 'COFTI', logo: '/src/assets/sponsors/cofti.png' },
    ];

    const duplicatedSponsors = [...sponsors, ...sponsors];

    return (
        <div id='sponsors' className="relative py-16 px-4 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#8e2b3f' }} >
                        Sponsors & Partners
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        We're proud to collaborate with industry leaders and innovative organizations
                        that share our vision for technological advancement.
                    </p>
                </div>

                <div className="relative">
                    {/* <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
                    <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10"></div> */}

                    {/* Scrolling sponsors */}
                    <div className="flex animate-scroll">
                        {duplicatedSponsors.map((sponsor, index) => (
                            <div key={`${sponsor.id}-${index}`} className="flex-shrink-0 mx-8 group cursor-pointer">
                                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 min-w-[200px] h-32 flex flex-col items-center justify-center group-hover:scale-105 border border-gray-100">
                                    <img
                                        src={sponsor.logo}
                                        alt={sponsor.name}
                                        className="w-20 h-20 object-contain mb-2 transition-transform duration-300 group-hover:scale-110"
                                    />
                                    <h3 className="font-semibold text-gray-800 text-center text-sm">
                                        {sponsor.name}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12 animate-fade-in-up animation-delay-600">
                    <a
                        href="www.google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg inline-block text-center"
                    >
                        Become a Partner
                    </a>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-16 left-8 w-4 h-4 bg-yellow-400 rounded-full opacity-20 animate-float"></div>
                <div className="absolute top-32 right-12 w-6 h-6 bg-red-400 rounded-full opacity-20 animate-float animation-delay-1000"></div>
                <div className="absolute bottom-20 left-1/4 w-3 h-3 bg-yellow-500 rounded-full opacity-30 animate-float animation-delay-1500"></div>
                <div className="absolute bottom-32 right-1/3 w-5 h-5 bg-red-300 rounded-full opacity-20 animate-float animation-delay-2000"></div>
            </div>

            <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
        </div>
    );
};

export default SponsorsSection;