import React from "react";
import { Chats } from "./chats";
import { MessageList } from "./message-list";
import { useStyles } from "./use-style";

export const Main = () => {
  const styles = useStyles();
  return (
    <div className={styles.wrapper}>
      <Chats />
      <MessageList />
    </div>
  );
};
