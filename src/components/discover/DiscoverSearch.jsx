import React from "react";
import { MaterialIcon } from "../common/MaterialIcon";

const DiscoverSearch = () => {
  return (
    <div className="flex justify-end mb-6">

      <div className="flex items-center w-[250px] h-10 bg-white rounded-full px-4 shadow-sm">

        <MaterialIcon
          name="search"
          size={18}
          className="text-gray-400"
        />

        <input
          type="text"
          placeholder="Search in Discover"
          className="ml-2 flex-1 outline-none bg-transparent text-sm"
        />

      </div>

    </div>
  );
};

export default DiscoverSearch;
