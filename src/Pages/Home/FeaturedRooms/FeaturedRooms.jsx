import axios from "axios";
import { useEffect, useState } from "react";
import FeaturedRoomCard from "./FeaturedRoomCard";
import { motion } from "motion/react"

const FeaturedRooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    axios(`${import.meta.env.VITE_SERVER_URL}/top_rated_rooms`).then((res) => {
      setRooms(res.data);
    });
  }, []);

  return (
    <div className="py-6 bg-accent">
      <motion.h1
        initial={{ y: 80 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.0 }}
        className="text-2xl lg:text-4xl font-bold text-center text-primary"
      >
        Sleep in Comfort Choose From <br /> Our Rooms & Suites
      </motion.h1>
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rooms.map((room) => (
          <FeaturedRoomCard key={room._id} room={room}></FeaturedRoomCard>
        ))}
      </div>
    </div>
  );
};

export default FeaturedRooms;
