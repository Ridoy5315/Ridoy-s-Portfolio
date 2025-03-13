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
    <div className="w-8/12 mx-auto mt-36">
      <h3 className="text-center text-3xl font-semibold font-fontHeading text-primary-color">
        Skills
      </h3>
      <div className="mt-12 space-y-10">
        <div>
          <h4 className="text-xl font-medium font-fontBody text-primary-color">
            Tech Stack I Work With :{" "}
          </h4>
          <div className="mt-5 text-secondary-color grid grid-cols-4 gap-6">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col justify-center items-center gap-3 hover:bg-[#ecf8f6] p-4 rounded-lg hover:text-accent-color hover:font-semibold transition duration-300 ease-in-out">
                <div className="h-10">
                  <img className="h-full" src={html} alt="" />
                </div>
                <p className="text-sm">HTML</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-3 hover:bg-[#ecf8f6] p-4 rounded-lg hover:text-accent-color hover:font-semibold transition duration-300 ease-in-out">
                <div className="h-10">
                  <img className="h-full" src={react} alt="" />
                </div>
                <p className="text-sm">REACT</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col justify-center items-center gap-3 hover:bg-[#ecf8f6] p-4 rounded-lg hover:text-accent-color hover:font-semibold transition duration-300 ease-in-out">
                <div className="h-10">
                  <img className="h-full" src={css} alt="" />
                </div>
                <p className="text-sm">CSS</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-3 hover:bg-[#ecf8f6] p-4 rounded-lg hover:text-accent-color hover:font-semibold transition duration-300 ease-in-out">
                <div className="h-10">
                  <img className="h-full" src={firebase} alt="" />
                </div>
                <p className="text-sm">FIREBASE</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col justify-center items-center gap-3 hover:bg-[#ecf8f6] p-4 rounded-lg hover:text-accent-color hover:font-semibold transition duration-300 ease-in-out">
                <div className="h-10">
                  <img className="h-full" src={tailwind} alt="" />
                </div>
                <p className="text-sm">TAILWIND</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-3 hover:bg-[#ecf8f6] p-4 rounded-lg hover:text-accent-color hover:font-semibold transition duration-300 ease-in-out">
                <div className="h-10">
                  <img className="h-full" src={node} alt="" />
                </div>
                <p className="text-sm">NODE</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col justify-center items-center gap-3 hover:bg-[#ecf8f6] p-4 rounded-lg hover:text-accent-color hover:font-semibold transition duration-300 ease-in-out">
                <div className="h-10">
                  <img className="h-full" src={javascript} alt="" />
                </div>
                <p className="text-sm">JAVASCRIPT</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-3 hover:bg-[#ecf8f6] p-4 rounded-lg hover:text-accent-color hover:font-semibold transition duration-300 ease-in-out">
                <div className="h-10">
                  <img className="h-full" src={mongodb} alt="" />
                </div>
                <p className="text-sm">MONGODB</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-xl font-medium font-fontBody text-primary-color">
            New Technologies I'm Learning :{" "}
          </h4>
          <div className="mt-5 text-secondary-color grid grid-cols-2 gap-16">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col justify-center items-center gap-3 hover:bg-[#ecf8f6] p-4 rounded-lg hover:text-accent-color hover:font-semibold transition duration-300 ease-in-out">
                <div className="h-10">
                  <img className="h-full" src={typescript} alt="" />
                </div>
                <p className="text-sm">TYPESCRIPT</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-3 hover:bg-[#ecf8f6] p-4 rounded-lg hover:text-accent-color hover:font-semibold transition duration-300 ease-in-out">
                <div className="h-10">
                  <img className="h-full" src={mongodb} alt="" />
                </div>
                <p className="text-sm">MONGODB</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col justify-center items-center gap-3 hover:bg-[#ecf8f6] p-4 rounded-lg hover:text-accent-color hover:font-semibold transition duration-300 ease-in-out">
                <div className="h-10">
                  <img className="h-full" src={express} alt="" />
                </div>
                <p className="text-sm">EXPRESS</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-3 hover:bg-[#ecf8f6] p-4 rounded-lg hover:text-accent-color hover:font-semibold transition duration-300 ease-in-out">
                <div className="h-10">
                  <img className="h-full" src={mongoose} alt="" />
                </div>
                <p className="text-sm">MONGOOSE</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-xl font-medium font-fontBody text-primary-color">
            Additional Skills :{" "}
          </h4>
          <div className="grid grid-cols-2">
            <div className="space-y-3 hover:bg-[#ecf8f6] p-4 rounded-lg hover:text-accent-color hover:font-semibold transition duration-300 ease-in-out">
              <div className="h-10 flex justify-center">
                <img className="h-full" src={chinese} alt="" />
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className="text-xs">CHINESE</p>
                <p className="text-sm">HSK</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
