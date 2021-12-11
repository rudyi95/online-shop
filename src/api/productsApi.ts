import { Product } from "../types/products";
import { apiWrapper } from "../utils/helpers/apiWrapper";

const productsApi = {
  getAllProducts: () =>
    apiWrapper<Product[]>({ method: "get", url: "/products" }),
  getProductById: (id: number) =>
    apiWrapper<Product>({ method: "get", url: `/products/${id}` }),
  getProductInCategory: (category: string) =>
    apiWrapper<Product[]>({
      method: "get",
      url: `/products/category/${category}`,
    }),
};

export default productsApi;
