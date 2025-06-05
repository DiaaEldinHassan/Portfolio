import React from "react";
import "./skills.css";
import Other from "./other";
import Tools from "../Tools/using";
import Portfolio from "../Portfolio/portfoli";
import hr from "../assets/hr.png";

function Skills() {
  return (
    <div className="skills" >
      <h1 className="about"id="about">About Me</h1>

      <p style={{margin:"10%"}}>
        I'm a ReactJS developer with a strong focus on building scalable,
        maintainable, and well-designed web applications. I combine modern
        front-end technologies with best practices to create solutions that are
        both robust and user-friendly.
      </p>
      <button className="explore">
        <a href="https://github.com/DiaaEldinHassan" target="_blank">EXPLORE</a>
      </button>
      <img src={hr} alt="hr" />
      <Other />
      <Tools/>
      <Portfolio />
    </div>
  );
}
export default Skills;
