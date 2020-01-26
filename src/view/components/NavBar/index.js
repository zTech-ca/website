import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import "./navbar.scss";

const pageList = {
  Home: { display: "Home", path: "" },
  AboutUs: { display: "About us", path: "" },
  Estimate: { display: "Get your quote", path: "" }
};

export default class NavBar extends React.Component {
  getPageItems() {
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

  contactRequested() {
    console.log("now start contacting us");
  }

  loginClicked() {
    console.log("clicked the login button");
  }

  render() {
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
            {this.getPageItems()}
          </div>
          <div className="nav-bar-right">
            <div onClick={this.loginClicked} className="nav-button">
              Login
            </div>
            <div onClick={this.contactRequested} className="nav-button">
              Contact Us
            </div>
          </div>
        </div>
        <div id="nav-spacer" />
      </>
    );
  }
}

// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1
//   },
//   menuButton: {
//     marginRight: theme.spacing(2)
//   },
//   title: {
//     flexGrow: 1
//   }
// }));

// export default function NavBar() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton
//             edge="start"
//             className={classes.menuButton}
//             color="inherit"
//             aria-label="menu"
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" className={classes.title}>
//             Home
//           </Typography>
//           <Typography variant="h6" className={classes.title}>
//             About Us
//           </Typography>
//           <Typography variant="h6" className={classes.title}>
//             About Us
//           </Typography>
//           <Button color="inherit">Login</Button>
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// }
