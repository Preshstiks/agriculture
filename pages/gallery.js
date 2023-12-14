import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
const Gallery = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const gallery = [
    {
      img: "/group-1.png",
      head: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      img: "/group-2.png",
      head: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      img: "/group-3.png",
      head: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      img: "/group-4.png",
      head: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      img: "/group-5.png",
      head: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      img: "/group-6.png",
      head: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
  ];
  const openFullScreen = (index) => {
    setSelectedIndex(index);
  };

  const closeFullScreen = () => {
    setSelectedIndex(null);
  };
  return (
    <div className="py-[150px] px-[8%] font-lato relative">
      <div className="text-center">
        <h1 className="font-black text-dark sm:text-[50px] text-[40px]">
          Gallery
        </h1>
        <div className="h-[5px] w-[100px] rounded-full bg-lime mx-auto mt-[20px] mb-[30px]"></div>
      </div>
      {isLoading ? (
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {gallery.map((_, index) => (
            <div
              key={index}
              class="animate-pulse rounded-[0.375rem] h-64 flex bg-[#f5f5f5] p-5 space-x-4 mb-4 items-end"
            >
              <div class="flex-1 space-y-6 py-1">
                <div class="h-2 bg-[#dad9d9] rounded"></div>
                <div class="space-y-3">
                  <div class="grid grid-cols-3 gap-4">
                    <div class="h-2 bg-[#dad9d9] rounded col-span-2"></div>
                    <div class="h-2 bg-[#dad9d9] rounded col-span-1"></div>
                  </div>
                  <div class="h-2 bg-[#dad9d9] rounded"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {gallery.map((item, index) => (
            <motion.div
              key={index}
              className="h-64 box relative mb-5 hover:cursor-pointer"
              onClick={() => openFullScreen(index)}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.5 },
              }}
            >
              <Image
                src={item.img}
                layout="fill"
                objectFit="cover"
                alt={`Image ${index}`}
              />
              <motion.div
                className="text-container absolute inset-0 flex flex-col justify-end bg-black bg-opacity-0 p-3"
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
                style={{ zIndex: 2 }}
              >
                <h1 className="text-white font-bold text-[20px]">
                  {item.head}
                </h1>
                <p className="text-white text-sm">{item.text}</p>
              </motion.div>
              <motion.div
                className="absolute inset-0 bg-black bg-opacity-0"
                whileHover={{
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  transition: { duration: 0.8 },
                }}
                style={{ zIndex: 1 }}
              />
            </motion.div>
          ))}
          {selectedIndex !== null && (
            <div className="fixed top-0 left-0 z-50 w-full h-full bg-black flex justify-center items-center">
              <div className="max-w-screen-lg w-full hover:cursor-pointer">
                <Image
                  src={gallery[selectedIndex].img} // Set selected image src
                  alt={`Full Screen ${selectedIndex} - ${gallery[selectedIndex].text}`} // Set alt text
                  className="w-full"
                  width={1000}
                  height={1000}
                  objectFit="cover"
                  onClick={closeFullScreen}
                />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Gallery;
