import React/* , { useContext, useState } */ from "react";
import { /* useLocation, */ withRouter } from "react-router-dom";
// import {
//   Button,
//   Tooltip,
//   MenuItem,
//   Select,
//   FormControlLabel,
//   Checkbox,
// } from "@mui/material";
// import queryString from "query-string";

// import PriceDialog from "../PriceDialog";

import { useStyles } from "./style";
// import { ProductsContext } from "../../context/ProductsContext";

const ProductsHeader = (props: any) => {
  const classes = useStyles();
  // const location = useLocation();

  // const [open, setOpen] = useState(false);
  // const context: any = useContext(ProductsContext);
  // const {
  //   showPopular,
  //   setShowPopular,
  //   setUsePriceFilter,
  //   usePriceFilter,
  //   setSortValue,
  //   sortValue,
  //   setPage,
  //   minPrice,
  //   maxPrice,
  //   setMinPrice,
  //   setMaxPrice,
  //   category,
  //   totalLength,
  // } = context;

  // let keyword = queryString.parse(location.search).term;

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        {/* <div className={classes.info}>
          <div>{category || "Акційний товар"}</div>
          <span className={classes.results}>
            {" Результат" +
              (totalLength === 1 ? " " : "и ") +
              totalLength +
              (keyword ? " для " : "")}
          </span>
          {keyword && <span className={classes.results}>{keyword}</span>}
        </div> */}

        <div className={classes.actions}>
          {/* <FormControlLabel
            control={
              <Checkbox
                color="primary"
                checked={showPopular}
                onChange={(e) => {
                  setShowPopular(e.target.checked);
                }}
              />
            }
            label="Акційна ціна"
          /> */}
          {/* <FormControlLabel
            control={
              <Checkbox
                color="primary"
                checked={usePriceFilter}
                onChange={(e) => {
                  setUsePriceFilter(e.target.checked);
                  setPage(1);
                }}
              />
            }
            label="Фільтрувати за ціною"
          /> */}

          {/* {usePriceFilter && (
            <Tooltip title="Змінити діапазон цін" disableFocusListener>
              <Button
                variant="outlined"
                className={classes.priceBtn}
                onClick={() => setOpen(true)}
              >
                {minPrice + "₴ - " + maxPrice + "₴"}
              </Button>
            </Tooltip>
          )} */}
          {/* <Select
            value={sortValue}
            onChange={(e) => setSortValue(e.target.value)}
          >
            <MenuItem value={"lh"}>За зростанням ціни</MenuItem>
            <MenuItem value={"hl"}>За спаданням ціни</MenuItem>
          </Select> */}
        </div>
      </div>

      {/* This is dialog which opens up for setting price filter */}
      {/* <PriceDialog
        open={open}
        min={minPrice}
        max={maxPrice}
        onSave={(min: number, max: number) => {
          setOpen(false);
          setMinPrice(min);
          setMaxPrice(max);
          setPage(1);
        }}
        onClose={() => setOpen(false)}
      /> */}
    </div>
  );
};

export default withRouter(ProductsHeader);
