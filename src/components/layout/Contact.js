import React from 'react';
import Image from "next/image";

const Contact = () => {
    return (
        <div className="py-4">
            <div className="flex ">
                <div className=" w-[70%]">
                    <Image width={1000} height={300} src="/vertical-shot-pizza.png" alt="vertical-shot-pizza"/>
                </div>

                <div className="relative px-4">
                    <span
                        className="font-semibold max-w-3xl whitespace-nowrap text-5xl text-primary absolute right-0 top-10 z-10 bg-white">CONTACT PIZZA SHOP</span>
                    <address className="text-sm pt-36 text-gray-500 not-italic">
                        591 Edgewood Avenue SE<br/>
                        Atlanta, Sn Fr 306612
                    </address>
                    <a className="block text-primary py-8 text-2xl" href="tel:(407) 885-2998">(407) 885-2998</a>
                </div>
            </div>
        </div>
    );
};

export default Contact;