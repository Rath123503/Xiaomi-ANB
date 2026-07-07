export const XIAOMI_CATEGORIES = {
  mobile: {
    title: "Mobile",
    slug: "mobile",
    subCategories: [
      { name: "Phones", slug: "phones" },
      { name: "Tablets", slug: "tablets" },
      { name: "Accessories", slug: "accessories" }
    ],
    featuredImage: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80",
    featuredTitle: "Xiaomi 14 Ultra",
    featuredSubtitle: "Lens to legend. Powered by Leica optics & Snapdragon 8 Gen 3.",
    products: [
      {
        id: "m1",
        name: "Xiaomi 14 Ultra",
        price: "$1,299",
        originalPrice: "$1,399",
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=400&q=80",
        badge: "Leica Co-engineered",
        badgeColor: "bg-red-500 text-white",
        category: "mobile",
        subCategory: "phones",
        rating: 4.9,
        reviews: 428,
        specs: ["50MP Leica Quad Camera", "Snapdragon® 8 Gen 3", "90W HyperCharge"],
        description: "The ultimate flagship photography smartphone engineered with Leica Summilux optical lenses."
      },
      {
        id: "m2",
        name: "Xiaomi 14 Pro",
        price: "$999",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80",
        badge: "New Flagship",
        badgeColor: "bg-orange-500 text-white",
        category: "mobile",
        subCategory: "phones",
        rating: 4.8,
        reviews: 312,
        specs: ["All-Around Liquid Display", "Light Hunter 900 Sensor", "120W HyperCharge"],
        description: "Innovative All-Around Liquid Display combined with uncompromising flagship power."
      },
      {
        id: "m3",
        name: "Xiaomi 13T Pro",
        price: "$799",
        originalPrice: "$899",
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=400&q=80",
        badge: "Hot Seller",
        badgeColor: "bg-blue-600 text-white",
        category: "mobile",
        subCategory: "phones",
        rating: 4.7,
        reviews: 580,
        specs: ["144Hz CrystalRes AMOLED", "Dimensity 9200+", "IP68 Water Resistant"],
        description: "Mastering the masterpiece with authentic Leica photography experience."
      },
      {
        id: "m4",
        name: "Xiaomi CIVI 4 Pro",
        price: "$599",
        image: "https://images.unsplash.com/photo-1567581935884-3349723552ca?auto=format&fit=crop&w=400&q=80",
        category: "mobile",
        subCategory: "phones",
        rating: 4.6,
        reviews: 190,
        specs: ["Dual Front 32MP Camera", "Ultra-slim 7.45mm body", "Snapdragon 8s Gen 3"]
      },
      {
        id: "m5",
        name: "Xiaomi Pad 6S Pro 12.4\"",
        price: "$599",
        originalPrice: "$649",
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=400&q=80",
        badge: "3K 144Hz",
        badgeColor: "bg-emerald-600 text-white",
        category: "mobile",
        subCategory: "tablets",
        rating: 4.9,
        reviews: 215,
        specs: ["12.4\" 3K 144Hz Display", "Snapdragon 8 Gen 2", "120W HyperCharge"],
        description: "Big ideas on a boundless display. Designed for ultimate mobile productivity."
      },
      {
        id: "m6",
        name: "Redmi Pad Pro",
        price: "$299",
        image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=400&q=80",
        category: "mobile",
        subCategory: "tablets",
        rating: 4.7,
        reviews: 340,
        specs: ["12.1\" 120Hz Eye Care Display", "10,000mAh Battery", "Snapdragon 7s Gen 2"]
      },
      {
        id: "m7",
        name: "120W HyperCharge Combo",
        price: "$49",
        image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=400&q=80",
        category: "mobile",
        subCategory: "accessories",
        rating: 4.8,
        reviews: 910,
        specs: ["100% in 19 mins", "Smart temperature control", "Includes 6A Type-C cable"]
      },
      {
        id: "m8",
        name: "Xiaomi Focus Pen 2nd Gen",
        price: "$79",
        image: "https://images.unsplash.com/photo-1585336261026-7a46604ed943?auto=format&fit=crop&w=400&q=80",
        category: "mobile",
        subCategory: "accessories",
        rating: 4.6,
        reviews: 145,
        specs: ["8192 Pressure Levels", "5ms Ultra-low latency", "Spotlight presentation pointer"]
      }
    ]
  },
  wearables: {
    title: "Wearables",
    slug: "wearables",
    subCategories: [
      { name: "Smartwatches", slug: "smartwatches" },
      { name: "Fitness Bands", slug: "fitness-bands" },
      { name: "Audio & TWS", slug: "audio" }
    ],
    featuredImage: "https://images.unsplash.com/photo-1508615039623-a25605d2b022?auto=format&fit=crop&w=600&q=80",
    featuredTitle: "Xiaomi Watch S3",
    featuredSubtitle: "Dial into your style with interchangeable bezels & HyperOS.",
    products: [
      {
        id: "w1",
        name: "Xiaomi Watch S3",
        price: "$199",
        originalPrice: "$229",
        image: "https://images.unsplash.com/photo-1508615039623-a25605d2b022?auto=format&fit=crop&w=400&q=80",
        badge: "Interchangeable Bezel",
        badgeColor: "bg-orange-500 text-white",
        category: "wearables",
        subCategory: "smartwatches",
        rating: 4.8,
        reviews: 512,
        specs: ["1.43\" AMOLED Display", "Up to 15-day battery", "HyperOS Experience"],
        description: "Revolutionary modular smartwatch with customizable hardware bezels and watch faces."
      },
      {
        id: "w2",
        name: "Xiaomi Watch 2 Pro",
        price: "$249",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80",
        badge: "Wear OS by Google",
        badgeColor: "bg-blue-600 text-white",
        category: "wearables",
        subCategory: "smartwatches",
        rating: 4.7,
        reviews: 329,
        specs: ["Snapdragon W5+ Gen 1", "Body composition analysis", "LTE eSIM optional"]
      },
      {
        id: "w3",
        name: "Xiaomi Smart Band 8 Pro",
        price: "$79",
        originalPrice: "$89",
        image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?auto=format&fit=crop&w=400&q=80",
        badge: "Best Seller",
        badgeColor: "bg-emerald-600 text-white",
        category: "wearables",
        subCategory: "fitness-bands",
        rating: 4.9,
        reviews: 1420,
        specs: ["1.74\" AMOLED Rectangular", "150+ Sports modes", "Built-in GNSS GPS"],
        description: "Large screen style meets pro fitness tracking with dual-channel heart rate sensors."
      },
      {
        id: "w4",
        name: "Xiaomi Smart Band 8",
        price: "$49",
        image: "https://images.unsplash.com/photo-1557935728-e6d1eaabe558?auto=format&fit=crop&w=400&q=80",
        category: "wearables",
        subCategory: "fitness-bands",
        rating: 4.8,
        reviews: 2890,
        specs: ["60Hz High Refresh Rate", "Pendant & Shoe clip mode", "16-day typical battery"]
      },
      {
        id: "w5",
        name: "Xiaomi Buds 5 Pro",
        price: "$149",
        originalPrice: "$179",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=400&q=80",
        badge: "Hi-Res Audio",
        badgeColor: "bg-purple-600 text-white",
        category: "wearables",
        subCategory: "audio",
        rating: 4.8,
        reviews: 640,
        specs: ["52dB Active Noise Cancellation", "LDAC & Hi-Res Wireless", "Built-in immersive spatial audio"],
        description: "Studio-grade sound engineered with custom coaxial dual drivers."
      },
      {
        id: "w6",
        name: "Xiaomi OpenWear Stereo",
        price: "$119",
        image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=400&q=80",
        category: "wearables",
        subCategory: "audio",
        rating: 4.6,
        reviews: 210,
        specs: ["Open-ear comfort fit", "17x12mm custom driver", "LHDC high-definition codec"]
      }
    ]
  },
  "smart-home": {
    title: "Smart Home",
    slug: "smart-home",
    subCategories: [
      { name: "TV & Media", slug: "tv-media" },
      { name: "Cleaning & Vacuums", slug: "cleaning" },
      { name: "Kitchen & Living", slug: "kitchen-living" }
    ],
    featuredImage: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=600&q=80",
    featuredTitle: "Robot Vacuum X20+",
    featuredSubtitle: "All-in-one smart cleaning station. Auto Mop Washing & Self-Emptying.",
    products: [
      {
        id: "sh1",
        name: "Xiaomi TV S Pro 85\" Mini-LED",
        price: "$1,499",
        originalPrice: "$1,699",
        image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=400&q=80",
        badge: "144Hz Mini-LED",
        badgeColor: "bg-orange-500 text-white",
        category: "smart-home",
        subCategory: "tv-media",
        rating: 4.9,
        reviews: 180,
        specs: ["1440 Mini-LED Zones", "240Hz Gaming mode", "Dolby Vision IQ & Atmos"],
        description: "Cinematic masterpiece with breathtaking peak brightness and deep black contrast."
      },
      {
        id: "sh2",
        name: "Xiaomi Robot Vacuum X20+",
        price: "$699",
        originalPrice: "$799",
        image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=400&q=80",
        badge: "Top Rated",
        badgeColor: "bg-red-500 text-white",
        category: "smart-home",
        subCategory: "cleaning",
        rating: 4.9,
        reviews: 840,
        specs: ["6000Pa Powerful Suction", "Auto Mop Washing & Drying", "S-Cross AI Obstacle Avoidance"],
        description: "Hands-free automated cleaning station that cleans itself after cleaning your home."
      },
      {
        id: "sh3",
        name: "Xiaomi Truclean W10 Pro",
        price: "$449",
        image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=400&q=80",
        category: "smart-home",
        subCategory: "cleaning",
        rating: 4.7,
        reviews: 290,
        specs: ["3-in-1 Vacuum, Mop & Wash", "90-degree flat cleaning", "Innovative roller brush"]
      },
      {
        id: "sh4",
        name: "Xiaomi Smart Air Fryer 6.5L",
        price: "$129",
        originalPrice: "$149",
        image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=400&q=80",
        badge: "Smart App Control",
        badgeColor: "bg-emerald-600 text-white",
        category: "smart-home",
        subCategory: "kitchen-living",
        rating: 4.8,
        reviews: 1120,
        specs: ["360° Heated Convection", "Degrease feature", "24h Smart Scheduling via Mi Home"],
        description: "Cook healthy, crispy meals with smart temperature precision and smartphone control."
      },
      {
        id: "sh5",
        name: "Xiaomi Smart Air Purifier 4 Pro",
        price: "$299",
        image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=400&q=80",
        category: "smart-home",
        subCategory: "kitchen-living",
        rating: 4.8,
        reviews: 650,
        specs: ["8330L clean air per min", "Pet hair & allergen filter", "OLED real-time air display"]
      },
      {
        id: "sh6",
        name: "Xiaomi TV Box S (2nd Gen)",
        price: "$59",
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&q=80",
        category: "smart-home",
        subCategory: "tv-media",
        rating: 4.7,
        reviews: 1950,
        specs: ["4K Ultra HD Streaming", "Google TV OS", "Dolby Vision & HDR10+"]
      }
    ]
  },
  lifestyle: {
    title: "Lifestyle",
    slug: "lifestyle",
    subCategories: [
      { name: "Sports & Outdoor", slug: "sports" },
      { name: "Personal Care", slug: "personal-care" },
      { name: "Luggage & Tools", slug: "tools" }
    ],
    featuredImage: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=600&q=80",
    featuredTitle: "Electric Scooter 4 Ultra",
    featuredSubtitle: "Dual suspension system, 70km long range, and self-sealing tires.",
    products: [
      {
        id: "l1",
        name: "Xiaomi Electric Scooter 4 Ultra",
        price: "$899",
        originalPrice: "$999",
        image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=400&q=80",
        badge: "Dual Suspension",
        badgeColor: "bg-orange-500 text-white",
        category: "lifestyle",
        subCategory: "sports",
        rating: 4.9,
        reviews: 430,
        specs: ["70km Super Long Range", "Dual Suspension System", "940W Peak Power Motor"],
        description: "Conquer city streets with unmatched comfort, stability, and all-weather IP55 durability."
      },
      {
        id: "l2",
        name: "Xiaomi CyberDog 2 Bionic Robot",
        price: "$2,999",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=400&q=80",
        badge: "AI Bionic",
        badgeColor: "bg-purple-600 text-white",
        category: "lifestyle",
        subCategory: "sports",
        rating: 4.8,
        reviews: 45,
        specs: ["19 High-precision sensors", "AI Voice Interaction", "Open source development"]
      },
      {
        id: "l3",
        name: "Xiaomi High-Speed Hair Dryer",
        price: "$119",
        originalPrice: "$139",
        image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=400&q=80",
        badge: "110,000 RPM",
        badgeColor: "bg-pink-600 text-white",
        category: "lifestyle",
        subCategory: "personal-care",
        rating: 4.8,
        reviews: 820,
        specs: ["110,000 RPM Motor", "200M Negative Ions", "Smart temperature control"],
        description: "Fast drying in 2 minutes without extreme heat damage."
      },
      {
        id: "l4",
        name: "Xiaomi Electric Shaver S700",
        price: "$89",
        image: "https://images.unsplash.com/photo-1621607512214-68297480165e?auto=format&fit=crop&w=400&q=80",
        category: "lifestyle",
        subCategory: "personal-care",
        rating: 4.7,
        reviews: 310,
        specs: ["Zirconia Ceramic Blades", "360° Floating Head", "IPX7 Waterproof"]
      },
      {
        id: "l5",
        name: "Xiaomi Metal Carry-on Luggage 20\"",
        price: "$149",
        image: "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?auto=format&fit=crop&w=400&q=80",
        category: "lifestyle",
        subCategory: "tools",
        rating: 4.9,
        reviews: 540,
        specs: ["100% Aluminum-Magnesium Alloy", "TSA Approved Dual Locks", "360° Silent Spinner Wheels"]
      },
      {
        id: "l6",
        name: "Xiaomi Precision Screwdriver Kit",
        price: "$25",
        image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=400&q=80",
        badge: "Reddot Award",
        badgeColor: "bg-blue-600 text-white",
        category: "lifestyle",
        subCategory: "tools",
        rating: 4.9,
        reviews: 4120,
        specs: ["24 S2 Steel Precision Bits", "Magnetic Aluminum Case", "Ergonomic Handle"]
      }
    ]
  },
  poco: {
    title: "POCO",
    slug: "poco",
    subCategories: [
      { name: "POCO F Series", slug: "f-series" },
      { name: "POCO X Series", slug: "x-series" },
      { name: "POCO M Series", slug: "m-series" }
    ],
    featuredImage: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80",
    featuredTitle: "POCO F6 Pro 5G",
    featuredSubtitle: "HyperPower Evolved. Snapdragon® 8 Gen 2 & WQHD+ 120Hz Flow AMOLED.",
    products: [
      {
        id: "p1",
        name: "POCO F6 Pro 5G",
        price: "$499",
        originalPrice: "$549",
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=400&q=80",
        badge: "Flagship Killer",
        badgeColor: "bg-yellow-500 text-black font-bold",
        category: "poco",
        subCategory: "f-series",
        rating: 4.9,
        reviews: 740,
        specs: ["Snapdragon 8 Gen 2", "120W HyperCharge", "WQHD+ 4000 nits Flow AMOLED"],
        description: "Unleash unconstrained gaming and multitasking power with LiquidCool Technology 4.0."
      },
      {
        id: "p2",
        name: "POCO F6 5G",
        price: "$399",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80",
        badge: "New Release",
        badgeColor: "bg-orange-500 text-white",
        category: "poco",
        subCategory: "f-series",
        rating: 4.8,
        reviews: 512,
        specs: ["Snapdragon 8s Gen 3", "90W Turbo Charging", "CrystalRes 1.5K Flow AMOLED"]
      },
      {
        id: "p3",
        name: "POCO X6 Pro 5G",
        price: "$299",
        originalPrice: "$349",
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=400&q=80",
        badge: "Speed King",
        badgeColor: "bg-blue-600 text-white",
        category: "poco",
        subCategory: "x-series",
        rating: 4.8,
        reviews: 1250,
        specs: ["MediaTek Dimensity 8300-Ultra", "64MP OIS Triple Camera", "120Hz Flow AMOLED"],
        description: "Next-gen mid-range performance beast powered by HyperOS out of the box."
      },
      {
        id: "p4",
        name: "POCO X6 5G",
        price: "$249",
        image: "https://images.unsplash.com/photo-1567581935884-3349723552ca?auto=format&fit=crop&w=400&q=80",
        category: "poco",
        subCategory: "x-series",
        rating: 4.7,
        reviews: 680,
        specs: ["Snapdragon 7s Gen 2", "1800 nits Peak Brightness", "In-screen fingerprint sensor"]
      },
      {
        id: "p5",
        name: "POCO M6 Pro 5G",
        price: "$179",
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=400&q=80",
        badge: "Value Champ",
        badgeColor: "bg-emerald-600 text-white",
        category: "poco",
        subCategory: "m-series",
        rating: 4.7,
        reviews: 940,
        specs: ["120Hz FHD+ Display", "64MP OIS Camera", "67W Turbo Charging"]
      },
      {
        id: "p6",
        name: "POCO C65",
        price: "$119",
        image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=400&q=80",
        category: "poco",
        subCategory: "m-series",
        rating: 4.6,
        reviews: 810,
        specs: ["50MP AI Triple Camera", "5000mAh Massive Battery", "6.74\" Smooth 90Hz Display"]
      }
    ]
  }
};

export const ALL_PRODUCTS = Object.values(XIAOMI_CATEGORIES).flatMap(
  cat => cat.products
);

export const TRENDING_SEARCHES = [
  "Xiaomi 14 Ultra",
  "HyperOS 2.0",
  "POCO F6 Pro",
  "Watch S3 Bezel",
  "Electric Scooter 4 Ultra",
  "120W HyperCharge",
  "Smart Air Fryer",
  "Robot Vacuum X20+"
];

export const RECENT_SEARCHES = [
  "Redmi Pad Pro",
  "Xiaomi Buds 5 Pro",
  "Xiaomi TV S Pro 85\""
];

export const POPULAR_PRODUCTS = [
  XIAOMI_CATEGORIES.mobile.products[0], // 14 Ultra
  XIAOMI_CATEGORIES.wearables.products[0], // Watch S3
  XIAOMI_CATEGORIES["smart-home"].products[1], // Robot Vacuum
  XIAOMI_CATEGORIES.poco.products[0], // POCO F6 Pro
  XIAOMI_CATEGORIES.lifestyle.products[0], // Scooter 4 Ultra
  XIAOMI_CATEGORIES.mobile.products[4]  // Pad 6S Pro
];
