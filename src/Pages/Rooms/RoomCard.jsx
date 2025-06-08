import React from "react";
import { useNavigate } from "react-router";

const RoomCard = ({ room }) => {
    const navigate = useNavigate();
  const {_id, image,roomType,description,pricePerNight,roomSize,view ,rating,reviews} = room;
  return (
    <div onClick={()=> navigate(`/room/${_id}`)} className="flex flex-col md:h-58 hover:scale-105 hover:shadow-xl overflow-hidden transition duration-300 transform md:flex-row bg-secondary rounded-xl shadow-md  mb-6">
      {/* Room Image */}
      <div className="md:w-1/2 ">
        <img src={image} alt={roomType} className="h-[200px] md:h-full  w-full object-cover" />
      </div>

      {/* Room Content */}
      <div className="p-6 md:w-1/2 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-2">{roomType} Room</h2>
          <p className="text-accent mb-3">{description}</p>

          <ul className="text-sm text-accent space-y-1 mb-4">
            <li><strong>Price:</strong> {pricePerNight} / night</li>
            <li><strong>Size:</strong> {roomSize}</li>
            <li><strong>View:</strong> {view}</li>
          </ul>

          <div className="text-primary font-medium mb-2">
            ⭐ {rating} ({reviews} reviews)
          </div>

         
        </div>

       
      </div>
    </div>
  );
};

export default RoomCard;
