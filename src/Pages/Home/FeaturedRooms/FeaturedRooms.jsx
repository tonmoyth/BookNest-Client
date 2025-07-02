import axios from "axios";
import { useEffect, useState } from "react";
import FeaturedRoomCard from "./FeaturedRoomCard";


const FeaturedRooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    axios(`${import.meta.env.VITE_SERVER_URL}/top_rated_rooms`).then((res) => {
      setRooms(res.data);
    });
  }, []);

  return (
    <div className="py-10 lg:py-12 bg-accent">
      <h1
      data-aos="fade-up"
        className="text-2xl lg:text-4xl mb-6 font-bold text-center text-primary"
      >
        Sleep in Comfort Choose From <br /> Our Rooms & Suites
      </h1>
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {rooms.map((room) => (
          <FeaturedRoomCard key={room._id} room={room}></FeaturedRoomCard>
        ))}
      </div>
    </div>
  );
};

export default FeaturedRooms;
