import React from "react";

const AboutMe = () => {
  return (
    <div id='about-me' className="w-11/12 mx-auto lg:mt-24 md:mt-16 mt-12">
      <h3 className="text-center lg:text-3xl md:text-3xl text-2xl font-semibold font-fontHeading text-primary-color">
        About Me
      </h3>
      <div className="lg:mt-10 mt-5">
        <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 lg:gap-10 gap-6 text-secondary-color text-sm md:text-xs text-justify">
          <div className="flex flex-col lg:gap-24 md:gap-20">
            <div></div>
            <div className="flex flex-col gap-1">
              <h4 className="text-accent-color lg:text-xl text-base text-center font-semibold font-fontHeading">
                Crafting Engaging Web Experience
              </h4>

              <p className="bg-[#ecf8f6] lg:p-6 p-4 rounded-xl shadow-xl">
                I'm passionate Junior Web Developer who loves crafting intuitive and engaging web experiences. From a young
                age, I was fascinated by how websites work, which led me to dive
                into the world of web development. 
              </p>
            </div>
          </div>
          <div className="">
            <h4 className="text-accent-color lg:text-xl text-base text-center font-semibold font-fontHeading mb-2">
              Driven by Curiosity
            </h4>
            <p className="bg-[#ecf8f6] lg:p-6 p-4 rounded-xl shadow-xl">
              My journey in web development has been driven by curiosity and a
              constant thirst for learning. Beyond just writing code, I believe in
              creating digital experiences that are not only visually appealing
              but also efficient and accessible for users.
            </p>
          </div>
          <div className="flex flex-col lg:gap-24 md:gap-20">
            <div></div>

            <div className="flex flex-col gap-1">
              <h4 className="text-accent-color lg:text-xl text-base text-center font-semibold font-fontHeading">
                Embracing Challenges and Growth
              </h4>
              <p className="bg-[#ecf8f6] lg:p-6 p-4 rounded-xl shadow-xl">
                I am always eager to explore new technologies and improve my
                expertise. I enjoy taking on challenges that push me to grow
                as a developer. My goal is to contribute to impactful projects in this ever-changing tech landscape.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
