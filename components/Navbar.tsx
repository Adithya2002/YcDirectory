import Link from "next/link";
import Image from "next/image";
import { auth, signIn, signOut } from "@/auth";

const Navbar = async () => {
    const session = await auth();
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

                <div className="flex items-center gap-5 text-black">
                    {session && session?.user ? (
                        <>
                            <Link href="/startup/create">
                                <span>Create</span>
                            </Link>

                            <form action={async () => {
                                "use server"
                                await signOut({ redirectTo: "/" })
                            }}>
                                <button type="submit">
                                    <span>Log out</span>
                                </button>

                            </form>
                            
                            <Link href={`/user/${session?.id}`}>
                                <span>{session?.user?.name}</span>
                            </Link>
                        </>
                    ) : (
                        <form onClick={async () => {
                            "use server";
                            await signIn('github')
                        }}>
                            <button>
                                <span>Login</span>
                            </button>

                        </form>
                    )
                    }
                </div>

            </nav>
        </header>
    )
}

export default Navbar;