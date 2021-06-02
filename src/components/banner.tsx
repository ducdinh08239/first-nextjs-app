import type { VFC } from "react";
import Image from 'next/image'

interface props {
    shortName: string
    profession: string
}

const Banner: VFC<any> = (props:props) => {
    let {shortName, profession} = props
    let userShortName = shortName ? shortName : "Duc Dinh"
    let userProfession = profession ? profession : "Some profession && ..."
    return (
        <section className="banner" id="home">
            <div className="grid grid-cols-3">
                <div className="col-span-1">
                    <div className="flex mt-52">
                        <div className="w-full text-left text-9xl font-extrabold uppercase ml-48 -mr-96 z-40 tracking-wide">
                            <span className="trns-text-black-stroke">Power<span className="ml-8">By</span></span>
                            <div className="my-5"></div>
                            <span className="tracking-tighter">{userShortName}</span>
                    </div>
                    </div>
                    <div className="w-full text-left text-xl ml-52 mt-10">
                        {userProfession}
                    </div>
                </div>
                <div className="col-span-2">
                    <Image
                        src="/images/banner.jpg"
                        width={1300}
                        height={900}
                    />
                </div>
            </div>
        </section>
    )
}

export default Banner