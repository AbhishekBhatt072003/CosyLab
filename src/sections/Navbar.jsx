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
    <nav className="fixed top-0 w-full bg-white shadow z-50">
      <div className="mx-auto px-4 py-3 flex items-center justify-between"   >
        {/* Left: Logo and Title */}
        <div className="flex items-center space-x-2">
          <img src="./assets/logo.svg" alt="IIITD" className="max-h-[30px]" />
        </div>

        {/* Right: Buttons and Nav Links */}
        <div className="flex items-center space-x-6">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSf2td7aHRuonOMDebXKx9QBDNgNBaGWDzSIfj22Cpsik4OXLg/closedform"
            target="_blank"
            className="bg-[#8b1c3b] hover:bg-[#6f122e] text-white font-semibold px-4 py-2 rounded shadow-md">
            REGISTER NOW
          </a>
          <a
            href="https://payments.iiitd.edu.in/pg/fees/pg.html"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 py-2 rounded shadow-md"
            target="_blank">
            PAY NOW
          </a>

          <ul className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <li key={link.name} className="flex items-center space-x-1 hover:bg-gray-100 rounded px-2 py-2">
                {link.icon && <span className="text-[#8e2b3f]">{link.icon}</span>}
                <a
                  href={link.href}
                  className="text-[#8e2b3f] font-medium">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
