import React, { useState } from "react";
import format from "../../assets/format.png";
import "./qta.css";

export default function Qta() {
  const [isOpen, setIsOpen] = useState(false);
  const handleTogle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <section>
      <div className="content md:p-0">
        <div className="qta-contents">
          <div className="qta-image">
            <img src={format} />
          </div>
          <div className="qta-content">
            <h2 className="text-red-500 uppercase">Common Questions</h2>
            <h3 className="text-3xl capitalize">General Questions</h3>
            <h2>
              How To Care Windows & Doors?
              <span
                style={{ cursor: "pointer", marginLeft: "10px" }}
                onClick={handleTogle}
              >
                {isOpen ? "-" : "+"}
              </span>
            </h2>
            {isOpen && (
              <div>
                <p>
                  To care for windows and doors, regularly clean the glass{" "}
                  <br /> and frames, lubricate the hinges and tracks, <br /> and
                  inspect seals for any signs of damage.
                </p>
              </div>
            )}
            <h2>
              How To Care Windows & Doors?
              <span
                style={{ cursor: "pointer", marginLeft: "10px" }}
                onClick={handleTogle}
              >
                {isOpen ? "-" : "+"}
              </span>
            </h2>
            {isOpen && (
              <div>
                <p>
                  To care for windows and doors, regularly clean the glass{" "}
                  <br /> and frames, lubricate the hinges and tracks, <br /> and
                  inspect seals for any signs of damage.
                </p>
              </div>
            )}
            <h2>
              How To Care Windows & Doors?
              <span
                style={{ cursor: "pointer", marginLeft: "10px" }}
                onClick={handleTogle}
              >
                {isOpen ? "-" : "+"}
              </span>
            </h2>
            {isOpen && (
              <div>
                <p>
                  To care for windows and doors, regularly clean the glass{" "}
                  <br /> and frames, lubricate the hinges and tracks, <br /> and
                  inspect seals for any signs of damage.
                </p>
              </div>
            )}
            <h2>
              How To Care Windows & Doors?
              <span
                style={{ cursor: "pointer", marginLeft: "10px" }}
                onClick={handleTogle}
              >
                {isOpen ? "-" : "+"}
              </span>
            </h2>
            {isOpen && (
              <div>
                <p>
                  To care for windows and doors, regularly clean the glass{" "}
                  <br /> and frames, lubricate the hinges and tracks, <br /> and
                  inspect seals for any signs of damage.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
