import React from "react";
import { Navbar } from "../../components/layout/Navbar/Navbar";
import { Footer } from "../../components/layout/Footer/Footer";
import {
  smartBand,
  wearablesCategory,
  wearablesProducts,
  smartbudData,
} from "../../data/WearablesProducts";
import { WearablesHero } from "../../components/sections/WearablesHero";
import ProductCard from "../../components/sections/ProductCard";

import { SectionHeader } from "../../components/mobile/SectionHeader";
import { PromoBannerLeft }from "../../components/mobile/PromoBannerLeft";

// const wearablesGridProducts = [
//   {
//     id: 1,
//     title: "Xiaomi Watch S4 Sport",
//     subtitle: "Professional Outdoor Sports Watch",
//     image:
//       "https://i02.appmifile.com/866_operator_global/04/06/2026/b3ef2b5dc1eb74c707c3793245106adf.png?thumb=1&w=500&f=webp&q=85",
//   },
//   {
//     id: 2,
//     title: "Xiaomi Smart Band 9",
//     subtitle: "Sleek Design | Up to 21 Days Battery",
//     image:
//       "https://i02.appmifile.com/146_operatorx_operatorx_opx/20/02/2026/dbdf12655687b48d825c298dffc04954.png?thumb=1&w=500&f=webp&q=85",
//   },
//   {
//     id: 3,
//     title: "Xiaomi Watch 2 Pro",
//     subtitle: "Powered by WearOS",
//     image:
//       "https://i02.appmifile.com/688_operatorx_operatorx_opx/20/02/2026/3f1abe3d947c14ca8dbcb839bf280309.png?thumb=1&w=500&f=webp&q=85",
//   },
// ];

export const Wearables = ({
  onSelectProduct,
  onAddToCart,
  onOpenAuthModal,
  onOpenCartModal,
  cartCount,
}) => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar
        onSelectProduct={onSelectProduct}
        onOpenAuthModal={onOpenAuthModal}
        onOpenCartModal={onOpenCartModal}
        cartCount={cartCount}
      />

      {/* --- SECTION ចាស់ដែលទុកដដែល --- */}
      <section className="bg-[#f7f7f7] py-14">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-3xl font-semibold text-black">Smart Watch</h2>
          <button className="mt-6 inline-flex h-[44px] items-center justify-center rounded-xl bg-black px-8 text-sm font-medium text-white transition hover:bg-gray-900">
            More
          </button>
        </div>
      </section>

      {/* --- COMPONENT ចាស់ដែលទុកដដែល --- */}
      <WearablesHero
        title={wearablesCategory.featuredTitle}
        subtitle={wearablesCategory.featuredSubtitle}
        button={wearablesCategory.featuredButton}
        image={wearablesCategory.featuredImage}
      />

      {/* --- SECTION បង្ហាញ PRODUCT CARD ចាស់ដែលទុកដដែល --- */}
      <section className="py-20 bg-gray-100">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wearablesProducts.map((product) => (
              <ProductCard
                key={product.id}
                title={product.name}
                description={product.subtitle}
                imageUrl={product.image}
                buttonText="Learn more"
              />
            ))}
          </div>
        </div>
      </section>
      {/* --- 3. បញ្ចូល SECTION ថ្មីដែលហៅមកប្រើប្រាស់ --- */}
      <section className="bg-[#f7f7f7] py-14">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-3xl font-semibold text-black">Smart Band</h2>
          <button className="mt-6 inline-flex h-[44px] items-center justify-center rounded-xl bg-black px-8 text-sm font-medium text-white transition hover:bg-gray-900">
            More
          </button>
        </div>
      </section>

      
       <WearablesHero
        title={smartBand.featuredTitle}
        subtitle={smartBand.featuredSubtitle}
        button={smartBand.featuredButton}
        image={smartBand.featuredImage}
      />
       
      {/* --------Grid Product -------*/}
      <section className="py-20 bg-gray-100">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wearablesProducts.map((product) => (
              <ProductCard
                key={product.id}
                title={product.name}
                description={product.subtitle}
                imageUrl={product.image}
                buttonText="Learn more"
              />
            ))}
          </div>
        </div>
      </section>
     <section className="bg-[#f7f7f7] py-14">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-3xl font-semibold text-black">Smart Bund</h2>
          <button className="mt-6 inline-flex h-[44px] items-center justify-center rounded-xl bg-black px-8 text-sm font-medium text-white transition hover:bg-gray-900">
            More
          </button>
        </div>
      </section>
       <WearablesHero
        title={smartbudData.featuredTitle}
        subtitle={smartbudData.featuredSubtitle}
        button={smartbudData.featuredButton}
        image={smartbudData.featuredImage}
      />
      <section className="py-20 bg-gray-100">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wearablesProducts.map((product) => (
              <ProductCard
                key={product.id}
                title={product.name}
                description={product.subtitle}
                imageUrl={product.image}
                buttonText="Learn more"
              />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Wearables;
