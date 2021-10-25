import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: RouteComponent, ...rest }: any) => {
  return (
    <Route
      {...rest}
      render={(routeProps) => {
        return true ? ( // editThen
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: routeProps.location } }}
          />
        );
      }}
    />
  );
};

export default PrivateRoute;
