"use client";
import Link from "next/link";
import {signOut, useSession} from "next-auth/react";
import UserInfo from "../userInfo/userInfo";
import Loader from "../loader/loader";

const Header = () => {
    const session = useSession();
    const status = session?.status;
    const isLoading = session?.status === "loading";

    return (
        <header className="flex items-center justify-between">
            <Link className="text-primary font-semibold text-2xl" href="/">PiZZA SHOP</Link>
            <nav className="flex items-center gap-8 text-gray-500 font-semibold">
                <Link href="/">Home</Link>
                <Link href="">Menu</Link>
                <Link href="">About</Link>
                <Link href="">Contact</Link>

            </nav>
            <nav className="flex min-w-[220px] justify-center">
                {
                    !isLoading ?
                        (status === "authenticated" ?
                            <>
                                <UserInfo userData={session?.data?.user}/>
                                <button onClick={() => signOut()}
                                        className="rounded-full text-gray-500 px-6 py-2">Logout
                                </button>
                            </>
                            :
                            <>
                                <Link legacyBehavior href="/register">
                                    <a className="border border-1 border-primaryOpacity block mr-2 rounded-full text-primary px-6 py-2">Register</a>
                                </Link>
                                <Link legacyBehavior href="/login">
                                    <a className="bg-primary rounded-full text-white px-6 py-2">Login</a>
                                </Link>
                            </>)
                        : <Loader/>
                }
            </nav>
        </header>
    );
};

export default Header;