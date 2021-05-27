import type { ReactNode, VFC } from "react";
import Nav from './nav'
import Footer from './footer'

const name = 'Your Name'
export const siteTitle = 'Next.js Sample Website'

const Layout: VFC<{ children: ReactNode }> = ({ children }) => {
    return (
        <>
            <Nav />
                <main>{children}</main>
            <Footer />
        </>
    )
}
export default Layout