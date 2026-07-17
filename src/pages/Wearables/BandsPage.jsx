import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../../components/layout/Navbar/Navbar";
import { Footer } from "../../components/layout/Footer/Footer";

export const BandsPage = ({
  onSelectProduct,
  onAddToCart,
  onOpenAuthModal,
  onOpenCartModal,
  cartCount,
}) => {
  // Smart Band products with Xiaomi CDN image URLs
  const allProducts = [
      {
        id: 1,
        name: "Xiaomi Smart Band 10 ",
      //   subtitle: "46mm",
        image: "https://i02.appmifile.com/905_operatorx_operatorx_opx/25/05/2026/765ffacb7c0f71617971a1851a4c0492.png?thumb=1&w=220&f=webp&q=85",
      
        isNew: true,
      },
      {
        id: 2,
        name: "Xiaomi Smart Band 10",
        subtitle: "",
        image: "https://i02.appmifile.com/730_operatorx_operatorx_opx/25/05/2026/10abf2cf71d6f8c31940950527813d85.png?thumb=1&w=220&f=webp&q=85",
       
        isNew: false,
      },
      {
        id: 3,
        name: "Xiaomi Smart Band 10",
        subtitle: "",
        image: "https://i02.appmifile.com/975_operatorx_operatorx_opx/24/09/2025/f80b243d63b6d8096ab7551b0d8996b7.png?thumb=1&w=220&f=webp&q=85",
        time: "",
        isNew: false,
      },
      {
        id: 4,
        name: "Xiaomi Smart Band9",
        subtitle: "",
        image: "https://i02.appmifile.com/460_operatorx_operatorx_opx/04/09/2025/00d120ab6cf83354f97c848a6bd0b2ea.png?thumb=1&w=220&f=webp&q=85",
        
        isNew: false,
      },
      {
        id: 5,
        name: "Xiaomi Smart Band 9 Pro",
      //   subtitle: "41mm",
        image: "https://i02.appmifile.com/690_operatorx_operatorx_opx/03/03/2025/d0c5bef2427e9dc52f716e0e31ee93aa.png?thumb=1&w=220&f=webp&q=85",
       
        isNew: false,
      },
      {
        id: 6,
        name: "Xiaomi Smart Band 9",
        subtitle: "",
        image: "https://i02.appmifile.com/828_operatorx_operatorx_opx/26/09/2024/e4477095ab705aced7ac8236670d4fde.png?thumb=1&w=220&f=webp&q=85",
        
        isNew: false,
      },
      {
        id: 7,
        name: "REDMI Watch 5",
        subtitle: "",
        image: "https://i02.appmifile.com/691_operatorx_operatorx_opx/23/02/2024/af5041d6228d2b380d9b37d18e3cdbad.png?thumb=1&w=220&f=webp&q=85",
        
        isNew: false,
      },
      {
        id: 8,
        name: "Xiaomi Smart Band 8 Active",
        subtitle: "",
        image: "https://i02.appmifile.com/235_operatorx_operatorx_opx/21/11/2024/8d40ab77c4e23f4be65562ffef8f9981.png?thumb=1&w=220&f=webp&q=85",
        time: "",
        isNew: false,
      },
      {
        id: 1,
        name: "Xiaomi Smart Band8",
      //   subtitle: "46mm",
        image: "https://i02.appmifile.com/797_operatorx_operatorx_opx/26/09/2023/b85b88afff6b9fb37e558cb6f3d261cd.png?thumb=1&w=220&f=webp&q=85",
      
        isNew: true,
      },
      {
        id: 2,
        name: "Xiaomi Smart Band7",
        subtitle: "",
        image: "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1680260233.57461112.png?thumb=1&w=220&f=webp&q=85",
       
        isNew: false,
      },
      {
        id: 3,
        name: "Xiaomi Smart Band7",
        subtitle: "",
        image: "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1674993740.12319164.png?thumb=1&w=220&f=webp&q=85",
        time: "",
        isNew: false,
      },
      {
        id: 4,
        name: "Xiaomi Smart Band7",
        subtitle: "",
        image: "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1666853135.64616500.png?thumb=1&w=220&f=webp&q=85",
        
        isNew: false,
      },
      {
        id: 5,
        name: "Xiaomi Smart Band7",
      //   subtitle: "41mm",
        image: "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1666840042.17468619.png?thumb=1&w=220&f=webp&q=85",
       
        isNew: false,
      },
      {
        id: 6,
        name: "Xiaomi Smart Band7",
        subtitle: "",
        image: "https://i02.appmifile.com/828_operatorx_operatorx_opx/26/09/2024/e4477095ab705aced7ac8236670d4fde.png?thumb=1&w=220&f=webp&q=85",
        
        isNew: false,
      },
      {
        id: 7,
        name: "Xiaomi Smart Band7",
        subtitle: "",
        image: "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1666842770.50842551.png?thumb=1&w=220&f=webp&q=85",
        
        isNew: false,
      },
      {
        id: 8,
        
        name: "Xiaomi Smart Band7",
        subtitle: "",
        image: "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1666844854.23092905.png?thumb=1&w=220&f=webp&q=85",
        time: "",
        isNew: false,
      },
      {
        id: 9,
        name: "Xiaomi Smart Band7",
      //   subtitle: "46mm",
        image: "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1666845498.9448904.png?thumb=1&w=220&f=webp&q=85",
      
        isNew: true,
      },
      {
        id: 10,
        name: "Xiaomi Smart Band7",
        subtitle: "",
        image: "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1663749390.06317129.png?thumb=1&w=220&f=webp&q=85",
       
        isNew: false,
      },
      {
        id: 11,
        name: "Xiaomi Smart Band7",
        subtitle: "",
        image: "https://i02.appmifile.com/563_operatorx_operatorx_opx/18/11/2024/f8bb3a1bb9990d8d5dde34cdbc9b9af7.png?thumb=1&w=300&f=webp&q=85",
        time: "",
        isNew: false,
      },
      {
        id: 12,
        name: "Xiaomi Smart Band7",
        subtitle: "",
        image: "https://i02.appmifile.com/469_operatorx_operatorx_opx/18/11/2024/c46134380115ab289e4041d50095a364.png?thumb=1&w=300&f=webp&q=85",
        
        isNew: false,
      },
      {
        id: 13,
        name: "Xiaomi Smart Band7",
      //   subtitle: "41mm",
        image: "https://i02.appmifile.com/651_operatorx_operatorx_opx/30/11/2023/d9a896d3b8819d3b5e979745ceae8e48.png?thumb=1&w=300&f=webp&q=85",
       
        isNew: false,
      },
      {
        id: 14,
        name: "Xiaomi Watch S4",
        subtitle: "",
        image: "https://i02.appmifile.com/245_operatorx_operatorx_opx/22/08/2023/2a99aa474f1feb60535c41ca474b824c.png?thumb=1&w=300&f=webp&q=85",
        
        isNew: false,
      },
      {
        id: 15,
        name: "Xiaomi Smart Band7",
        subtitle: "",
        image: "https://i02.appmifile.com/133_operatorx_operatorx_opx/25/06/2023/af1cc31c5b732c0ce504f440373772e2.png?thumb=1&w=300&f=webp&q=85",
        
        isNew: false,
      },
      {
        id: 16,
        name: "Xiaomi Smart Band7",
        subtitle: "",
        image: "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1666844819.27166740.png?thumb=1&w=220&f=webp&q=85",
        time: "",
        isNew: false,
      },
    ];
  
    return (
      <div className="min-h-screen bg-[#f5f5f5]">
        <Navbar
          onSelectProduct={onSelectProduct}
          onOpenAuthModal={onOpenAuthModal}
          onOpenCartModal={onOpenCartModal}
          cartCount={cartCount}
        />
  
        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-100 py-3">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center text-xs text-gray-400">
              <Link to="/" className="hover:text-black">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/wearables" className="hover:text-black">All Products</Link>
              <span className="mx-2">/</span>
              <Link to="/wearables" className="hover:text-black">Smart Watches</Link>
              <span className="mx-2">/</span>
              <span className="text-black font-medium">Smart Band</span>
            </div>
          </div>
        </div>
  
        {/* Page Title */}
        <div className="py-6 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-semibold text-black">Smart Band</h1>
          </div>
        </div>
  
        {/* Filter Bar */}
        <div className="border-y border-gray-200 py-2 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 text-sm">
              <span className="text-gray-600">Categories</span>
              <button className="px-3 py-1 bg-gray-100 rounded-full text-sm hover:bg-gray-200 transition-colors">
                Relevance
              </button>
              <button className="px-3 py-1 bg-gray-100 rounded-full text-sm hover:bg-gray-200 transition-colors">
                New
              </button>
            </div>
          </div>
        </div>
  
        {/* ============ Product Grid - 2x4 Layout ============ */}
        <div className="py-8 bg-[#f5f5f5]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {allProducts.map((product) => (
                <div
                  key={product.id}
                  className="group bg-white  overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300 p-3 sm:p-4"
                  // onClick={() => onSelectProduct?.(product)}
                >
                  {/* Content Container */}
                  <div className="flex flex-col items-center">
                    {/* Title - Bold black text */}
                    <div className="text-center w-full">
                      <h3 className="text-xl font-bold text-black">
                        {product.name}
                      </h3>
                      {product.subtitle && (
                        <p className="text-xs text-gray-500">
                          {product.subtitle}
                        </p>
                      )}
                    </div>
  
                    {/* "Learn more" button */}
                    <button 
                      className="mt-10 px-4 py-1 text-xs text-gray-600 border border-gray-500 rounded-md hover:bg-black hover:text-white hover:border-black transition-all duration-200"
                      // onClick={(e) => {
                      // //   e.stopPropagation();
                      //   // Navigate to product detail
                      // }}
                    >
                      Learn more
                    </button>
  
                    {/*------ Product Image -----*/}
                    <div className="relative w-full bg-white rounded-lg overflow-hidden aspect-square mt-2">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain p-3 sm:p-4 "
                        onError={(e) => {
                          // Fallback image if URL fails
                          e.target.src = "https://via.placeholder.com/300x300/eeeeee/999999?text=Watch";
                        }}
                      />
                    {/* "New" Badge - Top Left with green color */}
                   
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BandsPage;