import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../../components/layout/Navbar/Navbar';
import { Footer } from '../../components/layout/Footer/Footer';
import { SmartHomeHeroCarousel } from '../../components/Smart/SmartHomecarousel';
import { tvsAndHAProducts, vacuumCleanersProducts, environmentApplianceProducts, kitchenApplianceProducts, cookingAppliancesProducts, smartLightingProducts, homeSecurityProducts } from '../../data/SmartHome';

/* ============================================================
   TVs & HA (Xiaomi / Mijia) — now the only product section
   on this page. Cards enlarged to match the "big" TV card
   size used previously in the Smart Home section.
   ============================================================ */

const tvsHaCardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: index * 0.05, ease: 'easeOut' },
  }),
};

const TvsHaCard = ({ product, index, size }) => {
  const { name, tagline, image } = product;
  const isLarge = size === 'large';

  return (
    <motion.article
      className={`group flex w-full flex-col items-center justify-start bg-white p-[27px] text-center ${
        isLarge ? 'h-[380px] sm:h-[460px] lg:h-[516.97px]' : 'h-[340px] sm:h-[420px] lg:h-[516.97px]'
      }`}
      variants={tvsHaCardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      custom={index}
    >
      <h3 className={`font-bold text-gray-900 ${isLarge ? 'text-xl sm:text-2xl' : 'text-base sm:text-xl'}`}>
        {name}
      </h3>
      <p className={`mt-2 text-gray-500 ${isLarge ? 'text-sm sm:text-base' : 'text-xs sm:text-sm'}`}>
        {tagline}
      </p>

      {/* Learn more is a static button with no click action.
          Styled to match the Environment Appliance section's button. */}
      <button
        type="button"
        aria-label={`Learn more about ${name}`}
        className="mt-4 rounded-lg bg-black px-6 py-1.5 text-sm font-Regular text-white transition-colors duration-300 hover:bg-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
      >
        Learn more
      </button>

      <div className="mt-6 flex w-full flex-1 items-center justify-center overflow-hidden">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="max-h-full max-w-full object-contain transition-transform duration-300 ease-out group-hover:scale-105"
        />
      </div>
    </motion.article>
  );
};

/* "All Products" is the closing card in the small-card row — no image,
   just a heading and a circular arrow link, matching the new layout. */
const AllProductsCard = ({ index, onViewAll }) => (
  <motion.article
    className="flex h-[340px] w-full flex-col items-center justify-center gap-4 bg-white p-[27px] text-center sm:h-[420px] lg:h-[516.97px]"
    variants={tvsHaCardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    custom={index}
  >
    <h3 className="text-lg font-bold text-gray-900 sm:text-xl">All Products</h3>
    <button
      type="button"
      onClick={onViewAll}
      aria-label="View all products"
      className="flex h-11 w-11 items-center justify-center rounded-lg border-2 border-orange-500 text-orange-500 transition-colors duration-300 hover:bg-orange-500 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </svg>
    </button>
  </motion.article>
);

const TvsAndHASection = () => {
  const largeProducts = tvsAndHAProducts.filter((p) => p.size === 'large');
  const smallProducts = tvsAndHAProducts.filter((p) => p.size === 'small').slice(0, 3);

  return (
    <section className="w-full bg-[#F5F5F5]">
      <div className="flex flex-col items-center py-14 text-center">
        <h1 className="text-2xl font-bold tracking-wide text-gray-900 sm:text-[28px]">
          TVs &amp; HA
        </h1>
        <button
          type="button"
          className="mt-4 rounded-lg bg-black px-6 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
        >
          More
        </button>
      </div>

      {/* Full-bleed, edge-to-edge grid — hairline gaps show the page
          background through, matching the reference screenshot. */}
      <div className="grid grid-cols-1 gap-[2px] bg-[#F5F5F5] sm:grid-cols-2">
        {largeProducts.map((product, index) => (
          <TvsHaCard key={product.id} product={product} index={index} size="large" />
        ))}
      </div>

      <div className="mt-[2px] grid grid-cols-2 gap-[2px] bg-[#F5F5F5] lg:grid-cols-4">
        {smallProducts.map((product, index) => (
          <TvsHaCard key={product.id} product={product} index={index} size="small" />
        ))}
        <AllProductsCard index={smallProducts.length} />
      </div>
    </section>
  );
};
/* ============================================================
   END TVs & HA
   ============================================================ */

/* ============================================================
   ADDED SECTION — Vacuum Cleaners (Xiaomi / Mijia)
   ============================================================ */

const VacuumCard = ({ product, index, size }) => {
  const { name, tagline, image } = product;
  const isLarge = size === 'large';

  return (
    <motion.article
      className={`group flex w-full flex-col items-center justify-start bg-white p-[27px] text-center ${
        isLarge ? 'h-[380px] sm:h-[460px] lg:h-[516.97px]' : 'h-[340px] sm:h-[420px] lg:h-[516.97px]'
      }`}
      variants={tvsHaCardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      custom={index}
    >
      <h3 className={`font-bold text-gray-900 ${isLarge ? 'text-xl sm:text-2xl' : 'text-base sm:text-xl'}`}>
        {name}
      </h3>
      <p className={`mt-2 text-gray-500 ${isLarge ? 'text-sm sm:text-base' : 'text-xs sm:text-sm'}`}>
        {tagline}
      </p>

      {/* Learn more is a static button with no click action.
          Styled to match the Environment Appliance section's button. */}
      <button
        type="button"
        aria-label={`Learn more about ${name}`}
        className="mt-4 rounded-lg bg-black px-6 py-1.5 text-sm font-Regular text-white transition-colors duration-300 hover:bg-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
      >
        Learn more
      </button>

      <div className="mt-6 flex w-full flex-1 items-center justify-center overflow-hidden">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="max-h-full max-w-full object-contain transition-transform duration-300 ease-out group-hover:scale-105"
        />
      </div>
    </motion.article>
  );
};

/* "All Products" closing card, same pattern as the TVs & HA row */
const AllVacuumsCard = ({ index, onViewAll }) => (
  <motion.article
    className="flex h-[340px] w-full flex-col items-center justify-center gap-4 bg-white p-[27px] text-center sm:h-[420px] lg:h-[516.97px]"
    variants={tvsHaCardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    custom={index}
  >
    <h3 className="text-lg font-bold text-gray-900 sm:text-xl">All Products</h3>
    <button
      type="button"
      onClick={onViewAll}
      aria-label="View all products"
      className="flex h-11 w-11 items-center justify-center rounded-lg border-2 border-orange-500 text-orange-500 transition-colors duration-300 hover:bg-orange-500 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </svg>
    </button>
  </motion.article>
);

const VacuumCleanersSection = () => {
  const largeProducts = vacuumCleanersProducts.filter((p) => p.size === 'large');
  const smallProducts = vacuumCleanersProducts.filter((p) => p.size === 'small').slice(0, 3);

  return (
    <section className="w-full bg-[#F5F5F5]">
      <div className="flex flex-col items-center py-14 text-center">
        <h1 className="text-2xl font-bold tracking-wide text-gray-900 sm:text-[28px]">
          Vacuum Cleaners
        </h1>
        <button
          type="button"
          className="mt-4 rounded-lg bg-black px-6 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
        >
          More
        </button>
      </div>

      {/* Full-bleed, edge-to-edge grid — matches the TVs & HA section above */}
      <div className="grid grid-cols-1 gap-[2px] bg-[#F5F5F5] sm:grid-cols-2">
        {largeProducts.map((product, index) => (
          <VacuumCard key={product.id} product={product} index={index} size="large" />
        ))}
      </div>

      <div className="mt-[2px] grid grid-cols-2 gap-[2px] bg-[#F5F5F5] lg:grid-cols-4">
        {smallProducts.map((product, index) => (
          <VacuumCard key={product.id} product={product} index={index} size="small" />
        ))}
        <AllVacuumsCard index={smallProducts.length} />
      </div>
    </section>
  );
};
/* ============================================================
   END Vacuum Cleaners
   ============================================================ */

/* ============================================================
   ADDED SECTION — Environment Appliance (Xiaomi / Mijia)
   ============================================================ */

const EnvironmentApplianceCard = ({ product, index, size }) => {
  const { name, tagline, image } = product;
  const isLarge = size === 'large';

  return (
    <motion.article
      className={`group flex w-full flex-col items-center justify-start bg-white p-[27px] text-center ${
        isLarge ? 'h-[380px] sm:h-[460px] lg:h-[516.97px]' : 'h-[340px] sm:h-[420px] lg:h-[516.97px]'
      }`}
      variants={tvsHaCardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      custom={index}
    >
      <h3 className={`font-bold text-gray-900 ${isLarge ? 'text-xl sm:text-2xl' : 'text-base sm:text-xl'}`}>
        {name}
      </h3>
      <p className={`mt-2 text-gray-500 ${isLarge ? 'text-sm sm:text-base' : 'text-xs sm:text-sm'}`}>
        {tagline}
      </p>

      {/* Learn more is a static button with no click action.
          Styled to match the hero carousel's Learn more button exactly. */}
      <button
        type="button"
        aria-label={`Learn more about ${name}`}
        className="mt-4 rounded-lg bg-black px-6 py-1.5 text-sm font-Regular text-white transition-colors duration-300 hover:bg-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
      >
        Learn more
      </button>

      <div className="mt-6 flex w-full flex-1 items-center justify-center overflow-hidden">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="max-h-full max-w-full object-contain transition-transform duration-300 ease-out group-hover:scale-105"
        />
      </div>
    </motion.article>
  );
};

/* "All Products" closing card, same pattern as the sections above */
const AllEnvironmentApplianceCard = ({ index, onViewAll }) => (
  <motion.article
    className="flex h-[340px] w-full flex-col items-center justify-center gap-4 bg-white p-[27px] text-center sm:h-[420px] lg:h-[516.97px]"
    variants={tvsHaCardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    custom={index}
  >
    <h3 className="text-lg font-bold text-gray-900 sm:text-xl">All Products</h3>
    <button
      type="button"
      onClick={onViewAll}
      aria-label="View all products"
      className="flex h-11 w-11 items-center justify-center rounded-lg border-2 border-orange-500 text-orange-500 transition-colors duration-300 hover:bg-orange-500 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </svg>
    </button>
  </motion.article>
);

const EnvironmentApplianceSection = () => {
  const largeProducts = environmentApplianceProducts.filter((p) => p.size === 'large');
  const smallProducts = environmentApplianceProducts.filter((p) => p.size === 'small').slice(0, 3);

  return (
    <section className="w-full bg-[#F5F5F5]">
      <div className="flex flex-col items-center py-14 text-center">
        <h1 className="text-2xl font-bold tracking-wide text-gray-900 sm:text-[28px]">
          Environment Appliance
        </h1>
        <button
          type="button"
          className="mt-4 rounded-lg bg-black px-6 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
        >
          More
        </button>
      </div>

      {/* Full-bleed, edge-to-edge grid — 3 large cards across the top row,
          matching the reference screenshot. */}
      <div className="grid grid-cols-1 gap-[2px] bg-[#F5F5F5] sm:grid-cols-3">
        {largeProducts.map((product, index) => (
          <EnvironmentApplianceCard key={product.id} product={product} index={index} size="large" />
        ))}
      </div>

      <div className="mt-[2px] grid grid-cols-2 gap-[2px] bg-[#F5F5F5] lg:grid-cols-4">
        {smallProducts.map((product, index) => (
          <EnvironmentApplianceCard key={product.id} product={product} index={index} size="small" />
        ))}
        <AllEnvironmentApplianceCard index={smallProducts.length} />
      </div>
    </section>
  );
};
/* ============================================================
   END Environment Appliance
   ============================================================ */

/* ============================================================
   ADDED SECTION — Kitchen Appliance (Xiaomi / Mijia)
   ============================================================ */

const KitchenApplianceCard = ({ product, index, size }) => {
  const { name, tagline, image } = product;
  const isLarge = size === 'large';

  return (
    <motion.article
      className={`group flex w-full flex-col items-center justify-start bg-white p-[27px] text-center ${
        isLarge ? 'h-[380px] sm:h-[460px] lg:h-[516.97px]' : 'h-[340px] sm:h-[420px] lg:h-[516.97px]'
      }`}
      variants={tvsHaCardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      custom={index}
    >
      <h3 className={`font-bold text-gray-900 ${isLarge ? 'text-xl sm:text-2xl' : 'text-base sm:text-xl'}`}>
        {name}
      </h3>
      <p className={`mt-2 text-gray-500 ${isLarge ? 'text-sm sm:text-base' : 'text-xs sm:text-sm'}`}>
        {tagline}
      </p>

      {/* Learn more is a static button with no click action.
          Styled to match the Environment Appliance section's button. */}
      <button
        type="button"
        aria-label={`Learn more about ${name}`}
        className="mt-4 rounded-lg bg-black px-6 py-1.5 text-sm font-Regular text-white transition-colors duration-300 hover:bg-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
      >
        Learn more
      </button>

      <div className="mt-6 flex w-full flex-1 items-center justify-center overflow-hidden">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="max-h-full max-w-full object-contain transition-transform duration-300 ease-out group-hover:scale-105"
        />
      </div>
    </motion.article>
  );
};

/* "All Products" closing card, same pattern as the sections above */
const AllKitchenApplianceCard = ({ index, onViewAll }) => (
  <motion.article
    className="flex h-[340px] w-full flex-col items-center justify-center gap-4 bg-white p-[27px] text-center sm:h-[420px] lg:h-[516.97px]"
    variants={tvsHaCardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    custom={index}
  >
    <h3 className="text-lg font-bold text-gray-900 sm:text-xl">All Products</h3>
    <button
      type="button"
      onClick={onViewAll}
      aria-label="View all products"
      className="flex h-11 w-11 items-center justify-center rounded-lg border-2 border-orange-500 text-orange-500 transition-colors duration-300 hover:bg-orange-500 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </svg>
    </button>
  </motion.article>
);

const KitchenApplianceSection = () => {
  const largeProducts = kitchenApplianceProducts.filter((p) => p.size === 'large');
  const smallProducts = kitchenApplianceProducts.filter((p) => p.size === 'small').slice(0, 3);

  return (
    <section className="w-full bg-[#F5F5F5]">
      <div className="flex flex-col items-center py-14 text-center">
        <h1 className="text-2xl font-bold tracking-wide text-gray-900 sm:text-[28px]">
          Kitchen Appliance
        </h1>
        <button
          type="button"
          className="mt-4 rounded-lg bg-black px-6 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
        >
          More
        </button>
      </div>

      {/* Full-bleed, edge-to-edge grid — 3 large cards across the top row,
          matching the Environment Appliance section above. */}
      <div className="grid grid-cols-1 gap-[2px] bg-[#F5F5F5] sm:grid-cols-3">
        {largeProducts.map((product, index) => (
          <KitchenApplianceCard key={product.id} product={product} index={index} size="large" />
        ))}
      </div>

      <div className="mt-[2px] grid grid-cols-2 gap-[2px] bg-[#F5F5F5] lg:grid-cols-4">
        {smallProducts.map((product, index) => (
          <KitchenApplianceCard key={product.id} product={product} index={index} size="small" />
        ))}
        <AllKitchenApplianceCard index={smallProducts.length} />
      </div>
    </section>
  );
};
/* ============================================================
   END Kitchen Appliance
   ============================================================ */

/* ============================================================
   ADDED SECTION — Cooking Appliances (Xiaomi / Mijia)
   ============================================================ */

const CookingApplianceCard = ({ product, index, size }) => {
  const { name, tagline, image } = product;
  const isLarge = size === 'large';

  return (
    <motion.article
      className={`group flex w-full flex-col items-center justify-start bg-white p-[27px] text-center ${
        isLarge ? 'h-[380px] sm:h-[460px] lg:h-[516.97px]' : 'h-[340px] sm:h-[420px] lg:h-[516.97px]'
      }`}
      variants={tvsHaCardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      custom={index}
    >
      <h3 className={`font-bold text-gray-900 ${isLarge ? 'text-xl sm:text-2xl' : 'text-base sm:text-xl'}`}>
        {name}
      </h3>
      <p className={`mt-2 text-gray-500 ${isLarge ? 'text-sm sm:text-base' : 'text-xs sm:text-sm'}`}>
        {tagline}
      </p>

      {/* Learn more is a static button with no click action.
          Styled to match the Environment Appliance section's button. */}
      <button
        type="button"
        aria-label={`Learn more about ${name}`}
        className="mt-4 rounded-lg bg-black px-6 py-1.5 text-sm font-Regular text-white transition-colors duration-300 hover:bg-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
      >
        Learn more
      </button>

      <div className="mt-6 flex w-full flex-1 items-center justify-center overflow-hidden">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="max-h-full max-w-full object-contain transition-transform duration-300 ease-out group-hover:scale-105"
        />
      </div>
    </motion.article>
  );
};

/* "All Products" closing card, same pattern as the sections above */
const AllCookingAppliancesCard = ({ index, onViewAll }) => (
  <motion.article
    className="flex h-[340px] w-full flex-col items-center justify-center gap-4 bg-white p-[27px] text-center sm:h-[420px] lg:h-[516.97px]"
    variants={tvsHaCardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    custom={index}
  >
    <h3 className="text-lg font-bold text-gray-900 sm:text-xl">All Products</h3>
    <button
      type="button"
      onClick={onViewAll}
      aria-label="View all products"
      className="flex h-11 w-11 items-center justify-center rounded-lg border-2 border-orange-500 text-orange-500 transition-colors duration-300 hover:bg-orange-500 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </svg>
    </button>
  </motion.article>
);

const CookingAppliancesSection = () => {
  const largeProducts = cookingAppliancesProducts.filter((p) => p.size === 'large');
  const smallProducts = cookingAppliancesProducts.filter((p) => p.size === 'small');

  return (
    <section className="w-full bg-[#F5F5F5]">
      <div className="flex flex-col items-center py-14 text-center">
        <h1 className="text-2xl font-bold tracking-wide text-gray-900 sm:text-[28px]">
          Cooking Appliances
        </h1>
        <button
          type="button"
          className="mt-4 rounded-lg bg-black px-6 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
        >
          More
        </button>
      </div>

      {/* Full-bleed, edge-to-edge grid — 2 large cards across the top row,
          matching the TVs & HA section layout. */}
      <div className="grid grid-cols-1 gap-[2px] bg-[#F5F5F5] sm:grid-cols-2">
        {largeProducts.map((product, index) => (
          <CookingApplianceCard key={product.id} product={product} index={index} size="large" />
        ))}
      </div>

      <div className="mt-[2px] grid grid-cols-2 gap-[2px] bg-[#F5F5F5] lg:grid-cols-4">
        {smallProducts.map((product, index) => (
          <CookingApplianceCard key={product.id} product={product} index={index} size="small" />
        ))}
        <AllCookingAppliancesCard index={smallProducts.length} />
      </div>
    </section>
  );
};
/* ============================================================
   END Cooking Appliances
   ============================================================ */

/* ============================================================
   ADDED SECTION — Smart Lightings (Xiaomi / Mijia)
   ============================================================ */

const SmartLightingCard = ({ product, index, size }) => {
  const { name, tagline, image } = product;
  const isLarge = size === 'large';

  return (
    <motion.article
      className={`group flex w-full flex-col items-center justify-start bg-white p-[27px] text-center ${
        isLarge ? 'h-[380px] sm:h-[460px] lg:h-[516.97px]' : 'h-[340px] sm:h-[420px] lg:h-[516.97px]'
      }`}
      variants={tvsHaCardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      custom={index}
    >
      <h3 className={`font-bold text-gray-900 ${isLarge ? 'text-xl sm:text-2xl' : 'text-base sm:text-xl'}`}>
        {name}
      </h3>
      <p className={`mt-2 text-gray-500 ${isLarge ? 'text-sm sm:text-base' : 'text-xs sm:text-sm'}`}>
        {tagline}
      </p>

      {/* Learn more is a static button with no click action.
          Styled to match the Environment Appliance section's button. */}
      <button
        type="button"
        aria-label={`Learn more about ${name}`}
        className="mt-4 rounded-lg bg-black px-6 py-1.5 text-sm font-Regular text-white transition-colors duration-300 hover:bg-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
      >
        Learn more
      </button>

      <div className="mt-6 flex w-full flex-1 items-center justify-center overflow-hidden">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="max-h-full max-w-full object-contain transition-transform duration-300 ease-out group-hover:scale-105"
        />
      </div>
    </motion.article>
  );
};

/* "All Products" closing card, same pattern as the sections above */
const AllSmartLightingCard = ({ index, onViewAll }) => (
  <motion.article
    className="flex h-[340px] w-full flex-col items-center justify-center gap-4 bg-white p-[27px] text-center sm:h-[420px] lg:h-[516.97px]"
    variants={tvsHaCardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    custom={index}
  >
    <h3 className="text-lg font-bold text-gray-900 sm:text-xl">All Products</h3>
    <button
      type="button"
      onClick={onViewAll}
      aria-label="View all products"
      className="flex h-11 w-11 items-center justify-center rounded-lg border-2 border-orange-500 text-orange-500 transition-colors duration-300 hover:bg-orange-500 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </svg>
    </button>
  </motion.article>
);

const SmartLightingSection = () => {
  const largeProducts = smartLightingProducts.filter((p) => p.size === 'large');
  const smallProducts = smartLightingProducts.filter((p) => p.size === 'small').slice(0, 3);

  return (
    <section className="w-full bg-[#F5F5F5]">
      <div className="flex flex-col items-center py-14 text-center">
        <h1 className="text-2xl font-bold tracking-wide text-gray-900 sm:text-[28px]">
          Smart Lightings
        </h1>
        <button
          type="button"
          className="mt-4 rounded-lg bg-black px-6 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
        >
          More
        </button>
      </div>

      {/* Full-bleed, edge-to-edge grid — 3 large cards across the top row,
          matching the Environment Appliance section layout. */}
      <div className="grid grid-cols-1 gap-[2px] bg-[#F5F5F5] sm:grid-cols-3">
        {largeProducts.map((product, index) => (
          <SmartLightingCard key={product.id} product={product} index={index} size="large" />
        ))}
      </div>

      <div className="mt-[2px] grid grid-cols-2 gap-[2px] bg-[#F5F5F5] lg:grid-cols-4">
        {smallProducts.map((product, index) => (
          <SmartLightingCard key={product.id} product={product} index={index} size="small" />
        ))}
        <AllSmartLightingCard index={smallProducts.length} />
      </div>
    </section>
  );
};
/* ============================================================
   END Smart Lightings
   ============================================================ */

/* ============================================================
   ADDED SECTION — Home Security (Xiaomi / Mijia)
   ============================================================ */

const HomeSecurityCard = ({ product, index, size }) => {
  const { name, tagline, image } = product;
  const isLarge = size === 'large';

  return (
    <motion.article
      className={`group flex w-full flex-col items-center justify-start bg-white p-[27px] text-center ${
        isLarge ? 'h-[380px] sm:h-[460px] lg:h-[516.97px]' : 'h-[340px] sm:h-[420px] lg:h-[516.97px]'
      }`}
      variants={tvsHaCardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      custom={index}
    >
      <h3 className={`font-bold text-gray-900 ${isLarge ? 'text-xl sm:text-2xl' : 'text-base sm:text-xl'}`}>
        {name}
      </h3>
      <p className={`mt-2 text-gray-500 ${isLarge ? 'text-sm sm:text-base' : 'text-xs sm:text-sm'}`}>
        {tagline}
      </p>

      {/* Learn more is a static button with no click action.
          Styled to match the Environment Appliance section's button. */}
      <button
        type="button"
        aria-label={`Learn more about ${name}`}
        className="mt-4 rounded-lg bg-black px-6 py-1.5 text-sm font-Regular text-white transition-colors duration-300 hover:bg-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
      >
        Learn more
      </button>

      <div className="mt-6 flex w-full flex-1 items-center justify-center overflow-hidden">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="max-h-full max-w-full object-contain transition-transform duration-300 ease-out group-hover:scale-105"
        />
      </div>
    </motion.article>
  );
};

/* "All Products" closing card, same pattern as the sections above */
const AllHomeSecurityCard = ({ index, onViewAll }) => (
  <motion.article
    className="flex h-[340px] w-full flex-col items-center justify-center gap-4 bg-white p-[27px] text-center sm:h-[420px] lg:h-[516.97px]"
    variants={tvsHaCardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    custom={index}
  >
    <h3 className="text-lg font-bold text-gray-900 sm:text-xl">All Products</h3>
    <button
      type="button"
      onClick={onViewAll}
      aria-label="View all products"
      className="flex h-11 w-11 items-center justify-center rounded-lg border-2 border-orange-500 text-orange-500 transition-colors duration-300 hover:bg-orange-500 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </svg>
    </button>
  </motion.article>
);

const HomeSecuritySection = () => {
  const largeProducts = homeSecurityProducts.filter((p) => p.size === 'large');
  const smallProducts = homeSecurityProducts.filter((p) => p.size === 'small').slice(0, 3);

  return (
    <section className="w-full bg-[#F5F5F5]">
      <div className="flex flex-col items-center py-14 text-center">
        <h1 className="text-2xl font-bold tracking-wide text-gray-900 sm:text-[28px]">
          Home Security
        </h1>
        <button
          type="button"
          className="mt-4 rounded-lg bg-black px-6 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
        >
          More
        </button>
      </div>

      {/* Full-bleed, edge-to-edge grid — 3 large cards across the top row,
          matching the Environment Appliance section layout. */}
      <div className="grid grid-cols-1 gap-[2px] bg-[#F5F5F5] sm:grid-cols-3">
        {largeProducts.map((product, index) => (
          <HomeSecurityCard key={product.id} product={product} index={index} size="large" />
        ))}
      </div>

      <div className="mt-[2px] grid grid-cols-2 gap-[2px] bg-[#F5F5F5] lg:grid-cols-4">
        {smallProducts.map((product, index) => (
          <HomeSecurityCard key={product.id} product={product} index={index} size="small" />
        ))}
        <AllHomeSecurityCard index={smallProducts.length} />
      </div>
    </section>
  );
};
/* ============================================================
   END Home Security
   ============================================================ */

export const SmartHome = ({
  onSelectProduct,
  onAddToCart,
  onOpenAuthModal,
  onOpenCartModal,
  cartCount,
}) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar rendered inside page */}
      <Navbar
        onSelectProduct={onSelectProduct}
        onOpenAuthModal={onOpenAuthModal}
        onOpenCartModal={onOpenCartModal}
        cartCount={cartCount}
      />

      <SmartHomeHeroCarousel onSelectProduct={onSelectProduct} />

      <TvsAndHASection />

      <VacuumCleanersSection />

      <EnvironmentApplianceSection />

      <KitchenApplianceSection />

      <CookingAppliancesSection />

      <SmartLightingSection />

      <HomeSecuritySection />

      {/* Footer rendered inside page */}
      <Footer />
    </div>
  );
};

export default SmartHome;