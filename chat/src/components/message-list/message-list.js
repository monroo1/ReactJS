import React, { useCallback, useEffect, useRef, useState } from "react";
import { Input, InputAdornment, IconButton } from "@mui/material";
import { Send, Add } from "@mui/icons-material";
import { Message } from "./message";
import { useStyles } from "./use-styles";
import { indigo, blue } from "@mui/material/colors";
import { useParams, useNavigate } from "react-router-dom";

import { sendMessage, messagesSelector } from "../../store/messages";
import { conversationsSelector } from "../../store/conversations";
import { useDispatch, useSelector } from "react-redux";

export const MessageList = () => {
  const { roomId } = useParams();
  const styles = useStyles();
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const ref = useRef(null);
  const refMessages = useRef(null);
  const conversations = useSelector(conversationsSelector);
  const messages = useSelector(messagesSelector(roomId));
  const dispatch = useDispatch();

  const send = useCallback(
    (author = "User", botMessage) => {
      if (value || botMessage) {
        dispatch(sendMessage({ author, message: value || botMessage }, roomId));
        setValue("");
      }
    },
    [value, roomId, dispatch]
  );

  useEffect(() => {
    const lastMessages = messages[messages.length - 1];
    let timerId = null;

    if (messages.length && lastMessages.author !== "Bot") {
      timerId = setTimeout(() => {
        send("Bot", "Hello from bot");
      }, 300);
    }
    refMessages.current?.scrollTo(0, refMessages.current?.scrollHeight);

    return () => clearInterval(timerId);
  }, [messages, roomId, send]);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  useEffect(() => {
    const isValidRoomId = conversations.includes(roomId);
    if (!isValidRoomId && roomId) {
      navigate("/chat");
    }
  }, [roomId, conversations, navigate]);

  const handlePressInput = ({ code }) => {
    if (code === "Enter") {
      send();
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
