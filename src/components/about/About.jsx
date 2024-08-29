import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import format from "../../assets/format.png";
import "./about.css";
export default function About() {
  const percentage = 65;
  const percentage1 = 75;
  const percentage2 = 85;

  return (
    <section className="bg-orange-50">
      <div className="about-content">
        <div className="about-image">
          <img src={format} className="" />
        </div>
        <div className="about-contents">
          <div className="gap-4 m-4">
            <h2 className="items-center text-red-500 uppercase"> About me</h2>
            <h3 className="text-3xl capitalize mb-8">
              I can develop anything <br />{" "}
              <span className="inline-block">for your needs</span>
            </h3>
          </div>

          <div className="flex items-center gap-4 m-4">
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
              <span className="inline-block">Aut qui hic atque tenetur.</span>
            </p>
          </div>
          <div className="flex items-center gap-4 m-4">
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
              <span className="inline-block">Aut qui hic atque tenetur.</span>
            </p>
          </div>
          <div className="flex items-center gap-4 m-4">
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
              <span className="inline-block">Aut qui hic atque tenetur.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
