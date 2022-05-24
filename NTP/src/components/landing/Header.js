import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";
import { Button,Typography } from "@material-ui/core";
import "./Header.css";
import { Link } from "react-scroll";
import { useHistory } from "react-router-dom";

import "./Header.css";
// import logo from "./images/logo.png"
import logo from "./images/robot1.png"

const useStyles = makeStyles(theme => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  },
  appBar: {
    background: 'linear-gradient(90deg, rgba(36,44,78,1) 0%, rgba(49,61,100,1) 29%, rgba(63,78,128,1) 51%, rgba(47,58,98,1) 75%, rgba(36,44,78,1) 100%)',
    zIndex: theme.zIndex.drawer + 1,
  },
  toolBar: {
    width: '100vw',
    height: '10vh',
    overflowY: 'auto',
  },
  logoTypo: {
    marginLeft: "10px",
    fontFamily: "Verdana, Geneva, sans-serif",
  },
  iconContainer: {
    marginLeft: "400px",
    padding: "10px 20px",
  },
}));

const ScrollTop = props => {
  const { children, window } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100
  });

  const handleClick = event => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func
};

const BackToTop = props => {
  const classes = useStyles();
  let history = useHistory();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar className={classes.appBar} style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Toolbar className={classes.toolBar}>
        <img
            src={logo}
            className="nav-logo"
            alt="Logo"
            width="30"
            height="30"
          />
        <Typography className={classes.logoTypo}>
          NTP
        </Typography>
        <span className={classes.iconContainer}>
          <Button variant="h6">
            <Link
            activeClass="active"
            to="section1"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Home
          </Link>
          </Button>
          <Button variant="h6">
          <Link
            activeClass="active"
            to="section3"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            ABOUT
          </Link>
          </Button>
          <Button variant="h6">
            <Link
              activeClass="active"
              to="section2"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              features
            </Link>
          </Button>
          <Button variant="h6">
          <Link
            activeClass="active"
            to="section5"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Tech-Stack
          </Link>
          </Button>
          <Button variant="h6">
          <Link
            activeClass="active"
            to="section4"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Team
          </Link>
          </Button>
          <Button variant="contained" color="primary" onClick={() => history.push("/dashboard")}>
            Go to Console
          </Button>
          </span>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <ScrollTop {...props}>
        <Fab color="primary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}

export default BackToTop;