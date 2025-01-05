import { FaDownload, FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import image from "../../assets/cb17d4ce-7cf7-4c41-a157-3bf712196a45.png";
import { BackgroundBeamsWithCollision } from "../../utils/source";
import { Link } from "react-router-dom";
import { useState } from "react";

export function BackgroundBeamsWithCollisionDemo() {

    const [active, setActive] = useState("Home");

    const handleActive = (name) => {
        setActive(name);
    };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <BackgroundBeamsWithCollision>
            <div
                id="Home"
                className="flex flex-col-reverse md:flex-row justify-between items-center w-11/12 mx-auto gap-8 py-10"
            >
                {/* Left Side */}
                <div className="text-center md:text-left flex flex-col justify-center items-center md:items-start">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white leading-snug">
                        I'm.. <br /> Shahadat Hossain
                    </h1>
                    <p className="font-bold text-2xl md:text-3xl bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                        MERN Stack Developer
                    </p>
                    <p className="text-base md:text-lg lg:text-xl text-white pb-5 max-w-md">
                        With 2 years of experience, I specialize in developing dynamic, interactive, and scalable digital
                        experiences with the MERN stack, combining innovation with functionality to cater to a
                        technology-forward world.
                    </p>
                    <div className="flex justify-center md:justify-start gap-4 py-4">
                        <Link to="https://github.com/shahadat513">
                            <FaGithub className="text-white h-8 w-8 md:h-10 md:w-10" />
                        </Link>
                        <Link to="">
                            <FaLinkedin className="text-white h-8 w-8 md:h-10 md:w-10" />
                        </Link>
                        <Link to="https://www.facebook.com/shahadathossen513">
                            <FaFacebook className="text-white h-8 w-8 md:h-10 md:w-10" />
                        </Link>
                        <Link to="https://www.instagram.com/shahadatsohl/">
                            <FaInstagram className="text-white h-8 w-8 md:h-10 md:w-10" />
                        </Link>
                    </div>
                    {/* Download CV Button */}
                    <div className="flex gap-3">
                        <a
                            href="/CV-of-Md.-Shahadat-Hossain-Shohel.pdf" // Ensure your file is in the 'public' folder, and the path is relative to the public root.
                            className="btn btn-primary px-6 py-2 mt-4 text-base md:text-lg"
                            download="Shahadat_Hossain_CV.pdf"
                        >
                            Download CV <FaDownload className="inline ml-2" />
                        </a>
                        <a
                            className="btn btn-outline bg-orange-700 px-6 py-2 mt-4 text-base md:text-lg"
                            onClick={() => { handleActive("Projects"); scrollToSection("contact"); }}>
                            <a>Contact me</a>
                        </a>
                    </div>
                </div>

                {/* Right Side */}
                <div className="flex justify-center items-center w-full md:w-1/2">
                    <img
                        className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto max-h-48 sm:max-h-64 md:max-h-80 lg:max-h-none rounded-xl shadow-md border border-gray-300"
                        src={image}
                        alt="Shahadat Hossain"
                    />
                </div>
            </div>
        </BackgroundBeamsWithCollision>
    );
}
