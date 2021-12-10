import React from 'react';
import profile from '../../image/profile.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    const phoneIcon = <FontAwesomeIcon icon={faMobileAlt} />
    const messageIcon = <FontAwesomeIcon icon={faEnvelopeOpenText} />
    const mapIcon = <FontAwesomeIcon icon={faMapMarkerAlt} />
    return (
        <div className="bg-footer">
            <div className="flex justify-center items-center px-5 py-16 text-white">
                <div className="max-w-sm border-4 rounded-full border-yellow-500">
                    <img className="rounded-full h-36" src={profile} alt="Profile" />
                </div>
                <div className="ml-10 leading-loose text-yellow-500 font-semibold text-opacity-75">
                    <p>{phoneIcon}  +880195600000 </p>
                    <p>{messageIcon} masukanourin99@gmail.com </p>
                    <p>{mapIcon} 2nd Lane Lalbag, Azimpur, Dhaka. </p>
                </div>
                <div className="ml-10 leading-loose text-yellow-500 font-bold">
                    <a href="https://www.facebook.com/nourinheya12"><i className="fab fa-facebook"></i> facebook.com/nourinheya12</a><br />
                    <a href="https://twitter.com/and_hiya"><i className="fab fa-twitter"></i> twitter.com/and_hiya</a><br />
                    <a href="https://www.pinterest.com/hiyaxd/"><i className="fab fa-pinterest"></i> pinterest.com/hiyaxd</a><br />
                    <a href="https://www.instagram.com/masuka_nourin_heya/"><i className="fab fa-instagram"></i> instagram.com/masuka_nourin_heya/</a><br />
                </div>
            </div>
            <p className="text-white pb-10 text-center font-semibold">© Copyright Dec 2021 by Someone <i className="far fa-smile-wink"></i> Me</p>
        </div>
    );
};

export default Footer;