import React, { useState, useEffect } from "react";
import "./App.css";
import { RandomCatFact } from "./RandomNumber";
import { FactList } from "./FactList";

export const App = () => {
  const [catData, setCatData] = useState();
  //Make fetch call here

  useEffect(() => {
    fetch("https://cat-fact.herokuapp.com/facts")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCatData(data.all);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {catData && <RandomCatFact catData={catData} />}
        {catData && <FactList catData={catData} />}
      </header>
    </div>
  );
};
