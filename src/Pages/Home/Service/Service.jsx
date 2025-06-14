import React from "react";
import { FaPhoneAlt, FaPlane, FaWifi, FaDumbbell, FaBed } from "react-icons/fa";
import { motion } from "motion/react";

const Service = () => {
  return (
    <section className="bg-accent text-primary  px-4 md:px-20">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Left Side */}
        <motion.div
          initial={{ x: -80 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.0 }}
        >
          <p className="text-primary tracking-widest mb-2">➜ SERVICE</p>
          <h2 className="text-4xl text-primary md:text-5xl font-bold leading-tight mb-6">
            Enhancing Your’s <br />
            Stay With Exclusive <br />
            Services
          </h2>
          <div className="flex items-center gap-4 mt-6">
            <div className="bg-secondary text-black rounded-full p-3">
              <FaPhoneAlt />
            </div>
            <div>
              <p className="text-primary text-sm">For More Information</p>
              <p className="text-xl text-primary font-semibold">
                +880 1407641417
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 overflow-hidden">
          {/* Transportations */}
          <motion.div
            initial={{ x: 80 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.0 }}
            className="bg-accent-content p-6 rounded-md shadow transition duration-300 transform hover:scale-105 group hover:shadow-xl "
          >
            <div className="text-primary text-3xl mb-4">{<FaPlane />}</div>
            <h3 className="text-xl font-semibold mb-2">Transportations</h3>
            <p className="text-primary-content text-sm">
              Reliable airport and local transport services at your convenience
            </p>
          </motion.div>

          {/* Wi-Fi and Internet */}
          <motion.div
            initial={{ x: 80 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.0 }}
            className="bg-accent-content p-6 rounded-md shadow transition duration-300 transform hover:scale-105 group hover:shadow-xl"
          >
            <div className="text-primary text-3xl mb-4">{<FaWifi />}</div>
            <h3 className="text-xl font-semibold mb-2">Wi-Fi and Internet</h3>
            <p className="text-primary-content text-sm">
              Fast and secure internet access throughout your stay.
            </p>
          </motion.div>

          {/* Gym Facilities */}

          <motion.div
            initial={{ x: 80 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.0 }}
            className="bg-accent-content p-6 rounded-md shadow transition duration-300 transform hover:scale-105 group hover:shadow-xl"
          >
            <div className="text-primary text-3xl mb-4">{<FaDumbbell />}</div>
            <h3 className="text-xl font-semibold mb-2">Gym Facilities</h3>
            <p className="text-primary-content text-sm">
              Modern gym equipment for your fitness routine.
            </p>
          </motion.div>

          {/* Room Services */}
          <motion.div
            initial={{ x: 80 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.0 }}
            className="bg-accent-content p-6 rounded-md shadow transition duration-300 transform hover:scale-105 group hover:shadow-xl"
          >
            <div className="text-primary text-3xl mb-4">{<FaBed />}</div>
            <h3 className="text-xl font-semibold mb-2">Room Services</h3>
            <p className="text-primary-content text-sm">
              Comfort delivered to your room.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Service;
