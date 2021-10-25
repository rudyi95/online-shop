import React/* , { useCallback } */ from "react";
import { useFormik } from "formik";
import { TextField, Button } from "@material-ui/core";

import { useStyles } from "./style";
import { /* useHistory, */ withRouter } from "react-router";

const Login = () => {
  const classes = useStyles();
  // const history = useHistory();

  // const handleSignUp = useCallback(
  //   async (event) => {
  //     const { email, password } = event;

  //     try {
  //       await app.auth().createUserWithEmailAndPassword(email, password);
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
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    onSubmit: (value) => {
      console.log(value);
    },
  });
  return (
    <div className={classes.root}>
      <form onSubmit={formik.handleSubmit} className={classes.container}>
        <div className={classes.headText}>Реєстрація</div>
        <div className={classes.items}>
          <TextField
            id="firstName"
            name="firstName"
            type="text"
            placeholder="First Name"
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
          <TextField
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Last Name"
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
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
            Зареєструватися
          </Button>
        </div>
      </form>
    </div>
  );
};

export default withRouter(Login);
