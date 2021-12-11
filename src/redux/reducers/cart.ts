import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IProps {
  cartItems: Cart[];
  showCartDialog: boolean;
}

export const initialState: IProps = {
  cartItems: [],
  showCartDialog: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    changeCartItems: (state, action: PayloadAction<Cart[]>) => {
      state.cartItems = action.payload;
    },
    showDialog: (state, action: PayloadAction<boolean>) => {
      state.showCartDialog = action.payload;
    },
  },
});

export default cartSlice.reducer;
