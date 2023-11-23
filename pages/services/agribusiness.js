import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const Agribusiness = () => {
  const textVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };
  const overlayStyle = {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust opacity as needed (0.5 is 50%)
  };
  const heroStyle = {
    backgroundImage: "url('/agric.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    /* Add other background properties as needed */
  };
  return (
    <div>
      <section className="flex flex-col min-h-screen" style={heroStyle}>
        <div className="h-screen flex items-center text-white px-[8%]">
          <AnimatePresence>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="text-center z-20"
            >
              <h1 className="mb-[10px] text-center sm:text-[40px] text-[35px] md:text-[50px] font-bold font-montserrat">
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
        <div style={overlayStyle}></div>
      </section>
    </div>
  );
};

export default Agribusiness;
