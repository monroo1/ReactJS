import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => {
  return {
    wrapper: {
      width: "40%",
      outline: "0.5px solid grey",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    panel: {
      display: "flex",
      justifyContent: "space-around",
      marginBottom: "20px",
    },
  };
});
