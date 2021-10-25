import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    position: "static",
    bottom: 0,
    width: "100%",
    boxSizing: "border-box",
    padding: 10,
    borderTop: "1px solid lightgray",
    height: 100,
    backgroundColor: "#f1f1f1",
    justifyContent: "space-around",
    display: "flex",

    "& > div:first-child": {
      display: "flex",
      flexDirection: "column",
    },
  },
  blockTitle: {
    color: "#504F5A",
    fontWeight: "bold",
    marginBottom: 10,
  },
  socialItem: {
    fontSize: "14px",
    marginBottom: "5px",
  },
  link: {
    textDecoration: "none",
    color: "rgb(32, 32, 34)",
  },
});
