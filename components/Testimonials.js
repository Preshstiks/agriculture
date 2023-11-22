import { TestimonialsData } from "@/data/TestimonialsData";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
const Testimonials = () => {
  return (
    <div id={"testimonials"} className="py-[100px] px-[8%] text-dark">
      <div>
        <h1 className="text-[50px] text-center py-10 font-montserrat font-medium">
          Testimonials
        </h1>
      </div>

      <div className="flex gap-3 flex-wrap font-lato">
        {TestimonialsData.map((items) => (
          <div
            key={items.id}
            className="bg-[#e9e9e9] p-[30px] w-full rounded-md"
          >
            <div className="flex gap-2 mb-3">
              {[...Array(items.ratingValue)].map((_, index) => (
                <FaStar
                  className="text-orange text-lg text-opacity-70"
                  key={index}
                />
              ))}
            </div>
            <div className="font-light leading-7 text-[15px]">
              {items.comments}
            </div>
            <div className="flex gap-3 mt-3">
              <div>
                <Image
                  src={items.img}
                  width={50}
                  height={50}
                  className="rounded-full h-12 w-12"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div>
                <div className="text-[15px] font-medium">{items.name}</div>
                <div className="text-[15px] font-light">{items.occupation}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
