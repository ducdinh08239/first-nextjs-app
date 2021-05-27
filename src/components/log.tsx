import Link from "next/link";
import type { VFC } from "react";
import Image from 'next/image'
import { useRouter } from 'next/router'

// console.log(location.pathname);
const Log: VFC = () => {

    return (
        <Link href="/auth/login">
            <a className="fixed right-10 bottom-10">
                <Image className="shadow-2xl" title="Log In"
                    src="/images/log_in.png"
                    width={100}
                    height={100}
                />
            </a>
        </Link>
    )
}

export default Log