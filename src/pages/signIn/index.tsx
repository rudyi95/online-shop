import React /* useCallback, */ /* useContext */ from "react";
import { Redirect, useHistory, useLocation } from "react-router-dom";
import { useFormik } from "formik";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { TextField, Button, Avatar } from "@mui/material";

import { useAppDispatch, useAppSelector } from "../../redux/hooks/redux";
import { useStyles } from "./style";
import { postLogin } from "../../redux/services/loginService";

const Login = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useAppDispatch();
  const location = useLocation();
  const { success } = useAppSelector((state) => state.login);

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
      username: "",
      password: "",
    },
    onSubmit: (value: loginData) => {
      dispatch(postLogin(value));
    },
  });

  const { from }: any = location.state || { from: { pathname: "/" } };

  // If user was authenticated, redirect her to where she came from.
  if (success) {
    return <Redirect to={from} />;
  }

  return (
    <div className={classes.root}>
      <form onSubmit={formik.handleSubmit} className={classes.container}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <div className={classes.headText}>Увійти</div>
        <div className={classes.items}>
          <TextField
            id="username"
            name="username"
            type="text"
            placeholder="Username"
            onChange={formik.handleChange}
            value={formik.values.username}
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
