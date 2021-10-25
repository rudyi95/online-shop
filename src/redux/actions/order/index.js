import * as TYPES from "./types";

const setCheckedOutItemsHandler = (items) => ({
  type: TYPES.SET_CHECKEDOUT_ITEMS,
  payload: items,
});
const setLoggedInUserHandler = (payload) => ({
  type: TYPES.SET_LOGGED_IN_USER,
  payload,
});

const setCheckedOutItems = (data) => {
  return (dispatch) => dispatch(setCheckedOutItemsHandler(data));
};
const setLoggedInUser = (data) => {
  return (dispatch) => dispatch(setLoggedInUserHandler(data));
};

export { setCheckedOutItems, setLoggedInUser };
