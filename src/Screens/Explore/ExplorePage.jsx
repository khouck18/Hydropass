import React, { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import { MdExplore } from "react-icons/md";
import { RxDotFilled } from "react-icons/rx";
import "../../index.css";
import ListingTemplate from "./ListingTemplate";
import Lakes from "../../Images/Lakes.jpg";
import Rivers from "../../Images/Rivers.jpg";
import Beaches from "../../Images/Beaches.jpg";
import HomePageSearchBar from "../../Components/HomePageSearchBar";
import temp from "./ExploreTemplate.module.css";
import HorizontalListing from "./HorizontalListing";
import { Grid, Box } from "@mui/material";
import ExploreBar from "./ExploreBar.jsx";
import Filters from "./Filters";

function ExplorePage() {
  const photos = [
    {
      images: Lakes,
      location: "Location: Lake",
      dailyRate: "680",
      Ratings: "4.4",
      Name: "Beautiful Lake View"
    },
    {
      images: Rivers,
      location: "Location: River",
      dailyRate: "400",
      Ratings: "4.0",
      Name: "Beautiful River View"
    },
    {
      images: Beaches,
      location: "Location: Beach",
      dailyRate: "420",
      Ratings: "3.4",
      Name: "Beautiful Beach View"
    },
    {
      images: Lakes,
      location: "Location: Lake - 2",
      dailyRate: "6969",
      Ratings: "5.0",
      Name: "Beautiful Lake View -2"
    },
    {
      images: Rivers,
      location: "Location: River -2",
      dailyRate: "1200",
      Ratings: "2.1",
      Name: "Beautiful River View -2"
    },
    {
      images: Beaches,
      location: "Location: Beach -2",
      dailyRate: "109",
      Ratings: "2.8",
      Name: "Beautiful Beach View -2"
    },
    {
      images: Lakes,
      location: "Location: Lake -3",
      dailyRate: "850",
      Ratings: "3.8",
      Name: "Beautiful Lake View -3"
    },
    {
      images: Rivers,
      location: "Location: River -3",
      dailyRate: "200",
      Ratings: "4.4",
      Name: "Beautiful River View -3"
    },
    {
      images: Beaches,
      location: "Location: Beach -3",
      dailyRate: "289",
      Ratings: "1.7",
      Name: "Beautiful Beach View -3"
    },
    {
      images: Lakes,
      location: "Location: Lake -4",
      dailyRate: "190",
      Ratings: "5.0",
      Name: "Beautiful Lake View -4"
    },
    {
      images: Rivers,
      location: "Location: River -4",
      dailyRate: "880",
      Ratings: "5.0",
      Name: "Beautiful River View -4"
    },
    {
      images: Beaches,
      location: "Location: Beach -4",
      dailyRate: "910",
      Ratings: "2.4",
      Name: "Beautiful Beach View -4"
    }
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? photos.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === photos.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  function getPreviousIndex(currentIndex) {
    if (currentIndex - 1 < 0) return photos.length - 1;
    else return currentIndex - 1;
  }

  function getNextIndex(currentIndex) {
    if (currentIndex + 1 > photos.length - 1) {
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
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${photos[currentIndex].images})`,
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
          //className={`${temp.innerphotos}`}
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
                photos[getPreviousIndex(currentIndex)].images
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
              backgroundImage: `url(${photos[currentIndex].images})`,
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
                photos[getNextIndex(currentIndex)].images
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
              name={photos[currentIndex].Name}
              location={photos[currentIndex].location}
              rating={photos[currentIndex].Ratings}
              dailyRate={photos[currentIndex].dailyRate}
            />
          </div>
        </div>
      </div>

      <div
      // Explore Filter
        style={{
          width: "100%",
          height: "35vh",
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
            borderBottom: "1px solid ",
            marginLeft: "5%",
            marginRight: "5%"
          }}
        >
          <ExploreBar />
        </div>

        <div
        style={{width:"90%", marginLeft:"15px"}}
        >
          <Filters />
        </div>
      </div>

      <div style={{ paddingTop: "42px" }}>
        <Box>
          <Grid
            container
            spacing={4}
            direction="row"
            alignItems="center"
            justifyContent="space-evenly"
            rowSpacing={6}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {photos.map((listing) => {
              return (
                <Grid item justifyContent="center">
                  <ListingTemplate
                    location={listing.location}
                    dailyRate={listing.dailyRate}
                    image={listing.images}
                    ratings={listing.Ratings}
                    name={listing.Name}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </div>
    </div>
  );
}

export default ExplorePage;
