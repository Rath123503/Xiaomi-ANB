import React from 'react';
import { Search, User, Smartphone, Shield, Book, ChevronRight, AlertTriangle, Radio, FileText, CheckCircle, HeadphonesIcon, HeartHandshake, Info } from 'lucide-react';

export const SupportContent = () => {
  return (
    <div className="bg-white pt-10 pb-20 px-4 sm:px-6 md:px-8">
      <div className="max-w-[1000px] mx-auto">
        
        {/* 1. Page title */}
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-center text-[#191919] mb-8">
          Xiaomi Support
        </h1>

        {/* 2. Search bar */}
        <div className="relative max-w-2xl mx-auto mb-12">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-11 pr-4 py-4 bg-gray-100 border-transparent rounded-full text-[#191919] focus:bg-white focus:border-[#FF6900] focus:ring-2 focus:ring-[#FF6900] transition-colors shadow-sm outline-none"
            placeholder="Search for topics"
          />
        </div>

        {/* 3. 4 quick-link icons */}
        <div className="grid grid-cols-4 gap-4 mb-16 max-w-3xl mx-auto">
          <div className="flex flex-col items-center cursor-pointer group">
            <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mb-3 group-hover:bg-gray-200 transition-colors">
              <User className="h-6 w-6 text-gray-700" />
            </div>
            <span className="text-sm font-medium text-center text-gray-800">Account Service</span>
          </div>
          <div className="flex flex-col items-center cursor-pointer group">
            <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mb-3 group-hover:bg-gray-200 transition-colors">
              <Smartphone className="h-6 w-6 text-gray-700" />
            </div>
            <span className="text-sm font-medium text-center text-gray-800">Find My Device</span>
          </div>
          <div className="flex flex-col items-center cursor-pointer group">
            <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mb-3 group-hover:bg-gray-200 transition-colors">
              <Shield className="h-6 w-6 text-gray-700" />
            </div>
            <span className="text-sm font-medium text-center text-gray-800">Warranty Policy</span>
          </div>
          <div className="flex flex-col items-center cursor-pointer group">
            <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mb-3 group-hover:bg-gray-200 transition-colors">
              <Book className="h-6 w-6 text-gray-700" />
            </div>
            <span className="text-sm font-medium text-center text-gray-800">User Guide</span>
          </div>
        </div>

        {/* 4. Recommend cards */}
        <div className="flex flex-col gap-4 mb-12">
          {[
            { title: "Xiaomi Support Facebook", desc: "Follow us for the latest news", img: "https://via.placeholder.com/150" },
            { title: "International Warranty Service", desc: "For Xiaomi smartphones", img: "https://via.placeholder.com/150" },
            { title: "Accessibility", desc: "Making technology accessible to everyone", img: "https://via.placeholder.com/150" },
            { title: "Xiaomi Self-Repair Service", desc: "Repair your device easily", img: "https://via.placeholder.com/150" },
            { title: "Environmental Social Governance", desc: "Our commitment to sustainability", img: "https://via.placeholder.com/150" }
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between bg-gray-50 rounded-2xl p-6 hover:shadow-md transition-shadow cursor-pointer border border-gray-100">
              <div className="flex flex-col items-start gap-2">
                <span className="px-2 py-1 text-xs font-semibold text-green-600 bg-white border border-green-600 rounded-md">
                  Recommend
                </span>
                <h3 className="text-lg font-bold text-[#191919]">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
              <img src={item.img} alt={item.title} className="w-20 h-20 object-cover rounded-xl bg-gray-200" />
            </div>
          ))}
        </div>

        {/* 5. Product Recall Notice */}
        <div className="flex items-center justify-between bg-gray-100 rounded-2xl p-6 mb-6 cursor-pointer hover:bg-gray-200 transition-colors">
          <div className="flex items-center gap-3">
            <AlertTriangle className="h-6 w-6 text-orange-500" />
            <span className="text-lg font-bold text-[#191919]">Product Recall Notice</span>
          </div>
          <ChevronRight className="h-5 w-5 text-gray-500" />
        </div>

        {/* 6. 4-column grid of link cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          <div className="bg-gray-50 p-6 rounded-2xl flex flex-col justify-between cursor-pointer hover:shadow-md transition-shadow border border-gray-100 min-h-[140px]">
            <div>
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-[#191919]">Scooter Safety Notice</h4>
                <ChevronRight className="h-4 w-4 text-gray-400" />
              </div>
            </div>
            <div className="flex justify-end mt-4">
               <AlertTriangle className="h-8 w-8 text-gray-300" />
            </div>
          </div>
          <div className="bg-gray-50 p-6 rounded-2xl flex flex-col justify-between cursor-pointer hover:shadow-md transition-shadow border border-gray-100 min-h-[140px]">
            <div>
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-[#191919]">RF Exposure</h4>
                <ChevronRight className="h-4 w-4 text-gray-400" />
              </div>
            </div>
            <div className="flex justify-end mt-4">
               <Radio className="h-8 w-8 text-gray-300" />
            </div>
          </div>
          <div className="bg-gray-50 p-6 rounded-2xl flex flex-col justify-between cursor-pointer hover:shadow-md transition-shadow border border-gray-100 min-h-[140px]">
            <div>
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-[#191919]">Find DOC</h4>
                <ChevronRight className="h-4 w-4 text-gray-400" />
              </div>
            </div>
            <div className="flex justify-end mt-4">
               <FileText className="h-8 w-8 text-gray-300" />
            </div>
          </div>
          <div className="bg-gray-50 p-6 rounded-2xl flex flex-col justify-between cursor-pointer hover:shadow-md transition-shadow border border-gray-100 min-h-[140px]">
            <div>
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-[#191919]">Check AERS</h4>
                <ChevronRight className="h-4 w-4 text-gray-400" />
              </div>
            </div>
            <div className="flex justify-end mt-4">
               <CheckCircle className="h-8 w-8 text-gray-300" />
            </div>
          </div>
        </div>

        {/* 7. High frequency FAQ */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-[#191919]">High frequency FAQ</h2>
            <a href="#" className="text-sm font-semibold text-gray-500 hover:text-[#FF6900] flex items-center gap-1">
              Learn more <ChevronRight className="h-4 w-4" />
            </a>
          </div>
          <ul className="flex flex-col gap-4">
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
                <a href="#" className="text-[#191919] hover:text-[#FF6900] transition-colors leading-relaxed">
                  {faq}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* 8. Contact us banner */}
        <div className="flex items-center justify-between bg-gray-100 rounded-2xl p-6 mb-6 cursor-pointer hover:bg-gray-200 transition-colors">
          <div className="flex items-center gap-3">
            <HeadphonesIcon className="h-6 w-6 text-gray-700" />
            <span className="text-lg font-bold text-[#191919]">Contact us</span>
          </div>
          <ChevronRight className="h-5 w-5 text-gray-500" />
        </div>

        {/* 9. Terms and About Xiaomi row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-center justify-between bg-gray-100 rounded-2xl p-6 cursor-pointer hover:bg-gray-200 transition-colors">
            <div className="flex items-center gap-3">
              <HeartHandshake className="h-6 w-6 text-gray-700" />
              <span className="font-bold text-[#191919]">Terms and policy</span>
            </div>
            <ChevronRight className="h-5 w-5 text-gray-500" />
          </div>
          <div className="flex items-center justify-between bg-gray-100 rounded-2xl p-6 cursor-pointer hover:bg-gray-200 transition-colors">
            <div className="flex items-center gap-3">
              <Info className="h-6 w-6 text-gray-700" />
              <span className="font-bold text-[#191919]">About Xiaomi</span>
            </div>
            <ChevronRight className="h-5 w-5 text-gray-500" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default SupportContent;
