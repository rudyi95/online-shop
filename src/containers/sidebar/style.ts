import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    width: 60,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#FAFAFB",
    overflow: "hidden",
    transition: "all 0.2s ease-out",
  },
  openMenu: {
    width: 270,
    transition: "all 0.2s ease-out",
  },
  menuItem: {
    textDecoration: "none",
    color: "rgb(32, 32, 34)",
  },
  activeItem: {
    background: 'grey',
    opacity: 0.5
  }
});
