import type { VFC } from "react";
import Image from 'next/image'

const Footer: VFC = () => {
    return (
        <footer className="bg-black w-full text-white py-24">
            <div className="grid grid-cols-4 container mx-auto">
                <div className="">
                    <p className="uppercase mb-3">Dinh Viet Viet Duc</p>
                    <p className="uppercase">personal PORTFOLIO</p>
                </div>
                <div className="">
                    <p className="uppercase mb-3">Xuan Phuong, Nam Tu Liem</p>
                    <p className="uppercase">Ha Noi, Viet Nam</p>
                </div>
                <div className="">
                    <p className="uppercase mb-3">ducdinh08239@gmail.com</p>
                    <p className="uppercase">+84 0823965786</p>
                </div>
                <div className="flex items-center">
                    <Image className=""
                        src="/images/facebook.png"
                        width={22}
                        height={22}
                    />&nbsp;&nbsp;&nbsp;
                    <Image className="mr-2"
                        src="/images/zalo.png"
                        width={22}
                        height={22}
                    />&nbsp;&nbsp;&nbsp;
                    <Image className="mr-2"
                        src="/images/instagram.png"
                        width={22}
                        height={22}
                    />&nbsp;&nbsp;&nbsp;
                    <Image className="mr-2"
                        src="/images/twitter.png"
                        width={22}
                        height={22}
                    />&nbsp;&nbsp;&nbsp;
                    <Image className="mr-2"
                        src="/images/in.png"
                        width={22}
                        height={22}
                    />&nbsp;&nbsp;&nbsp;
                    <Image className="mr-2"
                        src="/images/skype.png"
                        width={22}
                        height={22}
                    />

                </div>
            </div>
        </footer>
    )
}

export default Footer