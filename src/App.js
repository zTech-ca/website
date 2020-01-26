import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import store from "./store";
import NavBar from "./view/components/NavBar";
import Home from "./view/pages/Home";
import AboutUs from "./view/pages/AboutUs";
import Estimate from "./view/pages/Estimate";

export default class App extends React.Component {
  constructor() {
    super();
    console.log("Starting the entire app...");
    console.log(
      "Here, the app should start making api call to check for use regsitration etc."
    );
  }

  render() {
    return (
      <Provider store={store}>
        <NavBar />
        <BrowserRouter>
          <Route path="/" exact component={Home} />
          <Route path="/aboutus" exact component={AboutUs} />
          <Route path="/estimate" exact component={Estimate} />
        </BrowserRouter>
      </Provider>
    );
  }
}
