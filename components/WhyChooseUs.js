import { WhyChooseUsData } from "@/data/WhyChooseUsData";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
const WhyChooseUs = () => {
  return (
    <div id={"whychooseus"} className="py-[100px] px-[8%] text-dark">
      <div>
        <h1 className="xsm:text-[50px] text-[40px] text-center py-10 font-montserrat font-medium">
          Why Choose Us?
        </h1>
      </div>

      <div className="flex gap-3 flex-wrap justify-center font-lato">
        {WhyChooseUsData.map((items) => (
          <div
            key={items.id}
            className="bg-[#C0C0C0] p-[30px] md:w-[21rem] w-full rounded-md"
          >
            <div className="flex text-[#E5E4E2] justify-end text-[52px] font-black font-lato">
              {items.serialno}
            </div>
            <div className="font-black text-dark text-[25px]">
              {items.heading}
            </div>
            <div className="font-light text-dark leading-7 text-[15px]">
              {items.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
