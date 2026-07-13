import React from "react";
import { useSearchParams } from "react-router-dom";
import { XIAOMI_CATEGORIES } from "../../data/xiaomiProducts";
import { Navbar } from "../../components/layout/Navbar/Navbar";
import { Footer } from "../../components/layout/Footer/Footer";
import { SectionHeader } from "../../components/mobile/SectionHeader";
import { PromoBanner } from "../../components/mobile/PromoBanner";
import ProductGrid from "../../components/mobile/ProductGrid";
import { PromoBannerLeft } from "../../components/mobile/PromoBannerLeft";
import { PromoCardGrid } from "../../components/mobile/PromoCardGrid"; 
import { ProductFourGrid } from "../../components/mobile/ProductFourGrid"; 

export const Mobile = ({
  onSelectProduct,
  onOpenAuthModal,
  onOpenCartModal,
  cartCount,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeSubCat = searchParams.get("cat") || "all";
  const categoryData = XIAOMI_CATEGORIES?.mobile;

  if (!categoryData) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar
          onSelectProduct={onSelectProduct}
          onOpenAuthModal={onOpenAuthModal}
          onOpenCartModal={onOpenCartModal}
          cartCount={cartCount}
        />
        <div className="py-24 text-center">
          <h2 className="text-lg font-bold text-red-600">
            XIAOMI_CATEGORIES.mobile is missing
          </h2>
        </div>
        <Footer />
      </div>
    );
  }

  const { products = [] } = categoryData;

  const filteredProducts =
    activeSubCat === "all"
      ? products
      : products.filter((product) => product.subCategory === activeSubCat);

  const gridProducts = filteredProducts.map((product) => ({
    id: product.id,
    title: product.name,
    subtitle: product.description || (product.specs && product.specs[0]) || "",
    image: product.image,
  }));

  const handleLearnMore = (gridProduct) => {
    const fullProduct = products.find((p) => p.id === gridProduct.id);
    if (onSelectProduct && fullProduct) {
      onSelectProduct(fullProduct);
    }
  };

  const handleTabClick = (slug) => {
    if (slug === "all") {
      searchParams.delete("cat");
    } else {
      searchParams.set("cat", slug);
    }
    setSearchParams(searchParams);
  };

 
  const redmiFourProducts = [
    {
      id: "r1",
      title: "REDMI Note 15 5G",
      subtitles: ["5520mAh battery with slim design", "Snapdragon® 6 Gen 3"],
      image: "https://i02.appmifile.com/866_operator_global/04/06/2026/b3ef2b5dc1eb74c707c3793245106adf.png?thumb=1&w=500&f=webp&q=85"
    },
    {
      id: "r2",
      title: "REDMI Note 15",
      subtitles: ["High-durability display glass", "108MP super-clear camera"],
      image: "https://i02.appmifile.com/146_operatorx_operatorx_opx/20/02/2026/dbdf12655687b48d825c298dffc04954.png?thumb=1&w=500&f=webp&q=85"
    },
    {
      id: "r3",
      title: "REDMI Note 14 Pro+ 5G",
      subtitles: ["200MP AI camera", "All-Star Durability"],
      image: "https://i02.appmifile.com/688_operatorx_operatorx_opx/20/02/2026/3f1abe3d947c14ca8dbcb839bf280309.png?thumb=1&w=500&f=webp&q=85"
    },
    {
      id: "r4",
      title: "REDMI 15 5G",
      subtitles: ["Snapdragon® 4s Gen 3 with 5G", "Immersive 6.9\" FHD+ display"],
      image: "https://i02.appmifile.com/866_operator_global/04/06/2026/b3ef2b5dc1eb74c707c3793245106adf.png?thumb=1&w=500&f=webp&q=85"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-[#191919]">
      <Navbar
        onSelectProduct={onSelectProduct}
        onOpenAuthModal={onOpenAuthModal}
        onOpenCartModal={onOpenCartModal}
        cartCount={cartCount}
      />

      {activeSubCat === "all" && (
        <>
          <SectionHeader
            title="Xiaomi Series"
            subtitle="A new era of exquisite design"
          />

          <PromoBanner
            image="https://i02.appmifile.com/979_operator_global/28/05/2026/9cf9bbab4fa776be3219c9c13fa17fb8.jpg?thumb=1&w=5120&f=webp&q=85"
            title="Xiaomi 17T Pro"
            subtitle="The Telephoto Master"
          />
        </>
      )}

      <ProductGrid
        products={gridProducts}
        onLearnMore={handleLearnMore}
        onViewAll={() => handleTabClick("all")}
      />

      <SectionHeader title="REDMI Series" subtitle="The Performance Racer" />

      {/* Banner  */}
      <PromoBannerLeft
        image="https://i02.appmifile.com/172_operator_global/15/01/2026/b2dbe7156698eb05c92e6f2dd524967f.jpg?thumb=1&w=2560&f=webp&q=85"
        title="REDMI Note 15 Pro+"
        subtitle="It's titan tough"
        onLearnMore={() => console.log("Learn more clicked")}
      />

      {/* 2 Product Card */}
      <PromoCardGrid />

      {/* Call ProductFourGrid */}
      <ProductFourGrid 
        products={redmiFourProducts} 
        onLearnMore={(product) => handleLearnMore(product)} 
      />

      <Footer />
    </div>
  );
};

export default Mobile;