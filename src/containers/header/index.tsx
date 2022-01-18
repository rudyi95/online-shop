import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Toolbar, Menu, MenuItem, Select, AppBar, Avatar } from "@mui/material";
import { PersonOutline as Person } from "@mui/icons-material";

import cartImage from "../../Images/logo2.png";

import Search from "../../components/searchInput";
import IconButton from "../../components/common/buttons/IconButton";
import ActionButton from "../../components/common/buttons/ActionButton";
import { ButtonIconType } from "../../types/enums";

import { MENU_DATA, ROUTES } from "../../utils/services/constants";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/redux";
import storageService from "../../redux/services/storageService";
import { logout } from "../../redux/services/loginService";
import { toggleCartDialog } from "../../redux/services/cartService";

import { useStyles } from "./style";

// Option items for product categories.
const categoryOptions = MENU_DATA.map((x) => {
  return (
    <MenuItem key={x.title} value={x.title}>
      {x.name}
    </MenuItem>
  );
});

const Header: React.FC = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [categoryFilterValue, setCategoryFilterValue] = useState(MENU_DATA[1].title);

  const isAuth = storageService.get("token");
  const { cartItems } = useAppSelector((state) => state.cart);

  const toggleMenu = () => {
    const isOpen = storageService.get("menu");
    storageService.set("menu", !isOpen);
  };

  return (
    <AppBar className={classes.root} position="static">
      <Toolbar className={classes.headerToolbar}>
        <div className={classes.leftToolbar}>
          <IconButton onClick={toggleMenu} type={ButtonIconType.menu} title="Menu" />
          <img
            className={classes.logo}
            src={cartImage}
            alt={"Logo"}
            onClick={() => navigate(ROUTES.mainPage)}
          />
          <Search
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            disabledBtn={!searchTerm}
            onClickBtn={() => navigate("/?category=" + categoryFilterValue + "&term=" + searchTerm)}
            placeholder="Пошук..."
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
            <IconButton className={classes.phoneIcon} type={ButtonIconType.phone} title="" />
            <span> +380632112003 </span>
          </a>

          <IconButton
            className={classes.instagramIcon}
            type={ButtonIconType.instagram}
            title=""
            href={"https://www.instagram.com/13_bootlegger/"}
          />

          <IconButton
            onClick={() => {
              dispatch(toggleCartDialog(true));
              navigate("/order");
            }}
            badgeContent={cartItems.length}
            badgeColor="primary"
            type={ButtonIconType.shoppingCart}
            buttonType="withBadge"
            title=""
          />
          {!isAuth ? ( // editThen
            <ActionButton
              variant="outlined"
              color="primary"
              onClick={() => navigate("/login")}
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

          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
            <MenuItem
              onClick={() => {
                setAnchorEl(null);
                navigate("/admin");
              }}
            >
              Сторінка адміна
            </MenuItem>
            <MenuItem
              onClick={() => {
                setAnchorEl(null);
                navigate("/order");
              }}
            >
              Оформити замовлення
            </MenuItem>
            <MenuItem
              onClick={(e) => {
                setAnchorEl(null);
                e.preventDefault();
                dispatch(logout());
                navigate(ROUTES.mainPage);
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
