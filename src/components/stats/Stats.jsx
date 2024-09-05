import React from "react";
import { CiDesktop } from "react-icons/ci";
import { FaGift } from "react-icons/fa6";
import { IoPeopleOutline } from "react-icons/io5";
import { GiTrophyCup } from "react-icons/gi";
import "./stats.css";
export default function Stats() {
  return (
    <section className="bg-red-400 font">
      <div className="flex items-center justify-center p-6 m-5 gap-5 flex-col sm:flex-row">
        <div className="flex flex-col items-center mx-4 my-6">
          <div className="w-10 h-10 bg-green-50/50 flex items-center justify-center text-white">
            <CiDesktop />
          </div>
          <p className="mt-2 text-center text-white">
            <span className="text-3xl font-bold">234+</span> <br /> Completed
            Projects
          </p>
        </div>
        <div className="flex flex-col items-center mx-4">
          <div className="w-10 h-10 bg-gray-50/50 text-white flex items-center justify-center">
            <FaGift />
          </div>
          <p className="mt-2 text-center text-white">
            <span className="text-3xl font-bold">40+</span> <br /> Happy
            Customers
          </p>
        </div>
        <div className="flex flex-col items-center mx-4">
          <div className="w-10 h-10 bg-gray-50/50 text-white flex items-center justify-center">
            <IoPeopleOutline />
          </div>
          <p className="mt-2 text-center text-white">
            <span className="text-3xl font-bold">4.9/5</span> <br /> Average
            Ratings
          </p>
        </div>
        <div className="flex flex-col items-center mx-4">
          <div className="w-10 h-10 bg-white/50 text-white flex items-center justify-center">
            <GiTrophyCup />
          </div>
          <p className="mt-2 text-center text-white">
            <span className="text-3xl font-bold">23+</span> <br /> Winning Award
          </p>
        </div>
      </div>
    </section>
  );
}
