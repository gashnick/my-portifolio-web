import React from "react";
import format from "../../assets/format.png";
import "./qta.css";

export default function Qta() {
  return (
    <section className="font">
      <div className="flex justify-center text-center">
        <div className="qta-image sm:py-2">
          <img src={format} className="object-cover w-full h-full" />
        </div>
      </div>
    </section>
  );
}
