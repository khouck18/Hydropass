// import { Icon, SvgIcon } from "@mui/material";
// import css from "./FilterBox.module.css";
// import React, { useState } from "react";

// const FilterBox = (props) => {
//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//         borderBottomWidth:"2px",
//         cursor: "pointer",
//         fontWeight:"lighter",
//         // color:"#949494"
//         //fontWeight: selected ? "bold" : "lighter"
//       }}
//       className={`${css.filter}`}
//     >
//       <img width="30" height="30" src={props.icon} />
//       <div> {props.name} </div>
//     </div>
//   );
// };

// export default FilterBox;


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Button from "@mui/material/Button";
import css from "./FilterBox.module.css";
import {AiOutlineLeftCircle, AiOutlineRightCircle} from "react-icons/ai";

const FilterBox = (props) => {
  const swiperId = `swiper-${props.name}`;



  return (    
    <>
      <Swiper 
        navigation={true} 
        modules={[Navigation]} 
        className="px-5 ms-0 me-5"
        id={swiperId}
        slidesPerView={props.numberofSlides != null ? props.numberofSlides : "3"}
        spaceBetween={30}
        style={{ "--swiper-navigation-color": "white"}}

      >
        {props.listofFilters.map((filter) => {
          return filter.icon === undefined ? (
            <SwiperSlide key={filter.name}>
              <h3>{filter.name}</h3>
              <Button className="text-white" sx={{border: "2px solid white", "&:hover": {border: "2px solid white"}}} variant="outlined">
                {filter.buttonName}
              </Button>
            </SwiperSlide>
            ) : (
              <SwiperSlide key={filter.name} style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                borderBottomWidth:"2px",
                cursor: "pointer",
                fontWeight:"lighter",
                }} 
                className={css.filter}>
                <div class="d-flex justify-content-center">
                  <img width="30" height="30" src={filter.icon} alt={filter.name} />
                </div>
                <div>{filter.name}</div>
              </SwiperSlide>
            );
        })}
        </Swiper>
      </>
  );
};

export default FilterBox;