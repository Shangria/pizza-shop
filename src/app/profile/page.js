"use client";
import {useSession} from "next-auth/react";
import Loader from "../../components/loader/loader";
import {redirect} from "next/navigation";

const ProfilePage = () => {
    const session = useSession();
    const {status} = session;


    if (status === "loading") {
        return <Loader/>;
    }

    if (status === "unauthenticated") {
        return redirect("/login");
    }


    return (
        <div className="py-8">
            <h2 className="text-primary font-bold text-center text-[35px] uppercase mb-3">Profile</h2>
        </div>
    );
};

export default ProfilePage;