import React from "react";
import { CgWebsite } from "react-icons/cg";
import { FaCheckCircle } from "react-icons/fa";
import { RxRocket } from "react-icons/rx";

export default function Services() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 mt-5">
      <div className=" bg-gray-200 lg:ml-24 sm:mx-auto">
        <div className="block p-8">
          <CgWebsite className="text-purple-600 lg:text-3xl sm:text-4xl" />
          <h2 className="mt-4 text-xl font-bold mb-3">
            Website <br /> Development
          </h2>

          <ul className="mt-1 text-sm text-gray-300 gap-y-2">
            <li className="flex items-center gap-x-2 capitalize mb-1">
              <FaCheckCircle className="text-orange-500" /> one page design
            </li>
            <li className="flex items-center gap-x-2 capitalize mb-1">
              <FaCheckCircle className="text-orange-500" /> Website UI/UX
            </li>
            <li className="flex items-center gap-x-2 capitalize">
              <FaCheckCircle className="text-orange-500" /> Multi page design
            </li>
          </ul>
        </div>
      </div>
      <div className=" bg-gray-200  sm:mx-auto">
        <div className="block p-8">
          <RxRocket className="text-purple-600 lg:text-3xl sm:text-4xl" />
          <h2 className="mt-4 text-xl font-bold mb-3">
            Website <br /> Development
          </h2>

          <ul className="mt-1 text-sm text-gray-300 gap-y-2">
            <li className="flex items-center gap-x-2 capitalize mb-1">
              <FaCheckCircle className="text-orange-500" /> one page design
            </li>
            <li className="flex items-center gap-x-2 capitalize mb-1">
              <FaCheckCircle className="text-orange-500" /> Website UI/UX
            </li>
            <li className="flex items-center gap-x-2 capitalize">
              <FaCheckCircle className="text-orange-500" /> Multi page design
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-3">
        <h3 className="text-1xl lg:text-2xl text-red-500 uppercase mb-2">
          What we offer
        </h3>
        <h2 className="text-1xl lg:text-2xl capitalize">
          Which services i willn <br /> provide for you
        </h2>
        <p className="text-1xl lg:text-1xl mt-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic
          atque tenetur quis eius quos ea neque sunt, accusantium soluta minus
          veniam tempora deserunt? Molestiae eius quidem quam repellat.
        </p>
        <a
          href="#"
          className="mt-8 inline-block rounded bg-red-500 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Browse All Services
        </a>
      </div>
    </div>
  );
}
