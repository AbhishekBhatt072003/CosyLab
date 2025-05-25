import React from "react";
import { FaLinkedin, FaGraduationCap, FaGithub } from "react-icons/fa";
import { GiYinYang } from "react-icons/gi";

const Footer = () => {
    return (
        <footer id="footer" className="py-6 border-t border-gray-200">
            <div className="max-w-6xl mx-auto px-4 flex flex-col items-center text-center space-y-3">

                <div className="flex space-x-6 items-center justify-center text-yellow-500 text-2xl">
                    <a href="www.google.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                        <img
                            src='/src/assets/cosylab.png'
                            className="w-6 h-6 hover:scale-110 transition-transform"
                        />
                    </a>
                    <a href="www.google.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                        <FaLinkedin />
                    </a>
                    <a href="www.google.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                        <FaGraduationCap />
                    </a>
                    <a href="www.google.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                        <FaGithub />
                    </a>
                </div>

                <p className="text-sm text-gray-600">
                    © 2025 Created by <span className="font-semibold">CoSyLab, IIIT Delhi</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
