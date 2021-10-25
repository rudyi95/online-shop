import { ORDER_ACTIONS } from "../actions/types";

const initialState = {
  checkedOutItems: [],
  authorized: false,
  loggedInUser: null,
};

const orderReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ORDER_ACTIONS.SET_CHECKEDOUT_ITEMS: {
      console.log(action);
      return { ...state, checkedOutItems: payload };
    }

    case ORDER_ACTIONS.SET_LOGGED_IN_USER: {
      return state;
    }

    case ORDER_ACTIONS.LOGOUT: {
      return state;
    }

    default:
      return state;
  }
};

export default orderReducer;
