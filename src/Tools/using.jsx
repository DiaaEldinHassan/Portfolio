import React from "react";
import "./using.css";

export default function Tools() {
  let tool = [
    {
      name: "Js",
      URL: "https://cdn-icons-png.freepik.com/512/5968/5968292.png?uid=R69112071&ga=GA1.1.420342382.1746025485",
    },
    {
      name: "HTML",
      URL: "https://cdn-icons-png.freepik.com/512/5968/5968267.png?uid=R69112071&ga=GA1.1.420342382.1746025485",
    },
    {
      name: "CSS",
      URL: "https://cdn-icons-png.freepik.com/512/5968/5968242.png?uid=R69112071&ga=GA1.1.420342382.1746025485",
    },
    {
      name: "React",
      URL: "https://cdn-icons-png.freepik.com/512/17711/17711611.png?uid=R69112071&ga=GA1.1.420342382.1746025485",
    },
    {
      name: "NodeJs",
      URL: "https://cdn-icons-png.freepik.com/512/5968/5968322.png?uid=R69112071&ga=GA1.1.420342382.1746025485",
    },
    {
      name: "Postgres",
      URL: "https://cdn-icons-png.freepik.com/512/5968/5968342.png?uid=R69112071&ga=GA1.1.420342382.1746025485",
    },
    {
      name: "VSCode",
      URL: "https://icon.icepanel.io/Technology/svg/Visual-Studio-Code-%28VS-Code%29.svg",
    },
    {
      name: "NPM",
      URL: "https://icon.icepanel.io/Technology/svg/NPM.svg",
    },
    {
      name: "Bootstrap",
      URL: "https://cdn-icons-png.freepik.com/512/5968/5968672.png?uid=R69112071&ga=GA1.1.420342382.1746025485",
    },
    {
      name: "Figma",
      URL: "https://cdn-icons-png.freepik.com/512/5968/5968705.png?uid=R69112071&ga=GA1.1.420342382.1746025485",
    },
    {
      name: "git",
      URL: "https://cdn-icons-png.freepik.com/512/4494/4494740.png?uid=R69112071&ga=GA1.1.420342382.1746025485",
    },
    {
      name:"Vite",
      URL:"https://icon.icepanel.io/Technology/svg/Vite.js.svg"
    }
  ];

  return (
    <div className="tools">
      <h1 className="about">Skills</h1>
      <h1>Using now :</h1>
      <div className="tech">
        {tool.map((t) => {
          return (
            <div className="tImage">
              <img src={t.URL} alt={t.name} />
              <p>{t.name}</p>
            </div>
          );
        })}
      </div>
      <h1>Other skills :</h1>
      <div className="tech">
        <div className="tImage">
          <img
            src="https://cdn-icons-png.freepik.com/512/6132/6132222.png?uid=R69112071&ga=GA1.1.420342382.1746025485"
            alt="c++"
          />
          <p>C++</p>
        </div>
      </div>
    </div>
  );
}
