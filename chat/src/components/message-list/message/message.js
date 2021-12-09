import { memo } from "react";
import { useStyles } from "./use-styles";
import Avatar from "@mui/material/Avatar";
import { format } from "date-fns";
import { deleteMessage } from "../../../store/messages";
import { useDispatch } from "react-redux";

export const Message = memo(({ message, roomId }) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const delMess = (e) => {
    dispatch(deleteMessage(message.id, roomId));
  };

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
      <div className={styles.date}>{format(message.date, "hh:mm")}</div>
      <button onClick={delMess}>x</button>
    </div>
  );
});
