"use client";
import React, {useState} from 'react';
import Image from "next/image";
import googleLogo from "/public/google-logo.png";
import Link from "next/link";
import {toast} from 'react-toastify';

const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userCreatingState, setUserCreatingState] = useState(false);

    const handleFormSubmit = (e) => {

        e.preventDefault();
        fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email, password
            }),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setUserCreatingState(true);
                setPassword('');
                setEmail('');
                toast.success("You've successfully registered");
            })
            .catch(error => {
                console.error("error: ", error);
                toast.error("Registration is not complete");
            });
    };

    return (
        <div className="py-8 w-full">
            <h2 className="text-primary font-bold text-center text-[35px] uppercase mb-3">Register</h2>
            {
                userCreatingState && (
                    <div className="flex justify-center items-center flex-col py-4">
                        <p>User created</p>
                        <Link href="/login" className="uppercase underline text-primary">Login</Link>
                    </div>
                )
            }
            <form className="shadow-red-900 flex flex-col max-w-sm mx-auto" onSubmit={handleFormSubmit}>
                <input className="mb-4"
                       value={email}
                       type="email"
                       placeholder="email"
                       onChange={e => setEmail(e.target.value)}
                />
                <input className="mb-8"
                       type="password"
                       placeholder="password"
                       value={password}
                       onChange={e => setPassword(e.target.value)}
                />
                <button type="submit" className="bg-primary mb-4 w-full mx-auto text-white">Register</button>
                <button type="submit" className="lowercase text-gray-500 mb-4 w-full mx-auto">or
                    login with provider
                </button>
                <button type="submit" className="lowercase border border-gray-300  text-gray-500 mb-4 w-full mx-auto">
                    <Image width={20} height={20} src={googleLogo} alt="googleLogo"/>
                    login with google
                </button>
            </form>
            <div className="text-center my-4 text-gray-500">
                Exiting account? {""}
                <Link className="underline" href="/login"> Login here → </Link>
            </div>
        </div>
    );
};

export default RegisterPage;