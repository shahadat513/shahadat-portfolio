
const Contact = () => {
    return (
        <div id="contact" className="bg-gray-900 py-10">
            <div className="flex flex-col md:flex-row justify-between items-center">
                {/* Contact Form */}
                <div className="flex justify-center items-center h-full w-full md:w-1/2">
                    <div className="bg-black p-8 rounded-lg shadow-lg max-w-md w-full text-center">
                        <h2 className="text-2xl font-semibold mb-6 text-white">
                            Contact With Me
                        </h2>
                        <form>
                            <label htmlFor="name" className="block text-left text-sm mb-2 text-white">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Your full name"
                                required
                                className="w-full p-3 mb-4 rounded-md bg-gray-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                            />

                            <label htmlFor="email" className="block text-left text-sm mb-2 text-white">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Your email"
                                required
                                className="w-full p-3 mb-4 rounded-md bg-gray-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                            />

                            <label htmlFor="message" className="block text-left text-sm mb-2 text-white">
                                Message
                            </label>
                            <textarea
                                id="message"
                                placeholder="Write your message here"
                                required
                                className="w-full p-3 mb-4 rounded-md bg-gray-800 text-white text-sm h-32 resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
                            ></textarea>

                            <button
                                type="submit"
                                className="w-full py-3 text-lg font-medium bg-green-500 text-black rounded-md hover:bg-green-600 transition duration-300"
                            >
                                SEND
                            </button>
                        </form>
                    </div>
                </div>

                {/* Message Section */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h1 className="mt-10 md:mt-20 text-3xl md:text-5xl text-white">
                        Let`s connect with each other and discover something new
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Contact;
