import productApi from "./productsApi";
import loginApi from "./loginApi";
import userApi from "./userApi";

const api = {
  ...productApi,
  ...loginApi,
  ...userApi,
};

export default api;
