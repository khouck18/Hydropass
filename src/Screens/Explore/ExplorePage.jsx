import React, { useState, useContext, useEffect } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import { MdExplore } from "react-icons/md";
import "../../index.css";
import ListingTemplate from "./ListingTemplate";
import temp from "./ExploreTemplate.module.css";
import HorizontalListing from "./HorizontalListing";
import { Grid, Box } from "@mui/material";
import ExploreBar from "./ExploreBar.jsx";
import Filters from "./Filters";
import { useDispatch, useSelector } from "react-redux";
import AuthContext from "../../Contexts/AuthContext";
import { GetListings } from "./ExplorePageActions";
import ListingLoader from "./ListingLoader.jsx";
import FeatureLoader from "./FeatureLoader.jsx";

function ExplorePage() {
  const dispatch = useDispatch();
  const auth = useContext(AuthContext);
  const apiBaseUrl = `${process.env.REACT_APP_API_URL}`;

  const [currentIndex, setCurrentIndex] = useState(0);

  const allListingInformation = useSelector(
    (state) => state.explorePage.allListingsInfo
  );

  const categoryFilterValue = useSelector(
    (state) => state.explorePage.categoryFilter
  );

  const activityFilterValue = useSelector(
    (state) => state.explorePage.activityFilter
  );

  const isLoading = useSelector((state) => state.explorePage.loading);

  const filterCategoryListInformation =
    categoryFilterValue.length !== 0
      ? allListingInformation.filter((listing) =>
          categoryFilterValue.includes(listing.category)
        )
      : allListingInformation;
  const filterListInformation =
    activityFilterValue.length !== 0
      ? filterCategoryListInformation.filter((listing) =>
          activityFilterValue.some((activity) =>
            listing.activities.includes(activity)
          )
        )
      : filterCategoryListInformation;

  useEffect(() => {
    dispatch(GetListings({ apiBaseUrl, auth }));
  }, []);

  const featureListingInformation =
    allListingInformation[0].images.length > 0
      ? allListingInformation.filter((listing) => listing.featuredListing)
      : [
          {
            images: [],
            location: "",
            dailyRate: "",
            rating: "",
            name: "",
            category: ""
          }
        ];

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide
      ? featureListingInformation.length - 1
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === featureListingInformation.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  function getPreviousIndex(currentIndex) {
    if (currentIndex - 1 < 0) return featureListingInformation.length - 1;
    else return currentIndex - 1;
  }

  function getNextIndex(currentIndex) {
    if (currentIndex + 1 > featureListingInformation.length - 1) {
      return 0;
    } else {
      return currentIndex + 1;
    }
  }

  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        width: "100%"
      }}
    >
      <div
        style={{
          position: "relative",
          height: "70vh",
          width: "100"
        }}
      >
        {isLoading === true && <FeatureLoader />}
        {isLoading !== true && (
          <div>
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundImage: `url(${featureListingInformation[currentIndex].images[0]})`,
                backgroundAttachment: "scroll",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                transitionDuration: "1000ms"
              }}
              className={`${temp.blurnround}`}
            ></div>
            <div>
              <div
                style={{
                  left: 0,
                  width: "min-content",
                  zIndex: 1
                }}
                className={`${temp.nextbutton}`}
              >
                <BsChevronLeft
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
                  onClick={prevSlide}
                  size={45}
                  color="white"
                />
              </div>
              <div className={`${temp.nextbutton}`} style={{ zIndex: 1 }}>
                <BsChevronRight
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
                  onClick={nextSlide}
                  size={45}
                  color="white"
                />
              </div>
            </div>
            <div
              //className={`${temp.innerallListingInformation}`}
              style={{
                position: "absolute",
                gridRow: "auto",
                width: "100%",
                maxWidth: "100%",
                height: "80%",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                overflowX: "hidden"
              }}
            >
              <div
                style={{
                  height: "60%",
                  maxWidth: "25%",
                  width: "20%",
                  backgroundImage: `url(${
                    featureListingInformation[getPreviousIndex(currentIndex)]
                      .images[0]
                  })`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  transform: "translateX(-60%) translateY(40%)",
                  borderRadius: "25px",
                  transitionDuration: "1000ms"
                }}
                className={`${temp.brightness}`}
              />
              <div
                style={{
                  height: "100%",
                  width: "50%",
                  backgroundImage: `url(${featureListingInformation[currentIndex].images[0]})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "25px",
                  transitionDuration: "1000ms"
                }}
              />
              <div
                style={{
                  height: "60%",
                  width: "20%",
                  backgroundImage: `url(${
                    featureListingInformation[getNextIndex(currentIndex)]
                      .images[0]
                  })`,

                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  transform: "translateX(70%) translateY(40%)",
                  borderRadius: "25px",
                  transitionDuration: "1000ms"
                }}
                className={`${temp.brightness}`}
              />
            </div>
            <div
              style={{
                justifyContent: "center",
                position: "absolute",
                gridRow: "auto",
                width: "50%",
                height: "10%",
                top: "90%",
                left: "25%",
                borderRadius: "25px"
              }}
            >
              <div style={{}}>
                <HorizontalListing
                  name={featureListingInformation[currentIndex].name}
                  location={featureListingInformation[currentIndex].location}
                  rating={featureListingInformation[currentIndex].rating}
                  dailyRate={featureListingInformation[currentIndex].dailyRate}
                />
              </div>
            </div>
          </div>
        )}
      </div>

      <div
        // Explore Filter
        style={{
          width: "100%",
          height: "auto",
          borderRadius: "25px",
          backgroundColor: "#2d6fb8",
          flexDirection: "column",
          color: "white",
          gap: "12px"
        }}
        // className={`${temp.sticky}`}
      >
        <div className={`${temp.explore}`}>
          <div
            style={{
              fontSize: "30px",
              alignContent: "flex-start",
              padding: "10px 0 0 0"
            }}
          >
            <MdExplore /> Explore
          </div>
        </div>
        <div
          style={{
            justifyContent: "center",
            display: "flex",
            padding: "0 0 24px 0",
            // borderBottom: "1px solid ",
            marginLeft: "5%",
            marginRight: "5%"
          }}
        >
          <ExploreBar />
        </div>

        <div style={{ width: "90%", marginLeft: "5%", marginRight: "5%" }}>
          <Filters />
        </div>
      </div>

      <div style={{ marginLeft: "5%", marginRight: "5%", paddingTop: "42px" }}>
        <Box>
          {isLoading === true && <ListingLoader />}
          {isLoading !== true && (
            <Grid
              container
              direction="row"
              alignItems="center"
              rowSpacing={6}
              sx={{ paddingTop: "42px", alignItems: "stretch" }}
              //columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              {filterListInformation.map((listing) => {
                return (
                  <Grid
                    container
                    item
                    justifyContent="center"
                    xs={3}
                    sm={3}
                    md={3}
                    lg={3}
                    sx={{}}
                  >
                    <ListingTemplate
                      location={listing.location}
                      dailyRate={listing.dailyRate}
                      image={listing.images}
                      rating={listing.rating}
                      name={listing.name}
                      listingInfo={listing}
                    />
                  </Grid>
                );
              })}
            </Grid>
          )}
        </Box>
      </div>
    </div>
  );
}

export default ExplorePage;
