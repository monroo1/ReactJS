import {
  Avatar,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
  Box,
  Button,
} from "@mui/material";
import { AlternateEmail, Phone, PersonOutline } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";

export const ProfilePage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state);
  return (
    <div
      style={{
        padding: "0 calc(50% - 1140px / 2)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div component="list" style={{ display: "flex", alignItems: "center" }}>
        <Avatar sx={{ width: 150, height: 150 }} variant="rounded" />
        <List
          sx={{ width: "100%", maxWidth: 260, bgcolor: "background.paper" }}
          component="nav"
          dense
        >
          <ListItemButton>
            <ListItemIcon>
              <PersonOutline sx={{ width: 35, height: 35 }} />
            </ListItemIcon>
            <ListItemText primary={user.name} secondary="Name" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <Phone sx={{ width: 30, height: 30 }} />
            </ListItemIcon>
            <ListItemText primary={user.phone} secondary="Phone" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <AlternateEmail sx={{ width: 30, height: 30 }} />
            </ListItemIcon>
            <ListItemText primary={user.userName} secondary="User name" />
          </ListItemButton>
        </List>
      </div>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          onInput={(e) => {
            user.name = e.target.value;
          }}
        />
        <TextField
          id="filled-basic"
          label="Filled"
          variant="outlined"
          onInput={(e) => {
            user.phone = e.target.value;
          }}
        />
        <TextField
          id="standard-basic"
          label="Standard"
          variant="outlined"
          onInput={(e) => {
            user.userName = e.target.value;
          }}
        />
        <Button
          variant="contained"
          color="success"
          onClick={() => dispatch({ type: "form" })}
        >
          Success
        </Button>
      </Box>
    </div>
  );
};
