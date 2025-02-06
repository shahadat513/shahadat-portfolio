import { useParams, useNavigate } from "react-router-dom";

const projectsDetails = [
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

export default function ProjectDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = projectsDetails[id];

    if (!project) {
        return <div className="text-white text-center mt-20">Project not found!</div>;
    }

    return (
        <div className="bg-black text-white min-h-screen py-12 px-6">
            <button
                onClick={() => navigate(-1)}
                className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded mb-6"
            >
                Back
            </button>
            <div className="max-w-4xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
                <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded-lg" />
                <h1 className="text-4xl font-bold mt-6">{project.title}</h1>
                <p className="text-gray-400 mt-2">{project.description}</p>
                <h2 className="text-2xl font-semibold mt-4">Tech Stack</h2>
                <p className="text-gray-400">{project.techStack}</p>
                <h2 className="text-2xl font-semibold mt-4">Challenges</h2>
                <p className="text-gray-400">{project.challenges}</p>
                <h2 className="text-2xl font-semibold mt-4">Future Improvements</h2>
                <p className="text-gray-400">{project.improvements}</p>
                <div className="mt-6 flex gap-4">
                    <a href={project.client} target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">GitHub</a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded">Live Project</a>
                </div>
            </div>
        </div>
    );
}
