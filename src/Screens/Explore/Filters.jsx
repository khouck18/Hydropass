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
import CategoryFilterBox from "./CategoryFilterBox.jsx";
import css from "./Filters.module.css";
import FilterListIcon from "@mui/icons-material/FilterList";
import ActivityFilterBox from "./ActivityFilterBox";
import { useState, useEffect } from "react";

const categoryFilters = [
  {
    id: 1,
    name: "Oceans",
    icon: SurfboardFilled
  },
  {
    id: 2,
    name: "Lakes",
    icon: WaterSkisFilled
  },
  {
    id: 3,
    name: "Rivers",
    icon: JetSkiFilled
  }
];
const filters = [
  {
    id: 1,
    name: "SurfBoard",
    icon: SurfboardFilled
  },
  {
    id: 2,
    name: "WaterSkis",
    icon: WaterSkisFilled
  },
  {
    id: 3,
    name: "Jet Skiing",
    icon: JetSkiFilled
  },
  {
    id: 4,
    name: "Fishing",
    icon: FishingPoleFilled
  },
  {
    id: 5,
    name: "Canoe",
    icon: CanoeFilled
  },
  {
    id: 6,
    name: "Boating",
    icon: BoatFilled
  },
  {
    id: 7,
    name: "Dock",
    icon: DockFilled
  },
  {
    id: 8,
    name: "Cabin",
    icon: CabinFilled
  },
  {
    id: 9,
    name: "Beaches",
    icon: BeachFilled
  },
  {
    id: 10,
    name: "Raft",
    icon: RaftFilled
  },
  {
    id: 11,
    name: "Swimming",
    icon: SwimmingFilled
  },
  {
    id: 12,
    name: "Tubing",
    icon: InnerTubeFilled
  },
  {
    id: 13,
    name: "Kayaking",
    icon: KayakFilled
  },
  {
    id: 14,
    name: "PaddleBoard",
    icon: PaddleBoardFilled
  },
  {
    id: 15,
    name: "ScubaDiving",
    icon: ScubaDivingFilled
  },
  {
    id: 16,
    name: "Sailing",
    icon: SailBoatFilled
  },
  {
    id: 17,
    name: "Snorkeling",
    icon: SnorkelingFilled
  },
  {
    id: 18,
    name: "Camping",
    icon: CampingFilled
  }
];

const Filters = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        transition: ""
      }}
    >
      <div
        style={{
          display: "flex",
          marginTop: "16px",
          flexDirection: "row",
          justifyContent: "auto"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "20%",
            marginBottom: "16px",
            // gap: "12px",
            borderRight: "1px solid",
            marginright: "36px"
          }}
        >
          <div style={{ width: "auto" }}>Water Type: </div>
          <CategoryFilterBox
            listofFilters={categoryFilters}
            numberofSlides="3"
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "73%",
            marginLeft: "36px",
            marginright: "36px",
            borderRight: "1px solid",
            marginBottom: "16px"
          }}
        >
          <div style={{ width: "auto" }}>Activity Type:</div>
          <ActivityFilterBox listofFilters={filters} numberofSlides="9" />
        </div>

        <div
          style={{
            width: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            justifyItems: "center",
            alignContent: "center",
            marginLeft: "64px"
          }}
        >
          <FilterListIcon
            style={{ fontSize: 36, cursor: "pointer" }}
            className={`${css.more}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Filters;
