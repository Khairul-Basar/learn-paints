import React, { useEffect, useState } from 'react';
import Paint from './Paint';

const RecentPaints = () => {
    const [recentPaints, setRecentPaints] = useState([])
    useEffect(()=>{
        fetch('./JSON/recentPaint.JSON')
        .then(res => res.json())
        .then(data => setRecentPaints(data))
    },[])
    return (
        <div className='py-10 bg-service text-white font-bold bg-opacity-50'>
            
            <h3 className="text-2xl text-center"><span className="border-b-2">Recent Paints</span></h3>
            <div className="grid grid-cols-4 gap-4 text-center mx-36 mt-10">
                {
                    recentPaints.map(paint => {
                        return <Paint key={paint.id} paint={paint}></Paint>
                    })
                }
            </div>
        </div>
    );
};

export default RecentPaints;