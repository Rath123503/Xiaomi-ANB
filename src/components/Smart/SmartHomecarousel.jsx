import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MaterialIcon } from '../common/MaterialIcon';

const SMART_HOME_SLIDES = [
  {
    id: 'sh0',
    model: 'Xiaomi TV S Mini LED 98',
    subtitle: 'Stunning in every scene',
    bullets: [
      'Ultra-smooth motion with native 144Hz refresh rate',
      'Up to 1200 nits peak brightness for stunning clarity'
    ],
    bgText: 'Security',
    bgTextColor: 'text-[#1E4D3A]/8',
    image: 'https://i02.appmifile.com/751_operator_global/27/02/2026/22da7ba9b4d18a2541d4c9fa0e3a6ac5.jpg?thumb=1&w=2560&f=webp&q=85',
    imageAlt: 'Xiaomi TV S Mini LED 98',
    btnText: 'Learn more',
    bgClass: 'bg-white',
    productSearch: 'Xiaomi TV S Mini LED 98'
  },
   {
    id: 'sh1',
    model: 'Mijia Refrigerator Side-by-Side',
    subtitle: 'Massive storage, everyday freshness',
    bullets: [
      '621L total capacity across dual doors',
      'Independent cooling keeps food fresher longer'
    ],
    bgText: 'Fresh',
    bgTextColor: 'text-[#000000]/5',
    image: 'https://i02.appmifile.com/820_operator_global/28/05/2026/99dff1b30dad5a1cbb62aff51d2e3159.jpg?thumb=1&w=2560&f=webp&q=85',
    imageAlt: 'Mijia Refrigerator Side-by-Side',
    btnText: 'Learn more',
    bgClass: 'bg-gradient-to-r from-gray-50 to-orange-50/30',
    productSearch: 'Mijia Refrigerator Side-by-Side',
    badgeLabel: '621L',
    textTheme: 'dark',
    Theme: 'dark',
  },
  {
    id: 'sh2',
    model: 'Mijia Front Load Washer Dryer Pro',
    subtitle: 'All-in-one laundry solution',
    bullets: [
      '36-min deep-clean Smart Wash,12-min ultra-fast Quick Wash',
      'Smart control via the Xiaomi Home app'
    ],
    bgText: 'Air',
    bgTextColor: 'text-sky-600/5',
    image: 'https://i02.appmifile.com/341_operator_global/24/09/2025/2ae67fef51b188ba2a9a2d92e5713517.jpg?thumb=1&w=2560&f=webp&q=85',
    imageAlt: 'Mijia Front Load Washer Dryer Pro',
    btnText: 'Learn more',
    bgClass: 'bg-gradient-to-r from-sky-50/30 to-neutral-50',
    productSearch: 'Mijia Front Load Washer Dryer Pro',
    showBadge: false,
  },
  {
    id: 'sh3',
    model: 'Xiaomi Robot Vacuum H50 Pro',
    subtitle: 'Ultra-long-range coverage with strong suction for powerful cleaning.',
    bullets: [
      'All-in-one base station with automatic mop washing and drying',
      'Dual robotic arms for edge cleaning'
    ],
    bgText: 'Lock',
    bgTextColor: 'text-yellow-600/5',
    image: 'https://i02.appmifile.com/90_operator_global/28/05/2026/218e47568c9bd77f2418c5d320f3244d.jpg?thumb=1&w=2560&f=webp&q=85',
    imageAlt: 'Xiaomi Robot Vacuum H50 Pro',
    btnText: 'Learn more',
    bgClass: 'bg-gradient-to-r from-yellow-50/20 to-neutral-50',
    productSearch: 'Xiaomi Robot Vacuum H50 Pro',
    showBadge: false,
  },
];

export const SmartHomeHeroCarousel = ({ onSelectProduct }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const autoplayTimer = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      autoplayTimer.current = setInterval(() => {
        handleNext();
      }, 5000);
    } else {
      if (autoplayTimer.current) {
        clearInterval(autoplayTimer.current);
      }
    }

    return () => {
      if (autoplayTimer.current) {
        clearInterval(autoplayTimer.current);
      }
    };
  }, [activeIndex, isPlaying]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % SMART_HOME_SLIDES.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + SMART_HOME_SLIDES.length) % SMART_HOME_SLIDES.length);
  };

  const togglePlayPause = (e) => {
    e.stopPropagation();
    setIsPlaying(!isPlaying);
  };

  const activeSlide = SMART_HOME_SLIDES[activeIndex];

  return (
    <div className="relative w-full overflow-hidden bg-white border-b border-gray-100 min-h-[380px] sm:min-h-[460px] md:min-h-[520px] flex items-center select-none group">
      {/* Slide Background and Content Transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={`absolute inset-0 w-full h-full flex items-center overflow-hidden ${activeSlide.bgClass}`}
        >
          {/* Full Card Background Image */}
          <motion.img
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            src={activeSlide.image}
            alt={activeSlide.imageAlt}
            className="absolute inset-0 w-full h-full object-cover object-center md:object-right z-0"
            referrerPolicy="no-referrer"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80';
            }}
          />

          {/* No color overlay — image renders at full, true color */}

          {/* Main Content Overlaid Above Image */}
          <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 sm:px-12 md:px-20 lg:px-32 py-8 md:py-0 flex items-center h-full pointer-events-none">
            <div className="max-w-xl text-left space-y-4 md:space-y-6 pointer-events-auto [filter:drop-shadow(0_2px_10px_rgba(0,0,0,0.45))]">
              {/* Product Title / Branding */}
              <div className="space-y-1">
                <div className="flex items-center flex-wrap gap-2">
                  <span className="text-4xl sm:text-5xl font-sans font-light tracking-tight text-white uppercase">
                    {activeSlide.brand}
                  </span>
                  <span className="text-4xl sm:text-5xl font-sans font-medium tracking-tight text-white">
                    {activeSlide.model}
                  </span>
                  {activeSlide.showBadge && (
                    <span className="ml-2 inline-flex items-center gap-1 rounded-full bg-[#FF6900]/90 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
                      <MaterialIcon name="bolt" size={12} fill />
                      {activeSlide.badgeLabel}
                    </span>
                  )}
                </div>
                <p className="text-lg sm:text-xl text-gray-200 font-medium">
                  {activeSlide.subtitle}
                </p>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-2 text-sm sm:text-base text-gray-100 font-normal">
                {activeSlide.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Action Button */}
              <div className="pt-2">
                {/* CHANGED: hover state is now white (was orange), and the
                    click handler is removed — no -to-cartadd / navigation,
                    same as the static "Learn more" buttons on the
                    TVs & HA and Vacuum Cleaners cards. */}
                <button
                  onClick={(e) => e.stopPropagation()}
                  className="px-8 py-3 bg-white hover:bg-white text-[#191919] text-sm font-semibold rounded-lg transition-all tracking-wide cursor-pointer shadow-lg shadow-black/20 active:scale-95"
                >
                  {activeSlide.btnText}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Nav Controls: Left Button */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-lg bg-white/10 hover:bg-white/25 backdrop-blur-sm text-white flex items-center justify-center transition-all cursor-pointer opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none"
        aria-label="Previous slide"
      >
        <MaterialIcon name="chevron_left" size={24} />
      </button>

      {/* Nav Controls: Right Button */}
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-lg bg-white/10 hover:bg-white/25 backdrop-blur-sm text-white flex items-center justify-center transition-all cursor-pointer opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none"
        aria-label="Next slide"
      >
        <MaterialIcon name="chevron_right" size={24} />
      </button>

      {/* Slide Indicators and Play/Pause Controls */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4">
        {/* Indicators */}
        <div className="flex items-center gap-2">
          {SMART_HOME_SLIDES.map((slide, idx) => {
            const isActive = idx === activeIndex;
            return (
              <div
                key={slide.id}
                onClick={() => setActiveIndex(idx)}
                className="h-1 bg-white/30 rounded-full w-14 sm:w-20 overflow-hidden relative cursor-pointer"
                title={`Go to slide ${idx + 1}`}
              >
                {/* Visual animated fill indicator matching play state */}
                <motion.div
                  initial={{ width: '0%' }}
                  animate={{ width: isActive ? '100%' : '0%' }}
                  transition={
                    isActive && isPlaying
                      ? { duration: 5, ease: 'linear' }
                      : { duration: 0.2 }
                  }
                  className="h-full bg-[#FF6900] rounded-full"
                />
              </div>
            );
          })}
        </div>

        {/* Play/Pause Button */}
        <button
          onClick={togglePlayPause}
          className="w-6 h-6 rounded-full bg-transparent border border-white/40 hover:border-[#F5f5f5] text-white/80 hover:text-[#f5f5f5] flex items-center justify-center transition-colors focus:outline-none"
          aria-label={isPlaying ? 'Pause autoplay' : 'Start autoplay'}
        >
          {isPlaying ? <MaterialIcon name="pause" size={12} fill={true} /> : <MaterialIcon name="play_arrow" size={12} fill={true} />}
        </button>
      </div>
    </div>
  );
};

export default SmartHomeHeroCarousel;