import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import NavBerButton from "../../Components/SliderButton/NavBerButton";
import { Helmet } from "react-helmet-async";
 import { motion } from "motion/react"

const SignIn = () => {
  const [passShow, setPassShow] = useState(false);
  const { userSignIn, userSignUpGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const { state } = useLocation();
  const [loader, setLoader] = useState(false);

  // handle Form
  const handleSignInForm = (e) => {
    setLoader(true);
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    userSignIn(email, password)
      .then(() => {
        setLoader(false);
        navigate(state || "/");
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Sign Up successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${err.message}`,
        });
      });
  };

  // handle google button
  const handleGoogleButton = () => {
    userSignUpGoogle()
      .then(() => {
        navigate(state || "/");
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
    <div className="min-h-[calc(100vh-65px)] bg-accent flex justify-center items-center">
      <Helmet>
        <title>Sign In</title>
      </Helmet>
      <motion.div
        initial={{ y: 80 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.0 }}
        className="w-11/12 mx-auto max-w-md p-8 space-y-3 rounded-xl bg-accent-content"
      >
        <h1 className="text-2xl font-bold text-center text-primary">Sign In</h1>
        <form onSubmit={handleSignInForm} className="space-y-6">
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block text-primary">
              Enter Your Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              className="w-full px-4 py-3 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>
          <div className="space-y-1 text-sm relative">
            <label htmlFor="password" className="block text-primary">
              Password
            </label>
            <input
              type={passShow ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
            <p
              onClick={() => setPassShow((prev) => !prev)}
              className="absolute top-9 right-4"
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
                  "Sign In"
                )
              }
            ></NavBerButton>
          </div>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
          <p className="px-3 text-sm text-primary">
            Login with social accounts
          </p>
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
        <p className="text-xs text-center sm:px-6 text-primary">
          Don't have an account?
          <Link
            to="/signup"
            rel="noopener noreferrer"
            href="#"
            className="underline text-primary"
          >
            Sign up
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default SignIn;
