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
    <div className="bg-white bg-opacity-90 z-50 w-full fixed top-0 text-dark shadow-sm px-[8%]">
      <div className="flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/leaf.png" width={50} height={50} />
          <div className="font-bold leading-4 text-lime tracking-widest text-lg font-playfair">
            <h1>RENEWED</h1>
            <h1>HOPE</h1>
            <h1>INITIATIVE</h1>
          </div>
        </Link>
        <div className="flex gap-5 relative font-sans font-bold">
          <div className="relative">
            <div
              className="hover:text-orange py-7 hover:cursor-pointer select-none flex items-center"
              onMouseEnter={() => handleDropdownRH(true)}
              onMouseLeave={() => handleDropdownRH(false)}
            >
              <Link href="/">Home</Link>
            </div>
          </div>
          <div className="relative">
            <div
              className="hover:text-orange hover:cursor-pointer flex items-center py-7"
              onMouseEnter={() => handleDropdownRHI(true)}
              onMouseLeave={() => handleDropdownRHI(false)}
            >
              Services
              <IoMdArrowDropdown className="text-dark text-[20px]" />
            </div>
            {showDropdownRHI && (
              <div
                className="absolute top-[80px] bg-white w-[180px] px-2 shadow-md py-3"
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
                  <Link href="#">Trade Industry</Link>
                </div>
              </div>
            )}
          </div>
          <div className="hover:text-orange py-7 hover:cursor-pointer">
            Gallery
          </div>
          <div className="hover:text-orange py-7 hover:cursor-pointer">
            Testimonials
          </div>
          <div className="hover:text-orange py-7 hover:cursor-pointer">
            Contact
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
