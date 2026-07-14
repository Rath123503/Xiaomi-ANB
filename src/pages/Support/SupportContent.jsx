import React from 'react';
import { Search, User, Smartphone, Shield, Book, ChevronRight, AlertTriangle, Radio, FileText, CheckCircle, HeadphonesIcon, HeartHandshake, Info, Wrench, Layers } from 'lucide-react';
import facebookBanner from './images/facebook_banner.png';
import warrantyBanner from './images/warranty_banner.png';
import accessibilityBanner from './images/accessibility_banner.png';
import repairBanner from './images/repair_banner.png';
import esgBanner from './images/esg_banner.png';
import productRecall from './images/product_recall.png';
import scooterIcon from './images/scooter_icon.png';
import rfExposureIcon from './images/rf_exposure_icon.png';
import docIcon from './images/doc_icon.png';
import aersIcon from './images/aers_icon.png';
import contactUs from './images/contact_us.png';
import termsPolicy from './images/terms_policy.png';
import aboutXiaomi from './images/about_xiaomi.png';

export const SupportContent = () => {
  return (
    <div className="bg-[#f5f5f5] pt-10 pb-20 px-4 sm:px-6 md:px-8">
      <div className="max-w-[1000px] mx-auto">
        
        {/* 1. Page title */}
        <h1 className="text-3xl sm:text-4xl font-semibold text-center text-[#191919] mb-10">
          Xiaomi Support
        </h1>

        {/* 2. Search bar */}
        <div className="relative max-w-2xl mx-auto mb-12">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-11 pr-4 py-3.5 bg-white border border-gray-200 rounded-[10px] text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF6900] focus:border-transparent transition-all shadow-sm"
            placeholder="Search for topics"
          />
        </div>

        {/* 3. 4 quick-link icons */}
        <div className="grid grid-cols-4 gap-4 mb-16 max-w-3xl mx-auto">
          <div className="flex flex-col items-center cursor-pointer group">
            <div className="mb-3 text-gray-700 group-hover:text-[#FF6900] transition-colors">
              <User className="h-8 w-8" strokeWidth={1.5} />
            </div>
            <span className="text-sm font-medium text-center text-gray-800">Account Service</span>
          </div>
          <div className="flex flex-col items-center cursor-pointer group">
            <div className="mb-3 text-gray-700 group-hover:text-[#FF6900] transition-colors">
              <Smartphone className="h-8 w-8" strokeWidth={1.5} />
            </div>
            <span className="text-sm font-medium text-center text-gray-800">Find My Device</span>
          </div>
          <div className="flex flex-col items-center cursor-pointer group">
            <div className="mb-3 text-gray-700 group-hover:text-[#FF6900] transition-colors">
              <Wrench className="h-8 w-8" strokeWidth={1.5} />
            </div>
            <span className="text-sm font-medium text-center text-gray-800">Warranty Policy</span>
          </div>
          <div className="flex flex-col items-center cursor-pointer group">
            <div className="mb-3 text-gray-700 group-hover:text-[#FF6900] transition-colors">
              <Layers className="h-8 w-8" strokeWidth={1.5} />
            </div>
            <span className="text-sm font-medium text-center text-gray-800">User Guide</span>
          </div>
        </div>

        {/* 4. Recommend cards */}
        <div className="flex flex-col gap-4 mb-12">
          {[
            { 
              title: "Xiaomi Support Facebook", 
              desc: "We at Xiaomi Support Global Official listen to your voice.", 
              img: facebookBanner 
            },
            { 
              title: "International Warranty Service", 
              desc: "Enjoy the warranty service at all available countries/regions", 
              img: warrantyBanner 
            },
            { 
              title: "Accessibility", 
              desc: "Bridging the text divide to achieve information equality", 
              img: accessibilityBanner 
            },
            { 
              title: "Xiaomi Self-Repair Service", 
              desc: "Repair your Xiaomi device yourself", 
              img: repairBanner 
            },
            { 
              title: "Environmental Social Governance", 
              desc: "Xiaomi is committed to drive a more sustainable economy", 
              img: esgBanner 
            }
          ].map((item, i) => (
            <div key={i} className="flex bg-white rounded-xl overflow-hidden hover:shadow-md transition-shadow cursor-pointer border border-gray-100 h-[130px] sm:h-[140px]">
              <div className="flex flex-col items-start justify-center px-6 sm:px-8 py-4 flex-1">
                <span className="px-2 py-0.5 mb-2 text-[11px] font-semibold text-[#00A36C] border border-[#00A36C] rounded-md">
                  Recommend
                </span>
                <h3 className="text-lg font-bold text-[#191919] mb-1">{item.title}</h3>
                <p className="text-[#757575] text-[13px] sm:text-sm line-clamp-2">{item.desc}</p>
              </div>
              <div className="w-[45%] sm:w-[50%] shrink-0 overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover object-center scale-[1.15]" />
              </div>
            </div>
          ))}
        </div>

        {/* 5. Product Recall Notice */}
        <div className="flex items-center justify-between bg-white border border-gray-100 rounded-xl p-8 mb-4 cursor-pointer hover:shadow-md transition-shadow overflow-hidden">
          <div className="flex items-center gap-2 relative z-10">
            <h2 className="text-2xl font-bold text-[#191919]">Product Recall Notice</h2>
            <ChevronRight className="h-6 w-6 text-[#191919]" strokeWidth={3} />
          </div>
          <img src={productRecall} alt="Product Recall Notice" className="h-32 w-32 object-contain scale-[1.5] origin-right" />
        </div>

        {/* 6. 4-column grid of link cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          <div className="bg-white p-8 rounded-xl flex flex-col items-center justify-between text-center cursor-pointer hover:shadow-md transition-shadow border border-gray-100 min-h-[220px] overflow-hidden">
            <div className="flex flex-col items-center gap-2 relative z-10">
              <div className="flex items-center justify-center gap-1 flex-wrap">
                <h4 className="font-bold text-[#191919] text-lg">Scooter Safety Notice</h4>
                <ChevronRight className="h-4 w-4 text-[#191919]" strokeWidth={3} />
              </div>
              <p className="text-sm text-[#757575]">Mi M365 Electric Scooter - Safety Notice</p>
            </div>
            <div className="mt-6 flex justify-center w-full">
               <img src={scooterIcon} alt="Scooter icon" className="h-24 w-24 object-contain scale-[1.5] origin-bottom" />
            </div>
          </div>
          <div className="bg-white p-8 rounded-xl flex flex-col items-center justify-between text-center cursor-pointer hover:shadow-md transition-shadow border border-gray-100 min-h-[220px] overflow-hidden">
            <div className="flex flex-col items-center gap-2 relative z-10">
              <div className="flex items-center justify-center gap-1 flex-wrap">
                <h4 className="font-bold text-[#191919] text-lg">RF Exposure</h4>
                <ChevronRight className="h-4 w-4 text-[#191919]" strokeWidth={3} />
              </div>
              <p className="text-sm text-[#757575]">For both Xiaomi and redmi phone</p>
            </div>
            <div className="mt-6 flex justify-center w-full">
               <img src={rfExposureIcon} alt="RF Exposure icon" className="h-24 w-24 object-contain scale-[1.5] origin-bottom" />
            </div>
          </div>
          <div className="bg-white p-8 rounded-xl flex flex-col items-center justify-between text-center cursor-pointer hover:shadow-md transition-shadow border border-gray-100 min-h-[220px] overflow-hidden">
            <div className="flex flex-col items-center gap-2 relative z-10">
              <div className="flex items-center justify-center gap-1 flex-wrap">
                <h4 className="font-bold text-[#191919] text-lg">Find DOC</h4>
                <ChevronRight className="h-4 w-4 text-[#191919]" strokeWidth={3} />
              </div>
              <p className="text-sm text-[#757575]">Declaration of conformity</p>
            </div>
            <div className="mt-6 flex justify-center w-full">
               <img src={docIcon} alt="Find DOC icon" className="h-24 w-24 object-contain scale-[1.5] origin-bottom" />
            </div>
          </div>
          <div className="bg-white p-8 rounded-xl flex flex-col items-center justify-between text-center cursor-pointer hover:shadow-md transition-shadow border border-gray-100 min-h-[220px] overflow-hidden">
            <div className="flex flex-col items-center gap-2 relative z-10">
              <div className="flex items-center justify-center gap-1 flex-wrap">
                <h4 className="font-bold text-[#191919] text-lg">Check AERS</h4>
                <ChevronRight className="h-4 w-4 text-[#191919]" strokeWidth={3} />
              </div>
              <p className="text-sm text-[#757575]">Android Enterprise Recommended Smartphones</p>
            </div>
            <div className="mt-6 flex justify-center w-full">
               <img src={aersIcon} alt="Check AERS icon" className="h-24 w-24 object-contain scale-[1.5] origin-bottom" />
            </div>
          </div>
        </div>

        {/* 7. High frequency FAQ */}
        <div className="mb-16 bg-white p-10 rounded-xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-[#191919]">High frequency FAQ</h2>
            <a href="#" className="text-sm font-semibold text-[#FF6900] hover:underline flex items-center gap-1">
              Learn more {'>'}
            </a>
          </div>
          <ul className="flex flex-col gap-1.5">
            {[
              "What to do if the Google Messages App on the Xiaomi phone keeps popping up a blue window?",
              "What to do if system notifications keep appearing at the bottom of the Xiaomi phone's screen?",
              "Why does the Xiaomi smartphone fail to enable Dark mode?",
              "REDMI A7 FAQ",
              "Why doesn't my phone's lock screen display notifications?",
              "POCO C81 Pro FAQ",
              "Xiaomi 15T FAQ"
            ].map((faq, i) => (
              <li key={i}>
                <a href="#" className="block text-[#757575] hover:text-[#191919] transition-colors text-[15px] py-0.5">
                  {faq}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* 8. Contact us banner */}
        <div className="flex items-center justify-between bg-white border border-gray-100 rounded-xl p-8 mb-4 cursor-pointer hover:shadow-md transition-shadow overflow-hidden">
          <div className="flex items-center gap-2 relative z-10">
            <h2 className="text-xl font-bold text-[#191919]">Contact us</h2>
            <ChevronRight className="h-5 w-5 text-[#191919]" strokeWidth={3} />
          </div>
          <img src={contactUs} alt="Contact us" className="h-24 w-24 object-contain scale-[1.5] origin-right" />
        </div>

        {/* 9. Terms and About Xiaomi row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-center justify-between bg-white border border-gray-100 rounded-xl p-8 cursor-pointer hover:shadow-md transition-shadow overflow-hidden">
            <div className="flex items-center gap-2 relative z-10">
              <h2 className="text-xl font-bold text-[#191919]">Terms and policy</h2>
              <ChevronRight className="h-5 w-5 text-[#191919]" strokeWidth={3} />
            </div>
            <img src={termsPolicy} alt="Terms and policy" className="h-24 w-24 object-contain scale-[1.5] origin-right" />
          </div>
          <div className="flex items-center justify-between bg-white border border-gray-100 rounded-xl p-8 cursor-pointer hover:shadow-md transition-shadow overflow-hidden">
            <div className="flex items-center gap-2 relative z-10">
              <h2 className="text-xl font-bold text-[#191919]">About Xiaomi</h2>
              <ChevronRight className="h-5 w-5 text-[#191919]" strokeWidth={3} />
            </div>
            <img src={aboutXiaomi} alt="About Xiaomi" className="h-24 w-24 object-contain scale-[1.5] origin-right" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default SupportContent;
