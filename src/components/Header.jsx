import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import format from "../assets/format.png";
import React from "react";
import "../style.css";

export default function Header() {
  return (
    <header className="bg-pink-50 relative font">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-red-500">Ga</span>
            <span className="text-black">Nicolas</span>
          </h1>
          <div className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm font-bold">
              <li>
                <a className="transition hover:text-red-400/75" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="transition hover:text-red-400/75" href="#">
                  About
                </a>
              </li>
              <li>
                <a className="transition hover:text-red-400/75" href="#">
                  Services
                </a>
              </li>
              <li>
                <a className="transition hover:text-red-400/75" href="#">
                  Blog
                </a>
              </li>
              <li>
                <a className="transition hover:text-red-400/75" href="#">
                  Center
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <a className="rounded-md bg-white px-5 py-2.5 text-sm font-medium text-black cursor-pointer">
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-60 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                alt=""
                src={format}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="lg:py-24 flex gap-10">
              <div className="flex flex-col gap-3 mb-6 mr-2">
                <FaFacebook className="text-2xl text-red-500 cursor-pointer" />
                <FaTwitter className="text-2xl text-red-500 bg-white rounded-full p-1 cursor-pointer" />
                <FaLinkedin className="text-2xl text-red-500 cursor-pointer" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold sm:text-3xl capitalize">
                  Hello, i'm <br /> Nicolas Gashumba I Am <br /> A Web Developer
                </h3>

                <p className="mt-4 text-gray-600">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
                  qui hic atque tenetur quis eius quos ea neque sunt,
                  accusantium soluta minus veniam tempora deserunt? Molestiae
                  eius quidem quam repellat.
                </p>

                <a
                  href="#"
                  className="mt-8 inline-block rounded bg-red-500 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                >
                  Browse Projects
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}
