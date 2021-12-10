import React from 'react';
import img from '../../image/about-page.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const MoreAbout = () => {
    const checkIcon = <FontAwesomeIcon icon={faCheck} />
    return (
        <div>
            <div className="flex justify-center my-36">
                <div className="max-w-xl overflow-hidden rounded-xl">
                    <img className="w-full" src={img} alt="img-about" />
                </div>
                <div className="max-w-xl overflow-hidden ml-24">
                    <p className="mb-5"><span className="border-b-2 border-yellow-400 text-gray-500 text-lg">Learn More About</span></p>
                    <h3 className="text-5xl font-bold text-gray-600">Get to Know About</h3>
                    <p className="bg-recent text-center rounded-md font-bold text-xl my-10 py-3 text-yellow-600">We have 4+ years of experiences</p>
                    <p className="text-justify px-10 text-lg text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua lonm andhn. Aenean tincidunt id mauris id auctor.
                    </p>
                    <div className="mt-10 max-w-sm text-center mx-auto border-b-2">
                        <p className="text-xl text-gray-600 font-semibold mb-2"><span className="text-yellow-500">{checkIcon}</span> We're Professional</p>
                        <p className="px-20 text-gray-500 text-lg mb-10">Lorem ipsum is simply freedolor sit amet.</p>
                    </div>
                    <p className="font-bold text-center mt-4 text-lg">Call Us  <span className="text-yellow-600">019600000</span></p>
                </div>
            </div>
        </div>
    );
};

export default MoreAbout;