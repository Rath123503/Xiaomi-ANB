import React from "react";
import { MaterialIcon } from "../common/MaterialIcon";

const DiscoverCard = ({ item }) => {
  return (
    <div className="bg-white overflow-hidden shadow-sm h-full">
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-72 object-cover"
      />

      <div className="p-6 flex flex-col min-h-[220px]">
        <p className="text-[#ff6900] text-sm font-semibold mb-2">
          {item.category}
        </p>

        <h3 className="text-[18px] font-semibold leading-7 text-[#191919] mb-3">
          {item.title}
        </h3>

        <p className="text-gray-600 text-[15px] leading-7">
          {item.description}
        </p>

        <div className="mt-auto flex justify-between items-center pt-8 text-sm text-[#666666] font-medium">
          <span>{item.date || "09 Jul 2026"}</span>

          <div className="flex items-center gap-1">
            <MaterialIcon
              name="visibility"
              size={16}
              className="text-gray-400"
            />
            <span>{item.views || "2,563"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverCard;
