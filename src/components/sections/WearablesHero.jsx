export const WearablesHero = ({
  title,
  subtitle,
  button,
  image
}) => {

  return (
    
    <section className="relative h-[600px] overflow-hidden">

  {/* Image */}
  <img
    src={image}
    alt={title}
    className="
      absolute
      inset-0
      w-full
      h-full
      object-cover
    "
  />


  {/* Text */}
  <div
    className="
      relative
      z-10
      h-full
      flex
      flex-col
      justify-center
      ml-20
      gap-4
    "
  >

    <h1 className="text-5xl font-semibold text-black">
      {title}
    </h1>

    <p className="text-2xl text-black">
      {subtitle}
    </p>

    <button
      className="
        w-[120px]
        h-[40px]
        rounded-xl
        bg-black
        text-white
      "
    >
      {button}
    </button>

  </div>

</section>
  )
}