import React/* , { useEffect } */ from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

// import { getAllItems, deleteItemById } from "../../../redux/actions/items";

import { useStyles } from "./style";

const Upload: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const items = useSelector((state: any) => state.items.items);
  const filter = useSelector((state: any) => state.admin.categoryToFilter);

  let filteredList = items.filter((item: any) =>
    !filter || filter === "Усі категорії"
      ? item.category
      : item.category === filter
  );

  const deleteHandler = (_id: string) => {
    // dispatch(deleteItemById(_id))
  };

  // useEffect(() => {
  //   dispatch(getAllItems());
  // }, []);

  return (
    <div className={classes.root}>
      <div className={classes.form}>
        <div className={classes.data}>
          <TableContainer component={Paper}>
            <Table size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell align="right">ID</TableCell>
                  <TableCell align="right">Назва</TableCell>
                  <TableCell align="right">Категорія</TableCell>
                  <TableCell align="right">Об'єм</TableCell>
                  <TableCell align="right">Акція</TableCell>
                  {/* <TableCell align="right">Опис</TableCell> */}
                  {/* <TableCell align="right">Зображення</TableCell> */}
                  <TableCell align="right">Ціна</TableCell>
                  <TableCell align="right" />
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredList.map((row: any) => {
                  return (
                    <TableRow
                      key={row.id}
                      // onClick={() => history.push("/details/" + row.id)}
                    >
                      <TableCell component="th" scope="row">
                        {row.id}
                      </TableCell>
                      <TableCell align="right">{row.name}</TableCell>
                      <TableCell align="right">{row.category}</TableCell>
                      <TableCell align="right">{row.volume}</TableCell>
                      <TableCell align="right">
                        {row.popular ? "Акція" : ""}
                      </TableCell>
                      {/* <TableCell align="right">{row.description}</TableCell> */}
                      {/* <TableCell align="right">{row.imageUrls}</TableCell> */}
                      <TableCell align="right">{row.price}</TableCell>
                      <button onClick={() => deleteHandler(row._id)}>
                        Delete
                      </button>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};

export default Upload;
