import Image from "next/image";

const Body1 = () => {
  return (
    <div className="flex items-center justify-between px-[8%] py-[100px]">
      <div className="basis-[50%]">
        <h1 className="text-[50px] text-dark text-center">Our Mission</h1>
        <div className="h-[5px] w-[100px] rounded-full bg-lime mx-auto mt-[20px] mb-[30px]"></div>
        <p className="text-dark font-light leading-7">
          Our mission is to revolutionize agriculture by implementing
          cutting-edge techniques, sustainable practices, and innovative
          technologies. From precision farming to organic cultivation, we're
          committed to maximizing yields while preserving the environment.
        </p>
      </div>
      <div>
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
