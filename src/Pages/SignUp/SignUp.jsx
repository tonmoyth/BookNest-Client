import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import { auth } from "../../Firebase/firebase.cofig";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import NavBerButton from "../../Components/SliderButton/NavBerButton";
import { Helmet } from "react-helmet-async";


const SignUp = () => {
  const [passShow, setPassShow] = useState(false);
  const { userCreateEmailAndPass, setUser, userSignUpGoogle } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);

  // handle form
  const handleSignUpForm = (e) => {
    setLoader(true);
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newUser = Object.fromEntries(formData.entries());
    const updateDoc = { displayName: newUser.name, photoURL: newUser.photo };

    if (!/[A-Z]/.test(newUser.password)) {
      setLoader(false);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Must have an Uppercase letter in the password",
      });

      return;
    } else if (!/[a-z]/.test(newUser.password)) {
      setLoader(false);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Must have a Lowercase letter in the password",
      });

      return;
    } else if (newUser.password.length < 6) {
      setLoader(false);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Length must be at least 6 characters",
      });

      return;
    } else {
      userCreateEmailAndPass(newUser.email, newUser.password)
        .then((result) => {
          const updated = { ...result, ...updateDoc };
          updateProfile(auth.currentUser, updateDoc)
            .then(() => {
              setUser(updated);
              setLoader(false);
              navigate("/");
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Sign Up successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            })
            .catch((err) => {
              setLoader(false);
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `${err.message}`,
              });
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
  };

  // handle google button
  const handleGoogleButton = () => {
    userSignUpGoogle()
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${err.message}`,
        });
      });
  };

  return (
    <div className="min-h-screen pt-18 bg-accent flex justify-center items-center">
      <div
        
        className=" my-10 max-w-md p-8 space-y-3 rounded-xl text-primary w-11/12 mx-auto bg-accent-content"
      >
        <h1 className="text-2xl font-bold text-center">Sign Up</h1>
        <form onSubmit={handleSignUpForm} className="space-y-6">
          {/* name input */}
          <div className="space-y-1 text-sm">
            <label htmlFor="name" className="block ">
              Enter Your Name
            </label>
            <input
              type="text"
              name="name"
              required
              id="name"
              placeholder="Name"
              className="w-full px-4 py-3 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>
          {/* email input */}
          <div className="space-y-1 text-sm">
            <label htmlFor="name" className="block ">
              Enter Your Email
            </label>
            <input
              type="text"
              name="email"
              required
              id="email"
              placeholder="Email"
              className="w-full px-4 py-3 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>
          {/* photo url */}
          <div className="space-y-1 text-sm">
            <label htmlFor="name" className="block ">
              Photo URL
            </label>
            <input
              type="text"
              name="photo"
              required
              id="photo"
              placeholder="Photo"
              className="w-full px-4 py-3 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>
          {/* password */}
          <div className="space-y-1 text-sm relative">
            <label htmlFor="password" className="block ">
              Password
            </label>
            <input
              type={passShow ? "text" : "password"}
              name="password"
              required
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
            <p
              onClick={() => setPassShow((prev) => !prev)}
              className="absolute text-accent top-9 right-4"
            >
              {passShow ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </p>
          </div>
          <div className="w-full flex justify-center">
            <NavBerButton
              level={
                loader ? (
                  <span className="loading loading-spinner loading-md"></span>
                ) : (
                  "Sign Up"
                )
              }
            ></NavBerButton>
          </div>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <Helmet>
            <title>Sign Up</title>
          </Helmet>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
          <p className="px-3 text-sm ">Login with social accounts</p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
        </div>
        <div className="flex justify-center space-x-4">
          <button
            onClick={handleGoogleButton}
            className="btn bg-white text-black border-[#e5e5e5]"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
        </div>
        <p className="text-xs text-center sm:px-6 ">
          Don't have an account?
          <Link
            to="/signin"
            rel="noopener noreferrer"
            href="#"
            className="underline text-primary"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
