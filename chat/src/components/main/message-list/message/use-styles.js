import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => {
  return {
    botMessage: {
      padding: "15px 30px",
      display: "flex",
      justifyContent: "space-between",
      margin: "15px 0",
      borderRadius: "50px",
      background: "white",
    },
    userMessage: {
      padding: "15px 30px",
      display: "flex",
      justifyContent: "space-between",
      margin: "15px 0",
      borderRadius: "50px",
      flexDirection: "row-reverse",
      background: "#CCF0E6",
    },
    userText: {
      display: "flex",
      flexDirection: "row-reverse",
      color: "#222222",
    },
    botText: {
      display: "flex",
      color: "#222222",
    },
    author: {
      fontWeight: "600",
      margin: "0 10px",
      fontSize: "16px",
    },
    text: {
      margin: "0 10px",
      fontSize: "16px",
    },
    date: {
      color: "grey",
    },
  };
});
