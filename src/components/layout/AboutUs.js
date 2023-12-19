import React from 'react';
import Image from "next/image";

const AboutUs = () => {
    return (
        <div className="py-8">
            <h2 className="text-primary font-bold text-center text-[35px] uppercase mb-3">About us</h2>
            <div className="w-full">
                <div className=" w-full h-[370px] relative mb-6">
                    <Image className="rounded-t-3xl" layout="fill" objectFit="cover" src="/pizza-bg2.png" alt="pizza"/>
                </div>

                <p className="text-xl text-gray-500 mb-6">When creating Pizza shop we wanted to combine two things
                    people
                    enjoy the most—pizza + beer—and put them in an open, neighborhood-friendly space that invites people
                    to come and go as they please. With a vast selection of over 30 well thought out beers, we then set
                    out with an ambitious goal—to create the best pizza money could buy.
                    <br/><br/>
                    We worked with the simple truth that people recognize quality, so we created a pizza using the best
                    ingredients. Instead of limiting ourselves to Neapolitan-style or NY-style pizza, we combined the
                    characteristics we loved from each style to create a truly unique pizza experience. </p>
                <div className="w-full h-[370px] relative ">
                    <Image className="rounded-b-3xl" layout="fill" objectFit="cover" src="/pizza-bg.png" alt="pizza"/>

                </div>
            </div>

        </div>
    );
};

export default AboutUs;