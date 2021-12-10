import React from 'react';
import img from '../../image/home-about.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight,faFeather } from '@fortawesome/free-solid-svg-icons'

const ShortAbout = () => {
    const caretIcon = <FontAwesomeIcon icon={faCaretRight} />
    const fetherIcon = <FontAwesomeIcon icon= {faFeather} />
    return (
        <div className='container mx-auto flex justify-center my-36'>
            <div className='max-w-xl ml-10'>
                <p>
                    <span className='border-b-2 border-yellow-500 text-gray-500 font-bold'> About Hiya</span>
                </p>
                <h2 className='text-5xl mt-5 mb-10 font-bold'>We’re Leader in Interior <br /> Design Market</h2>
                <p className='font-semibold text-gray-500 mb-20'>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                </p>
                <div className='text-lg font-medium leading-loose'>
                    <p><span className="text-yellow-500">{caretIcon} </span> We’re professional and certified designers</p>
                    <p><span className="text-yellow-500">{caretIcon} </span> We use quality material to make your walls awesome</p>
                    <p><span className="text-yellow-500">{caretIcon} </span> We care about our students satisfaction</p>
                </div>
                <p className='text-3xl mt-8'>{fetherIcon} <span className="ml-2 font-bold text-yellow-600 text-opacity-75">We have 4+ years of experiences for give you better quality results.</span></p>
            </div>
            <div className='max-w-xl ml-36'>
                <img className='rounded-lg'  src={img} alt="" />
            </div>
        </div>
    );
};

export default ShortAbout;