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

const CategoryFilterBox = (props) => {
  const swiperId = `swiper-${props.name}`;

  const [selected, setSelected] = useState([]);

  const categorySelected = (id) => {
    if (selected.includes(id)) {
      setSelected((prevSelected) => prevSelected.filter((s) => s !== id));
    } else {
      setSelected((prevSelected) => [...prevSelected, id]);
    }
  };

  const dispatch = useDispatch();
  const categoryFilterValue = useSelector(
    (state) => state.explorePage.categoryFilter
  );

  const updateCategoryInformation = (name) => {
    if (categoryFilterValue.includes(name)) {
      dispatch(
        explorePageActions.updateCategoryFilter(
          categoryFilterValue.filter((category) => category !== name)
        )
      );
    } else {
      dispatch(
        explorePageActions.updateCategoryFilter([...categoryFilterValue, name])
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
                //paddingTop:"26px" //TODO: FIX PADDING ERROR
              }}
              className={`${css.filter} ${
                selected.includes(filter.id) ? css.selected : ""
              }`}
              onClick={() => {
                updateCategoryInformation(filter.name);
                categorySelected(filter.id);
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

export default CategoryFilterBox;
