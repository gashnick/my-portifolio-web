import React from "react";
import imagelaptop from "../assets/imagelaptop.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";
import image6 from "../assets/image6.jpg";

export default function Portifolio() {
  return (
    <section className="justify-center text-center m-auto">
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
          <li className="font-bold hover:text-red-500 hover:underline hover:cursor-pointer active:text-red-500 active:underline">
            Website
          </li>
          <li className="font-bold hover:text-red-500 hover:underline hover:cursor-pointer">
            Mobile Apps
          </li>
          <li className="font-bold hover:text-red-500 hover:underline hover:cursor-pointer">
            Software
          </li>
        </ul>
        <div className="grid grid-cols-2 gap-6 p-4 mt-2 sm:grid-cols-3">
          <div className="relative aspect-w-1 aspect-h-1">
            <img
              src={image2}
              className="rounded-lg object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-red-500 to-transparent"></div>
            <div
              className="absolute bottom-0 left-0 flex flex-col 
          items-start p-4 sm:text-3xl"
            >
              <span className="bg-white text-red-500 font-bold text-xs sm:text-sm px-1 py-2 rounded mt-2">
                Development
              </span>
              <span className="bg-white font-bold text-xs sm:text-sm px-3 py-2 rounded mt-2">
                Officical Video Editor
              </span>
            </div>
          </div>
          <div className="aspect-w-1 aspect-h-1">
            <img
              src={image5}
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
          <div className="aspect-w-1 aspect-h-1">
            <img
              src={image3}
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
          <div className="aspect-w-1 aspect-h-1">
            <img
              src={image4}
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
          <div className="aspect-w-1 aspect-h-1">
            <img
              src={image6}
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
          <div className="aspect-w-1 aspect-h-1">
            <img
              src={imagelaptop}
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
