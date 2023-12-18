import { AnimatePresence, motion } from "framer-motion";
const InputSupply = () => {
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
    backgroundImage: "url('/input.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
  };
  return (
    <div>
      <div>
        <section className="flex flex-col min-h-screen" style={heroStyle}>
          <div className="h-screen flex items-center text-white sm:my-[70px] my-[150px] px-[8%]">
            <AnimatePresence>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className="text-center z-20"
              >
                <h1 className="mb-[10px] sm:text-center text-left sm:text-[40px] text-[35px] md:text-[50px] font-bold font-montserrat">
                  Inputs Supply
                </h1>
                <p className="text-gray font-light leading-7 font-lato sm:px-[20%] sm:text-center text-left">
                  At Silade Agro Clubs Ltd, we provide a diverse range of
                  high-quality agricultural inputs, including seeds, seedlings,
                  fertilizers, pesticides, and farm equipment. Sourced from
                  trusted suppliers, our products ensure competitive prices and
                  reliability for all agricultural needs.
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
          <div style={overlayStyle}></div>
        </section>
      </div>
    </div>
  );
};

export default InputSupply;
