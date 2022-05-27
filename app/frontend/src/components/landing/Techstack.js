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
import Flutter  from "./images/flutter.jpeg"
import flask from "./images/flask.png"
import springboot from "./images/springboot.png"
import reactjs from "./images/reactjs.png"
import angular from "./images/angular.jpg"
import fastapi from "./images/fastapi.jpg"
import ReactNative from "./images/ReactNative.jpg"
import mySQL from "./images/mySQL.jpg"


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
                image={angular}
                title="Angular JS"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Angular JS
                </Typography>
                <Typography variant="body2" component="p">
                  A JavaScript-based open-source front-end web framework for developing single-page applications.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              {/* <Link to="https://www.tensorflow.org/js" > */}
              <Button size="small" color="primary">
                <Link className={classes.Link} href="https://angular.io/">See More</Link>
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
                image={fastapi}
                title="FastAPI"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  FastAPI
                </Typography>
                <Typography variant="body2" component="p">
                  A Web framework for developing RESTful APIs in Python. FastAPI is based on Pydantic and type hints to validate & serialize data.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              {/* <Link to="https://www.tensorflow.org/js" > */}
              <Button size="small" color="primary">
                <Link className={classes.Link} href="https://fastapi.tiangolo.com/">See More</Link>
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
                image={springboot}
                title="Material UI"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  SpringBoot
                </Typography>
                <Typography variant="body2" component="p">
                  The Spring Framework is an application framework and inversion of control container for the Java platform.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              {/* <Link to="https://www.tensorflow.org/js" > */}
              <Button size="small" color="primary">
                <Link className={classes.Link} href="https://spring.io/">See More</Link>
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
                image={Flutter}
                title="Flutter"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Flutter
                </Typography>
                <Typography variant="body2" component="p">
                  An open-source UI software development kit created by Google. It is used to develop cross platform applications.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              {/* <Link to="https://www.tensorflow.org/js" > */}
              <Button size="small" color="primary">
                <Link className={classes.Link} href="https://flutter.dev/">See More</Link>
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
                image={ReactNative}
                title="ReactNative"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  React-Native
                </Typography>
                <Typography variant="body2" component="p">
                  An open-source UI software framework created by Meta Platforms. It is used to develop cross-platform applications.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              {/* <Link to="https://www.tensorflow.org/js" > */}
              <Button size="small" color="primary">
                <Link className={classes.Link} href="https://reactnative.dev/">See More</Link>
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
                image={mySQL}
                title="mySQL"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  MySQL
                </Typography>
                <Typography variant="body2" component="p">
                  MySQL is a widely used relational database management system (RDBMS). It is free and open-source.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              {/* <Link to="https://www.tensorflow.org/js" > */}
              <Button size="small" color="primary">
                <Link className={classes.Link} href="https://www.mysql.com/">See More</Link>
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