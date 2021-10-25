import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    height: "100%",

    '& .MuiTableCell-alignRight': {
      textAlign: 'left'
    },
  },
  form: {
    height: "inherit",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  data: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    // height: "calc(100vh - 320px)",
    height: "calc(100vh - 170px)",
    overflow: "scroll",
    border: "1px black solid",
  },
  table: {
    // minWidth: 650,
  },
});
