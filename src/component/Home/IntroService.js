import React from 'react';
import { useHistory } from 'react-router-dom';
import img from '../../image/service-1.jpg'
import img2 from '../../image/service-2.jpg'
import img3 from '../../image/service-3.jpg'
import img4 from '../../image/sea_sky.jpg'

const IntroService = () => {
    const history = useHistory()
    const handleServiceRoute = () => {
        history.push('/services')
    }
    return (
        <div className='py-10 bg-recent bg-opacity-75'>
            <h3 className="text-2xl text-center font-bold text-gray-500"><span className="border-b-2 border-yellow-500">Our Services List</span></h3>
            <div className="flex justify-center my-10">
                <div className="max-w-sm rounded-lg overflow-hidden shadow-lg">
                    <img className="w-full" src={img} alt="services-1" />
                    <div className="px-6 py-4 text-center">
                        <div className="font-bold text-xl mb-2 text-gray-500"> Room Wallpapers</div>
                        <p className="text-gray-500 text-base font bold my-3 font-bold">
                            Fee: $250
                        </p>
                        <button onClick={handleServiceRoute} className="m-5 px-5 py-2 border border-yellow-400 rounded-full text-2xl text-yellow-600"><i className="fas fa-arrow-right"></i></button>
                    </div>
                    
                </div>
                <div className="max-w-sm rounded-lg overflow-hidden shadow-lg ml-10">
                    <img className="w-full" src={img2} alt="services-1" />
                    <div className="px-6 py-4 text-center">
                        <div className="font-bold text-xl mb-2 text-gray-500"> Outdoor Designs </div>
                        <p className="text-gray-500 text-base font bold my-3 font-bold">
                            Fee: $200
                        </p>
                        <button onClick={handleServiceRoute} className="m-5 px-5 py-2 border border-yellow-400 rounded-full text-2xl text-yellow-600"><i className="fas fa-arrow-right"></i></button>
                    </div>
                </div>
                <div className="max-w-sm rounded-lg overflow-hidden shadow-lg ml-10">
                    <img className="w-full h-72" src={img3} alt="services-1" />
                    <div className="px-6 py-4 text-center">
                        <div className="font-bold text-xl mb-2 text-gray-500"> Interior Designs</div>
                        <p className="text-gray-500 text-base font bold my-3 font-bold">
                            Fee: $270
                        </p>
                        <button onClick={handleServiceRoute} className="m-5 px-5 py-2 border border-yellow-400 rounded-full text-2xl text-yellow-600"><i className="fas fa-arrow-right"></i></button>
                    </div>
                    
                </div>
                <div className="max-w-sm rounded-lg overflow-hidden shadow-lg ml-10">
                    <img className="w-full h-72" src={img4} alt="services-1" />
                    <div className="px-6 py-4 text-center">
                        <div className="font-bold text-xl mb-2 text-gray-500"> Wall Painting</div>
                        <p className="text-gray-500 text-base font bold my-3 font-bold">
                            Fee: $220
                        </p>
                        <button onClick={handleServiceRoute} className="m-5 px-5 py-2 border border-yellow-400 rounded-full text-2xl text-yellow-600"><i className="fas fa-arrow-right"></i></button>
                    </div>
                    
                </div>

            </div>
        </div>
    );
};

export default IntroService;