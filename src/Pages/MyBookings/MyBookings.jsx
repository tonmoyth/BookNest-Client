import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";
import { ImCancelCircle } from "react-icons/im";

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const [bookedData, setBookedData] = useState([]);

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
                <th>
                  <button
                    onClick={() => handleCancelButton(data?._id, data?.id)}
                    className="hover:text-primary"
                  >
                    <ImCancelCircle size={20} />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBookings;
