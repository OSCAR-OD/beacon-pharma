import React from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import "./AdminPanel.css";
import "./UserPage.css";
export default function ChatPage() {
  const navigate = useNavigate();
  return (
    <div className="user-container">
      {/* Header */}
      <header className="approval-header">
        <button className="menu-btn">
          <i className="fa-solid fa-bars"></i>
        </button>
        <h2>Chat & FAQ</h2>
      </header>
      {/* Sub Header */}
      <div className="sub-header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <i className="fa-solid fa-arrow-left"></i>
        </button>
      </div>
      <div className="user-card">
        <button className="btn list chat-btn" onClick={() => navigate("/faq")}>
          FAQ
        </button>
        <button
          className="btn patient chat-btn"
          onClick={() => navigate("/chat-page")}
        >
          Chat
        </button>
      </div>
    </div>
  );
}
