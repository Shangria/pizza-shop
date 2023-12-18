import Image from "next/image";
import React from "react";
import MenItem from "@/components/menu/MenItem";
import pizza1 from "../../../public/pizza1.png";
import pizza2 from "../../../public/pizza2.png";
import pizza3 from "../../../public/pizza3.png";
import pizza4 from "../../../public/pizza4.png";
import pizza5 from "../../../public/pizza5.png";
import pizza6 from "../../../public/pizza6.png";

export const menuInfo = [
    {
        name: "Frank Pepe Pizzeria Napoletana",
        img: pizza1,
        description: "Daily Meal ranked as one of America’s Top 10 Pepperoni Pies.  Mozzarella, fontina, grana padano, smoked pepperoni, fresh basil",
        price: "",
    },
    {
        name: "Sally's Apizza",
        img: pizza2,
        description: "Red veggie pie: spinach, mozzarella, feta, marinated artichoke heart, kalamata olive",
        price: "",
    },
    {
        name: "Henrietta Blanche",
        img: pizza3,
        description: "Red pie: mozzarella, aged provolone, fennel sausage, banana pepper,  roasted red pepper, grana padano, fresh basil",
        price: "",
    },
    {
        name: "Buffy Ernst ",
        img: pizza4,
        description: "Our take on the traditional buffalo chicken pie.  White pie: mozzarella, roasted chicken, blue cheese, red onion, scallion, house buffalo sauce",
        price: "",
    },
    {
        name: "Barbie Ernst",
        img: pizza5,
        description: "White pie: mozzarella, fontina, roasted chicken, red onion, banana pepper, house BBQ sauce.  (House slaw topping as pictured no longer available).",
        price: "",
    },
    {
        name: "Felix Hupert ",
        img: pizza6,
        description: "White pie: mozzarella, gruyere, caramelized onion, fresh thyme",
        price: "",
    },
];

const HomeMenu = () => {
    return (
        <>
            <div className="h-[300px] w-[300px] left-0 absolute">
                <Image layout="fill" objectFit="contain" src="/chilli2.png" alt="sallad"/>
            </div>
            <div className="h-[500px] w-[230px] right-0  absolute">
                <Image layout="fill" objectFit="contain" src="/pizza-right.png" alt="sallad"/>
            </div>

            <div className="text-center">
                <h3 className="uppercase text-gray-600 font-semibold my-2">Check out</h3>
                <h2 className="text-primary font-bold text-xl">Menu</h2>
            </div>
            <div className="grid grid-cols-3 gap-3 z-10 relative">
                {
                    menuInfo.map(item => {
                        return (
                            <React.Fragment key={item.name}>
                                <MenItem itemInfo={item}/>
                            </React.Fragment>

                        );

                    })
                }

            </div>
        </>
    );
};

export default HomeMenu;