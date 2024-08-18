import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import React from "react";

export default function Header() {
  return (
    <header className="bg-pink-200 relative">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-red-500">Ga</span>
            <span className="text-black">Nicolas</span>
          </h1>
          <div className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <a className="transition hover:text-red-400/75" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="transition hover:text-red-400/75" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="transition hover:text-red-400/75" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="transition hover:text-red-400/75" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="transition hover:text-red-400/75" href="#">
                  Home
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <a className="rounded-md bg-white px-5 py-2.5 text-sm font-medium text-black">
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex flex-wrap lg:h-screen lg:items-center">
        <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
          <div className="flex space-x-8 items-start">
            <div className="flex flex-col space-y-4 mr-16">
              <FaFacebook className="text-red-500 w-6 h-6 hover:bg-white hover:cursor-pointer" />
              <FaTwitter className="text-red-600 w-6 h-6 hover:bg-white hover:cursor-pointer active:bg-white" />
              <FaLinkedin className="text-red-600 w-6 h-6 hover:bg-white hover:cursor-pointer" />
            </div>
            <div className="mx-auto max-w-lg">
              <h1 className="mb-9 font-bold size-15">
                Hello, I'm <br />
                Nicolas Gashumba An <br /> web Developer
              </h1>
              <p>A talented web developer with n+ years of experience</p>
              <form className="mt-9">
                <input
                  type="button"
                  value="Browse Projects"
                  className="bg-red-500 text-white px-4 py-2 rounded"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
