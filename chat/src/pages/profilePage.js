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
import { useMemo, useState } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { profileSelector } from "../store/profile";
import { updateProfile } from "../store/profile";

export const ProfilePage = () => {
  const dispatch = useDispatch();

  const profileSelectorByMemo = useMemo(() => {
    return profileSelector("test props");
  }, []);

  const { name, phone, userName } = useSelector(
    profileSelectorByMemo,
    shallowEqual
  );

  const [form, setForm] = useState({
    name: name,
    phone: phone,
    userName: userName,
  });

  const handleChangeForm = (e) => {
    const field = e.target.getAttribute("data-name");

    setForm({
      ...form,
      [field]: e.target.value,
    });
  };

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
          <ListItemButton dense>
            <ListItemIcon>
              <PersonOutline sx={{ width: 35, height: 35 }} />
            </ListItemIcon>
            <ListItemText primary={name} secondary="Name" />
          </ListItemButton>
          <ListItemButton dense>
            <ListItemIcon>
              <Phone sx={{ width: 30, height: 30 }} />
            </ListItemIcon>
            <ListItemText primary={phone} secondary="Phone" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <AlternateEmail sx={{ width: 30, height: 30 }} />
            </ListItemIcon>
            <ListItemText primary={userName} secondary="User name" />
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
          onChange={handleChangeForm}
          inputProps={{
            "data-name": "name",
          }}
        />
        <TextField
          id="filled-basic"
          label="Filled"
          variant="outlined"
          onChange={handleChangeForm}
          inputProps={{
            "data-name": "phone",
          }}
        />
        <TextField
          id="standard-basic"
          label="Standard"
          variant="outlined"
          onChange={handleChangeForm}
          inputProps={{
            "data-name": "userName",
          }}
        />
        <Button
          variant="contained"
          color="success"
          onClick={() => dispatch(updateProfile(form))}
        >
          Success
        </Button>
      </Box>
    </div>
  );
};
