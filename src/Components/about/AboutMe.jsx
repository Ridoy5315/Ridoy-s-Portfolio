import React from "react";

const AboutMe = () => {
  return (
    <div className="w-11/12 mx-auto mt-24">
      <h3 className="text-center text-3xl font-semibold font-fontHeading text-primary-color">
        About Me
      </h3>
      <div className="mt-10">
        <div className="grid grid-cols-3 gap-10 text-secondary-color text-sm text-justify">
          <div className="flex flex-col gap-24">
            <div></div>
            <div className="c">
              <h4 className="text-accent-color text-xl text-center font-semibold font-fontHeading">
                Crafting Engaging Web Experience
              </h4>

              <p className="bg-[#ecf8f6] p-6 rounded-xl shadow-xl">
                I'm passionate Junior Web Developer who loves crafting intuitive and engaging web experiences. From a young
                age, I was fascinated by how websites work, which led me to dive
                into the world of web development. 
              </p>
            </div>
          </div>
          <div className="">
            <h4 className="text-accent-color text-xl text-center font-semibold font-fontHeading mb-2">
              Driven by Curiosity
            </h4>
            <p className="bg-[#ecf8f6] p-6 rounded-xl shadow-xl">
              My journey in web development has been driven by curiosity and a
              constant thirst for learning. Beyond just writing code, I believe in
              creating digital experiences that are not only visually appealing
              but also efficient and accessible for users.
            </p>
          </div>
          <div className="flex flex-col gap-24">
            <div></div>

            <div className="flex flex-col gap-2">
              <h4 className="text-accent-color text-xl text-center font-semibold font-fontHeading">
                Embracing Challenges and Growth
              </h4>
              <p className="bg-[#ecf8f6] p-6 rounded-xl shadow-xl">
                I am always eager to explore new technologies and improve my
                expertise. I enjoy taking on challenges that push me to grow
                as a developer. My goal is to contribute to impactful projects in this ever-changing tech landscape.
              </p>
            </div>
          </div>
        </div>
      </div>
      <p></p>
    </div>
  );
};

export default AboutMe;
