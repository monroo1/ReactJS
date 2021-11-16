import React from "react";
// import { useStyles } from "./use-styles";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

export const Chat = (item) => {
  // const styles = useStyles();
  return (
    <ListItem>
      <ListItemButton>
        <ListItemText primary={item.name} />
      </ListItemButton>
    </ListItem>
  );
};
