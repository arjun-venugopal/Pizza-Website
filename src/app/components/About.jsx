import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section id="about" className="max-w-6xl mx-auto p-6 ">
      <h2 className="text-center text-2xl mt-5 md:text-4xl lg:text-5xl text-red-500 font-semibold mb-6">
        About Us
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 mx-auto max-w-6xl p-10 bg-white shadow-md rounded hover:shadow-2xl hover:shadow-gray-200">
        <div className="relative">
        <Image
          src={"/pizza-img.png"}
          layout={""}
          width={300}
          height={200}
          objectFit={"contain"}
          alt="PizzBae Pizza"
          className="rounded flex justify-center items-center p-10"
        />
        </div>
        <p className="text-lg flex justify-center items-center mb-4 p-5 px-5">
          Welcome to PizzBae, your go-to destination for mouth-watering pizzas
          made with love and the finest ingredients. At PizzBae, we believe that
          pizza is not just a food; it's an experience. Our passion for crafting
          the perfect pizza drives us to deliver a slice of heaven with every
          order.
        </p>
      </div>
    </section>
  );
};

export default About;
