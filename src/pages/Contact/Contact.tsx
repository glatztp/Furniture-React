import { Footer } from "../../components/Footer/Footer";
import background from "../../assets/Group 69.svg";
import iconL from "../../assets/Vector 666.svg";
import iconT from "../../assets/Vector 666.svg"
import iconR from "../../assets/Vector 667.svg"

export function Contact() {
  return (
    <div>
      <img className="object-cover w-full" src={background} alt="" />

      <div className="text-center">
        <h1 className="mt-20 font-bold text-3xl">Get In Touch With Us</h1>
        <p className="mt-6 pl-80 pr-80 ml-16 mr-16 opacity-40 ">
          For more information about our products and services, feel free to
          send us an email. Our team is always ready to help. Don’t hesitate to
          get in touch!
        </p>
      </div>

      <div className="my-28 flex justify-center">
        <div className="flex flex-col items-center gap-48">
          <div className="p-0">
            <img src={iconL} />
          </div>
          <div className="-mt-6">
            <img src={iconT} />
          </div>
          <div className="-mt-12">
            <img src={iconR} />
          </div>
        </div>

        <div className="w-80 pr-10 space-y-4">
          <div className="p-4 r-80">
            <h2 className="text-2xl font-medium">Address</h2>
            <p className="text-lg">
              236 5th SE Avenue, New York NY10000,
              <p> United States</p>
            </p>
          </div>
          <div className="p-4">
            <h2 className="text-2xl font-medium">Phone</h2>
            <p className="text-lg">Mobile: +(84) 546-6789</p>
            <p className="text-lg">Hotline: +(84) 456-6789</p>
          </div>
          <div className="p-4">
            <h2 className="text-2xl font-medium">Working Hours</h2>
            <p className="text-lg">Monday-Friday:<p> 9:00 AM - 10:00 PM</p></p>
            <p className="text-lg">Saturday-Sunday:<p> 9:00 AM - 9:00 PM</p></p>
          </div>
        </div>

        <div className="w-96 space-y-8">
          <form className="flex flex-col gap-6">
            <label htmlFor="name" className="text-xl">
              Your Name
            </label>
            <input
              className="py-4 px-6 text-[#9F9F9F] border border-solid rounded-lg"
              type="text"
              name="name"
              id="name"
              placeholder="Example"
            />

            <label htmlFor="email" className="text-xl">
              Email Address
            </label>
            <input
              className="py-4 px-6 text-[#9F9F9F] border border-solid rounded-lg"
              type="email"
              name="email"
              id="email"
              placeholder="example@domain.com"
            />

            <label htmlFor="subject" className="text-xl">
              Subject
            </label>
            <input
              className="py-4 px-6 text-[#9F9F9F] border border-solid rounded-lg"
              type="text"
              name="subject"
              id="subject"
              placeholder="Optional"
            />

            <label htmlFor="message" className="text-xl">
              Message
            </label>
            <textarea
              className="py-4 px-6 text-[#9F9F9F] h-36 border border-solid rounded-lg"
              name="message"
              id="message"
              placeholder="Hello! I would like to know more about..."
            />

            <button className="self-start text-white text-xl px-20 py-4 bg-brown rounded-md">
              Submit
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}
