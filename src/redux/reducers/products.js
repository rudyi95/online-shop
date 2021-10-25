import { PRODUCTS } from "../actions/types";

const initialState = {
  data: [],
  item: null,
};

const getProductsHandler = (state, payload) => {
  state = { ...state, data: payload };
  return state;
};

const getProductById = (state, payload) => {
  state = { ...state, item: payload };
  return state;
};

const productsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case PRODUCTS.GET_ALL:
      return getProductsHandler(state, payload);
    case PRODUCTS.GET_BY_ID:
      return getProductById(state, payload);
    case PRODUCTS.GET_IN_CATEGORY:
      return getProductsHandler(state, payload);
    default:
      return state;
  }
};

export default productsReducer;
