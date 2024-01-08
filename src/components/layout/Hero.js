import Image from "next/image";
import RightArrow from "../icons/Right-arrow";

const Hero = () => {
    return (
        <section className="grid grid-cols-2">
            <div className="py-12">
                <h1 className="text-5xl font-semibold mb-6 tracking-[8px]">Always the best ingredients at the best <span
                    className="text-primary">PIZZA</span></h1>
                <p className="my-4 text-gray-500 text-sm mb-6">All American Pizza is a family owned and operated
                    pizzeria. We
                    wouldn’t feed your family anything we
                    wouldn’t feed ours.</p>
                <div className="flex gap-4 text-sm">
                    <button
                        className="bg-primary text-white">Order
                        now <RightArrow/></button>
                    <button className="flex gap-2 py-2 text-gray-600 font-semibold">Learn more <RightArrow/></button>

                </div>
            </div>

            <div className="relative">
                <Image src="/pizza.png" layout="fill" objectFit="contain" alt="pizza"/>
            </div>
        </section>
    );
};

export default Hero;