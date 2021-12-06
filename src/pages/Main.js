import React from "react";
import HomePage from "./HomePage";
import { HashRouter, Route } from "react-router-dom";
const Main = () => {
  return (
    <HashRouter basename="/tailreact">
      <Route exact path="/" component={HomePage} />
    </HashRouter>
  );
};

export default Main;
