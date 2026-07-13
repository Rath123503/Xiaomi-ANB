import heroWatch from "../assets/images/herowatch.webp";
import watch1 from "../assets/images/watch1.png";
import watch3 from "../assets/images/watch3.webp";

export const wearablesCategory = {
  featuredTitle: "Xiaomi Watch S6",
  featuredSubtitle: "Your style, on time",
  featuredButton: "Learn More",
  featuredImage: heroWatch,
};

export const wearablesProducts = [
  {
    id: 1,
    name: "Xiaomi Watch 5",
    subtitle: "Smarter every time",
    description: "",
    image: watch1,
    isNew: true,
    link: "/product/xiaomi-watch-5"
  },
  {
    id: 2,
    name: "Xiaomi Watch S4",
    subtitle: "41mm AMOLED display",
    description: "41mm AMOLED display with a slim, elegant design",
    image: watch1,
    isNew: false,
    link: "/product/xiaomi-watch-s4"
  },
  {
    id: 3,
    name: "Redmi Watch 5",
    subtitle: "Ultra-thin bezel AMOLED display",
    description: "",
    image: watch3,
    isNew: false,
    link: "/product/redmi-watch-5"
  }
];

// export const wearablesCategory = {
//   title: "Wearables",
//   slug: "wearables",

//   featuredImage: heroWatch,

//   featuredTitle: "Smart Watch",

//   featuredSubtitle:
//     "Smart technology that fits your lifestyle.",

//   products: [],
// };