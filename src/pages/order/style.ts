import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    padding: 10,

    "& button": {
      margin: 5,
      marginTop: 30,
    },
  },
  orderCost: {
    fontSize: 24,
    marginTop: 10,
  },
  total: {
    color: "#504F5A",
    marginLeft: 5,
    marginTop: 50,
    fontSize: 22,
  },
});
