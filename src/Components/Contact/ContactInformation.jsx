import React, { useRef } from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import contactBg from "../../assets/contactBackground/contact background.jpg";
import contactBg2 from "../../assets/contactBackground/contact background2.jpg";
const ContactInformation = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_my577nn", "template_6oyaeuk", form.current, {
        publicKey: "qtVOqjgV4wzvQ_Gcf",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div
      className="relative bg-cover bg-center lg:h-[600px] md:h-[450px] h-[560px]"
      style={{ backgroundImage: `url(${contactBg})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/95 "></div>
      <div
        id="contact-information"
        className="relative z-10 lg:w-8/12 w-11/12 mx-auto lg:mt-28 md:mt-24 mt-12"
      >
        <h3 className="text-center lg:pt-10 md:pt-10 pt-8 lg:text-4xl md:text-3xl text-2xl font-semibold font-fontHeading text-white">
          Contact Me
        </h3>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-10 gap-6 text-white lg:mt-16 md:mt-10 mt-6">
          <div className="lg:space-y-5 md:space-y-4 space-y-2">
            <h4 className="lg:text-2xl md:text-xl text-lg">Get in Touch</h4>
            <p className="lg:text-base text-sm">I’m currently open to exciting opportunities as a Junior Web Developer. If you think I’d be a great fit for your team, let’s connect!</p>
            <div className="flex lg:flex-col md:flex-col justify-evenly gap-4 pt-3">
              <div className="flex lg:gap-4 md:gap-4 gap-2 items-center">
                <FaPhoneAlt className="lg:text-4xl md:text-3xl text-2xl text-accent-color"></FaPhoneAlt>
                <p className="lg:text-base text-sm">+8613120738728</p>
              </div>
              <div className="flex lg:gap-4 md:gap-4 gap-2 items-center">
                <FaWhatsapp className="lg:text-4xl md:text-3xl text-2xl text-accent-color"></FaWhatsapp>
                <p className="lg:text-base text-sm">+8801954470701</p>
              </div>
            </div>
          </div>
          <div className="">
            <h4 className="lg:text-2xl text-xl lg:mb-5 md:mb-5 mb-3">Message me</h4>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col lg:gap-4 gap-3 text-primary-color"
            >
              <input
                type="text"
                placeholder="Name"
                name="user_name"
                className="lg:p-3 p-2 rounded-md focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-accent-color"
              />
              <input
                type="email"
                placeholder="Email"
                name="user_email"
                className="lg:p-3 p-2 rounded-md focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-accent-color"
              />
              <textarea
                placeholder="Message..."
                name="message"
                className="lg:h-40 h-24 w-full resize py-2 px-3 rounded-md focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-accent-color"
              />
              <div className="inline-flex">
                <input
                  type="submit"
                  value="Send Message"
                  className="hover:bg-accent-color text-white lg:px-6 px-4 lg:text-base text-sm lg:py-2 py-1.5 rounded-lg hover:ring-0 ring-2 ring-[#008579] transition duration-300 ease-in-out cursor-pointer"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;
