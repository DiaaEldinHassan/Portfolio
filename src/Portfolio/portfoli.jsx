import React from "react";
import ecommerce from "../assets/ecommerce.png"
import "./portfolio.css";

export default function Portfolio() {
  let sis = ["Flutter", "Dart", "Firebase", "Arduino", "IoT"];
  let keeper = ["Javascript", "CSS", "React"];
  let weather = ["Javascript", "EJS", "API", "nodeJs", "Express.js", "CSS"];
  let commerce = ["HTML", "CSS", "JavaScript", "React", "Tailwind"];
  return (
    <div className="portfolio" id="portfolio">
      <div className="landscape">
        <h1 className="about">Portfolio</h1>
      </div>

      <div className="cardWraper">
        <div className="card">
          <img
            src="https://iotbusinessnews.com/WordPress/wp-content/uploads/2024/07/smart-irrigation-city.jpg"
            alt="Project Image"
          />
          <h2>🌿 Smart Irrigation System – Flutter + Arduino + Firebase</h2>
          <p className="describtion">
            This project is a smart irrigation system built with Flutter for the
            mobile app frontend, Arduino for hardware control, and Firebase as
            the real-time backend. The system allows users to remotely monitor
            and control irrigation through an intuitive mobile interface.
          </p>
          <div className="tWraper">
            {sis.map((s) => {
              return <p className="techn">{s}</p>;
            })}
          </div>
          <a href="https://github.com/DiaaEldinHassan/SIS" target="_blank">
            <button>Go</button>
          </a>
        </div>
        <div className="card">
          <img
            src="https://github.com/DiaaEldinHassan/Keeper/raw/main/src/assets/Screenshots/k1.png"
            alt="Project Image"
          />
          <h2>📝 Keeper App – Simple, Stylish, and Functional</h2>
          <p className="describtion">
            A clean and modern React application that lets users add, view, and
            delete notes with ease. Built using functional components and React
            Hooks, this app offers a smooth and responsive user experience with
            a minimalist design.
          </p>
          <div className="tWraper">
            {keeper.map((s) => {
              return <p className="techn">{s}</p>;
            })}
          </div>
          <a href="https://github.com/DiaaEldinHassan/Keeper" target="_blank">
            <button>Go</button>
          </a>
        </div>
        <div className="card">
          <img
            src="https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?cs=srgb&dl=pexels-jplenio-1118873.jpg&fm=jpg"
            alt="Project Image"
          />
          <h2>🌦️ Weather App – Real-Time Weather with JavaScript & EJS</h2>
          <p className="describtion">
            A responsive and dynamic weather application built using JavaScript,
            EJS (Embedded JavaScript Templates), and CSS, powered by a public
            Weather API. The app allows users to search for any city and view
            real-time weather data.
          </p>
          <div className="tWraper">
            {weather.map((s) => {
              return <p className="techn">{s}</p>;
            })}
          </div>
          <a href="https://github.com/DiaaEldinHassan/Weather" target="_blank">
            <button>Go</button>
          </a>
        </div>
        <div className="card">
          <img
            loading="lazy"
            src={ecommerce}
            alt="Project Image"
          />
          <h2>🛒 E-Commerce Web Application</h2>
          <p className="describtion">
            A modern, fully responsive e-commerce web application built with
            React, React Router, and Tailwind CSS. This project includes dynamic
            product browsing, a user-friendly authentication interface, and a
            functional store locator. Designed with a clean, mobile-first
            layout, it's ideal as a showcase project or a solid foundation for
            developing full-featured online stores.
          </p>
          <div className="tWraper">
            {commerce.map((s) => {
              return <p className="techn">{s}</p>;
            })}
          </div>
          <a
            href="https://github.com/DiaaEldinHassan/plant_app_mm"
            target="_blank"
          >
            <button>Go</button>
          </a>
        </div>
      </div>
    </div>
  );
}
