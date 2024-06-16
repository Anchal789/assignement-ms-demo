import React from "react";
import { Link as RouterLink } from "react-router-dom";

const Header = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="bg-[#024950] text-white py-6 px-4 md:px-6">
      <div className="container mx-auto flex items-center justify-between">
        <RouterLink
          to="/"
          className="flex items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
          </svg>
          <span className="text-xl font-bold">Project Images</span>
        </RouterLink>
        <nav className="hidden md:flex gap-4 mr-6">
          <RouterLink
            to="/faculty"
            className="hover:bg-[#ffffff] p-2 hover:text-black hover:rounded-full font-bold rounded-full transition-all duration-300"
            onClick={() => scrollToSection("admin")}
          >
            Admin
          </RouterLink>
          <RouterLink
            to="/faculty"
            className="hover:bg-[#ffffff] p-2 hover:text-black hover:rounded-full font-bold rounded-full transition-all duration-300"
            onClick={() => scrollToSection("faculty")}
          >
            Faculty
          </RouterLink>
          <RouterLink
            to="/student"
            className="hover:bg-[#ffffff] p-2 hover:text-black hover:rounded-full font-bold rounded-full transition-all duration-300"
            onClick={() => scrollToSection("student")}
          >
            Student
          </RouterLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
