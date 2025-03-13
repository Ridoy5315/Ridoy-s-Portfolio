import React from 'react';
import project3 from "../../../assets/projects/project3.png";
import { FaLink } from "react-icons/fa";
import {
  Dialog,
  Transition,
  TransitionChild,
  DialogTitle,
  DialogPanel,
} from "@headlessui/react";
import { Fragment } from "react";

const VisionModal = ({closeModal, isOpen}) => {
     return (
          <Transition appear show={isOpen} as={Fragment}>
                          <Dialog as="div" className="relative z-10" onClose={closeModal}>
                            <TransitionChild
                              as={Fragment}
                              enter="ease-out duration-300"
                              enterFrom="opacity-0"
                              enterTo="opacity-100"
                              leave="ease-in duration-200"
                              leaveFrom="opacity-100"
                              leaveTo="opacity-0"
                            >
                              <div className="fixed inset-0 bg-black bg-opacity-25" />
                            </TransitionChild>
                    
                            <div className="fixed inset-0 overflow-y-auto">
                              <div className="flex min-h-full items-center justify-center p-4 text-center">
                                <TransitionChild
                                  as={Fragment}
                                  enter="ease-out duration-300"
                                  enterFrom="opacity-0 scale-95"
                                  enterTo="opacity-100 scale-100"
                                  leave="ease-in duration-200"
                                  leaveFrom="opacity-100 scale-100"
                                  leaveTo="opacity-0 scale-95"
                                >
                                  <DialogPanel className="w-full max-w-6xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <DialogTitle
                                      as="h3"
                                      className="text-3xl font-bold text-center text-primary-color font-fontHeading"
                                    >
                                      Vision Vault
                                    </DialogTitle>
                                    <div className="mt-4 flex flex-col justify-center items-center gap-4">
                                      <div className="grid grid-cols-2 gap-8 ">
                                        {/* project image */}
                                        <div className="h-80 ">
                                          <img
                                            className="h-full object-cover rounded-xl"
                                            src={project3}
                                            alt=""
                                          />
                                        </div>
                                        {/* Brief Description */}
                                        <div className="space-y-5 mt-8">
                                          <h5 className="text-xl font-semibold">
                                            Brief Description
                                          </h5>
                                          <p className="text-justify">
                                          Vision Vault is a crowdfunding platform designed to help social entrepreneurs, nonprofits, and individuals raise funds for causes like education, healthcare, environmental conservation, and disaster relief. The platform allows users to create fundraising campaigns, receive donations securely.
                                          </p>
                                        </div>
                                      </div>
                                      {/* 2nd row */}
                                      <div className="mt-3">
                                        <div className="grid grid-cols-2 gap-8 items-center">
                                          {/* Main technology stack used */}
                                          <div>
                                            <h5 className="text-xl font-semibold">
                                              Main Technology Stack Used
                                            </h5>
                                            <ul className="font-fontBody text-sm mt-1">
                                              <li>
                                                <span className="font-semibold">
                                                  ⭐︎ Frontend :{" "}
                                                </span>{" "}
                                                Tailwind CSS, React, SwiperSlide, typewriter-effect
                                              </li>
                                              <li>
                                                <span className="font-semibold">
                                                  ⭐︎ Backend :{" "}
                                                </span>{" "}
                                                Node.js, Express.js
                                              </li>
                                              <li>
                                                <span className="font-semibold">
                                                  ⭐︎ Database :{" "}
                                                </span>{" "}
                                                MongoDB
                                              </li>
                                              <li>
                                                <span className="font-semibold">
                                                  ⭐︎ Authentication :{" "}
                                                </span>{" "}
                                                Firebase Authentication
                                              </li>
                                              <li>
                                                <span className="font-semibold">
                                                  ⭐︎ Hosting :{" "}
                                                </span>{" "}
                                                Vercel (Backend), Firebase (Backend)
                                              </li>
                                            </ul>
                                          </div>
                                          {/* links */}
                                          <div className="space-y-3">
                                            {/* Live website link */}
                                            <div className="text-accent-color font-bold text-lg flex items-center gap-1">
                                            <FaLink></FaLink>
                                              <a href="https://crowdfunding-16619.web.app/">
                                              Vision Vault - Live Website
                                              </a>
                                            </div>
                                            {/* github repository link */}
                                            <div className="text-accent-color font-bold text-lg flex items-center gap-1">
                                             <FaLink></FaLink>
                                              <a href="https://github.com/programming-hero-web-course2/b10-a10-client-side-Ridoy5315">
                                                GitHub Repository (Client Side)
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                    
                                        <div className="grid grid-cols-2 gap-8 mt-3">
                                          {/* Challenges Faced */}
                                          <div>
                                            <h5 className="text-xl font-semibold">
                                              Challenges Faced While Developing the Project
                                            </h5>
                                            <ul className="font-fontBody text-sm mt-1">
                                              <li>
                                                <span className="font-semibold">
                                                  ⭐︎ User Engagement & Trust :{" "}
                                                </span>{" "}
                                                Designing a user-friendly interface that builds trust and encourages donors to contribute.
                                              </li>
                                              <li>
                                                <span className="font-semibold">
                                                  ⭐︎ Responsive Design & Mobile Optimization :{" "}
                                                </span>{" "}
                                                Ensuring the platform was fully responsive and provided a seamless experience across a variety of devices was a significant design and testing challenge.
                                              </li>
                                              
                                              
                                            </ul>
                                          </div>
                    
                                          <div>
                                            <h5 className="text-lg font-semibold">
                                              Potential Improvements & Future Plans
                                            </h5>
                                            <ul className="font-fontBody text-sm mt-1">
                                              <li>
                                                <span className="font-semibold">
                                                  ⭐︎ Mobile App Development :{" "}
                                                </span>{" "}
                                                Mobile App Development for better accessibility.
                                              </li>
                                              <li>
                                                <span className="font-semibold">
                                                  ⭐︎ Campaign Analytics Dashboard :{" "}
                                                </span>{" "}
                                                Implement a dashboard where campaign creators can access detailed analytics.
                                              </li>
                                              <li>
                                                <span className="font-semibold">
                                                  ⭐︎ Recurring Donation Feature :{" "}
                                                </span>{" "}
                                                Introduce the ability for users to set up recurring donations (monthly, yearly, etc.) to provide ongoing support to campaigns.
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <hr className="mt-6 " />
                                    <div className="flex mt-2 justify-around">
                                      <button
                                        type="button"
                                        className="bg-gradient-to-r from-accent-color via-[#009c8e] to-[#008579] text-white px-6 text-sm py-1 rounded-lg hover:ring-4 ring-[#008579] transition duration-300 ease-in-out"
                                        onClick={closeModal}
                                      >
                                        Cancel
                                      </button>
                                    </div>
                                  </DialogPanel>
                                </TransitionChild>
                              </div>
                            </div>
                          </Dialog>
                        </Transition>
     );
};

export default VisionModal;