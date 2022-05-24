import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import qa from "../landing/images/qa.png"
import "./QADemo.css"


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


function QADemo() {
  const classes = useStyles();

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1 style={{ color: "Lightgreen" }}>QUESTION ANSWERING (Q.A.) MODEL ARCHITECTURE</h1>
      <div className={classes.container}>
          <Paper square>
          <Grid container>
              <Grid style={{ backgroundColor: '#d6dffe'}} item md={12} sm={12} xs={12}>
                  <img src={ qa } className="start-img" alt="landing_image" />
                  <h2>Fig.3. Question Answering Architecture</h2>
              </Grid>
              <Grid item md={12} sm={12} xs={12} style={{ padding: "20px" }}>
                  <h4 style={{ textAlign: "left" }}>
                  <p>Given a document, assuming that not every sentence or paragraph is relevant to the query, not all metadata needs to follow the Q.A. pipeline. With the help of a probabilistic relevance model, the document can be filtered and eliminate a majority of the text by ranking texts/documents based on the relevance with a given search query. The Okapi(BM25), a weighting scheme framework, the best-known derivative of the probabilistic relevance model, can rank the text and efficiently query only the informative and relevant text.</p>
                  <p>A neural network-based deep learning model for performing N.L.P. tasks, trained on the S.Q.U.A.D.2.0 dataset, can accurately extract the selected content is required to answer. B.E.R.T. [13][15] (Bidirectional Encoder Representations from Transformers), A.L.B.E.R.T. (Acoustic and Laryngeal Biofeedback Enhancement Real-Time), E.L.E.C.T.R.A. (Efficiently Learning an Encoder that Classifies Token Replacements Accurately), Etc. are some of the widely accepted architecture designs for the Q.A. task.</p>
                  <p>The given architecture can be built on top of any existing Q.A. models to increase its efficiency.</p>
                  </h4>
              </Grid>
            </Grid>
            </Paper>
        </div>
    </div>
  );
  }
  
  export default QADemo;