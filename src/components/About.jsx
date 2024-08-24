import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import myImage from "../assets/image.jpg";

export default function About() {
  const percentage = 66;
  return (
    <section className="bg-pink-200">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="flex justify-center items-center flex-col sm:flex-row gap-4">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80  lg:h-full">
            <img src={myImage} className="h-full w-24 object-cover" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-center">About me</h2>
            <p className="text-lg text-center">
              I can develop anything for your needs
            </p>
            <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
              className="w-24 text-red-500 bg-red-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
