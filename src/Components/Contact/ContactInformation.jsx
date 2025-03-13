import React from 'react';
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
const ContactInformation = () => {
     return (
          <div className='w-8/12 mx-auto mt-28 pb-28'>
               <h3 className='text-center text-3xl font-semibold font-fontHeading text-primary-color'>Contact Information</h3>
               <div className='mt-14 grid grid-cols-3'>
                    <div className='flex flex-col gap-4 justify-center items-center'>
                         <MdEmail className='text-4xl text-accent-color'></MdEmail>
                         <p>ridoy.st99@gmail.com</p>
                    </div>
                    <div className='flex flex-col gap-4 justify-center items-center'>
                         <FaPhoneAlt className='text-4xl text-accent-color'></FaPhoneAlt>
                         <p>+8613120738728</p>
                    </div>
                    <div className='flex flex-col justify-center gap-4 items-center'>
                         <FaWhatsapp className='text-4xl text-accent-color'></FaWhatsapp>
                         <p>+8801954470701</p>
                    </div>
               </div>
          </div>
     );
};

export default ContactInformation;
