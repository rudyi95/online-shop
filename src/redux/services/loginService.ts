import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";
import storageService from "./storageService";

export const postLogin = createAsyncThunk(
  "login/signIn",
  async (data: loginData, thunkApi) => {
    try {
      const res = await api.login(data);
      if (res) storageService.set("token", res);
      return res;
    } catch (e) {
      return thunkApi.rejectWithValue((e as Error).message);
    }
  }
);

export const logout = () => () => {
  storageService.remove("token");
};
