import React from "react";
import { useHistory } from "react-router-dom";
import { Card, CardActionArea, CardContent, CardMedia } from "@mui/material";

import ActionButton from "../common/buttons/ActionButton";

import { ROUTES } from "../../utils/services/constants";
import { Product } from "../../types/products";
import { addToCart } from "../../redux/services/cartService";

import { useStyles } from "./style";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/redux";

interface ItemProps {
  className?: string;
  item: Product;
}

const ItemCard: React.FC<ItemProps> = ({ item }) => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useAppDispatch();
  const { cartItems } = useAppSelector((state) => state.cart);

  return (
    <Card className={classes.root}>
      <CardActionArea
        className={classes.actionArea}
        onClick={() => history.push(ROUTES.productPage + item.id)}
      >
        <CardContent className={classes.content}>
          <CardMedia className={classes.itemImg} image={item.image} />
          <div>
            <h3>{item.title}</h3>
          </div>
          <div className={classes.infoActions}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "large",
                fontWeight: "bold",
              }}
            >
              {item.price} грн
            </div>
            <ActionButton
              text={"У кошик"}
              onClick={(e: any) => {
                e.stopPropagation();
                dispatch(addToCart({ ...item, quantity: 1 }, cartItems));
              }}
            />
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ItemCard;
