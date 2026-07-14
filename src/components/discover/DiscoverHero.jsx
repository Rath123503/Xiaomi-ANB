import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MaterialIcon } from "../common/MaterialIcon";
import HeroData from "../../data/HeroData";

const DiscoverHero = () => {
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
    setActiveIndex((prev) => (prev + 1) % HeroData.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prev) => (prev - 1 + HeroData.length) % HeroData.length
    );
  };

  const activeSlide = HeroData[activeIndex];

  return (
    <section className="relative w-full aspect-[2260/624] h-auto overflow-hidden rounded-3xl bg-neutral-900 shadow-md mb-8 select-none group">
      {/* Slide Background Transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 w-full h-full flex items-center overflow-hidden"
        >
          {/* Slide Background Image */}
          <motion.img
            initial={{ scale: 1.01, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            src={activeSlide.image}
            alt={activeSlide.title}
            className="absolute inset-0 w-full h-full object-cover object-center z-0"
          />
        </motion.div>
      </AnimatePresence>

      {/* Nav Controls: Left Arrow */}
      <button 
        onClick={handlePrev}
        className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-12 sm:h-12 bg-white/20 hover:bg-white/30 text-white rounded-full flex items-center justify-center transition cursor-pointer"
        aria-label="Previous slide"
      >
        <MaterialIcon name="chevron_left" size={24} className="text-white" />
      </button>

      {/* Nav Controls: Right Arrow */}
      <button 
        onClick={handleNext}
        className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-12 sm:h-12 bg-white/20 hover:bg-white/30 text-white rounded-full flex items-center justify-center transition cursor-pointer"
        aria-label="Next slide"
      >
        <MaterialIcon name="chevron_right" size={24} className="text-white" />
      </button>

      {/* Slider Dots */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2 sm:gap-3">
        {HeroData.map((_, idx) => {
          const isActive = idx === activeIndex;
          return (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all cursor-pointer ${
                isActive ? "bg-white scale-110" : "bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          );
        })}
      </div>
    </section>
  );
};

export default DiscoverHero;