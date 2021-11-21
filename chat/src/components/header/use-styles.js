import { makeStyles } from "@mui/styles";

export const headerStyles = makeStyles(() => {
  return {
    header: {
      height: "75px",
      background: "#2a2a2a",
      padding: "0 calc(50% - 1140px / 2)",
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    wrapper: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
  };
});
