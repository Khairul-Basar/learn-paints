import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTty } from '@fortawesome/free-solid-svg-icons'
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'

const Middle = () => {
    const mapIcon = <FontAwesomeIcon icon={faMapMarkedAlt} />
    const phonIcon = <FontAwesomeIcon icon={faTty} />
    return (
        <div>
            <div className="flex justify-center my-20">
                <div className="max-w-sm text-center bg-recent overflow-hidden p-5 rounded-xl ml-6">
                    <p className="text-7xl my-7 text-yellow-600"><span className="border-2 border-yellow-500 rounded-full p-5"><i className="far fa-address-card"></i></span></p>
                    <p className="text-2xl font-bold py-5 text-gray-600">About</p>
                    <p className="text-lg text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae non nostrum ab reprehenderit ipsam neque! Perferendis earum nihil alias fugiat!
                    </p>
                </div>
                <div className="max-w-sm text-center bg-recent overflow-hidden p-5 rounded-xl ml-6">
                    <p className="text-7xl my-7 text-yellow-600"><span className="border-2 border-yellow-500 rounded-full p-5">{mapIcon}</span></p>
                    <p className="text-2xl font-bold py-5 text-gray-600">Address</p>
                    <p className="text-lg text-gray-500">
                        2nd Lane Lalbag Street, Azimpur, Dhaka, Bangladesh.
                    </p>
                </div>
                <div className="max-w-sm text-center bg-recent overflow-hidden p-5 rounded-xl ml-6">
                    <p className="text-7xl my-7 text-yellow-600"><span className="border-2 border-yellow-500 rounded-full p-5">{phonIcon}</span></p>
                    <p className="text-2xl font-bold py-5 text-gray-600">Contact</p>
                    <p className="text-lg text-gray-500">
                        Email: masukanourin99@gmail.com
                        Phone: 019600000000
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Middle;