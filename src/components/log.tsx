import Link from "next/link";
import type { VFC } from "react";
import Image from 'next/image'
import { useRouter } from 'next/router'
import { getUserFromCookie, removeUserCookie } from '../components/auth/userCookies'

const Log: VFC = () => {

    return (
        <>
            { (getUserFromCookie() == undefined) ? (
                <Link href="/auth/login">
                    <a className="fixed right-10 bottom-10">
                        <Image className="shadow-2xl" title="Log In"
                            src="/images/log_in.png"
                            width={100}
                            height={100}
                        />
                    </a>
                </Link>
            ) : (
                    <div className="fixed right-10 bottom-10" onClick={removeUserCookie}>
                        <Image className="shadow-2xl" title="Log Out"
                            src="/images/log_out.png"
                            width={100}
                            height={100}
                        />
                    </div>
            )
            }
        </>
    )
}

export default Log