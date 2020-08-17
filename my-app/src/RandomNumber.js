import React, { useState, useEffect } from "react";
import "./App.css";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

export const RandomCatFact = ({ catData }) => {
  const [randomNumber, setRandomNumber] = useState(
    getRandomInt(0, catData.length - 1)
  );
  //Make fetch call here

  return (
    <>
      {randomNumber && <h1>{catData[randomNumber].text}</h1>}
      <button
        onClick={() => {
          setRandomNumber(getRandomInt(0, catData.length - 1));
        }}
      >
        Grab Fact
      </button>
    </>
  );
};
