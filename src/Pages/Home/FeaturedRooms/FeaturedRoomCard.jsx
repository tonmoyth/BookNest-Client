import React from 'react';
import NavBerButton from '../../../Components/SliderButton/NavBerButton';
import { Link } from 'react-router';

const FeaturedRoomCard = ({room}) => {
    const {_id,image,roomType,rating,description} = room
    return (
        <div className="card bg-base-100 shadow-xl rounded-xl my-6 overflow-hidden">
      <figure className="relative">
        <img src={image} alt="Dining Spot" className="h-56 w-full object-cover hover:scale-105 overflow-hidden transition duration-300 transform" />
        
        {/* Rating badge */}
        <div className="absolute top-3 right-3 badge badge-warning text-sm font-semibold shadow">
          ★ {rating}
        </div>
      </figure>

      <div className="card-body">

        <h2 className="card-title text-lg font-bold">{roomType}</h2>

        <p className="text-sm text-gray-500">
          {description.length > 100 ? description.slice(0, 100) + '...' : description}
        </p>

        <div className="card-actions justify-start mt-3">
          <Link to={`room/${_id}`}>
            <NavBerButton level='Book Now'></NavBerButton>
          </Link>
        </div>
      </div>
    </div>
    );
};

export default FeaturedRoomCard;