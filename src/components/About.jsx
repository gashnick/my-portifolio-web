import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import image3 from "../assets/image3.jpg";

export default function About() {
  const percentage = 65;
  const percentage1 = 75;
  const percentage2 = 85;

  return (
    <section className="bg-pink-200">
      <div className="flex items-center justify-center gap-4 flex-col sm:flex-row sm:gap-2">
        <div className="flex gap-12 justify-center">
          <div className="h-70 w-40 overflow-hidden rounded-lg sm:h-80 sm:w-52 lg:h-full lg:w-64 mt-3">
            <img
              src={image3}
              className="h-full w-full object-cover"
              alt="Profile"
            />
          </div>

          {/* Content and Progress Bars */}
          <div className="gap-4 mt-4">
            <h2 className="text-3xl font-bold text-red-500 uppercase mb-4">
              About me
            </h2>
            <p className="text-3xl font-bold mb-8">
              I can develop anything <br />{" "}
              <span className="inline-block">for your needs</span>
            </p>

            {/* Progress Bars and Text */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
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
                  <span className="inline-block">
                    Aut qui hic atque tenetur.
                  </span>
                </p>
              </div>
              <div className="flex items-center gap-4">
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
                  <span className="inline-block">
                    Aut qui hic atque tenetur.
                  </span>
                </p>
              </div>
              <div className="flex items-center gap-4 mb-6">
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
                  <span className="inline-block">
                    Aut qui hic atque tenetur.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
