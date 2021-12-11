import React from "react";
import { Link } from "react-router-dom";
import { TableCell, TableRow, TextField } from "@mui/material";

import ActionButton from "../common/buttons/ActionButton";

import {
  toggleCartDialog,
  removeFromCart,
  updateCart,
} from "../../redux/services/cartService";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/redux";

interface IProps {
  item: Cart;
}

const CartRow: React.FC<IProps> = ({ item }) => {
  const dispatch = useAppDispatch();
  const { cartItems } = useAppSelector((state) => state.cart);

  return (
    <TableRow>
      <TableCell>
        <Link to={`/details/${item.id}`}>
          <div onClick={() => dispatch(toggleCartDialog(false))}>
            {item.title}
          </div>
        </Link>
      </TableCell>
      <TableCell>{item.price}</TableCell>
      <TableCell>
        <TextField
          type="number"
          style={{ width: 40 }}
          value={item.quantity}
          onChange={(e) => {
            let quantity = parseInt(e.target.value, 10);
            if (quantity < 0) return;
            dispatch(
              updateCart(
                {
                  ...item,
                  quantity,
                },
                cartItems
              )
            );
          }}
        />
      </TableCell>
      <TableCell>
        <ActionButton
          color="secondary"
          onClick={() => dispatch(removeFromCart(cartItems, item.id))}
          text={"Видалити"}
        />
      </TableCell>
    </TableRow>
  );
};

export default CartRow;
