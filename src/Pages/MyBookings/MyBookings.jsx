import React, { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";
import { ImCancelCircle } from "react-icons/im";
import StarRatings from "react-star-ratings";
import NavBerButton from "../../Components/SliderButton/NavBerButton";

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const [bookedData, setBookedData] = useState([]);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const ref = useRef();
  const [date, setDate] = useState("");
  const [dateErr, setDateErr] = useState(false);

  useEffect(() => {
    axios(`${import.meta.env.VITE_SERVER_URL}/booking?email=${user?.email}`)
      .then((res) => {
        setBookedData(res.data);
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${err.message}`,
        });
      });
  }, [user]);

  const handleCancelButton = (_id, id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${import.meta.env.VITE_SERVER_URL}/bookingDelete`, {
            data: {
              bookedId: _id,
              roomId: id,
            },
          })
          .then((res) => {
            if (res.data.acknowledged) {
              const selectBooked = bookedData.filter(
                (booked) => booked._id !== _id
              );
              setBookedData(selectBooked);
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
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
      }
    });
  };

  const handleReviewForm = (roomId) => {
    const timestamp = new Date().toISOString();
    const name = ref.current.value;
    const ratingNumber = rating;
    const reviewComment = comment;

    axios
      .patch(`${import.meta.env.VITE_SERVER_URL}/reviews`, {
        timestamp,
        name,
        ratingNumber,
        reviewComment,
        roomId,
      })
      .then((res) => {
        if (res.data.acknowledged) {
          const modalOff = document.getElementById("my_modal_3");
          modalOff.close();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Review Send Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => {
        const modalOff = document.getElementById("my_modal_3");
        modalOff.close();
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${err.message}`,
        });
      });
  };

  // handle Update date
  const handleUpdateDate = (bookedId) => {
    if (date === "") {
      return setDateErr(true);
    } else {
      axios
        .patch(`${import.meta.env.VITE_SERVER_URL}/dateUpdate`, {
          date,
          bookedId,
        })
        .then((res) => {
          if (res.data.acknowledged) {
            const modalOff = document.getElementById(`my_modal_${bookedId}`);
            modalOff.close();
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Date Update Successfully",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
        .catch((err) => {
          const modalOff = document.getElementById(`my_modal_${bookedId}`);
          modalOff.close();
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `${err.message}`,
          });
        });
    }
  };
  return (
    <div>
      <h1 className="text-accent text-4xl text-center">My All Booking </h1>

      <div className="overflow-x-auto w-11/12 mx-auto my-6">
        <table className="table text-accent">
          {/* head */}
          <thead>
            <tr>
              <th>NO</th>
              <th>Room</th>
              <th>Price Per Night</th>
              <th>Date</th>
              <th>Room Size</th>
              <th>Bed Type</th>
              <th>View</th>
              <th>Cancel</th>
              <th>Review</th>
              <th>Update date</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {bookedData.map((data, index) => (
              <tr key={data._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={data?.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{data?.roomType} Room</div>
                    </div>
                  </div>
                </td>
                <td>{data?.pricePerNight}</td>
                <td>{data?.date}</td>
                <td>{data?.roomSize}</td>
                <td>{data?.bedType}</td>
                <td>{data?.view}</td>
                <th>
                  {/* cancel button */}
                  <button
                    onClick={() => handleCancelButton(data?._id, data?.id)}
                    className="hover:text-primary"
                  >
                    <ImCancelCircle size={20} />
                  </button>
                </th>

                <td>
                  {/* review modal */}

                  {/* You can open the modal using document.getElementById('ID').showModal() method */}
                  <button
                    className="btn"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Review
                  </button>
                  <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                      <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                          ✕
                        </button>
                      </form>
                      <h3 className="font-bold text-lg text-center">Review</h3>
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          handleReviewForm(data?.id);
                        }}
                      >
                        {/* Username */}
                        <div className="mb-3">
                          <label className="label">Username</label>
                          <input
                            ref={ref}
                            type="text"
                            name="username"
                            value={user?.displayName}
                            readOnly
                            className="input input-bordered w-full"
                          />
                        </div>

                        {/* Rating */}
                        <div className="mb-3">
                          <label className="label">Rating (1 to 5)</label>
                          <br />
                          <StarRatings
                            rating={rating}
                            starRatedColor="#facc15"
                            changeRating={(newRating) => setRating(newRating)}
                            numberOfStars={5}
                            starDimension="30px"
                            starSpacing="5px"
                            name="rating"
                          />
                        </div>

                        {/* Comment */}
                        <div className="mb-3">
                          <label className="label">Comment</label>
                          <textarea
                            className="textarea textarea-bordered w-full"
                            rows={3}
                            name="comment"
                            placeholder="Write your review..."
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                          ></textarea>
                        </div>

                        <input
                          className="btn w-full bg-primary text-white"
                          type="submit"
                          value="Submit Review"
                        />
                      </form>
                    </div>
                  </dialog>
                </td>
                <td>
                  {/* Update date modal */}
                  {/* You can open the modal using document.getElementById('ID').showModal() method */}
                  <button
                    className="btn"
                    onClick={() =>
                      document.getElementById(`my_modal_${data._id}`).showModal()
                    }
                  >
                    Update Date
                  </button>
                  <dialog id={`my_modal_${data._id}`} className="modal">
                    <div className="modal-box">
                      <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                          ✕
                        </button>
                      </form>
                      <h3 className="font-bold text-lg text-center mb-6">
                        Update Date
                      </h3>
                      <input
                        onChange={(e) => setDate(e.target.value)}
                        type="date"
                        required
                        className="input w-full border"
                      />
                      <p className="text-red-500 font-bold mt-2">
                        {dateErr && "Please select date"}
                      </p>
                      <div className="flex justify-center mt-6">
                        <NavBerButton
                          onClick={() => handleUpdateDate(data._id)}
                          level="Update Date"
                        ></NavBerButton>
                      </div>
                    </div>
                  </dialog>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBookings;
