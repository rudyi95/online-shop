import React, { Suspense } from "react";
import { Collapse } from "@mui/material";
import { Redirect, Route, Switch } from "react-router";

import { routes } from "../../utils/services/navigation/routes";

import useStyles from "./style";
import Menu from "../sidebar";

const Content: React.FC = () => {
  const classes = useStyles();

  return (
    <main className={classes.root}>
      <Menu />
      <Suspense fallback={<Collapse />}>
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
