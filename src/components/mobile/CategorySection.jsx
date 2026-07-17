import React from "react";
import { SectionHeader } from "./SectionHeader";
import { PromoBanner } from "./PromoBanner";
import { FeatureCard } from "./FeatureCard";
import { ProductCard } from "./ProductCard";
import { AllProductsCard } from "./AllProductsCard";

export const CategorySection = ({ category, onLearnMore, onMoreClick, onAllProducts }) => {
  const { title, subtitle, banner, featureCards, products } = category;

  return (
    <div>
      <SectionHeader
        title={title}
        subtitle={subtitle}
        onMoreClick={() => onMoreClick?.(category.id)}
      />

      {banner && (
        <PromoBanner
          image={banner.image}
          title={banner.title}
          subtitle={banner.subtitle}
          theme={banner.theme}
          onLearnMore={() => onLearnMore?.(banner.title)}
        />
      )}

      {featureCards?.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-4 sm:px-8 py-6 max-w-[1440px] mx-auto">
          {featureCards.map((fc, i) => (
            <FeatureCard
              key={i}
              name={fc.name}
              features={fc.features}
              image={fc.image}
              onLearnMore={() => onLearnMore?.(fc.name)}
            />
          ))}
        </div>
      )}

      {products?.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 px-4 sm:px-8 py-6 max-w-[1440px] mx-auto">
          {products.map((p, i) => (
            <ProductCard
              key={i}
              name={p.name}
              tag={p.tag}
              image={p.image}
              onLearnMore={() => onLearnMore?.(p.name)}
            />
          ))}
          <AllProductsCard onClick={() => onAllProducts?.(category.id)} />
        </div>
      )}
    </div>
  );
};

export default CategorySection;