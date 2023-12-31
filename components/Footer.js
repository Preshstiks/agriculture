import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { useRouter } from "next/router";
import { PiPhoneCallFill } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";
const Footer = () => {
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
  return (
    <div className="bg-dark select-none font-lato font-bold text-white px-[8%] py-[100px]">
      <div className="flex md:flex-row flex-col justify-between md:items-center">
        <div className="md:pb-0 pb-6">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" width={100} height={100} />
          </Link>
          <div className="font-lato pt-6 md:block hidden">
            <span className="text-sm font-light">
              © 2023, Silade Agro Clubs Ltd. All rights reserved.
            </span>
          </div>
        </div>

        <div className="text-sm font-light font-lato md:pb-0 pb-6">
          <div className="py-3 hover:text-orange">
            <Link href="/">HOME</Link>
          </div>
          <div className="py-3 hover:text-orange">
            <Link href="/gallery">GALLERY</Link>
          </div>
          {routes.map((item, index) => (
            <div key={index} className="py-3">
              {isHomePage ? (
                <ScrollLink
                  className="hover:text-orange cursor-pointer"
                  to={item.link}
                  spy={true}
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
          <div className="py-3 hover:text-orange">
            <Link href="/contact">CONTACT US</Link>
          </div>
        </div>
        <div className="font-lato text-md font-light md:pb-0 pb-6">
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
      <div className="font-lato md:hidden block py-3 text-center">
        <span className="text-sm font-light">
          © 2023, Renewed Hope Initiative. All rights reserved.
        </span>
      </div>
    </div>
  );
};

export default Footer;
