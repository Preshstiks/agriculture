import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link as ScrollLink } from "react-scroll";
import { useRouter } from "next/router";
import { TiThMenu } from "react-icons/ti";
import { FaPlus } from "react-icons/fa6";
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
  const [showMenu, setShowMenu] = useState(false);

  const handleShowServices = (value) => {
    setShowServices(value);
  };
  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="bg-white bg-opacity-90 py-5 md:py-0 select-none z-50 w-full uppercase fixed top-0 text-dark shadow-sm px-[8%]">
      <div className="flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/leaf.png" width={50} height={50} />
          <div className="font-black leading-4 text-lime tracking-[5px] text-md font-montserrat">
            <h1>RENEWED</h1>
            <h1>HOPE</h1>
            <h1>INITIATIVE</h1>
          </div>
        </Link>
        <div className="md:hidden block">
          {showMenu ? (
            <FaPlus
              className="text-[25px] transform rotate-[45deg] text-green"
              onClick={() => handleShowMenu()}
            />
          ) : (
            <TiThMenu
              className="text-[25px] text-green"
              onClick={() => handleShowMenu()}
            />
          )}
          {showMenu && (
            <div className="bg-gray w-full top-[97px] left-0 right-0 font-lato absolute h-auto px-6 py-8 md:relative">
              <div
                className="py-4 font-bold"
                onClick={() => handleShowMenu(false)}
              >
                <Link className="hover:text-orange" href="/">
                  Home
                </Link>
              </div>
              <div className="py-4 font-bold">
                <div
                  onMouseEnter={() => handleShowServices(true)}
                  onMouseLeave={() => handleShowServices(false)}
                >
                  <div className="flex gap-2 cursor-pointer items-center hover:text-orange justify-between">
                    Services
                    <IoMdArrowDropdown className="text-dark text-[20px]" />
                  </div>
                </div>
                {showServices && (
                  <div
                    className="px-2 py-3"
                    onMouseEnter={() => handleShowServices(true)}
                    onMouseLeave={() => handleShowServices(false)}
                  >
                    <div
                      onClick={() => handleShowMenu(false)}
                      className="py-3 hover:text-orange px-6"
                    >
                      <Link href="/services/agribusiness">Agribusiness</Link>
                    </div>
                    <div
                      onClick={() => handleShowMenu(false)}
                      className="py-3 hover:text-orange px-6 border-t border-gray"
                    >
                      <Link href="/services/agrotourism">Agrotourism</Link>
                    </div>
                    <div
                      onClick={() => handleShowMenu(false)}
                      className="py-3 hover:text-orange px-6 border-t border-gray"
                    >
                      <Link href="/services/trade-industry">
                        Trade Industry
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              <div
                onClick={() => handleShowMenu(false)}
                className="py-4 font-bold"
              >
                <Link className="hover:text-orange" href="/gallery">
                  Gallery
                </Link>
              </div>
              {routes.map((item, index) => (
                <div
                  key={index}
                  className="py-4 font-bold"
                  onClick={() => handleShowMenu(false)}
                >
                  {isHomePage ? (
                    <ScrollLink
                      key={index}
                      className="py-4 hover:text-orange cursor-pointer"
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
              <div
                onClick={() => handleShowMenu(false)}
                className="py-4 font-bold"
              >
                <Link className="hover:text-orange" href="/contact">
                  Contact Us
                </Link>
              </div>
            </div>
          )}
        </div>

        <div className="md:gap-5 relative font-lato text-sm font-bold md:flex hidden">
          <div className="relative">
            <div className=" hover:cursor-pointer select-none flex items-center">
              <Link className="hover:text-orange py-9" href="/">
                Home
              </Link>
            </div>
          </div>
          <div className="relative">
            <div
              className="hover:text-orange hover:cursor-pointer flex items-center py-9"
              onMouseEnter={() => handleShowServices(true)}
              onMouseLeave={() => handleShowServices(false)}
            >
              Services
              <IoMdArrowDropdown className="text-dark text-[20px]" />
            </div>
            {showServices && (
              <div
                className="absolute top-[92.5px] bg-white w-[180px] px-2 shadow-md py-3"
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
          <div className="hover:cursor-pointer py-9">
            <Link className="hover:text-orange py-9 " href="/gallery">
              Gallery
            </Link>
          </div>
          {routes.map((item, index) => (
            <div key={index} className="py-9">
              {isHomePage ? (
                <ScrollLink
                  key={index}
                  className="py-9 hover:text-orange cursor-pointer"
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
          <div className="hover:cursor-pointer py-9">
            <Link className="hover:text-orange py-9" href="/contact">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
