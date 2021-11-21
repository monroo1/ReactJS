import { React, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ChatItem } from "./chat-item";
import { useStyles } from "./use-styles";
import { Settings, Edit, AddBox, Search } from "@mui/icons-material";
import { List, Input, InputAdornment, IconButton } from "@mui/material";

export const ChatList = () => {
  const styles = useStyles();
  const { roomId } = useParams();
  const [chats] = useState([
    {
      name: "ReactJS",
      lastAuthor: "User",
      lastMessage: "lastMessage",
    },
    {
      name: "JS, HTML and CSS",
      lastAuthor: "User",
      lastMessage: "lastMessage",
    },
    {
      name: "Общение",
      lastAuthor: "User",
      lastMessage: "lastMessage",
    },
    {
      name: "Another chat",
      lastAuthor: "User",
      lastMessage: "lastMessage",
    },
  ]);

  return (
    <>
      <div>
        <Input
          style={{ padding: "0 20px" }}
          id="filled-basic"
          placeholder="Find chat..."
          variant="filled"
          fullWidth
          endAdornment={
            <InputAdornment position="end">
              <Search />
            </InputAdornment>
          }
        />
        <List>
          {chats.map((chatItem) => (
            <Link key={chatItem.name} to={`/chat/${chatItem.name}`}>
              <ChatItem
                name={chatItem.name}
                lastMessage={chatItem.lastMessage}
                lastAuthor={chatItem.lastAuthor}
                selected={chatItem.name === roomId}
              />
            </Link>
          ))}
        </List>
      </div>
      <div className={styles.panel}>
        <IconButton>
          <Settings sx={{ fontSize: "25px", color: "black" }} />
        </IconButton>
        <IconButton>
          <Edit sx={{ fontSize: "25px", color: "black" }} />
        </IconButton>
        <IconButton>
          <AddBox sx={{ fontSize: "25px", color: "black" }} />
        </IconButton>
      </div>
    </>
  );
};
