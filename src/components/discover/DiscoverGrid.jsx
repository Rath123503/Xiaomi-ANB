import React from "react";
import DiscoverData from "../../data/DiscoverData";
import DiscoverCard from "./DiscoverCard";

const DiscoverGrid = () => {
  return (
    <section className="max-w-[1200px] mx-auto py-12">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {DiscoverData.map((item) => (
          <DiscoverCard
            key={item.id}
            item={item}
          />
        ))}
      </div>

      <div className="mt-10">
        <button
          className="
            w-full
            py-4
            bg-[#f5f5f5]
            border
            border-gray-200
            text-gray-700
            font-medium
            hover:bg-gray-200
            transition-all
            duration-300
          "
        >
          See More
        </button>
      </div>

    </section>
  );
};

export default DiscoverGrid;
