import Image from "next/image";

const Body1 = () => {
  return (
    <div className="flex items-center justify-between px-[8%] py-[100px]">
      <div className="xmd:basis-[50%] basis-100">
        <h1 className="sm:text-[50px] text-[40px] sm:text-center text-left text-dark font-medium font-montserrat">
          Our Mission
        </h1>
        <div className="h-[5px] w-[100px] rounded-full bg-lime mx-auto sm:block hidden mt-[20px] mb-[30px]"></div>
        <p className="text-dark sm:text-center text-left font-light leading-7 font-lato xmd:text-left">
          Our mission is to positively transform the agribusiness landscape by
          promoting the establishment and growth of agro clubs members across
          urban areas. We aim to provide Agripreneurs and urban Farmers in homes
          and schools with access to modern technology, training, and resources
          that enable them to increase productivity, improve livelihoods, and
          contribute to food security. By fostering a sense of community and
          collaboration, we strive to create a sustainable and resilient
          agribusiness ecosystem that benefits both farmers and the overall
          agricultural industry.
        </p>
      </div>
      <div className="xmd:block hidden">
        <Image
          src="/mission.png"
          width={400}
          height={400}
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default Body1;
