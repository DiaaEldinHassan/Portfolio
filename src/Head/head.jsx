import React from "react";
import "./head.css";
import sign from "../assets/signing.png";
import Nav from "./navbar";
import hr from "../assets/hr.png";
import Bar from "./tailwindNav";

function Head() {
  return (
    <div className="head" id="head">
      <Bar />
      <Nav />
      <div className="lhead">
        <div className="brand">
          <img src={sign} alt="signing" className="sign" />
        </div>
        <div className="hText">
          <h2>Hi I'm </h2>
          <h1>Diaa Hassan</h1>
          <h5>A ReactJs Developer</h5>
          <img src={hr} className="hr" alt="hr" />
          <div className="btns">
             <a href="https://github.com/DiaaEldinHassan" target="_blank"><button>
             <i className="fa-brands fa-github"></i>
            </button></a><a href="https://www.linkedin.com/in/diaa-eldin-hassan-989702280/" target="_blank">
            <button>
             <i className="fa-brands fa-linkedin"></i>
            </button></a>
            <a href="mailto:diaahassan777@gmail.com" target="_blank"><button>
             <i className="fa-solid fa-at"></i> 
            </button></a>
          </div>
        </div>
      </div>
      <div className="rhead">
        <div className="nav">
          <img
            className="codin"
            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortWaved&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=Gray02&eyeType=Default&eyebrowType=Default&mouthType=Twinkle&skinColor=Brown"
          />
        </div>
      </div>
    </div>
  );
}
export default Head;
