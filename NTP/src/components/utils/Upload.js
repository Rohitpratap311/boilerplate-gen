import React from 'react';
import MagicDropzone from 'react-magic-dropzone';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Avatar from '@material-ui/core/Avatar';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
// import logo from './Upload.svg';

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

const Upload = () => {
    const classes = useStyles();
    var pdf_name = "";

    const onDrop = (accepted, rejected, links) => {
        if (accepted && accepted.length > 0) {
            console.log(accepted[0],accepted[1])
            pdf_name = accepted[0]['name'];
            console.log(pdf_name);
        }
        else{
            alert("Upload PDFs or files with .pdf extensions!!")
        }
    }

    return (
        <div className={classes.container}>
            <Paper square>
                <Grid container>
                    <Grid style={{ backgroundColor: '#d6dffe'}} item md={7} sm={12} xs={12}>
                        <div>
                            <MagicDropzone 
                                className={classes.dropzone} 
                                accept=".pdf" 
                                multiple={true} 
                                onDrop={onDrop}
                            >
                                <div className={classes.dropzoneContainer}>
                                    <div style={{ marginTop: '30px', marginBottom: '30px' }}>
                                        {/* <img width="100" src={logo} alt="upload_logo" /> */}
                                        <ListItemIcon><Avatar><CloudUploadIcon fontSize='small' /></Avatar></ListItemIcon>
                                        <p className={classes.drag}>Drag and drop PDFs here</p>
                                        <p className={classes.or}>or</p>
                                        <Button className={classes.browseButton}>Browse PDFs</Button>
                                    </div>
                                </div>
                            </MagicDropzone>
                        </div>
                    </Grid>
                    <Grid item md={5} sm={12} xs={12}>
                        <h1>h</h1>
                        {pdf_name}

                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}

export default Upload;