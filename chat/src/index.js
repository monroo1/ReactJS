import React from "react";
import ReactDOM from "react-dom";
import { ChatPage, ProfilePage } from "./pages";
import { Header } from "./components";
import "./normilize.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/chat/*" element={<ChatPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
