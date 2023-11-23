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
      {/* <div className="bg-black bg-opacity-30 h-full w-full">
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
            <h1 className="text-center text-white mb-[10px] sm:text-[40px] text-[35px] md:text-[50px] font-bold font-montserrat">
              Cultivating Growth, Harvesting Opportunities
            </h1>
            <p className="text-gray font-light font-lato px-[20%] text-center">
              Explore the fertile landscape of agriculture, agrotourism, and
              trade. Join us on a journey where innovation meets tradition,
              nurturing the fields of possibility.
            </p>
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
          </motion.div>
        </AnimatePresence>
      </div> */}
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
                Cultivating Growth, Harvesting Opportunities
              </h1>
              <p className="text-gray font-light font-lato px-[20%] text-center">
                Explore the fertile landscape of agriculture, agrotourism, and
                trade. Join us on a journey where innovation meets tradition,
                nurturing the fields of possibility.
              </p>
              <div className="mt-10">
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
