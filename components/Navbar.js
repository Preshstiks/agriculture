import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link as ScrollLink } from "react-scroll";
import { useRouter } from "next/router";
const Navbar = () => {
  const router = useRouter();
  const isHomePage = router.pathname === "/";
  const routes = [
    {
      link: "testimonials",
      text: "TESTIMONIALS",
    },
  ];
  const scrollToTestimonials = () => {
    router.push("/", undefined, { shallow: true }).then(() => {
      setTimeout(() => {
        const testimonialsOffset =
          document.getElementById("testimonials").offsetTop;
        window.scrollTo({ top: testimonialsOffset, behavior: "smooth" });
      }, 100);
    });
  };
  const [showServices, setShowServices] = useState(false);

  const handleShowServices = (value) => {
    setShowServices(value);
  };
  return (
    <div className="bg-white bg-opacity-90 z-50 w-full uppercase fixed top-0 text-dark shadow-sm px-[8%]">
      <div className="flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/leaf.png" width={50} height={50} />
          <div className="font-black leading-4 text-lime tracking-[5px] text-md font-montserrat">
            <h1>RENEWED</h1>
            <h1>HOPE</h1>
            <h1>INITIATIVE</h1>
          </div>
        </Link>
        <div className="flex gap-5 relative font-lato text-sm font-bold">
          <div className="relative">
            <div className=" hover:cursor-pointer select-none flex items-center">
              <Link className="hover:text-orange py-7" href="/">
                Home
              </Link>
            </div>
          </div>
          <div className="relative">
            <div
              className="hover:text-orange hover:cursor-pointer flex items-center py-7"
              onMouseEnter={() => handleShowServices(true)}
              onMouseLeave={() => handleShowServices(false)}
            >
              Services
              <IoMdArrowDropdown className="text-dark text-[20px]" />
            </div>
            {showServices && (
              <div
                className="absolute top-[77px] bg-white w-[180px] px-2 shadow-md py-3"
                onMouseEnter={() => handleShowServices(true)}
                onMouseLeave={() => handleShowServices(false)}
              >
                <div
                  onClick={() => handleShowServices(false)}
                  className="py-3 hover:text-orange px-6"
                >
                  <Link href="/services/agribusiness">Agribusiness</Link>
                </div>
                <div
                  onClick={() => handleShowServices(false)}
                  className="py-3 hover:text-orange px-6 border-t border-gray"
                >
                  <Link href="/services/agrotourism">Agrotourism</Link>
                </div>
                <div
                  onClick={() => handleShowServices(false)}
                  className="py-3 hover:text-orange px-6 border-t border-gray"
                >
                  <Link href="/services/trade-industry">Trade Industry</Link>
                </div>
              </div>
            )}
          </div>
          <div className="hover:cursor-pointer py-7">
            <Link className="hover:text-orange py-7 " href="/gallery">
              Gallery
            </Link>
          </div>
          {routes.map((item, index) => (
            <div className="py-7">
              {isHomePage ? (
                <ScrollLink
                  className="py-7 hover:text-orange cursor-pointer"
                  to={item.link}
                  smooth={true}
                  duration={500}
                >
                  {item.text}
                </ScrollLink>
              ) : (
                <div
                  className="hover:text-orange cursor-pointer"
                  onClick={scrollToTestimonials}
                >
                  {item.text}
                </div>
              )}
            </div>
          ))}
          <div className="hover:cursor-pointer py-7">
            <Link className="hover:text-orange py-7 " href="/contact">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
