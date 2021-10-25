import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { TableCell, TableRow, TextField } from "@mui/material";

import ActionButton from "../common/buttons/ActionButton";

import {
  showCartDlg,
  deleteCartItem,
  updateCartItemQnt,
} from "../../redux/actions/index";

interface ICartRow {
  item: any;
}

const CartRow: React.FC<ICartRow> = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <TableRow>
      <TableCell>
        <Link to={`/details/${item.id}`}>
          <div onClick={() => dispatch(showCartDlg(false))}>{item.name}</div>
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
              updateCartItemQnt({
                id: item.id,
                quantity,
              })
            );
          }}
        />
      </TableCell>
      <TableCell>
        <ActionButton
          color="secondary"
          onClick={() => dispatch(deleteCartItem(item.id))}
          text={"Видалити"}
        />
      </TableCell>
    </TableRow>
  );
};

export default CartRow;
