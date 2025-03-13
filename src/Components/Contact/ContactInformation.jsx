import React from 'react';
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
const ContactInformation = () => {
     return (
          <div id='contact-information' className='w-8/12 mx-auto lg:mt-28 md:mt-24 mt-16 pb-28'>
               <h3 className='text-center lg:text-3xl md:text-3xl text-2xl font-semibold font-fontHeading text-primary-color'>Contact Information</h3>
               <div className='lg:mt-14 md:mt-10 mt-6 grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 lg:space-y-0 md:space-y-0 space-y-8'>
                    <div className='flex flex-col gap-4 justify-center items-center'>
                         <MdEmail className='text-4xl text-accent-color'></MdEmail>
                         <p className='md:text-sm'>ridoy.st99@gmail.com</p>
                    </div>
                    <div className='flex flex-col gap-4 justify-center items-center'>
                         <FaPhoneAlt className='text-4xl text-accent-color'></FaPhoneAlt>
                         <p className='md:text-sm'>+8613120738728</p>
                    </div>
                    <div className='flex flex-col justify-center gap-4 items-center'>
                         <FaWhatsapp className='text-4xl text-accent-color'></FaWhatsapp>
                         <p className='md:text-sm'>+8801954470701</p>
                    </div>
               </div>
          </div>
     );
};

export default ContactInformation;
