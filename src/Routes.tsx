import React from "react";
import { Route, Switch } from "react-router";

// import PrivateRoute from "./components/privateRoute";
import Order from "./pages/order";
import Login from "./pages/signIn";
import Register from "./pages/signUp";
// import AdminLoad from "./pages/adminPage";
// import AddProduct from "./pages/addProduct";

import Header from "./containers/header";
import Footer from "./containers/footer";
import Menu from "./containers/sidebar";

import CartDialog from "./components/CartDialog/CartDialog";

const Products = React.lazy(() => import("./pages/products"));
const ProductPage = React.lazy(() => import("./pages/details/Details"));

const Routes: React.FC = () => (
  <div className="app">
    <Header />
    <div className="app-container">
      <div className="app-body">
        <Menu />
        <div className="content">
          <CartDialog />
          <Switch>
            <Route path="/" exact component={Products} />
            <Route path="/category/:category" component={Products} />
            <Route path="/details/:id" component={ProductPage} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/order" component={Order} />
            {/* <Route path="/items/add" component={AddProduct} /> */}
            {/* <PrivateRoute path="/admin" component={AdminLoad} /> */}
            <Route
              component={() => <div style={{ padding: 20 }}>not found</div>}
            />
          </Switch>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default Routes;
