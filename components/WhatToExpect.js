const WhatToExpect = () => {
  return (
    <div className="px-[8%] pt-[100px]">
      <h1 className="sm:text-[50px] text-[40px] sm:text-center text-left text-dark font-medium font-montserrat">
        What To Expect
      </h1>
      <div className="h-[5px] w-[100px] rounded-full bg-lime mx-auto sm:block hidden mt-[20px] mb-[30px]"></div>
      <div className="flex fminixl:justify-start justify-center flex-wrap">
        <div className="minixl:max-w-xs xmd:max-w-sm w-full rounded overflow-hidden shadow-lg m-4">
          <div className="p-8">
            <div className="font-bold text-[25px] font-montserrat mb-2 text-dark">
              Membership Benefits
            </div>
            <p className="text-dark font-light leading-7 font-lato">
              Join the Agro Club Membership Program for exclusive benefits:
              expert advice, discounts on inputs/services, networking
              opportunities, and access to high-quality inputs at competitive
              prices.
            </p>
          </div>
        </div>
        <div className="minixl:max-w-xs xmd:max-w-sm w-full rounded overflow-hidden shadow-lg m-4">
          <div className="p-8">
            <div className="font-bold text-[25px] font-montserrat mb-2 text-dark">
              Resourceful Hub
            </div>
            <p className="text-dark font-light leading-7 font-lato">
              Silade Agro Clubs Ltd serves as a comprehensive support hub,
              offering personalized assistance, field visits, tailored training,
              and continuous guidance for agricultural success, spanning from
              soil testing to pest management.
            </p>
          </div>
        </div>
        <div className="minixl:max-w-xs xmd:max-w-sm w-full rounded overflow-hidden shadow-lg m-4">
          <div className="p-8">
            <div className="font-bold text-[25px] font-montserrat mb-2 text-dark">
              Collaborative Connections
            </div>
            <p className="text-dark font-light leading-7 font-lato">
              The company actively fosters collaboration through webinars,
              projects, and training sessions within the agribusiness sector,
              facilitating connections between farmers, Agripreneurs, and
              industry stakeholders, nurturing profitable relationships.
            </p>
          </div>
        </div>
        <div className="minixl:max-w-[40rem] xmd:max-w-sm w-full rounded overflow-hidden shadow-lg m-4">
          <div className="p-8">
            <div className="font-bold text-[25px] font-montserrat mb-2 text-dark">
              Empowerment
            </div>
            <p className="text-dark font-light leading-7 font-lato">
              Silade Agro Clubs Ltd focuses on empowering Agripreneurs by
              providing tools, support, and guidance for impactful growth. Their
              goal is to transform individuals into practical problem-solvers
              and catalysts for change within the Agribusiness Sector.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatToExpect;
