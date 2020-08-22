import React, { useState, useEffect } from "react";
import "./App.css";
import { RandomCatFact } from "./RandomNumber";
import { FactList } from "./FactList";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
    <Router>
      <div className="App">
        <header>
          <ul>
            <li>
              <Link to="/">RandomCatFact</Link>
            </li>
            <li>
              <Link to="/comments">comments</Link>
            </li>
          </ul>
        </header>
        <div className="App-header">
          <Switch>
            <Route exact path="/">
              {catData && <RandomCatFact catData={catData} />}
              {catData && <FactList catData={catData} />}
            </Route>
            <Route path="/comments">
              <div>comments</div>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};
