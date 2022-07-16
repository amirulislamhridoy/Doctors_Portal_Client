import React from "react";
import bg from "../../assets/images/footer.png";

const Footer = () => {
    const year = new Date()
  return (
    <footer
      className="px-14 pt-20"
      style={{
        backgroundImage: `url("${bg}")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className='footer text-base-content'>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Oral Heath</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">OUR ADDRESS</span>
          <a className="link link-hover">New York - 101010 Hudson</a>
        </div>
      </div>
      <p className='mt-10 mb-5 text-center'>Copyright {year.getFullYear()} All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
