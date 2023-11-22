import Image from "next/image";
import Link from "next/link";
import { IoMdMailOpen } from "react-icons/io";
import { PiPhoneCallFill } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="bg-dark font-lato font-bold text-white px-[8%] py-[100px]">
      <div className="flex justify-between items-center">
        <div>
          <Link href="/" className="flex items-center gap-2">
            <Image src="/leaf.png" width={50} height={50} />
            <div className="font-black leading-4 text-lime tracking-[5px] text-md font-montserrat">
              <h1>RENEWED</h1>
              <h1>HOPE</h1>
              <h1>INITIATIVE</h1>
            </div>
          </Link>
          <div className="font-lato py-3">
            <span className="text-sm font-light">
              © 2023, Renewed Hope Initiative. All rights reserved.
            </span>
          </div>
        </div>

        <div className="text-sm font-light font-lato">
          <div className="py-3 hover:text-orange">
            <Link href="/">HOME</Link>
          </div>
          <div className="py-3 hover:text-orange">
            <Link href="/gallery">GALLERY</Link>
          </div>
          <div className="py-3 hover:text-orange">
            <Link href="#">TESTIMONIALS</Link>
          </div>
          <div className="py-3 hover:text-orange">
            <Link href="/contact">CONTACT US</Link>
          </div>
        </div>
        <div className="font-lato text-md font-light">
          <div className="flex items-center gap-2 py-3">
            <PiPhoneCallFill className="text-[20px]" />
            <span>+234 8123456789</span>
          </div>
          <div className="flex items-center gap-2 py-3">
            <FaLocationDot className="text-[20px]" />
            <span>Abuja, Nigeria</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
