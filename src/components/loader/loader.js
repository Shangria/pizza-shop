import React from 'react';
import Image from "next/image";
import loader from "./img/pizzaLoader.png"

const Loader = () => {
    return (
        <div className="animate-spin">
            <Image width={30} height={40} src={loader} alt="loader"/>
        </div>
    );
};

export default Loader;