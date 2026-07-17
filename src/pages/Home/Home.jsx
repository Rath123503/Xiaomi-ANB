import React, { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ALL_PRODUCTS } from "../../data/XiaomiProducts";
import { HeroCarousel } from "../../components/home/HeroCarousel";
import { MaterialIcon } from "../../components/common/MaterialIcon";
import { Navbar } from "../../components/layout/Navbar/Navbar";
import { Footer } from "../../components/layout/Footer/Footer";
import { featuredCollections } from "../../data/featuredProducts";
import { XiaomiSupport } from "../../components/home/XiaomiSupport";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

// ─── Explore Xiaomi data ─────────────────────────────
const exploreItems = [
  {
    id: 1,
    title: "Xiaomi Vision GT debuts at MWC 2026",
    description:
      "The 2026 Xiaomi Imagery Global Awards are now open! Share your' captured monents to win $20,000",
    image:
      "https://i02.appmifile.com/996_operator_global/21/05/2026/2b02b2087a1b5828e75a0e8c1b203e03.jpg?thumb=1&w=660&f=webp&q=85",
  },
  {
    id: 2,
    title: "The Telephoto Master",
    description:
      "Xiaomi 17T series lets you capture the moment near or far with ease.",
    image:
      "https://i02.appmifile.com/404_operator_global/27/05/2026/29fea7cdffaca5932ed8a0981d76f916.jpg?thumb=1&w=660&f=webp&q=85",
  },
  {
    id: 3,
    title: "Xiaomi 17T Series",
    description:
      "Stylish design, crafted to impress.",
    image:
      "https://i02.appmifile.com/284_operator_global/27/05/2026/28bb7cb6ec06c28f5f956a123051b7bd.jpg?thumb=1&w=660&f=webp&q=85",
  },
  {
    id: 4,
    title: "Xiaomi  Watch S5 46mm",
    description: "Your smart all-day companion, on time, on stlye",
    image:
      "https://i02.appmifile.com/140_operator_global/27/05/2026/9722bce542936533ec202264cc82a4c5.jpg?thumb=1&w=660&f=webp&q=85",
  },
  {
    id: 5,
    title: "Mijia Air Conditioner Gentle Air",
    description:
      "Gentle airflow meets intelignet energy efficency - enjoy pure comfort every day.",
    image:
      "https://i02.appmifile.com/740_operator_global/27/05/2026/fc3c9b6ad9137b9433fc839d0770ddbc.jpg?thumb=1&w=660&f=webp&q=85",
  },
  {
    id: 6,
    title: "Smart Tech Appliances",
    description: "Experience an innvaotive, seamless, and premium lifestyle with Xiamoi Smart Tech Appliances.",
    image:
      "https://i02.appmifile.com/284_operator_global/16/03/2026/1c085db8ff2de124f563ba8c5553706a.jpg?thumb=1&w=660&f=webp&q=85",
  },
  {
    id: 7,
    title: "Essential Leica Imagery",
    description:
      "Xiaomi 17 Ultra lets you effortlessly capture stunnig night moments.",
    image:
      "https://i02.appmifile.com/609_operator_global/17/03/2026/55311a864d3e9d5a6407d6915fa3591c.jpg?thumb=1&w=660&f=webp&q=85",
  },
  {
    id: 8,
    title: "Leica Leitzphone powered by Xiaomi",
    description:
      "Designed for those who see what truly matters - cradted by Leica powered by Xiaomi",
    image:
      "https://i02.appmifile.com/97_operator_global/01/04/2026/17e76e886aa81f48527adea9b467a157.jpg?thumb=1&w=660&f=webp&q=85",
  },
  {
    id: 9,
    title: "Xiaomi HyperOS 3",
    description:
      "Enhanced user experience and seamless smart connectivity demonstrate the upgrades.",
    image:
      "https://i02.appmifile.com/303_operator_global/13/03/2026/27f21c0d199656d9a643237a709004a3.jpg?thumb=1&w=660&f=webp&q=85",
  },
  {
    id: 10,
    title: "Xiaomi Vision GT debuts at MWC 2026",
    description:
      "Xiaomi Vision Gran Turismo unveiled at MWC 2026, redefining hypercar design with limitless imagination.",
    image:
      "https://i02.appmifile.com/525_operator_global/26/03/2026/a12109e0f8e717b92cb5373dd3a59e64.jpg?thumb=1&w=660&f=webp&q=85"
  },
];

const CLONE_COUNT = 2;
const CARD_WIDTH = 664; // 664px card + 24px gap

const loopedExploreItems = [
  ...exploreItems
    .slice(-CLONE_COUNT)
    .map((item) => ({ ...item, cloneKey: `start-${item.id}` })),
  ...exploreItems.map((item) => ({ ...item, cloneKey: `real-${item.id}` })),
  ...exploreItems
    .slice(0, CLONE_COUNT)
    .map((item) => ({ ...item, cloneKey: `end-${item.id}` })),
];

// Call Components
export const Home = ({
  onSelectProduct,
  onAddToCart,
  onOpenAuthModal,
  onOpenCartModal,
  cartCount,
}) => {
  const [activeFeaturedTab, setActiveFeaturedTab] = useState("violet");
  const exploreScrollRef = useRef(null);

  // Start scroll position on the first REAL card (skip the cloned ones)
  useEffect(() => {
    if (exploreScrollRef.current) {
      exploreScrollRef.current.scrollLeft = CLONE_COUNT * CARD_WIDTH;
    }
  }, []);

  const handleExploreNext = () => {
    const container = exploreScrollRef.current;
    if (!container) return;
    container.scrollBy({ left: CARD_WIDTH, behavior: "smooth" });
  };

  const handleExplorePrev = () => {
    const container = exploreScrollRef.current;
    if (!container) return;
    container.scrollBy({ left: -CARD_WIDTH, behavior: "smooth" });
  };

  // Detects when scroll enters the cloned zones and silently snaps
  // back to the matching real position — creates an infinite loop feel
  const handleExploreScroll = () => {
    const container = exploreScrollRef.current;
    if (!container) return;

    const realStartOffset = CLONE_COUNT * CARD_WIDTH;
    const maxScroll = container.scrollWidth - container.clientWidth;

    if (container.scrollLeft <= 5) {
      // entered the cloned "start" region -> snap to real end
      container.scrollLeft =
        realStartOffset + (exploreItems.length - CLONE_COUNT) * CARD_WIDTH;
    } else if (container.scrollLeft >= maxScroll - 5) {
      // entered the cloned "end" region -> snap to real start
      container.scrollLeft = realStartOffset;
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F4F4] text-[#191919] font-sans selection:bg-[#FF6900] selection:text-white">
      <Navbar
        onSelectProduct={onSelectProduct}
        onOpenAuthModal={onOpenAuthModal}
        onOpenCartModal={onOpenCartModal}
        cartCount={cartCount}
      />

      {/* HERO CAROUSEL */}
      <HeroCarousel />

      {/* 1. Featured Products Section */}
      <section className="bg-neutral-50/50 pt-16 pb-16 px-4 sm:px-6 md:px-8 border-b border-gray-100">
        <div className="max-w-[1800px] mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#191919] mb-6 animate-fade-in">
            Featured Products
          </h2>

          {/* Category Tabs */}
          <div className="flex overflow-x-auto scrollbar-none justify-start sm:justify-center items-center gap-x-8 gap-y-3 mb-10 pb-3 max-w-4xl mx-auto px-4 whitespace-nowrap">
            {featuredCollections.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFeaturedTab(tab.id)}
                className={`text-sm sm:text-base font-semibold transition-all relative pb-2 focus:outline-none cursor-pointer flex-shrink-0 ${
                  activeFeaturedTab === tab.id
                    ? "text-[#FF6900]"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                {tab.title}
                {activeFeaturedTab === tab.id && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#FF6900]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Large White Container with active content */}
          <div className="bg-white rounded-lg border border-gray-100 p-4 sm:p-8 shadow-xs text-left max-w-[1180px] mx-auto transition-all duration-300">
            <AnimatePresence mode="wait">
              {featuredCollections.map((collection) => {
                if (collection.id !== activeFeaturedTab) return null;

                return (
                  <motion.div
                    key={collection.id}
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="grid grid-cols-1 gap-6"
                  >
                    {/* Top Row: Hero Product */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                      <motion.div
                        variants={itemVariants}
                        className="rounded-lg overflow-hidden flex items-center justify-center border border-gray-100 bg-[#FAFAFA] group w-full md:w-[554px] md:h-[348px]"
                      >
                        <motion.img
                          src={collection.hero.image}
                          alt={collection.hero.name}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                          referrerPolicy="no-referrer"
                        />
                      </motion.div>

                      <motion.div
                        variants={itemVariants}
                        className="rounded-lg bg-[#FAFAFA] flex flex-col items-center justify-center text-center p-8 sm:p-12 border border-gray-100/40 hover:bg-[#F5F5F5] transition-all duration-300 transform hover:-translate-y-[6px] hover:shadow-md relative w-full md:w-[554px] min-h-[348px] group"
                      >
                        <div className="space-y-6 max-w-sm flex flex-col items-center">
                          {collection.hero.showLeica ? (
                            <div className="flex flex-col items-center select-none">
                              <div className="flex items-baseline gap-1.5 justify-center">
                                <span className="text-3xl font-extrabold tracking-tighter text-black uppercase">
                                  {collection.hero.brand}
                                </span>
                                <span className="text-3xl font-bold tracking-tight text-gray-950">
                                  {collection.hero.model}
                                </span>
                              </div>
                            </div>
                          ) : (
                            <div className="space-y-2 flex flex-col items-center">
                              <span className="text-[11px] uppercase tracking-wider font-bold text-[#FF6900] bg-orange-50 px-3 py-1 rounded-full">
                                {collection.hero.categoryLabel}
                              </span>
                              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900 uppercase">
                                {collection.hero.name}
                              </h3>
                            </div>
                          )}

                          <p className="text-base sm:text-lg text-gray-600 font-medium max-w-[285px] leading-relaxed">
                            {collection.hero.description}
                          </p>

                          <button
                            className="px-8 py-3 bg-[#191919] hover:bg-gray-700 text-white text-sm font-bold rounded-lg transition-all duration-300 shadow-xs hover:shadow-md tracking-wider active:scale-95"
                          >
                            {collection.hero.button}
                          </button>
                        </div>
                      </motion.div>
                    </div>

                    {/* Bottom Row: Two equal product cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center justify-center">
                      {collection.products.map((product, idx) => (
                        <motion.div
                          key={idx}
                          variants={itemVariants}
                          className="bg-[#FAFAFA] rounded-2xl flex items-center p-8 sm:p-12 hover:shadow-lg hover:bg-[#F5F5F5] transition-all duration-300 transform hover:-translate-y-[6px] border border-gray-100 group shadow-xs w-full md:w-[554px] md:h-[348px]"
                        >
                          <div className="w-1/2 flex items-center justify-center shrink-0 select-none overflow-hidden rounded-xl">
                            <motion.img
                              src={product.image}
                              alt={product.name}
                              className="max-h-[300px] w-auto object-contain transition-transform duration-300 group-hover:scale-[1.05]"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                          {/* Detail about Informtion Card */}
                          <div className="w-1/2 space-y-2 text-left pl-6">
                            <h4 className="text-xl sm:text-2xl font-bold text-gray-900  transition-colors">
                              {product.name}
                            </h4>
                            <p className="text-sm sm:text-base text-gray-950 font-medium leading-relaxed">
                              {product.description}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Explore Xiaomi Section */}
      <section
        id="explore-xiaomi-section"
        className="bg-neutral-50/50 pt-16 pb-16 px-4 overflow-hidden"
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex items-center justify-between mb-10">
            <div className="w-16 hidden sm:block"></div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#191919] text-center flex-1">
              Explore Xiaomi
            </h2>
            <div className="flex items-center gap-2">
              <button
                id="explore-prev-btn"
                onClick={handleExplorePrev}
                className="w-9 h-9 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-400 hover:text-gray-700 flex items-center justify-center transition-all cursor-pointer active:scale-95"
                aria-label="Previous slide"
              >
                <MaterialIcon name="chevron_left" size={22} />
              </button>
              <button
                id="explore-next-btn"
                onClick={handleExploreNext}
                className="w-9 h-9 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center transition-all cursor-pointer active:scale-95"
                aria-label="Next slide"
              >
                <MaterialIcon name="chevron_right" size={22} />
              </button>
            </div>
          </div>
        </div>

        {/* Cards container — infinite loop, full-bleed */}
        <div
          id="explore-scroll-container"
          ref={exploreScrollRef}
          onScroll={handleExploreScroll}
          className="flex overflow-x-auto gap-6 snap-x snap-mandatory pb-4 scroll-smooth no-scrollbar px-[max(1rem,calc((100vw-1440px)/2+16px))]"
        >
          {loopedExploreItems.map((item) => (
            <div
              key={item.cloneKey}
              className="min-w-[290px] sm:min-w-[664px] md:min-w-[664px] max-w-[664px] w-full h-[420px] md:h-[480px] bg-white rounded-lg overflow-hidden border border-gray-100 hover:border-gray-200/50 hover:shadow-lg transition-all duration-300 flex flex-col snap-start group shrink-0"
            >
              <div className="w-full h-[280px] md:h-[336px] overflow-hidden bg-white relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col items-center text-center justify-center flex-1 bg-white">
                <h3 className="text-base md:text-lg font-bold text-[#191919] mb-2 leading-snug  transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-950 font-medium leading-relaxed max-w-xs">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <XiaomiSupport />
          
      <Footer />
    </div>
  );
};

export default Home;