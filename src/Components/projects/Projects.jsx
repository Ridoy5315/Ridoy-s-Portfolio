import React, { useState } from "react";
import project1 from "../../assets/projects/project1.png";
import project2 from "../../assets/projects/project2.png";
import project3 from "../../assets/projects/project3.png";
import HappilyEverModal from "../modal/happilyModal/HappilyEverModal";
import MarathonModal from "../modal/marathonModal/MarathonModal";
import VisionModal from "../modal/visionModal/VisionModal";
const Projects = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const openModal = (modalName) => {
    setActiveModal(modalName);
    setIsOpen(true);
  };

  const closeModal = () => {
    setActiveModal(null);
    setIsOpen(false);
  };
  return (
    <div id='projects' className="w-11/12 mx-auto lg:mt-28 md:mt-24 mt-16">
      <h3 className="text-center lg:text-3xl md:text-3xl text-2xl font-semibold font-fontHeading text-primary-color">
        Latest Projects
      </h3>
      <div className="lg:mt-12 md:mt-8 mt-6 grid lg:grid-cols-3 grid-cols-1 lg:gap-20 gap-10">
        <div>
          <h4 className="lg:text-xl md:text-xl text-lg font-medium font-fontBody text-primary-color">
            Happily Ever
          </h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-1 lg:gap-0 md:gap-6 gap-3 mt-4">
            <div className="">
              <img className="rounded-xl" src={project1} alt="" />
            </div>
            <div className="flex flex-col gap-4 md:gap-6 md:pt-8">
              <p className="text-secondary-color font-fontBody px-4 md:text-sm">
                I developed a Matrimony platform to help people connect and find
                their life partners in a secure and efficient way.{" "}
              </p>
              <div className="inline-flex justify-end">
                <button onClick={() => openModal("HappilyEver")} className="bg-gradient-to-r from-accent-color via-[#009c8e] to-[#008579] text-white px-6 py-1 rounded-lg hover:ring-4 ring-[#008579] transition duration-300 ease-in-out">
                  View More
                </button>
                {activeModal === "HappilyEver" && <HappilyEverModal closeModal={closeModal} isOpen={isOpen} />}
              </div>
            </div>
          </div>
        </div>
        <div>
          <h4 className="lg:text-xl md:text-xl text-lg font-medium font-fontBody text-primary-color">
          Marathon Milestone
          </h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-1 lg:gap-0 md:gap-6 gap-3 mt-4">
            <div className="">
              <img className="rounded-xl" src={project2} alt="" />
            </div>
            <div className="flex flex-col gap-4 md:gap-6 md:pt-8">
              <p className="text-secondary-color font-fontBody px-4 md:text-sm">
              The Marathon Milestone is a comprehensive solution designed to streamline the organization of marathons.{" "}
              </p>
              <div className="inline-flex justify-end">
                <button onClick={() => openModal("Marathon")} className="bg-gradient-to-r from-accent-color via-[#009c8e] to-[#008579] text-white px-6 py-1 rounded-lg hover:ring-4 ring-[#008579] transition duration-300 ease-in-out">
                  View More
                </button>
                {activeModal === "Marathon" && <MarathonModal closeModal={closeModal} isOpen={isOpen} />}
              </div>
            </div>
          </div>
        </div>
        <div>
          <h4 className="lg:text-xl md:text-xl text-lg font-medium font-fontBody text-primary-color">
          Vision Vault
          </h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-1 lg:gap-0 md:gap-6 gap-3 mt-4">
            <div className="">
              <img className="rounded-xl" src={project3} alt="" />
            </div>
            <div className="flex flex-col gap-4 md:gap-6 md:pt-8">
              <p className="text-secondary-color font-fontBody px-4 md:text-sm">
              Help social entrepreneurs raise funds for causes like education, healthcare, environmental conservation, and disaster relief.{" "}
              </p>
              <div className="inline-flex justify-end">
                <button onClick={() => openModal("Vision")} className=" bg-gradient-to-r from-accent-color via-[#009c8e] to-[#008579] text-white px-6 py-1 rounded-lg hover:ring-4 ring-[#008579] transition duration-300 ease-in-out">
                  View More
                </button>
                {activeModal === "Vision" && <VisionModal closeModal={closeModal} isOpen={isOpen} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
