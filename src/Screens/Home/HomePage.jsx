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

  const listOfPagesAndContents = [
    {
      backgroundImage: HydropassHome,
      title: "Hydropass",
      subHeader: "Your ticket to private waterfronts",
      additionalInformation: "About Us",
      listOfActivities: hydropassHomeItems
    },
    {
      backgroundImage: Lakes,
      title: "Lakes",
      subHeader: "",
      additionalInformation: "Explore Lake Activities",
      listOfActivities: hydropassLakeItems
    },
    {
      backgroundImage: Rivers,
      title: "Rivers",
      subHeader: "",
      additionalInformation: "Explore River Activities",
      listOfActivities: hydropassRiverItems
    },
    {
      backgroundImage: Beaches,
      title: "Oceans",
      subHeader: "",
      additionalInformation: "Explore Ocean Activities",
      listOfActivities: hydropassOceanItems
    }
  ];

  return (
    <>
      {listOfPagesAndContents.map((page) => {
        return (
          <div
            style={{
              position: "relative",
              height: "100vh"
            }}
          >
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
                backgroundSize: "cover"
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
        );
      })}
    </>
  );
};

export default HomePage;
