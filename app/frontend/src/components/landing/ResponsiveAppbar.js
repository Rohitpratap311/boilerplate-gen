import React from 'react';
// import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './Header';
import IconButton from '@material-ui/core/IconButton';
// import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Lasange from '../landing/images/robot1.png'

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    background: 'linear-gradient(90deg, rgba(36,44,78,1) 0%, rgba(49,61,100,1) 29%, rgba(63,78,128,1) 51%, rgba(47,58,98,1) 75%, rgba(36,44,78,1) 100%)',
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  logoTypo: {
    marginLeft: "10px",
    fontFamily: "Verdana, Geneva, sans-serif",
  },
  Typo: {
    marginRight: "10px",
    fontFamily: "Verdana, Geneva, sans-serif",
  },
}));

const ResponsiveAppbar = props => {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5">
            <Typography className={classes.logoTypo} variant="h6">
              <img
                src={Lasange}
                className="nav-logo"
                alt="Logo"
                width="30"
                height="30"
              />
              <span style={{ paddingLeft: '20px' }}>NTP</span>
            </Typography>
          </Typography>
        </Toolbar>
      </AppBar>
        <Header 
          theme={theme}
          container={container}
          handleDrawerToggle={handleDrawerToggle}
          mobileOpen={mobileOpen}
          setMobileOpen={setMobileOpen}
        />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </div>
  );
}

ResponsiveAppbar.propTypes = {
  container: PropTypes.any,
};

export default ResponsiveAppbar;