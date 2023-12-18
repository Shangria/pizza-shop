import React from 'react';
import Image from "next/image";

const MenItem = ({itemInfo}) => {
    return (
        <div className="bg-primaryOpacity p-4 rounded-xl text-center shadow-lg shadow-primary">
            <Image src={itemInfo.img} alt="pizza"/>
            <h3 className="font-semibold text-primary uppercase text-xl">{itemInfo.name}</h3>
            <p className="text-white text-sm mb-2">{itemInfo.description}</p>
            <button className="bg-primary text-white uppercase rounded-full py-2 px-3">Add to card {itemInfo.price}</button>
        </div>
    );
};

export default MenItem;