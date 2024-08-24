import React from "react";
import imagelaptop from "../assets/imagelaptop.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";
import image6 from "../assets/image6.jpg";

export default function Portifolio() {
  return (
    <section className="justify-center text-center">
      <div className="container mx-auto max-w-6xl p-4">
        <h2 className="text-3xl text-red-500 text-center font-bold">
          Portifolio works
        </h2>
        <p className="text-3xl font-bold text-center mb-3">
          Recent case studies
        </p>
        <ul className="flex justify-center text-center p-2 gap-4">
          <li className="font-bold hover:text-red-500 hover:underline hover:cursor-pointer">
            All
          </li>
          <li className="font-bold hover:text-red-500 hover:underline hover:cursor-pointer">
            Website
          </li>
          <li className="font-bold hover:text-red-500 hover:underline hover:cursor-pointer">
            Mobile Apps
          </li>
          <li className="font-bold hover:text-red-500 hover:underline hover:cursor-pointer">
            Software
          </li>
        </ul>
        <div className="md:columns-2 lg:columns-3 gap-6 p-4 sm:p-1 mt-2">
          <div className="animate-spin duration-200"></div>
        </div>
      </div>
    </section>
  );
}
