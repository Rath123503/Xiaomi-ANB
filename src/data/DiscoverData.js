// Article Images
import imgSu7Ultra from "./images/article_su7_ultra.png";
import imgApecPrivacy from "./images/article_apec_privacy.png";
import imgEunEducation from "./images/article_eun_education.png";
import imgPopRun from "./images/article_pop_run.png";
import imgAiGlasses from "./images/article_ai_glasses.png";
import imgRedmiNote14 from "./images/article_redmi_note_14.png";

// Video Images
import imgVideoTelephotoMaster from "./images/video_telephoto_master.png";
import imgVideo17tSeries from "./images/video_17t_series.png";
import imgVideoMijiaAirCond from "./images/video_mijia_air_conditioner.png";
import imgVideoWatchS5 from "./images/video_watch_s5.png";
import imgVideoScooter from "./images/video_scooter_power_your_ride.png";
import imgVideoMasterOfNight from "./images/video_master_of_night.png";

// Newsroom Images
import imgNewsSkynomad from "./images/newsroom_skynomad.png";
import imgNewsIfa from "./images/newsroom_ifa.png";
import imgNewsYu7gt from "./images/newsroom_yu7gt.png";
import imgNewsWearables from "./images/newsroom_wearables.png";
import imgNewsAppliances from "./images/newsroom_appliances.png";

// Reused assets from Recommended / other sections
import img6 from "./images/image copy 6.png"; // fallback or original

export const RECOMMENDED_DATA = [
  {
    id: "rec1",
    category: "Innovation",
    title: "Xiaomi EV Unveils SkyNomad, an Intelligent, Reconfigurable, Large-Space SUV Series",
    description: "Complementing the driving-focused Xiaomi Series, SkyNomad debuts Xiaomi Kunlun Architecture, enabling a cabin that adapts across how you drive, work, and live.",
    image: imgNewsSkynomad,
    date: "07/09/2026",
    views: "6120",
    type: "article"
  },
  {
    id: "rec2",
    category: "Corporate",
    title: "Xiaomi Previews Its IFA 2026 Debut and Reinforces Long-Term Commitment to Europe",
    description: "Xiaomi today joined the official IFA Kick-Off in Berlin, reaffirming its long-term commitment to Europe and confirming that it will make its first appearance at IFA this September.",
    image: imgNewsIfa,
    date: "06/30/2026",
    views: "3018",
    type: "article"
  },
  {
    id: "rec3",
    category: "Innovation",
    title: "Xiaomi EV Sets World's First Official Autonomous Driving Lap at Nürburgring Nordschleife",
    description: "Xiaomi YU7 GT with Track Package records 10:29.483 driverless lap; Nürburgring establishes new official autonomous driving category for electric vehicles.",
    image: imgNewsYu7gt,
    date: "06/23/2026",
    views: "4347",
    type: "article"
  },
  {
    id: "rec4",
    category: "Photography",
    title: "The Telephoto Master",
    description: "",
    image: img6,
    date: "05/28/2026",
    views: "1717",
    type: "video"
  }
];

export const ARTICLES_DATA = [
  {
    id: "art1",
    category: "Innovation",
    title: "Xiaomi SU7 Ultra Prototype, new record!",
    description: "Breaking the lap record, becoming the fastest four-door car in Nürburgring Nordschleife history",
    image: imgSu7Ultra,
    date: "03/28/2026",
    views: "110355",
    type: "article"
  },
  {
    id: "art2",
    category: "Security",
    title: "Xiaomi Adds APEC and Global CBPR Certifications, Reinforcing Its Commitment to User Privacy",
    description: "Xiaomi Technologies Singapore was awarded the Asia-Pacific Economic Cooperation's (APEC) Cross-Border Privacy Rules (CBPR) certification and the Global Cross-Border Privacy Rules (CBPR) certification.",
    image: imgApecPrivacy,
    date: "11/28/2025",
    views: "1920",
    type: "article"
  },
  {
    id: "art3",
    category: "Charity",
    title: "Xiaomi and EUN: empowering digital access",
    description: "Aligned with International Day of Charity, Xiaomi advances inclusive digital access for underserved schools in Europe",
    image: imgEunEducation,
    date: "09/05/2025",
    views: "6193",
    type: "article"
  },
  {
    id: "art4",
    category: "Community",
    title: "Run for one cause, health for all",
    description: "From 16 countries, 30,000 hearts beat for health.",
    image: imgPopRun,
    date: "08/27/2025",
    views: "2634",
    type: "article"
  },
  {
    id: "art5",
    category: "Innovation",
    title: "Smarter vision starts here",
    description: "Imagine glasses that think, adapt and immerse you - Xiaomi's first pair of AI Glasses redefine daily living.",
    image: imgAiGlasses,
    date: "07/04/2025",
    views: "83694",
    type: "article"
  },
  {
    id: "art6",
    category: "Smartphones",
    title: "Redmi Note 14 Series shines in Sand Gold",
    description: "Curved lines and golden hues blend elegance and strength in every detail",
    image: imgRedmiNote14,
    date: "06/26/2025",
    views: "8849",
    type: "article"
  }
];

export const VIDEOS_DATA = [
  {
    id: "vid1",
    category: "Photography",
    title: "The Telephoto Master",
    description: "",
    image: imgVideoTelephotoMaster,
    date: "05/28/2026",
    views: "1717",
    type: "video"
  },
  {
    id: "vid2",
    category: "Photography",
    title: "Xiaomi 17T Series",
    description: "",
    image: imgVideo17tSeries,
    date: "05/28/2026",
    views: "1072",
    type: "video"
  },
  {
    id: "vid3",
    category: "Appliance",
    title: "Mijia Air Conditioner Gentle Air",
    description: "",
    image: imgVideoMijiaAirCond,
    date: "05/28/2026",
    views: "565",
    type: "video"
  },
  {
    id: "vid4",
    category: "Wearables",
    title: "Xiaomi Watch S5 46mm",
    description: "",
    image: imgVideoWatchS5,
    date: "05/28/2026",
    views: "608",
    type: "video"
  },
  {
    id: "vid5",
    category: "Lifestyle",
    title: "Power your ride. Own every moment.",
    description: "",
    image: imgVideoScooter,
    date: "03/26/2026",
    views: "2053",
    type: "video"
  },
  {
    id: "vid6",
    category: "Photography",
    title: "Master of night",
    description: "",
    image: imgVideoMasterOfNight,
    date: "03/26/2026",
    views: "1468",
    type: "video"
  }
];

export const NEWSROOM_DATA = [
  {
    id: "news1",
    category: "Innovation",
    title: "Xiaomi EV Unveils SkyNomad, an Intelligent, Reconfigurable, Large-Space SUV Series",
    description: "Complementing the driving-focused Xiaomi Series, SkyNomad debuts Xiaomi Kunlun Architecture, enabling a cabin that adapts across how you drive, work, and live.",
    image: imgNewsSkynomad,
    date: "07/09/2026",
    views: "6146",
    type: "news"
  },
  {
    id: "news2",
    category: "Corporate",
    title: "Xiaomi Previews Its IFA 2026 Debut and Reinforces Long-Term Commitment to Europe",
    description: "Xiaomi today joined the official IFA Kick-Off in Berlin, reaffirming its long-term commitment to Europe and confirming that it will make its first appearance at IFA this September.",
    image: imgNewsIfa,
    date: "06/30/2026",
    views: "3057",
    type: "news"
  },
  {
    id: "news3",
    category: "Innovation",
    title: "Xiaomi EV Sets World's First Official Autonomous Driving Lap at Nürburgring Nordschleife",
    description: "Xiaomi YU7 GT with Track Package records 10:29.483 driverless lap; Nürburgring establishes new official autonomous driving category for electric vehicles.",
    image: imgNewsYu7gt,
    date: "06/23/2026",
    views: "4623",
    type: "news"
  },
  {
    id: "news4",
    category: "Photography",
    title: "Xiaomi Unveils Xiaomi 17T Series, Bringing Dual Sizes, Telephoto Capabilities Across the Lineup, and Leica Live Moment",
    description: "Xiaomi today unveiled the latest additions to its T Series smartphone lineup with the brand new Xiaomi 17T Series, including Xiaomi 17T and Xiaomi 17T Pro.",
    image: imgVideo17tSeries,
    date: "05/28/2026",
    views: "3120",
    type: "news"
  },
  {
    id: "news5",
    category: "Wearables",
    title: "Xiaomi Launches Next-Gen Wearable Products, Elevating Premium Lifestyle Ecosystem",
    description: "Xiaomi today introduced its latest ecosystem lineup to global markets, expanding its portfolio with four new products: Xiaomi Watch S5 46mm, Xiaomi Smart Band 10 Pro, Xiaomi Buds 6, and Xiaomi Sound Play.",
    image: imgNewsWearables,
    date: "05/28/2026",
    views: "6046",
    type: "news"
  },
  {
    id: "news6",
    category: "Appliances",
    title: "Xiaomi Unveils Five Smart Tech Appliances, Including Major Appliances, TV, and Robot Vacuum",
    description: "Xiaomi today unveiled its new Smart Tech Appliances lineup for the global market, including new TVs, air conditioners, a refrigerator, a washer-dryer, and a robot vacuum.",
    image: imgNewsAppliances,
    date: "05/28/2026",
    views: "2010",
    type: "news"
  }
];

export const EVENTS_DATA = [
  {
    id: "ev1",
    category: "Launch",
    title: "Xiaomi Autumn Launch Event 2026",
    description: "Register now to witness the reveal of the next generation of foldable flagships and smart home intelligence systems.",
    image: imgNewsSkynomad,
    date: "Coming Sept 2026",
    views: "12,980",
    type: "event"
  }
];

export default RECOMMENDED_DATA;
