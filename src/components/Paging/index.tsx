import React, { useContext } from "react";
import { Typography } from "@material-ui/core";

import IconButton from "../common/buttons/IconButton";
import { ButtonIconType } from "../../types/enums";

import { useStyles } from "./style";
import { ProductsContext } from "../../context/ProductsContext";

const Paging: React.FC = () => {
  const classes = useStyles();

  const products = useContext(ProductsContext);

  const { page, setPage, itemsPerPage, totalLength } = products;

  let totalPages = Math.ceil(totalLength / itemsPerPage);

  if (!totalLength) return null;

  return (
    <div className={classes.root}>
      <IconButton
        color="primary"
        disabled={page === 1}
        onClick={() => setPage(1)}
        type={ButtonIconType.firstPage}
        title=""
      />
      <IconButton
        color="primary"
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
        type={ButtonIconType.chevronLeft}
        title=""
      />
      <Typography variant="body1">
        Сторінка {page} з {totalPages}
      </Typography>
      <IconButton
        className={classes.next}
        color="primary"
        disabled={page >= totalPages}
        onClick={() => setPage(page + 1)}
        type={ButtonIconType.chevronRight}
        title=""
      />
      <IconButton
        color="primary"
        disabled={page >= totalPages}
        onClick={() => setPage(totalPages)}
        type={ButtonIconType.lastPage}
        title=""
      />
    </div>
  );
};

export default Paging;
