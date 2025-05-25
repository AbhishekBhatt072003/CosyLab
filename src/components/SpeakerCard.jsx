import React from 'react';

const SpeakerCard = ({
    image,
    name,
    title,
    organization,
    animationDelay = 0
}) => {
    return (
        <div
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 group animate-fade-in-up overflow-hidden"
            style={{ animationDelay: `${animationDelay}s` }}
        >
{/* image  */}
            <div className="relative overflow-hidden">
                <div className="aspect-square w-full">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

{/* content  */}
            <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-red-700 transition-colors duration-300">
                    {name}
                </h3>
                <p className="text-gray-600 font-medium mb-1">
                    {title}
                </p>
                <p className="text-gray-500 text-sm">
                    {organization}
                </p>

                <div className="w-12 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto mt-4 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            </div>
        </div>
    );
};

export default SpeakerCard;