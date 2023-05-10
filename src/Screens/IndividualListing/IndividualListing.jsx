import React, { useEffect, useContext } from "react";
import GoogleMap from "../../Components/GoogleMap";
import IndividualListingCheckoutCard from "./IndividualListingCheckoutCard";
import IndividualListingImageGallery from "./IndividualListingImageGallery";
import css from "./IndividualListing.module.css";
import IndividualListingDescription from "./IndividualListingDescription";
import { GetIndividualListing } from "./IndividualListingActions";
import { Grid, Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import AuthContext from "../../Contexts/AuthContext";


const IndividualListing = () => {
  const dispatch = useDispatch();
  const auth = useContext(AuthContext);
  const apiBaseUrl = `${process.env.REACT_APP_API_URL}`;
  const location = useLocation();
  const listingID = location.pathname.split("/").pop();

  const listingInformation = useSelector(
    (state) => state.individualListing.listingInformation
  );

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    listingInformation.propertyName === "" ? dispatch(GetIndividualListing({apiBaseUrl, auth, listingID})) : null;
  }, [listingInformation, listingID, apiBaseUrl, auth, dispatch]);

  const col5Style = {
    height: "75vh",
    backgroundImage: listingInformation.images.length > 0 ? `url(${listingInformation.images[0]})` : null,
    backgroundPosition: "left 25%",
    backgroundSize: "auto 100%",
    backgroundRepeat: "no-repeat",
    transform: "translateX(-35%)"
  };

  return (
    <Grid container>
      <Grid item xs={5} sm={5} md={5} lg={5} sx={{ px: 0 }} style={col5Style}>
        <Box
          className={css.glassBackground}
          sx={{ transform: "translateX(30%)" }}
        >
          <Box sx={{pt: "10%", ml: "0%", pl: "10%", width: "95%"}}>
            <IndividualListingImageGallery />
          </Box>
        </Box>
      </Grid>
      <Grid item xs={4} sm={4} md={4} lg={4}>
        <IndividualListingDescription />
      </Grid>
      <Grid item xs={3} sm={3} md={3} lg={3}>
        <IndividualListingCheckoutCard />
        <GoogleMap address={listingInformation.location} />
      </Grid>
    </Grid>
  );
};

export default IndividualListing;
