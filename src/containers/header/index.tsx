import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Toolbar,
  Menu,
  MenuItem,
  Select,
  AppBar,
  TextField,
  Avatar,
} from "@mui/material";
import { PersonOutline as Person } from "@mui/icons-material";

import cartImage from "../../Images/logo2.png";

import IconButton from "../../components/common/buttons/IconButton";
import ActionButton from "../../components/common/buttons/ActionButton";
import { ButtonIconType } from "../../types/enums";

import { showCartDlg, toggleMenu } from "../../redux/actions/index";
import { logOutHandler } from "../../redux/actions/auth";

import { CATEGORIES, ROUTES } from "../../utils/services/constants";

import { useStyles } from "./style";

// Option items for product categories.
const categoryOptions = CATEGORIES.map((x) => {
  return (
    <MenuItem key={x.title} value={x.title}>
      {x.name}
    </MenuItem>
  );
});

const Header = () => {
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [categoryFilterValue, setCategoryFilterValue] = useState(
    CATEGORIES[0].title
  );
  const [logged, setLogged] = useState(false);
  const data = localStorage.getItem("userData");

  const isAuth = useSelector((state: any) => state.auth.isAuth);
  const nrOfItemsInCard = useSelector(
    (state: any) => state.cart.cartItems.length
  );

  useEffect(() => {
    if (!!data || isAuth) {
      setLogged(true);
    } else setLogged(false);
  }, [data, isAuth]);

  return (
    <AppBar className={classes.root} position="static">
      <Toolbar className={classes.headerToolbar}>
        <div className={classes.leftToolbar}>
          <IconButton
            onClick={() => dispatch(toggleMenu())}
            type={ButtonIconType.menu}
            title="Menu"
          />

          <img
            className={classes.logo}
            src={cartImage}
            alt={"Logo"}
            onClick={() => history.push(ROUTES.mainPage)}
          />

          <TextField
            className={classes.search}
            label="Пошук..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <IconButton
            className={classes.searchBtn}
            type={ButtonIconType.search}
            disabled={!searchTerm}
            onClick={() =>
              history.push(
                "/?category=" + categoryFilterValue + "&term=" + searchTerm
              )
            }
            title=""
            fontSize={"large"}
          />

          <Select
            className={classes.categories}
            value={categoryFilterValue}
            MenuProps={{
              PaperProps: {
                style: {
                  width: 250,
                  marginLeft: "-4%",
                  marginTop: "4%",
                },
              },
            }}
            onChange={(e: any) => setCategoryFilterValue(e.target.value)}
          >
            {categoryOptions}
          </Select>
        </div>
        <div className={classes.rightToolbar}>
          <a className={classes.iconButton} href={"tel:+380936389876"}>
            <IconButton
              className={classes.phoneIcon}
              type={ButtonIconType.phone}
              title=""
            />
            <span> +380632112003 </span>
          </a>

          <IconButton
            className={classes.instagramIcon}
            type={ButtonIconType.instagram}
            title=""
            href={"https://www.instagram.com/13_bootlegger/"}
          />

          <IconButton
            onClick={() => dispatch(showCartDlg(true))}
            badgeContent={nrOfItemsInCard}
            badgeColor="primary"
            type={ButtonIconType.shoppingCart}
            buttonType="withBadge"
            title=""
          />
          {!logged ? ( // editThen
            <ActionButton
              variant="outlined"
              color="primary"
              onClick={() => history.push("/login")}
              text={"Увійти"}
            />
          ) : (
            <Avatar
              onClick={(event: any) => setAnchorEl(event.currentTarget)}
              style={{ backgroundColor: "#3f51b5", marginRight: 10 }}
            >
              <Person />
            </Avatar>
          )}

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}
          >
            <MenuItem
              onClick={() => {
                setAnchorEl(null);
                history.push("/admin");
              }}
            >
              Сторінка адміна
            </MenuItem>
            <MenuItem
              onClick={() => {
                setAnchorEl(null);
                history.push("/order");
              }}
            >
              Оформити замовлення
            </MenuItem>
            <MenuItem
              onClick={(e) => {
                setAnchorEl(null);
                e.preventDefault();
                dispatch(logOutHandler());
                history.push(ROUTES.mainPage);
              }}
            >
              Вийти
            </MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
