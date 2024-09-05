import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import profile from "../../assets/profile.webp";
import "./about.css";
export default function About() {
  const percentage = 65;
  const percentage1 = 75;
  const percentage2 = 85;

  return (
    <section className="bg-pink-50">
      <div className="about-content">
        <div className="about-image">
          <img src={profile} />
        </div>
        <div className="about-description">
          <h2 className="text-red-500">ABOUT ME</h2>
          <h3 className="text-3xl">
            I Can Develop Anything <br /> For Your Needs
          </h3>
          <div className="about-description-percentage">
            <div className="w-16">
              <CircularProgressbar
                value={percentage1}
                text={`${percentage1}%`}
                styles={buildStyles({
                  textColor: "#EF4444",
                  pathColor: "#EF4444",
                  trailColor: "#FEE2E2",
                })}
              />
            </div>
            <p className="text-gray-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              <br />
              Aut qui hic atque tenetur
            </p>
          </div>
          <div className="about-description-percentage">
            <div className="w-16">
              <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                styles={buildStyles({
                  textColor: "#EF4444",
                  pathColor: "#EF4444",
                  trailColor: "#FEE2E2",
                })}
              />
            </div>
            <p className="text-gray-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              <br />
              Aut qui hic atque tenetur
            </p>
          </div>
          <div className="about-description-percentage">
            <div className="w-16">
              <CircularProgressbar
                value={percentage2}
                text={`${percentage2}%`}
                styles={buildStyles({
                  textColor: "#EF4444",
                  pathColor: "#EF4444",
                  trailColor: "#FEE2E2",
                })}
              />
            </div>
            <p className="text-gray-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              <br />
              Aut qui hic atque tenetur
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
