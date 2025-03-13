import React from "react";
import html from "../../assets/usingTech/html.png";
import css from "../../assets/usingTech/css.png";
import tailwind from "../../assets/usingTech/tailwind.png";
import javascript from "../../assets/usingTech/javascript.png";
import react from "../../assets/usingTech/react.png";
import firebase from "../../assets/usingTech/firebase.png";
import node from "../../assets/usingTech/node.png";
import mongodb from "../../assets/usingTech/Mongodb.png";
import typescript from "../../assets/learningTech/Typescript.svg.png";
import express from "../../assets/learningTech/express.png";
import mongoose from "../../assets/learningTech/mongoose.png";
import chinese from "../../assets/additionSkills/china.svg";
const Skills = () => {
  return (
    <div id='skills' className="lg:w-8/12 md:w-10/12 w-11/12 mx-auto lg:mt-56 md:mt-24 mt-16">
      <h3 className="text-center lg:text-3xl md:text-3xl text-2xl font-semibold font-fontHeading text-primary-color">
        Skills
      </h3>
      <div className="lg:mt-12 md:mt-8 mt-6 lg:space-y-10 md:space-y-6 space-y-4">
        <div>
          <h4 className="lg:text-xl md:text-lg font-medium font-fontBody text-primary-color">
            Tech Stack I Work With :{" "}
          </h4>
          <div className="lg:mt-5 md:mt-3 mt-2 text-secondary-color grid grid-cols-4 lg:gap-6 md:gap-5 gap-3">
            <div className="flex flex-col lg:gap-4 md:gap-3">
              <div className="flex flex-col justify-center items-center gap-3 hover:bg-[#ecf8f6] p-4 rounded-lg hover:text-accent-color hover:font-semibold transition duration-300 ease-in-out">
                <div className="lg:h-10 md:h-9 h-7">
                  <img className="h-full" src={html} alt="" />
                </div>
                <p className="lg:text-sm md:text-sm text-xs">HTML</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-3 hover:bg-[#ecf8f6] p-4 rounded-lg hover:text-accent-color hover:font-semibold transition duration-300 ease-in-out">
                <div className="lg:h-10 md:h-9 h-7">
                  <img className="h-full" src={react} alt="" />
                </div>
                <p className="lg:text-sm md:text-sm text-xs">REACT</p>
              </div>
            </div>
            <div className="flex flex-col lg:gap-4 md:gap-3">
              <div className="flex flex-col justify-center items-center gap-3 hover:bg-[#ecf8f6] p-4 rounded-lg hover:text-accent-color hover:font-semibold transition duration-300 ease-in-out">
                <div className="lg:h-10 md:h-9 h-7">
                  <img className="h-full" src={css} alt="" />
                </div>
                <p className="lg:text-sm md:text-sm text-xs">CSS</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-3 hover:bg-[#ecf8f6] p-4 rounded-lg hover:text-accent-color hover:font-semibold transition duration-300 ease-in-out">
                <div className="lg:h-10 md:h-9 h-7">
                  <img className="h-full" src={firebase} alt="" />
                </div>
                <p className="lg:text-sm md:text-sm text-xs">FIREBASE</p>
              </div>
            </div>
            <div className="flex flex-col lg:gap-4 md:gap-3">
              <div className="flex flex-col justify-center items-center gap-3 hover:bg-[#ecf8f6] p-4 rounded-lg hover:text-accent-color hover:font-semibold transition duration-300 ease-in-out">
                <div className="lg:h-10 md:h-9 h-7">
                  <img className="h-full" src={tailwind} alt="" />
                </div>
                <p className="lg:text-sm md:text-sm text-xs">TAILWIND</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-3 hover:bg-[#ecf8f6] p-4 rounded-lg hover:text-accent-color hover:font-semibold transition duration-300 ease-in-out">
                <div className="lg:h-10 md:h-9 h-7">
                  <img className="h-full" src={node} alt="" />
                </div>
                <p className="lg:text-sm md:text-sm text-xs">NODE</p>
              </div>
            </div>
            <div className="flex flex-col lg:gap-4 md:gap-3">
              <div className="flex flex-col justify-center items-center gap-3 hover:bg-[#ecf8f6] p-4 rounded-lg hover:text-accent-color hover:font-semibold transition duration-300 ease-in-out">
                <div className="lg:h-10 md:h-9 h-7">
                  <img className="h-full" src={javascript} alt="" />
                </div>
                <p className="lg:text-sm md:text-sm text-xs">JAVASCRIPT</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-3 hover:bg-[#ecf8f6] p-4 rounded-lg hover:text-accent-color hover:font-semibold transition duration-300 ease-in-out">
                <div className="lg:h-10 md:h-9 h-7">
                  <img className="h-full" src={mongodb} alt="" />
                </div>
                <p className="lg:text-sm md:text-sm text-xs">MONGODB</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h4 className="lg:text-xl md:text-lg font-medium font-fontBody text-primary-color">
            New Technologies I'm Learning :{" "}
          </h4>
          <div className="lg:mt-5 md:mt-3 mt-2 text-secondary-color grid grid-cols-2 lg:gap-16 md:gap-16 gap-10">
            <div className="flex flex-col lg:gap-4 md:gap-3">
              <div className="flex flex-col justify-center items-center gap-3 hover:bg-[#ecf8f6] p-4 rounded-lg hover:text-accent-color hover:font-semibold transition duration-300 ease-in-out">
                <div className="lg:h-10 md:h-9 h-7">
                  <img className="h-full" src={typescript} alt="" />
                </div>
                <p className="lg:text-sm md:text-sm text-xs">TYPESCRIPT</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-3 hover:bg-[#ecf8f6] p-4 rounded-lg hover:text-accent-color hover:font-semibold transition duration-300 ease-in-out">
                <div className="lg:h-10 md:h-9 h-7">
                  <img className="h-full" src={mongodb} alt="" />
                </div>
                <p className="lg:text-sm md:text-sm text-xs">MONGODB</p>
              </div>
            </div>
            <div className="flex flex-col lg:gap-4 md:gap-3">
              <div className="flex flex-col justify-center items-center gap-3 hover:bg-[#ecf8f6] p-4 rounded-lg hover:text-accent-color hover:font-semibold transition duration-300 ease-in-out">
                <div className="lg:h-10 md:h-9 h-7">
                  <img className="h-full" src={express} alt="" />
                </div>
                <p className="lg:text-sm md:text-sm text-xs">EXPRESS</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-3 hover:bg-[#ecf8f6] p-4 rounded-lg hover:text-accent-color hover:font-semibold transition duration-300 ease-in-out">
                <div className="lg:h-10 md:h-9 h-7">
                  <img className="h-full" src={mongoose} alt="" />
                </div>
                <p className="lg:text-sm md:text-sm text-xs">MONGOOSE</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h4 className="lg:text-xl md:text-lg font-medium font-fontBody text-primary-color">
            Additional Skills :{" "}
          </h4>
          <div className="grid grid-cols-2">
            <div className="space-y-3 hover:bg-[#ecf8f6] p-4 rounded-lg hover:text-accent-color hover:font-semibold transition duration-300 ease-in-out">
              <div className="lg:h-10 md:h-9 h-7 flex justify-center">
                <img className="h-full" src={chinese} alt="" />
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className="text-xs">CHINESE</p>
                <p className="lg:text-sm md:text-sm text-xs">HSK</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
