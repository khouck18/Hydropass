import React from "react";
import GoogleMap from "../../Components/GoogleMap";
import IndividualListingCheckoutCard from "./IndividualListingCheckoutCard";
import IndividualListingImageGallery from "./IndividualListingImageGallery";
import css from "./IndividualListing.module.css";
import IndividualListingDescription from "./IndividualListingDescription";
import { Grid, Box } from "@mui/material";

const IndividualListing = () => {
    const col5Style = {
        height: "75vh",
        backgroundImage: "url(https://picsum.photos/id/1018/1000/600/)",
        backgroundPosition: "left 25%",
        backgroundSize: "auto 100%",
        backgroundRepeat: "no-repeat",
        transform: "translateX(-35%)",
      };

  return (
    <Grid container>
      <Grid item xs={5} sm={5} md={5} lg={5} sx={{px: 0}} style={col5Style}>
        <Box className={css.glassBackground} sx={{ transform: "translateX(30%)" }}>
          <IndividualListingImageGallery />
        </Box>
      </Grid>
      <Grid item xs={4} sm={4} md={4} lg={4}>
        <IndividualListingDescription />
      </Grid>
      <Grid item xs={3} sm={3} md={3} lg={3}>
        <IndividualListingCheckoutCard />
        <GoogleMap address={"6336 SW Seymour Street, Portland OR 97221"}/>
      </Grid>
    </Grid>
  );
};

export default IndividualListing;
