import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { CATEGORIES } from "../../../utils/services/constants";
import { setCategoryFilter } from "../../../redux/actions/index";

import ActionButton from "../../common/buttons/ActionButton";

import { useStyles } from "./style";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";

const ProductsHeader = () => {
  const classes = useStyles();
  const history = useHistory();

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      category: "",
    },
    onSubmit: (e) => console.log(e),
    enableReinitialize: true,
  });

  useEffect(() => {
    dispatch(setCategoryFilter(formik.values.category));
  }, [formik.values.category, dispatch]);

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <div className={classes.actions}>
          <ActionButton
            onClick={() => history.push("./items/add")}
            text={"Додати товар:"}
          />
          <form>
            <label htmlFor="email" style={{ display: "block" }}>
              Категорія:
            </label>
            <select
              name="category"
              value={formik.values.category}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              style={{ display: "block" }}
            >
              {CATEGORIES.map((item: any) => {
                return <option value={item.title} label={item.title} />;
              })}
            </select>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductsHeader;
