import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import system from "../landing/images/NTP_System_Architecture.png"
import "./activity.css"


const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
    },
    container: {
        padding: '30px',
    },
    dropzone: {
        margin: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        border: '2px dashed #1c233e', 
        height: '100%',
        padding: '16px 11px',
        borderRadius: '5px',
        background: 'linear-gradient(90deg, rgba(36,44,78,1) 0%, rgba(49,61,100,1) 29%, rgba(63,78,128,1) 51%, rgba(47,58,98,1) 75%, rgba(36,44,78,1) 100%)',
    },
    dropzoneContainer: {
        textAlign: 'center',
    },
    browseButton: {
        textTransform: 'none',
        backgroundColor: '#1273eb', 
        color: '#fff',
        padding: '10px',
        paddingLeft: '15px',
        paddingRight: '15px',
        "&:hover": {
            backgroundColor: '#0a045e'
        }
    },
    drag: {
        color: '#000',
        fontSize: '20px',
        fontWeight: '500',
    },
    or: {
        color: '#0a045e',
        fontSize: '15px',
        fontWeight: '400',
    }
}));


function Activity() {
  const classes = useStyles();

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1 style={{ color: "Lightgreen" }}>NTP SYSTEM ARCHITECTURE</h1>
      <div className={classes.container}>
          <Paper square>
          <Grid container>
              <Grid style={{ backgroundColor: '#d6dffe'}} item md={12} sm={12} xs={12}>
                  <img src={ system } className="start-img" alt="System Architecture" />
                  <h2>System Architecture</h2>
              </Grid>
            </Grid>
            </Paper>
        </div>
    </div>
  );
  }
  
  export default Activity;