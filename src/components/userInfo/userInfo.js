import Link from "next/link";
import Image from "next/image";

const UserInfo = ({userData}) => {
    return (
        <Link href="/profile" className="flex items-center mr-2">
                {
                    userData?.name ? <>
                        <div className="mr-2">
                            <Image className="rounded-full" width={40} height={40} src={userData?.image}
                                   alt="user logo"/></div>
                        <span>{userData?.name}</span>
                    </> : <>
                        <Image className="rounded-full" width={40} height={40} src="/pizza_placeholder.png"
                               alt="user logo"/>
                        <span>Pizza fan</span>
                    </>
                }
        </Link>
    );
};
export default UserInfo;
