import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    "& button": {
      marginRight: 10,
    },
  },
  next: {
    marginLeft: 10,
  },
});
