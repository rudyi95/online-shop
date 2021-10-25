import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@mui/material";

import ActionButton from "../common/buttons/ActionButton";

import { ROUTES } from "../../utils/services/constants";
import { addItemInCart } from "../../redux/actions/index";
import { Item } from "../../types/products";

import { useStyles } from "./style";

interface ItemProps {
  className?: string;
  item: Item;
}

const ItemCard: React.FC<ItemProps> = ({ item }) => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

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
                dispatch(addItemInCart({ ...item, quantity: 1 }));
              }}
            />
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ItemCard;
