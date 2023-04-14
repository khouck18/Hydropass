import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import HomeTemplate from "./HomeTemplate";
import {
  Kayaking,
  Phishing,
  DirectionsBoat,
  Pool,
  Kitesurfing,
  Snowmobile,
  Cottage,
  Restaurant,
  Surfing,
  ScubaDiving
} from "@mui/icons-material";
import HydropassHome from "../../Images/HydropassHome.jpg";
import Lakes from "../../Images/Lakes.jpg";
import Rivers from "../../Images/Rivers.jpg";
import Beaches from "../../Images/Beaches.jpg";

const HomePage = () => {
  const hydropassHomeItems = [
    {
      title: "The Water Report",
      description:
        "Follow weekly blog posts for inspiration on your own adventures",
      buttonName: "Learn More"
    },
    {
      title: "Our Story",
      description: "Discover the inspiration behind Hydropass",
      buttonName: "Learn More"
    },
    {
      title: "Giving Back",
      description: "Join us in protecting aquatic environments",
      buttonName: "Learn More"
    }
  ];

  const hydropassLakeItems = [
    {
      icon: <Kayaking sx={{ fontSize: 60 }} />,
      title: "Canoeing"
    },
    {
      icon: <Phishing sx={{ fontSize: 60 }} />,
      title: "Fishing"
    },
    {
      icon: <DirectionsBoat sx={{ fontSize: 60 }} />,
      title: "Boating"
    },
    {
      icon: <Pool sx={{ fontSize: 60 }} />,
      title: "Swimming"
    },
    {
      icon: <Kitesurfing sx={{ fontSize: 60 }} />,
      title: "Kitesurfing"
    },
    {
      icon: <Snowmobile sx={{ fontSize: 60 }} />,
      title: "Jet Skiing"
    },
    {
      icon: <Cottage sx={{ fontSize: 60 }} />,
      title: "Overnight Stays"
    },
    {
      icon: <Restaurant sx={{ fontSize: 60 }} />,
      title: "Dining"
    }
  ];

  const hydropassRiverItems = [
    {
      icon: <Kayaking sx={{ fontSize: 60 }} />,
      title: "Canoeing"
    },
    {
      icon: <Phishing sx={{ fontSize: 60 }} />,
      title: "Fishing"
    },
    {
      icon: <DirectionsBoat sx={{ fontSize: 60 }} />,
      title: "Boating"
    },
    {
      icon: <Pool sx={{ fontSize: 60 }} />,
      title: "Swimming"
    },
    {
      icon: <Cottage sx={{ fontSize: 60 }} />,
      title: "Overnight Stays"
    },
    {
      icon: <Restaurant sx={{ fontSize: 60 }} />,
      title: "Dining"
    }
  ];

  const hydropassOceanItems = [
    {
      icon: <Kayaking sx={{ fontSize: 60 }} />,
      title: "Kayaking"
    },
    {
      icon: <Surfing sx={{ fontSize: 60 }} />,
      title: "Surfing"
    },
    {
      icon: <ScubaDiving sx={{ fontSize: 60 }} />,
      title: "Scuba Diving"
    },
    {
      icon: <Phishing sx={{ fontSize: 60 }} />,
      title: "Fishing"
    },
    {
      icon: <DirectionsBoat sx={{ fontSize: 60 }} />,
      title: "Boating"
    },
    {
      icon: <Pool sx={{ fontSize: 60 }} />,
      title: "Swimming"
    },
    {
      icon: <Kitesurfing sx={{ fontSize: 60 }} />,
      title: "Kitesurfing"
    },
    {
      icon: <Snowmobile sx={{ fontSize: 60 }} />,
      title: "Jet Skiing"
    },
    {
      icon: <Cottage sx={{ fontSize: 60 }} />,
      title: "Overnight Stays"
    },
    {
      icon: <Restaurant sx={{ fontSize: 60 }} />,
      title: "Dining"
    }
  ];
  return (
    <ParallaxProvider>
      <Parallax y={[-20, 20]} tagOuter="div">
        <HomeTemplate
          title="Hydropass"
          subHeader="Your ticket to private waterfronts"
          additionalInformation="About Us"
          listOfActivities={hydropassHomeItems}
          backgroundImage={HydropassHome}
        />
      </Parallax>
      <Parallax y={[-30, 30]} tagOuter="div">
        <HomeTemplate
          title="Lakes"
          subHeader=""
          additionalInformation="Explore Lake Activities"
          listOfActivities={hydropassLakeItems}
          backgroundImage={Lakes}
        />
      </Parallax>
      <Parallax y={[-40, 40]} tagOuter="div">
        <HomeTemplate
          title="Rivers"
          subHeader=""
          additionalInformation="Explore River Activities"
          listOfActivities={hydropassRiverItems}
          backgroundImage={Rivers}
        />
      </Parallax>
      <Parallax y={[-50, 50]} tagOuter="div">
        <HomeTemplate
          title="Oceans"
          subHeader=""
          additionalInformation="Explore Ocean Activities"
          listOfActivities={hydropassOceanItems}
          backgroundImage={Beaches}
        />
      </Parallax>
    </ParallaxProvider>
  );
};

export default HomePage;
