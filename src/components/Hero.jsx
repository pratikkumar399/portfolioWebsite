import React from 'react';
import img from "../assets/img.jpg"
import { FaNodeJs, FaReact } from "react-icons/fa";
import { DiJavascript1, DiMongodb } from "react-icons/di";
import { TypeAnimation } from 'react-type-animation';
import colors from '../constants/styles'


const Hero = () => {
    return (
        <section  >
            <div className="px-4 py-12 mx-auto max-w-5xl sm:px-20 md:px-40 lg:px-24 lg:py-24">
                <div className="flex flex-wrap items-center mx-auto max-w-7xl">
                    <div className="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
                        <div>
                            <div className="relative w-full max-w-lg">
                                <div className="absolute top-0 rounded-full bg-violet-300 -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
                                <div className="absolute rounded-full bg-fuchsia-300 -bottom-24 right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
                                <div className="relative  mx-auto ">
                                    <img
                                        className="object-cover object-center mx-auto rounded-lg shadow-2xl"
                                        alt="hero"
                                        src={img}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
                        <span className="mb-8 text-xs font-bold tracking-widest text-blue-600 dark:text-black uppercase">
                            {" "}
                            I am{" "}
                        </span>
                        <h1 className="fontC  mb-8 text-4xl font-bold leading-none dark:text-black tracking-tighter md:text-7xl lg:text-5xl">
                            Pratik Rai
                        </h1>
                        <p className="mb-8 text-xl leading-relaxed text-left dark:text-black  sfont ">
                            <TypeAnimation
                                sequence={[
                                    "I'm a Mern Stack Developer",
                                    1000,
                                    "I'm a Problem Solver",
                                    1000,
                                    "I'm a Student",
                                    1000,
                                ]}
                                speed={50}
                                repeat={Infinity}
                                style={{ fontSize: '1.5em' }}
                            />
                        </p>
                        <div className="flex dark:text-black  flex-wrap w-full mt-2 -mx-4 text-left">
                            <div className="w-1/4 p-4 mt-4 sm:w-1/4">
                                <DiJavascript1 />
                            </div>
                            <div className="w-1/4 p-4 mt-4 sm:w-1/4">
                                <FaNodeJs />
                            </div>
                            <div className="w-1/4 p-4 mt-4 sm:w-1/4">
                                <FaReact />
                            </div>
                            <div className="w-1/4 p-4 mt-4 sm:w-1/4">
                                <DiMongodb />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Hero;
