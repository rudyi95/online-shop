import React, { /* useCallback, */ /* useContext */ } from "react";
import { /* Redirect, */ useHistory/* , useLocation */ } from "react-router-dom";
import { useFormik } from "formik";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { TextField, Button, Avatar } from "@mui/material";

import { useStyles } from "./style";

const Login = () => {
  const classes = useStyles();
  const history = useHistory();
  // const location = useLocation();

  // const handleSignIn = useCallback(
  //   async (event) => {
  //     console.log(event);
  //     const { email, password } = event;

  //     try {
  //       await app.auth().signInWithEmailAndPassword(email, password);
  //       history.push("/");
  //     } catch (err) {
  //       alert(err);
  //     }
  //     return false;
  //   },
  //   [history]
  // );

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (value) => {
      console.log(value)
    },
  });

  // const { from }: any = location.state || { from: { pathname: "/" } };

  // If user was authenticated, redirect her to where she came from.
  // if (currentUser) {
  //   return <Redirect to={from} />;
  // }

  return (
    <div className={classes.root}>
      <form onSubmit={formik.handleSubmit} className={classes.container}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <div className={classes.headText}>Увійти</div>
        <div className={classes.items}>
          <TextField
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <TextField
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <Button variant="outlined" color="primary" type="submit">
            Увійти
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => history.push("/register")}
          >
            Зареєструватися
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
