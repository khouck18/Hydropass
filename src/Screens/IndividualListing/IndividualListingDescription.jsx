import React from "react";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import BeachFilledSecondary from "../../Images/BeachFilledSecondary.svg";
import BoatFilledSecondary from "../../Images/BoatFilledSecondary.svg";
import CabinFilledSecondary from "../../Images/CabinFilledSecondary.svg";
import CampingFilledSecondary from "../../Images/CampingFilledSecondary.svg";
import CanoeFilledSecondary from "../../Images/CanoeFilledSecondary.svg";
import DockFilledSecondary from "../../Images/DockFilledSecondary.svg";
import FishingPoleFilledSecondary from "../../Images/FishingPoleFilledSecondary.svg";
import InnerTubeFilledSecondary from "../../Images/InnerTubeFilledSecondary.svg";
import JetSkiFilledSecondary from "../../Images/JetSkiFilledSecondary.svg";
import KayakFilledSecondary from "../../Images/KayakFilledSecondary.svg";
import PaddleBoardFilledSecondary from "../../Images/PaddleBoardFilledSecondary.svg";
import RaftFilledSecondary from "../../Images/RaftFilledSecondary.svg";
import SailBoatFilledSecondary from "../../Images/SailBoatFilledSecondary.svg";
import ScubaDivingFilledSecondary from "../../Images/ScubaDivingFilledSecondary.svg";
import SnorkelingFilledSecondary from "../../Images/SnorkelingFilledSecondary.svg";
import SurfboardFilledSecondary from "../../Images/SurfboardFilledSecondary.svg";
import SwimmingFilledSecondary from "../../Images/SwimmingFilledSecondary.svg";
import WaterSkisFilledSecondary from "../../Images/WaterSkisFilledSecondary.svg";


const IndividualListingDescription = () => {

    const iconList = [
        BeachFilledSecondary, 
        BoatFilledSecondary, 
        CabinFilledSecondary, 
        CampingFilledSecondary, 
        CanoeFilledSecondary,
        DockFilledSecondary,
        FishingPoleFilledSecondary,
        InnerTubeFilledSecondary,
        JetSkiFilledSecondary,
        KayakFilledSecondary,
        PaddleBoardFilledSecondary,
        RaftFilledSecondary,
        SailBoatFilledSecondary,
        ScubaDivingFilledSecondary,
        SnorkelingFilledSecondary,
        SurfboardFilledSecondary,
        SwimmingFilledSecondary,
        WaterSkisFilledSecondary
    ];

    const listingIcons = [
        {
            iconName: BoatFilledSecondary,
            description: "Boating"
        },
        {
            iconName: CanoeFilledSecondary,
            description: "Canoeing"
        },
        {
            iconName: DockFilledSecondary,
            description: "Private Dock"
        },
        {
            iconName: FishingPoleFilledSecondary,
            description: "Fishing"
        }, 
        {
            iconName: SwimmingFilledSecondary,
            description: "Swimming"
        }
    ];

    const str = "Welcome to one of the most beautiful and pristine lakes in North America - Lake Sutherland. Situated between entrances to Olympic National Park, this spectacular lake front cottage is 608 sq ft with high ceilings, a modern design and a 1,400 sq ft dock to take in the sweeping views of the mountains. The cabin's gracious floor to ceiling windows let you soak in the views while you cozy up by the fireplace. Whether you are inside or out, you will be getting your much needed dose of nature.";

    return (
        <div className="ms-5 ps-5"> 
            <h2>Name of Listing</h2>
            <h5>Address of Listing</h5>
            {listingIcons.map((icon) => {
                return (
                    <Tooltip key={icon.description} title={icon.description}>
                        <img src={icon.iconName} alt={icon.description} width="60" height="60" />
                    </Tooltip>
                );
            })}
            <div className="mt-5 pb-4 border-bottom">
                <h5>About the Listing</h5>
                {str}

            </div>
            <div className="mt-2 pb-4 border-bottom">
                <h5>Listing Rules</h5>
                Storm: No refunds will be given in the event that a storm or severe weather conditions limits your accessibility to the lake house or causes a power outage. We do not refund due to road conditions; however, we will assess this case by case and are willing to compensate accordingly to make it fair for both parties
            </div>
            <div className="mt-3">
                <div className="row">
                    <div className="col-2">
                        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg"  sx={{ width: 65, height: 65 }}/>
                    </div>
                    <div className="col-5 ms-2">
                        <h5 className="mb-0">Travis Howard </h5>
                        <div className="my-0"><i className="bi bi-star-fill me-1" style={{color: "#ffa07a"}}/> 4.8</div>
                        <div>Member since 2023</div>
                    </div>
                    <div className="col-4 ms-2 mt-2">
                        <Button variant="outlined" className="py-3">Contact Host</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IndividualListingDescription;
