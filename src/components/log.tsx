import Link from "next/link";
import type { VFC } from "react";
import Image from 'next/image'
import { useRouter } from 'next/router'
import { getUserFromCookie, removeUserCookie } from '../components/auth/userCookies'

interface props {
    doc_id?: string;
}

const Log: VFC<props> = (props) => {

    return (
        <>
            { (getUserFromCookie() == undefined) ? (
                <div className="fixed right-10 bottom-10">
                    <Link href="/auth/login">
                        <a className="">
                            <Image className="shadow-2xl" title="Log In"
                                src="/images/log_in.png"
                                width={70}
                                height={70}
                            />
                        </a>
                    </Link>

                    <div className="">
                        <Link href={`/products`}>
                            <a className="">
                                <Image className="shadow-2xl" title="Other Products"
                                    src="/images/products.png"
                                    width={70}
                                    height={70}
                                />
                            </a>
                        </Link>
                    </div>
                </div>
            ) : (
                <div className="fixed right-10 bottom-10">
                    <Link href={`/info-edit/${props.doc_id}`}>
                        <a className="">
                            <Image className="shadow-2xl" title="Setting"
                                src="/images/settings.png"
                                width={70}
                                height={70}
                            />
                        </a>
                    </Link>
                    <div className="" onClick={removeUserCookie}>
                        <Image className="shadow-2xl" title="Log Out"
                            src="/images/log_out.png"
                            width={70}
                            height={70}
                        />
                    </div>
                    <div className="">
                        <Link href={`/products`}>
                            <a className="">
                                <Image className="shadow-2xl" title="Other Products"
                                    src="/images/products.png"
                                    width={70}
                                    height={70}
                                />
                            </a>
                        </Link>
                    </div>
                </div>
            )
            }
        </>
    )
}

export default Log