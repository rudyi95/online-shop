import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  root: {
    position: "relative",
    width: "16rem",
    height: "22rem",
    margin: "0 4rem",
    // [theme.breakpoints.down('sm')]: {
    //   margin: '0 auto'
    // }
  },
  avatar: {
    width: "100%",
    height: "100%",
  },
  button: {
    position: "absolute",
    background: "#03b5e4",
    borderRadius: "50%",
    border: "3px white solid",
    width: 48,
    height: 48,
    padding: "initial",
    bottom: -21,
    right: -21,
    fontWeight: "bold",
    fontSize: 30,
  },
}));

export default useStyles;
