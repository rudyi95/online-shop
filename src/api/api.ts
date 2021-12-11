import productApi from "./productsApi";
import loginApi from "./loginApi";

const api = {
  ...productApi,
  ...loginApi,
};

export default api;
