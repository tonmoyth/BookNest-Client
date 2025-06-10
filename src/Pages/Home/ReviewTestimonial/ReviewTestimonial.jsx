import React from "react";
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";

const ReviewTestimonial = () => {
  return (
    <div className="my-6">
      <div className="w-11/12 mx-auto my-4">
        <p className="text-accent font-bold">➜ Testimonals</p>
        <h1 className="text-accent text-3xl font-semibold">
          What Say Our Customers <br /> About Services
        </h1>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper "
      >
        <SwiperSlide className="min-h-[300px]">Slide 1</SwiperSlide>
        <SwiperSlide className="min-h-[300px]">Slide 2</SwiperSlide>
        <SwiperSlide className="min-h-[300px]">Slide 3</SwiperSlide>
        <SwiperSlide className="min-h-[300px]">Slide 4</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ReviewTestimonial;
