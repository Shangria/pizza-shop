"use client";
import {useSession} from "next-auth/react";
import Loader from "../../components/loader/loader";
import {redirect} from "next/navigation";
import Image from "next/image";
import React, {useEffect, useState} from "react";
import {toast} from "react-toastify";

const ProfilePage = () => {
    const session = useSession();
    const [userName, setUserName] = useState("");
    const {status} = session;

    useEffect(() => {
        if (status === "authenticated") {
            setUserName(session?.data?.user.name);
        }
    }, [status, session]);

    if (status === "loading") {
        return <Loader/>;
    }

    if (status === "unauthenticated") {
        return redirect("/login");
    }
    const infoUpdate = async (e) => {
        e.preventDefault();
        await fetch('/api/profile', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: userName,
            }),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .catch(error => {
                console.error("error: ", error);
                toast.error("Username is not change");
            });
    };

console.log( session?.data?.user?.image)
    return (
        <div className="py-8">
            <h2 className="text-primary font-bold text-center text-[35px] uppercase mb-3">Profile</h2>
            <div className="flex items-center justify-center">
                <div className="w-[100px] h-[100px] relative mr-2 ">
                    {
                        session?.data?.user?.image ?
                            <Image className="rounded-full" layout="fill" src={session?.data?.user?.image}
                                   alt="user logo"/> :
                            <Image className="rounded-full" layout="fill"  src="/pizza_placeholder.png"
                                   alt="pizza fun"/>
                    }
                    <div className="w-[30px] h-[30px] absolute  bottom-0 right-0 cursor-pointer">
                        <Image layout="fill" src="./change-avatar.svg" alt="user-logo"/>
                    </div>
                </div>
                <form onSubmit={infoUpdate} className="flex flex-col items-center max-w-md w-full">
                    <input className="mb-3"
                           value={userName}
                           onChange={e => {
                               setUserName(e.target.value);
                           }}
                           type="text"
                           placeholder="First and last name"
                    />
                    <button type="submit" className="bg-primary mb-4 w-full mx-auto text-white">Save</button>
                </form>

            </div>
        </div>
    );
};

export default ProfilePage;