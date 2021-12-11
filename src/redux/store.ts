import { configureStore, combineReducers } from "@reduxjs/toolkit";

import order from "./reducers/order";
import login from "./reducers/auth";
import products from "./reducers/products";
import cart from "./reducers/cart";
import user from "./reducers/user";

const rootReducer = combineReducers({
  order,
  login,
  products,
  cart,
  user,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
