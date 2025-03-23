import React, { useState } from "react";
import logo from "../../../assets/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import ResumeModal from "../resumeModal/ResumeModal";
import useLanguage from "../../../hooks/useLanguage";
const Navbar = () => {
  const { language, changeLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const links = (
    <nav>
      <ul className="flex lg:flex-row flex-col justify-center items-center lg:gap-8 md:gap-3 gap-2 font-fontHeading font-medium text-lg ">
        <li>
          <NavLink
            onClick={() => scrollToSection("home")}
            className=" transition duration-300 ease-in-out text-primary-color hover:text-accent-color hover:font-bold bg-transparent"
          >
            <a href="">Home</a>
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => scrollToSection("about-me")}
            className=" transition duration-300 ease-in-out text-primary-color hover:text-accent-color hover:font-bold bg-transparent"
          >
            <a href="">About Me</a>
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => scrollToSection("skills")}
            className=" transition duration-300 ease-in-out text-primary-color hover:text-accent-color hover:font-bold bg-transparent"
          >
            <a href="">Skills</a>
          </NavLink>
        </li>
        {/* <li>
          <NavLink onClick={() => scrollToSection ("education")} className=" transition duration-300 ease-in-out text-primary-color hover:text-accent-color hover:font-bold bg-transparent">
            <a href="">Education</a>
          </NavLink>
        </li> */}
        <li>
          <NavLink
            onClick={() => scrollToSection("projects")}
            className=" transition duration-300 ease-in-out text-primary-color hover:text-accent-color hover:font-bold bg-transparent"
          >
            <a href="">Projects</a>
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => scrollToSection("contact-information")}
            className="hover:bg-none transition duration-300 ease-in-out text-primary-color hover:text-accent-color hover:font-bold bg-transparent"
          >
            <a href="">Contact</a>
          </NavLink>
        </li>
      </ul>
    </nav>
  );

  return (
    <div className="navbar w-11/12 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="lg:block hidden ">
          <div className="flex items-center justify-center gap-3">
            <div className="h-10">
              <img className="h-full w-full" src={logo} alt="" />
            </div>
            <div className="flex items-center gap-2">
              <h2 className="text-3xl text-accent-color font-bold font-fontHeading">
                Ri<span className="text-primary-color font-medium">doy</span>
              </h2>
              {language === "en" ? (
                ""
              ) : (
                <h2 className="text-xl text-accent-color font-bold">
                  (李<span className="text-primary-color font-medium">道)</span>
                </h2>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="navbar-center block lg:hidden lg:flex">
        <div className="flex items-center justify-center gap-3">
          <div className="lg:h-10 md:h-9 h-8">
            <img className="h-full w-full" src={logo} alt="" />
          </div>
          <h2 className="lg:text-3xl md:text-2xl text-accent-color font-bold font-fontHeading">
            Ri<span className="text-primary-color font-medium">doy</span>
          </h2>
        </div>
      </div>
      <div className="navbar-end lg:flex lg:gap-20">
        <div className=" hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center border-2 rounded-md py-0.5 px-1 border-accent-color">
            <button
              onClick={changeLanguage}
              className={`text-sm px-1 transition duration-200 ease-in-out ${
                language === "en"
                  ? "bg-accent-color rounded text-white"
                  : " text-accent-color font-medium"
              }`}
            >
              EN
            </button>
            <div className="divider divider-horizontal mx-0"></div>
            <button
              onClick={changeLanguage}
              className={`text-sm px-1 transition duration-200 ease-in-out ${
                language === "zh"
                  ? "bg-accent-color rounded text-white"
                  : " text-accent-color font-medium"
              }`}
            >
              CN
            </button>
          </div>
          <button
            onClick={() => setIsOpen(true)}
            className=" bg-gradient-to-r from-accent-color via-[#009c8e] to-[#008579] text-white px-3 lg:text-lg md:text-base text-sm py-0.5 rounded-lg hover:ring-4 ring-[#008579] transition duration-300 ease-in-out"
          >
            Resume
          </button>
          {isOpen && <ResumeModal setIsOpen={setIsOpen}></ResumeModal>}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
