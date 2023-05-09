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
    <div style={{ height: props.height, width: props.width }}>
      <Swiper
        //onReachEnd={handleReachEnd}
        // install Swiper modules
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        style={{
          "--swiper-navigation-color": "white",
          "--swiper-pagination-color": "white",
          borderRadius: "25px"
        }}
      >
        {props.images.map((image) => {
          return (
            <SwiperSlide>
              <div className="swiperslide">
                <div
                  className="rounditem"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                >
                  <img
                    width={"100%"}
                    height={"100%"}
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
