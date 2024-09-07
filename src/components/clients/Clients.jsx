import React from "react";
import { MdStarRate } from "react-icons/md";
import { RiDoubleQuotesR } from "react-icons/ri";
import { FaPlayCircle } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import image from "../../assets/image.jpg";
import "./clients.css";
export default function Clients() {
  return (
    <section className="bg-pink-50">
      <div className="flex flex-col items-start justify-center  md:flex-row p-5">
        <div className="p-6 mb-3">
          <div className="mb-3 pb-5">
            <FaPlayCircle className="circle" />
          </div>
          <h3 className="text-3xl mb-3 pb-5">
            I am Fully Commited <br /> To The Needs My <br /> Customers
          </h3>
          <p className="text-gray-600">
            Integer faucibus auctor tortor aget aliquam. Maecenas ut
            <br />
            <span className="inline-block">
              enim at velitPraesent et quam laoreet.
            </span>
          </p>
        </div>
        <div className="p-6">
          <div className="bg-purple-500 p-6 text-white rounded-lg">
            <main>
              <div className="">
                <h2 className="uppercase mb-3">Portifolio works</h2>
                <h3 className="text-3xl text-white">Client's Feedback</h3>
              </div>
              <div className="flex ratings">
                <MdStarRate className="rate" />
                <MdStarRate className="rate" />
                <MdStarRate className="rate" />
                <MdStarRate className="rate" />
                <CiStar />
              </div>
              <p className="text-white paragraph">
                - There are many variations of Lorem Ipsum <br />
                available. but the majority have suffered alteration in some{" "}
                <br /> form. by injected humour,or randomised words which <br />{" "}
                don't look even slightly believe. if you are going to use <br />{" "}
                a passage of you need to be sure.
                <br />
              </p>
            </main>
            <div className="flex gap-3 profile-text">
              <div className="profile">
                <img src={image} alt="profile" className="profile-image img" />
              </div>
              <div className="flex gap-10 justify-between">
                <div className="desc">
                  <span>Person name</span>
                  <span>desctription</span>
                </div>
                <div className=" ml-6">
                  <RiDoubleQuotesR className="quote" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
