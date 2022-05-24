import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import whatsapp from "../landing/images/whatsapp.png"
import "./Default.css"

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

function Default() {

    const classes = useStyles();

    return (
      <div style={{ textAlign: "center", padding: "40px" }}>
        <h1 style={{ color: "Lightgreen" }}>DEMONSTRATION OF Q.A. & Q.G. MODELS</h1>
        <div className={classes.container}>
          <Paper square>
              <Grid container>
                  <Grid style={{ backgroundColor: '#d6dffe'}} item md={12} sm={12} xs={12}>
                      <div>
                          <div className={classes.dropzoneContainer}>
                              <div style={{ marginTop: '30px', marginBottom: '30px' }}>
                                  <img src={whatsapp} className="start-img" alt="upload_logo" />
                              </div>
                          </div>
                      </div>
                  </Grid>
                  <Grid item md={12} sm={12} xs={12} style={{ padding: "20px" }}>
                    <h4 style={{ textAlign: "left" }}>
                    <p>The Entire System is Deployed on WhatsApp, hence it can be used via WhatsApp mobile App or WhatsApp Web or WhatsApp Desktop.</p>
                    <p>Steps to Access the Virtual Assistant:</p>
                    <ol>
                      <h4 style={{ textAlign: "left", color: "#c9caea" }}><li><i>Add : +1 (415) 523-8886 to your Contact List under "It's Lasagne".</i></li></h4>
                      <h4 style={{ textAlign: "left", color: "#c9caea" }}><li><i>Open "It's Lasagne" Chat in WhatsApp.</i></li></h4>
                      <h4 style={{ textAlign: "left", color: "#c9caea" }}><li><i>Type "Join notice-square" to start the chatbot.</i></li></h4>
                      <h4 style={{ textAlign: "left", color: "#c9caea" }}><li><i>Enjoy the Virtual Assistant.</i></li></h4>
                    </ol>
                    <p><b>NOTE:</b>If the servers are down from our end, then the bot wont work.</p>
                    </h4>
                  </Grid>
              </Grid>
          </Paper>
        </div>
      </div>
    );
  }
  
  export default Default;