import { MENU_ACTIONS } from "../actions/types";

const initialState = {
  showMenu: true,
};

const menuReducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case MENU_ACTIONS.TOGGLE_MENU:
      return { ...state, showMenu: !state.showMenu };

    default:
      return state;
  }
};

export default menuReducer;
