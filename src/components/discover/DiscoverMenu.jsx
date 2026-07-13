import React from "react";

const DiscoverMenu = () => {
  return (
    <div className="flex justify-center py-5">

      <div className="flex items-center gap-8 text-sm font-medium">

        <button className="text-[#ff6900]">Recommended</button>

        <span className="text-gray-300">|</span>

        <button>Articles</button>

        <span className="text-gray-300">|</span>

        <button>Videos</button>

        <span className="text-gray-300">|</span>

        <button>Newsroom</button>

        <span className="text-gray-300">|</span>

        <button>Events</button>

        <span className="text-gray-300">|</span>

        <button>More</button>

      </div>

    </div>
  );
};

export default DiscoverMenu;
