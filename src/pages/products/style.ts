import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    height: "100%",
    overflow: "scroll",

    "& .MuiTypography-displayBlock": {
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
  },
});
