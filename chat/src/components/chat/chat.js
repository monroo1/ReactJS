import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { ChatItem } from "./chat-item";
import { AddBox, Search } from "@mui/icons-material";
import { List, Input, InputAdornment, IconButton } from "@mui/material";

import {
  conversationsSelector,
  createConversation,
} from "../../store/conversations";

export const ChatList = () => {
  const dispatch = useDispatch();
  const { roomId } = useParams();

  const conversations = useSelector(conversationsSelector);

  const createConversationByName = () => {
    const name = prompt("Введите название комнаты");

    const isValidName = !conversations.includes(name);

    if (name && isValidName) {
      dispatch(createConversation(name));
    } else {
      alert("не валидная комната");
    }
  };
  return (
    <>
      <List>
        {conversations.map((chatItem) => (
          <Link key={chatItem} to={`/chat/${chatItem}`}>
            <ChatItem
              name={chatItem}
              lastMessage={chatItem}
              lastAuthor={chatItem}
              selected={chatItem === roomId}
              dispatch={dispatch}
            />
          </Link>
        ))}
      </List>
      <Input
        style={{ padding: "0 20px" }}
        id="filled-basic"
        placeholder="Find chat..."
        variant="filled"
        fullWidth
        endAdornment={
          <>
            <InputAdornment position="end">
              <Search />
            </InputAdornment>
            <IconButton onClick={createConversationByName}>
              <AddBox sx={{ fontSize: "25px", color: "black" }} />
            </IconButton>
          </>
        }
      />
    </>
  );
};
