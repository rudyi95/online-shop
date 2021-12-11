import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { postLogin } from "../services/loginService";

interface IProps {
  loginData: {
    username: string;
    password: string;
  };
  token: string;
  loading: boolean;
  success: boolean;
  error: string;
}

export const initialState: IProps = {
  loginData: {
    username: "",
    password: "",
  },
  token: "",
  loading: false,
  success: false,
  error: "",
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: {
    [postLogin.fulfilled.type]: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = "";
      state.token = action.payload;
      state.success = true;
    },
    [postLogin.pending.type]: (state) => {
      state.loading = true;
    },
    [postLogin.rejected.type]: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.token = "";
      state.error = action.payload;
      state.success = false;
    },
  },
});

export default loginSlice.reducer;
