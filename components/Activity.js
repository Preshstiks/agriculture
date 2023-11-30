import Link from "next/link";

const Activity = () => {
  return (
    <div className="text-center" id={"what-we-do"}>
      <div className="bg-green sm:px-0 px-[8%] sm:py-[150px] py-[80px] text-white">
        <div>
          <h1 className="sm:font-black sm:text-center text-left font-bold text-[45px] sm:text-[55px] tracking-wide font-montserrat">
            What We Do
          </h1>
        </div>
        <div className="sm:px-[20%] px-0 sm:text-center text-left font-light">
          <p className="leading-7 font-lato">
            Silade Agro Clubs Ltd is dedicated to fostering sustainable
            agribusiness solutions in Nigeria. They aim to support urban
            gardeners, rural farmers, and agribusinesses by providing access,
            tools, knowledge, and support for success. Their initiatives include
            promoting sustainable practices like organic farming and water
            conservation, supporting outgrowers and suppliers, ensuring food
            security, enhancing marketability of agro products, maintaining a
            knowledge-sharing platform, conserving natural resources, expanding
            market opportunities, and encouraging research and innovation within
            the agro industry.
          </p>
        </div>
        <div className="sm:mt-[60px] mt-[40px] sm:text-center text-left">
          <Link
            href="/gallery"
            className="py-4 px-6 mt-[60px] items-start bg-orange text-white font-montserrat text-sm font-medium hover:bg-opacity-70 rounded-md"
          >
            SEE OUR WORKS
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Activity;
