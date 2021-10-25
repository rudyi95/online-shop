import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  root: {
    height: "100%",
    display: "flex",
    overflow: "scroll",

    "& > div:last-child": {
      width: "100%",
      display: "flex",
    },
  },
}));

export default useStyles;
