import Image from "next/image";
import { IoMdArrowDropdown } from "react-icons/io";
const Navbar = () => {
  return (
    <div className="bg-white shadow-sm py-6 px-[8%]">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image src="/leaf.png" width={50} height={50} />
          <div className="font-bold leading-4 text-green tracking-widest text-lg font-playfair">
            <h1>RENEWED</h1>
            <h1>HOPE</h1>
            <h1>INITIATIVE</h1>
          </div>
        </div>
        <div className="flex gap-5 font-sans font-bold">
          <div className="hover:text-orange hover:cursor-pointer flex items-center">
            RH Initiative
            <IoMdArrowDropdown className="text-black text-[24px]" />
          </div>
          <div className="hover:text-orange hover:cursor-pointer flex items-center">
            RHI Programs
            <IoMdArrowDropdown className="text-black text-[24px]" />
          </div>
          <div className="hover:text-orange hover:cursor-pointer">Gallery</div>
          <div className="hover:text-orange hover:cursor-pointer">RH News</div>
          <div className="hover:text-orange hover:cursor-pointer">Contact</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
