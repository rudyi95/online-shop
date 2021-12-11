import React, { Suspense } from "react";
import { Collapse } from "@mui/material";
import { Redirect, Route, Switch } from "react-router";

import Menu from "../sidebar";
import CartDialog from "../../components/CartDialog/CartDialog";

import { routes } from "../../utils/services/navigation/routes";

import useStyles from "./style";

const Content: React.FC = () => {
  const classes = useStyles();

  return (
    <main className={classes.root}>
      <Menu />
      <Suspense fallback={<Collapse />}>
        <CartDialog />
        <Switch>
          {routes.map((route: RouteProps, index: number) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              render={() => <route.component />}
            />
          ))}
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </main>
  );
};

export default Content;
