import React from "react";
import blog3 from "../../assets/2looking.webp";
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
          <div className="blog-img">
            <img src={blog3} alt="blog" />
          </div>
          <div className="blog-text">
            <span>16 March 2024</span>
            <a href="#" className="blog-title">
              Stop Redesgning & Start Your Tuning Your Site Instead
            </a>
            <a href="#" className="blog-button">
              Read More
            </a>
          </div>
        </div>
        <div className="blog-box">
          <div className="blog-img">
            <img src={blog3} alt="blog" />
          </div>
          <div className="blog-text">
            <span>16 March 2024</span>
            <a href="#" className="blog-title">
              Stop Redesgning & Start Your Tuning Your Site Instead
            </a>
            <a href="#" className="blog-button">
              Read More
            </a>
          </div>
        </div>
        <div className="blog-box">
          <div className="blog-img">
            <img src={blog3} alt="blog" />
          </div>
          <div className="blog-text">
            <span>16 March 2024</span>
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
