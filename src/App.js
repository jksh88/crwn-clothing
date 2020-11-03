import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";

const HatsPagge = (props) => {
  console.log(props);
  return (
    <div>
      <h1>HatsPagge</h1>
      <Link to={`${props.match.url}/13`}>To HAT 13</Link>
      <Link to={`${props.match.url}/18`}>To HAT 18</Link>
      <Link to={`${props.match.url}/20`}>To HAT 20</Link>
    </div>
  );
};

const HatsDetail = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Hat Product ID: {props.match.params.hatsId}</h1>
    </div>
  );
};

const MensPage = (props) => (
  <div>
    <h1>Mens Page</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/hats" component={HatsPagge}></Route>
        <Route exact path="/hats/:hatsId" component={HatsDetail}></Route>
        <Route exact path="/mens" render={MensPage} />
        <Route exact path="/" render={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
