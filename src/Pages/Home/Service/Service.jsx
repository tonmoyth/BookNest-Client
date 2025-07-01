import React from "react";
import { FaPhoneAlt, FaPlane, FaWifi, FaDumbbell, FaBed } from "react-icons/fa";


const Service = () => {
  return (
    <section className="bg-accent text-primary p-6 py-10 lg:py-12 lg:p-0  ">
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-10 lg:w-11/12 mx-auto items-start">
        {/* Left Side */}
        <div
          
        >
          <p className="text-primary tracking-widest mb-2">➜ SERVICE</p>
          <h2 className="text-2xl text-primary md:text-4xl font-bold leading-tight mb-6">
            Enhancing Your’s <br />
            Stay With Exclusive <br />
            Services
          </h2>
          <div className="flex items-center gap-4  mt-6">
            <div className="bg-secondary text-black  rounded-full p-3">
              <FaPhoneAlt />
            </div>
            <div>
              <p className="text-primary text-sm">For More Information</p>
              <p className="text-xl text-primary font-semibold">
                +880 1407641417
              </p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 overflow-hidden">
          {/* Transportations */}
          <div
            className="bg-accent-content p-6 rounded-md shadow transition duration-300 transform hover:scale-105 group hover:shadow-xl "
          >
            <div className="text-primary text-3xl mb-4">{<FaPlane />}</div>
            <h3 className="text-xl font-semibold mb-2">Transportations</h3>
            <p className="text-primary-content text-sm">
              Reliable airport and local transport services at your convenience
            </p>
          </div>

          {/* Wi-Fi and Internet */}
          <div
            className="bg-accent-content p-6 rounded-md shadow transition duration-300 transform hover:scale-105 group hover:shadow-xl"
          >
            <div className="text-primary text-3xl mb-4">{<FaWifi />}</div>
            <h3 className="text-xl font-semibold mb-2">Wi-Fi and Internet</h3>
            <p className="text-primary-content text-sm">
              Fast and secure internet access throughout your stay.
            </p>
          </div>

          {/* Gym Facilities */}

          <div
           
            className="bg-accent-content p-6 rounded-md shadow transition duration-300 transform hover:scale-105 group hover:shadow-xl"
          >
            <div className="text-primary text-3xl mb-4">{<FaDumbbell />}</div>
            <h3 className="text-xl font-semibold mb-2">Gym Facilities</h3>
            <p className="text-primary-content text-sm">
              Modern gym equipment for your fitness routine.
            </p>
          </div>

          {/* Room Services */}
          <div
            
            className="bg-accent-content p-6 rounded-md shadow transition duration-300 transform hover:scale-105 group hover:shadow-xl"
          >
            <div className="text-primary text-3xl mb-4">{<FaBed />}</div>
            <h3 className="text-xl font-semibold mb-2">Room Services</h3>
            <p className="text-primary-content text-sm">
              Comfort delivered to your room.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
