import colors from '../constants/styles'
// import { VscGithub } from "react-icons/vsc";
import { FaGithub, FaLinkedin, FaLink } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: colors.background }} className="bg-white dark:bg-gray-900 font-mono font-semibold ">
            <div className="container px-6 py-8 mx-auto">
                <div className="flex flex-col items-center text-center">
                    <Link to="#">
                        <p className="w-auto h-7 text-white headings"
                        >Pratik Rai</p>
                    </Link>
                    <div className="flex flex-wrap justify-center mt-6 -mx-4">
                        <Link
                            to="#"
                            className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
                            aria-label="Reddit"
                        >
                            {" "}
                            About{" "}
                        </Link>
                        <Link
                            to="#"
                            className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
                            aria-label="Reddit"
                        >
                            {" "}
                            Projects{" "}
                        </Link>
                        <Link
                            to="#"
                            className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
                            aria-label="Reddit"
                        >
                            {" "}
                            Contact Me{" "}
                        </Link>
                        <Link
                            to="#"
                            className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
                            aria-label="Reddit"
                        >
                            {" "}
                            Mail{" "}
                        </Link>

                    </div>
                </div>
                <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />
                <div className="flex flex-col items-center sm:flex-row sm:justify-between">
                    <p className="text-sm text-gray-500 dark:text-gray-300">
                        Made with ❤️ by Pratik Rai
                    </p>
                    <div className="flex -mx-2">
                        <Link
                            to="#"
                            className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                            aria-label="Reddit"
                        >
                            <FaGithub />

                        </Link>
                        <Link
                            to="#"
                            className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                            aria-label="Facebook"
                        >
                            <FaLinkedin />
                        </Link>
                        <Link
                            to="#"
                            className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                            aria-label="Github"
                        >
                            <FaLink />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer
