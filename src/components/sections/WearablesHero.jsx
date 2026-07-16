export const WearablesHero = ({ title, subtitle, button, image }) => {
  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/60 to-transparent md:from-white/70 md:via-white/30" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
          <div className="w-full lg:w-1/2">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black leading-tight">
              {title}
            </h1>

            <p className="mt-4 text-base sm:text-lg text-gray-700 max-w-xl">
              {subtitle}
            </p>

            <button className="mt-6 inline-flex items-center gap-3 rounded-xl bg-black px-6 py-3 text-sm font-medium text-white hover:bg-gray-900">
              {button}
            </button>
          </div>

          <div className="hidden lg:block lg:w-1/2">
            {/* optional visual balance; image already as background */}
          </div>
        </div>
      </div>
    </section>
  );
};
