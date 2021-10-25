import api from "../../../api/api";
import { PRODUCTS } from "../types";

export const getAllProducts = () => (dispatch) => {
  api
    .getAllProducts()
    .then((res) => {
      dispatch({
        type: PRODUCTS.GET_ALL,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const getProductById = (id) => (dispatch) => {
  api
    .getProductById(id)
    .then((res) => {
      dispatch({ type: PRODUCTS.GET_BY_ID, payload: res.data });
    })
    .catch((err) => console.log(err));
};

export const getProductsInCategory = (category) => (dispatch) => {
  api.getProductInCategory(category).then((res) => {
    dispatch({
      type: PRODUCTS.GET_IN_CATEGORY,
      payload: res.data,
    });
  });
};
