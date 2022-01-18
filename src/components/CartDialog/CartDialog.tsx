import React from "react";
import { useNavigate } from "react-router-dom";
import {
  TableCell,
  TableRow,
  Dialog,
  Table,
  TableBody,
  TableHead,
  AppBar,
  Toolbar,
} from "@mui/material";

import { Phone as PhoneIcon } from "@mui/icons-material";
import ActionButton from "../common/buttons/ActionButton";

import CartRow from "./CartRow";
import IconButton from "../common/buttons/IconButton";

import { useAppDispatch, useAppSelector } from "../../redux/hooks/redux";
import { toggleCartDialog } from "../../redux/services/cartService";
import { setOrderItems } from "../../redux/services/orderService";
import { ButtonIconType } from "../../types/enums";

import { useStyles } from "./style";

const CartDialog = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const classes = useStyles();

  const { showCartDialog, cartItems } = useAppSelector((state) => state.cart);

  let totalPrice = cartItems.reduce((accumulator: number, item: Cart) => {
    return accumulator + item.price * item.quantity;
  }, 0);

  return (
    <div>
      <Dialog open={showCartDialog} onClose={() => dispatch(toggleCartDialog(false))} maxWidth="md">
        <AppBar position="static" style={{ backgroundColor: "#3863aa" }}>
          <Toolbar>
            <IconButton
              type={ButtonIconType.shoppingCartOutlined}
              title={""}
              className={classes.cartIcon}
              fontSize={"large"}
            />
            Кошик
          </Toolbar>
        </AppBar>

        <div
          style={{
            maxHeight: 400,
            padding: 10,
            overflow: "auto",
          }}
        >
          <Table>
            <TableHead>
              <TableRow>
                {["Назва", "Ціна", "Кількість", "Дія"].map((item: string) => {
                  return <TableCell>{item}</TableCell>;
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {cartItems.map((item: Cart, index: number) => (
                <CartRow item={item} key={item.id} />
              ))}
            </TableBody>
          </Table>
        </div>

        <div style={{ display: "flex", padding: 20, alignItems: "center" }}>
          <div
            style={{
              flex: 1,
              paddingLeft: 20,
            }}
          >
            Загальна вартість: {totalPrice} грн.
          </div>

          <div className={classes.btnGroup}>
            <ActionButton
              onClick={() => {}}
              text={"Замовити"}
              icon={<PhoneIcon style={{ marginRight: 15 }} />}
              color="primary"
              variant="outlined"
              disabled={totalPrice === 0}
              href="tel: +380632112003"
            />
            <ActionButton
              onClick={() => {
                dispatch(toggleCartDialog(false));
                dispatch(setOrderItems(cartItems));
                navigate("/order");
              }}
              text={"Підтвердити"}
              color="primary"
              variant="outlined"
              disabled={totalPrice === 0}
            />
          </div>
        </div>
      </Dialog>
    </div>
  );
};
export default CartDialog;
