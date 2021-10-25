import { makeStyles } from "@mui/styles";

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
