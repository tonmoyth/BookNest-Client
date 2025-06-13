import { useLoaderData, useLocation, useNavigate } from "react-router";
import NavBerButton from "../../Components/SliderButton/NavBerButton";
import Swal from "sweetalert2";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import Rooms from "../Rooms/Rooms";
import { Helmet } from "react-helmet-async";

const RoomDetails = () => {
  const { data: room } = useLoaderData();
  const [update, setUpdate] = useState(false);
  const { user } = useContext(AuthContext);
  const [date, setDate] = useState("");
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [show, setShow] = useState(false);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    setReviews(room.reviews.slice(0, 3));
  }, [room]);

  const handleConfirmButton = () => {
    if (date === "") {
      const modal = document.getElementById("my_modal_3");
      modal.close();
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please select date",
      });
      return;
    }
    axios
      .post(`${import.meta.env.VITE_SERVER_URL}/status/${room._id}`, {
        email: user?.email,
        date,
      })
      .then((res) => {
        if (res.data.acknowledged) {
          const modal = document.getElementById("my_modal_3");
          modal.close();
          setUpdate(true);
          Swal.fire({
            title: "Successfully",
            text: "Booking Successfully",
            icon: "success",
          });
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${err.message}`,
        });
      });
  };

  // handle book now button
  const handleBookNowButton = () => {
    if (!user) {
      return navigate("/signin", { state: pathname });
    }
    document.getElementById("my_modal_3").showModal();
  };

  // handle show more
  const handleShow = () => {
    setShow((prev) => !prev);
    if (!show) {
      setReviews(room.reviews);
    } else {
      const selectReviews = room.reviews.slice(0, 3);
      setReviews(selectReviews);
    }
  };
  return (
    <div className="bg-accent text-primary">
      <Helmet>
        <title>Details</title>
      </Helmet>
      <div className="max-w-5xl mx-auto p-4 space-y-6">
        {/* Room Image */}
        <img
          src={room.image}
          alt={room.roomType}
          className="w-full h-[300px] md:h-[400px] object-cover rounded-xl"
        />

        {/* Room Info */}
        <div className="space-y-2">
          <h2 className="text-3xl font-bold ">{room.roomType} Room</h2>
          <p className="text-primary-content">{room.description}</p>
          <div className="grid md:grid-cols-2 gap-4 mt-4 text-sm">
            <p>
              <strong>Price:</strong> {room.pricePerNight} / Per Night
            </p>
            <p>
              <strong>Size:</strong> {room.roomSize}
            </p>
            <p>
              <strong>Occupancy:</strong> {room.occupancy}
            </p>
            <p>
              <strong>Bed Type:</strong> {room.bedType}
            </p>
            <p>
              <strong>Bathroom:</strong> {room.bathroom}
            </p>
            <p>
              <strong>View:</strong> {room.view}
            </p>
            <p>
              <strong>Rating:</strong> ⭐ {room.rating}
            </p>
          </div>

          {/* Amenities */}
          <div>
            <h4 className="font-semibold mt-4">Amenities:</h4>
            <ul className="list-disc list-inside">
              {room.amenities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Reviews */}
        <div>
          <h1 className="font-bold mb-2">
            Reviews ({room.reviews.length || 0})
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {room.reviews.length > 0 ? (
              reviews.map((rev,index) => (
                <div key={index} className="container mb-4 flex flex-col w-full max-w-lg p-2 mx-auto divide-y rounded-md bg-accent-content">
                  <div className="flex justify-between p-2">
                    <div className="flex space-x-4">
                      <div>
                        {/* <img
                          src="https://source.unsplash.com/100x100/?portrait"
                          alt=""
                          className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                        /> */}
                      </div>
                      <div>
                        <h4 className="font-bold">{rev.user}</h4>
                       
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 text-secondary-content">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-5 h-5 fill-current"
                      >
                        <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                      </svg>
                      <span className="text-xl font-bold">{rev.rating}</span>
                    </div>
                  </div>
                  <div className="p-4 space-y-2 text-sm ">
                    <p className="text-primary-content">
                     {rev.comment}
                    </p>
                    
                  </div>
                </div>
              ))
            ) : (
              <p>There are no reviews for this room yet.</p>
            )}
          </div>
          {room.reviews.length > 3 && (
            <button className="cursor-pointer text-primary-content" onClick={handleShow}>
              {show ? "see less" : "see more"}
            </button>
          )}
        </div>

        {/* modal */}
        {/* You can open the modal using document.getElementById('ID').showModal() method */}

        <button
          className="btn w-full border-none text-white bg-secondary"
          onClick={handleBookNowButton}
        >
          Book Now
        </button>

        <dialog id="my_modal_3" className="modal">
          <div className="modal-box bg-accent-content text-primary">
            <h1 className="text-2xl font-bold text-center mb-4">Book Now</h1>
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <h3 className="font-bold text-lg text-primary-content">
              {room.roomType} room
            </h3>
            <div className="grid md:grid-cols-2 gap-4 mt-4 text-sm ">
              <p>
                <strong>Price:</strong> {room.pricePerNight} / Per Night
              </p>
              <p>
                <strong>Size:</strong> {room.roomSize}
              </p>
              <p>
                <strong>Occupancy:</strong> {room.occupancy}
              </p>
              <p>
                <strong>Bed Type:</strong> {room.bedType}
              </p>
              <p>
                <strong>Bathroom:</strong> {room.bathroom}
              </p>
              <p>
                <strong>View:</strong> {room.view}
              </p>
            </div>
            <input
              onChange={(e) => setDate(e.target.value)}
              type="date"
              required
              className="input w-full border text-accent my-4"
            />
            <div className="text-center">
              {room.status === "unavailable" || update === true ? (
                <button className="btn mt-4" disabled="disabled">
                  Already Booked
                </button>
              ) : (
                <NavBerButton
                  onClick={handleConfirmButton}
                  level="Confirm"
                ></NavBerButton>
              )}
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default RoomDetails;
