import type { VFC } from "react";
import Image from 'next/image'

const Banner: VFC = () => {
    return (
        <section className="banner">
            <div className="grid grid-cols-3">
                <div className="col-span-1">
                    <div className="flex mt-52">
                        <div className="w-full text-left text-9xl font-extrabold uppercase ml-48 -mr-96 z-50 tracking-wide">
                            <span className="trns-text-black-stroke">Power<span className="ml-8">By</span></span>
                            <div className="my-5"></div>
                            <span className="tracking-normal">Duc Dinh</span>
                    </div>
                    </div>
                    <div className="w-full text-left text-xl ml-52 mt-10">
                        Creative Web & App Developer
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