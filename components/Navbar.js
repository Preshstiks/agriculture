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
      link: "whychooseus",
      text: "WHY CHOOSE US",
    },
  ];
  const scrollToWhyChooseUs = () => {
    router.push("/", undefined, { shallow: true }).then(() => {
      setTimeout(() => {
        const whyChooseUsOffset =
          document.getElementById("whychooseus").offsetTop;
        window.scrollTo({ top: whyChooseUsOffset, behavior: "smooth" });
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
    <div className="bg-white bg-opacity-90 md:py-0 select-none z-50 w-full fixed top-0 text-dark shadow-sm px-[8%]">
      <div className="flex justify-between py-2 items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" width={100} height={100} />
        </Link>
        <div className="md:hidden block uppercase">
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
              <div className="w-full">
                <Link
                  className="py-4 font-bold hover:text-orange inline-block w-full"
                  onClick={() => handleShowMenu(false)}
                  href="/"
                >
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
                    className="px-2 py-3 uppercase"
                    onMouseEnter={() => handleShowServices(true)}
                    onMouseLeave={() => handleShowServices(false)}
                  >
                    <div className="w-full">
                      <Link
                        onClick={() => handleShowMenu(false)}
                        className="py-3 hover:text-orange px-6 w-full inline-block"
                        href="/services/agric_training_&_consultancy"
                      >
                        Agricultural Training and Consultancy
                      </Link>
                    </div>
                    <div className="w-full">
                      <Link
                        onClick={() => handleShowMenu(false)}
                        className="py-3 hover:text-orange px-6 border-t border-gray w-full inline-block"
                        href="/services/farm_mgt"
                      >
                        Farm Management
                      </Link>
                    </div>
                    <div
                      onClick={() => handleShowMenu(false)}
                      className="py-3 hover:text-orange px-6 border-t border-gray w-full inline-block"
                    >
                      <Link href="/services/training_agricbusiness_owners">
                        Training of Agribusiness Owners on Ways to Generate
                        Sustainable Incomes
                      </Link>
                    </div>
                    <div className="w-full">
                      <Link
                        href="/services/inputs_supply"
                        onClick={() => handleShowMenu(false)}
                        className="py-3 hover:text-orange px-6 border-t border-gray w-full inline-block"
                      >
                        Inputs Supply
                      </Link>
                    </div>
                    <div className="w-full">
                      <Link
                        href="/services/market_linkage
                      "
                        onClick={() => handleShowMenu(false)}
                        className="py-3 hover:text-orange px-6 border-t border-gray w-full inline-block"
                      >
                        Market Linkage
                      </Link>
                    </div>
                    <div className="w-full">
                      <Link
                        href="/services/agritourism
                      "
                        onClick={() => handleShowMenu(false)}
                        className="py-3 hover:text-orange px-6 border-t border-gray w-full inline-block"
                      >
                        Agri-Tourism
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              <div className="w-full">
                <Link
                  href="/gallery"
                  onClick={() => handleShowMenu(false)}
                  className="py-4 font-bold w-full inline-block hover:text-orange"
                >
                  Gallery
                </Link>
              </div>
              {routes.map((item, index) => (
                <div key={index} className="w-full">
                  {isHomePage ? (
                    <ScrollLink
                      key={index}
                      className="py-4 hover:text-orange cursor-pointer w-full inline-block font-bold"
                      to={item.link}
                      onClick={() => handleShowMenu(false)}
                      smooth={true}
                      duration={500}
                    >
                      {item.text}
                    </ScrollLink>
                  ) : (
                    <div
                      className="hover:text-orange py-4 cursor-pointer font-bold"
                      onClick={scrollToWhyChooseUs}
                    >
                      {item.text}
                    </div>
                  )}
                </div>
              ))}
              <div className="w-full">
                <Link
                  className="hover:text-orange py-4 font-bold w-full inline-block"
                  onClick={() => handleShowMenu(false)}
                  href="/contact"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          )}
        </div>
        <div className="md:gap-5 relative uppercase font-lato text-sm font-bold md:flex hidden">
          <Link
            className="hover:text-orange py-2 relative hover:cursor-pointer select-none"
            href="/"
          >
            Home
          </Link>
          <div className="relative">
            <div
              className="hover:text-orange py-2 hover:cursor-pointer flex items-center"
              onMouseEnter={() => handleShowServices(true)}
              onMouseLeave={() => handleShowServices(false)}
            >
              Services
              <IoMdArrowDropdown className="text-dark text-[20px]" />
            </div>
            {showServices && (
              <div
                className="absolute top-[34px] bg-white w-[300px] px-2 shadow-md py-3"
                onMouseEnter={() => handleShowServices(true)}
                onMouseLeave={() => handleShowServices(false)}
              >
                <Link
                  href="/services/agric_training_&_consultancy"
                  onClick={() => handleShowServices(false)}
                  className="py-3 hover:text-orange px-6 w-full inline-block"
                >
                  Agricultural Training and Consultancy
                </Link>
                <Link
                  href="/services/farm_mgt"
                  onClick={() => handleShowServices(false)}
                  className="py-3 hover:text-orange px-6 border-t w-full border-gray inline-block"
                >
                  Farm Management
                </Link>
                <Link
                  href="/services/training_agricbusiness_owners"
                  onClick={() => handleShowServices(false)}
                  className="py-3 hover:text-orange px-6 border-t w-full border-gray inline-block"
                >
                  Training of Agribusiness Owners on Ways to Generate
                  Sustainable Incomes
                </Link>
                <Link
                  onClick={() => handleShowServices(false)}
                  className="py-3 hover:text-orange px-6 border-t w-full border-gray inline-block"
                  href="/services/inputs_supply"
                >
                  Inputs Supply
                </Link>
                <Link
                  onClick={() => handleShowServices(false)}
                  className="py-3 hover:text-orange px-6 border-t border-gray w-full inline-block"
                  href="/services/market_linkage"
                >
                  Market Linkage
                </Link>
                <Link
                  href="/services/agritourism"
                  onClick={() => handleShowServices(false)}
                  className="py-3 hover:text-orange px-6 border-t w-full border-gray inline-block"
                >
                  Agri-Tourism
                </Link>
              </div>
            )}
          </div>
          <div className="hover:cursor-pointer py-2">
            <Link className="py-2 hover:text-orange" href="/gallery">
              Gallery
            </Link>
          </div>
          {routes.map((item, index) => (
            <div key={index} className="py-2">
              {isHomePage ? (
                <ScrollLink
                  key={index}
                  className=" hover:text-orange cursor-pointer"
                  to={item.link}
                  smooth={true}
                  duration={500}
                >
                  {item.text}
                </ScrollLink>
              ) : (
                <div
                  className="hover:text-orange cursor-pointer"
                  onClick={scrollToWhyChooseUs}
                >
                  {item.text}
                </div>
              )}
            </div>
          ))}
          <div className="py-2 hover:cursor-pointer">
            <Link className="py-2 hover:text-orange" href="/contact">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
