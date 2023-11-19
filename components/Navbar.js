import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
const Navbar = () => {
  const [showDropdownRH, setShowDropdownRH] = useState(false);
  const [showDropdownRHI, setShowDropdownRHI] = useState(false);

  const handleDropdownRH = (value) => {
    setShowDropdownRH(value);
  };
  const handleDropdownRHI = (value) => {
    setShowDropdownRHI(value);
  };
  return (
    <div className="bg-white text-dark shadow-sm px-[8%]">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image src="/leaf.png" width={50} height={50} />
          <div className="font-bold leading-4 text-green tracking-widest text-lg font-playfair">
            <h1>RENEWED</h1>
            <h1>HOPE</h1>
            <h1>INITIATIVE</h1>
          </div>
        </div>
        <div className="flex gap-5 relative font-sans font-bold">
          <div className="relative">
            <div
              className="hover:text-orange py-7 hover:cursor-pointer flex items-center"
              onMouseEnter={() => handleDropdownRH(true)}
              onMouseLeave={() => handleDropdownRH(false)}
            >
              RH Initiative
              <IoMdArrowDropdown className="text-black text-[24px]" />
            </div>
            {showDropdownRH && (
              <div
                className="absolute top-[80px] w-[180px] px-2 shadow-md py-3"
                onMouseEnter={() => handleDropdownRH(true)}
                onMouseLeave={() => handleDropdownRH(false)}
              >
                <div className="py-3 hover:text-orange px-6">
                  <Link href="#">About Us</Link>
                </div>
                <div className="py-3 hover:text-orange px-6 border-t border-gray">
                  <Link href="#">Partners</Link>
                </div>
              </div>
            )}
          </div>
          <div className="relative">
            <div
              className="hover:text-orange hover:cursor-pointer flex items-center py-7"
              onMouseEnter={() => handleDropdownRHI(true)}
              onMouseLeave={() => handleDropdownRHI(false)}
            >
              RHI Programs
              <IoMdArrowDropdown className="text-black text-[24px]" />
            </div>
            {showDropdownRHI && (
              <div
                className="absolute top-[80px] w-[180px] px-2 shadow-md py-3"
                onMouseEnter={() => handleDropdownRHI(true)}
                onMouseLeave={() => handleDropdownRHI(false)}
              >
                <div className="py-3 hover:text-orange px-6">
                  <Link href="#">Agribusiness</Link>
                </div>
                <div className="py-3 hover:text-orange px-6 border-t border-gray">
                  <Link href="#">Agrotourism</Link>
                </div>
                <div className="py-3 hover:text-orange px-6 border-t border-gray">
                  <Link href="#">Art</Link>
                </div>
                <div className="py-3 hover:text-orange px-6 border-t border-gray">
                  <Link href="#">Culture</Link>
                </div>
                <div className="py-3 hover:text-orange px-6 border-t border-gray">
                  <Link href="#">Hospitality</Link>
                </div>
                <div className="py-3 hover:text-orange px-6 border-t border-gray">
                  <Link href="#">Trade Industry</Link>
                </div>
              </div>
            )}
          </div>
          <div className="hover:text-orange py-7 px-2 hover:cursor-pointer">
            Gallery
          </div>
          <div className="hover:text-orange py-7 px-2 hover:cursor-pointer">
            RH News
          </div>
          <div className="hover:text-orange py-7 px-2 hover:cursor-pointer">
            Contact
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
