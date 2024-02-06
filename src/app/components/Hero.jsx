import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi";

const YourComponent = () => {
  return (
    <section className="sm:px-4 lg:px-8 xl:px-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 mx-auto max-w-6xl p-6">
        <div className="sm:py-10 lg:py-28">
          <h1 className="text-4xl sm:text-5xl lg:text-4xl xl:text-6xl font-bold mb-1">
            Slice of Heaven
          </h1>
          <h2 className="text-xl sm:text-1xl lg:text-2xl xl:text-3xl font-semibold mb-4">
            Premium Perfection on <br />
            <span className="text-red-500">Every Slice</span>
          </h2>
          <p className="my-4 text-gray-700 font-light text-sm sm:text-base lg:text-lg xl:text-xl">
            Indulge in Slice of Heaven's premium handcrafted pizza slices for a
            truly satisfying taste experience.
          </p>
          <div className=" flex gap-4 sm:flex-row py-4 text-[10px] md:text-base">
            <button className="bg-red-500 hover:bg-red-400 text-white px-4 py-2 uppercase font-semibold rounded-full mb-2 sm:mb-0">
              <Link href={'#menu'}>
              Order Now
              </Link>
            </button>
            <button className="flex items-center text-gray-600 font-semibold">
              Learn More
              <HiOutlineArrowRight className="ml-2" />
            </button>
          </div>
        </div>
        <div className="relative">
          <Image
            src={"/piz.png"}
            layout={""}
            width={600}
            height={400}
            objectFit={"contain"}
            alt={"pizza-hero"}
          />
        </div>
      </div>
    </section>
  );
};

export default YourComponent;
