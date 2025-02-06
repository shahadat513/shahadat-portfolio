import { useNavigate } from "react-router-dom";

export default function Projects() {
    const navigate = useNavigate();
    
    const projects = [
        {
            title: "Core Team",
            description: "Core Team is a workforce management platform designed to streamline employee administration, payroll processing, and HR operations. It enables admins, HR personnel, and employees to efficiently manage tasks, view payment history, and track payroll records with an intuitive dashboard. Built with modern web technologies, it ensures seamless data handling, secure transactions, and a user-friendly experience.",
            image: "https://i.ibb.co.com/d4V1K8BS/image.png",
            client: "https://github.com/shahadat513/Core_Team-Client",
            live: "https://core-team-eb32c.web.app/",
            techStack: "React, Tailwind CSS, Firebase, MongoDB, Express.js.",
            challenges: "Managing role-based access, ensuring secure payroll transactions, handling real-time data updates, and implementing dynamic charts for salary trends.",
            improvements: "Optimize API calls, enhance UI responsiveness, improve error handling, implement role-based dashboards, and add automated payroll notifications."
        },
        {
            title: "Fodis",
            description: "Fodis is a dynamic e-commerce website that allows users to place orders for products, while admins have the capability to manage and update product information.",
            image: "https://i.ibb.co.com/j4br4ht/Fodis.jpg",
            client: "https://github.com/shahadat513/fodis-client",
            live: "https://fodis-client.web.app/",
            techStack: "JavaScript, Vite, Tailwind CSS, DaisyUI, Firebase",
            challenges: "Implementing secure authentication and managing real-time product updates.",
            improvements: "Adding AI-powered recommendations and enhancing UI responsiveness."
        },
        {
            title: "Sport-dox",
            description: "Sport-dox is an online sports equipment shop designed to provide a seamless shopping experience for sports enthusiasts.",
            image: "https://i.ibb.co.com/V2QR5Jk/Assignment-10.jpg",
            client: "https://github.com/shahadat513/Sport-Dox-Client",
            live: "https://assignment-10-5f7fc.web.app/",
            techStack: "JavaScript, Vite, Tailwind CSS, DaisyUI, Firebase",
            challenges: "Ensuring smooth checkout flow and maintaining an optimized product search.",
            improvements: "Adding multi-currency support and expanding product categories."
        }
        
    ];

    return (
        <div id="projects" className="bg-black py-12 px-4 sm:px-6 lg:px-8">
            <div className="text-white pt-10 pb-20">
                <h1 className="text-6xl font-semibold text-center pb-4">
                    My {" "}
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
                        style={{ height: "450px" }}
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
                        <div className="p-4 flex flex-col justify-between" style={{ height: "250px" }}>
                            <div>
                                <h3 className="text-xl font-semibold text-white">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-sm mt-2 line-clamp-3">
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
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded transition"
                                >
                                    Live
                                </a>
                                <button
                                    onClick={() => navigate(`/projects/${index}`)}
                                    className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded transition"
                                >
                                    View More
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
