import React, { Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Collapse } from "@mui/material";

import store from "./redux/store";

import "./App.css";

const Layout = React.lazy(() => import("./containers/layout"));

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <Suspense fallback={<Collapse />}>
        <Layout />
      </Suspense>
    </Provider>
  </BrowserRouter>
);

export default App;
