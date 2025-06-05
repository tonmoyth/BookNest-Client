import React from "react";
import { Link, NavLink } from "react-router";
import NavBerButton from "../SliderButton/NavBerButton";

const Header = () => {
  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) => isActive && "border-b-2 border-primary"}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
        className={({ isActive }) => isActive && "border-b-2 border-primary"}
        to="/rooms">Rooms</NavLink>
      </li>
      <li>
        <NavLink
        className={({ isActive }) => isActive && "border-b-2 border-primary"}
        to="/my_rooms">My Rooms</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar px-8 z-10 text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link className="text-2xl">
            Book<span className="text-primary font-bold">Nest</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <Link>
            <NavBerButton level={`Sign In`}></NavBerButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
