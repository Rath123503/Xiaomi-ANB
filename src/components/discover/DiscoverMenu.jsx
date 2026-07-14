import React from "react";

const DiscoverMenu = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: "recommended", label: "Recommended" },
    { id: "articles", label: "Articles" },
    { id: "videos", label: "Videos" },
    { id: "newsroom", label: "Newsroom" },
    { id: "events", label: "Events" },
    { id: "more", label: "More" },
  ];

  const handleTabClick = (id) => {
    if (id === "events" || id === "more") {
      // Click feedback only - no page navigation or grid content switching
      return;
    }
    setActiveTab(id);
  };

  return (
    <div className="flex justify-center py-5">
      <div className="flex items-center gap-4 sm:gap-8 text-sm font-medium overflow-x-auto max-w-full pb-2">
        {menuItems.map((item, idx) => {
          const isDummyTab = item.id === "events" || item.id === "more";
          const isActive = activeTab === item.id;

          return (
            <React.Fragment key={item.id}>
              <button
                onClick={() => handleTabClick(item.id)}
                className={`transition-colors py-1 cursor-pointer shrink-0 ${
                  isActive
                    ? "text-[#ff6900] border-b-2 border-[#ff6900] font-semibold"
                    : "text-gray-600 hover:text-[#ff6900] active:text-[#ff6900]"
                }`}
              >
                {item.label}
              </button>
              {idx < menuItems.length - 1 && (
                <span className="text-gray-300 select-none hidden sm:inline">|</span>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default DiscoverMenu;
