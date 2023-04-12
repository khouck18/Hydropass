import { ParallaxProvider } from "react-scroll-parallax";
import HomeTemplate from "./HomeTemplate";

const HomePage = () => {
    return (
        <ParallaxProvider>
            <HomeTemplate title="Hydropass" subHeader="Your ticket to private waterfronts"/>
        </ParallaxProvider>
    );
};

export default HomePage;