import React, { useState } from "react";
import { Navbar } from "../../components/layout/Navbar/Navbar";
import { Footer } from "../../components/layout/Footer/Footer";

import DiscoverMenu from "../../components/discover/DiscoverMenu";
import DiscoverSearch from "../../components/discover/DiscoverSearch";
import DiscoverHero from "../../components/discover/DiscoverHero";
import DiscoverGrid from "../../components/discover/DiscoverGrid";

import DiscoverRecommended from "../../data/DiscoverRecommended";
import DiscoverArticles from "../../data/DiscoverArticles";
import DiscoverVideos from "../../data/DiscoverVideos";
import DiscoverNewsroom from "../../data/DiscoverNewsroom";
import DiscoverHeroData from "../../data/DiscoverHeroData";

const tabContent = {
  Recommended: DiscoverRecommended,
  Articles: DiscoverArticles,
  Videos: DiscoverVideos,
  Newsroom: DiscoverNewsroom,
};

const heroByTab = {
  Recommended: DiscoverHeroData[0],
  Articles: DiscoverHeroData[1],
  Videos: DiscoverHeroData[2],
  Newsroom: DiscoverHeroData[3],
};

export const Discover = ({
  onSelectProduct,
  onOpenAuthModal,
  onOpenCartModal,
  cartCount,
}) => {
  const [activeTab, setActiveTab] = useState("Recommended");

  return (
    <div className="min-h-screen bg-[#F4F4F4]">
      <Navbar
        onSelectProduct={onSelectProduct}
        onOpenAuthModal={onOpenAuthModal}
        onOpenCartModal={onOpenCartModal}
        cartCount={cartCount}
      />

      <main className="max-w-[1226px] mx-auto px-0 pt-2 pb-10">

        <DiscoverMenu
          activeTab={activeTab}
          onSelectTab={setActiveTab}
        />

        <DiscoverSearch />

        {activeTab === "Recommended" && (
          <div className="mb-8">
            <DiscoverHero heroItem={heroByTab[activeTab]} />
          </div>
        )}

        <DiscoverGrid items={tabContent[activeTab].length > 0 && 
          tabContent[activeTab]} />

      </main>

      <Footer />
    </div>
  );
};

export default Discover;
