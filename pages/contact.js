const Contact = () => {
  return (
    <div className="px-[8%] py-[120px]">
      <div className="py-[50px]">
        <h1 className="font-montserrat font-black text-[50px]">CONTACT US</h1>
      </div>
      <form className="">
        <div className="md:w-[60%] w-full">
          <div className="md:grid block grid-cols-2 gap-4">
            <div className="py-2">
              <div className="pb-2">
                <label className="font-bold">Name</label>
              </div>
              <input
                placeholder="Name"
                className="w-full rounded-md border border-gray md:p-3 p-2 bg-gray-200 outline-none placeholder:text-gray-300"
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
                className="w-full rounded-md border border-gray md:p-3 p-2 bg-gray-200 outline-none placeholder:text-gray-300"
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
              className="w-full rounded-md border border-gray md:p-3 p-2 bg-gray-200 outline-none placeholder:text-gray-300"
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
              className="w-full rounded-md resize-none border border-gray md:p-3 p-2 bg-gray-200 outline-none placeholder:text-gray-300"
              type="text"
              name="Message"
            />
          </div>
          <div className="flex justify-between mt-[13px] w-full">
            <button
              type="button"
              className="md:py-3 py-2 px-6 text-white font-bold w-full bg-[#0A0A22] rounded-md"
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
