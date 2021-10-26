import React, { Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Collapse } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material";

import store from "./redux/store";

import "./App.css";

const Layout = React.lazy(() => import("./containers/layout"));

const theme = createTheme();

const App = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Suspense fallback={<Collapse />}>
          <Layout />
        </Suspense>
      </Provider>
    </ThemeProvider>
  </BrowserRouter>
);

export default App;
