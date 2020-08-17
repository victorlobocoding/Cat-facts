import React, { useState, useEffect } from "react";
import "./App.css";

export const FactList = ({ catData }) => {
  //Figure out how to make a list of facts here
  

  return (
    <div>
      <h2>Fact list goes here:</h2>
      {
      catData.map(function (catDataFacts) {
	return <li>  {catDataFacts.text}  </li>
})}
    </div>
  );
};
