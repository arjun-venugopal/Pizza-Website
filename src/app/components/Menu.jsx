import Image from "next/image";
import Menuitem from "./Menuitem";

export default function Menu() {
  return (
    <section id="menu" className="py-6 mx-auto max-w-6xl p-6 relative">
      <div className="text-center text-2xl md:text-4xl lg:text-5xl text-red-500 font-semibold mb-10 lg:mt-20">
        <h2>Our Menu</h2>
      </div>
      <div className="mx-auto max-w-6xl sm:-top-20">
        <Menuitem />
      </div>
    </section>
  );
}
