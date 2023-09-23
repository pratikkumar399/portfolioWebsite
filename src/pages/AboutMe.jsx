import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaLink } from 'react-icons/fa';
import myphoto from "../assets/myphoto.jpg"
import color from '../constants/styles'
const Contact = () => {
    return (
        <>
            <div className="bg-gray-100">
                <div className="container mx-auto py-8">
                    <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
                        <div className="col-span-4 sm:col-span-3">
                            <div className="bg-white shadow rounded-lg p-6">
                                <div className="flex flex-col items-center">
                                    <img
                                        src={myphoto}
                                        className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"
                                    />
                                    <h1 className="text-xl font-bold">Pratik Rai</h1>
                                    <p className="text-gray-600">Frontend Developer</p>
                                    <div className="mt-6 flex flex-wrap gap-4 justify-center">
                                        <a
                                            to="#"
                                            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                                        >
                                            Mail
                                        </a>
                                        <a
                                            to="#"
                                            className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded"
                                        >
                                            Resume
                                        </a>
                                    </div>
                                </div>
                                <hr className="my-6 border-t border-gray-300" />
                                <div className="flex flex-col">
                                    <span className="text-gray-600 uppercase font-bold tracking-wider mb-2">
                                        Skills
                                    </span>
                                    <ul>
                                        <li className="mb-2">C++ | JavaScript | Python | Java </li>
                                        <li className="mb-2">React | TailwindCSS </li>
                                        <li className="mb-2">NodeJs | ExpressJs </li>
                                        <li className="mb-2">MySql | MongoDb</li>
                                        <li className="mb-2">Git | Github</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-4 sm:col-span-9">
                            <div className="bg-white shadow rounded-lg p-6">
                                <h2 className="text-xl font-bold mb-4">About Me</h2>
                                <p className="text-gray-700">
                                    My name is Pratik Rai. I am originally from bettiah, bihar. I am currently pursuing Computer Science and Engineering from Chandigarh University. My interests lie in web development and my projects showcase my skills. Ever since the freshman year, I have learnt and build projects on various teach stacks like javascript , react, php . My recent project is a group project which aims at creating a common place for college students to interact and get advice from seniors. Besides that students can also join communities and find resource to learn and share their knowledge. Since I am very interested in building products, I am actively looking towards a software developer role.


                                </p>
                                <h3 className="font-semibold text-center mt-3 -mb-2">Find me on</h3>
                                <div className="flex justify-center items-center gap-6 my-6">
                                    <div className="flex -mx-2">
                                        <Link
                                            to="#"
                                            className="mx-2 text-gray-600 transition-colors duration-300 dark:text-black hover:text-blue-500 dark:hover:text-blue-400"
                                            aria-label="Reddit"
                                        >
                                            <FaGithub />

                                        </Link>
                                        <Link
                                            to="#"
                                            className="mx-2 text-gray-600 transition-colors duration-300 dark:text-black hover:text-blue-500 dark:hover:text-blue-400"
                                            aria-label="Facebook"
                                        >
                                            <FaLinkedin />
                                        </Link>
                                        <Link
                                            to="#"
                                            className="mx-2 text-gray-600 transition-colors duration-300 dark:text-black hover:text-blue-500 dark:hover:text-blue-400"
                                            aria-label="Github"
                                        >
                                            <FaLink />
                                        </Link>
                                    </div>
                                </div>
                                <h2 className="text-xl font-bold mt-6 mb-4">Experience</h2>
                                <div className="mb-6">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 font-bold">MERN Stack Developer</span>
                                        <p>
                                            <span className="text-black-600 font-semibold mr-2">CodeNexus</span>
                                            <span className="text-black-600">Jun 2023 - Aug 2023</span>
                                        </p>
                                    </div>
                                    <p className="mt-2 mx-2">
                                        ➡️ Engineered a high-performance website using React, Tailwind, and Firebase for authentication, resulting in a 40% decrease in page load time, achieving an outstanding Lighthouse performance score of 99, showcasing optimized loading speed, smooth user experience, and efficient resource utilization.

                                    </p>
                                    <p className="mt-2 mx-2">
                                        ➡️ Integrated Stripe payment system into the e-commerce app, enabling seamless transactions and achieving a 75% reduction in checkout abandonment rate.
                                    </p>
                                </div>
                                <h2 className="text-xl font-bold mt-6 mb-4">Achievements</h2>
                                <div className="mb-6">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 font-bold">Open Source</span>

                                    </div>
                                    <p className="mt-2 mx-2">
                                        ➡️ Completed Hacktoberfest 2022.

                                    </p>
                                    <p className="mt-2 mx-2">
                                        ➡️ GSSOC(Open Source program) 2023 contributor.
                                    </p>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 font-bold">Open Source</span>

                                    </div>
                                    <p className="mt-2 mx-2">
                                        ➡️ Rated 3* on codechef (Highest 1637).

                                    </p>
                                    <p className="mt-2 mx-2">
                                        ➡️ Solved 500+ dsa questions on leetcode,gfg and hackerrank.
                                    </p>
                                    <p className="mt-2 mx-2">
                                        ➡️ Organized coding bootcamps for about 200 college students and streamlined their journey into programming.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Contact