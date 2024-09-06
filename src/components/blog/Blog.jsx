import React from "react";
import blog3 from "../../assets/2looking.webp";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { MdOutlinePerson } from "react-icons/md";
import "./blog.css";

export default function Blog() {
  return (
    <section className="blog">
      <div className="blog-heading">
        <span>BLOG & NEWS</span>
        <h3>Latest From Blogs</h3>
      </div>
      <div className="blog-container">
        <div className="blog-box">
          <div className="blog-img relative">
            <img src={blog3} alt="blog" />
            <span className="absolute top-2 left-2 text-white bg-black bg-opacity-50 px-4 py-2 rounded">
              Portfolio
            </span>
          </div>
          <div className="blog-text">
            <div className="flex items-center space-x-4 mb-2">
              <span className="flex items-center mb-0">
                <MdOutlineCalendarMonth className="mr-2" />
                16 March, 2024
              </span>
              <span className="flex items-center mb-0">
                <MdOutlinePerson className="mr-2" /> Admin
              </span>
            </div>
            <a href="#" className="blog-title">
              Stop Redesgning & Start Your Tuning Your Site Instead
            </a>
            <a href="#" className="blog-button">
              Read More
            </a>
          </div>
        </div>
        <div className="blog-box">
          <div className="blog-img relative">
            <img src={blog3} alt="blog" />
            <span className="absolute top-2 left-2 text-white bg-black bg-opacity-50 px-4 py-2 rounded">
              Portfolio
            </span>
          </div>
          <div className="blog-text">
            <div className="flex items-center space-x-4 mb-2">
              <span className="flex items-center mb-0">
                <MdOutlineCalendarMonth className="mr-2" />
                16 March, 2024
              </span>
              <span className="flex items-center mb-0">
                <MdOutlinePerson className="mr-2" /> Admin
              </span>
            </div>
            <a href="#" className="blog-title">
              Stop Redesgning & Start Your Tuning Your Site Instead
            </a>
            <a href="#" className="blog-button">
              Read More
            </a>
          </div>
        </div>
        <div className="blog-box">
          <div className="blog-img relative">
            <img src={blog3} alt="blog" />
            <span className="absolute top-2 left-2 text-white bg-black bg-opacity-50 px-4 py-2 rounded">
              Portfolio
            </span>
          </div>
          <div className="blog-text">
            <div className="flex items-center space-x-4 mb-2">
              <span className="flex items-center mb-0">
                <MdOutlineCalendarMonth className="mr-2" />
                16 March, 2024
              </span>
              <span className="flex items-center mb-0">
                <MdOutlinePerson className="mr-2" /> Admin
              </span>
            </div>
            <a href="#" className="blog-title">
              Stop Redesgning & Start Your Tuning Your Site Instead
            </a>
            <a href="#" className="blog-button">
              Read More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
