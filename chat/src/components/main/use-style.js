import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => {
  return {
    wrapper: {
      padding: "0 calc(50% - 1140px / 2)",
      display: "flex",
      justifyContent: "space-between",
      height: "calc(100vh - 75px)",
    },
  };
});
