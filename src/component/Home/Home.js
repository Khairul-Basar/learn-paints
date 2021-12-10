import React from 'react';
import IntroService from './IntroService';
import RecentPaints from './RecentPaints/RecentPaints';
import ShortAbout from './ShortAbout';

const Home = () => {
    return (
        <>
            <div className='relative'>
                <img src="https://smartdemowp.com/wazors/wp-content/uploads/slide-v1-1.jpg" alt="" />
                
                <div className='absolute inset-1/4'>
                    <h3 className="text-2xl font-bold text-yellow-700">Welcome to Learning Wallapering &amp; Painting </h3>
                    <div>
                        <h2 className="text-7xl font-bold text-yellow-600 ">
                            Learn The <br /> Best Quality <br /> Wallpapers 
                        </h2>
                    </div>
                    <button className='mt-6 border-2 border-yellow-500 rounded-3xl py-4 px-5 font-bold text-yellow-600 text-xl'>Discover More</button>
                </div>
            </div>
            <ShortAbout></ShortAbout>
            <RecentPaints></RecentPaints>
            <IntroService></IntroService>
        </>
    );
};

export default Home;