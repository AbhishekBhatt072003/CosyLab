import React from "react";
import { FaCalendarAlt, FaUser, FaHandshake, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  const navLinks = [
    { name: "ABOUT", href: "#about" },
    { name: "SCHEDULE", href: "#schedule", icon: <FaCalendarAlt /> },
    { name: "SPEAKERS", href: "#speakers", icon: <FaUser /> },
    { name: "SPONSORS", href: "#sponsors", icon: <FaHandshake /> },
    { name: "CONTACT", href: "#contact", icon: <FaEnvelope /> },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white shadow-lg z-[100] border-b border-gray-200">
      <div className="max-w-7xl mx-auto  py-3 flex items-center justify-between">
        
        <div className="flex items-center space-x-2">
          <img src="./assets/logo.svg" alt="IIITD" className="max-h-[30px] w-auto" />
        </div>

        {/* Right: Buttons and Nav Links */}
        <div className="flex items-center space-x-2 sm:space-x-4 lg:space-x-6">
          
          <div className="flex items-center space-x-2">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSf2td7aHRuonOMDebXKx9QBDNgNBaGWDzSIfj22Cpsik4OXLg/closedform"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#8b1c3b] hover:bg-[#6f122e] text-white font-semibold px-3 sm:px-4 py-2 rounded shadow-md transition-colors duration-200 text-sm sm:text-base whitespace-nowrap">
              REGISTER NOW
            </a>
            <a
              href="https://payments.iiitd.edu.in/pg/fees/pg.html"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-3 sm:px-4 py-2 rounded shadow-md transition-colors duration-200 text-sm sm:text-base whitespace-nowrap"
              target="_blank"
              rel="noopener noreferrer">
              PAY NOW
            </a>
          </div>

         
          <ul className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            {navLinks.map((link) => (
              <li key={link.name} className="flex items-center space-x-1 hover:bg-gray-100 rounded px-2 py-2 transition-colors duration-200">
                {link.icon && <span className="text-[#8e2b3f] text-sm">{link.icon}</span>}
                <a
                  href={link.href}
                  className="text-[#8e2b3f] font-medium text-sm xl:text-base hover:text-[#6f122e] transition-colors duration-200">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <button className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors duration-200">
            <svg className="w-6 h-6 text-[#8e2b3f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;  