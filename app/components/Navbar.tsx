import Link from "next/link";
import Image from "next/image";
import { auth } from "@/auth";

const Navbar = async () => {
    const session = await auth
    return (
        <header className="px-4 py-2 font-work-sans shadow-sm bg-white">
            <nav className="flex justify-between items-center">
            <Link href="/">
                <Image
                src="/logo.png"
                alt="Logo"
                width={144}
                height={30}
                />
            </Link>
            <div className="flex items-center gap-5">

            </div>

            </nav>
        </header>
    )
}

export default Navbar;