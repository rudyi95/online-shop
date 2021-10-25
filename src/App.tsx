import React, { Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Collapse } from "@mui/material";

import Routes from "./Routes";

import store from "./redux/store";

import "./App.css";

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Suspense fallback={<Collapse />}>
        <Routes />
      </Suspense>
    </BrowserRouter>
  </Provider>
);

export default App;
