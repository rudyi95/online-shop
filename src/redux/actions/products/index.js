import api from "../../../api/api";
import { PRODUCTS } from "../types";

export const getAllProducts = () => (dispatch) => {
  dispatch({
    type: PRODUCTS.LOADING,
    payload: true,
  });
  api
    .getAllProducts()
    .then((res) => {
      dispatch({
        type: PRODUCTS.GET_ALL,
        payload: res.data,
      });
    })
    .then(() => {
      dispatch({
        type: PRODUCTS.LOADING,
        payload: false,
      });
    })
    .catch((err) => console.log(err));
};

export const getProductById = (id) => (dispatch) => {
  dispatch({
    type: PRODUCTS.LOADING,
    payload: true,
  });
  api
    .getProductById(id)
    .then((res) => {
      dispatch({ type: PRODUCTS.GET_BY_ID, payload: res.data });
    })
    .then(() => {
      dispatch({
        type: PRODUCTS.LOADING,
        payload: false,
      });
    })
    .catch((err) => console.log(err));
};

export const getProductsInCategory = (category) => (dispatch) => {
  dispatch({
    type: PRODUCTS.LOADING,
    payload: true,
  });
  api
    .getProductInCategory(category)
    .then((res) => {
      dispatch({
        type: PRODUCTS.GET_IN_CATEGORY,
        payload: res.data,
      });
    })
    .then(() => {
      dispatch({
        type: PRODUCTS.LOADING,
        payload: false,
      });
    })
    .catch((err) => console.log(err));
};
