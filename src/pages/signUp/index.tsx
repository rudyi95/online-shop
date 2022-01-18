import React from "react";
import { useFormik } from "formik";
import { TextField, Button } from "@mui/material";

import { useAppDispatch } from "../../redux/hooks/redux";
import { addUser } from "../../redux/services/userService";

import { useStyles } from "./style";

const Login = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
      name: {
        firstname: "",
        lastname: "",
      },
      address: {
        city: "",
        street: "",
        number: 0,
        zipcode: "",
        geolocation: {
          lat: "",
          long: "",
        },
      },
      phone: "",
    },
    onSubmit: (value: User) => {
      dispatch(addUser(value));
    },
  });
  return (
    <div className={classes.root}>
      <form onSubmit={formik.handleSubmit} className={classes.container}>
        <div className={classes.headText}>Реєстрація</div>
        <div className={classes.items}>
          <TextField
            id="name.firstname"
            name="name.firstname"
            type="text"
            placeholder="First Name"
            onChange={formik.handleChange}
            value={formik.values.name.firstname}
          />
          <TextField
            id="username"
            name="username"
            type="text"
            placeholder="Username"
            onChange={formik.handleChange}
            value={formik.values.username}
          />
          <TextField
            id="name.lastname"
            name="name.lastname"
            type="text"
            placeholder="Last Name"
            onChange={formik.handleChange}
            value={formik.values.name.lastname}
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

export default Login;
