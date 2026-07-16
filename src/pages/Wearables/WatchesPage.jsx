import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../../components/layout/Navbar/Navbar";
import { Footer } from "../../components/layout/Footer/Footer";

export const WatchesPage = ({
  onSelectProduct,
  onAddToCart,
  onOpenAuthModal,
  onOpenCartModal,
  cartCount,
}) => {
  // Watch products 
  const allProducts = [
    {
      id: 1,
      name: "Xiaomi Watch S5",
    //   subtitle: "46mm",
      image: "https://i02.appmifile.com/586_operatorx_operatorx_opx/15/05/2026/f5b6285b7fa2c03b54fb5e2b525e1824.png?thumb=1&w=220&f=webp&q=85",
    
      isNew: true,
    },
    {
      id: 2,
      name: "REDMI Watch 6 NFC",
      subtitle: "",
      image: "https://i02.appmifile.com/587_operatorx_operatorx_opx/21/04/2026/38cb4588657d7a394872b8287fe16a09.png?thumb=1&w=220&f=webp&q=85",
     
      isNew: false,
    },
    {
      id: 3,
      name: "REDMI Watch 6",
      subtitle: "",
      image: "https://i02.appmifile.com/347_operatorx_operatorx_opx/21/04/2026/c54f1f3cc8f6f053b1806f71981fc9ea.png?thumb=1&w=220&f=webp&q=85",
      time: "",
      isNew: false,
    },
    {
      id: 4,
      name: "Xiaomi Watch 5",
      subtitle: "",
      image: "https://i02.appmifile.com/210_operatorx_operatorx_opx/20/02/2026/d426e0fe181595015a241ab10a47511a.png?thumb=1&w=220&f=webp&q=85",
      
      isNew: false,
    },
    {
      id: 5,
      name: "Xiaomi Watch S4",
    //   subtitle: "41mm",
      image: "https://i02.appmifile.com/524_operatorx_operatorx_opx/24/09/2025/93e327630df9bd89b6e9052c0e69069b.png?thumb=1&w=220&f=webp&q=85",
     
      isNew: false,
    },
    {
      id: 6,
      name: "Xiaomi Watch S4",
      subtitle: "",
      image: "https://i02.appmifile.com/228_operatorx_operatorx_opx/02/03/2025/5e807873e6d2f271fac34e4c217ec2cd.png?thumb=1&w=220&f=webp&q=85",
      
      isNew: false,
    },
    {
      id: 7,
      name: "REDMI Watch 5",
      subtitle: "",
      image: "https://i02.appmifile.com/550_operatorx_operatorx_opx/10/01/2025/3e4be7077265268b396dbf717dbcedbf.png?thumb=1&w=220&f=webp&q=85",
      
      isNew: false,
    },
    {
      id: 8,
      name: "REDMI Watch 5 Lite",
      subtitle: "",
      image: "https://i02.appmifile.com/730_operatorx_operatorx_opx/30/09/2024/22c7c2b732b63c08bd1af342daa7de62.png?thumb=1&w=220&f=webp&q=85",
      time: "",
      isNew: false,
    },
    {
      id: 1,
      name: "Xiaomi Watch S5",
    //   subtitle: "46mm",
      image: "https://i02.appmifile.com/586_operatorx_operatorx_opx/15/05/2026/f5b6285b7fa2c03b54fb5e2b525e1824.png?thumb=1&w=220&f=webp&q=85",
    
      isNew: true,
    },
    {
      id: 2,
      name: "REDMI Watch 6 NFC",
      subtitle: "",
      image: "https://i02.appmifile.com/587_operatorx_operatorx_opx/21/04/2026/38cb4588657d7a394872b8287fe16a09.png?thumb=1&w=220&f=webp&q=85",
     
      isNew: false,
    },
    {
      id: 3,
      name: "REDMI Watch 6",
      subtitle: "",
      image: "https://i02.appmifile.com/347_operatorx_operatorx_opx/21/04/2026/c54f1f3cc8f6f053b1806f71981fc9ea.png?thumb=1&w=220&f=webp&q=85",
      time: "",
      isNew: false,
    },
    {
      id: 4,
      name: "Xiaomi Watch 5",
      subtitle: "",
      image: "https://i02.appmifile.com/210_operatorx_operatorx_opx/20/02/2026/d426e0fe181595015a241ab10a47511a.png?thumb=1&w=220&f=webp&q=85",
      
      isNew: false,
    },
    {
      id: 5,
      name: "Xiaomi Watch S4",
    //   subtitle: "41mm",
      image: "https://i02.appmifile.com/524_operatorx_operatorx_opx/24/09/2025/93e327630df9bd89b6e9052c0e69069b.png?thumb=1&w=220&f=webp&q=85",
     
      isNew: false,
    },
    {
      id: 6,
      name: "Xiaomi Watch S4",
      subtitle: "",
      image: "https://i02.appmifile.com/228_operatorx_operatorx_opx/02/03/2025/5e807873e6d2f271fac34e4c217ec2cd.png?thumb=1&w=220&f=webp&q=85",
      
      isNew: false,
    },
    {
      id: 7,
      name: "REDMI Watch 5",
      subtitle: "",
      image: "https://i02.appmifile.com/550_operatorx_operatorx_opx/10/01/2025/3e4be7077265268b396dbf717dbcedbf.png?thumb=1&w=220&f=webp&q=85",
      
      isNew: false,
    },
    {
      id: 8,
      name: "REDMI Watch 5 Lite",
      subtitle: "",
      image: "https://i02.appmifile.com/730_operatorx_operatorx_opx/30/09/2024/22c7c2b732b63c08bd1af342daa7de62.png?thumb=1&w=220&f=webp&q=85",
      time: "",
      isNew: false,
    },
    {
      id: 9,
      name: "Xiaomi Watch S5",
    //   subtitle: "46mm",
      image: "https://i02.appmifile.com/360_operatorx_operatorx_opx/30/09/2024/760389241c5ed7ce6e675850b6e4835f.png?thumb=1&w=300&f=webp&q=85",
    
      isNew: true,
    },
    {
      id: 10,
      name: "REDMI Watch 6 NFC",
      subtitle: "",
      image: "https://i02.appmifile.com/43_operatorx_operatorx_opx/26/09/2024/965f51d57f39b11e7149bd0f23a7a231.png?thumb=1&w=300&f=webp&q=85",
     
      isNew: false,
    },
    {
      id: 11,
      name: "REDMI Watch 6",
      subtitle: "",
      image: "https://i02.appmifile.com/563_operatorx_operatorx_opx/18/11/2024/f8bb3a1bb9990d8d5dde34cdbc9b9af7.png?thumb=1&w=300&f=webp&q=85",
      time: "",
      isNew: false,
    },
    {
      id: 12,
      name: "Xiaomi Watch 5",
      subtitle: "",
      image: "https://i02.appmifile.com/469_operatorx_operatorx_opx/18/11/2024/c46134380115ab289e4041d50095a364.png?thumb=1&w=300&f=webp&q=85",
      
      isNew: false,
    },
    {
      id: 13,
      name: "Xiaomi Watch S4",
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
      name: "REDMI Watch 5",
      subtitle: "",
      image: "https://i02.appmifile.com/133_operatorx_operatorx_opx/25/06/2023/af1cc31c5b732c0ce504f440373772e2.png?thumb=1&w=300&f=webp&q=85",
      
      isNew: false,
    },
    {
      id: 16,
      name: "REDMI Watch 5 Lite",
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
            <span className="text-black font-medium">Smart Watch</span>
          </div>
        </div>
      </div>

      {/* Page Title */}
      <div className="py-6 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-semibold text-black">Smart Watch</h1>
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

export default WatchesPage;