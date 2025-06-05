import React from "react";
import "./other.css";

export default function Other() {
  return (
    <div className="other" id="skills">
      <div className="partition">
        <div>
          <i class="fa-solid fa-palette"></i>
          <h2>Design</h2>
        </div>
        <p>
          I collaborate closely with designers or follow design systems to
          create clean, user-friendly interfaces. I prioritize accessibility,
          intuitive UX, and responsive layouts across all devices.
        </p>
      </div>
      <div className="partition">
        <div>
          <i class="fa-solid fa-code"></i>
          <h2>Development</h2>
        </div>
        <p>
          I build modern, responsive React applications using best practices and
          clean architecture. I focus on performance, scalability, and
          delivering code that’s easy to understand and extend.
        </p>
      </div>
      <div className="partition">
        <div>
          <i className="fa-solid fa-screwdriver-wrench"></i>
          <h2>Maintainability</h2>
        </div>
        <p>
          I write modular, reusable components and follow consistent coding
          standards. My goal is to ensure projects remain easy to update,
          refactor, and scale — both for myself and for future developers.
        </p>
      </div>
    </div>
  );
}
