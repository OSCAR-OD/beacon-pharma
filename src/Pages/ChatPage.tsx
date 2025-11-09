import {
  //React
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import "./AdminPanel.css";
import "./UserPage.css";
import Sidebar from "../Components/Sidebar/Sidebar";
import ProfilePic from "../Components/Sidebar/ProfilePic";
export default function ChatPage() {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="user-container">
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />
      <div className="container-body">
        {/* Header */}
        <header className="approval-header">
          <button
            className="menu-btn"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
          <h2>Chat & FAQ</h2>
            <nav className="navbar">
            <div className="navbar-container">
              <div className="navbar-right">
                <ProfilePic />
              </div>
            </div>
          </nav>
        </header>
        {/* Sub Header */}
        <div className="sub-header">
          <button className="back-btn" onClick={() => navigate(-1)}>
            <i className="fa-solid fa-arrow-left"></i>
          </button>
        </div>
        <div className="user-card">
          <button
            className="btn list chat-btn"
            onClick={() => navigate("/faq")}
          >
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
    </div>
  );
}
