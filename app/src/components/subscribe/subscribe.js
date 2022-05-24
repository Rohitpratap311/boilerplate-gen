import React from "react";
import { useHistory, Link } from "react-router-dom";
import { Formik } from "formik";
import login from "./auth";
import { useHttpClient } from "../hooks/http-hook";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Lasange from '../landing/images/robot1.png'
// import Robot from "./robot.svg"
import Trial from "./trial.svg"
// import LoadingSpinner from "../utils/LoadingSpinner";
// import Alert from "@material-ui/lab/Alert";
import {
  Button,
  CssBaseline,
  TextField,
  Paper,
  Grid,
} from "@material-ui/core";
// import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundRepeat: "no-repeat",
    backgroundColor:"#008B8B",
    backgroundSize: "cover",
    backgroundPosition: "center",
    background: "#4682B4"
  },
  paper: {
    margin: theme.spacing(6, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  main: {
    background: "linear-gradient(90deg, rgba(36,44,78,1) 0%, rgba(49,61,100,1) 29%, rgba(63,78,128,1) 51%, rgba(47,58,98,1) 75%, rgba(36,44,78,1) 100%)"
  },
  logoTypo: {
    fontFamily: "Verdana, Geneva, sans-serif",
    alignItems: "center",
    color: "#FFFF00",
    margin: theme.spacing(0, 0, 2),
    textAlign: "center",
  },
}));

const Signup = () => {
  const { sendRequest } = useHttpClient();
  let history = useHistory();

  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image}><img src={Trial} alt="My logo" /></ Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Formik
            initialValues={{ email: '', country: '', first: '', last: '', phone: '' }}
            validate={values => {
                const errors = {};
                if (!values.email) {
                errors.email = 'Required';
                } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                errors.email = 'Invalid email address';
                }

                if (!values.first) {
                    errors.first = "Required";
                } else if (values.first.length > 20) {
                    errors.first = "FirstName should be less than 20 characters";
                }

                if (!values.last) {
                    errors.last = "Required";
                } else if (values.last.length > 20) {
                    errors.last = "LastName should be less than 20 characters";
                }

                // if (!values.country) {
                //     errors.country = "Required";
                // } else if (values.country.length > 45) {
                //     errors.country = "country Name should be less than 45 characters";
                // }

                if (!values.phone) {
                    errors.phone = "Required";
                } else if (values.phone.length > 10) {
                    errors.phone = "Phone Name should be of 10 digits";
                } else if (values.phone.length < 10) {
                    errors.phone = "Phone Name should be of 10 digits";
                }
                
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              const submitFormHandler = async (values) => {
                  console.log(values)
                try {
                  const responseData = await sendRequest(
                    process.env.REACT_APP_BACKEND_URL + "SignUp",
                    "POST",
                    JSON.stringify({
                        FirstName: values.first,
                        LastName: values.last,
                        email: values.email,
                        phone: values.phone,
                        country: values.country
                    }),
                    {
                      "Content-Type": "application/json",
                    }
                  );
                  login(responseData.data.ApiKey , null);
                //   console.log(responseData)
                  history.push("/dashboard");
                } catch (err) {
                  setSubmitting(false);
                  console.log(err);
                }
              };
              submitFormHandler(values);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              setFieldValue,
            }) => (
              <form className={classes.form} onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                <Grid item xs={12}>
                  <div className={classes.logoTypo}>
                    <img src={Lasange} alt="VIP" height="100px"/>
                    <Typography>GET YOUR API KEY HERE!!</Typography>
                  </div>
                </Grid>
                  
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="first"
                      variant="outlined"
                      fullWidth
                      label="First Name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.first}
                      autoFocus
                    />
                    <div style={{ margin: "10px", color: "red" }}>
                      {errors.first && touched.first && errors.first}
                    </div>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="outlined"
                      fullWidth
                      label="Last Name"
                      name="last"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.last}
                    />
                    <div style={{ margin: "10px", color: "red" }}>
                      {errors.last && touched.last && errors.last}
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="outlined"
                      fullWidth
                      label="Phone"
                      name="phone"
                      type="phone"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.phone}
                    />
                    <div style={{ margin: "10px", color: "red" }}>
                      {errors.phone && touched.phone && errors.phone}
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="outlined"
                      fullWidth
                      label="country"
                      name="country"
                      type="country"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.country}
                    />
                    <div style={{ margin: "10px", color: "red" }}>
                      {errors.country && touched.country && errors.country}
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      fullWidth
                      label="Email Address"
                      name="email"
                      type="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      autoComplete="email"
                    />
                    <div style={{ margin: "10px", color: "red" }}>
                      {errors.email && touched.email && errors.email}
                    </div>
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  disabled={isSubmitting}
                >
                  Sign Up
                </Button>
                <Grid container justify="flex-end">
                  <Grid item>
                    <Link
                      style={{ color: "#3f51b5", textDecoration: "none" }}
                      to="/"
                    >
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </form>
            )}
          </Formik>
        </div>
      </Grid>
    </Grid>
  );
};

export default Signup;