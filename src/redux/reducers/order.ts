import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IProps {
  checkedOutItems: Cart[];
}

export const initialState: IProps = {
  checkedOutItems: [],
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    changeOrderItems: (state, action: PayloadAction<Cart[]>) => {
      state.checkedOutItems = action.payload;
    },
  },
});

export default orderSlice.reducer;
