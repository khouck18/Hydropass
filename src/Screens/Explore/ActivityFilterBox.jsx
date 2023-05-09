import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Button from "@mui/material/Button";
import css from "./FilterBox.module.css";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { explorePageActions } from "./ExplorePageSlice";

const ActivityFilterBox = (props) => {
  const swiperId = `swiper-${props.name}`;

  const [selected, setSelected] = useState([]);

  const activitySelected = (id) => {
    if (selected.includes(id)) {
      setSelected((prevSelected) => prevSelected.filter((s) => s !== id));
    } else {
      setSelected((prevSelected) => [...prevSelected, id]);
    }
  };

  const dispatch = useDispatch();
  const activityFilterValue = useSelector(
    (state) => state.explorePage.activityFilter
  );

  const updateActivityInformation = (name) => {
    if (activityFilterValue.includes(name))
      dispatch(
        explorePageActions.updateActivityFilter(
          activityFilterValue.filter((category) => category !== name)
        )
      );
    else {
      dispatch(
        explorePageActions.updateActivityFilter([...activityFilterValue, name])
      );
    }
  };

  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="px-5 ms-0 me-5"
        id={swiperId}
        slidesPerView={
          props.numberofSlides != null ? props.numberofSlides : "3"
        }
        spaceBetween={30}
        style={{ "--swiper-navigation-color": "white" }}
      >
        {props.listofFilters.map((filter) => {
          return filter.icon === undefined ? (
            <SwiperSlide key={filter.name}>
              <h3>{filter.name}</h3>
              <Button
                className="text-white"
                sx={{
                  border: "2px solid white",
                  "&:hover": { border: "2px solid white" }
                }}
                variant="outlined"
              >
                {filter.buttonName}
              </Button>
            </SwiperSlide>
          ) : (
            <SwiperSlide
              key={filter.name}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                borderBottomWidth: "2px",
                cursor: "pointer",
                fontWeight: "lighter"
              }}
              className={`${css.filter} ${
                selected.includes(filter.id) ? css.selected : ""
              }`}
              onClick={() => {
                updateActivityInformation(filter.name);
                activitySelected(filter.id);
              }}
            >
              <div class="d-flex justify-content-center">
                <img
                  width="30"
                  height="30"
                  src={filter.icon}
                  alt={filter.name}
                />
              </div>
              <div>{filter.name}</div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default ActivityFilterBox;
