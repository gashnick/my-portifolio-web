import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import image3 from "../assets/image3.jpg";
import "./style.css";

export default function About() {
  const percentage = 65;
  const percentage1 = 75;
  const percentage2 = 85;

  return (
    <section className="bg-orange-50">
      <div className="flex justify-center items-center gap-4 m-4">
        <div className="h-64 overflow-hidden rounded-lg sm:h-80 lg:w-64 lg:h-full">
          <img src={image3} className="h-full object-cover w-full" />
        </div>
        <div className="gap-7 m-4">
          <div className="gap-4 m-4">
            <h2 className="font-bold items-center text-red-500 capitalize">
              {" "}
              About me
            </h2>
            <p className="text-3xl font-bold mb-8 uniform-font-size">
              I can develop anything <br />{" "}
              <span className="inline-block">for your needs</span>
            </p>
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
