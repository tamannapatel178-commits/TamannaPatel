import React from "react";
import { Link } from "react-router-dom";
import { FaSpa, FaHome, FaList, FaCalendarAlt, FaPhone } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo"><FaSpa /> SpaBooking</h2>
      <ul>
        <li><Link to="/"><FaHome /> Home</Link></li>
        <li><Link to="/services"><FaList /> Services</Link></li>
        <li><Link to="/booking"><FaCalendarAlt /> Booking</Link></li>
        <li><Link to="/contact"><FaPhone /> Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
