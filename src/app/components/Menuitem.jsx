import Link from "next/link";

const Menuitem = () => {
  const menuItems = [
    {
      id: "1",
      image: "/pizza-2.jpg",
      title: "Pizza",
      description:
        "Explore our great range of pizza recipes from the Pizza Bae pizza menu.",
      path: "/",
    },
    {
      id: "2",
      image: "/burger.jpg",
      title: "Burger",
      description:
        "Explore our great range of Burger recipes from the Pizza Bae.",
      path: "/",
    },
    
    {
      id: "3",
      image: "/dessert.jpg",
      title: "Desserts",
      description: "Explore our tempting choice of delicious desserts.",
      path: "/",
    },
    {
      id: "4",
      image: "/drinks.jpg",
      title: "Drinks",
      description: "Explore our great selection of refreshing drinks.",
      path: "/",
    },
    {
      id: "5",
      image: "/sides.jpg",
      title: "Sides",
      description:
        "Explore our great choice of delicious sides to complement your pizzas.",
      path: "/",
    },
    {
      id: "6",
      image: "/deals.jpg",
      title: "Deals",
      description: "Check out the latest meal deals available from Pizza Bae.",
      path: "/",
    },
  ];
  
  return (
    <div className=" py-2 grid gap-5 md:grid-cols-3 sm:grid-cols-2">
      {menuItems.map(({ id, image, title, description, path }) => (
        <div key={id} className="flex-shrink-0">
          <div className="md:h-[380px] bg-gray-50 text-center rounded-lg p-6 md:p-8 hover:bg-white group transition-all hover:shadow-2xl hover:shadow-slate-500">
            <div className=" ">
              <img src={image} alt={title} className="max-h-40  block mx-auto" />
            </div>
            <h4 className="font-semibold my-4">{title}</h4>
            <p className="text-sm text-gray-600">{description}</p>
            <Link href={path}>
              <button className="bg-red-500 text-white px-4 py-2 rounded-md mt-4">
                View more
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menuitem;
