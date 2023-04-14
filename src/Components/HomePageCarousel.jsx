import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import css from "./HomePageCarousel.module.css";

const HomePageCarousel = (props) => {
  return (
    <div className="swiper-container">
      <Swiper
        slidesPerView={props.listOfActivities[0].icon === undefined ? "3" : "7"}
        spaceBetween={30}
        pagination={{
          clickable: true,
          el: `.${css.swiperPagination}`
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {props.listOfActivities.map((activity) => {
          return activity.icon === undefined ? (
            <SwiperSlide key={activity.title}>
              <h3>{activity.title}</h3>
              <h5>{activity.description}</h5>
              <button type="button" className="btn btn-primary mt-2">
                {activity.buttonName}
              </button>
            </SwiperSlide>
          ) : (
            <SwiperSlide key={activity.title}>
              <h3 className="text-center">{activity.icon}</h3>
              <h5 className="text-center">{activity.title}</h5>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className={`${css.swiperPagination}`}></div>
    </div>
  );
};

export default HomePageCarousel;
