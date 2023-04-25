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
    <div style={{
      position: "relative",
      height: "100vh",
      width: "100"
    }}>
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
              transform: "translateX(-70%) translateY(40%)",
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
        style={{

          gridRow: "auto",
          width: "100%",
          height: "20%",
          borderRadius: "25px",
          backgroundImage: `url(${photos[getNextIndex(currentIndex)].images})`,
        }}
      >

      </div>

      <div
      className={`${temp.gridContainer}`}>
        {photos.map((listing) => {
          return (
            <ListingTemplate
              location={listing.location}
              dailyRate={listing.dailyRate}
              image={listing.images}
              ratings={listing.Ratings}
              name={listing.Name}
            />
          );
        })}
      </div>
    </div>
    
  );
}

export default ExplorePage;

/*<div className={`h-screen w-100 ${css.containerAlignment}`}>
      <div className="relative h-4/5 justify-center">
        <div
          className="left-0 blur-md bg-center bg-cover duration-1000 h-full brightness-50 w-100 m-auto"
          style={{ backgroundImage: `url(${photos[currentIndex].images})` }}
        ></div>

        <div class="flex justify-center relative bottom-40">
          <div class="text-center">
            <p class="inline-block align-middle text-2xl text-white font-normal">
              {photos[currentIndex].Name}
            </p>
          </div>
        </div>
        <div class="flex justify-end items-end relative bottom-28">
          <div className=" text-yellow-300">
            <AiFillStar size={28} />
          </div>
          <p class="inline-block align-bottom text-2xl text-white font-normal mr-6">
            {photos[currentIndex].Ratings}
          </p>
        </div>
        <div class="flex justify-between items-center relative bottom-28">
          <div class="text-left ml-10">
            <p class="inline-block align-middle text-2xl text-white font-normal">
              {photos[currentIndex].location}
            </p>
          </div>
          <div class="text-right mr-6">
            <p class="inline-block align-middle text-2xl text-white font-normal">
              ${photos[currentIndex].dailyRate}
            </p>
          </div>
        </div>
        <div className="group">
          <div className="absolute group-hover:block top-1/2 -translate-y-[30%]  text-2xl rounded-ful p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronLeft onClick={prevSlide} size={45} />
          </div>
          <div className="absolute group-hover:block top-1/2  -translate-y-[30%] right-0 text-2xl rounded-ful p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronRight onClick={nextSlide} size={45} />
          </div>
        </div>

        <div className="group m-auto flex flex-row flex-wrap lg:justify-between justify-between my-auto inset-0 absolute h-3/5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div
            style={{
              backgroundImage: `url(${
                photos[getPreviousIndex(currentIndex)].images
              })`
            }}
            className="aspect-square h-max rounded-2xl bg-center bg-cover duration-1000 brightness-50 scale-50 items-center justify-center left-0 transform -translate-x-3/4 lg:w-1/3"
          ></div>
          <div
            style={{ backgroundImage: `url(${photos[currentIndex].images})` }}
            className="bg-center cursor-pointer aspect-square h-max rounded-2xl bg-cover duration-1000 scale-150 lg:w-1/3"
          ></div>
          <div
            style={{
              backgroundImage: `url(${
                photos[getNextIndex(currentIndex)].images
              })`
            }}
            className="aspect-square h-max rounded-2xl bg-center bg-cover duration-1000 brightness-50 scale-50 items-center justify-center right-0 transform translate-x-3/4 lg:w-1/3"
          ></div>
        </div>
      </div>

      <div className="flex bg-gray-300 rounded-2xl h-32">
        <div className="text-black flex p-4">
          <MdExplore size={30} />
          <p class=" text-2xl text-black font-normal">Explore More</p>
        </div>
        <div></div>
      </div>
      <div className="pt-24 grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8 container">
        {photos.map((listing) => {
          return (
            <ListingTemplate
              location={listing.location}
              dailyRate={listing.dailyRate}
              image={listing.images}
              ratings={listing.Ratings}
              name={listing.Name}
            />
          );
        })}
      </div>
    </div> */
