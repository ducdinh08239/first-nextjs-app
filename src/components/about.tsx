import type { VFC } from "react";
import Image from 'next/image'

interface AboutProps {
    full_name?: string
    profession?: string
    avatar_url?: string
}

const About: VFC<AboutProps> = (props: AboutProps) => {
    let {full_name, profession, avatar_url} = props
    let userFullName = full_name || "Full name of some one"
    let userProfession = profession || "Some profession && ..."
    let userAvatar = avatar_url || "/images/about.jpg"

    return (
        <section className="about container mx-auto mt-44" id="about">
            <div className="grid grid-cols-2">
                <div className="about-avatar">
                    <img src={userAvatar} width="518px" height="477px" className="rounded-md" />
                </div>
                <div className="about-content">
                    <div className="about-title">
                        <div className="h-full -mt-10">
                            <span className="uppercase trns-text-gray-stroke text-9xl font-extrabold -ml-32 tracking-wider">
                                About
                            </span>
                            <br />
                            <div className="uppercase -ml-32 font-extrabold text-4xl h-full -mt-16">
                                <span className="">
                                    {userFullName}
                            </span>
                            </div>
                        </div>
                        <br />
                        <span className="-ml-32 font-bold">
                            {userProfession}
                        </span>
                    </div>
                    <div className="-ml-32">

                        <hr className="mt-10 mb-10" />
                        <div className="about-description pr-72">
                            My name is Bernard Sydney. I am a Web Developer, and I'm very passionate and dedicated to my work.
                    <br />
                            <br />
                        With 20 years experience as a professional Web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration.
                    </div>
                        <div className="about-button text-center py-4 items-center text-white uppercase bg-black rounded-full w-52 mt-10">
                            Download cv
                    </div>
                    </div>
                </div>
            </div>
            <div className="about-talent container mx-auto my-32">
                <div className="grid grid-cols-3">
                    <div className="grid grid-cols-2">
                        <Image className="rounded-md"
                            src="/images/coding.svg"
                            width={100}
                            height={100}
                        />
                        <div className="">
                            <div className="text-2xl font-bold mb-5">Web Development</div>
                            <div className="">Web design is a similar process of creation, with the intention of presenting...</div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2">
                        <Image className="rounded-md"
                            src="/images/creative.svg"
                            width={100}
                            height={100}
                        />

                        <div className="">
                            <div className="text-2xl font-bold mb-5">Creative Design</div>
                            <div className="">Web design is a similar process of creation, with the intention of presenting...</div>
                        </div>

                    </div>
                    <div className="grid grid-cols-2">
                        <Image className="rounded-md"
                            src="/images/reputation.svg"
                            width={100}
                            height={100}
                        />
                        <div className="">
                            <div className="text-2xl font-bold mb-5">Brand Identity</div>
                            <div className="">Web design is a similar process of creation, with the intention of presenting...</div>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default About