import { ADMIN_ACTIONS } from "../actions/types";

const initialState = {
  categoryToFilter: 'Усі категорії',
};

const adminReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADMIN_ACTIONS.SET_CATEGORY_FILTER: {
      return { ...state, categoryToFilter: payload };
    }

    default:
      return state;
  }
};

export default adminReducer;
