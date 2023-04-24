import React, { useState, useEffect } from "react";
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
        "Blog posts for inspiration on your own adventures",
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

  const listOfPagesAndContents = [
    {
      backgroundImage: HydropassHome,
      title: "Hydropass",
      subHeader: "Your ticket to private waterfronts",
      additionalInformation: "About Us",
      listOfActivities: hydropassHomeItems,
      swiperNumber: "1"
    },
    {
      backgroundImage: Lakes,
      title: "Lakes",
      subHeader: "",
      additionalInformation: "Explore Lake Activities",
      listOfActivities: hydropassLakeItems,
      swiperNumber: "2"
    },
    {
      backgroundImage: Rivers,
      title: "Rivers",
      subHeader: "",
      additionalInformation: "Explore River Activities",
      listOfActivities: hydropassRiverItems,
      swiperNumber: "3"
    },
    {
      backgroundImage: Beaches,
      title: "Oceans",
      subHeader: "",
      additionalInformation: "Explore Ocean Activities",
      listOfActivities: hydropassOceanItems,
      swiperNumber: "4"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const centerPoint = window.innerHeight / 2;
      const scrollPosition = window.scrollY + centerPoint;

      const index = Math.floor(scrollPosition / window.innerHeight);

      setActiveIndex(index);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div style={{ position: "fixed", top: "50%", left: "5%", transform: "translateY(-50%)", zIndex: "1" }}>
        <div className="d-flex flex-column align-items-center">
          <svg width="30" height="30">
            <circle cx="15" cy="15" r="14" fill="white" stroke="black" stroke-width="1"/>
          </svg>
          {[...Array(listOfPagesAndContents.length)].map((_, index) => (
            <svg key={index} className="mt-3" width="20" height="20" onClick={() => window.scrollTo({ top: document.getElementById(index.toString()).offsetTop, behavior: "smooth" })}>
              <circle cx="10" cy="10" r="9" fill={activeIndex === index ? "#00bfff" : "white"} stroke="black" strokeWidth="1"/>
            </svg>
          ))}
          <svg width="30" height="30" className="mt-3">
            <circle cx="15" cy="15" r="14" fill="white" stroke="black" stroke-width="1"/>
          </svg>
        </div>
      </div>

      {listOfPagesAndContents.map((page, index) => (
        <div key={page.title} id={index.toString()} style={{ position: "relative", height: "100vh" }}>
          <div
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              backgroundImage: `url(${page.backgroundImage})`,
              backgroundAttachment: "fixed",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
          <div className="position-absolute w-100 h-100">
            <HomeTemplate
              title={page.title}
              subHeader={page.subHeader}
              additionalInformation={page.additionalInformation}
              listOfActivities={page.listOfActivities}
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default HomePage;