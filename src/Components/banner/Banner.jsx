import React from "react";
import myImage from "../../assets/DSC_1654.png";
import "./banner.css";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Banner = () => {
  return (
    <div className="flex justify-between items-center gap-36 w-11/12 mx-auto pt-36 pb-10">
      <div className="flex gap-16 items-center">
        {/* social icon */}
        <div className="space-y-8 text-2xl text-primary-color">
          <div>
            <a href="https://www.linkedin.com/in/ridoy5315">
              <FaLinkedin></FaLinkedin>
            </a>
          </div>
          <div>
            <a href="https://github.com/Ridoy5315">
              <FaGithub></FaGithub>
            </a>
          </div>
          <div>
            <a href="https://twitter.com/@MIRidoy99">
              <FaXTwitter></FaXTwitter>
            </a>
          </div>
          <div>
            <a href="https://www.facebook.com/ridoy5287">
              <FaFacebook></FaFacebook>
            </a>
          </div>
        </div>
        <div className="space-y-10">
          <p className="text-2xl font-fontBody font-semibold text-primary-color">
            Hi There, I'm
          </p>
          <div>
            <h3 className="text-5xl font-semibold font-fontHeading text-primary-color">
              Md Mahbubul Islam <span className="text-accent-color">Ridoy</span>
            </h3>
            <div className="flex gap-2 font-fontBody text-xl font-semibold text-secondary-color">
              <h5>Junior Web Developer</h5>
              <h5>||</h5>
              <h5>Front-end Developer</h5>
            </div>
          </div>
          <p className="text-secondary-color text-sm">
            Passionate about building modern, responsive, and user-friendly web
            applications. Constantly learning and improving to create seamless
            digital experiences.
          </p>
          <button className="text-xl bg-gradient-to-r from-accent-color via-[#009c8e] to-[#008579] text-white px-6 py-1 rounded-lg hover:ring-4 ring-[#008579] transition duration-300 ease-in-out">
            Resume
          </button>
        </div>
      </div>
      <div className="home-img">
        <div className="img-box">
          <div className="img-item">
            <img src={myImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
