import React from "react";
import "./nav.css";
function Nav() {
  return (
    <div className="navbar">
      <a href="#about"><button className="tbutton">About me</button></a>
    <a href="#skills"><button className="tbutton">Skills</button></a> 
     <a href="#portfolio"><button className="tbutton">Portfolio</button></a> 
     <a href="#contact"><button className="contact tbutton">CONTACT ME</button></a> 
    </div>
  );
}
export default Nav;
