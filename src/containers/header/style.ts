import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    position: 'inherit',
    boxSizing: "border-box",
    backgroundColor: "#FAFAFB",
  },
  headerToolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  leftToolbar: {
    display: "flex",
    alignItems: "center",
  },
  rightToolbar: {
    display: "flex",
    "& > *": {
      display: "flex",
      alignItems: "center",
      margin: "0 15px",
    },
  },
  iconButton: {
    display: "flex",
    color: "black",
    textDecoration: "none",
    fontSize: "x-large",
  },
  logo: {
    width: 100,
    marginLeft: 20,
    cursor: "pointer",
  },
  search: {
    marginLeft: 40,
    marginBottom: 15,
  },
  searchBtn: {
    marginLeft: 20,
  },
  searchIcon: {
    display: "flex",
    color: "gray",

    "& svg": {
      fontSize: 23,
    },
  },
  categories: {
    maxWidth: 200,
    marginLeft: 20,
  },
  phoneIcon: {
    borderRadius: 50,
  },
  instagramIcon: {
    borderRadius: 50,

    "& svg": {
      marginTop: 5,
      color: "gray",
    },
  },
});
