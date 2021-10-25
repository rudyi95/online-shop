import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {},
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    margin: "10px 0",
  },
  info: {
    width: "44%",
    fontSize: 24,
  },
  results: {
    fontSize: 12,
    color: "gray",
    marginTop: 5,
  },
  actions: {
    width: "44%",
    display: "flex",
    justifyContent: "flex-end",
  },
  priceBtn: {
      marginRight: 20,
  }
});
