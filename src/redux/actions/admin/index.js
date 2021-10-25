import * as TYPES from "./types";

const setCategoryFilterHandler = (item) => ({
  type: TYPES.SET_CATEGORY_FILTER,
  payload: item,
});

const setCategoryFilter = (data) => {
  return (dispatch) => dispatch(setCategoryFilterHandler(data));
};

export { setCategoryFilter };
