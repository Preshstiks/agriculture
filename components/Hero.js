import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <div className="bg-black bg-opacity-30 h-full w-full">
        <Image
          className="w-full h-[40rem] object-cover mix-blend-overlay"
          src="/agro.png"
          width={1000}
          height={500}
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center">
          <h1 className="text-white mb-[10px] text-[50px] font-bold font-playfair">
            Cultivating Growth, Harvesting Opportunities
          </h1>
          <p className="text-gray font-light font-lato px-[20%] text-center">
            Explore the fertile landscape of agriculture, agrotourism, and
            trade. Join us on a journey where innovation meets tradition,
            nurturing the fields of possibility.
          </p>
          <button className="py-3 px-4 mt-[60px] items-start bg-green text-white font-montserrat font-medium hover:bg-opacity-0 border-2 rounded-lg border-green">
            DISCOVER MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
