import React, { Suspense } from "react";
import { Collapse } from "@mui/material";
import { Route, Routes } from "react-router";

import Menu from "../sidebar";
import CartDialog from "../../components/CartDialog/CartDialog";

import { routes } from "../../utils/services/navigation/routes";

import useStyles from "./style";

const Content: React.FC = () => {
  const classes = useStyles();
  const Products = React.lazy(() => import("../../pages/products"));

  return (
    <main className={classes.root}>
      <Menu />
      <Suspense fallback={<Collapse />}>
        <CartDialog />
        <Routes>
          {routes.map((route: RouteProps, index: number) => (
            <Route key={index} path={route.path} element={<route.component />} />
          ))}
          <Route element={<Products />} />
        </Routes>
      </Suspense>
    </main>
  );
};

export default Content;
