import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const TradeIndustry = () => {
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
        <div className="h-screen flex items-center ssm:mt-0 mt-[70px] text-white px-[8%]">
          <AnimatePresence>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="text-center z-20"
            >
              <h1 className="mb-[10px] text-center sm:text-[40px] text-[35px] md:text-[50px] font-bold font-montserrat">
                Trade Industry
              </h1>
              <p className="text-gray font-light leading-7 font-lato px-[20%] text-center">
                Set out on a tour via our integrated global trade network,
                boosting cross-border relationships. Our strategic alliances and
                efficient trade solutions connect producers to varied markets
                throughout the world, assuring a continuous flow of quality
                harvests to meet global demand.
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
        <div style={overlayStyle}></div>
      </section>
    </div>
  );
};

export default TradeIndustry;
