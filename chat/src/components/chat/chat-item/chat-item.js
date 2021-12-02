import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Typography,
} from "@mui/material";
import { DeleteForever } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { deleteConversation } from "../../../store/conversations";

import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";

export const ChatItem = (item) => {
  const navigate = useNavigate();
  const deleteRoom = (e) => {
    item.dispatch(deleteConversation(item.name));
    setTimeout(() => navigate("/chat"), 100);
  };

  return (
    <ContextMenuTrigger id="contextmenu">
      <ContextMenu id="contextmenu">
        <MenuItem data={{ foo: item.name }} onClick={deleteRoom}>
          <DeleteForever sx={{ color: "black", marginRight: "10px" }} />
          <span style={{ color: "black" }}>Delete</span>
        </MenuItem>
      </ContextMenu>
      <ListItem
        selected={item.selected ? true : false}
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
    </ContextMenuTrigger>
  );
};
