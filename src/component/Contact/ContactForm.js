import React from 'react';
import img from '../../image/form-photo.jpg'

const ContactForm = () => {
    return (
        <div className="py-20">
            <div className="container mx-auto max-w-7xl flex justify-center shadow-lg p-10 rounded-xl">
                <div className="max-w-xs overflow-hidden">
                    <img className="rounded-lg" src={img} alt="Form-Img" />
                </div>
                <div className="max-w-xs overflow-hidden ml-10">
                    <input className="bg-recent rounded-lg py-6 focus:border-none text-center w-full mb-7" type="text"  placeholder="First Name"/>
                    <input className="bg-recent rounded-lg py-6 focus:border-none text-center w-full mb-7" type="text"  placeholder="Last Name"/>
                    <input className="bg-recent rounded-lg py-6 focus:border-none text-center w-full mb-7" type="text"  placeholder="Your Email"/>
                    <input className="bg-recent rounded-lg py-6 focus:border-none text-center w-full mb-7" type="text"  placeholder="Subject"/>
                </div>
                <div className="max-w-sm overflow-hidden ml-10">
                    <textarea className="bg-recent rounded-lg focus:border-none w-full p-5" name="" id="" cols="50" rows="10" placeholder="Your Message"></textarea>
                    <button className='mt-6 bg-header rounded-xl py-4 px-5 font-bold text-yellow-400 text-xl'>Send Message</button>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;