import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import { useDispatch } from 'react-redux';
import { openContactModal, openLoginModal } from '../../../actions/navActions'
import "./navbar.scss";

const pageList = {
  Home: { display: "Home", path: "" },
  AboutUs: { display: "About us", path: "" },
  Estimate: { display: "Get your quote", path: "" }
};

export default function NavBar () {

  const dispatch = useDispatch()

  function getPageItems() {
    return (
      <ul className="page-list">
        {Object.keys(pageList).map((item, index) => {
          return (
            <div key={item}>
              {index > 0 && <span className="nav-spacer">|</span>}
              <li
                className="nav-button"
                onClick={() => {
                  console.log("Let us run the script");
                }}
              >
                {pageList[item].display}
              </li>
            </div>
          );
        })}
      </ul>
    );
  }

  return (
    <>
      <div id="nav-bar">
        <div className="nav-bar-left">
          <IconButton
            edge="start"
            className="nav-menu-icon"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          {getPageItems()}
        </div>
        <div className="nav-bar-right">
          <div onClick={() => dispatch(openLoginModal())} className="nav-button">
            Login
          </div>
          <div onClick={() => dispatch(openContactModal())} className="nav-button">
            Contact Us
          </div>
        </div>
      </div>
      <div id="nav-spacer" />
    </>
  );
}
