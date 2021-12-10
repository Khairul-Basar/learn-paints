import React from 'react';

const Paint = (props) => {
    const {title,img} = props.paint
    return (
        <div className="max-w-md">
            <img className="rounded-xl h-96 w-full border" src={img} alt="" />
            <p className="mt-3">{title}</p>
        </div>
    );
};

export default Paint;