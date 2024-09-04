import React from "react";
import imagelaptop from "../../assets/imagelaptop.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";
import imagedashbord from "../../assets/imagedashboard.webp";
import image6 from "../../assets/image6.jpg";
import "./portifolio.css";

export default function Portifolio() {
  return (
    <section>
      <div className="heading">
        <h2>Portifolio works</h2>
        <h3>Recent Case Studies</h3>
        <ul>
          <li>All</li>
          <li>Website</li>
          <li>Mobile Apps</li>
          <li>Software</li>
        </ul>
      </div>
      <div className="portifolio-container">
        <div className="portifolio-box">
          <div className="portifolio-dream">
            <img src={image3} alt="image2" />
            <img src={image4} alt="image2" />
          </div>
          <div className="portifolio-dream">
            <img src={image6} alt="image2" />
            <img src={imagedashbord} alt="image2" />
          </div>
          <div className="portifolio-dream">
            <img src={image3} alt="image2" />
            <img src={imagelaptop} alt="image2" />
          </div>
        </div>
      </div>
    </section>
  );
}
