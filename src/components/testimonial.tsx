import { useEffect, useState, VFC } from "react";
import Image from 'next/image'
import { isFunction } from "util";

const Testimonial: VFC = () => {

    let arr = [
        {
            id: "1",
            name: "Abby",
            position: "Architecture",
            avatar_url: "/images/client2_circle.jpg",
            content: "Awesome template, well written code and looks great on any platform. The customer support is very helpful and as huge asset to this template. Overall a good design, that I am quite happy with.Awesome template, well written code and looks great on any platform. The customer support is very helpful and as huge asset to this template. Overall a good design, that I am quite happy with."
        },
        {
            id: "2",
            name: "Lacey",
            position: "Design",
            avatar_url: "/images/client3_circle.jpg",
            content: "The customer support is very helpful and as huge asset to this template. Overall a good design, that I am quite happy with.Awesome template, well written code and looks great on any platform. The customer support is very helpful and as huge asset to this template. Overall a good design, that I am quite happy with.Awesome template, well written code and looks great on any platform. "
        },
        {
            id: "3",
            name: "Haider",
            position: "Elegant",
            avatar_url: "/images/client4_circle.jpeg",
            content: "Overall a good design, that I am quite happy with.Awesome template, well written code and looks great on any platform. The customer support is very helpful and as huge asset to this template. Overall a good design, that I am quite happy with.Awesome template, well written code and looks great on any platform. The customer support is very helpful and as huge asset to this template."
        }
    ]

    // console.log(arr[0]);

    const [testimonial, setTestimonial] = useState({
        id: arr[0].id,
        name: arr[0].name,
        position: arr[0].position,
        avatar_url: arr[0].avatar_url,
        content: arr[0].content
    })

    const handleImage = (e) => {
        arr.map(arr_item => {
            if (arr_item.id == e.target.id) {
                setTestimonial({
                    id: e.target.id,
                    name: arr_item.name,
                    position: arr_item.position,
                    avatar_url: arr_item.avatar_url,
                    content: arr_item.content
                })
            }
        })
    }

    useEffect(() => {
            document.querySelectorAll('img.avatar').forEach((e) => {
                if (e.id == testimonial.id) {
                    e.className = `avatar rounded-lg opacity-100`
                }
                else {
                    e.className = `avatar rounded-lg opacity-50`
                }

            });
    }, [testimonial])

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
                                    {testimonial.content}
                                </div>
                                <div className="grid grid-cols-2 w-2/4 mt-8">
                                    <div className="">
                                        <Image className="rounded-full"
                                            src={`${testimonial.avatar_url}`}
                                            width={70}
                                            height={70}
                                        />
                                    </div>
                                    <div className="pt-2 -ml-24">
                                        <div className="font-bold">
                                            {testimonial.name}
                                        </div>
                                        <div className="font-light">
                                            {testimonial.position}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="ml-12">
                                <Image
                                    className='avatar'
                                    src="/images/client2.jpg"
                                    width={280}
                                    height={370}
                                    onClick={handleImage}
                                    id='1'
                                />
                            </div>
                            <div className="grid-rows-2">
                                <div className="mb-10">
                                    <Image className='avatar'
                                        src="/images/client3.jpg"
                                        width={280}
                                        height={260}
                                        onClick={handleImage}
                                        id='2'
                                    />
                                </div>
                                <div className="">
                                    <Image className='avatar'
                                        src="/images/client4.jpeg"
                                        width={280}
                                        height={260}
                                        onClick={handleImage}
                                        id='3'
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