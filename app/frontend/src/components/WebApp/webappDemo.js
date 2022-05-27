import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
// import qa from "../landing/images/qa.png"
import "./webapp.css"
import { Button } from '@material-ui/core';
import download from 'downloadjs';
import axios from 'axios';


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


function generate_boilerplate(frontend="Angular", backend="Flask"){
    var ApiURL = `https://aerothon-boilerplate-gen.herokuapp.com/`;
    return axios({
            url: ApiURL + `generate/${frontend}/${backend}`,
            method:'GET',
            headers:{
                'Content-Type': 'multipart/form-data',
                withCredentials:true,


            },
            responseType:'arraybuffer' // If we don't mention we can't get data in desired format
        })
        .then(async response => {
            console.log("got all files in api ");
            // let blob = await new Blob([response.data], { type: 'application/zip' }) //It is optional

            download(response.data,"NTP.zip","application/zip") //this is third party it will prompt download window in browser.
            alert(`BoilerPlate Successfully generated! (Frontend: ${frontend}, Backend: ${backend})`);
            return response.data;
        })
}


function QADemo() {
  const classes = useStyles();
  const initialValues = { dev:"WebApp", frontend: "React", backend: "FastAPI", db:"Localdb"}
  const [formValues, setFormValues] = useState(initialValues);
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };


  const handleSubmit = (event) => {
    console.log(formValues);
    event.preventDefault();
    if (formValues.dev === "AR_VR"|| formValues.frontend === "HTML5" || formValues.backend === "NodeJS" || formValues.db === "MongoDB"){
        alert("Select Available Techstacks!")
        setIsSubmit(false);
    } else{
        generate_boilerplate(formValues.frontend, formValues.backend);
        setIsSubmit(true);
    }
  };


  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1 style={{ color: "Lightgreen" }}>Jumpstart your Development with us!!</h1>
      <div className={classes.container}>
            <Paper square style={{ padding: "30px"}}>
            { isSubmit && (formValues.dev !== "AR_VR"|| formValues.frontend !== "HTML5" || formValues.backend !== "NodeJS" || formValues.db !== "MongoDB") ? (
                <h3 style={{ color: "white" }}>BoilerPlate Successfully Generated and Downloaded!!</h3>
            ) : (
                <h3 style={{ color: "white" }}>Please select your preferred Tech-Stacks</h3>
            )}
            <form onSubmit={handleSubmit}>
                <Grid container>
                    <Grid md={6} sm={6} style={{ padding: "20px" }}>
                        <label style={{ display: "block", padding: "5px" }}>Type of Development</label>
                        <div class="select-dropdown">
                            <select
                                name="dev"
                                onChange={handleChange}
                            >
                                <option value="WebApp">Web Development</option>
                                <option value="MobileApp">Mobile Development</option>
                                <option value="AR_VR">AR/VR (coming soon)</option>
                            </select>
                        </div>
                    </Grid>
                    
                    <Grid md={6} sm={6} style={{ padding: "20px" }}>
                        <label style={{ display: "block", padding: "5px" }}>Frontend FrameWork</label>
                        <div class="select-dropdown">
                            { formValues.dev === "WebApp" ? (
                                <select
                                    name="frontend"
                                    onChange={handleChange}
                                >
                                    <option value="React">React JS</option>
                                    <option value="Angular">Angular JS</option>
                                    <option value="HTML">HTML 5(coming soon)</option>
                                </select>
                            ) : formValues.dev === "MobileApp" ? (
                                <select
                                    name="frontend"
                                    onChange={handleChange}
                                >
                                    <option value="Flutter">Flutter (coming soon)</option>
                                    <option value="ReactNative">React Native (coming soon)</option>
                                </select>
                            ) : (
                                <select
                                    name="frontend"
                                    onChange={handleChange}
                                >
                                    {/* <option value="Flutter">Flutter (coming soon)</option>
                                    <option value="ReactNative">React Native (coming soon)</option> */}
                                </select>
                            )}
                                
                            {/* </select> */}
                        </div>
                    </Grid>

                    <Grid md={6} sm={6} style={{ padding: "20px" }}>
                        <label style={{ display: "block", padding: "5px" }}>Backend FrameWork</label>
                        <div class="select-dropdown">
                            <select
                                name="backend"
                                onChange={handleChange}
                            >
                                <option value="FastAPI">FastAPI</option>
                                <option value="Flask">Flask</option>
                                <option value="Springboot">SpringBoot</option>
                                <option value="NodeJS">NodeJS (coming soon)</option>
                            </select>
                        </div>
                    </Grid>

                    <Grid md={6} sm={6} style={{ padding: "20px" }}>
                        <label style={{ display: "block", padding: "5px" }}>Database</label>
                        <div class="select-dropdown">
                            { formValues.backend === "FastAPI"|| formValues.backend === "Flask" ? (
                                <select
                                    name="db"
                                    onChange={handleChange}
                                >
                                    <option value="localDB">LocalDB</option>
                                </select>
                            ): formValues.backend === "Springboot" ? (
                                <select
                                    name="db"
                                    onChange={handleChange}
                                >
                                    <option value="SQL">MySQL</option>
                                </select>
                            ): (
                                <select
                                    name="db"
                                    onChange={handleChange}
                                >
                                    <option value="MongoDB">MongoDB(coming soon)</option>
                                </select>
                            )}
                        </div>
                    </Grid>
                </Grid>
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    // onClick={ () => generate_boilerplate("React","FastAPI") }
                >
                    Download Combination
                </Button>
            </form>
            </Paper>
        </div>
    </div>
  );
  }
  
  export default QADemo;