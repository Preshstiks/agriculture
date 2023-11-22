import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
const Hero = () => {
  const textVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };
  return (
    <div>
      <div className="bg-black bg-opacity-30 h-full w-full">
        <Image
          className="w-full h-[40rem] object-cover mix-blend-overlay"
          src="/agro.png"
          width={1000}
          height={500}
        />
        <AnimatePresence>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center"
          >
            <h1 className="text-white mb-[10px] text-[50px] font-bold font-montserrat">
              Cultivating Growth, Harvesting Opportunities
            </h1>
            <p className="text-gray font-light font-lato px-[20%] text-center">
              Explore the fertile landscape of agriculture, agrotourism, and
              trade. Join us on a journey where innovation meets tradition,
              nurturing the fields of possibility.
            </p>
            <button className="py-4 px-6 mt-[60px] items-start bg-orange text-white font-montserrat text-sm font-medium hover:bg-opacity-70 rounded-md">
              DISCOVER MORE
            </button>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Hero;
