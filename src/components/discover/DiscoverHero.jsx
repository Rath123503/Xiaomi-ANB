import React from "react";
import { MaterialIcon } from "../common/MaterialIcon";

const DiscoverHero = () => {
  return (
    <section className="relative h-[430px] overflow-hidden">

      <img
        src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600"
        alt="Discover Hero"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/35" />

      <div className="absolute inset-0 flex flex-col justify-center px-16">

        <h1 className="text-6xl font-bold text-white mb-4">
          Xiaomi Discover
        </h1>

        <p className="text-white text-xl max-w-xl mb-8">
          Explore stories, innovation, technology and the Xiaomi ecosystem.
        </p>

        <button className="bg-[#ff6900] hover:bg-orange-600 text-white font-semibold py-4 px-10 rounded-full w-fit transition">
          Explore Now
        </button>

      </div>

      {/* Left Arrow */}
      
      <button className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/40 rounded-full flex items-center justify-center">
        <MaterialIcon
          name="chevron_left"
          size={28}
          className="text-white"
        />
      </button>

      {/* Right Arrow */}
      <button className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/40 rounded-full flex items-center justify-center">
        <MaterialIcon
          name="chevron_right"
          size={28}
          className="text-white"
        />
      </button>

      {/* Slider Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        <span className="w-3 h-3 rounded-full bg-white"></span>
        <span className="w-3 h-3 rounded-full bg-white/40"></span>
        <span className="w-3 h-3 rounded-full bg-white/40"></span>
        <span className="w-3 h-3 rounded-full bg-white/40"></span>
      </div>

    </section>
  );
};

export default DiscoverHero;