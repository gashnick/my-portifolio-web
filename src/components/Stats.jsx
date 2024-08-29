import React from "react";
import { CiDesktop } from "react-icons/ci";
import { FaGift } from "react-icons/fa6";
import { IoPeopleOutline } from "react-icons/io5";
import { GiTrophyCup } from "react-icons/gi";

export default function Stats() {
  return (
    <section className="bg-red-400">
      <div className="flex items-center justify-center p-6 m-5 gap-5">
        <div className="flex flex-col items-center mx-4 my-6">
          <div className="w-10 h-10 bg-gray-50 flex items-center justify-center">
            <CiDesktop />
          </div>
          <p className="mt-2 text-center text-white">
            234+ <br /> Company Forums
          </p>
        </div>
        <div className="flex flex-col items-center mx-4">
          <div className="w-10 h-10 bg-gray-50 flex items-center justify-center">
            <FaGift />
          </div>
          <p className="mt-2 text-center text-white">
            40+ <br /> Happy Customers
          </p>
        </div>
        <div className="flex flex-col items-center mx-4">
          <div className="w-10 h-10 bg-gray-50 flex items-center justify-center">
            <IoPeopleOutline />
          </div>
          <p className="mt-2 text-center text-white">
            4.9/5 <br /> Average Ratings
          </p>
        </div>
        <div className="flex flex-col items-center mx-4">
          <div className="w-10 h-10 bg-gray-50 flex items-center justify-center">
            <GiTrophyCup />
          </div>
          <p className="mt-2 text-center text-white">
            23+ <br /> Winning Aword
          </p>
        </div>
      </div>
    </section>
  );
}
