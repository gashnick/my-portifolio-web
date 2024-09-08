import React from "react";
import "./footer.css";
import image from "../../assets/image.jpg";

export default function Footer() {
  return (
    <footer className="footer bg-pink-50">
      <div className="footer-info">
        <div className="footer-img footer-box">
          <img src={image} alt="profile" />
          <div className="img-desc">
            <span>Robert Smirth</span>
            <p>Web Developer</p>
          </div>
        </div>
        <div className="footer-contact footer-box">
          <h3 className="text-3xl font-bold">Contact info</h3>
          <div className="footer-email">
            <h3>Email</h3>
            <span>email@gmail.com</span>
          </div>
          <div className="footer-phone">
            <h3>Phone</h3>
            <span>+250888746736</span>
          </div>
          <div className="footer-location">
            <h3>Location</h3>
            <span>254 St Rwanda </span>
          </div>
        </div>
        <div className="footer-p footer-box">
          <h3>Let's Talk</h3>
          <span>
            I am always open to discuss your project, <br /> improve your online
            presence or help with <br /> your UX/UI design challenges.
          </span>
          <a
            href="#"
            className="mt-8 inline-block rounded bg-red-500 px-4 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
          >
            Contact me
          </a>
        </div>
      </div>
      <div className="footer-links">
        <div className="pages">
          <ul>
            <li>About</li>
            <li>Work</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>&copy; All Right Reserved. Prepared by me</div>
      </div>
    </footer>
  );
}
