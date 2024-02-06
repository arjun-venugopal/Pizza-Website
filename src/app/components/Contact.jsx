import { MdOutgoingMail } from "react-icons/md";
import { HiMiniHomeModern } from "react-icons/hi2";
import { MdAddIcCall } from "react-icons/md";
export default function Contact() {
  return (
    <section className="py-10 p-6 mx-auto max-w-6xl" id="contact">
      <div className="text-2xl sm:text-4xl lg:text-5xl font-semibold text-red-500 text-center  py-8">
        Contact Us
      </div>
      <div className=" py-10 grid md:grid-cols-2 p-6 gap-6 md:p-6 bg-white rounded shadow-md hover:shadow-2xl hover:shadow-gray-200 mb-10">
        <div className=" mx-auto text-center md:text-left md:ml-10">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-red-500 md:mb-10">
            Pizz Bae
          </h1>
          <div className="text-sm md:text-xl font-semibold mb-4 my-2">
            Premium Perfection on <br />
            <span className="text-red-500">Every Slice</span>
          </div>
          <div className="flex gap-2 items-center py-2 my-2 text-sm md:text-base">
            <MdAddIcCall /> <p>+1 458-348-213</p>
          </div>
          <div className="flex gap-2  items-center text-sm md:text-base">
            <MdOutgoingMail /> <p> Pizzbae@gmail.com</p>
          </div>
          <div className="flex justify-center py-2 my-2 gap-2 text-sm md:text-base">
            <HiMiniHomeModern className="mt-1" />
            123 Main Street Apt 4B Cityville, <br />
            ST 56789 USA
          </div>
        </div>

        <form>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full p-2 border border-gray-300 rounded"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-red-500 text-white px-2 py-2 font-semibold rounded-md  hover:bg-red-700"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
