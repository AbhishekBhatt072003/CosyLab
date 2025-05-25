import React from 'react';

const AboutSection = () => {
    const features = [
        {
            icon: 'https://img.icons8.com/color/96/leaf.png',
            title: "Interdisciplinary Approach",
            description: "Bringing the chefs, data scientists, researchers, and industry professionals together to explore the intersection of food and technology."
        },
        {
            icon: 'https://img.icons8.com/color/96/combo-chart--v1.png',
            title: "Data-Driven Insights",
            description: "Learn how big data, machine learning, and AI are providing new perspectives on food pairing, nutrition analysis, and consumer preferences."
        },
        {
            icon: 'https://img.icons8.com/color/96/earth-planet.png',
            title: "Sustainability & Health",
            description: "Discover how Computational Gastronomy can lead to more sustainable food practices and better health outcomes for communities worldwide."
        },
        {
            icon: 'https://img.icons8.com/color/96/cutlery.png',
            title: "Culinary Innovation",
            description: "Unlock the potential of creative recipe generation, unique flavor combinations, and novel food experiences through computational methods."
        }
    ];

    return (
        <section id='about' className="relative py-20 px-4 sm:px-6 lg:px-8 ">
            <div className="max-w-6xl mx-auto">

                {/* Header Section */}
                <div className="text-center mb-10 animate-fade-in-up">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#8e2b3f' }}>
                        Unraveling the Digital Future of Food
                    </h2>

                    {/* Golden divider line */}
                    <div className="flex justify-center">
                        <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full shadow-lg"></div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="text-center mb-10 space-y-6 animate-fade-in-up animation-delay-300">
                    <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                        The Symposium bridges the worlds of culinary arts and artificial intelligence.
                    </p>
                    <p className="text-lg md:text-xl font-semibold text-gray-800 max-w-4xl mx-auto leading-relaxed">
                        Computational Gastronomy is an emerging interdisciplinary data science of food, recipes, flavors, nutrition, health, and sustainability.
                    </p>
                    <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                        Join us to discover how the culinary landscape is being transformed.
                    </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up animation-delay-600">
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSf2td7aHRuonOMDebXKx9QBDNgNBaGWDzSIfj22Cpsik4OXLg/closedform"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-transparent border-2 hover:bg-red-50 font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg inline-block text-center"
                        style={{ borderColor: '#8e2b3f', color: '#8e2b3f' }}
                    >
                        REGISTER NOW!
                    </a>
                    <a
                        href="https://payments.iiitd.edu.in/pg/fees/pg.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg inline-block text-center"
                    >
                        PAY NOW!
                    </a>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="text-center group animate-fade-in-up" style={{ animationDelay: `${0.9 + index * 0.2}s` }}>

                            <div className="mb-6 flex justify-center">
                                <img src={feature.icon} alt={feature.title} className="w-14 h-14 " />
                            </div>

                            <h3 className="text-xl font-bold mb-4 text-yellow-500 group-hover:text-yellow-600 transition-colors duration-300">
                                {feature.title}
                            </h3>


                            <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-10 left-10 w-4 h-4 bg-yellow-400 rounded-full opacity-20 animate-float"></div>
                <div className="absolute top-32 right-16 w-6 h-6 bg-red-400 rounded-full opacity-20 animate-float animation-delay-1000"></div>
                <div className="absolute bottom-20 left-1/4 w-3 h-3 bg-yellow-500 rounded-full opacity-30 animate-float animation-delay-1500"></div>
                <div className="absolute bottom-32 right-1/3 w-5 h-5 bg-red-300 rounded-full opacity-20 animate-float animation-delay-2000"></div>
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

        @keyframes float {
          0%, 100% { 
            transform: translateY(0px); 
          }
          50% { 
            transform: translateY(-15px); 
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 1s ease forwards;
          opacity: 0;
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        .animation-delay-900 {
          animation-delay: 0.9s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-1100 {
          animation-delay: 1.1s;
        }

        .animation-delay-1300 {
          animation-delay: 1.3s;
        }

        .animation-delay-1500 {
          animation-delay: 1.5s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
        </section>
    );
};

export default AboutSection;