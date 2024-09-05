import React from "react";
import { CgWebsite } from "react-icons/cg";
import { FaCheckCircle } from "react-icons/fa";
import { RxRocket } from "react-icons/rx";
import "./services.css";
export default function Services() {
  return (
    <section>
      <div className="service-container">
        <div className="service-box-container">
          <div className="service-box">
            <CgWebsite className="text-purple-500 text-3xl" />
            <h3>
              Website <br /> Development
            </h3>
            <ul>
              <li>
                <FaCheckCircle className="text-orange-500 pr-2 text-2xl" />
                One Page Design
              </li>
              <li>
                {" "}
                <FaCheckCircle className="text-orange-500 pr-2 text-2xl" />
                Website UI/UX
              </li>
              <li>
                {" "}
                <FaCheckCircle className="text-orange-500 pr-2 text-2xl" />
                Multi Page Design
              </li>
            </ul>
          </div>
          <div className="service-box">
            <RxRocket className="text-purple-500 text-3xl" />
            <h3>
              Website <br /> Development
            </h3>
            <ul>
              <li>
                <FaCheckCircle className="text-orange-500 pr-2 text-2xl" />
                One Page Design
              </li>
              <li>
                {" "}
                <FaCheckCircle className="text-orange-500 pr-2 text-2xl" />
                Website UI/UX
              </li>
              <li>
                {" "}
                <FaCheckCircle className="text-orange-500 pr-2 text-2xl" />
                Multi Page Design
              </li>
            </ul>
          </div>
        </div>

        <div className="service-texts">
          <h2 className="text-red-500 pb-2">WHAT WE OFFER</h2>
          <h3 className="text-3xl pb-2 ">
            Which Services I Will <br /> Provide For You
          </h3>
          <p className="text-gray-500 pb-3">
            Integer faucibus auctor tortor aget aliquam. Maecenas ut <br /> enim
            at velitPraesent et quam laoreet.{" "}
          </p>
          <a
            href="#"
            className="mt-8 inline-block rounded bg-red-500 px-12 py-3 text-sm font-medium text-white transition hover:bg-orange-500 focus:outline-none focus:ring focus:ring-yellow-400"
          >
            Explore All Services
          </a>
        </div>
      </div>
    </section>
  );
}
