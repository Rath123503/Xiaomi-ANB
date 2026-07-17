import React from "react";
import { Link } from "react-router-dom"; // ✅ Import Link
import { Navbar } from "../../components/layout/Navbar/Navbar";
import { Footer } from "../../components/layout/Footer/Footer";
import {
  smartBand,
  wearablesCategory,
  wearablesProducts,
  smartbudData,
  smartbandProduct,
  smartbudProduct,
} from "../../data/WearablesProducts";
import { WearablesHero } from "../../components/sections/WearablesHero";
import ProductCard from "../../components/sections/ProductCard";

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

      {/* Section: Watches intro */}
      <section className="bg-[#f7f7f7] py-6">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-black">
            Smart Watches
          </h2>

          <div className="mt-6">
            {/* ✅ Use Link to navigate to internal page */}
            <Link to="/watches">
              <button className="inline-flex h-[44px] items-center justify-center rounded-xl bg-black px-8 text-sm font-medium text-white transition hover:bg-gray-900">
                More
              </button>
            </Link>
          </div>
        </div>
      </section>

      <WearablesHero
        title={wearablesCategory.featuredTitle}
        subtitle={wearablesCategory.featuredSubtitle}
        button={wearablesCategory.featuredButton}
        image={wearablesCategory.featuredImage}
      />

      {/* Watches Grid */}
      <section className="py-6 bg-gray-100">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* Smart Bands Section */}
      <section className="bg-[#f7f7f7] py-6">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-black">
            Smart Bands
          </h2>
          
          <div className="mt-6">
            {/* ✅ Use Link to navigate to internal page */}
            <Link to="/bands">
              <button className="inline-flex h-[44px] items-center justify-center rounded-xl bg-black px-8 text-sm font-medium text-white transition hover:bg-gray-900">
                More
              </button>
            </Link>
          </div>
        </div>
      </section>

      <WearablesHero
        title={smartBand.featuredTitle}
        subtitle={smartBand.featuredSubtitle}
        button={smartBand.featuredButton}
        image={smartBand.featuredImage}
      />

      {/* Smart Band Grid */}
      <section className="py-6 bg-gray-100">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {smartbandProduct.map((product) => (
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

      {/* TWS Earphone Section */}
      <section className="bg-[#f7f7f7] py-6">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-black">
            TWS Earphone
          </h2>
          
          <div className="mt-6">
            {/* ✅ Use Link to navigate to internal page */}
            <Link to="/earphones">
              <button className="inline-flex h-[44px] items-center justify-center rounded-xl bg-black px-8 text-sm font-medium text-white transition hover:bg-gray-900">
                More
              </button>
            </Link>
          </div>
        </div>
      </section>

      <WearablesHero
        title={smartbudData.featuredTitle}
        subtitle={smartbudData.featuredSubtitle}
        button={smartbudData.featuredButton}
        image={smartbudData.featuredImage}
      />

      <section className="py-6 bg-gray-100">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {smartbudProduct.map((product) => (
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