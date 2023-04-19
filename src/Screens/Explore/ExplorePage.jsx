import Navbar from "../../Components/Navbar";
import React, {useState} from "react";
import {BsChevronLeft, BsChevronRight} from "react-icons/bs";
import {RxDotFilled} from "react-icons/rx";
import "../../index.css";
import ExploreTemplate from "../Explore/ExploreTemplate";
import Lakes from "../../Images/Lakes.jpg";
import Rivers from "../../Images/Rivers.jpg";
import Beaches from "../../Images/Beaches.jpg";
import { current } from "@reduxjs/toolkit";
import { ClassNames } from "@emotion/react";

function ExplorePage() {
  const photos = [
    {
      url: Lakes,
      location: "Location: Lake",
      Price: "$$",
      Ratings: "4.4"
    },
    {
      url: Rivers,
      location: "Location: River",
      Price: "$$",
      Ratings: "4.4"
    },
    {
      url: Beaches,
      location: "Location: Beach",
      Price: "$$",
      Ratings: "4.4"
    }
];
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? photos.length-1 : currentIndex - 1;
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
    if (currentIndex - 1 < 0)
      return (photos.length-1);
    else
      return currentIndex - 1;
  };

  function getNextIndex(currentIndex) {
    if (currentIndex + 1 > photos.length-1){
      return (0);
    } else {
      return currentIndex + 1;
    }

  };
  return (
<div className="relative h-screen">
      <div className="left-0 top-0 blur-md rounded-2xl bg-center bg-cover duration-1000 brightness-50 max-w h-3/4 w-full m-auto" style={{backgroundImage: `url(${photos[currentIndex].url})`}}></div>
      <div className="group">
        <div className="absolute group-hover:block top-1/2 translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-ful p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronLeft onClick={prevSlide} size={45} />
        </div>
        <div className="absolute group-hover:block top-1/2 translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-ful p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronRight onClick={nextSlide} size={45}/>
        </div>
      </div>


      <div className="group max-w-[80%] h-[780px] w-full m-auto flex flex-row flex-wrap lg:justify-between justify-between mx-auto inset-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        <div style={{backgroundImage: `url(${photos[getPreviousIndex(currentIndex)].url})`}} className="w-full h-full rounded-2xl bg-center bg-cover duration-1000 brightness-50 scale-75 items-center justify-center left-0 transform -translate-x-3/4 lg:w-1/3" > </div>
        <div style={{backgroundImage: `url(${photos[currentIndex].url})`}} className="w-full h-full rounded-2xl bg-cover duration-1000 scale-110 items-center justify-center lg:w-1/3"> </div>
        <div style={{backgroundImage: `url(${photos[getNextIndex(currentIndex)].url})`}} className="w-full h-full rounded-2xl bg-center bg-cover duration-1000 brightness-50 scale-75 items-center justify-center right-0 transform translate-x-full lg:w-1/3"> </div>
      </div>
    </div>
  );
};

export default ExplorePage;

/*
-skew-y-6 my-12 -mx-32


    <div className="relative">
      <div className="left-0 top-0 blur-md rounded-2xl bg-center bg-cover duration-1000 brightness-50 max-w h-[1000px] w-full m-auto" style={{backgroundImage: `url(${photos[currentIndex].url})`}}></div>
      <div className="group">
        <div className="absolute group-hover:block top-1/2 translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-ful p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronLeft onClick={prevSlide} size={45} />
        </div>
        <div className="absolute group-hover:block top-1/2 translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-ful p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronRight onClick={nextSlide} size={45}/>
        </div>
      </div>


      <div className="group max-w-[80%] h-[780px] w-full m-auto flex flex-row flex-wrap lg:justify-between justify-between mx-auto inset-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        <div style={{backgroundImage: `url(${photos[getPreviousIndex(currentIndex)].url})`}} className="w-full h-full rounded-2xl bg-center bg-cover duration-1000 brightness-50 scale-75 items-center justify-center left-0 transform -translate-x-3/4 lg:w-1/3" > </div>
        <div style={{backgroundImage: `url(${photos[currentIndex].url})`}} className="w-full h-full rounded-2xl bg-cover duration-1000 scale-110 items-center justify-center lg:w-1/3"> </div>
        <div style={{backgroundImage: `url(${photos[getNextIndex(currentIndex)].url})`}} className="w-full h-full rounded-2xl bg-center bg-cover duration-1000 brightness-50 scale-75 items-center justify-center right-0 transform translate-x-full lg:w-1/3"> </div>
      </div>
    </div>

skew-y-6 my-12 mx-32 
*/