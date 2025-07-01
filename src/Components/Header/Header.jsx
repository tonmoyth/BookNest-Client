import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import NavBerButton from "../SliderButton/NavBerButton";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import Swal from "sweetalert2";
import logo from "../../assets/logo.png";
import { IoReorderThreeOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { PiHouseSimpleBold } from "react-icons/pi";
import { MdOutlineOtherHouses } from "react-icons/md";
import { LuLogIn } from "react-icons/lu";
import { TfiGallery } from "react-icons/tfi";

const Header = () => {
  const { pathname } = useLocation();
  const { user, userSignOut } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const [isScrolled,setIsScrolled] = useState(false);


   useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // handleSignOut
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
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: `${err.message}`,
            });
          });
      }
    });
  };

  const links = (
    <>
      <li className="hover:text-primary">
        <NavLink
          className={({ isActive }) => isActive && "border-b-2 border-secondary"}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li className="hover:text-primary">
        <NavLink
          className={({ isActive }) => isActive && "border-b-2  border-secondary"}
          to="/rooms"
        >
          Rooms
        </NavLink>
      </li>
      <li className="hover:text-primary">
        <NavLink
          className={({ isActive }) => isActive && "border-b-2 border-secondary"}
          to="/my_bookings"
        >
          My Bookings
        </NavLink>
      </li>
      <li className="hover:text-primary">
        <NavLink
          className={({ isActive }) => isActive && "border-b-2 border-secondary"}
          to="/gallery"
        >
          Gallery
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div
        className={`navbar transition-all duration-300 px-8 z-50 text-primary fixed top-0  ${
          pathname === "/" ? "" : "bg-accent-content text-primary"
        }${isScrolled && 'bg-accent-content text-primary'}`}
      >
        <div className="navbar-start">
          <Link to='/' className="text-2xl">
            <div className="flex gap-1 items-center">
              <img src={logo} alt="" />
              <span className="text-primary">Book</span>
              <span className="text-primary font-bold">Nest</span>
            </div>
          </Link>
          <div className="absolute top-4 right-6">
            <button
              className="lg:hidden"
              onClick={() => setShow((prev) => !prev)}
            >
              {show ? (
                <RxCross2 size={30} />
              ) : (
                <IoReorderThreeOutline size={30} />
              )}
            </button>

            {/* side ber */}
            <div
              className={`${
                show
                  ? "translate-x-0"
                  : "translate-x-full"
              } fixed top-17 right-0 z-50 h-[vh40] w-60 bg-secondary p-3 space-y-2 text-primary transition-transform duration-300 ease-in-out transform`}
            >
              {user && (
                <div className="flex items-center p-2 space-x-4">
                  <img
                    referrerPolicy="no-referrer"
                    src={user?.photoURL}
                    alt=""
                    className="w-12 h-12 rounded-full dark:bg-gray-500"
                  />
                  <div>
                    <h2 className="text-md font-semibold">
                      {user?.displayName}
                    </h2>
                    <span className="flex items-center space-x-1"></span>
                  </div>
                </div>
              )}
              <div>
                <ul className="pt-2 pb-4 space-y-1 text-sm">
                  <li>
                    <NavLink
                      to="/"
                      rel="noopener noreferrer"
                      href="#"
                      className={({ isActive }) =>
                        `flex items-center p-2 space-x-3 rounded-md ${
                          isActive && "bg-primary text-accent"
                        }`
                      }
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-5 h-5 fill-current text-accent"
                      >
                        <path d="M68.983,382.642l171.35,98.928a32.082,32.082,0,0,0,32,0l171.352-98.929a32.093,32.093,0,0,0,16-27.713V157.071a32.092,32.092,0,0,0-16-27.713L272.334,30.429a32.086,32.086,0,0,0-32,0L68.983,129.358a32.09,32.09,0,0,0-16,27.713V354.929A32.09,32.09,0,0,0,68.983,382.642ZM272.333,67.38l155.351,89.691V334.449L272.333,246.642ZM256.282,274.327l157.155,88.828-157.1,90.7L99.179,363.125ZM84.983,157.071,240.333,67.38v179.2L84.983,334.39Z"></path>
                      </svg>
                      <span>Home</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/rooms"
                      rel="noopener noreferrer"
                      href="#"
                      className={({ isActive }) =>
                        `flex items-center p-2 space-x-3 rounded-md ${
                          isActive && "bg-primary text-accent"
                        }`
                      }
                    >
                      <span>
                        <MdOutlineOtherHouses size={25} />
                      </span>
                      <span>Rooms</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/my_bookings"
                      rel="noopener noreferrer"
                      href="#"
                      className={({ isActive }) =>
                        `flex items-center p-2 space-x-3 rounded-md ${
                          isActive && "bg-primary text-accent"
                        }`
                      }
                    >
                      <span>
                        <PiHouseSimpleBold size={25} />
                      </span>
                      <span>My Booking</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/gallery"
                      rel="noopener noreferrer"
                      href="#"
                      className={({ isActive }) =>
                        `flex items-center p-2 space-x-3 rounded-md ${
                          isActive && "bg-primary text-accent"
                        }`
                      }
                    >
                      <span>
                        <TfiGallery size={21}/>
                      </span>
                      <span>Gallery</span>
                    </NavLink>
                  </li>
                </ul>

                {/* about  */}
                <div className="space-y-2 my-2 ml-2">
                  <h2 className="text-sm font-semibold tracking-widest uppercase ">
                    About Us
                  </h2>
                  <div className="flex flex-col space-y-4">
                    <NavLink rel="noopener noreferrer" href="#">
                      About Hotel
                    </NavLink>
                    <NavLink rel="noopener noreferrer" href="#">
                      Rooms & Suites
                    </NavLink>
                    <NavLink rel="noopener noreferrer" href="#">
                      Reservations
                    </NavLink>
                    <NavLink rel="noopener noreferrer" href="#">
                      Latest Blog
                    </NavLink>
                  </div>
                </div>
                <ul className="pt-4 pb-2 space-y-1 text-sm">
                  {user ? (
                    <li onClick={handleSignOutButton}>
                      <a
                        rel="noopener noreferrer"
                        href="#"
                        className="flex items-center p-2 space-x-3 rounded-md"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="w-5 h-5 fill-current "
                        >
                          <path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"></path>
                          <rect width="32" height="64" x="256" y="232"></rect>
                        </svg>
                        <span>Sign Out</span>
                      </a>
                    </li>
                  ) : (
                    <li>
                      <Link
                        to="/signin"
                        rel="noopener noreferrer"
                        href="#"
                        className="flex items-center p-2 space-x-3 rounded-md"
                      >
                        <span>
                          <LuLogIn size={22} />
                        </span>
                        <span>Sign In</span>
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul
            className={`menu menu-horizontal px-1 text-accent ${
              pathname === "/" ? "text-primary-content" : "text-primary-content"
            }`}
          >
            {links}
          </ul>
        </div>
        <div className="navbar-end space-x-4 hidden lg:flex">
          {user ? (
            <>
              <div className="avatar">
                <div className="ring-primary ring-offset-base-100 w-10 rounded-full hover:ring-1 hover:ring-offset-1 hover:ring-white-400 transition-all ease-out duration-300">
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
