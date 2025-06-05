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
    <div className="my-6 w-11/12 mx-auto">
      <h1 className="text-2xl lg:text-4xl font-bold text-center text-accent">
        Sleep in Comfort Choose From <br /> Our Rooms & Suites
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rooms.map((room) => (
          <FeaturedRoomCard key={room._id} room={room}></FeaturedRoomCard>
        ))}
      </div>
    </div>
  );
};

export default FeaturedRooms;
