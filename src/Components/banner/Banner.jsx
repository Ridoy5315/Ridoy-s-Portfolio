import React, { useState } from "react";
import myImage from "../../assets/DSC_1654.png";
import "./banner.css";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import ResumeModal from "../Shared/resumeModal/ResumeModal";
const Banner = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      id="home"
      className="flex lg:flex-row md:flex-row flex-col-reverse justify-between items-center lg:gap-36 md:gap-12 gap-8 w-11/12 mx-auto lg:pt-36 md:pt-32 pt-24 pb-10"
    >
      <div className="flex lg:gap-16 md:gap-8 items-center">
        {/* social icon */}
        <div className="space-y-8 lg:block md:block hidden lg:text-2xl md:text-xl text-primary-color">
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
        <div className="lg:space-y-10 md:space-y-6 space-y-4">
          <p className="lg:text-2xl md:text-xl text-sm font-fontBody font-semibold text-primary-color">
            Hi There, I'm
          </p>
          <div>
            <h3 className="lg:text-5xl md:text-[28px] text-2xl font-semibold font-fontHeading text-primary-color">
              Md Mahbubul Islam <span className="text-accent-color">Ridoy</span>
            </h3>
            <div className="flex gap-2 font-fontBody lg:text-xl md:text-sm text-[10px] font-semibold text-secondary-color">
              <h5>Junior Web Developer</h5>
              <h5>||</h5>
              <h5>Front-end Developer</h5>
            </div>
          </div>
          <p className="text-secondary-color lg:text-sm text-[10px]">
            Passionate about building modern, responsive, and user-friendly web
            applications. Constantly learning and improving to create seamless
            digital experiences.
          </p>
          <div className="flex gap-3 lg:hidden md:hidden block lg:text-2xl md:text-xl text-primary-color">
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
          <div>
            <button
              onClick={() => setIsOpen(true)}
              className="lg:text-xl md:text-xl  bg-gradient-to-r from-accent-color via-[#009c8e] to-[#008579] text-white px-6 lg:py-1 md:py-1 py-0.5 rounded-lg hover:ring-4 ring-[#008579] transition duration-300 ease-in-out"
            >
              Resume
            </button>
            { isOpen && <ResumeModal setIsOpen={setIsOpen}></ResumeModal>}
          </div>
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
