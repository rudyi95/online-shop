import { orderSlice } from "../reducers/order";
import { AppDispatch } from "../store";

export const setOrderItems = (items: Cart[]) => (dispatch: AppDispatch) => {
  dispatch(orderSlice.actions.changeOrderItems(items));
};
