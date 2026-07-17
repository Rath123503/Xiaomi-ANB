import React from 'react';
import { MaterialIcon } from '../common/MaterialIcon';

export const XiaomiSupport = () => {
  // Support items configuration
  const supportCategories = [
    {
      id: 'support',
      title: 'Customer Support',
      description: 'Contact us via live-chat, email, and phone call',
      icon: 'headset',
    },
    {
      id: 'warranty',
      title: 'Warranty',
      description: 'Local warranty policy protection is provided',
      icon: 'gpp_good',
    },
    {
      id: 'guides',
      title: 'User Guides',
      description: 'Find and download your Xiaomi product user guide',
      icon: 'layers',
    },
    {
      id: 'faq',
      title: 'FAQ',
      description: 'Search for help about Xiaomi',
      icon: 'question_answer',
    },
  ];

  return (
    <section id="xiaomi-support-section" className="bg-[#F4F4F4] py-16 px-4 sm:px-6 md:px-8 border-t border-gray-100/80">
      <div className="max-w-[1200px] mx-auto">
        {/* Header Title */}
        <div className="text-center mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#191919]">
            Xiaomi Support
          </h2>
        </div>

        {/* Categories Grid - flat style, static, no modal */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {supportCategories.map((category) => (
            <div
              id={`support-card-${category.id}`}
              key={category.id}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-4 text-gray-600">
                <MaterialIcon
                  name={category.icon}
                  size={40}
                  className="text-gray-600"
                />
              </div>

              <h3 className="text-base md:text-lg font-bold text-[#191919] mb-2">
                {category.title}
              </h3>
              <p className="text-xs md:text-sm text-gray-950 leading-relaxed font-medium max-w-[200px]">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default XiaomiSupport;