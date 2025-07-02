import React from "react";
import { Link, useLocation } from "react-router";
import { FaFacebook, FaLinkedinIn, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import logo from '../../assets/logo.png'
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  const {pathname} = useLocation()
  return (
    <footer className={`footer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:footer-horizontal ${pathname === '/' ? 'bg-accent' : 'bg-accent-content'} bg-accent text-white  p-6`}>
      <aside>
        <div>
          <Link to='/' className="text-2xl md:text-3xl flex items-center gap-1">
            <img src={logo} alt="" />
            Book <span className="text-primary font-bold">Nest</span>
          </Link>
        </div>
        <p className="text-primary-content">
          Conveniently fashion market positioning readiness before sticky
          communities. Assertively matrix multif sources through team building.
        </p>
        <br />
        
      </aside>
      <nav>
        <h6 className="footer-title">Contact</h6>
        <p className="flex gap-2"><FaPhoneAlt size={18}/>+880 1407641417</p>
        <p className="flex gap-2"><MdOutlineEmail size={20}/>tonmoynht1930@gmail.com</p>
      </nav>
     
      <nav>
        <h6 className="footer-title">Follow Us On </h6>
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
