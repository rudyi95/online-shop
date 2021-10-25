// import api from "../../../api/auth";
import { /* LOGIN, */ LOGOUT } from "./types";

export const logInHandler = (value) => (dispatch) => {
  console.log(value)
  // api
  //   .postLogIn(value)
  //   .then((res) => {
  //     dispatch({
  //       type: LOGIN,
  //       payload: res.data,
  //     });
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
};

export const logOutHandler = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};
