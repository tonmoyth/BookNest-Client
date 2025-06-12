import { useLoaderData } from "react-router";
import RoomCard from "./RoomCard";
import { useEffect, useState } from "react";
import NavBerButton from "../../Components/SliderButton/NavBerButton";

const Rooms = () => {
  const { data } = useLoaderData();
  const [rooms, setRooms] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxprice] = useState(10000);

  useEffect(() => {
    setRooms(data);
  }, [data]);

  // handleRangeForm
  const handlePriceRangeForm = (e) => {
    e.preventDefault();
    const priceRangeRooms = data.filter(
      (room) => room.pricePerNight >= minPrice && room.pricePerNight <= maxPrice
    );
    setRooms(priceRangeRooms);
  };

  return (
    <div className="min-h-[calc(100vh-65px)] bg-accent py-6">
      

      {/* range form */}
      <div>
        <div className="w-full mx-auto max-w-md p-8 space-y-3 rounded-xl bg-accent-content">
          <h1 className="text-3xl font-semibold text-center text-primary">Price range</h1>
          <form onSubmit={handlePriceRangeForm} className="space-y-6">
            <div className="space-y-1 text-sm">
              <input
                type="number"
                name="min"
                onChange={(e) => setMinPrice(e.target.value)}
                id="min"
                placeholder="Min Price"
                className="w-full border px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
            <div className="space-y-1 text-sm">
              <input
                type="number"
                name="max"
                onChange={(e) => setMaxprice(e.target.value)}
                id="max"
                placeholder="Max Price"
                className="w-full border px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
            <button className="w-full">
              <NavBerButton level='Apply Now'></NavBerButton>
            </button>
            
          </form>
        </div>
      </div>
      <h1 className="text-4xl text-accent text-center font-bold">All rooms</h1>
      <div className="w-10/12 mx-auto space-y-10 my-6">
        {rooms.map((room) => (
          <RoomCard key={room._id} room={room}></RoomCard>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
