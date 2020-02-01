import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from "./view/components/NavBar";
import Footer from "./view/components/Footer";
import Home from "./view/pages/Home";
import AboutUs from "./view/pages/AboutUs";
import Estimate from "./view/pages/Estimate";
import Modal from "./view/components/Modal";
import { useSelector } from "react-redux"

export default function App () {

  const mode = useSelector(state => state.modal)

  return (
    <div>
      <NavBar />
      {mode && <Modal />}
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/aboutus" exact component={AboutUs} />
        <Route path="/estimate" exact component={Estimate} />
      </BrowserRouter>
      <Footer />
    </div>
  );

}
