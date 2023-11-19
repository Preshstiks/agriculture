import Image from "next/image";

const Hero = () => {
  return (
    <div className="h-full">
      <div className="absolute inset-0 z-10">
        <Image
          className="w-full h-full"
          src="/agro.png"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-20 z-20 flex flex-col items-center justify-center">
        <h1 className="text-white mb-[10px] text-[50px] font-bold font-playfair">
          Cultivating Growth, Harvesting Opportunities
        </h1>
        <p className="text-gray font-light font-lato">
          Explore the fertile landscape of agriculture, agrotourism, and trade.
          Join us on a journey where innovation meets tradition, nurturing the
          fields of possibility.
        </p>
        <button className="py-3 px-4 mt-[60px] bg-green text-white font-montserrat font-medium hover:bg-opacity-0 border-2 border-green">
          DISCOVER MORE
        </button>
      </div>
    </div>
  );
};

export default Hero;
