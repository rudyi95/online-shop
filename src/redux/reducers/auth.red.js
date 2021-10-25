import { LOGIN, SIGNUP, LOGOUT } from "../actions/auth/types";
const initialState = {
  isAuth: false,
  login: {
    token: "",
    userId: "",
  },
};

const loginHandler = (state, payload) => {
  state = { isAuth: true, login: { ...payload } };
  localStorage.setItem(
    "userData",
    JSON.stringify({
      userId: state.login.userId,
      token: state.login.token,
    })
  );

  return state;
};

const signUpHandler = (state, payload) => {
  return state;
};

const logOut = (state) => {
  state = { ...state, ...initialState };
  localStorage.clear();
  return state;
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN: {
      return loginHandler(state, payload);
    }
    case LOGOUT: {
      return logOut(state);
    }
    case SIGNUP: {
      return signUpHandler(state, payload);
    }
    default: {
      return state;
    }
  }
};

export default authReducer;
