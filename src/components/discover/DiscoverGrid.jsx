import React from "react";
import DiscoverCard from "./DiscoverCard";

const DiscoverGrid = ({ items = [] }) => {
  return (
    <section className="max-w-306.5 mx-auto py-8">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
        {items.map((item) => (
          <DiscoverCard
            key={item.id}
            item={item}
          />
        ))}
      </div>

      <div className="mt-8">
        <button
          className="
            w-full
            h-13
            bg-[#f5f5f5]
            border
            border-transparent
            text-[#666666]
            text-[15px]
            font-medium
            hover:bg-[#ededed]
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
