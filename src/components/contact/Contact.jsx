import React from "react";
import "./contact.css";

export default function Contact() {
  return (
    <div className="bg-pink-50">
      <div className="content">
        <div className="contact-content">
          <div className="contact-contents">
            <h2>CONTACT WITH ME</h2>
            <h3 className="text-3xl font-semibold">
              Have Any Project In Your Mind?
            </h3>
            <p className="text-gray-600">
              Integer faucibus auctor tortor aget aliquam. Maecenas ut
              <br />
              <span className="inline-block">
                enim at velitPraesent et quam laoreet.
              </span>
            </p>
          </div>
          <div className="form-contents">
            <form className="space-y-4">
              <div className="input-box">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="input"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email Address"
                    className="input"
                  />
                </div>
              </div>
              <div>
                <textarea placeholder="Your Message"></textarea>
              </div>
              <div>
                <a
                  href="#"
                  className="mt-8 inline-block rounded bg-red-500 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                >
                  Send Me Message
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
