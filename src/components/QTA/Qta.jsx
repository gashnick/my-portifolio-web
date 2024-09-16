import React, { useState } from "react";
import format from "../../assets/format.png";
import { LuPlus, LuMinus } from "react-icons/lu";
import "./qta.css";

export default function Qta() {
  const [isOpen, setIsOpen] = useState([false, false, false]); // Array for tracking open/close state of multiple sections
  const [showText, setShowText] = useState([false]);
  const handleToggle = (index) => {
    const updatedToggle = [...isOpen];
    updatedToggle[index] = !updatedToggle[index]; // Toggle the specific section
    setIsOpen(updatedToggle);
    if (updatedToggle[index]) {
      setTimeout(() => {
        const updatedShowText = [...showText];
        updatedShowText[index] = true;
        setShowText(updatedShowText);
      }, 1000);
    } else {
      const updatedShowText = [...showText];
      updatedShowText[index] = false;
      setShowText(updatedShowText);
    }
  };

  return (
    <section>
      <div className="content md:p-0">
        <div className="qta-contents">
          <div className="qta-image">
            <img src={format} alt="Format" />
          </div>
          <div className="qta-content">
            <h2 className="text-red-500 uppercase">Common Questions</h2>
            <h3 className="text-3xl capitalize mb-6">General Questions</h3>

            {/* First Question */}
            <div className="flex items-center mr-3 mb-5">
              <h2 className="font-semibold  w-3/4">
                How To Care Windows & Doors?
              </h2>
              {isOpen[0] ? (
                <LuMinus
                  className="cursor-pointer transition-transform duration-300"
                  onClick={() => handleToggle(0)}
                />
              ) : (
                <LuPlus
                  className="cursor-pointer"
                  onClick={() => handleToggle(0)}
                />
              )}
            </div>
            {isOpen[0] && (
              <p className="mt-2 transition-opacity duration-300 opacity-100">
                Here is the text that appears when the <br /> icon is clicked.
                You can describe how to <br /> care for windows and doors here.
              </p>
            )}

            {/* Second Question */}
            <div className="flex items-center mr-3 mb-5">
              <h2 className="font-semibold  w-3/4">How To Maintain Doors?</h2>
              {isOpen[1] ? (
                <LuMinus
                  className="cursor-pointer"
                  onClick={() => handleToggle(1)}
                />
              ) : (
                <LuPlus
                  className="cursor-pointer"
                  onClick={() => handleToggle(1)}
                />
              )}
            </div>
            {isOpen[1] && (
              <p className="mt-2">
                Here is the text that appears when the <br /> icon is clicked.
                You can describe how to <br /> maintain doors here.
              </p>
            )}

            {/* Third Question */}
            <div className="flex items-center mr-3 mb-5">
              <h2 className="font-semibold  w-3/4">How To Clean Windows?</h2>
              {isOpen[2] ? (
                <LuMinus
                  className="cursor-pointer"
                  onClick={() => handleToggle(2)}
                />
              ) : (
                <LuPlus
                  className="cursor-pointer"
                  onClick={() => handleToggle(2)}
                />
              )}
            </div>
            {isOpen[2] && (
              <p className="mt-2">
                Here is the text that appears when the <br /> icon is clicked.
                You can describe how to <br /> clean windows here.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
