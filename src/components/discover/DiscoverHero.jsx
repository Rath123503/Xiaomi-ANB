import React, { useState } from "react";
import { MaterialIcon } from "../common/MaterialIcon";
import DiscoverHeroData from "../../data/DiscoverHeroData";

const DiscoverHero = ({ heroItem }) => {
  const getHeroIndex = (item) => 
    DiscoverHeroData.findIndex((hero) => hero.id === item?.id);

  const [activeIndex, setActiveIndex] = useState(() => {
    const index = getHeroIndex(heroItem);
    return index >= 0 ? index : 0;
  });

  const currentHero = DiscoverHeroData[activeIndex] || DiscoverHeroData[0];

  const showPrev = () => {
    setActiveIndex((prev) => (prev - 1 + DiscoverHeroData.length) % DiscoverHeroData.length);
  };

  const showNext = () => {
    setActiveIndex((prev) => (prev + 1) % DiscoverHeroData.length);
  };

  return (
    <section className="relative h-[340px] max-w-[1226px] mx-auto overflow-hidden">
      <img
        src={currentHero.image}
        alt={currentHero.title}
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/35" />

      <div className="absolute inset-0 flex flex-col justify-center px-16">
      </div>

      <button
        onClick={showPrev}
        className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center"
        aria-label="Previous slide"
      >
        <MaterialIcon name="chevron_left" size={40} className="text-white" />
      </button>

      <button
        onClick={showNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center"
        aria-label="Next slide"
      >
        <MaterialIcon name="chevron_right" size={40} className="text-white" />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {DiscoverHeroData.map((hero, index) => (
          <button
            key={hero.id}
            onClick={() => setActiveIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === activeIndex ? "bg-white" : "bg-white/40"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default DiscoverHero;
