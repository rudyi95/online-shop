import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../types/products";
import {
  getAllProducts,
  getAllProductsInCategory,
  getProductById,
} from "../services/productsService";

interface IProps {
  product?: Product;
  products: Product[];
  loading: boolean;
  success: boolean;
  error: string;
}

export const initialState: IProps = {
  product: undefined,
  products: [],
  loading: false,
  success: false,
  error: "",
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllProducts.fulfilled.type]: (
      state,
      action: PayloadAction<Product[]>
    ) => {
      state.loading = false;
      state.error = "";
      state.products = action.payload;
      state.success = true;
    },
    [getAllProducts.pending.type]: (state) => {
      state.loading = true;
    },
    [getAllProducts.rejected.type]: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.products = [];
      state.error = action.payload;
      state.success = false;
    },

    [getAllProductsInCategory.fulfilled.type]: (
      state,
      action: PayloadAction<Product[]>
    ) => {
      state.loading = false;
      state.error = "";
      state.products = action.payload;
      state.success = true;
    },
    [getAllProductsInCategory.pending.type]: (state) => {
      state.loading = true;
    },
    [getAllProductsInCategory.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.loading = false;
      state.products = [];
      state.error = action.payload;
      state.success = false;
    },
    
    [getProductById.fulfilled.type]: (
      state,
      action: PayloadAction<Product>
    ) => {
      state.loading = false;
      state.error = "";
      state.product = action.payload;
      state.success = true;
    },
    [getProductById.pending.type]: (state) => {
      state.loading = true;
    },
    [getProductById.rejected.type]: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.product = undefined;
      state.error = action.payload;
      state.success = false;
    },
  },
});

export default productsSlice.reducer;
