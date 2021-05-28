import type { VFC } from "react";
import Image from 'next/image'

const Testimonial: VFC = () => {
    return (
        <section className="testimonial my-32" id="testimonial">
            <div className="container mx-auto">
                <div className="">
                    <span className="uppercase trns-text-gray-stroke text-9xl font-extrabold tracking-wider">
                        Testimonial
                            </span>
                    <br />
                    <div className="uppercase font-extrabold text-4xl h-full -mt-16">
                        <span className="">
                            What Clients Say
                            </span>
                    </div>
                </div>
                <div className="mt-20">
                    <div className="grid grid-cols-2">
                        <div className="mt-32">
                            <div className="">
                                <div className="text-9xl">
                                    &rdquo;
                                </div>
                                <div className="pr-32 leading-8 -mt-8">
                                    Awesome template, well written code and looks great on any platform. The customer support is very helpful and as huge asset to this template. Overall a good design, that I am quite happy with.Awesome template, well written code and looks great on any platform. The customer support is very helpful and as huge asset to this template. Overall a good design, that I am quite happy with.
                                </div>
                                <div className="grid grid-cols-2 w-1/4 mt-8">
                                    <div className="">
                                        <Image className="rounded-full"
                                            src="/images/client2_circle.jpg"
                                            width={70}
                                            height={70}
                                        />
                                    </div>
                                    <div className="pt-2">
                                        <div className="font-bold">
                                            Steve Collins
                                        </div>
                                        <div className="font-light">
                                            Artel Corp.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="ml-12">
                                <Image className="rounded-lg"
                                    src="/images/client2.jpg"
                                    width={280}
                                    height={370}
                                />
                            </div>
                            <div className="grid-rows-2">
                                <div className="mb-10">
                                    <Image className="rounded-lg"
                                        src="/images/client3.jpg"
                                        width={280}
                                        height={260}
                                    />
                                </div>
                                <div className="">
                                    <Image className="rounded-lg"
                                        src="/images/client4.jpeg"
                                        width={280}
                                        height={260}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial