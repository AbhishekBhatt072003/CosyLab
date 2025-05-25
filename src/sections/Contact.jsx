import React from "react";

const ContactUs = () => {
    return (
        <div id="contact" className="text-center py-16 px-4 relative overflow-hidden">
            <div className="text-center mb-12 animate-fade-in-up">
                <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#8e2b3f' }}>
                    Contact Us
                </h2>

                <div className="flex justify-center mb-8">
                    <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full shadow-lg"></div>
                </div>
            </div>

            <div className="text-lg text-gray-800 leading-relaxed mb-6">
                <p className="font-semibold text-xl">Prof. Ganesh Bagler</p>
                <p>Department of Computational Biology</p>
                <p>Infosys Center for Artificial Intelligence, IIIT Delhi, New Delhi</p>
                <a href="mailto:ccb@iiitd.ac.in" className="text-black font-bold underline block mt-2">
                    ccb@iiitd.ac.in
                </a>
            </div>

            <div className="w-full mb-8">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2129.6069122613494!2d77.2722840356934!3d28.5453475028929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3e45d85d3e3%3A0x691393414902968e!2sIIIT-Delhi%20R%26D%20Building!5e0!3m2!1sen!2sin!4v1664711432785!5m2!1sen!2sin"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="mt-4"
                ></iframe>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4 animate-fade-in-up animation-delay-600">
                <a
                    href="#about"
                    rel="noopener noreferrer"
                    className="bg-transparent border-2 hover:bg-red-50 font-semibold py-2 px-4 rounded-lg text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg inline-block text-center"
                    style={{ borderColor: '#8e2b3f', color: '#8e2b3f' }}
                >
                    Register and Pay Now!
                </a>
            </div>

            <div className="absolute top-16 left-32 w-4 h-4 bg-yellow-400 rounded-full opacity-20 animate-float"></div>
            <div className="absolute top-32 right-12 w-6 h-6 bg-red-400 rounded-full opacity-20 animate-float animation-delay-1000"></div>
            <div className="absolute bottom-20 left-1/5 w-3 h-3 bg-yellow-500 rounded-full opacity-30 animate-float animation-delay-1500"></div>
            <div className="absolute bottom-6 right-1/4 w-5 h-5 bg-red-300 rounded-full opacity-20 animate-float animation-delay-2000"></div>


        </div>
    );
};

export default ContactUs;
