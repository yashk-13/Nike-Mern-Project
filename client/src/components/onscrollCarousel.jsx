// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import green from "../images/green.jpg";
import purple from "../images/purple.jpg";
import blue from "../images/blue.jpg";
import white from "../images/white.jpg";
import yellow from "../images/yellow.jpg";
import retro from "../images/retro.jpg";
import nikedunks from "../images/nikedunks.jpg";


// import required modules
import { Mousewheel, Pagination } from 'swiper/modules';

 function OnscrollCarousel() {
    const CardImg = [
        green,
        purple,
        blue,
        white,
        yellow,
        retro,
        nikedunks,
      ];
  return (
    <>
      <Swiper
        direction={'horizontal'}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={false}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
       {CardImg.map((imageUrl, index) => (
            <SwiperSlide key={index}>
              <img src={imageUrl} alt={`Slide ${index + 1}`} />
            </SwiperSlide>
               ))}
      </Swiper>
    </>
  );
}

export default OnscrollCarousel;