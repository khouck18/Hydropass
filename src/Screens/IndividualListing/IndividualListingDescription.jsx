/* eslint-disable no-unused-vars */
import React from "react";
import { Tooltip, Avatar, Button, Box, Typography, Grid } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
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
        <Box sx={{ms: 2, mr: 4}}> 
            <Typography variant="h3">Name of Listing</Typography>
            <Typography variant="h5">Address of Listing</Typography>
            {listingIcons.map((icon) => {
                return (
                    <Tooltip key={icon.description} title={icon.description}>
                        <img src={icon.iconName} alt={icon.description} width="60" height="60" />
                    </Tooltip>
                );
            })}
            <Box sx={{mt: 5, pb: 4,  borderBottom: "solid 1px gray" }}>
                <Typography variant="h5">About the Listing</Typography>
                {str}
            </Box>
            <Box sx={{ mt: 2, pb: 4, borderBottom: "solid 1px gray" }}>
                <Typography variant="h5">Listing Rules</Typography>
                Storm: No refunds will be given in the event that a storm or severe weather conditions limits your accessibility to the lake house or causes a power outage. We do not refund due to road conditions; however, we will assess this case by case and are willing to compensate accordingly to make it fair for both parties
            </Box>
            <Box sx={{ mt: 3 }}>
                <Grid container>
                    <Grid item xs={2} sm={2} md={2} lg={2}>
                        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg"  sx={{ width: 65, height: 65 }}/>
                    </Grid>
                    <Grid item xs={5} sm={5} md={5} lg={5} sx={{ ms: 2 }}>
                        <Typography variant="h5">Travis Howard</Typography>
                        <Box sx={{ my: 0 }}>
                            <StarIcon color="lightSalmon" sx={{ mb: 1 }}/>  4.8
                            <Box>Member since 2023</Box>
                        </Box>
                    </Grid> 
                    <Grid item xs={4} sm={4} md={4} lg={4} sx={{ ms: 2, mt: 2 }}>
                        <Button variant="outlined" sx={{ py: 3 }}>Contact Host</Button>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default IndividualListingDescription;
