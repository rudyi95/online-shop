import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { Icon, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import classNames from "classnames";

import { MENU_DATA, ROUTES } from "../../utils/services/constants";

import { useStyles } from "./style";

const Menu: React.FC = () => {
  const classes = useStyles();
  const showMenu = useSelector((state: any) => state.menu.showMenu);

  return (
    <div
      className={classNames(classes.root, { [classes.openMenu]: !showMenu })}
    >
      {MENU_DATA.map((item) => (
        <NavLink
          className={classes.menuItem}
          to={item.url ? `${ROUTES.categoryPage}${item.url}` : ""}
          key={item.id}
        >
          <ListItem dense button>
            <ListItemIcon className="list-item-icon">
              <Icon>{item.icon}</Icon>
            </ListItemIcon>
            <ListItemText
              disableTypography
              primary={
                <div style={{ color: "inherit", whiteSpace: "nowrap" }}>
                  {item.title}
                </div>
              }
            />
          </ListItem>
        </NavLink>
      ))}
    </div>
  );
};

export default Menu;
