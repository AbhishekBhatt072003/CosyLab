import React from 'react';
import SpeakerCard from '../components/SpeakerCard';

const SpeakersSection = () => {
    const speakers = [
        { id: 1, image: "/src/assets/human.jpg",  name: "AI Chef Ruchira", title: "Chief Creative Chef", organization: "AI Restaurant", },
        { id: 2, image: "/src/assets/human.jpg",  name: "Chef Manjit Singh Gill", title: "President", organization: "Indian Federation of Culinary Associations" },
        { id: 3, image: "/src/assets/garimaArora.jpg",  name: "Chef Garima Arora", title: "Michelin Star Awarded Chef", organization: "Restaurant GAA, Bangkok" },
        { id: 4, image: "/src/assets/human.jpg",  name: "Krish Ashok", title: "Food Critic", organization: "Author of 'Masala Lab'" },
        { id: 5, image: "/src/assets/human.jpg",  name: "Krish Ashok", title: "Food Critic", organization: "Author of 'Masala Lab'" }
    ];

    return (
        <section id='speakers' className="relative py-16 px-4 sm:px-6 lg:px-8 ">
            <div className="max-w-7xl mx-auto">

                {/* Header Section */}
                <div className="text-center mb-16 animate-fade-in-up">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#8e2b3f' }}>
                        Our Speakers
                    </h2>

                    <div className="flex justify-center mb-8">
                        <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full shadow-lg"></div>
                    </div>
                </div>

                {/* Speakers Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
                    {speakers.map((speaker, index) => (
                        <SpeakerCard
                            key={speaker.id}
                            image={speaker.image}
                            name={speaker.name}
                            title={speaker.title}
                            organization={speaker.organization}
                            animationDelay={0.2 + index * 0.1}
                        />
                    ))}
                </div>

                {/* CTA button  */}
                <div className="text-center animate-fade-in-up animation-delay-800">
                    <p className="text-lg text-gray-600 mb-6">
                        Join these industry leaders and innovators at the symposium
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4 animate-fade-in-up animation-delay-600">
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

                {/* Decorative Elements */}
                <div className="absolute top-16 left-8 w-4 h-4 bg-yellow-400 rounded-full opacity-20 animate-float"></div>
                <div className="absolute top-32 right-12 w-6 h-6 bg-red-400 rounded-full opacity-20 animate-float animation-delay-1000"></div>
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

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-500 {
          animation-delay: 0.5s;
        }

        .animation-delay-800 {
          animation-delay: 0.8s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
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

export default SpeakersSection;