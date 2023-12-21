import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

export default function CarouselGame() {
  return (
    <Swiper
      modules={[Navigation]}
      slidesPerView={2}
      navigation
      spaceBetween={10}
      pagination={{ clickable: true }}
      breakpoints={{
        // when window width is >= 100px
        100: {
          slidesPerView: 1,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 2,
        },
      }}
    >
      <SwiperSlide><div style={{"width": "100%", "display": "block"}}><Link to="/survey"><img src="./src/assets/summer.jpg"></img></Link></div></SwiperSlide>
      <SwiperSlide><div style={{"width": "100%", "display": "block"}}><Link to="/survey"><img src="./src/assets/gamevil.jpg"></img></Link></div></SwiperSlide>
      <SwiperSlide><div style={{"width": "100%", "display": "block"}}><Link to="/survey"><img src="./src/assets/fishing.png"></img></Link></div></SwiperSlide>
    </Swiper>
  );
}