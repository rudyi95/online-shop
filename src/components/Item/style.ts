import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    width: 265,
    height: 341,
    margin: "10px auto 10px auto",

    "& .MuiCardMedia-root": {
      width: "100%",
      height: "100%",
      backgroundSize: "contain",
    },
  },
  actionArea: {
    height: "100%",
  },
  content: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
  },
  itemImg: {
    width: 140,
    height: 140,
  },
  infoActions: {
    position: "absolute",
    top: -10,
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  promotion: {
    margin: 8,
    color: "#1a9349",
    fontWeight: "bold",
  },
  actions: {
    height: 45,
    justifyContent: "space-around",
    padding: 10,
  },
  details: {
    marginRight: 60,
    marginLeft: 8,
  },
});
