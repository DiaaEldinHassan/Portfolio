import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer" id="contact">
      <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#FFFFFF"
          >
            <path d="m296-224-56-56 240-240 240 240-56 56-184-183-184 183Zm0-240-56-56 240-240 240 240-56 56-184-183-184 183Z" />
          </svg>
      <a href="#head">
        <button >
          Back to the top
        </button>
      </a>
      <div className="icons">
        <a href="https://github.com/DiaaEldinHassan" target="_blank">
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/diaa-eldin-hassan-989702280/"
          target="_blank"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="mailto:diaahassan777@gmail.com" target="_blank">
          <i className="fa-solid fa-at"></i>
        </a>
      </div>
      <h6>
        <i className="fa-solid fa-copyright"> Coded By<span style={{ color: "red" }}> <a href="https://github.com/DiaaEldinHassan">DiaaEldinHassan</a>
          </span>
        </i>
      </h6>
    </div>
  );
}
