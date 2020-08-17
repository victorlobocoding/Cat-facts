import React, { useState, useEffect } from "react";
import "./App.css";

export const FactList = ({ catData }) => {
  //Figure out how to make a list of facts here
  console.log(catData);

  return (
    <div>
      Fact list goes here:
      <ul>
        <li>{catData[5].text}</li>
      </ul>
    </div>
  );
};
