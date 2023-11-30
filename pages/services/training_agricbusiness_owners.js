import { AnimatePresence, motion } from "framer-motion";
const Training = () => {
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
    backgroundImage: "url('/trade.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
  };
  return (
    <div>
      <section className="flex flex-col min-h-screen" style={heroStyle}>
        <div className="h-screen flex items-center sm:my-[70px] my-[150px] text-white px-[8%]">
          <AnimatePresence>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="text-center z-20"
            >
              <h1 className="mb-[10px] sm:text-center text-left sm:text-[40px] text-[35px] md:text-[50px] font-bold font-montserrat">
                Training of Agribusiness Owners on Ways to Generate Sustainable
                Incomes
              </h1>
              <p className="text-gray font-light leading-7 font-lato sm:px-[20%] sm:text-center text-left">
                Our Training Programs for Agribusiness Owners focus on
                sustainable income generation methods. We equip entrepreneurs
                within the agricultural community with strategies and knowledge
                vital for sustainable income generation, fostering growth and
                stability within the sector.
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
        <div style={overlayStyle}></div>
      </section>
    </div>
  );
};

export default Training;
