import Link from "next/link";
import type { VFC } from "react";
import Image from 'next/image'
import { useRouter } from 'next/router'

const navItems = [
    { href: "/home", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/new", label: "New" },
    { href: "/contact", label: "Contact" },
]
// console.log(location.pathname);
const Nav: VFC = () => {

    const router = useRouter()

    return (
        <div className="shadow w-full">

            <nav className="mx-auto flex justify-between bg-transparent container">
                <div className="nav-logo">
                    <Image
                        src="/images/logo.png"
                        width={60}
                        height={60}
                    />
                </div>
                <div className="nav-content">
                    {navItems.map(({ href, label }) => {
                        return (
                            <Link href={href} key={href}>
                                { href == router.asPath ? (
                                    <a className="underline-custom m-5 font-bold h-5 inline-block items-center">{label}</a>
                                ) : (
                                    <a className="m-5 font-bold h-5 inline-block items-center">{label}</a>
                                )
                                }
                            </Link>
                        );
                    })}
                </div>
            </nav>
        </div>
    )
}

export default Nav