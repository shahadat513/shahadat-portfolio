const About = () => {
    return (
        <div id="about" className="bg-gray-900 text-white pt-10 pb-20 px-4">
            <h1 className="text-4xl md:text-6xl font-semibold text-center pb-4">About me</h1>
            <hr className='w-full md:w-1/2 mx-auto ' />
            <p className="text-sm md:text-base lg:text-lg w-full md:w-11/12 lg:w-10/12 mx-auto pt-4">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500">Md Shahadat Hossain Shohel</span>, a passionate Frontend Web Developer. I specialize in crafting responsive user interfaces with React, Tailwind CSS, and build full-stack applications with tools like Node.js, Express, and MongoDB. Secure authentication is my forte using Firebase.
                I’m always exploring new technologies and striving to create impactful digital solutions.
            </p>
        </div>
    );
}

export default About;
