import React from 'react';
import { Navbar } from '../../components/layout/Navbar/Navbar';
import { Footer } from '../../components/layout/Footer/Footer';
import { wearablesCategory, wearablesProducts } from "../../data/WearablesProducts";
import { WearablesHero } from "../../components/sections/WearablesHero"
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

      <section className="bg-[#f7f7f7] py-14">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-3xl font-semibold text-black">Smart Watch</h2>
          <button className="mt-6 inline-flex h-[44px] items-center justify-center rounded-xl bg-black px-8 text-sm font-medium text-white transition hover:bg-gray-900">
            More
          </button>
        </div>
      </section>

      <WearablesHero
        title={wearablesCategory.featuredTitle}
        subtitle={wearablesCategory.featuredSubtitle}
        button={wearablesCategory.featuredButton}
        image={wearablesCategory.featuredImage}
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
 