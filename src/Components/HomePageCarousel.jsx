import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Button, Typography, Grid } from "@mui/material";

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
            <Typography variant="h4" sx={{ textShadow: "0 0 2px black" }}>{activity.title}</Typography>
            <Typography variant="h6" sx={{ textShadow: "0 0 2px black" }}>{activity.description}</Typography>
            <Button sx={{border: "2px solid white", "&:hover": {border: "2px solid white"}, color: "white.main", textShadow: "0 0 2px black"}} variant="outlined">
              {activity.buttonName}
            </Button>
          </SwiperSlide>
          ) : (
            <SwiperSlide key={activity.title}>
              <Grid display="flex" justifyContent="center">
                <img width="60" height="60" src={activity.icon} alt={activity.title} />
              </Grid>
              <Typography variant="h5" sx={{ textShadow: "0 0 2px black", textAlign: "center" }}>{activity.title}</Typography>
            </SwiperSlide>
          );
      })}
      </Swiper>
  );
};

export default HomePageCarousel;