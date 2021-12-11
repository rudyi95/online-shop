import { configureStore, combineReducers } from "@reduxjs/toolkit";

import order from "./reducers/order";
import login from "./reducers/auth";
import products from "./reducers/products";
import cart from "./reducers/cart";

const rootReducer = combineReducers({
  order,
  login,
  products,
  cart,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
