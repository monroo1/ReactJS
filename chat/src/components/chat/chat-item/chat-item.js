import React from "react";
import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Typography,
} from "@mui/material";

export const ChatItem = (item) => {
  return (
    <ListItem
      selected={item.selected ? true : false}
      button
      secondaryAction={
        <>
          <Typography
            sx={{
              fontSize: "12px",
              color: "#808080",
              display: "inline",
            }}
            component="span"
          >
            12:30
          </Typography>
        </>
      }
    >
      <ListItemAvatar>
        <Avatar
          sx={{
            width: 40,
            height: 40,
          }}
        />
      </ListItemAvatar>
      <ListItemText
        primary={
          <Typography
            sx={{
              color: "black",
              display: "inline",
              fontWeight: "600",
            }}
            component="span"
          >
            {item.name}
          </Typography>
        }
        secondary={
          <>
            <Typography
              sx={{
                color: "black",
                display: "inline",
              }}
              component="span"
            >
              {item.lastAuthor}
            </Typography>
            {` - ${item.lastMessage}`}
          </>
        }
      />
    </ListItem>
  );
};
