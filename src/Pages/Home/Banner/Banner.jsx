// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import receptionImage from "../../../assets/reception.jpg";
import receptionImage2 from "../../../assets/reception2.jpg";
import female from "../../../assets/female.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { Link, NavLink } from "react-router";
import SliderButton from "../../../Components/SliderButton/SliderButton";
import NavBerButton from "../../../Components/SliderButton/NavBerButton";
import { FaUser } from "react-icons/fa";

const Banner = () => {
  const links = (
    <>
      <li>
        <NavLink 
        className={({isActive})=> isActive && 'border-b-2 border-primary'}
        to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/rooms">Rooms</NavLink>
      </li>
      <li>
        <NavLink to="/my_rooms">My Rooms</NavLink>
      </li>
    </>
  );
  return (
    <div className="relative">
      {/* navBer/header */}
      <div className="navbar px-8 z-10 absolute top-0 left-0 text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link className="text-2xl">Book<span className="text-primary font-bold">Nest</span></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <Link>
            <NavBerButton level={`Sign In`}></NavBerButton>
          </Link>
        </div>
      </div>
      {/* slider */}
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide
          style={{
            backgroundImage: `url(${female})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="min-h-[100vh] relative "
        >
          <div className="absolute h-full w-full bg-black opacity-55"></div>
          <div className="z-10 w-4/5 mx-auto space-y-2">
            <h1 className=" font-bold md:text-2xl lg:text-4xl mx-auto md:font-semibold lg:font-bold">
            Discover and Book the Perfect Hotel for Every Journey, Anywhere <br /> in 
            the World.
          </h1>
          <p className="z-10 text-[12px] md:text-[18px]">
            Easily find the ideal stay with real-time availability, personalized
            options,<br /> and global coverage — all in one place
          </p>
          <SliderButton level='See Rooms'></SliderButton>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: `url(${receptionImage2})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="min-h-[100vh] relative "
        >
          <div className="absolute h-full w-full bg-black opacity-55"></div>
          <div className="z-10 w-4/5 mx-auto space-y-2">
            <h1 className="font-bold md:text-2xl lg:text-4xl mx-auto md:font-semibold lg:font-bold">
            Seamless Hotel Booking with the Comfort, Convenience, and <br /> Confidence
            You Deserve.
          </h1>
          <p className="z-10 text-[12px] md:text-[18px]">
            From luxury escapes to budget stays, book with ease and trust —
            backed by  verified reviews <br /> and 24/7 support.
          </p>
          <SliderButton level='See Rooms'></SliderButton>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: `url(${receptionImage})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="min-h-[100vh] relative "
        >
          <div className="absolute h-full w-full bg-black opacity-55"></div>
          <div className="z-10 w-4/5 mx-auto space-y-2">
            <h1 className="font-bold md:text-2xl lg:text-4xl mx-auto md:font-semibold lg:font-bold">
            Transform the Way You Travel with Smart Hotel Deals, Real Reviews,<br />
            and Instant Booking.
          </h1>
          <p className="z-10 text-[12px] md:text-[18px]">
            Experience hassle-free booking, exclusive deals, and trusted hotels
            —  all tailored <br /> to your travel needs.
          </p>
          <SliderButton level='See Rooms'></SliderButton>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
