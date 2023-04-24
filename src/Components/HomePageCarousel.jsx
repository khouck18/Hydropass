import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import css from "./HomePageCarousel.module.css";

const HomePageCarousel = (props) => {
  const swiperId = `swiper-${props.title}`;
  
  return (
    <Swiper 
      navigation={true} 
      modules={[Navigation]} 
      className="mySwiper px-5 ms-0 me-5" 
      id={swiperId}
      slidesPerView={props.listOfActivities[0].icon === undefined ? "3" : "6"}
      spaceBetween={30}
      style={{ "--swiper-navigation-color": "white" }}
    >
      {props.listOfActivities.map((activity) => {
        return activity.icon === undefined ? (
          <SwiperSlide key={activity.title}>
            <h3>{activity.title}</h3>
            <h5>{activity.description}</h5>
            <button type="button" className={`${css.buttonStyles} mt-2 p-2`}>
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
  );
};

export default HomePageCarousel;