import type { VFC } from "react";
import Image from 'next/image'

const Portfolio: VFC = () => {
    return (
        <section className="portfolio py-32 bg-gray-100" id="portfolio">
            <div className="container mx-auto">
                <div className="">
                    <span className="uppercase trns-text-gray-stroke text-9xl font-extrabold tracking-wider">
                        Portfolio
                            </span>
                    <br />
                    <div className="uppercase font-extrabold text-4xl h-full -mt-16">
                        <span className="">
                            Featured work
                            </span>
                    </div>
                </div>
                <div className="grid grid-cols-3 mt-32">
                    <div className="mb-28">
                        <Image className="rounded-lg"
                            src="/images/port1.jpg"
                            width={395}
                            height={395}
                        />
                        <p className="font-bold text-xl mt-5 mb-2">Smart Orchid Management</p>
                        <p>Frontend & Backend</p>
                    </div>
                    <div className="mb-28">
                        <Image className="rounded-lg"
                            src="/images/port2.webp"
                            width={395}
                            height={395}
                        />
                        <p className="font-bold text-xl mt-5 mb-2">Hotel Management</p>
                        <p>Frontend & Backend</p>
                    </div>
                    <div className="mb-28">
                        <Image className="rounded-lg"
                            src="/images/port3.jpg"
                            width={395}
                            height={395}
                        />
                        <p className="font-bold text-xl mt-5 mb-2">Smartphone Shop Management</p>
                        <p>Frontend & Backend</p>
                    </div>
                    <div className="mb-28">
                        <Image className="rounded-lg"
                            src="/images/port4.jpg"
                            width={395}
                            height={395}
                        />
                        <p className="font-bold text-xl mt-5 mb-2">Feng Shui Shop</p>
                        <p>Frontend</p>
                    </div>
                    <div className="mb-28">
                        <Image className="rounded-lg"
                            src="/images/port5.webp"
                            width={395}
                            height={395}
                        />
                        <p className="font-bold text-xl mt-5 mb-2">Hospital Management</p>
                        <p>Frontend</p>
                    </div>
                    <div className="mb-28">
                        <Image className="rounded-lg"
                            src="/images/port6.jpg"
                            width={395}
                            height={395}
                        />
                        <p className="font-bold text-xl mt-5 mb-2">Food Reviewer</p>
                        <p>Frontend & Backend</p>
                    </div>
                </div>
                <div className="about-button text-center text-white uppercase bg-black rounded-full w-48 mx-auto py-5">
                    View All Work
                    </div>
            </div>
        </section>
    )
}

export default Portfolio