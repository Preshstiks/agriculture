import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const Agribusiness = () => {
  const textVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };
  return (
    <div>
      <div className="bg-black bg-opacity-30 h-full w-full">
        <Image
          className="w-full h-[40rem] object-cover mix-blend-overlay"
          src="/agric.png"
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
              Agribusiness
            </h1>
            <p className="text-gray font-light font-lato px-[20%] text-center">
              Experience the full spectrum of agriculture services geared to
              optimize growth, from customized solutions to boost productivity
              to environmentally friendly practices. Investigate our suite of
              services, which incorporate cutting-edge technologies to improve
              nations' food security and environmental sustainability.
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Agribusiness;
