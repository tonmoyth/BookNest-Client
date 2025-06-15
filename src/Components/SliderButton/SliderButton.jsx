import React from "react";
import { motion } from "motion/react";

const SliderButton = ({ level }) => {
  return (
    <div>
      <button
        href="#_"
        className="relative inline-flex cursor-pointer items-center px-12 py-2 overflow-hidden text-lg font-medium bg-secondary text-primary  border-2 border-secondary rounded-full hover:text-white group hover:bg-gray-50"
      >
        
        <span className="absolute left-0 block w-full h-0 transition-all bg-secondary opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
        <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease"></span>
        
        <span className="relative">{level}</span>
        <motion.div
          animate={{x: [0,5,0]}}
          transition={{ duration: 2 ,repeat: Infinity}}
          
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </motion.div>
      </button>
    </div>
  );
};

export default SliderButton;
