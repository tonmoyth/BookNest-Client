import React, { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";
import StarRatings from "react-star-ratings";
import NavBerButton from "../../Components/SliderButton/NavBerButton";
import moment from "moment/moment";
import AxiosInterceptor from "../../Hooks/AxiosInterceptor/AxiosInterceptor";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Helmet } from "react-helmet-async";

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const [bookedData, setBookedData] = useState([]);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const ref = useRef();
  const [date, setDate] = useState("");
  const [dateErr, setDateErr] = useState(false);
  const instance = AxiosInterceptor();
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    instance(`/booking?email=${user?.email}`)
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
  }, [user, instance]);

  // cancel button
  const handleCancelButton = (_id, id, date) => {
    const bookingDate = moment(date);
    const cancelDeadline = bookingDate.clone().subtract(2, "day");
    const today = moment().startOf("day");

    if (today.isSameOrBefore(cancelDeadline)) {
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
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Cancellation Period Expired",
      });
    }
  };

  // handle review
  const handleReviewForm = (roomId) => {

    setLoader(true);
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
          setLoader(false);
          const modalOff = document.getElementById(`my_modal_${roomId}`);
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
    setLoader(true);
    if (date === "") {
      setLoader(false);
      return setDateErr(true);
    } else {
      axios
        .patch(`${import.meta.env.VITE_SERVER_URL}/dateUpdate`, {
          date,
          bookedId,
        })
        .then((res) => {
          if (res.data.acknowledged) {
            setLoader(false);
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
          setLoader(false);
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
    <div className="min-h-[calc(100vh-65px)] bg-accent text-primary">
      <Helmet>
        <title>My booking</title>
      </Helmet>

      <div className="overflow-x-auto w-11/12 mx-auto py-6">
        <table className="table ">
          {/* head */}
          <thead className="text-primary-content">
            <tr>
              <th>NO</th>
              <th>Name</th>
              <th>Price Per Night</th>
              <th>Date</th>
              <th>Room Size</th>
              <th>Bed Type</th>
              <th>View</th>
              <th>Action</th>
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
                <td>
                  <div  className="dropdown relative">
                    <div
                      tabIndex={0}
                      role="button"
                      className=" m-1 cursor-pointer"
                    >
                      <BsThreeDotsVertical className="bg-accent" size={25} />
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content absolute top-0 right-0 menu bg-accent-content text-primary rounded-box z-10 w-52 p-2 shadow-sm"
                    >
                      <li className="hover:bg-secondary">
                        {/* cancel button */}
                        <button
                          onClick={() =>
                            handleCancelButton(data?._id, data?.id, data?.date)
                          }
                          className="hover:text-primary"
                        >
                          Cancel
                        </button>
                      </li>
                      <li className="hover:bg-secondary">
                        {/* review modal */}

                        {/* You can open the modal using document.getElementById('ID').showModal() method */}
                        <button
                          onClick={() =>
                            document.getElementById(`my_modal_${data?.id}`).showModal()
                          }
                        >
                          Review
                        </button>
                      </li>

                      <li className="hover:bg-secondary">
                        {/* Update date modal */}
                        {/* You can open the modal using document.getElementById('ID').showModal() method */}
                        <button
                          onClick={() =>
                            document
                              .getElementById(`my_modal_${data._id}`)
                              .showModal()
                          }
                        >
                          Update Date
                        </button>
                      </li>
                    </ul>
                    {/* reviews modal */}
                    <dialog id={`my_modal_${data?.id}`} className="modal ">
                      <div className="modal-box bg-accent-content text-primary">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <h3 className="font-bold text-lg text-center">
                          Review
                        </h3>
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
                              className="input text-accent input-bordered w-full"
                            />
                          </div>

                          {/* Rating */}
                          <div className="mb-3">
                            <label className="label">Rating (1 to 5)</label>
                            <br />
                            <StarRatings
                              rating={rating}
                              starRatedColor="#53624f"
                              changeRating={(newRating) => setRating(newRating)}
                              numberOfStars={5}
                              starDimension="30px"
                              starSpacing="5px"
                              name="rating"
                            />
                          </div>

                          {/* Comment */}
                          <div className="mb-3">
                            <textarea
                              className="textarea text-accent textarea-bordered w-full"
                              rows={3}
                              name="comment"
                              required
                              placeholder="Write your review..."
                              value={comment}
                              onChange={(e) => setComment(e.target.value)}
                            ></textarea>
                          </div>
                          <div className="w-full flex justify-center">
                            <NavBerButton
                              level={
                                loader ? (
                                  <span className="loading loading-spinner loading-md"></span>
                                ) : (
                                  "Review"
                                )
                              }
                            ></NavBerButton>
                          </div>
                        </form>
                      </div>
                    </dialog>

                    {/* update modal */}
                    <dialog id={`my_modal_${data._id}`} className="modal">
                      <div className="modal-box bg-accent-content">
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
                          className="input text-accent w-full border"
                        />
                        <p className="text-red-500 font-bold mt-2">
                          {dateErr && "Please select date"}
                        </p>
                        <div className="flex justify-center mt-6">
                          <NavBerButton
                            onClick={() => handleUpdateDate(data._id)}
                            level={
                              loader ? (
                                <span className="loading loading-spinner loading-md"></span>
                              ) : (
                                "Update Date"
                              )
                            }
                          ></NavBerButton>
                        </div>
                      </div>
                    </dialog>
                  </div>
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
