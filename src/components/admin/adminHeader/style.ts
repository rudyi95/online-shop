import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {},
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    margin: "10px 0",
  },
  actions: {
    width: "44%",
    display: "flex",
    justifyContent: "flex-end",
  },
});
