import { FaDownload } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
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
        <div className="navbar bg-black sticky top-0 z-50">
            {/* Navbar Start */}
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li
                            className={active === "Home" ? "active" : ""}
                            onClick={() => { handleActive("Home"); scrollToSection("Home"); }}>
                            <a>Home</a>
                        </li>
                        <li
                            className={active === "About" ? "active" : ""}
                            onClick={() => { handleActive("About"); scrollToSection("about"); }}>
                            <a>About</a>
                        </li>
                        <li
                            className={active === "Skill" ? "active" : ""}
                            onClick={() => { handleActive("Skill"); scrollToSection("skills"); }}>
                            <a>Skill</a>
                        </li>
                        <li
                            className={active === "Projects" ? "active" : ""}
                            onClick={() => { handleActive("Projects"); scrollToSection("projects"); }}>
                            <a>Projects</a>
                        </li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-white text-xl">SHAHADAT</a>
            </div>

            {/* Navbar Center */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-white">
                    <li
                        className={active === "Home" ? "active" : ""}
                        onClick={() => { handleActive("Home"); scrollToSection("Home"); }}>
                        <a>Home</a>
                    </li>
                    <li
                        className={active === "About" ? "active" : ""}
                        onClick={() => { handleActive("About"); scrollToSection("about"); }}>
                        <a>About</a>
                    </li>
                    <li
                        className={active === "Skill" ? "active" : ""}
                        onClick={() => { handleActive("Skill"); scrollToSection("skills"); }}>
                        <a>Skill</a>
                    </li>
                    <li
                        className={active === "Projects" ? "active" : ""}
                        onClick={() => { handleActive("Projects"); scrollToSection("projects"); }}>
                        <a>Projects</a>
                    </li>
                </ul>
            </div>

            {/* Navbar End */}
            <div className="navbar-end">
                {/* CV Download Button */}
                <a
                        href="/public/CV- of Md. Shahadat Hossain Shohel .pdf" // Ensure your file is in the 'public' folder, and the path is relative to the public root.
                        className="btn btn-primary"
                        download="/public/CV- of Md. Shahadat Hossain Shohel .pdf" // This specifies the default name for the downloaded file.
                    >
                        Download CV<FaDownload />
                    </a>
            </div>

            {/* Inline CSS for Active State */}
            <style jsx="true">
                {`
                    .active a {
                        color: #ff6347;
                        font-weight: bold;
                        text-decoration: underline;
                    }
                `}
            </style>
        </div>
    );
};

export default Navbar;
