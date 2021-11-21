import { makeStyles } from "@mui/styles";

export const layoutStyles = makeStyles(() => {
  return {
    wrapper: {
      display: "flex",
      height: "calc(100vh - 75px)",
    },
    chats: {
      width: "20%",
      minWidth: "240px",
      outline: "0.5px solid grey",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    messages: {
      display: "flex",
      width: "80%",
      background: "linear-gradient(to bottom right, #d1edf2, pink)",
    },
  };
});
