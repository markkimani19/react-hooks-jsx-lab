import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  // update the JSX being returned!
  return(
    <div id ="home">
      <h1> {`My name is ${name}`}</h1>
      <h2>{`I live in ${city}`}</h2>
    </div>



  )
}

export default Home;
