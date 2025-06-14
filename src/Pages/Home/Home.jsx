import Banner from "./Banner/Banner";
import Map from "./Map";
import FeaturedRooms from "./FeaturedRooms/FeaturedRooms";
import OurHotel from "./OurHotel/OurHotel";
import Service from "./Service/Service";
import ReviewTestimonial from "./ReviewTestimonial/ReviewTestimonial";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";


const Home = () => {
  // useEffect(() => {
  //   document.getElementById("my_modal_3").showModal();
  // }, []);
  return (
    <div>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="booking rooms"></meta>
      </Helmet>
      <Banner></Banner>
      {/* <Map></Map> */}
      <OurHotel></OurHotel>
      <FeaturedRooms></FeaturedRooms>
      <Service></Service>
      <ReviewTestimonial></ReviewTestimonial>

      {/* modal */}
      {/* You can open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            alt="Room Offer"
            className="rounded-xl mb-4"
          />
          <h2 className="text-xl font-bold text-center mb-2 text-red-600">
            🔥 Special Offer!
          </h2>
          <p className="text-gray-700 text-center">
            Book now and get <strong>30% OFF</strong> on all deluxe rooms! Offer
            valid till this weekend only.
          </p>
        </div>
      </dialog>
    </div>
  );
};

export default Home;
