import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { has } from "lodash";
import { Icon, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

import { DATA_FOR_MENU } from "../../utils/services/constants";

import {isMenuItemActive} from '../../utils/services/sidebar/helpers';

import { useStyles } from "./style";

const Menu = () => {
  const classes = useStyles();
  const showMenu = useSelector((state: any) => state.menu.showMenu);

  if (showMenu) return null;

  return (
    <div
      className={classes.root}
      style={{
        backgroundColor: "#FAFAFB",
      }}
    >
      {DATA_FOR_MENU.map((item) => {
        return !has(item, "children") ? (
          <NavLink
            className="menu-list"
            to={item.url || "/"}
            exact
            isActive={(param, location) => {
              return isMenuItemActive(item, location);
            }}
            style={{
              textDecoration: "none",
              color: "rgb(32, 32, 34)",
            }}
            key={item.id}
            activeStyle={{
              color: "#4282ad",
              fontWeight: "bold",
            }}
          >
            <ListItem dense button>
              <ListItemIcon className="list-item-icon">
                <Icon>{item.icon}</Icon>
              </ListItemIcon>
              <ListItemText
                disableTypography
                primary={<div style={{ color: "inherit" }}>{item.name}</div>}
              />
            </ListItem>
          </NavLink>
        ) : (
          <Fragment>
            {item.children &&
              item.children.map((item) => {
                return (
                  <NavLink
                    className="menu-list"
                    to={item.url}
                    exact
                    isActive={(param, location) => {
                      return isMenuItemActive(item, location);
                    }}
                    style={{
                      textDecoration: "none",
                      color: "rgb(32, 32, 34)",
                    }}
                    key={item.id}
                    activeStyle={{
                      color: "#4282ad",
                      fontWeight: "bold",
                    }}
                  >
                    <ListItem dense button>
                      <ListItemIcon className="list-item-icon">
                        <Icon>{item.icon}</Icon>
                      </ListItemIcon>
                      <ListItemText
                        disableTypography
                        primary={
                          <div style={{ color: "inherit" }}>{item.title}</div>
                        }
                      />
                    </ListItem>
                  </NavLink>
                );
              })}
          </Fragment>
        );
      })}
    </div>
  );
};

export default Menu;
