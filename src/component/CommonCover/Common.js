import React from 'react';
import img from '../../image/common-cover.png'

const Common = (props) => {
    return (
        <div>
            <div className="relative h-96 overflow-hidden">
                <img className="w-full" src={img} alt="img-cover" />
                <div className='absolute inset-x-2/4 inset-y-64'>
                    <div>
                        <h2 className="text-6xl font-bold text-gray-600">
                            {props.children} 
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Common;