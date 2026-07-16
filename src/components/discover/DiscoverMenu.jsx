import React from "react";

const tabs = ["Recommended", "Articles", "Videos", "Newsroom", "Events", "More"];

const DiscoverMenu = ({ activeTab, onSelectTab }) => {
  return (
    <div className="flex justify-center py-5">
      <div className="flex items-center gap-8 text-sm font-medium">
        {tabs.map((tab) => (
          <React.Fragment key={tab}>
            <button
              onClick={() => onSelectTab(tab)}
              className={activeTab === tab ? "text-[#ff6900]" : "text-gray-600 hover:text-[#ff6900]"}
            >
              {tab}
            </button>
            {tab !== tabs[tabs.length - 1] && <span className="text-gray-300">|</span>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default DiscoverMenu;
