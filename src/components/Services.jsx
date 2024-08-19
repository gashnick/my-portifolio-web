import React from "react";

export default function Services() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 mt-5">
      <div className="h-32 rounded-lg bg-gray-200"></div>
      <div className="h-32 rounded-lg bg-gray-200"></div>
      <div className="h-32 mx-3">
        <h3 className="text-2xl lg:text-3xl text-red-500 uppercase">
          What we offer
        </h3>
        <h2 className="text-2xl lg:text-3xl capitalize">
          What services i will provide for you
        </h2>
        <p className="text-1xl lg:text-2xl mt-2">
          Different services that i will offer
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
