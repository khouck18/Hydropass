import React, { useState, useEffect } from "react";
import HomeTemplate from "./HomeTemplate";
import HydropassHome from "../../Images/HydropassHome.jpg";
import Lakes from "../../Images/Lakes.jpg";
import Rivers from "../../Images/Rivers.jpg";
import Beaches from "../../Images/Beaches.jpg";
import SurfboardFilled from "../../Images/SurfboardFilled.svg";
import WaterSkisFilled from "../../Images/WaterSkisFilled.svg";
import JetSkiFilled from "../../Images/JetSkiFilled.svg";
import FishingPoleFilled from "../../Images/FishingPoleFilled.svg";
import CanoeFilled from "../../Images/CanoeFilled.svg";
import BoatFilled from "../../Images/BoatFilled.svg";
import DockFilled from "../../Images/DockFilled.svg";
import BeachFilled from "../../Images/BeachFilled.svg";
import CabinFilled from "../../Images/CabinFilled.svg";
import RaftFilled from "../../Images/RaftFilled.svg";
import SwimmingFilled from "../../Images/SwimmingFilled.svg";
import InnerTubeFilled from "../../Images/InnerTubeFilled.svg";
import KayakFilled from "../../Images/KayakFilled.svg";
import PaddleBoardFilled from "../../Images/PaddleBoardFilled.svg";
import ScubaDivingFilled from "../../Images/ScubaDivingFilled.svg";
import SailBoatFilled from "../../Images/SailBoatFilled.svg";
import SnorkelingFilled from "../../Images/SnorkelingFilled.svg";
import CampingFilled from "../../Images/CampingFilled.svg";

const HomePage = () => {
  const hydropassHomeItems = [
    {
      title: "The Water Report",
      description:
        "Get inspiration for your adventures",
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
      icon: BeachFilled,
      title: "Beaches"
    },
    {
      icon: BoatFilled,
      title: "Boating"
    },
    {
      icon: CampingFilled,
      title: "Camping"
    },
    {
      icon: CanoeFilled,
      title: "Canoeing"
    },
    {
      icon: DockFilled,
      title: "Docks"
    },
    {
      icon: FishingPoleFilled,
      title: "Fishing"
    },
    {
      icon: JetSkiFilled,
      title: "Jet Skiing"
    },
    {
      icon: KayakFilled,
      title: "Kayaking"
    },
    {
      icon: CabinFilled,
      title: "Overnights"
    },
    {
      icon: PaddleBoardFilled,
      title: "Paddling"
    },
    {
      icon: SwimmingFilled,
      title: "Swimming"
    },
    {
      icon: WaterSkisFilled,
      title: "Water Skiing"
    }
  ];

  const hydropassRiverItems = [
    {
      icon: BoatFilled,
      title: "Boating"
    },
    {
      icon: CampingFilled,
      title: "Camping"
    },
    {
      icon: CanoeFilled,
      title: "Canoeing"
    },
    {
      icon: DockFilled,
      title: "Docks"
    },
    {
      icon: FishingPoleFilled,
      title: "Fishing"
    },
    {
      icon: KayakFilled,
      title: "Kayaking"
    },
    {
      icon: CabinFilled,
      title: "Overnights"
    },
    {
      icon: PaddleBoardFilled,
      title: "Paddling"
    },
    {
      icon: RaftFilled,
      title: "Rafting"
    },
    {
      icon: SwimmingFilled,
      title: "Swimming"
    },
    {
      icon: InnerTubeFilled,
      title: "Tubing"
    },
  ];

  const hydropassOceanItems = [
    {
      icon: BeachFilled,
      title: "Beaches"
    },
    {
      icon: BoatFilled,
      title: "Boating"
    },
    {
      icon: CampingFilled,
      title: "Camping"
    },
    {
      icon: DockFilled,
      title: "Docks"
    },
    {
      icon: FishingPoleFilled,
      title: "Fishing"
    },
    {
      icon: JetSkiFilled,
      title: "Jet Skiing"
    },
    {
      icon: KayakFilled,
      title: "Kayaking"
    },
    {
      icon: CabinFilled,
      title: "Overnights"
    },
    {
      icon: PaddleBoardFilled,
      title: "Paddling"
    },
    {
      icon: SailBoatFilled,
      title: "Sailing"
    },
    {
      icon: ScubaDivingFilled,
      title: "Scuba Diving"
    },
    {
      icon: SnorkelingFilled,
      title: "Snorkeling"
    },
    {
      icon: SurfboardFilled,
      title: "Surfing"
    },
    {
      icon: SwimmingFilled,
      title: "Swimming"
    },
    {
      icon: WaterSkisFilled,
      title: "Water Skiing"
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
            <circle cx="15" cy="15" r="14" fill="white" stroke="black" strokeWidth="1"/>
          </svg>
          {[...Array(listOfPagesAndContents.length)].map((_, index) => (
            <svg key={index} className="mt-3" width="20" height="20" onClick={() => window.scrollTo({ top: document.getElementById(index.toString()).offsetTop, behavior: "smooth" })}>
              <circle cx="10" cy="10" r="9" fill={activeIndex === index ? "#00bfff" : "white"} stroke="black" strokeWidth="1"/>
            </svg>
          ))}
          <svg width="30" height="30" className="mt-3">
            <circle cx="15" cy="15" r="14" fill="white" stroke="black" strokeWidth="1"/>
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