import React from "react";
import project1 from "../../assets/projects/project1.png";
import project2 from "../../assets/projects/project2.png";
import project3 from "../../assets/projects/project3.png";
const Projects = () => {
  return (
    <div className="w-11/12 mx-auto mt-28">
      <h3 className="text-center text-3xl font-semibold font-fontHeading text-primary-color">
        Latest Projects
      </h3>
      <div className="mt-12 grid grid-cols-3 gap-20">
        <div>
          <h4 className="text-xl font-medium font-fontBody text-primary-color">
            Happily Ever
          </h4>
          <div className="flex flex-col gap-6 mt-4">
            <div className="">
              <img className="rounded-xl" src={project1} alt="" />
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-secondary-color font-fontBody px-4">
                I developed a Matrimony platform to help people connect and find
                their life partners in a secure and efficient way.{" "}
              </p>
              <div className="inline-flex justify-end">
                <button className="text-xl bg-gradient-to-r from-accent-color via-[#009c8e] to-[#008579] text-white px-6 py-1 rounded-lg hover:ring-4 ring-[#008579] transition duration-300 ease-in-out">
                  View More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-xl font-medium font-fontBody text-primary-color">
          Marathon Milestone
          </h4>
          <div className="flex flex-col gap-6 mt-4">
            <div className="">
              <img className="rounded-xl" src={project2} alt="" />
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-secondary-color font-fontBody px-4">
              The Marathon Milestone is a comprehensive solution designed to streamline the organization of marathons.{" "}
              </p>
              <div className="inline-flex justify-end">
                <button className="text-xl bg-gradient-to-r from-accent-color via-[#009c8e] to-[#008579] text-white px-6 py-1 rounded-lg hover:ring-4 ring-[#008579] transition duration-300 ease-in-out">
                  View More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-xl font-medium font-fontBody text-primary-color">
          Vision Vault
          </h4>
          <div className="flex flex-col gap-6 mt-4">
            <div className="">
              <img className="rounded-xl" src={project3} alt="" />
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-secondary-color font-fontBody px-4">
              Help social entrepreneurs raise funds for causes like education, healthcare, environmental conservation, and disaster relief.{" "}
              </p>
              <div className="inline-flex justify-end">
                <button className="text-xl bg-gradient-to-r from-accent-color via-[#009c8e] to-[#008579] text-white px-6 py-1 rounded-lg hover:ring-4 ring-[#008579] transition duration-300 ease-in-out">
                  View More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
