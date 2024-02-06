import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { GrFormNextLink } from "react-icons/gr";

export default function Footer() {
  return (
    <footer className="pt-10 border bg-gray-200">
      <div className="grid md:grid-cols-4 lg:grid-cols-4 gap-6 mx-auto max-w-6xl sm:grid-cols-4 sm:gap-6 sm:py-2 px-6 md:px-10">
        <div className="mb-8 md:mb-0">
          <div className="text-2xl text-gray-500 font-bold">
            Slice of Heaven
          </div>
          <div className="text-md text-gray-500 font-semibold mb-4">
            Premium Perfection on <br />
            <span className="text-red-500">Every Slice</span>
          </div>
          <p className="my-4 text-gray-700 text-sm opacity-50">
            Indulge in Slice of Heaven's premium handcrafted pizza slices for a
            truly satisfying taste experience.
          </p>
        </div>

        <div className="mb-8  items-center">
          <div className="uppercase text-sm font-medium text-gray-500 mb-4">
            Product
          </div>
          <ul className="text-sm opacity-50">
            <li>Pesto Paradise Pizza</li>
            <li>BBQ Bliss Pizza</li>
            <li>White Pizza Wonder</li>
            <li>Veggie Harvest Haven</li>
            <li className="flex items-center gap-1 font-semibold mt-3">
              More <GrFormNextLink />{" "}
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <div className="uppercase text-sm font-medium text-gray-500 mb-4">
            General
          </div>
          <ul className="text-sm opacity-50">
            <li>Home</li>
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <div className="uppercase text-sm font-medium text-gray-500 mb-4">
            Social Media
          </div>
          <div className="flex gap-5 text-gray-500 ">
            <FaSquareInstagram className="w-7 h-7 hover:text-gray-950" />
            <FaSquareFacebook className="w-7 h-7 hover:text-gray-950" />
            <FaSquareXTwitter className="w-7 h-7 hover:text-gray-950" />
          </div>
        </div>
      </div>

      <div className="text-center py-6">
        <p className="text-xs md:text-sm text-gray-500">
          © 2024 All rights reserved | Designed by Pizza Bae
        </p>
      </div>
    </footer>
  );
}
