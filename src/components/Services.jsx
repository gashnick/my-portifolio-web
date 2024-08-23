import React from "react";
import { CgWebsite } from "react-icons/cg";
import { FaCheckCircle } from "react-icons/fa";
import { RxRocket } from "react-icons/rx";

export default function Services() {
  return (
    <section>
      <div className="flex items-center justify-center gap-4 flex-col sm:flex-row sm:gap-2">
        <div className="bg-gray-200 mt-6 p-3">
          <CgWebsite className="text-purple-400 text-center text-5xl p-2" />
          <h1 className="text-3xl lg:text-4xl sm:text-2xl capitalize p-2">
            Website <br />
            development
          </h1>
          <ul>
            <li className="flex items-center p-2 gap-1">
              <FaCheckCircle className="text-orange-400" /> One Page Design
            </li>
            <li className="flex items-center p-2 gap-1">
              <FaCheckCircle className="text-orange-400" /> Website UI/UX
            </li>
            <li className="flex items-center p-2 gap-1">
              <FaCheckCircle className="text-orange-400" /> Many Page Design
            </li>
          </ul>
        </div>
        <div className="bg-gray-200 mt-6 p-3">
          <RxRocket className="text-purple-400 text-center text-5xl p-2" />
          <h1 className="text-3xl lg:text-4xl sm:text-2xl capitalize p-2">
            Website <br />
            development
          </h1>
          <ul>
            <li className="flex items-center p-2 gap-1">
              <FaCheckCircle className="text-orange-400" /> One Page Design
            </li>
            <li className="flex items-center p-2 gap-1">
              <FaCheckCircle className="text-orange-400" /> Website UI/UX
            </li>
            <li className="flex items-center p-2 gap-1">
              <FaCheckCircle className="text-orange-400" /> Many Page Design
            </li>
          </ul>
        </div>
        <div className="p-6">
          <h2 className="text-red-600 text-3xl sm:text-3xl xl:text-4xl mb-2">
            WHAT WE OFFER
          </h2>
          <h3 className="text-3xl sm:text-2xl xl:text-3xl">
            Which Services I Will <br /> Provide For You
          </h3>
          <p className="mt-4 text-gray-600 mb-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Aut
            qui hic atque tenetur.
          </p>
          <a
            href="#"
            className="mt-8 inline-block rounded bg-red-500 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
          >
            Explore All Services
          </a>
        </div>
      </div>
    </section>
  );
}
