import { memo } from "react";
import { useStyles } from "./use-styles";
import Avatar from "@mui/material/Avatar";

export const Message = memo(({ message }) => {
  const styles = useStyles();

  return (
    <div
      id={message.id}
      className={
        message.author !== "Bot" ? styles.userMessage : styles.botMessage
      }
    >
      <div
        className={message.author !== "Bot" ? styles.userText : styles.botText}
      >
        <Avatar sx={{ width: 30, height: 30 }} />
        <div className={styles.author}>{message.author}</div>
        <div className={styles.text}>{message.message}</div>
      </div>
      <div className={styles.date}>12:03</div>
    </div>
  );
});
