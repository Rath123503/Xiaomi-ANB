import React from "react";
import { MaterialIcon } from "../common/MaterialIcon";

const DiscoverSearch = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="flex justify-end mb-6">
      <div className="flex items-center w-full sm:w-[280px] h-10 bg-white rounded-full px-4 shadow-sm border border-gray-100">
        <MaterialIcon
          name="search"
          size={18}
          className="text-gray-400"
        />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search in Discover"
          className="ml-2 flex-1 outline-none bg-transparent text-sm"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="text-gray-400 hover:text-gray-600 focus:outline-none"
            aria-label="Clear search"
          >
            <MaterialIcon name="close" size={16} />
          </button>
        )}
      </div>
    </div>
  );
};

export default DiscoverSearch;
