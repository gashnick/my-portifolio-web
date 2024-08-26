import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import image3 from "../assets/image3.jpg";

export default function About() {
  const percentage = 65;
  const percentage1 = 75;
  const percentage2 = 85;

  return (
    <section className="bg-pink-200 relative">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-2 justify-items-center items-center">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 sm:w-52 lg:h-full lg:w-64 mt-7">
            <img
              src={image3}
              className="absolute inset-0 h-full w-full object-cover"
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
