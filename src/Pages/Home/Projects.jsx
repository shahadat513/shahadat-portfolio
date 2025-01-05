import React from "react";

export default function Projects() {
    const projects = [
        {
            title: "Fodis",
            description:
                "Fodis is a dynamic e-commerce website that allows users to place orders for products, while admins have the capability to manage and update product information. The website leverages modern web development technologies such as JavaScript, Vite for a fast build process, Tailwind CSS for rapid styling, and DaisyUI for pre-designed UI components to create a seamless and responsive user experience. Through this combination, Fodis provides a user-friendly platform for both customers to browse and purchase products, and for administrators to efficiently manage product listings and updates.",
            image: "https://i.ibb.co.com/j4br4ht/Fodis.jpg",
            client: "https://github.com/shahadat513/fodis-client",
            server: "https://github.com/shahadat513/fodis-server",
            live: "https://fodis-client.web.app/",
        },
        {
            title: "Sport-dox",
            description:
                "Sport-dox is an online sports equipment shop designed to provide a seamless shopping experience for sports enthusiasts. The website features a user-friendly interface where customers can easily browse and purchase a variety of sports gear and equipment. Admins have the ability to manage and update product listings efficiently, ensuring that the latest sports equipment is always available. Built with modern web technologies like JavaScript, Vite for optimized performance, Tailwind CSS for responsive design, and DaisyUI for ready-to-use UI components, Sport-dox delivers a fast, visually appealing, and interactive experience for both users and administrators.",
            image: "https://i.ibb.co.com/V2QR5Jk/Assignment-10.jpg",
            client: "https://github.com/shahadat513/sportdox-client",
            server: "https://github.com/shahadat513/sportdox-server",
            live: "https://assignment-10-5f7fc.web.app/",
        },
        {
            title: "Career Hub",
            description:
                "Career Hub is a professional career consultancy dedicated to guiding individuals in their career paths. Whether you're seeking career advice, job placement, or professional development, Career Hub offers personalized support to help clients achieve their career goals. With a focus on providing tailored solutions, the consultancy combines expertise in career planning with modern tools to empower individuals to make informed career decisions.",
            image: "https://i.ibb.co.com/9TkSCxb/Assignment-9.jpg",
            client: "https://github.com/shahadat513/career-hub",
            server: "https://github.com/shahadat513/career-hub",
            live: "https://a9-b10-career.netlify.app/",
        },
        {
            title: "Donate Bangladesh",
            description:
                "A portfolio web application showcasing professional projects and achievements with a modern design. Built with React, Tailwind CSS, and Firebase.",
            image: "https://i.ibb.co.com/N6H4xbH/Donate.jpg",
            client: "#",
            server: "#",
            live: "https://shahadat513.github.io/Assignment-5/",
        },
    ];

    return (
        <div id="projects" className="bg-black py-12 px-4 sm:px-6 lg:px-8">
            <div className="text-white pt-10 pb-20">
                <h1 className="text-6xl font-semibold text-center pb-4">
                    My{" "}
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500'>
                        Projects
                    </span>
                </h1>
                <hr className='w-1/2 mx-auto' />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="group relative bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl"
                        style={{ height: "420px" }}
                    >
                        <div
                            className="overflow-hidden"
                            style={{ height: "200px", width: "100%" }}
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover group-hover:rotate-3 group-hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                        <div className="p-4 flex flex-col justify-between" style={{ height: "220px" }}>
                            <div>
                                <h3 className="text-xl font-semibold text-white">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-sm mt-2 line-clamp-4">
                                    {project.description}
                                </p>
                            </div>
                            <div className="mt-4 flex justify-between">
                                <a
                                    href={project.client}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-gray-700 hover:bg-blue-600 text-white px-3 py-1 rounded transition"
                                >
                                    Client
                                </a>
                                <a
                                    href={project.server}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-gray-700 hover:bg-green-600 text-white px-3 py-1 rounded transition"
                                >
                                    Server
                                </a>
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded transition"
                                >
                                    Live
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
