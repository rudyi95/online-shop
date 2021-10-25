import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProducts,
  getProductsInCategory,
} from "../../redux/actions/products";

import Item from "../Item";

import { useStyles } from "./style";
import { productsLoading } from "../../redux/selectors/products";
import { CircularProgress } from "@mui/material";

const ProductList: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { category } = useParams<RouteParams>();

  const items = useSelector((state: any) => state.products.data);
  const loading = useSelector(productsLoading);

  useEffect(() => {
    if (!category || category === "all") {
      dispatch(getAllProducts());
    } else {
      dispatch(getProductsInCategory(category));
    }
  }, [dispatch, category]);

  if (loading || !items) {
    return <CircularProgress style={{ margin: "auto" }} />;
  }

  return (
    <div className={classes.root}>
      {items.map((item: any) => {
        return <Item key={item.id} item={item} />;
      })}
    </div>
  );
};

export default ProductList;
