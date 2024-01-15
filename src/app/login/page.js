"use client";
import React, {useState} from "react";
import Image from "next/image";
import googleLogo from "../../../public/google-logo.png";
import {signIn} from "next-auth/react";


const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleForLogin = async (e) => {
        e.preventDefault();

        await signIn('credentials', {email, password, callbackUrl:'/'});
    };

    return (
        <div className="py-8 w-full">
            <h2 className="text-primary font-bold text-center text-[35px] uppercase mb-3">Login</h2>
            <form className="shadow-red-900 flex flex-col max-w-sm mx-auto" onSubmit={handleForLogin}>
                <input className="mb-4"
                       name="email"
                       value={email}
                       type="email"
                       placeholder="email"
                       onChange={e => setEmail(e.target.value)}
                />
                <input className="mb-8"
                       name="password"
                       type="password"
                       placeholder="password"
                       value={password}
                       onChange={e => setPassword(e.target.value)}
                />
                <button type="submit" className="bg-primary mb-4 w-full mx-auto text-white">Login</button>
                <button type="submit" className="lowercase text-gray-500 mb-4 w-full mx-auto">or
                    login with provider
                </button>
                <button onClick={()=>signIn("google", {callbackUrl:'/'})} type="submit" className="lowercase border border-gray-300  text-gray-500 mb-4 w-full mx-auto">
                    <Image width={20} height={20} src={googleLogo} alt="googleLogo"/>
                    login with google
                </button>
            </form>
        </div>
    );
};

export default LoginPage;
