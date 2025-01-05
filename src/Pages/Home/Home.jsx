import About from "./About";
import { BackgroundBeamsWithCollisionDemo } from "./Banner";
import Contact from "./Constact";
import Projects from "./Projects";
import Skills from "./Skills";

const Home = () => {
    return (
            <div>
                <BackgroundBeamsWithCollisionDemo></BackgroundBeamsWithCollisionDemo>
                <About></About>
                <Skills></Skills>
                <Projects></Projects>
                <Contact></Contact>
            </div>
    );
}

export default Home;
