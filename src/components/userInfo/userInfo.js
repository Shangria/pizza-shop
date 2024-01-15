import Link from "next/link";
import Image from "next/image";

const UserInfo=({userData})=>{
    return(
        <Link href="/profile" class="flex items-center mr-2">
            <div class="mr-2">
                <Image className="rounded-full" width={40} height={40} src={userData?.image} alt="user logo"></Image>
            </div>
            <span>{userData?.name}</span>
        </Link>
    )
}
 export default UserInfo
