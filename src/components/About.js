import React from "react";
import { image } from "../data/data";

function About() {
  return(
    <div id="about">
      <h2>About Me</h2>
      <p>My name is John Doe, and I am a software engineer.</p>
      <img src={image} alt="I made this" />
    </div>
  )
}

export default About;
