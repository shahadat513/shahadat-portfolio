
const Skills = () => {
    return (
        <div id="skills" className="bg-gray-900">
            <div className="text-white pt-10 pb-20">
                <h1 className="text-6xl font-semibold text-center pb-4">My <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500'>Skills</span></h1>
                <hr className='w-1/2 mx-auto' />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                {/* React */}
                <div className="group relative flex flex-col items-center justify-center p-6 bg-gradient-to-br from-purple-500 via-violet-500 to-pink-500 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
                    <div className="w-20 h-20 mb-4 flex items-center justify-center bg-white rounded-full overflow-hidden shadow-md">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                            alt="React"
                            className="w-16 h-16 object-contain transform transition duration-500 group-hover:rotate-180"
                        />
                    </div>
                    <h3 className="text-lg font-semibold text-white">React</h3>
                    <p className="text-sm text-white text-center">
                        A JavaScript library for building user interfaces.
                    </p>
                </div>

                {/* Node.js */}
                <div className="group relative flex flex-col items-center justify-center p-6 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
                    <div className="w-20 h-20 mb-4 flex items-center justify-center bg-white rounded-full overflow-hidden shadow-md">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
                            alt="Node.js"
                            className="w-16 h-16 object-contain transform transition duration-500 group-hover:rotate-180"
                        />
                    </div>
                    <h3 className="text-lg font-semibold text-white">Node.js</h3>
                    <p className="text-sm text-white text-center">
                        A runtime to build scalable, server-side JavaScript applications.
                    </p>
                </div>

                {/* MongoDB */}
                <div className="group relative flex flex-col items-center justify-center p-6 bg-gradient-to-br from-green-400 via-green-600 to-green-800 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
                    <div className="w-20 h-20 mb-4 flex items-center justify-center bg-white rounded-full overflow-hidden shadow-md">
                        <img
                            src="https://webimages.mongodb.com/_com_assets/cms/mongodb-logo-rgb-j6w271g1xn.jpg"
                            alt="MongoDB"
                            className="w-16 h-16 object-contain transform transition duration-500 group-hover:rotate-180"
                        />
                    </div>
                    <h3 className="text-lg font-semibold text-white">MongoDB</h3>
                    <p className="text-sm text-white text-center">
                        A NoSQL database to store and query data flexibly.
                    </p>
                </div>

                {/* Express.js */}
                <div className="group relative flex flex-col items-center justify-center p-6 bg-gradient-to-br from-gray-500 via-gray-700 to-gray-900 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
                    <div className="w-20 h-20 mb-4 flex items-center justify-center bg-white rounded-full overflow-hidden shadow-md">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"
                            alt="Express.js"
                            className="w-16 h-16 object-contain transform transition duration-500 group-hover:rotate-180"
                        />
                    </div>
                    <h3 className="text-lg font-semibold text-white">Express.js</h3>
                    <p className="text-sm text-white text-center">
                        A web framework for building fast and scalable APIs.
                    </p>
                </div>

                {/* Tailwind CSS */}
                <div className="group relative flex flex-col items-center justify-center p-6 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
                    <div className="w-20 h-20 mb-4 flex items-center justify-center bg-white rounded-full overflow-hidden shadow-md">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
                            alt="Tailwind CSS"
                            className="w-16 h-16 object-contain transform transition duration-500 group-hover:rotate-180"
                        />
                    </div>
                    <h3 className="text-lg font-semibold text-white">Tailwind CSS</h3>
                    <p className="text-sm text-white text-center">
                        A utility-first CSS framework for fast UI development.
                    </p>
                </div>

                {/* Firebase */}
                <div className="group relative flex flex-col items-center justify-center p-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
                    <div className="w-20 h-20 mb-4 flex items-center justify-center bg-white rounded-full overflow-hidden shadow-md">
                        <img
                            src="https://firebase.google.com/downloads/brand-guidelines/PNG/logo-vertical.png"
                            alt="Firebase"
                            className="w-16 h-16 object-contain transform transition duration-500 group-hover:rotate-180"
                        />
                    </div>
                    <h3 className="text-lg font-semibold text-white">Firebase</h3>
                    <p className="text-sm text-white text-center">
                        A platform for building and scaling web and mobile apps.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Skills;
