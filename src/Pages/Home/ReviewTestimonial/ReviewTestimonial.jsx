import React, { useEffect, useState } from "react";
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Pagination } from "swiper/modules";
import axios from "axios";
import StarRatings from "react-star-ratings";

const ReviewTestimonial = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios(`${import.meta.env.VITE_SERVER_URL}/all_reviews`).then((res) => {
      setReviews(res.data);
    });
  }, []);

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
        {reviews.map((rev) => (
          <SwiperSlide className="min-h-[300px]">
            <div className="p-4">
              <StarRatings
                rating={rev.rating}
                starRatedColor="#facc15"
                numberOfStars={5}
                starDimension="30px"
                starSpacing="5px"
                name="rating"
              />
              <p>{rev.comment}</p>
                <span className="font-bold text-lg">{rev.user}</span>
            </div>
           
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReviewTestimonial;
