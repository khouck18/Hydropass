import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "./ImageSwiperTemplate.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const ImageSwiper = (props) => {
  return (
    <div style={{ height: "280px", width: "280px" }}>
      <Swiper
        //onReachEnd={handleReachEnd}
        // install Swiper modules
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        style={{
          "--swiper-navigation-color": "white",
          "--swiper-pagination-color": "white"
        }}
      >
        {props.images.map((image) => {
          return (
            <SwiperSlide>
              <div className="swiperslide">
                <div className="rounditem" style={{ objectFit: "cover" }}>
                  <img
                    width="280px"
                    height="280px"
                    src={image}
                    alt={"No Image"}
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ImageSwiper;
