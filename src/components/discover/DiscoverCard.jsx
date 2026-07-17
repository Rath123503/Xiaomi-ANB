import React from "react";
import { MaterialIcon } from "../common/MaterialIcon";

const DiscoverCard = ({ item }) => {
  return (
    <div className="bg-white overflow-hidden shadow-sm hover:shadow-md transition h-[560px] flex flex-col">

      {/* Image */}
      <div className="relative">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-[287px] object-cover"
        />

        {/* Play Button (Videos only) */}
        {item.isVideo && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full border-2 border-white bg-black/20 flex items-center justify-center">
              <MaterialIcon
                name="play_arrow"
                size={50}
                className="text-white"
              />
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-[24px] font-normal leading-8 text-[#191919]">
          {item.title}
        </h3>

        {/* Hide description for videos */}
        {!item.isVideo && item.description && (
          <p className="mt-auto text-[#191919] text-[16px] leading-6 font-medium">
            {item.description}
          </p>
        )}

        <div className="mt-auto flex justify-between items-center pt-5 text-[14px] text-[#191919]">

          <span>{item.date || "09/07/2026"}</span>

          <div className="flex items-center gap-1">
            <MaterialIcon
              name="visibility"
              size={13}
              className="text-gray-600"
            />
            <span>{item.views || "2,563"}</span>
          </div>

        </div>

      </div>

    </div>
  );
};

export default DiscoverCard;
