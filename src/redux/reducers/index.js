import { combineReducers } from "redux";
import orderReducer from "./order.red";
import cartReducer from "./cart.red";
import menuReducer from "./menu.red";
import adminReducer from "./admin.red";
import productsReducer from "./products";
import authReducer from "./auth.red";

const rootReducer = combineReducers({
  order: orderReducer,
  cart: cartReducer,
  menu: menuReducer,
  admin: adminReducer,
  auth: authReducer,
  products: productsReducer,
});

export default rootReducer;
