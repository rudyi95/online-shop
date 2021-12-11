import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addUser } from "../services/userService";

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

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [addUser.fulfilled.type]: (state) => {
      state.loading = false;
      state.error = "";
      state.success = true;
    },
    [addUser.pending.type]: (state) => {
      state.loading = true;
    },
    [addUser.rejected.type]: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.token = "";
      state.error = action.payload;
      state.success = false;
    },
  },
});

export default userSlice.reducer;
