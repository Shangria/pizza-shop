import Link from "next/link";

const Header = () => {
    return (
        <header className="flex items-center justify-between">
            <Link className="text-primary font-semibold text-2xl" href="/">PiZZA SHOP</Link>
            <nav className="flex items-center gap-8 text-gray-500 font-semibold">
                <Link href="/">Home</Link>
                <Link href="">Menu</Link>
                <Link href="">About</Link>
                <Link href="">Contact</Link>

            </nav>
            <nav className="flex">
                <Link href="/register" className="border border-1 border-primaryOpacity block mr-2 rounded-full text-primary px-6 py-2">Register</Link>
                <Link href="/login" className="bg-primary rounded-full text-white px-6 py-2">Login</Link>
            </nav>
        </header>
    );
};

export default Header;