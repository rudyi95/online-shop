import { cartSlice } from "../reducers/cart";
import { AppDispatch } from "../store";

export const addToCart =
  (newCart: Cart, items: Cart[]) => (dispatch: AppDispatch) => {
    const itemIndex = items.findIndex((x) => x.id === newCart.id);

    if (itemIndex !== -1) {
      let copyCart = [...items];
      copyCart[itemIndex] = {
        ...copyCart[itemIndex],
        quantity: items[itemIndex].quantity + newCart.quantity,
      };
      dispatch(cartSlice.actions.changeCartItems(copyCart));
    } else {
      dispatch(cartSlice.actions.changeCartItems([...items, newCart]));
    }
  };

export const toggleCartDialog =
  (isShow: boolean) => (dispatch: AppDispatch) => {
    return dispatch(cartSlice.actions.showDialog(isShow));
  };

export const removeFromCart =
  (items: Cart[], id: number) => (dispatch: AppDispatch) => {
    const res = items.filter((item) => item.id !== id);
    dispatch(cartSlice.actions.changeCartItems(res));
  };

export const updateCart =
  (editCart: Cart, items: Cart[]) => (dispatch: AppDispatch) => {
    const itemIndex = items.findIndex((x) => x.id === editCart.id);

    if (itemIndex !== -1) {
      let copyCart = [...items];
      copyCart[itemIndex] = {
        ...copyCart[itemIndex],
        quantity: editCart.quantity,
      };
      dispatch(cartSlice.actions.changeCartItems(copyCart));
    } else {
      dispatch(cartSlice.actions.changeCartItems(items));
    }
  };
