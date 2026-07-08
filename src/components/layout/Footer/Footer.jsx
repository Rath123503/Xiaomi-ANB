import React, { useState } from 'react';
import { MaterialIcon } from '../../common/MaterialIcon';

export const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      alert(`Subscribed successfully with: ${email}`);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#191919] text-[#9E9E9E] pt-20 pb-20 font-sans selection:bg-[#FF6900] selection:text-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          
          {/* COLUMN 1: SUPPORT */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              SUPPORT
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-sm text-[#9E9E9E]">
              <li>
                <a href="#contact-us" className="hover:text-white transition-colors duration-200">
                  Contact us
                </a>
              </li>
              <li>
                <a href="#user-guide" className="hover:text-white transition-colors duration-200">
                  User Guide
                </a>
              </li>
              <li>
                <a href="#warranty" className="hover:text-white transition-colors duration-200">
                  Warranty
                </a>
              </li>
              <li>
                <a href="#international-warranty" className="hover:text-white transition-colors duration-200">
                  International Warranty
                </a>
              </li>
              <li>
                <a href="#eu-declaration" className="hover:text-white transition-colors duration-200">
                  EU Declaration of Conformity
                </a>
              </li>
              <li>
                <a href="#scooter-safety" className="hover:text-white transition-colors duration-200">
                  Scooter Safety Notice
                </a>
              </li>
              <li>
                <a href="#product-recall" className="hover:text-white transition-colors duration-200">
                  Product Recall Notice
                </a>
              </li>
              <li>
                <a href="#android-enterprise" className="hover:text-white transition-colors duration-200">
                  Android Enterprise Recommended
                </a>
              </li>
              <li>
                <a href="#digital-services-act" className="hover:text-white transition-colors duration-200">
                  Digital Services Act
                </a>
              </li>
              <li>
                <a href="#data-act" className="hover:text-white transition-colors duration-200">
                  Data Act
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMN 2: ABOUT US */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              ABOUT US
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-sm text-[#9E9E9E]">
              <li>
                <a href="#xiaomi" className="hover:text-white transition-colors duration-200">
                  Xiaomi
                </a>
              </li>
              <li>
                <a href="#leadership-team" className="hover:text-white transition-colors duration-200">
                  Leadership Team
                </a>
              </li>
              <li>
                <a href="#privacy-policy" className="hover:text-white transition-colors duration-200">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#user-agreement" className="hover:text-white transition-colors duration-200">
                  User Agreement
                </a>
              </li>
              <li>
                <a href="#integrity-compliance" className="hover:text-white transition-colors duration-200">
                  Integrity & Compliance
                </a>
              </li>
              <li>
                <a href="#investor-relations" className="hover:text-white transition-colors duration-200">
                  Investor Relations
                </a>
              </li>
              <li>
                <a href="#esg-sustainability" className="hover:text-white transition-colors duration-200">
                  ESG and Sustainability
                </a>
              </li>
              <li>
                <a href="#trust-center" className="hover:text-white transition-colors duration-200">
                  Trust Center
                </a>
              </li>
              <li>
                <a href="#accessibility" className="hover:text-white transition-colors duration-200">
                  Xiaomi Accessibility
                </a>
              </li>
              <li>
                <a href="#hyperos" className="hover:text-white transition-colors duration-200">
                  Xiaomi HyperOS
                </a>
              </li>
              <li>
                <a href="#accessibility-report" className="hover:text-white transition-colors duration-200">
                  Xiaomi Accessibility Conformance Report
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: XIAOMI PROJECTS */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              XIAOMI PROJECTS
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-sm text-[#9E9E9E]">
              <li>
                <a href="#imagery-awards" className="hover:text-white transition-colors duration-200">
                  Xiaomi Imagery Awards 2026
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: FOLLOW & SUBSCRIBE */}
          <div className="md:col-span-3 space-y-6">
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-white tracking-normal">
                Follow Xiaomi
              </h4>
              
              {/* Social Icons matching exactly the style in the screenshot */}
              <div className="flex items-center gap-3">
                <a
                  href="#facebook"
                  className="w-[38px] h-[38px] rounded-[14px] bg-[#dfdfdf] flex items-center justify-center text-[#191919] hover:bg-[#FF6900] hover:text-white transition-all duration-200 cursor-pointer"
                  aria-label="Facebook"
                >
                  <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current">
                    <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.697V3.129c-.293-.039-1.296-.127-2.462-.127-2.437 0-4.107 1.487-4.107 4.223v2.355H7.32v3.209h2.793v8.196h3.284z"/>
                  </svg>
                </a>
                <a
                  href="#youtube"
                  className="w-[38px] h-[38px] rounded-[14px] bg-[#dfdfdf] flex items-center justify-center text-[#191919] hover:bg-[#FF6900] hover:text-white transition-all duration-200 cursor-pointer"
                  aria-label="YouTube"
                >
                  <svg viewBox="0 0 24 24" className="w-[20px] h-[20px] fill-current" fillRule="evenodd" clipRule="evenodd">
                    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.107C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.388.511a3.002 3.002 0 0 0-2.11 2.107C0 8.021 0 12 0 12s0 3.979.502 5.837a3.001 3.001 0 0 0 2.11 2.107C4.495 20.455 12 20.455 12 20.455s7.505 0 9.388-.511a3.002 3.002 0 0 0 2.11-2.107C24 15.979 24 12 24 12s0-3.979-.502-5.837z M9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a
                  href="#x"
                  className="w-[38px] h-[38px] rounded-[14px] bg-[#dfdfdf] flex items-center justify-center text-[#191919] hover:bg-[#FF6900] hover:text-white transition-all duration-200 cursor-pointer"
                  aria-label="X"
                >
                  <svg viewBox="0 0 24 24" className="w-[16px] h-[16px] fill-current">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a
                  href="#instagram"
                  className="w-[38px] h-[38px] rounded-[14px] bg-[#dfdfdf] flex items-center justify-center text-[#191919] hover:bg-[#FF6900] hover:text-white transition-all duration-200 cursor-pointer"
                  aria-label="Instagram"
                >
                  <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204 0.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                  </svg>
                </a>
                <a
                  href="#community"
                  className="w-[38px] h-[38px] rounded-[14px] bg-[#dfdfdf] flex items-center justify-center text-[#191919] hover:bg-[#FF6900] hover:text-white transition-all duration-200 cursor-pointer"
                  aria-label="Xiaomi Community"
                >
                  <svg viewBox="0 0 24 24" className="w-[20px] h-[20px] fill-current">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8 10.5c-.2-3.5.6-5.5 1.5-5.5s1.7 2 1.5 5.5z M14.5 10.5c-.2-3.5.6-5.5 1.5-5.5s1.7 2 1.5 5.5z M5 15c0-2.8 2.2-5 5-5h4c2.8 0 5 2.2 5 5v1c0 2.8-2.2 5-5 5h-4c-2.8 0-5-2.2-5-5z M8.5 12.5h7v5h-7z M10.2 14v1.8h.6v-1.2c0-.3.2-.5.5-.5s.5.2.5.5v1.2h.6v-1.2c0-.3.2-.5.5-.5s.5.2.5.5v1.2h.6V14h-1c-.2 0-.4.1-.5.3-.1-.2-.3-.3-.5-.3h-1.3z M13.9 13h.6v.6h-.6z M13.9 14v1.8h.6V14h-.6z"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Newsletter subscription form */}
            <form onSubmit={handleSubscribe} className="space-y-4 pt-2">
              <label className="block text-sm font-bold text-white leading-snug">
                Enter your email address to subscribe to our newsletters
              </label>
              
              <div className="relative flex items-center w-full max-w-[320px] md:max-w-md">
                <input
                  type="email"
                  placeholder="Enter email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#131313] text-white placeholder-gray-500 text-sm pl-4 pr-12 py-3.5 rounded-[16px] border border-[#3A3A3A] focus:border-white focus:outline-none transition-all duration-200"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-[#FF6900] transition-colors duration-200 cursor-pointer"
                  aria-label="Subscribe"
                >
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                    <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
