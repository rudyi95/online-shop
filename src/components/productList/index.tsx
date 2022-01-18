import React, { useEffect } from "react";
import { useParams } from "react-router";
import {
  getAllProducts,
  getAllProductsInCategory,
} from "../../redux/services/productsService";

import Item from "../Item";

import { useStyles } from "./style";
import { CircularProgress } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/redux";

const ProductList: React.FC = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const { category } = useParams();
  const test = useParams()
  console.log(test)
  const { products, loading } = useAppSelector((state) => state.products);

  useEffect(() => {
    if (category) {
      switch (category) {
        case "all":
          dispatch(getAllProducts());
          break;
        default:
          dispatch(getAllProductsInCategory(category));
          break;
      }
    }
  }, [dispatch, category]);

  if (loading || !products) {
    return <CircularProgress style={{ margin: "auto" }} />;
  }

  return (
    <div className={classes.root}>
      {products.map((item: any) => {
        return <Item key={item.id} item={item} />;
      })}
    </div>
  );
};

export default ProductList;
