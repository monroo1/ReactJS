import React from "react";
import { useStyles } from "./use-styles";
import List from "@mui/material/List";
import { Settings, Edit, AddBox, Search } from "@mui/icons-material";
import { Chat } from "./chat-item";
import IconButton from "@mui/material/IconButton";
import { Input, InputAdornment } from "@mui/material";

export const Chats = () => {
  const styles = useStyles();
  const chats = [
    { name: "ReactJS", id: 1 },
    { name: "HTML/CSS", id: 2 },
    { name: "Общение", id: 3 },
    { name: "Another chat", id: 4 },
  ];

  return (
    <div className={styles.wrapper}>
      <div>
        <Input
          style={{ padding: "10px 20px" }}
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
            <Chat name={chatItem.name} key={chatItem.id} />
          ))}
        </List>
      </div>
      <div className={styles.panel}>
        <IconButton>
          <Settings sx={{ fontSize: "30px", color: "black" }} />
        </IconButton>
        <IconButton>
          <Edit sx={{ fontSize: "30px", color: "black" }} />
        </IconButton>
        <IconButton>
          <AddBox sx={{ fontSize: "30px", color: "black" }} />
        </IconButton>
      </div>
    </div>
  );
};
