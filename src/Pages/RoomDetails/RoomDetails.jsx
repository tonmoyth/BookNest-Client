import {  useLoaderData, useLocation, useNavigate } from "react-router";
import NavBerButton from "../../Components/SliderButton/NavBerButton";
import Swal from "sweetalert2";
import axios from "axios";
import { useContext,  useEffect,  useState } from "react";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import Rooms from "../Rooms/Rooms";

const RoomDetails = () => {
  const { data: room } = useLoaderData();
  const [update, setUpdate] = useState(false);
  const { user } = useContext(AuthContext);
  const [date, setDate] = useState("");
  const navigate = useNavigate()
  const { pathname } = useLocation();
  const [show,setShow] = useState(false);
  const [reviews,setReviews] = useState([]);


  useEffect(()=> {
    setReviews(room.reviews.slice(0,3))
  },[room])

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
      return navigate('/signin', {state:  pathname})
    }
    document.getElementById("my_modal_3").showModal();
  };

  // handle show more 
  const handleShow = () => {
    setShow((prev) => !prev);
    if(!show){
      setReviews(room.reviews)
      
    }else{
      const selectReviews = room.reviews.slice(0,3);
      setReviews(selectReviews)
    }
  }
  return (
    <div className="bg-accent text-primary">
      <div className="max-w-5xl mx-auto p-4 space-y-6">
      {/* Room Image */}
      <img
        src={room.image}
        alt={room.roomType}
        className="w-full h-[300px] md:h-[400px] object-cover rounded-xl"
      />

      {/* Room Info */}
      <div className="space-y-2">
        <h2 className="text-3xl font-bold">{room.roomType} Room</h2>
        <p >{room.description}</p>
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
        <h1 className="font-bold mb-2">Reviews ({room.reviews.length || 0})</h1>
        <div>
          {room.reviews.length > 0 ? (
            reviews.map((rev) => (
              <div className="mb-4 bg-secondary p-4 rounded-xl">
                <p>
                  <strong>User : </strong>
                  {rev.user}
                </p>
                <p>
                  <strong>Rating: </strong>⭐ ({rev.rating})
                </p>
                <p>
                  <strong>Comment: </strong>
                  {rev.comment}
                </p>
                <p>
                  <strong> {rev.timestamp && "time stamp:"} </strong>
                  {rev.timestamp && rev.timestamp}
                </p>
              </div>
            ))
          ) : (
            <p>There are no reviews for this room yet.</p>
          )}
        </div>
        {
          room.reviews.length > 0 && <button className="cursor-pointer" onClick={handleShow}>{show ? 'see less' : 'see more'}</button>
        }
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
          <h3 className="font-bold text-lg text-primary-content">{room.roomType} room</h3>
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
