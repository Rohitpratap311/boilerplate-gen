import React, { useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import { Formik } from "formik";
import login from "./auth";
import { useHttpClient } from "../hooks/http-hook";
import { AuthContext } from "./auth-context";
import { makeStyles } from "@material-ui/core/styles";
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
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "dark"
        ? theme.palette.grey[900]
        : theme.palette.grey[50],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
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
}));

const Signup = () => {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  let history = useHistory();

  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Formik
            initialValues={{ email: '', country: '', first: '', last: '', phone: '' }}
            validate={values => {
                const errors = {};
                // if (!values.email) {
                // errors.email = 'Required';
                // } else if (
                // !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                // ) {
                // errors.email = 'Invalid email address';
                // }

                // if (!values.first) {
                //     errors.first = "Required";
                // } else if (values.first.length > 20) {
                //     errors.first = "FirstName should be less than 20 characters";
                // }

                // if (!values.last) {
                //     errors.last = "Required";
                // } else if (values.last.length > 20) {
                //     errors.last = "LastName should be less than 20 characters";
                // }

                if (!values.ApiKey) {
                    errors.ApiKey = "Required";
                } else if (values.ApiKey.length > 20) {
                    errors.ApiKey = "Your API-KEY should be of 16 characters";
                }
                
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              const submitFormHandler = async (values) => {
                  console.log(values)
                try {
                  const responseData = await sendRequest(
                    process.env.REACT_APP_BACKEND_URL + "Login",
                    "POST",
                    JSON.stringify({
                        ApiKey: values.ApiKey,
                        // LastName: values.last,
                        // email: values.email,
                    }),
                    {
                      "Content-Type": "application/json",
                    }
                  );
                  login(responseData.data.ApiKey , null);
                  console.log(responseData)
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
                    <TextField
                      variant="outlined"
                      fullWidth
                      label="API-KEY"
                      name="ApiKey"
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      autoComplete="ApiKey"
                    />
                    <div style={{ margin: "10px", color: "red" }}>
                      {errors.ApiKey && touched.ApiKey && errors.ApiKey}
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
                  Login
                </Button>
                <Grid container justify="flex-end">
                  <Grid item>
                    <Link
                      style={{ color: "#3f51b5", textDecoration: "none" }}
                      to="/SignUp"
                    >
                      Don't have an account? Sign Up
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