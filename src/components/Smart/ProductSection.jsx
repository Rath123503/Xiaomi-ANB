import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductCard } from './ProductCard';
import { AllProductsCard } from './AllProductsCard';

export const ProductSection = ({ title, products, navigatePath, onViewAll, specialLayout = false, singleLine = false }) => {
  const navigate = useNavigate();
  const largeProducts = products.filter((p) => p.size === 'large');
  const smallProducts = products.filter((p) => p.size === 'small').slice(0, 3);

  const handleMoreClick = () => {
    if (onViewAll) {
      onViewAll();
    } else {
      navigate(navigatePath);
    }
  };

  // Single line layout (for Kitchen Appliance)
  if (singleLine) {
    const allProducts = [...largeProducts, ...smallProducts].slice(0, 4);
    
    return (
      <section className="w-full bg-[#f5f5f5]">
        {/* Section Header */}
        <div className="flex flex-col items-center pt-[60px] pb-[40px] text-center">
          <h1 className="text-[22px] sm:text-[26px] lg:text-[28px] font-bold tracking-wide text-gray-900 leading-[1.2]">
            {title}
          </h1>
          <button
            type="button"
            onClick={handleMoreClick}
            className="mt-[12px] sm:mt-[16px] rounded-lg bg-black px-[20px] sm:px-[24px] py-[6px] sm:py-[8px] text-[12px] sm:text-[14px] font-semibold text-white transition-colors duration-300 hover:bg-gray-500 focus:outline-none"
          >
            More
          </button>
        </div>

        {/* Desktop Layout (≥1440px) */}
        <div className="hidden xl:block w-full max-w-[1440px] mx-auto px-[40px]">
          <div className="flex justify-center gap-[8px]">
            {allProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} isLarge={false} />
            ))}
            <AllProductsCard index={allProducts.length} onViewAll={handleMoreClick} />
          </div>
        </div>

        {/* Tablet/Laptop Layout (768px - 1439px) */}
        <div className="hidden md:block xl:hidden w-full max-w-[960px] mx-auto px-[24px]">
          <div className="grid grid-cols-2 gap-[8px]">
            {allProducts.map((product, index) => (
              <div key={product.id} className="w-full flex justify-center">
                <ProductCard product={product} index={index} isLarge={false} />
              </div>
            ))}
            <div className="w-full flex justify-center">
              <AllProductsCard index={allProducts.length} onViewAll={handleMoreClick} />
            </div>
          </div>
        </div>

        {/* Mobile Layout (<768px) */}
        <div className="md:hidden w-full mx-auto px-[16px]">
          <div className="flex flex-col gap-[12px] items-center">
            {allProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} isLarge={false} />
            ))}
            <AllProductsCard index={allProducts.length} onViewAll={handleMoreClick} />
          </div>
        </div>
        
        <div className="h-[30px] sm:h-[40px]"></div>
      </section>
    );
  }

  // Special layout for Environment Appliance, Smart Lighting, and Home Security
  if (specialLayout) {
    const firstProduct = largeProducts[0] || smallProducts[0];
    const remainingProducts = largeProducts.length > 0 
      ? [...largeProducts.slice(1), ...smallProducts].slice(0, 2)
      : smallProducts.slice(1, 3);

    return (
      <section className="w-full bg-[#f5f5f5]">
        {/* Section Header */}
        <div className="flex flex-col items-center pt-[60px] pb-[40px] text-center">
          <h1 className="text-[22px] sm:text-[26px] lg:text-[28px] font-bold tracking-wide text-gray-900 leading-[1.2]">
            {title}
          </h1>
          <button
            type="button"
            onClick={handleMoreClick}
            className="mt-[12px] sm:mt-[16px] rounded-lg bg-black px-[20px] sm:px-[24px] py-[6px] sm:py-[8px] text-[12px] sm:text-[14px] font-semibold text-white transition-colors duration-300 hover:bg-gray-500 focus:outline-none"
          >
            More
          </button>
        </div>

        {/* Desktop Layout (≥1440px) - Exact sizes */}
        <div className="hidden xl:block w-full max-w-[1440px] mx-auto px-[40px]">
          {/* Upper row: 1 large card (696px) + 2 small cards (340px each) */}
          <div className="flex justify-center gap-[8px] mb-[8px]">
            {firstProduct && (
              <ProductCard key={firstProduct.id} product={firstProduct} index={0} isLarge={true} />
            )}
            {remainingProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index + 1} isLarge={false} />
            ))}
          </div>

          {/* Lower row: small cards (340px each) + All Products (340px) */}
          <div className="flex justify-center gap-[8px]">
            {smallProducts.slice(0, 3).map((product, index) => (
              <ProductCard key={product.id} product={product} index={index + 3} isLarge={false} />
            ))}
            <AllProductsCard index={4} onViewAll={handleMoreClick} />
          </div>
        </div>

        {/* Tablet/Laptop Layout (768px - 1439px) */}
        <div className="hidden md:block xl:hidden w-full max-w-[960px] mx-auto px-[24px]">
          <div className="grid grid-cols-2 gap-[8px]">
            {[firstProduct, ...remainingProducts, ...smallProducts].filter(Boolean).slice(0, 6).map((product, index) => (
              <div key={product.id} className="w-full flex justify-center">
                <ProductCard product={product} index={index} isLarge={false} />
              </div>
            ))}
            <div className="w-full flex justify-center">
              <AllProductsCard index={6} onViewAll={handleMoreClick} />
            </div>
          </div>
        </div>

        {/* Mobile Layout (<768px) */}
        <div className="md:hidden w-full mx-auto px-[16px]">
          <div className="flex flex-col gap-[12px] items-center">
            {[firstProduct, ...remainingProducts, ...smallProducts].filter(Boolean).slice(0, 6).map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} isLarge={false} />
            ))}
            <AllProductsCard index={6} onViewAll={handleMoreClick} />
          </div>
        </div>
        
        <div className="h-[30px] sm:h-[40px]"></div>
      </section>
    );
  }

  // Default layout for other sections
  return (
    <section className="w-full bg-[#f5f5f5]">
      {/* Section Header */}
      <div className="flex flex-col items-center pt-[60px] pb-[40px] text-center">
        <h1 className="text-[22px] sm:text-[26px] lg:text-[28px] font-bold tracking-wide text-gray-900 leading-[1.2]">
          {title}
        </h1>
        <button
          type="button"
          onClick={handleMoreClick}
          className="mt-[12px] sm:mt-[16px] rounded-lg bg-black px-[20px] sm:px-[24px] py-[6px] sm:py-[8px] text-[12px] sm:text-[14px] font-semibold text-white transition-colors duration-300 hover:bg-gray-500 focus:outline-none"
        >
          More
        </button>
      </div>

      {/* Desktop Layout (≥1440px) - Exact sizes */}
      <div className="hidden xl:block w-full max-w-[1440px] mx-auto px-[40px]">
        {/* Upper row: Large Products (696px each) */}
        <div className="flex justify-center gap-[8px] mb-[8px]">
          {largeProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} isLarge={true} />
          ))}
        </div>

        {/* Lower row: Small Products (340px each) + All Products (340px) */}
        <div className="flex justify-center gap-[8px]">
          {smallProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} isLarge={false} />
          ))}
          <AllProductsCard index={smallProducts.length} onViewAll={handleMoreClick} />
        </div>
      </div>

      {/* Tablet/Laptop Layout (768px - 1439px) */}
      <div className="hidden md:block xl:hidden w-full max-w-[960px] mx-auto px-[24px]">
        <div className="grid grid-cols-2 gap-[8px]">
          {[...largeProducts, ...smallProducts].slice(0, 6).map((product, index) => (
            <div key={product.id} className="w-full flex justify-center">
              <ProductCard product={product} index={index} isLarge={false} />
            </div>
          ))}
          <div className="w-full flex justify-center">
            <AllProductsCard index={6} onViewAll={handleMoreClick} />
          </div>
        </div>
      </div>

      {/* Mobile Layout (<768px) */}
      <div className="md:hidden w-full mx-auto px-[16px]">
        <div className="flex flex-col gap-[12px] items-center">
          {[...largeProducts, ...smallProducts].slice(0, 6).map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} isLarge={false} />
          ))}
          <AllProductsCard index={6} onViewAll={handleMoreClick} />
        </div>
      </div>
      
      <div className="h-[30px] sm:h-[40px]"></div>
    </section>
  );
};