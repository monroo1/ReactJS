import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => {
  return {
    wrapper: {
      border: `1px solid #ffffff`,
      padding: "15px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      width: "60%",
      background: "linear-gradient(to bottom right, #d1edf2, pink);",
    },
    massages: {
      overflowY: "auto",
    },
    input: {
      color: "#9a9fa1",
      padding: "10px 0",
      fontSize: "15px",
    },
    icon: {
      color: "var(--main-color)",
      cursor: "pointer",
    },
  };
});
