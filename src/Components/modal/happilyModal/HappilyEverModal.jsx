import React from "react";
import project1 from "../../../assets/projects/project1.png";
import { FaLink } from "react-icons/fa";
import {
  Dialog,
  Transition,
  TransitionChild,
  DialogTitle,
  DialogPanel,
} from "@headlessui/react";
import { Fragment } from "react";
const HappilyEverModal = ({ closeModal, isOpen }) => {
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
                  Happily Ever
                </DialogTitle>
                <div className="mt-4 flex flex-col justify-center items-center gap-4">
                  <div className="grid grid-cols-2 gap-8 ">
                    {/* project image */}
                    <div className="h-80 ">
                      <img
                        className="h-full object-cover rounded-xl"
                        src={project1}
                        alt=""
                      />
                    </div>
                    {/* Brief Description */}
                    <div className="space-y-5 mt-8">
                      <h5 className="text-xl font-semibold">
                        Brief Description
                      </h5>
                      <p className="text-justify">
                        Happily Ever is a modern Matrimony platform designed to
                        help individuals find their perfect life partners. The
                        platform ensures secure communication, and an intuitive
                        user experience. It includes features like profile
                        creation, biodata viewing, contact request management,
                        and a premium membership model to unlock exclusive
                        features.
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
                            Tailwind CSS, React, motion, SwiperSlide, HeadlessUi
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
                          <a href="https://matrimony-platform-27cb2.web.app/">
                            Happily Ever - Live Website
                          </a>
                        </div>
                        {/* github repository link */}
                        <div className="text-accent-color font-bold text-lg flex items-center gap-1">
                         <FaLink></FaLink>
                          <a href="https://github.com/Programming-Hero-Web-Course4/b10a12-client-side-Ridoy5315">
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
                              ⭐︎ Restricting Contact Access to Paid Users :{" "}
                            </span>{" "}
                            Implementing a membership model where only paid
                            users can see contact details was tricky.
                          </li>
                          <li>
                            <span className="font-semibold">
                              ⭐︎ Handling Real-Time Data Updates :{" "}
                            </span>{" "}
                            Ensuring smooth UI updates when users send/receive
                            contact requests. Solved this using React state
                            management and MongoDB aggregation queries.
                          </li>
                          <li>
                            <span className="font-semibold">
                              ⭐︎ Authentication & Security :{" "}
                            </span>{" "}
                            Implementing Firebase authentication and encrypting
                            sensitive user data to maintain privacy and
                            security.
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
                            Expand the platform to a mobile app using React
                            Native.
                          </li>
                          <li>
                            <span className="font-semibold">
                              ⭐︎ Multi-Language Support :{" "}
                            </span>{" "}
                            Add multiple language options to reach a wider
                            audience.
                          </li>
                          <li>
                            <span className="font-semibold">
                              ⭐︎ Live Chat Feature :{" "}
                            </span>{" "}
                            Enable real-time messaging between matched users.
                          </li>
                          <li>
                            <span className="font-semibold">
                              ⭐︎ More Secure Verification :{" "}
                            </span>{" "}
                            Introduce KYC-based profile verification for
                            authenticity.
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

export default HappilyEverModal;
