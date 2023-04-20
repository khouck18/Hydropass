import Navbar from "../../Components/Navbar";
import React, {useState} from "react";
import {BsChevronLeft, BsChevronRight} from "react-icons/bs";
import {AiFillStar} from "react-icons/ai";
import {MdExplore} from "react-icons/md";
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
      Price: "680",
      Ratings: "4.4",
      Name: "Beautiful Lake View"
    },
    {
      url: Rivers,
      location: "Location: River",
      Price: "400",
      Ratings: "4.0",
      Name: "Beautiful River View"
    },
    {
      url: Beaches,
      location: "Location: Beach",
      Price: "420",
      Ratings: "3.4",
      Name: "Beautiful Beach View"
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
    <div className="h-screen" >
      <div className="relative h-full w-full justify-center">
        <div className="left-0 top-0 blur-md bg-center bg-cover duration-1000 h-4/5 brightness-50 w-screen m-auto" style={{backgroundImage: `url(${photos[currentIndex].url})`}}>hello</div>
        
        <div class="flex justify-center relative bottom-40">
          <div class="text-center">
            <p class="inline-block align-middle text-2xl text-white font-normal">{photos[currentIndex].Name}</p>
          </div>
        </div>
        <div class="flex justify-end items-end relative bottom-28">
          <div className="text-white">
            <AiFillStar size={28}/>
          </div>
          <p class="inline-block align-bottom text-2xl text-white font-normal mr-6">{photos[currentIndex].Ratings}</p>
        </div>
        <div class="flex justify-between items-center relative bottom-28">
          <div class="text-left ml-10">
              <p class="inline-block align-middle text-2xl text-white font-normal">{photos[currentIndex].location}</p>
          </div>
          <div class="text-right mr-6">
            <p class="inline-block align-middle text-2xl text-white font-normal">${photos[currentIndex].Price}</p>
          </div>
        </div>
        <div className="group">
          <div className="absolute group-hover:block top-1/4 -translate-y-[-30%]  text-2xl rounded-ful p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronLeft onClick={prevSlide} size={45} />
          </div>
          <div className="absolute group-hover:block top-1/4 -translate-y-[-30%] -right-5 text-2xl rounded-ful p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronRight onClick={nextSlide} size={45}/>
          </div>
        </div>

        <div className="group m-auto flex flex-row flex-wrap lg:justify-between justify-between my-auto inset-0 absolute h-3/5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div style={{backgroundImage: `url(${photos[getPreviousIndex(currentIndex)].url})`}} className="aspect-square h-max rounded-2xl bg-center bg-cover duration-1000 brightness-50 scale-50 items-center justify-center left-0 transform -translate-x-3/4 lg:w-1/3" > </div>
          <div style={{backgroundImage: `url(${photos[currentIndex].url})`}} className="bg-center aspect-square h-max rounded-2xl bg-cover duration-1000 scale-150 lg:w-1/3"> </div>
          <div style={{backgroundImage: `url(${photos[getNextIndex(currentIndex)].url})`}} className="aspect-square h-max rounded-2xl bg-center bg-cover duration-1000 brightness-50 scale-50 items-center justify-center right-0 transform translate-x-3/4 lg:w-1/3"> </div>
        </div>
      </div>

      <div className=" bg-gray-300 rounded-2xl -translate-y-36 w-screen h-1/5 grid grid-cols-12">
        <div className="text-black col-span-4 flex p-3">
          <MdExplore size={48}/>
          <p class=" text-4xl text-black font-normal">Explore More</p>
        </div>

        <div class="bg-white rounded-md shadow-md p-2 h-10 w-full">
          <input type="text" placeholder="Search" class="bg-transparent outline-none w-full placeholder-gray-400"/>
        </div>


      </div>

    </div>

  );
};

export default ExplorePage;

/*
<div className="relative h-screen">
      <div className="left-0 top-0 blur-md rounded-2xl bg-center bg-cover duration-1000 brightness-50 max-w h-screen w-full m-auto" style={{backgroundImage: `url(${photos[currentIndex].url})`}}></div>
      <div className="group">
        <div className="absolute group-hover:block top-1/2 transform -translate-x-1/2 -translate-y-1/2 left-5 text-2xl rounded-ful p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronLeft onClick={prevSlide} size={45} />
        </div>
        <div className="absolute group-hover:block top-1/2 translate-x-0 translate-y-[-30%] right-5 text-2xl rounded-ful p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronRight onClick={nextSlide} size={45}/>
        </div>
      </div>

      <div className="group m-auto flex flex-row flex-wrap lg:justify-between justify-between mx-auto inset-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        <div style={{backgroundImage: `url(${photos[getPreviousIndex(currentIndex)].url})`}} className="aspect-square h-max rounded-2xl bg-center bg-cover duration-1000 brightness-50 scale-75 items-center justify-center left-0 transform -translate-x-3/4 lg:w-1/3" > </div>
        <div style={{backgroundImage: `url(${photos[currentIndex].url})`}} className="aspect-square h-max rounded-2xl bg-cover duration-1000 scale-150 items-center justify-center lg:w-1/3"> </div>
        <div style={{backgroundImage: `url(${photos[getNextIndex(currentIndex)].url})`}} className="aspect-square h-max rounded-2xl bg-center bg-cover duration-1000 brightness-50 scale-75 items-center justify-center right-0 transform translate-x-3/4 lg:w-1/3"> </div>
      </div>
    </div>
*/