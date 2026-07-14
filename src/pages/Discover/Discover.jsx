import React, { useState } from "react";
import { Navbar } from "../../components/layout/Navbar/Navbar";
import { Footer } from "../../components/layout/Footer/Footer";

import DiscoverMenu from "../../components/discover/DiscoverMenu";
import DiscoverSearch from "../../components/discover/DiscoverSearch";
import DiscoverHero from "../../components/discover/DiscoverHero";
import DiscoverGrid from "../../components/discover/DiscoverGrid";

export const Discover = ({
  onSelectProduct,
  onOpenAuthModal,
  onOpenCartModal,
  cartCount,
}) => {
  const [activeTab, setActiveTab] = useState("articles");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-[#F4F4F4]">
      <Navbar
        onSelectProduct={onSelectProduct}
        onOpenAuthModal={onOpenAuthModal}
        onOpenCartModal={onOpenCartModal}
        cartCount={cartCount}
      />

      <main className="max-w-[1200px] mx-auto px-8 pt-1 pb-8">
        <DiscoverMenu activeTab={activeTab} setActiveTab={setActiveTab} />

        <DiscoverSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        {/* Only show Hero on Recommended or when not searching */}
        {!searchQuery && activeTab === "recommended" && <DiscoverHero />}

        <DiscoverGrid activeTab={activeTab} searchQuery={searchQuery} />
      </main>

      <Footer />
    </div>
  );
};

export default Discover;
