import { useEffect } from "react";
import { Layout, ChatList, MessageList } from "../components";
import { Routes, Route, useNavigate } from "react-router-dom";

export const ChatPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const listener = ({ code }) => {
      if (code === "Escape") {
        navigate("/chat");
      }
    };

    document.addEventListener("keydown", listener);

    return () => document.removeEventListener("keydown", listener);
  }, [navigate]);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout
            chats={<ChatList />}
            messages={<h2 style={{ margin: "auto" }}>Choose chat ...</h2>}
          />
        }
      />
      <Route
        path="/:roomId"
        element={<Layout chats={<ChatList />} messages={<MessageList />} />}
      />
    </Routes>
  );
};
