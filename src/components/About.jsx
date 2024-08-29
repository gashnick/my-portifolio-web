import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import format from "../assets/format.png";
import "../style.css";

export default function About() {
  const percentage = 65;
  const percentage1 = 75;
  const percentage2 = 85;

  return (
    <section className="bg-orange-50 mx-auto my-7 font relative">
      <div className="flex flex-col justify-center items-center gap-4 m-4 sm:flex-row">
        <div className="about-image sm:py-2">
          <img src={format} className="object-cover w-full h-full" />
        </div>
        <div className="gap-7 m-4">
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
