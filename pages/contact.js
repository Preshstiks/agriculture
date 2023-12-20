import emailjs from "@emailjs/browser";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { PuffLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Contact = () => {
  const form = useRef();
  const [nameData, setNameData] = useState("");
  const [emailData, setEmailData] = useState("");
  const [messageData, setMessageData] = useState("");
  const [submit, setSubmit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   if (emailData !== "" && nameData !== "" && messageData !== "") {
  //     emailjs.sendForm(
  //       "service_d6m4sou",
  //       "template_ykikmnc",
  //       form.current,
  //       "EUriGF9xODVrqT71I"
  //     );
  //     setSubmit(true);
  //   }
  // };
  const sendEmail = async (e) => {
    e.preventDefault();
    if (emailData !== "" && nameData !== "" && messageData !== "") {
      setIsLoading(true);
      try {
        const res = await emailjs.sendForm(
          "service_d6m4sou",
          "template_ykikmnc",
          form.current,
          "EUriGF9xODVrqT71I"
        );
        if (res.status === 200) {
          setSubmit(true);
          setTimeout(() => {
            router.push("/");
          }, 3000);
        }
      } catch (error) {
        toast.error("Email cannot be sent!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } finally {
        setIsLoading(false);
      }
    } else {
      toast.warn("Please fill all inputs!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };
  if (submit) {
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <p className="text-[20px] font-montserrat text-green font-bold">
          Thank you for contacting us!
        </p>
      </div>
    );
  }
  return (
    <div className="px-[8%] py-[120px]">
      <div className="py-[50px]">
        <h1 className="font-montserrat font-black text-green sm:text-[50px] text-[30px]">
          CONTACT US
        </h1>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <div className="md:w-[60%] w-full">
          <div className="md:grid block grid-cols-2 gap-4">
            <div className="py-2">
              <div className="pb-2">
                <label htmlFor="name" className="font-bold">
                  Name
                </label>
              </div>
              <input
                placeholder="Name"
                id="Name"
                className="w-full rounded-md border border-gray md:p-3 p-2 bg-gray-200 outline-none placeholder:text-gray-300"
                type="text"
                name="from_name"
                onChange={(e) => setNameData(e.target.value)}
                value={nameData}
              />
            </div>

            <div className="py-2">
              <div className="pb-2">
                <label htmlFor="email" className="font-bold">
                  Email
                </label>
              </div>
              <input
                placeholder="Email"
                id="Email"
                className="w-full rounded-md border border-gray md:p-3 p-2 bg-gray-200 outline-none placeholder:text-gray-300"
                type="email"
                name="user_email"
                onChange={(e) => setEmailData(e.target.value)}
                value={emailData}
              />
            </div>
          </div>
          <div className="py-2">
            <div className="pb-2">
              <label htmlFor="message" className="font-bold">
                Message
              </label>
            </div>
            <textarea
              placeholder="Message"
              id="Message"
              rows={5}
              className="w-full rounded-md resize-none border border-gray md:p-3 p-2 bg-gray-200 outline-none placeholder:text-gray-300"
              type="text"
              name="message"
              onChange={(e) => setMessageData(e.target.value)}
              value={messageData}
            />
          </div>
          <div className="flex justify-between mt-[13px] w-full">
            <button
              type="submit"
              className="md:py-3 py-2 px-6 text-white font-bold w-full bg-green rounded-md"
            >
              {isLoading ? (
                <div className="flex items-center h-full justify-center">
                  <PuffLoader
                    color="#ffffff"
                    loading={isLoading ? true : false}
                    size={25}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                  />
                </div>
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Contact;
