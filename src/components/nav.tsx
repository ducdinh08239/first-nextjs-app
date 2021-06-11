import { useRouter } from 'next/router'
import { FC } from "react";

const Nav: FC = (props) => {
    return (
        <div className="shadow w-full fixed z-50 bg-white">

            <nav className="mx-auto flex justify-between bg-transparent container">
                {props.children}
            </nav>
        </div>
    )
}

export default Nav