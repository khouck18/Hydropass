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

function ExplorePage() {
  const photos = [
    {
      url: Lakes
    },
    {
      url: Rivers
    },
    {
      url: Beaches
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
    <div className="relative">
      <div className="absolute left-0 blur-md rounded-2xl bg-center bg-cover duration-1000 brightness-50 max-w h-[1000px] w-full m-auto" style={{backgroundImage: `url(${photos[currentIndex].url})`}}></div>
      <div className="group">
        <div className="group-hover:block absolute top-[50%] translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-ful p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronLeft onClick={prevSlide} size={45} />
        </div>
        <div className="group-hover:block absolute top-[50%] translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-ful p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronRight onClick={nextSlide} size={45}/>
        </div>
      </div>
        <div className="max-w-[80%] h-[780px] w-full m-auto py-16 px-4 relative group grid grid-cols-3">
            
            <div style={{backgroundImage: `url(${photos[getPreviousIndex(currentIndex)].url})`}} className="w-full h-full rounded-2xl bg-center bg-cover duration-1000 -mx-32 brightness-50 scale-75 my-12"> </div>
            <div style={{backgroundImage: `url(${photos[currentIndex].url})`}} className="w-full h-full rounded-2xl bg-center bg-cover duration-1000 scale-100 "> </div>
            <div style={{backgroundImage: `url(${photos[getNextIndex(currentIndex)].url})`}} className="w-full h-full rounded-2xl bg-center bg-cover duration-1000 mx-32 brightness-50 scale-90 my-12 skew-y-6 skew-x-3"> </div>
        </div>

    </div>
    

  );
};

export default ExplorePage;

/*
-skew-y-6 my-12 -mx-32

skew-y-6 my-12 mx-32 
*/