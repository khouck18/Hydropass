import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Button from "@mui/material/Button";

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
            <Button className="text-white" sx={{border: "2px solid white", "&:hover": {border: "2px solid white"}}} variant="outlined">
              {activity.buttonName}
            </Button>
          </SwiperSlide>
          ) : (
            <SwiperSlide key={activity.title}>
              <div class="d-flex justify-content-center">
                <img width="60" height="60" src={activity.icon} alt={activity.title} />
              </div>
              <h5 class="text-center">{activity.title}</h5>
            </SwiperSlide>
          );
      })}
      </Swiper>
  );
};

export default HomePageCarousel;