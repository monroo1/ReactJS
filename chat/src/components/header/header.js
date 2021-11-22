import React from "react";
import { headerStyles } from "./use-styles";
import { Http, PersonOutline, Chat } from "@mui/icons-material";
import { Link } from "react-router-dom";

export const Header = () => {
  const styles = headerStyles();
  return (
    <div className={styles.header}>
      <Link to="/chat">
        <Http sx={{ fontSize: 60, color: "#fff" }} />
      </Link>
      <div className={styles.wrapper}>
        <Link to="/chat">
          <Chat sx={{ fontSize: 30, color: "#fff", marginRight: "25px" }} />
        </Link>
        <Link to="/profile">
          <PersonOutline sx={{ color: "white", fontSize: 40 }} />
        </Link>
      </div>
    </div>
  );
};
