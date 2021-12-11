import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";

export const getAllProducts = createAsyncThunk(
  "products/getAll",
  async (_, thunkApi) => {
    try {
      const res = await api.getAllProducts();
      return res;
    } catch (e) {
      return thunkApi.rejectWithValue((e as Error).message);
    }
  }
);

export const getAllProductsInCategory = createAsyncThunk(
  "products/getByCategory",
  async (category: string, thunkApi) => {
    try {
      const res = await api.getProductInCategory(category);
      return res;
    } catch (e) {
      return thunkApi.rejectWithValue((e as Error).message);
    }
  }
);

export const getProductById = createAsyncThunk(
  "products/getById",
  async (id: number, thunkApi) => {
    try {
      const res = await api.getProductById(id);
      return res;
    } catch (e) {
      return thunkApi.rejectWithValue((e as Error).message);
    }
  }
);
