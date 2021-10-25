import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  TableCell,
  TableRow,
  Dialog,
  Table,
  TableBody,
  TableHead,
  AppBar,
  Toolbar,
} from "@material-ui/core";

import { Phone as PhoneIcon } from "@material-ui/icons";
import ActionButton from "../common/buttons/ActionButton";

import CartRow from "./CartRow";
import IconButton from "../common/buttons/IconButton";

import { showCartDlg, setCheckedOutItems } from "../../redux/actions/index";
import { ButtonIconType } from "../../types/enums";

import { useStyles } from "./style";

const CartDialog = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  const open = useSelector((state: any) => state.cart.showCartDialog);
  const items = useSelector((state: any) => state.cart.cartItems);

  let totalPrice = items.reduce((accumulator: number, item: any) => {
    return accumulator + item.price * item.quantity;
  }, 0);

  return (
    <div>
      <Dialog
        open={open}
        onClose={() => dispatch(showCartDlg(false))}
        maxWidth="md"
      >
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
              {items.map((item: any, index: number) => (
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
                dispatch(showCartDlg(false));
                dispatch(setCheckedOutItems(items));
                history.push("/order");
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
