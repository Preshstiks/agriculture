import Image from "next/image";

const Contact = () => {
  return (
    <div className="px-[8%] py-[120px] text-black items-center flex justify-between font-montserrat select-none">
      <div className="flex-grow h-full xmmd:block hidden">
        <Image
          src="/img.png"
          width={400}
          height={1000}
          objectFit="cover"
          className="h-full rounded-md"
        />
      </div>
      <div className="basis-100 grow h-full">
        <div className="py-[50px] w-auto inline-block">
          <h1 className="font-bold text-[50px]">CONTACT US</h1>
        </div>
        <form className="">
          <div className="w-full">
            <div className="md:grid block grid-cols-2 gap-4">
              <div className="py-2">
                <div className="pb-2">
                  <label className="font-bold">Name</label>
                </div>
                <input
                  placeholder="Name"
                  className="w-full rounded-md border font-lato border-gray md:p-3 p-2 bg-gray-200 outline-none placeholder:text-gray-300"
                  type="text"
                  name="Name"
                />
              </div>

              <div className="py-2">
                <div className="pb-2">
                  <label className="font-bold">Email</label>
                </div>
                <input
                  placeholder="Email"
                  className="w-full rounded-md border font-lato border-gray md:p-3 p-2 bg-gray-200 outline-none placeholder:text-gray-300"
                  type="email"
                  name="Email"
                />
              </div>
            </div>
            <div className="py-2">
              <div className="pb-2">
                <label className="font-bold">Subject</label>
              </div>
              <input
                placeholder="Subject"
                className="w-full rounded-md border font-lato border-gray md:p-3 p-2 bg-gray-200 outline-none placeholder:text-gray-300"
                type="text"
                name="Subject"
              />
            </div>
            <div className="py-2">
              <div className="pb-2">
                <label className="font-bold">Message</label>
              </div>
              <textarea
                placeholder="Message"
                rows={5}
                className="w-full rounded-md font-lato resize-none border border-gray md:p-3 p-2 bg-gray-200 outline-none placeholder:text-gray-300"
                type="text"
                name="Message"
              />
            </div>
            <div className="flex justify-between mt-[13px] w-full">
              <button
                type="button"
                className="md:py-3 py-2 px-6 text-white border-green border font-bold w-full bg-green hover:bg-opacity-0 hover:text-green hover:border hover:border-green rounded-md"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
