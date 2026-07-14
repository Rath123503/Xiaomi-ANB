import React from "react";
import { useSearchParams } from "react-router-dom";
import { Navbar } from "../../components/layout/Navbar/Navbar";
import { Footer } from "../../components/layout/Footer/Footer";
import { SectionHeader } from "../../components/mobile/SectionHeader";
import PromoBanner from "../../components/mobile/PromoBanner";
import ProductGrid from "../../components/mobile/ProductGrid";
import { PromoBannerLeft } from "../../components/mobile/PromoBannerLeft";
import { PromoCardGrid } from "../../components/mobile/PromoCardGrid";
import { ProductFourGrid } from "../../components/mobile/ProductFourGrid";
import { TabletPromoGrid } from "../../components/mobile/TabletPromoGrid";

export const Mobile = ({
  onSelectProduct,
  onOpenAuthModal,
  onOpenCartModal,
  cartCount,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeSubCat = searchParams.get("cat") || "all";

  // Data ProductGrid (Xiaomi Series)
  const xiaomiGridProducts = [
    {
      id: 1,
      title: "Xiaomi 17T",
      subtitle: "Leica 5x Telephoto",
      image:
        "https://i02.appmifile.com/866_operator_global/04/06/2026/b3ef2b5dc1eb74c707c3793245106adf.png?thumb=1&w=500&f=webp&q=85",
    },
    {
      id: 2,
      title: "Xiaomi 17 Ultra",
      subtitle: "Essential Leica Imagery",
      image:
        "https://i02.appmifile.com/146_operatorx_operatorx_opx/20/02/2026/dbdf12655687b48d825c298dffc04954.png?thumb=1&w=500&f=webp&q=85",
    },
    {
      id: 3,
      title: "Xiaomi 17",
      subtitle:
        "Light Fusion 950 high dynamic sensor 6330mAh (typ) Xiaomi Surge Battery",
      image:
        "https://i02.appmifile.com/688_operatorx_operatorx_opx/20/02/2026/3f1abe3d947c14ca8dbcb839bf280309.png?thumb=1&w=500&f=webp&q=85",
    },
  ];

  //  PromoCardGrid ខាងលើ (Redmi Section)
  const defaultPromos = [
    {
      id: "p1",
      title: "REDMI Note 15 Pro",
      subtitle: "Capture greatness",
      image:
        "https://i02.appmifile.com/223_operatorx_operatorx_opx/08/01/2026/4c093687512b2acfcdecca0f41d6c81c.png?thumb=1&w=500&f=webp&q=85",
    },
    {
      id: "p2",
      title: "REDMI Buds 6",
      subtitle: "Pure sound, zero noise",
      image:
        "https://i02.appmifile.com/139_operatorx_operatorx_opx/08/01/2026/a277a33b5b40a10292c428d138853406.png?thumb=1&w=500&f=webp&q=85",
    },
  ];

  //  PromoCardGrid (POCO Section)
  const pocoPromos = [
    {
      id: "poco1",
      title: "POCO F8 Pro",
      subtitle: "The Ultimate Flagship Killer",
      image:
        "https://i02.appmifile.com/717_operator_global/06/06/2026/1ce7ee88816c79cdca8fe271b24b5447.png?thumb=1&w=500&f=webp&q=85",
    },
    {
      id: "poco2",
      title: "POCO Watch 3",
      subtitle: "Track your fitness to the max",
      image:
        "https://i02.appmifile.com/176_operatorx_operatorx_opx/20/04/2026/b91a111adc095aef990f277a57f133ef.png?thumb=1&w=500&f=webp&q=85",
    },
  ];

  //Data ProductFourGrid (Redmi Series-4 Card)
  const redmiFourProducts = [
    {
      id: "r1",
      title: "REDMI Note 15 5G",
      subtitles: ["5520mAh battery with slim design", "Snapdragon® 6 Gen 3"],
      image:
        "https://i02.appmifile.com/562_operatorx_operatorx_opx/08/01/2026/462e7dc1130b0653c346913b8d337501.png?thumb=1&w=500&f=webp&q=85",
    },
    {
      id: "r2",
      title: "REDMI Note 15",
      subtitles: ["High-durability display glass", "108MP super-clear camera"],
      image:
        "https://i02.appmifile.com/800_operatorx_operatorx_opx/08/01/2026/b79aa1573cae4278dd0c344f406337ce.png?thumb=1&w=500&f=webp&q=85",
    },
    {
      id: "r3",
      title: "REDMI Note 14 Pro+ 5G",
      subtitles: ["200MP AI camera", "All-Star Durability"],
      image:
        "https://i02.appmifile.com/212_operatorx_operatorx_opx/02/04/2025/8b179305518a376ee1ca5cdc22b5b554.png?thumb=1&w=500&f=webp&q=85",
    },
    {
      id: "r4",
      title: "REDMI 15 5G",
      subtitles: [
        "Snapdragon® 4s Gen 3 with 5G",
        'Immersive 6.9" FHD+ display',
      ],
      image:
        "https://i02.appmifile.com/932_operatorx_operatorx_opx/13/08/2025/14f80452c6d3bae80190dba0a184438f.png?thumb=1&w=500&f=webp&q=85",
    },
  ];

  // Data ProductGrid (Redmi Footer)
  const newFooterProducts = [
    {
      id: "f1",
      title: "REDMI A3x",
      subtitle: "Stylish glass back design Smooth 6.71'' 90Hz display*",
      image:
        "https://i02.appmifile.com/795_operatorx_operatorx_opx/03/06/2024/9922b194b401c253b72b91ad36b0ec31.png?thumb=1&w=500&f=webp&q=85",
    },
    {
      id: "f2",
      title: "REDMI 15C",
      subtitle: "Sleek and refined 7.99mm design Powered by 33W fast charging",
      image:
        "https://i02.appmifile.com/541_operatorx_operatorx_opx/22/08/2025/c15b4756b67078d1129a0f13ecb9aff4.png?thumb=1&w=500&f=webp&q=85",
    },
    {
      id: "f3",
      title: "REDMI A5",
      subtitle: "32MP AI dual camera Immersive 6.88 display",
      image:
        "https://i02.appmifile.com/650_operatorx_operatorx_opx/02/04/2025/8875a4465264d80830719df35e732aea.png?thumb=1&w=500&f=webp&q=85",
    },
  ];

  // Data ProductFourGrid (POCO Series-4 Card)
  const pocoFourProducts = [
    {
      id: "poco-r1",
      title: "POCO X8 Pro 5G",
      subtitles: [
        "Flagship MediaTek Dimensity 9300+",
        "120Hz CrystalRes AMOLED",
      ],
      image:
        "https://i02.appmifile.com/64_operatorx_operatorx_opx/08/01/2026/acd70211ed67695de4ebb2ee5997d15a.png?thumb=1&w=500&f=webp&q=85",
    },
    {
      id: "poco-r2",
      title: "POCO F8",
      subtitles: [
        "Snapdragon® 8 Gen 3 HyperPower",
        "90W wildcharge technology",
      ],
      image:
        "https://i02.appmifile.com/492_operatorx_operatorx_opx/08/01/2026/3c9dc3f6540803726747516b90f093ee.png?thumb=1&w=500&f=webp&q=85",
    },
    {
      id: "poco-r3",
      title: "POCO M8 Pro 5G",
      subtitles: [
        "108MP triple camera with AI",
        "Massive 5000mAh long-lasting battery",
      ],
      image:
        "https://i02.appmifile.com/159_operatorx_operatorx_opx/26/11/2025/874e34820d262846ae61911fcfcf1635.png?thumb=1&w=500&f=webp&q=85",
    },
    {
      id: "poco-r4",
      title: "POCO C85",
      subtitles: [
        "Sleek and trendy design",
        'Immersive 6.74" 90Hz smooth display',
      ],
      image:
        "https://i02.appmifile.com/881_operatorx_operatorx_opx/26/11/2025/b7f05283607065356c13e523b12b1cfa.png?thumb=1&w=500&f=webp&q=85",
    },
  ];

  // Poco Data ProductsGrid 3 card
  const pocoGridProducts = [
    {
      id: 1,
      title: "POCO F8 GT",
      subtitle: "Ultimate Gaming Performance | Dual Triggers",
      image:
        "https://i02.appmifile.com/717_operator_global/06/06/2026/1ce7ee88816c79cdca8fe271b24b5447.png?thumb=1&w=500&f=webp&q=85",
    },
    {
      id: 2,
      title: "POCO X8 GT 5G",
      subtitle: "144Hz CrystalRes Display | MediaTek Dimensity 8300-Ultra",
      image:
        "https://i02.appmifile.com/607_operatorx_operatorx_opx/14/04/2026/0e5b4a2a089f98487fe957bfb614c0cd.png?thumb=1&w=500&f=webp&q=85",
    },
    {
      id: 3,
      title: "POCO M8 Pro",
      subtitle: "67W Turbo Charging | 64MP Triple Camera with OIS",
      image:
        "https://i02.appmifile.com/872_operatorx_operatorx_opx/01/09/2025/4218764363094fcccaeb2e81a22cfea8.png?thumb=1&w=500&f=webp&q=85",
    },
  ];

  // Data PromoCardGrid (Tablet Series - 2 Card)
  const tabletPromos = [
    {
      id: "tab-p1",
      title: "Xiaomi Pad 8",
      subtitle: "Snapdragon® 8+ Gen 1 | Smooth 144Hz WQHD+ display",
      image:
        "https://i02.appmifile.com/308_operatorx_operatorx_opx/24/02/2026/41a1ac56a805cdbe4e74b33f6e4dca8f.png?thumb=1&w=500&f=webp&q=85",
    },
    {
      id: "tab-p2",
      title: "Redmi Pad Pro",
      subtitle: 'Immersive 12.1" 2.5K display | Snapdragon® 7s Gen 2',
      image:
        "https://i02.appmifile.com/166_operatorx_operatorx_opx/22/04/2026/8b10575620b394801e29c8fc4370b674.png?thumb=1&w=500&f=webp&q=85",
    },
  ];

  // Data tabletGridPromos
  const tabletGridPromos = [
    {
      id: "tab-1",
      title: "REDMI Pad 2 9.7 4G",
      subtitles: ["2K 120Hz true clarity", "7600mAh massive power"],
      image:
        "https://i02.appmifile.com/826_operatorx_operatorx_opx/22/04/2026/1ccc52391b65ff1fdb257c150860019b.png?thumb=1&w=500&f=webp&q=85",
    },
    {
      id: "tab-2",
      title: "Xiaomi Pad 7 Pro",
      subtitle: "Focus your flow",
      image:
        "https://i02.appmifile.com/632_operatorx_operatorx_opx/02/03/2025/c931d20df92afeb3a220331837da4b43.png?thumb=1&w=500&f=webp&q=85",
    },
    {
      id: "tab-3",
      title: "POCO Pad C1",
      subtitle: "Crystal-clear clarity on the go",
      image:
        "https://i02.appmifile.com/942_operatorx_operatorx_opx/18/05/2026/51ce4b5407d890de59684dbb45b9a198.png?thumb=1&w=500&f=webp&q=85",
    },
  ];

  const handleTabClick = (slug) => {
    if (slug === "all") {
      searchParams.delete("cat");
    } else {
      searchParams.set("cat", slug);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="min-h-screen bg-white text-[#191919]">
      <Navbar
        onSelectProduct={onSelectProduct}
        onOpenAuthModal={onOpenAuthModal}
        onOpenCartModal={onOpenCartModal}
        cartCount={cartCount}
      />

  
      {/* Footer rendered inside page */}
      <Footer />
    </div>
  );
};

export default Mobile;
