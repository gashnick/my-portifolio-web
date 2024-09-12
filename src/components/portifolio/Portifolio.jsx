import React from "react";
import imagelaptop from "../../assets/imagelaptop.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/videoeditor.jpg";
import image4 from "../../assets/image4.jpg";
import imagedashbord from "../../assets/videoeditor.jpg";
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
            <div className="image-container">
              <img src={image3} alt="image2" />
              <div className="overlay">
                <div className="text">
                  <h2 className="rounded-sm p-2 border-2 mb-1 bg-white text-red-500">
                    Development
                  </h2>
                  <h3 className="rounded-sm p-2 border-2 bg-white text-black">
                    Official video editor
                  </h3>
                </div>
              </div>
            </div>
            <div className="image-container">
              <img src={image4} alt="image2" />
              <div className="overlay">
                <div className="text">This is image 4</div>
              </div>
            </div>
          </div>
          <div className="portifolio-dream">
            <div className="image-container">
              <img src={image6} alt="image2" />
              <div className="overlay">
                <div className="text">This is image 6</div>
              </div>
            </div>
            <div className="image-container">
              <img src={imagedashbord} alt="image2" />
              <div className="overlay">
                <div className="text">This is the dashboard</div>
              </div>
            </div>
          </div>
          <div className="portifolio-dream">
            <div className="image-container">
              <img src={image3} alt="image2" />
              <div className="overlay">
                <div className="text">This is image 3 again</div>
              </div>
            </div>
            <div className="image-container">
              <img src={imagelaptop} alt="image2" />
              <div className="overlay">
                <div className="text">This is the laptop image</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
