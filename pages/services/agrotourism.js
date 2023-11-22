import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const Agrotourism = () => {
  const textVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };
  return (
    <div>
      <div className="bg-black bg-opacity-30 h-full w-full">
        <Image
          className="w-full h-[40rem] object-cover mix-blend-overlay"
          src="/agro-tou.png"
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
              Agrotourism
            </h1>
            <p className="text-gray font-light font-lato px-[20%] text-center">
              Discover the essence of rural life by taking advantage of our
              agrotourism options. Participate in hands-on activities to learn
              about local communities' stories, cuisines, and vibrant
              traditions. Immerse yourself in guided tours and seminars that
              expose our regions' agricultural lifeblood.
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Agrotourism;
