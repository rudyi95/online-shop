import { makeStyles } from "@material-ui/core/styles";

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
    height: "calc(100vh - 210px)",
    overflow: "scroll",
    border: "1px black solid",
  },
});
