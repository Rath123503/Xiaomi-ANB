import facebookBanner from '../assets/images/facebookBanner.png';
import warrantyBanner from '../assets/images/warrantyBanner.png';
import accessibilityBanner from '../assets/images/accessibilityBanner.png';
import repairBanner from '../assets/images/repairBanner.png';
import esgBanner from '../assets/images/esgBanner.png';
import productRecall from '../assets/images/productRecall.png';
import scooterIcon from '../assets/images/scooterIcon.png';
import rfExposureIcon from '../assets/images/rfExposureIcon.png';
import docIcon from '../assets/images/docIcon.png';
import aersIcon from '../assets/images/aersIcon.png';
import contactUs from '../assets/images/contactUs.png';
import termsPolicy from '../assets/images/termsPolicy.png';
import aboutXiaomi from '../assets/images/aboutXiaomi.png';

export const quickLinks = [
  { id: 'ql-account', label: 'Account Service', icon: 'User' },
  { id: 'ql-find-device', label: 'Find My Device', icon: 'Smartphone' },
  { id: 'ql-warranty', label: 'Warranty Policy', icon: 'Wrench' },
  { id: 'ql-user-guide', label: 'User Guide', icon: 'Layers' },
];

export const recommendCards = [
  {
    id: 'rec-facebook',
    title: 'Xiaomi Support Facebook',
    desc: 'We at Xiaomi Support Global Official listen to your voice.',
    img: facebookBanner,
  },
  {
    id: 'rec-warranty',
    title: 'International Warranty Service',
    desc: 'Enjoy the warranty service at all available countries/regions',
    img: warrantyBanner,
  },
  {
    id: 'rec-accessibility',
    title: 'Accessibility',
    desc: 'Bridging the text divide to achieve information equality',
    img: accessibilityBanner,
  },
  {
    id: 'rec-repair',
    title: 'Xiaomi Self-Repair Service',
    desc: 'Repair your Xiaomi device yourself',
    img: repairBanner,
  },
  {
    id: 'rec-esg',
    title: 'Environmental Social Governance',
    desc: 'Xiaomi is committed to drive a more sustainable economy',
    img: esgBanner,
  },
];

export const linkCards = [
  {
    id: 'lc-scooter',
    title: 'Scooter Safety Notice',
    desc: 'Mi M365 Electric Scooter - Safety Notice',
    img: scooterIcon,
  },
  {
    id: 'lc-rf-exposure',
    title: 'RF Exposure',
    desc: 'For both Xiaomi and redmi phone',
    img: rfExposureIcon,
  },
  {
    id: 'lc-find-doc',
    title: 'Find DOC',
    desc: 'Declaration of conformity',
    img: docIcon,
  },
  {
    id: 'lc-check-aers',
    title: 'Check AERS',
    desc: 'Android Enterprise Recommended Smartphones',
    img: aersIcon,
  },
];

export const faqList = [
  { id: 'faq-1', question: 'What to do if the Google Messages App on the Xiaomi phone keeps popping up a blue window?' },
  { id: 'faq-2', question: 'What to do if system notifications keep appearing at the bottom of the Xiaomi phone\'s screen?' },
  { id: 'faq-3', question: 'Why does the Xiaomi smartphone fail to enable Dark mode?' },
  { id: 'faq-4', question: 'REDMI A7 FAQ' },
  { id: 'faq-5', question: 'Why doesn\'t my phone\'s lock screen display notifications?' },
  { id: 'faq-6', question: 'POCO C81 Pro FAQ' },
  { id: 'faq-7', question: 'Xiaomi 15T FAQ' },
];

export const supportImages = {
  productRecall,
  contactUs,
  termsPolicy,
  aboutXiaomi,
};
