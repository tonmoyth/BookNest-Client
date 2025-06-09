import React, { useContext } from "react";
import { Link, NavLink, useLocation } from "react-router";
import NavBerButton from "../SliderButton/NavBerButton";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import Swal from "sweetalert2";

const Header = () => {
  const { pathname } = useLocation();
  const { user, userSignOut } = useContext(AuthContext);

  const handleSignOutButton = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Sign Out it!",
    }).then((result) => {
      if (result.isConfirmed) {
        userSignOut()
          .then(() => {
            Swal.fire({
              title: "Sign Out",
              text: "Sign Out successfully",
              icon: "success",
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

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
          to="/rooms"
        >
          Rooms
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => isActive && "border-b-2 border-primary"}
          to="/my_bookings"
        >
          My Bookings
        </NavLink>
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
              className={`${
                pathname === "/" && "text-white"
              }menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 `}
            >
              {links}
            </ul>
          </div>
          <Link className="text-2xl">
            <span className="text-accent">Book</span><span className="text-primary font-bold">Nest</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul
            className={`menu menu-horizontal px-1 text-accent ${
              pathname === "/" && "text-white"
            }`}
          >
            {links}
          </ul>
        </div>
        <div className="navbar-end space-x-4">
          {user ? (
            <>
              <div className="avatar">
                <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
                  <img referrerPolicy="no-referrer" src={user?.photoURL} />
                </div>
              </div>
              <NavBerButton
                onClick={handleSignOutButton}
                level="Sign Out"
              ></NavBerButton>
            </>
          ) : (
            <>
              <Link to={`${pathname === "/signin" ? "/signup" : "/signin"}`}>
                <NavBerButton
                  level={`${pathname == "/signin" ? "Sign Up" : "Sign In"}`}
                ></NavBerButton>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
