import React from "react";

// import PrivateRoute from "./components/privateRoute";
// import Order from "./pages/order";
// import Login from "./pages/signIn";
// import Register from "./pages/signUp";
// import AdminLoad from "./pages/adminPage";
// import AddProduct from "./pages/addProduct";

// import Header from "./containers/header";
// import Footer from "./containers/footer";
// import Menu from "./containers/sidebar";

// import CartDialog from "./components/CartDialog/CartDialog";

const Products = React.lazy(() => import("../../../pages/products"));
const ProductPage = React.lazy(() => import("../../../pages/details/Details"));

export const routes = [
  { path: "/", exact: true, component: Products },
  { path: "/category/:category", component: Products },
  { path: "/details/:id", component: ProductPage },
];
