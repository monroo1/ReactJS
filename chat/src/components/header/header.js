import React from "react";
import { headerStyles } from "./use-styles";
import { Http, PersonOutline } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";

export const Header = () => {
  const styles = headerStyles();
  return (
    <div className={styles.header}>
      <Http sx={{ fontSize: 60 }} />
        <IconButton>
          <PersonOutline sx={{ color: "white", fontSize: 40 }} />
        </IconButton>
    </div>
  );
};
