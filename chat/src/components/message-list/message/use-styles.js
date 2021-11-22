import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => {
  return {
    botMessage: {
      width: "40%",
      maxWidth: "500px",
      minWidth: "200px",
      padding: "10px 20px 10px 15px",
      display: "flex",
      justifyContent: "space-between",
      margin: "5px 0",
      borderRadius: "50px",
      background: "white",
    },
    userMessage: {
      marginLeft: "auto",
      maxWidth: "500px",
      minWidth: "200px",
      width: "40%",
      padding: "10px 15px 10px 20px",
      display: "flex",
      justifyContent: "space-between",
      margin: "5px 0",
      borderRadius: "50px",
      flexDirection: "row-reverse",
      background: "#CCF0E6",
    },
    userText: {
      display: "flex",
      flexDirection: "row-reverse",
      alignItems: "center",
      color: "#222222",
    },
    botText: {
      display: "flex",
      color: "#222222",
      alignItems: "center",
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
      margin: "auto 0",
    },
  };
});
