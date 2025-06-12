import React from "react";
import { FaArrowRight } from "react-icons/fa";
import SliderButton from "../../../Components/SliderButton/SliderButton";
import { IoStarOutline } from "react-icons/io5";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const OurHotel = () => {
  const { ref, inView} = useInView({
    /* Optional options */
    threshold: 0,
  });
  return (
    <section className="bg-accent text-primary py-16 px-6 md:px-16">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <p className="uppercase text-sm text-primary font-semibold flex gap-2 tracking-widest mb-3">
            <FaArrowRight />
            Our Hotel
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Your Gateway to Comfort, Luxury, and Unmatched World our Hotel
          </h1>
          <p className="text-primary-content mb-6">
            Step into a world where elegance meets comfort. Our hotel offers an
            unmatched experience of luxury, personalized service, and top-tier
            amenities. Whether you're here for leisure or business, discover a
            stay that's both relaxing and unforgettable.
          </p>

          <div className="flex flex-wrap gap-4 mb-6">
            <span className="flex items-center gap-2 text-sm">
              <span className="text-primary">✔</span> Exclusive Deals &
              Discounts
            </span>
          </div>

          <SliderButton level="MORE ABOUT"></SliderButton>
        </div>

        {/* Right Content */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b"
            alt="Hotel Chairs"
            className="rounded-lg w-full object-cover h-[400px]"
          />

          <div className="absolute bottom-[-40px] left-1 lg:-left-6 bg-secondary p-6 rounded-lg shadow-lg">
            <div className="flex items-center gap-3">
              <div className="text-white text-2xl">
                <IoStarOutline size={30} />
              </div>
              <div>
                
                <h3 ref={ref} className="text-white text-2xl font-bold">
                  {inView && <CountUp end={6000} />}
                  
                </h3>
                <p className="text-primary-content text-sm">Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurHotel;
