import * as TYPES from "./types";

const toggleMenuHandler = () => ({
  type: TYPES.TOGGLE_MENU,
  payload: null,
});

const toggleMenu = (data) => {
  return (dispatch) => dispatch(toggleMenuHandler());
};

export { toggleMenu };
