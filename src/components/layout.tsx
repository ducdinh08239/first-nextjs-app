import type { ReactNode, VFC } from "react";
import Nav from './nav'
import Footer from './footer'
import Image from 'next/image'
import Link from "next/link";
import { useRouter } from 'next/router'

const name = 'Your Name'
export const siteTitle = 'Next.js Sample Website'

const Layout: VFC<{ children: ReactNode }> = ({ children }) => {
    const router = useRouter()
    
    const navItems = [
        { href: "/#home", label: "Home" },
        { href: "/#about", label: "About" },
        { href: "/#portfolio", label: "Portfolio" },
        { href: "/#new", label: "New" },
        { href: "/#contact", label: "Contact" },
    ]

    return (
        <>
            <Nav >
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
                                {href == router.asPath ? (
                                    <a className="underline-custom m-5 font-bold h-5 inline-block items-center">{label}</a>
                                ) : (
                                    <a className="m-5 font-bold h-5 inline-block items-center">{label}</a>
                                )
                                }
                            </Link>
                        );
                    })}
                </div>
            </Nav>
            <main>{children}</main>
            <Footer />
        </>
    )
}
export default Layout