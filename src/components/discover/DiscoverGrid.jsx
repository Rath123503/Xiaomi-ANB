import React from "react";
import {
  RECOMMENDED_DATA,
  ARTICLES_DATA,
  VIDEOS_DATA,
  NEWSROOM_DATA,
  EVENTS_DATA
} from "../../data/DiscoverData";
import DiscoverCard from "./DiscoverCard";

const DiscoverGrid = ({ activeTab, searchQuery }) => {
  // Map active tab to respective data collection
  let currentCollection = [];
  switch (activeTab) {
    case "articles":
      currentCollection = ARTICLES_DATA;
      break;
    case "videos":
      currentCollection = VIDEOS_DATA;
      break;
    case "newsroom":
      currentCollection = NEWSROOM_DATA;
      break;
    case "events":
      currentCollection = EVENTS_DATA;
      break;
    case "recommended":
    default:
      currentCollection = RECOMMENDED_DATA;
      break;
  }

  // Filter content based on search query
  const filteredCollection = searchQuery.trim()
    ? currentCollection.filter(
        (item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : currentCollection;

  return (
    <section className="max-w-[1200px] mx-auto py-12">
      {filteredCollection.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCollection.map((item) => (
            <DiscoverCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-200">
          <p className="text-gray-500 font-medium">
            No discover items found matching "{searchQuery}".
          </p>
        </div>
      )}

      {filteredCollection.length > 0 && (
        <div className="mt-10">
          <button
            className="
              w-full
              py-4
              bg-[#f5f5f5]
              border
              border-gray-200
              text-gray-700
              font-medium
              hover:bg-gray-200
              transition-all
              duration-300
              rounded-xl
              cursor-pointer
            "
          >
            See More
          </button>
        </div>
      )}
    </section>
  );
};

export default DiscoverGrid;
