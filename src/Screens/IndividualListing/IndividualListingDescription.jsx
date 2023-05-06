/* eslint-disable no-unused-vars */
import React from "react";
import { Tooltip, Avatar, Button, Box, Typography, Grid } from "@mui/material";
import { useSelector } from "react-redux";
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
  const listingInformation = useSelector(
    (state) => state.individualListing.listingInformation
  );

  const iconList = [];
  listingInformation.activities.forEach((activity) => {
    switch (activity) {
      case "Beaches":
        iconList.push({
          iconName: BeachFilledSecondary,
          description: "Beach Access"
        });
        break;
      case "Boating":
        iconList.push({
          iconName: BoatFilledSecondary,
          description: "Boating"
        });
        break;
      case "Overnights":
        iconList.push({
          iconName: CabinFilledSecondary,
          description: "Overnight Stays"
        });
        break;
      case "Camping":
        iconList.push({
          iconName: CampingFilledSecondary,
          description: "Camping"
        });
        break;
      case "Canoeing":
        iconList.push({
          iconName: CanoeFilledSecondary,
          description: "Canoeing"
        });
        break;
      case "Private Dock":
        iconList.push({
          iconName: DockFilledSecondary,
          description: "Private Dock"
        });
        break;
      case "Fishing":
        iconList.push({
          iconName: FishingPoleFilledSecondary,
          description: "Fishing"
        });
        break;
      case "Inner Tubing":
        iconList.push({
          iconName: InnerTubeFilledSecondary,
          description: "Inner Tubing"
        });
        break;
      case "Jet Skiing":
        iconList.push({
          iconName: JetSkiFilledSecondary,
          description: "Jet Skiing"
        });
        break;
      case "Kayaking":
        iconList.push({
          iconName: KayakFilledSecondary,
          description: "Kayaking"
        });
        break;
      case "Paddle Boarding":
        iconList.push({
          iconName: PaddleBoardFilledSecondary,
          description: "Paddle Boarding"
        });
        break;
      case "Rafting":
        iconList.push({
          iconName: RaftFilledSecondary,
          description: "Rafting"
        });
        break;
      case "Sailing":
        iconList.push({
          iconName: SailBoatFilledSecondary,
          description: "Sailing"
        });
        break;
      case "Scuba Diving":
        iconList.push({
          iconName: ScubaDivingFilledSecondary,
          description: "Scuba Diving"
        });
        break;
      case "Surfing":
        iconList.push({
          iconName: SurfboardFilledSecondary,
          description: "Surfing"
        });
        break;
      case "Swimming":
        iconList.push({
          iconName: SwimmingFilledSecondary,
          description: "Swimming"
        });
        break;
      case "Water Skiing":
        iconList.push({
          iconName: WaterSkisFilledSecondary,
          description: "Water Skiing"
        });
        break;
      default:
        break;
    }
  });

  const tempParsedString = listingInformation.location.split(",");

  const str =
    "Welcome to one of the most beautiful and pristine lakes in North America - Lake Sutherland. Situated between entrances to Olympic National Park, this spectacular lake front cottage is 608 sq ft with high ceilings, a modern design and a 1,400 sq ft dock to take in the sweeping views of the mountains. The cabin's gracious floor to ceiling windows let you soak in the views while you cozy up by the fireplace. Whether you are inside or out, you will be getting your much needed dose of nature.";

  return (
    <Box sx={{ ms: 2, mr: 4 }}>
      <Typography variant="h3">{listingInformation.name}</Typography>
      <Typography variant="h5">
        {tempParsedString[1]}, {tempParsedString[2]}
      </Typography>
      {iconList.map((icon) => {
        return (
          <Tooltip key={icon.description} title={icon.description}>
            <img
              src={icon.iconName}
              alt={icon.description}
              width="60"
              height="60"
            />
          </Tooltip>
        );
      })}
      <Box sx={{ mt: 5, pb: 4, borderBottom: "solid 1px gray" }}>
        <Typography variant="h5">About the Listing</Typography>
        {listingInformation.description}
      </Box>
      <Box sx={{ mt: 2, pb: 4, borderBottom: "solid 1px gray" }}>
        <Typography variant="h5">Listing Rules</Typography>
        {listingInformation.rules}
      </Box>
      <Box sx={{ mt: 3 }}>
        <Grid container>
          <Grid item xs={2} sm={2} md={2} lg={2}>
            <Avatar
              alt="Travis Howard"
              src="/static/images/avatar/2.jpg"
              sx={{ width: 65, height: 65 }}
            />
          </Grid>
          <Grid item xs={5} sm={5} md={5} lg={5} sx={{ ms: 2 }}>
            <Typography variant="h5">Travis Howard</Typography>
            <Box sx={{ my: 0 }}>
              <StarIcon color="lightSalmon" sx={{ mb: 1 }} /> 4.8
              <Box>Member since 2023</Box>
            </Box>
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4} sx={{ ms: 2, mt: 2 }}>
            <Button variant="outlined" sx={{ py: 3 }}>
              Contact Host
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default IndividualListingDescription;
