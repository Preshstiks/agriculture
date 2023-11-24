import Image from "next/image";

const Body1 = () => {
  return (
    <div className="flex items-center justify-between px-[8%] py-[100px]">
      <div className="xmd:basis-[50%] basis-100">
        <h1 className="sm:text-[50px] text-[40px] sm:text-center text-left text-dark font-medium font-montserrat">
          Our Mission
        </h1>
        <div className="h-[5px] w-[100px] rounded-full bg-lime mx-auto sm:block hidden mt-[20px] mb-[30px]"></div>
        <p className="text-dark sm:text-center text-left  font-light leading-7 font-lato xmd:text-left">
          Our mission is to revolutionize agriculture by implementing
          cutting-edge techniques, sustainable practices, and innovative
          technologies. From precision farming to organic cultivation, we're
          committed to maximizing yields while preserving the environment.
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
