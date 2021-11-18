import { memo } from "react";
import { useStyles } from "./use-styles";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";

export const Message = memo(({ message }) => {
  const styles = useStyles();

  return (
    <div id={message.id}
      className={
        message.author !== "Bot" ? styles.userMessage : styles.botMessage
      }
    >
      <div
        className={message.author !== "Bot" ? styles.userText : styles.botText}
      >
        <Avatar sx={{ width: 20, height: 20, bgcolor: deepOrange[500] }}>
          N
        </Avatar>
        <div className={styles.author}>{message.author}</div>
        <div className={styles.text}>{message.message}</div>
      </div>
      <div className={styles.date}>12:03</div>
    </div>
  );
});
