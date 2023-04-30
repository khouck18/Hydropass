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
import FilterBox from "./FilterBox.jsx";

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
    name: "JetSki",
    icon: JetSkiFilled
  },
  {
    id: 4,
    name: "FishingPole",
    icon: FishingPoleFilled
  },
  {
    id: 5,
    name: "Canoe",
    icon: CanoeFilled
  },
  {
    id: 6,
    name: "Boat",
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
    name: "Beach",
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
    name: "InnerTube",
    icon: InnerTubeFilled
  },
  {
    id: 13,
    name: "Kayak",
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
    name: "SailBoat",
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
  return (
    <div
      style={{
        paddingtop: "16px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        overflowX: "auto"
      }}
    >
      {/* return({filters.map((item) => {
            // <FilterBox icon={item.icon} name={item.name} />;
            <div>{item.name} </div>;
        }
        )} ); */}

      {filters.map((filter) => {
        return <FilterBox icon={filter.icon} name={filter.name} id={filter.id}/>;
      })}
    </div>
  );
};

export default Filters;
