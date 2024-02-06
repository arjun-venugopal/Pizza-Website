"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  LocalPizzaRounded as LocalPizzaRoundedIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.pageYOffset;
      const sections = document.querySelectorAll("section[id]");

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveLink(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const smoothScroll = (target) => {
    const element = document.getElementById(target);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 50,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="flex items-center justify-between mx-auto max-w-6xl p-6 sm:p-4">
      <Link
        href={"/"}
        className="text-red-500 font-pacifico text-lg font-bold md:text-3xl"
      >
        <LocalPizzaRoundedIcon className="w-4 h-6 md:w-10 md:h-10 items-center" />
        Pizzbae
      </Link>

      <nav
        className={`flex gap-7 items-center cursor-pointer text-gray-500 font-semibold ${
          mobileMenuOpen
            ? "flex bg-white absolute top-16 items-center justify-center p-5 z-50"
            : "hidden md:flex"
        }`}
      >
        <a onClick={() => smoothScroll("menu")}>Menu</a>
        <a onClick={() => smoothScroll("about")}>About</a>
        <a onClick={() => smoothScroll("contact")}>Contact</a>
      </nav>

      <div className="md:hidden justify-end text-left gap-2 flex">
        <button
          className="text-gray-500 hover:text-gray-700 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <MenuIcon
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="0"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`menu-icon ${mobileMenuOpen ? "active" : ""}`}
            onClick={toggleMobileMenu}
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </MenuIcon>
        </button>
      </div>
    </header>
  );
};

export default Header;
