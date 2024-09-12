import React from "react";
import "./contact.css";

export default function Contact() {
  return (
    <section className="bg-pink-50">
      <div className="contact-container">
        <div className="contact-dexcription">
          <h2 className="text-red-500">CONTACT WITH ME</h2>
          <h3 className="text-3xl">
            Have Any Project In <br /> Your Mind?
          </h3>
          <p className="text-gray-600">
            Integer faucibus auctor tortor aget aliquam. Maecenas ut
            <br />
            enim at velitPraesent et quam laoreet.
          </p>
        </div>
        <div className="form">
          <div className="inputs-box">
            <input
              type="text"
              className="inputs outline-none"
              placeholder="Your name"
              required
            />
            <input
              type="email"
              className="inputs outline-none"
              placeholder="Your email"
              required
            />
          </div>
          <textarea
            placeholder="Your message"
            className="p-3 outline-none"
          ></textarea>
          <a
            href="#"
            className="mt-8 inline-block rounded bg-red-500 px-4 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
          >
            Send Me Massage
          </a>
        </div>
      </div>
    </section>
  );
}
