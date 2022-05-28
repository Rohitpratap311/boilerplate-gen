import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
// import system from "../landing/images/System Architecture.png"
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
              {/* <Grid style={{ backgroundColor: '#d6dffe'}} item md={12} sm={12} xs={12}>
                  <img src={ system } className="start-img" alt="landing_image" />
                  <h2>Fig.3. System Architecture</h2>
              </Grid> */}
              <Grid item md={12} sm={12} xs={12} style={{ padding: "20px" }}>
                  <h4 style={{ textAlign: "left" }}>
                  <p>To provide high speed, automatic software integration, back-ups, mobility, Etc., The proposed system is a cloud-based solution. DigitalOcean, an Infrastructure as a service (IaaS) provider, is used.</p>
                  <p>General users using the system interact with a chatbot having a WhatsApp Interface. The chatbot is integrated with a Google-owned framework, DialogFlow, with a trained intent to help the users interact in a natural language. Every text entered by the user is forwarded to the web server via Twilio API services. Twilio API acts as a mediator between the WhatsApp Interface and Q.A. /Q.G. APIs that can handle texts, images, pdfs, docs, and many more.</p>
                  <p>Reverse proxying helps to use the VMs efficiently, providing a level of abstraction and smooth network traffic control. NGINX, an open-source software, helps load balancing, caching, web serving, and reverse proxying, making the underlying APIs readily available. So, the NGINX Container wraps the WebApp containing Q.A./Q.G APIs. Further dockerizing this container.</p>
                  <p>Considering that not just one user is active on the system, the load at the web servers increases, and this network traffic needs to be regulated. The droplets can be horizontally scaled to increase the availability of the WebApps, and a load balancer can monitor this. HAProxy (High Availability Proxy), a load balancer, helps control the incoming requests and distribute them between the droplets in a Round-Robin fashion.</p>
                  </h4>
              </Grid>
            </Grid>
            </Paper>
        </div>
    </div>
  );
  }
  
  export default Activity;