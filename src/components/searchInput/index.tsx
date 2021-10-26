import React from "react";
import { InputProps, TextField } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";

import IconButton from "../common/buttons/IconButton";

import { ButtonIconType } from "../../types/enums";

import useStyles from "./style";

interface IProps {
  disabledBtn?: boolean;
  onClickBtn?: () => void;
}

const CustomSearch: React.FC<IProps & InputProps> = ({
  placeholder,
  value,
  onChange,
  disabledBtn,
  onClickBtn,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.iconWrapper}>
        {/* <SearchIcon /> */}
        <IconButton
          className={classes.searchBtn}
          type={ButtonIconType.search}
          disabled={disabledBtn}
          onClick={onClickBtn}
          title=""
          fontSize={"large"}
        />
      </div>
      <TextField
        value={value}
        onChange={onChange}
        className={classes.inputBase}
        placeholder={placeholder}
      />
    </div>
  );
};

export default CustomSearch;
