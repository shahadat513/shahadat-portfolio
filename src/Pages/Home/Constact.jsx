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

                {/* Message Section & Map */}
                <div className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start">
                    <h1 className="mt-4 mb-4 md:mt-20 text-3xl md:text-5xl text-white">
                        Let`s connect with each other and discover something new
                    </h1>
                    <div className="mt-6 w-11/12 h-64 md:h-80">
                        <iframe
                            title="Rangpur Location"
                            className="w-full h-full rounded-lg shadow-lg"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.2225399794375!2d89.25445557499732!3d25.74389247743666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e334c6f36dcb91%3A0x7a5f4ff0b1d36eb3!2sRangpur%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <div className="mt-6 text-white text-lg">
                        <p><strong>Phone:</strong> +880 1956-624479</p>
                        <p><strong>Email:</strong> shahadatsohel513@gmail.com</p>
                        <p><strong>Address:</strong> Rangpur, Bangladesh</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;