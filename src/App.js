import React from "react";
import "./index.css";
import Homepage from "./components/Homepage";
import Impressum from "./components/Impressum";
import Datenschutz from "./components/Datenschutz";
import { BrowserRouter, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact component={Homepage}></Route>
        <Route path="/impressum" exact component={Impressum}></Route>
        <Route path="/datenschutz" exact component={Datenschutz}></Route>
      </BrowserRouter>
    </div>
  );
};

export default App;
