import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import qg from "../landing/images/qg.png"
import "./askdemo.css"


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


function AskDemo() {
  const classes = useStyles();

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1 style={{ color: "Lightgreen" }}>QUESTION GENERATION (Q.G.) ARCHITECTURE</h1>
      <div className={classes.container}>
          <Paper square>
          <Grid container>
              <Grid style={{ backgroundColor: '#d6dffe'}} item md={12} sm={12} xs={12}>
                  <img src={ qg } className="start-img" alt="landing_image" />
                  <h2>Fig.4. Question Generation Architecture</h2>
              </Grid>
              <Grid item md={12} sm={12} xs={12} style={{ padding: "20px" }}>
                  <h4 style={{ textAlign: "left" }}>
                  <p>The straightforward Q.G. pipeline would be</p>
                  <ul>
                    <li>Handling long text</li>
                    <li>T5 Tokenizer</li>
                    <li>Generating Question</li>
                    <li>Grouping similar questions</li>
                    <li>Question Selection</li>
                  </ul>
                  <p>Every Question generated has a corresponding context and an answer. If the user interacts with the system, these questions can be selected and ranked according to his/ her choices. Given a distinct set of all the keywords (the subject to the generated questions), if the user selects a set of keywords, then, by performing a cosine similarity, the most relevant contexts are found, and questions generated.</p>
                  </h4>
              </Grid>
            </Grid>
            </Paper>
        </div>
    </div>
  );
  }
  
  export default AskDemo;