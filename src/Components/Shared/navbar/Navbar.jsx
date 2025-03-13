import React from "react";
import logo from "../../../assets/logo.png";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const links = (
    <nav>
      <ul className="flex lg:flex-row flex-col justify-center items-center lg:gap-8 md:gap-3 gap-2 font-fontHeading font-medium text-lg">
        <li>
          <NavLink className=" transition duration-300 ease-in-out text-primary-color hover:text-accent-color hover:font-bold">Home</NavLink>
        </li>
        <li>
          <NavLink className=" transition duration-300 ease-in-out text-primary-color hover:text-accent-color hover:font-bold">About Me</NavLink>
        </li>
        <li>
          <NavLink className=" transition duration-300 ease-in-out text-primary-color hover:text-accent-color hover:font-bold">Skills</NavLink>
        </li>
        <li>
          <NavLink className=" transition duration-300 ease-in-out text-primary-color hover:text-accent-color hover:font-bold">Education</NavLink>
        </li>
        <li>
          <NavLink className=" transition duration-300 ease-in-out text-primary-color hover:text-accent-color hover:font-bold">Projects</NavLink>
        </li>
        <li>
          <NavLink className=" transition duration-300 ease-in-out text-primary-color hover:text-accent-color hover:font-bold">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );

  return (
    <div className="flex justify-between items-center w-11/12 mx-auto">
      {/* logo */}
      <div className="flex items-center justify-center gap-3">
        <div className="h-10">
          <img className="h-full w-full" src={logo} alt="" />
        </div>
        <h2 className="text-3xl text-accent-color font-bold font-fontHeading">
          Ri<span className="text-primary-color font-medium">doy</span>
        </h2>
      </div>
      {/* menu */}
      <div className="flex justify-center items-center gap-10">
          <div>{links}</div>
          <button className="text-lg bg-gradient-to-r from-accent-color via-[#009c8e] to-[#008579] text-white px-3 py-0.5 rounded-lg hover:ring-4 ring-[#008579] transition duration-300 ease-in-out">Resume</button>
      </div>
    </div>
  );
};

export default Navbar;
