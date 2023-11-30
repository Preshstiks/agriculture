import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
const Hero = () => {
  const textVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };
  const routes = [
    {
      link: "what-we-do",
      text: "DISCOVER MORE",
    },
  ];
  const overlayStyle = {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust opacity as needed (0.5 is 50%)
  };
  const heroStyle = {
    backgroundImage: "url('/agro.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    /* Add other background properties as needed */
  };
  return (
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
                Welcome to Silade Agro Clubs Ltd
              </h1>
              <p className="text-gray font-light font-lato leading-7 sm:px-[20%] sm:text-center text-left">
                A leading provider of Agribusiness solutions in Nigeria. We help
                urban gardeners, rural farmers, and agribusinesses thrive by
                providing access, tools, knowledge, and support for success.
              </p>
              <div className="mt-10 sm:text-center text-left">
                {routes.map((item, index) => (
                  <ScrollLink
                    key={index}
                    className="py-4 px-6 mt-[60px] items-start cursor-pointer bg-orange text-white font-montserrat text-sm font-medium hover:bg-opacity-70 rounded-md"
                    to={item.link}
                    smooth={true}
                    duration={500}
                  >
                    {item.text}
                  </ScrollLink>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div style={overlayStyle}></div>
      </section>
    </div>
  );
};

export default Hero;
