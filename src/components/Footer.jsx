import React, { useState } from 'react';
import { Facebook, Youtube, Instagram, ChevronRight } from 'lucide-react';

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
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                Follow Xiaomi
              </h4>
              
              {/* Social Icons matching exactly the style in the screenshot */}
              <div className="flex items-center gap-4 text-gray">
                <a href="#facebook" className="hover:text-gray-100 transition-colors duration-200" aria-label="Facebook">
                  <Facebook size={20} />
                </a>
                <a href="#youtube" className="hover:text-gray-100 transition-colors duration-200" aria-label="YouTube">
                  <Youtube size={20} />
                </a>
                <a href="#x" className="hover:text-gray-100 transition-colors duration-200" aria-label="X">
                  <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="#instagram" className="hover:text-gray-100 transition-colors duration-200" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
              </div>
            </div>

            {/* Newsletter subscription form */}
            <form onSubmit={handleSubscribe} className="space-y-4 pt-2">
              <label className="block text-sm font-bold text-white leading-snug">
                Enter your email address to subscribe to our newsletters
              </label>
              
              <div className="relative flex items-center max-w-[280px] md:max-w-full">
                <input
                  type="email"
                  placeholder="Enter email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#1F1F1F] text-white placeholder-gray-500 text-xs sm:text-sm pl-4 pr-10 py-3 rounded-md border border-[#333333] focus:border-gray-500 focus:outline-none transition-all"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-white transition-colors cursor-pointer"
                  aria-label="Subscribe"
                >
                  <ChevronRight size={18} />
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
