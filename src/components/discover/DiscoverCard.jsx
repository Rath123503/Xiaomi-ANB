import React from "react";
import { MaterialIcon } from "../common/MaterialIcon";

const DiscoverCard = ({ item }) => {
  const isVideo = item.type === "video";

  return (
    <div className="bg-white overflow-hidden shadow-sm h-full flex flex-col">
      <div className="relative overflow-hidden h-72">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
        />
        
        {/* Play icon overlay for Video content (matches screenshot: white outline circle with play arrow) */}
        {isVideo && (
          <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full border-2 border-white bg-white/10 backdrop-blur-xs text-white flex items-center justify-center shadow-md">
              <MaterialIcon name="play_arrow" size={32} fill={true} />
            </div>
          </div>
        )}

        {/* Video duration tag */}
        {isVideo && item.duration && (
          <div className="absolute bottom-4 right-4 bg-black/75 text-white text-xs px-2 py-0.5 rounded font-medium">
            {item.duration}
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow min-h-[220px]">
        {/* Title matches the font-semibold and size from screenshot */}
        <h3 className="text-[18px] font-semibold leading-7 text-[#191919] mb-3 hover:text-[#ff6900] transition-colors cursor-pointer">
          {item.title}
        </h3>

        {item.description && (
          <p className="text-gray-600 text-[15px] leading-7 mb-4">
            {item.description}
          </p>
        )}

        <div className="mt-auto flex justify-between items-center pt-8 text-sm text-[#666666] font-medium">
          <span>{item.date || "09 Jul 2026"}</span>

          <div className="flex items-center gap-1.5">
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
