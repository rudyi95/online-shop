import React from "react";

import Header from "../header";
import Content from "../content";
import Footer from "../footer";

import useStyles from "./style";

const Layout: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default Layout;
