import React, { useEffect, useRef, useState } from "react";
import { Input, InputAdornment } from "@mui/material";
import { Send, Add } from "@mui/icons-material";
import { Message } from "./message";
import { useStyles } from "./use-styles";
import IconButton from "@mui/material/IconButton";
import { indigo, blue } from "@mui/material/colors";
import { v4 as uuidv4 } from "uuid";

export const MessageList = () => {
  const styles = useStyles();
  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState("");
  const ref = useRef(null);
  const refMessages = useRef(null);

  useEffect(() => {
    const lastMessages = messages[messages.length - 1];
    let timerId = null;
    if (messages.length && lastMessages.author !== "Bot") {
      refMessages.current?.scrollTo(0, refMessages.current?.scrollHeight);
      timerId = setTimeout(() => {
        setMessages([
          ...messages,
          {
            author: "Bot",
            message: "hello from bot",
            date: new Date(),
            id: uuidv4(),
          },
        ]);
      }, 1000);
    }
    return () => clearInterval(timerId);
  }, [messages]);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  const sendMessage = () => {
    if (value) {
      setMessages([
        ...messages,
        { author: "User", message: value, date: new Date(), id: uuidv4() },
      ]);
      setValue("");
    }
  };

  const handlePressInput = ({ code }) => {
    if (code === "Enter") {
      sendMessage();
    }
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.massages} ref={refMessages}>
        {messages.map((message, index) => (
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
