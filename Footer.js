import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      {/* Social Media Section */}
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook /></a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
        <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
      </div>

      {/* Quick Links */}
      <div className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/booking">Booking</Link>
        <Link to="/contact">Contact</Link>
      </div>

      {/* Copyright */}
      <p>© 2025 SpaBooking. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
