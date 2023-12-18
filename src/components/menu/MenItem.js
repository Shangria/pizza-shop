import React from 'react';
import Image from "next/image";

const MenItem = ({itemInfo}) => {
    return (
        <div className="bg-primaryOpacity flex flex-col p-4 rounded-xl text-center shadow-lg shadow-primary">
            <div className="mb-3">
                <Image src={itemInfo.img} alt="pizza"/>
            </div>
            <h3 className="font-semibold text-black uppercase text-xl mb-3">{itemInfo.name}</h3>
            <p className="text-white text-sm mb-2 min-h-[120px]">{itemInfo.description}</p>
            <button className="bg-primary text-white uppercase flex-1 rounded-full py-2 px-3">
                Add to card {itemInfo.price}</button>
        </div>
    );
};

export default MenItem;