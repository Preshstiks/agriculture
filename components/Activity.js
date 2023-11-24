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
            We nurture agricultural growth, optimize supply chains, and promote
            sustainability at Renewed Hope Initiative. We welcome exploration of
            rural life and farm-to-table experiences by embracing agrotourism.
            Furthermore, our trading knowledge enables frictionless transactions
            across multiple agricultural markets, assuring global success for
            stakeholders.
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
