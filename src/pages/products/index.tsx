import React from "react";

import Paging from "../../components/Paging";
import ProductsHeader from "../../components/ProductsHeader";
import ProductsList from "../../components/productList";

import { ProductsContextProvider } from "../../context/ProductsContext";

import { useStyles } from "./style";

const ProductList: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ProductsContextProvider>
        <ProductsHeader />
        <ProductsList />
        <Paging />
      </ProductsContextProvider>
    </div>
  );
};

export default ProductList;
