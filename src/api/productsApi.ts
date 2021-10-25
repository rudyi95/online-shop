import { apiWrapper } from "../utils/helpers/apiWrapper";

const productsApi = {
  getAllProducts: () => apiWrapper({ method: "get", url: "/products" }),
  getProductById: (id: number) =>
    apiWrapper({ method: "get", url: `/products/${id}` }),
  getProductInCategory: (category: string) =>
    apiWrapper({ method: "get", url: `/products/category/${category}` }),
};

export default productsApi;
