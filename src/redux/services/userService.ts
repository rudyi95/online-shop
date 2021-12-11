import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";

export const addUser = createAsyncThunk(
  "user/add",
  async (data: User, thunkApi) => {
    try {
      const res = await api.addUser(data);
      return res;
    } catch (e) {
      return thunkApi.rejectWithValue((e as Error).message);
    }
  }
);
