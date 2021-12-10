import React from 'react';

const Service = (props) => {
    const {title,img,description,fee,Dimension} = props.service
    return (
        <div>
            <div className="max-w-sm rounded-lg overflow-hidden shadow-lg">
                <img className="w-full" src={img} alt="services-1" />
                <div className="px-6 py-4 text-center">
                    <div className="font-bold text-xl mb-2 text-gray-500"> {title}</div>
                    <p className="text-gray-700 text-base">{description}</p>
                    <p className="text-gray-500 text-base font bold my-3 font-bold">Dimention: {Dimension}</p>
                    <p className="text-gray-500 text-base font bold my-3 font-bold">Fee: {fee}</p>
                </div>
            </div>
        </div>
    );
};

export default Service;