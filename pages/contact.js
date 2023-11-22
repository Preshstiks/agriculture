const Contact = () => {
  return (
    <div className="px-[8%] py-[120px] font-montserrat select-none">
      <div className="py-[50px] w-auto inline-block">
        <h1 className="font-black text-dark text-[50px]">CONTACT US</h1>
        <div className="h-[5px] rounded-full w-full bg-lime mt-[20px] mb-[30px]"></div>
      </div>
      <form className="">
        <div className="md:w-[60%] w-full">
          <div className="md:grid block grid-cols-2 gap-4">
            <div className="py-2">
              <div className="pb-2">
                <label className="font-bold text-dark">Name</label>
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
                <label className="font-bold text-dark">Email</label>
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
              <label className="font-bold text-dark">Subject</label>
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
              <label className="font-bold text-dark">Message</label>
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
  );
};

export default Contact;
