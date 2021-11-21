import React, { useCallback, useEffect, useRef, useState } from "react";
import { Input, InputAdornment, IconButton } from "@mui/material";
import { Send, Add } from "@mui/icons-material";
import { Message } from "./message";
import { useStyles } from "./use-styles";
import { indigo, blue } from "@mui/material/colors";
import { useParams } from "react-router-dom";

export const MessageList = () => {
  const { roomId } = useParams();
  const styles = useStyles();
  const [messages, setMessages] = useState({});
  const [value, setValue] = useState("");
  const ref = useRef(null);
  const refMessages = useRef(null);

  const sendMessage = useCallback(
    (author = "User", botMessage) => {
      if (value || botMessage) {
        setMessages({
          ...messages,
          [roomId]: [
            ...(messages[roomId] ?? []),
            { author, message: value || botMessage, id: new Date() },
          ],
        });
        setValue("");
      }
    },
    [messages, value, roomId]
  );

  useEffect(() => {
    const roomMassages = messages[roomId] ?? [];
    const lastMessages = roomMassages[roomMassages.length - 1];
    let timerId = null;

    if (roomMassages.length && lastMessages.author !== "Bot") {
      timerId = setTimeout(() => {
        sendMessage("Bot", "Hello from bot");
      }, 300);
    }
    refMessages.current?.scrollTo(0, refMessages.current?.scrollHeight);

    return () => clearInterval(timerId);
  }, [messages, roomId, sendMessage]);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  const handlePressInput = ({ code }) => {
    if (code === "Enter") {
      sendMessage();
    }
  };

  const roomMassages = messages[roomId] ?? [];

  return (
    <div className={styles.wrapper}>
      <div className={styles.massages} ref={refMessages}>
        {roomMassages.map((message, index) => (
          <Message message={message} key={index} />
        ))}
      </div>
      <Input
        fullWidth
        className={styles.input}
        autoFocus={true}
        ref={ref}
        placeholder="enter message..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={handlePressInput}
        startAdornment={
          <InputAdornment position="start">
            <IconButton>
              <Add sx={{ color: indigo[500] }} />
            </IconButton>
          </InputAdornment>
        }
        endAdornment={
          <InputAdornment position="end">
            <Send
              sx={{ color: blue[800] }}
              className={styles.icon}
              onClick={sendMessage}
            />
          </InputAdornment>
        }
      />
    </div>
  );
};
