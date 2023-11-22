import Link from "next/link";

const Activity = () => {
  return (
    <div className="text-center" id={"what-we-do"}>
      <div className="bg-green py-[150px] text-white">
        <div>
          <h1 className="font-black text-[55px] tracking-wide font-montserrat">
            What We Do
          </h1>
        </div>
        <div className="px-[20%] font-light">
          <p className="leading-7 font-lato">
            We nurture agricultural growth, optimize supply chains, and promote
            sustainability at Renewed Hope Initiative. We welcome exploration of
            rural life and farm-to-table experiences by embracing agrotourism.
            Furthermore, our trading knowledge enables frictionless transactions
            across multiple agricultural markets, assuring global success for
            stakeholders.
          </p>
        </div>
        <div className="mt-[60px]">
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
