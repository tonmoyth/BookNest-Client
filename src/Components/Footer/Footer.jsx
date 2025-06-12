import React from "react";
import { Link } from "react-router";
import { FaFacebook, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <footer className="footer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 sm:footer-horizontal bg-accent text-white  p-10">
      <aside>
        <div>
          <h1 className="text-2xl md:text-3xl flex items-center gap-1">
            <img src={logo} alt="" />
            Book <span className="text-primary font-bold">Nest</span>
          </h1>
        </div>
        <p className="text-primary-content">
          Conveniently fashion market positioning readiness before sticky
          communities. Assertively matrix multif sources through team building.
        </p>
        <br />
        
      </aside>
      <nav>
        <h6 className="footer-title">About Us</h6>
        <Link className="link link-hover">About Hotel</Link>
        <Link className="link link-hover">Rooms & Suites</Link>
        <Link className="link link-hover">Reservations</Link>
        <Link className="link link-hover">Latest Blog</Link>
      </nav>
      <nav>
        <h6 className="footer-title">Usefull Links</h6>
        <Link className="link link-hover">Booking</Link>
        <Link className="link link-hover">Testimonials</Link>
        <Link className="link link-hover">Privecy Policy</Link>
        <Link className="link link-hover">FAQ's</Link>
      </nav>
      <nav>
        <h6 className="footer-title">Follow Us On :</h6>
        <nav className="flex gap-4">
          <Link
            to="https://www.facebook.com/nurislamhasantonmoyth"
            target="_blank"
            className="link link-hover"
          >
            <FaFacebook size={20} />
          </Link>
          <Link
            to="https://www.linkedin.com/in/nurislam-hasan-tonmoy-88b1bb368/"
            target="_blank"
            className="link link-hover"
          >
            <FaLinkedinIn size={20} />
          </Link>
          <Link
            to="https://x.com/hasan_tonm58653"
            target="_blank"
            className="link link-hover"
          >
            <FaTwitter size={20} />
          </Link>
        </nav>
        
      </nav>
    </footer>
  );
};

export default Footer;
