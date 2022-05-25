import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
// import logo from './logo.png'
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "@material-ui/core";
import amcharts  from "./images/amcharts.png"
import flask from "./images/flask.png"
import materialui from "./images/materialui.png"
import reactjs from "./images/reactjs.png"
import tensorflow from "./images/tensorflow.png"
import PyTorch from "./images/Pytorch.png"
import whatsapp from "./images/whatsapp.png"
import twilio from "./images/twilio.jpg"


const useStyles = makeStyles({
  grid: {
      padding: '15px',
  },
  media: {
    height: 180,
  },
  cardHeight:{
    maxWidth: 250,
    height : 380,
    backgroundColor: "#333333",
    color: "white",
    opacity: .8,
  },
  Link: {
    color: "Lightgreen",  
  },
});



const Techstack = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid container>
        <Grid className={classes.grid} item xs={12} sm={6} md={3} lg={3} >
          <Card className={classes.cardHeight} spacing={4}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={tensorflow}
                title="Tensorflow JS"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  TensorFlow
                </Typography>
                <Typography variant="body2" component="p">
                  TensorFlow is an hardware-accelerated library for training and deploying ML models, based on differentiable programming.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              {/* <Link to="https://www.tensorflow.org/js" > */}
              <Button size="small" color="primary">
                <Link className={classes.Link} href="https://tensorflow.org/">See More</Link>
              </Button>
              {/* </Link>  */}
            </CardActions>
          </Card>
        </Grid>
        <Grid className={classes.grid} item xs={12} sm={6} md={3} lg={3}>
          <Card className={classes.cardHeight} spacing={4}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={PyTorch}
                title="PyTorch"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  PyTorch
                </Typography>
                <Typography variant="body2" component="p">
                  It is an open source ML library based on the Torch library, used for computer vision, natural language processing, Etc.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              {/* <Link to="https://www.tensorflow.org/js" > */}
              <Button size="small" color="primary">
                <Link className={classes.Link} href="https://pytorch.org">See More</Link>
              </Button>
              {/* </Link>  */}
            </CardActions>
          </Card>
        </Grid>
        <Grid className={classes.grid} item xs={12} sm={6} md={3} lg={3}>
          <Card className={classes.cardHeight} spacing={4}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={reactjs}
                title="React JS"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  ReactJS
                </Typography>
                <Typography variant="body2" component="p">
                  React is a JavaScript library for building user interfaces. It
                  is maintained by Facebook and a large Community.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              {/* <Link to="https://www.tensorflow.org/js" > */}
              <Button size="small" color="primary">
                <Link className={classes.Link} href="https://reactjs.org/">See More</Link>
              </Button>
              {/* </Link>  */}
            </CardActions>
          </Card>
        </Grid>
        <Grid className={classes.grid} item xs={12} sm={6} md={3} lg={3}>
          <Card className={classes.cardHeight} spacing={4}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={flask}
                title="Flask"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Flask
                </Typography>
                <Typography variant="body2" component="p">
                  Flask is a micro web framework written in Python, where pre-existing third-party libraries provide common functions.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                <Link className={classes.Link} href="https://flask.palletsprojects.com/">See More</Link>
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid className={classes.grid} item xs={12} sm={6} md={3} lg={3}>
          <Card className={classes.cardHeight} spacing={4}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={materialui}
                title="Material UI"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Material UI
                </Typography>
                <Typography variant="body2" component="p">
                  Material UI provides React components implementing <Link className={classes.Link} href="https://material.io/">Google's Material Design</Link>
                  specification
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              {/* <Link to="https://www.tensorflow.org/js" > */}
              <Button size="small" color="primary">
                <Link className={classes.Link} href="https://material-ui.com/">See More</Link>
              </Button>
              {/* </Link>  */}
            </CardActions>
          </Card>
        </Grid>
        <Grid className={classes.grid} item xs={12} sm={6} md={3} lg={3}>
          <Card className={classes.cardHeight} spacing={4}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={amcharts}
                title="AMcharts"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  AMcharts
                </Typography>
                <Typography variant="body2" component="p">
                  A go-to library for data visualization. When you need a simple yet powerful and flexible drop-in data visualization solution.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              {/* <Link to="https://www.tensorflow.org/js" > */}
              <Button size="small" color="primary">
                <Link className={classes.Link} href="https://amcharts.com/">See More</Link>
              </Button>
              {/* </Link>  */}
            </CardActions>
          </Card>
        </Grid>
        <Grid className={classes.grid} item xs={12} sm={6} md={3} lg={3}>
          <Card className={classes.cardHeight} spacing={4}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={whatsapp}
                title="WhatsApp"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  WhatsApp
                </Typography>
                <Typography variant="body2" component="p">
                  It is an American freeware, cross-platform centralized messaging and voice-over-IP service owned by Facebook.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              {/* <Link to="https://www.tensorflow.org/js" > */}
              <Button size="small" color="primary">
                <Link className={classes.Link} href="https://whatsapp.com/">See More</Link>
              </Button>
              {/* </Link>  */}
            </CardActions>
          </Card>
        </Grid>
        <Grid className={classes.grid} item xs={12} sm={6} md={3} lg={3}>
          <Card className={classes.cardHeight} spacing={4}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={twilio}
                title="Twilio API"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Twilio API
                </Typography>
                <Typography variant="body2" component="p">
                  It allows programmatical phone calls, text messages, and perform other communication functions using its web service APIs.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              {/* <Link to="https://www.tensorflow.org/js" > */}
              <Button size="small" color="primary">
                <Link className={classes.Link} href="https://twilio.com/">See More</Link>
              </Button>
              {/* </Link>  */}
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};


export default Techstack;