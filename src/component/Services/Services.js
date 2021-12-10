import React, { useEffect, useState } from 'react';
import Common from '../CommonCover/Common';
import Service from './Service';

const Services = () => {
    const [services,setServices] = useState([])
    useEffect(()=>{
        fetch('JSON/services.JSON')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            <Common>Services</Common>
            <div className="container mx-auto grid grid-cols-3 gap-4 my-20 max-w-7xl">
                {
                    services.map(servc=> {
                        return <Service key={servc.id} service={servc}></Service>
                    })
                }
            </div>
        </div>
    );
};

export default Services;