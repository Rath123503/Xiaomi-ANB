import React from "react";

const DiscoverTabs = () => {
  const tabs = [
    "All",
    "Lifestyle",
    "Innovation",
    "Community",
  ];

  return (
    <div className="flex gap-3 mb-6">
      {tabs.map((tab) => (
        <button
          key={tab}
          className="px-5 py-2 rounded-full bg-white shadow hover:bg-orange-500 hover:text-white transition"
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default DiscoverTabs;
