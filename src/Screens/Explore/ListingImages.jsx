import React, { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import temp from "./ListingTemplate";

function ListingImages(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = (photos) => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? photos.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = (photos) => {
    const isLastSlide = currentIndex === photos.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  function getPreviousIndex(currentIndex, photos) {
    if (currentIndex - 1 < 0) return photos.length - 1;
    else return currentIndex - 1;
  }

  function getNextIndex(currentIndex, photos) {
    if (currentIndex + 1 > photos.length - 1) {
      return 0;
    } else {
      return currentIndex + 1;
    }
  }

  return (
    <>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${props[currentIndex]})`,
          backgroundAttachment: "scroll",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          transitionDuration: "1000ms"
        }}
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
            size={15}
            color="white"
          />
        </div>
        <div className={`${temp.nextbutton}`} style={{ zIndex: 1 }}>
          <BsChevronRight
            style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
            onClick={nextSlide}
            size={15}
            color="white"
          />
        </div>
      </div>
    </>

    // <div
    //   style={{
    //     backgroundImage: `url(${props[currentIndex]})`,
    //     backgroundPosition: "center",
    //     backgroundRepeat: "no-repeat",
    //     backgroundSize: "cover",
    //     borderRadius: "25px",
    //     transitionDuration: "1000ms"
    //   }}
    // ></div>

    //CHEVRON
    /*
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
    */
  );
}

export default ListingImages;
