import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => {
  return {
    wrapper: {
      border: `1px solid #ffffff`,
      padding: "15px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      width: "100%",
    },
    massages: {
      overflowY: "auto",
      paddingRight: "10px",
      "&::-webkit-scrollbar": {
        width: "0.4em",
      },
      "&::-webkit-scrollbar-track": {
        boxShadow: "inset 0 0 3px grey",
        borderRadius: "10px",
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "rgba(0,0,0,.4)",
        borderRadius: "10px",
      },
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
