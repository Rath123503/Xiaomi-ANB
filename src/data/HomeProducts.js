import { mobileCategory } from './mobileProducts';
// import { wearablesCategory } from './wearablesProducts';
// import { smartHomeCategory } from './SmartHome';

export const XIAOMI_CATEGORIES = {
  mobile: mobileCategory,
  // wearables: wearablesCategory,
  // "smart-home": smartHomeCategory,
};

export const ALL_PRODUCTS = Object.values(XIAOMI_CATEGORIES).flatMap(
  (cat) => cat.products
);

export const TRENDING_SEARCHES = [
  "Xiaomi 14 Ultra",
  "HyperOS 2.0",
  "POCO F6 Pro",
  "Watch S3 Bezel",
  "Electric Scooter 4 Ultra",
  "120W HyperCharge",
  "Smart Air Fryer",
  "Robot Vacuum X20+",
];

export const RECENT_SEARCHES = [
  "Redmi Pad Pro",
  "Xiaomi Buds 5 Pro",
  "Xiaomi TV S Pro 85\"",
];

// Only pull from categories that actually exist right now.
// Add wearables/smart-home/poco/lifestyle lines back in as you build those pages.
export const POPULAR_PRODUCTS = [
  XIAOMI_CATEGORIES.mobile.products.find((p) => p.id === "m0") || XIAOMI_CATEGORIES.mobile.products[0],
  XIAOMI_CATEGORIES.mobile.products.find((p) => p.id === "m5") || XIAOMI_CATEGORIES.mobile.products[5],
].filter(Boolean);