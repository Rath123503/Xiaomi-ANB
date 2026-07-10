import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MaterialIcon } from "../common/MaterialIcon";

const CAROUSEL_SLIDES = [
  {
    id: "s0",
    brand: "xiaomi",
    model: "17T Pro",
    subtitle: "The Telephoto Master",
    bullets: ["Leica 5x Telephoto and Leica Live Moment", "7000mAh battery"],
    image:
      "https://i02.appmifile.com/944_operator_global/28/05/2026/ddd9db973472bac320a9a99ef16c4750.jpg?thumb=1&w=5120&f=webp&q=85",
    imageAlt: "Xiaomi 17T Pro",
    btnText: "Learn more",
    productSearch: "Xiaomi 17T Pro",
    showLeica: true,
    align: "left",
  },
  {
    id: "s1",
    brand: "xiaomi",
    model: "17 Ultra",
    // subtitle: "Essential Leica Imagery",
    bullets: [
      "Essential Leica Imagery",
      "Leica 200MP 75-100mm telephoto",
      "Leica 1-inch ultra dynamic camera",
    ],
    bgText: "Style",
    bgTextColor: "text-orange-600/5",
    image:
      "https://i02.appmifile.com/50_operator_global/27/05/2026/31f0caa82653d435452fe98b25ac30f6.jpg?thumb=1&w=5120&f=webp&q=85",
    imageAlt: "Xiaomi 17 Ultra",
    btnText: "Learn more",
    bgClass: "bg-gradient-to-r from-gray-50 to-orange-50/30",
    productSearch: "Xiaomi 17 Ultra",
    showLeica: false,
    align: "left",
  },
  {
    id: "s2",
    brand: "XIAOMI",
    model: "TV S Mini LED 98 2026",
    // subtitle: 'HyperPower Evolved',
    bullets: [
      "Stunning in every scence",
      "880 zones QD-Mini LED deep contrast and vivid detial",
    ],
    bgText: "XIAOMI",
    bgTextColor: "text-blue-600/5",
    image:
      "https://i02.appmifile.com/658_operator_global/28/05/2026/cd712a553e0d11c15b874d0bc7ad36f2.jpg?thumb=1&w=5120&f=webp&q=85",
    imageAlt: "XIAOMI TV S Mini LED 98 2026",
    btnText: "Learn more",
    bgClass: "bg-gradient-to-r from-yellow-50/20 to-neutral-50",
    productSearch: "XIAOMI TV S Mini LED 98 2026",
    showLeica: false,
    imageStyle: "filter brightness-105 contrast-125 hue-rotate-[290deg]",
  },
  {
    id: "s3",
    brand: "XIAOMI Watch S5",
    model: "Your style, on time",
    // subtitle: 'HyperPower Evolved',
    bullets: [
      '1,48" AMOLED display with 21-days battery life',
      "your smart all-day companion",
    ],
    bgText: "XIAOMI Watch S5",
    bgTextColor: "text-blue-600/5",
    image:
      "https://i02.appmifile.com/658_operator_global/28/05/2026/cd712a553e0d11c15b874d0bc7ad36f2.jpg?thumb=1&w=5120&f=webp&q=85",
    imageAlt: "XIAOMI Watch S5",
    btnText: "Learn more",
    bgClass: "bg-gradient-to-r from-yellow-50/20 to-neutral-50",
    productSearch: "POCO F6 Pro 5G",
    showLeica: false,
    imageStyle: "filter brightness-105 contrast-125 hue-rotate-[290deg]",
  },
];

const LeicaLogo = () => (
  <div className="inline-flex items-center gap-1.5 select-none ml-2 align-middle">
    <div className="text-right flex flex-col justify-center">
      <span className="text-[7px] text-gray-400 font-bold uppercase tracking-widest leading-[7px]">
        CO-ENGINEERED WITH
      </span>
    </div>
    <div
      className="w-5 h-5 rounded-full bg-[#D11119] flex items-center justify-center relative overflow-hidden shadow-sm"
      title="Leica"
    >
      <span className="text-[10px] text-white font-serif italic font-bold tracking-tight">
        Leica
      </span>
    </div>
  </div>
);

export const HeroCarousel = ({ onSelectProduct }) => {
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
    setActiveIndex((prev) => (prev + 1) % CAROUSEL_SLIDES.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prev) => (prev - 1 + CAROUSEL_SLIDES.length) % CAROUSEL_SLIDES.length,
    );
  };

  const togglePlayPause = (e) => {
    e.stopPropagation();
    setIsPlaying(!isPlaying);
  };

  const activeSlide = CAROUSEL_SLIDES[activeIndex];

  return (
    <div className="relative w-full overflow-hidden bg-white border-b border-gray-100 min-h-[420px] sm:min-h-[480px] md:min-h-[520px] flex items-center select-none group">
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
            transition={{ duration: 0.8, ease: "easeOut" }}
            src={activeSlide.image}
            alt={activeSlide.imageAlt}
            className={`absolute inset-0 w-full h-full object-cover object-center md:object-right z-0 ${activeSlide.imageStyle || ""}`}
            referrerPolicy="no-referrer"
            onError={(e) => {
              e.target.src =
                "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=1200&q=80";
            }}
          />

          {/* Soft premium visual overlay for text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/75 via-white/25 md:via-white/10 to-transparent z-10 pointer-events-none" />

          {/* Main Content Overlaid Above Image */}
          <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 sm:px-12 md:px-20 lg:px-32 flex items-center h-full pb-24 md:pb-0 pointer-events-none">
            <div className="max-w-xl text-left space-y-4 md:space-y-6 pointer-events-auto">
              {/* Product Title / Branding */}
              <div className="space-y-1">
                <div className="flex items-center flex-wrap gap-2">
                  <span
                    className={`text-4xl sm:text-5xl font-sans tracking-tight text-slate-800 ${activeSlide.brand === "xiaomi" ? "font-light" : "font-bold"}`}
                  >
                    {activeSlide.brand}
                  </span>
                  <span className="text-4xl sm:text-5xl font-sans font-[medium] tracking-tight text-slate-800">
                    {activeSlide.model}
                  </span>
                  {activeSlide.showLeica && <LeicaLogo />}
                </div>
                <p className="text-lg sm:text-xl text-slate-800 font-medium">
                  {activeSlide.subtitle}
                </p>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-2 text-sm sm:text-base text-gray-700 font-normal">
                {activeSlide.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Action Button */}
              <div className="pt-3 md:pt-2">
                <button className="px-8 h-9 flex items-center justify-center bg-[#191919] hover:bg-black text-white text-sm font-semibold rounded-lg transition-all tracking-wide shadow-sm shadow-black/10">
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
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-lg bg-black/5 hover:bg-black/10 text-[#191919] flex items-center justify-center transition-all cursor-pointer opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none"
        aria-label="Previous slide"
      >
        <MaterialIcon name="chevron_left" size={24} />
      </button>

      {/* Nav Controls: Right Button */}
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-lg bg-black/5 hover:bg-black/10 text-[#191919] flex items-center justify-center transition-all cursor-pointer opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none"
        aria-label="Next slide"
      >
        <MaterialIcon name="chevron_right" size={24} />
      </button>

      {/* Slide Indicators and Play/Pause Controls */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4">
        {/* Indicators */}
        <div className="flex items-center gap-2">
          {CAROUSEL_SLIDES.map((slide, idx) => {
            const isActive = idx === activeIndex;
            return (
              <div
                key={slide.id}
                onClick={() => setActiveIndex(idx)}
                className="h-1 bg-gray-200 rounded-full w-14 sm:w-20 overflow-hidden relative cursor-pointer"
                title={`Go to slide ${idx + 1}`}
              >
                {/* Visual animated fill indicator matching play state */}
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: isActive ? "100%" : "0%" }}
                  transition={
                    isActive && isPlaying
                      ? { duration: 5, ease: "linear" }
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
          className="w-6 h-6 rounded-full bg-transparent border border-gray-300 hover:border-[#FF6900] text-gray-400 hover:text-[#FF6900] flex items-center justify-center transition-colors focus:outline-none"
          aria-label={isPlaying ? "Pause autoplay" : "Start autoplay"}
        >
          {isPlaying ? (
            <MaterialIcon name="pause" size={12} fill={true} />
          ) : (
            <MaterialIcon name="play_arrow" size={12} fill={true} />
          )}
        </button>
      </div>
    </div>
  );
};
