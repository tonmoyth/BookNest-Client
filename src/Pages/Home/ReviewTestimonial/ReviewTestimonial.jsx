import React, { useEffect, useState } from "react";
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import axios from "axios";
import StarRatings from "react-star-ratings";
 import { motion } from "motion/react"

const ReviewTestimonial = () => {
  const [reviews, setReviews] = useState([]);

 

  useEffect(() => {
    axios(`${import.meta.env.VITE_SERVER_URL}/all_reviews`).then((res) => {
      setReviews(res.data);
      
    });
  }, []);

  return (
    <div className="bg-accent py-6">
      <motion.div
        initial={{ y: 80 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.0 }}
        className="w-11/12 mx-auto py-6"
      >
        <p className="text-primary font-bold">➜ Testimonals</p>
        <h1 className="text-primary text-3xl font-semibold">
          What Say Our Customers <br /> About Services
        </h1>
      </motion.div>

      <Swiper
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {reviews.map((rev, index) => (
          <SwiperSlide key={index} className="!block min-h-[250px]">
            <div className="p-6 min-h-[250px] bg-accent-content hover:bg-secondary transition-all duration-300 ease-in-out">
              {/* star */}
              <div className="text-left space-x-2 flex items-center">
                <StarRatings
                  rating={rev.rating}
                  starRatedColor="#d5e5d1"
                  numberOfStars={5}
                  starDimension="30px"
                  starSpacing="5px"
                  name="rating"
                />
                <span className="text-2xl text-primary-content">
                  ({rev.rating})
                </span>
              </div>
              {/* comment */}
              <div className="my-8">
                <p className="text-left font-normal text-sm text-primary-content">
                  {rev.comment}
                </p>
              </div>

              {/* user */}

              <div className="flex space-x-4 items-center ">
                <div className="w-12 h-12">
                  <img
                    src="https://i.ibb.co/s9W1ndHW/support.png"
                    alt=""
                    className="object-cover w-12 h-12 rounded-full"
                  />
                </div>
                <div>
                  <h4 className="font-bold">{rev.user}</h4>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReviewTestimonial;
