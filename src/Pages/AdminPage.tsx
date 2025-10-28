import {
  //React
  useState,
} from "react";
import "./LoginPage.css";
import "./AdminPanel.css";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Components/Sidebar/Sidebar";
export default function AdminPanel() {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
      <div className="admin-wrapper">
        {/* Admin Panel */}
        <div className="admin-panel">
          <Sidebar
            isOpen={isSidebarOpen}
            toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
          />
          <div className="container-body">
            <header className="admin-header">
              <button
                className="menu-btn"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              >
                <i className="fa-solid fa-bars"></i>
              </button>
              <h2>Admin Panel Home</h2>
              {/* <nav className="navbar">
              <div className="navbar-container">
                <div className="navbar-right">
                  <div className="navbar-user">
                    <img
                      src="https://i.pravatar.cc/32"
                      alt="avatar"
                      className="navbar-avatar"
                    />
                  </div>
                </div>
              </div>
            </nav> */}
            </header>
            <main className="admin-body">
              <div className="row"></div>
              <div className="cards">
                <div
                  className="card"
                  onClick={() => navigate("/approval-page")}
                >
                  <i className="fa-solid fa-circle-check admin-icon approval-icon"></i>
                  <br />
                  <br />
                  Approval
                </div>
                <div className="card" onClick={() => navigate("/user")}>
                  <i className="fa-solid fa-circle-user admin-icon User-icon"></i>
                  <br />
                  <br />
                  User
                </div>
                <div className="card" onClick={() => navigate("/search")}>
                  <i className="fa-solid fa-magnifying-glass admin-icon Search-icon"></i>
                  <br />
                  <br />
                  Search
                </div>
                <div className="card" onClick={() => navigate("/appointment")}>
                  <i className="fa-solid fa-clipboard-list admin-icon Appointment-icon"></i>
                  <br />
                  <br />
                  Appointment
                </div>
                <div className="card" onClick={() => navigate("/payment")}>
                  <i className="fa-solid fa-credit-card admin-icon Payment-icon"></i>
                  <br />
                  <br />
                  Payment
                </div>
                <div className="card" onClick={() => navigate("/disbursement")}>
                  <i className="fa-solid fa-money-bill-wave admin-icon Disbursement-icon"></i>
                  <br />
                  <br />
                  Disbursement
                </div>
                <div className="card">
                  <i className="fa-solid fa-folder-open admin-icon Communication-icon"></i>
                  <br />
                  <br />
                  Communication Modul
                </div>
                <div className="card" onClick={() => navigate("/chat")}>
                  <i className="fa-solid fa-envelope admin-icon Chat-icon"></i>
                  <br />
                  <br />
                  Chat & FAQ
                </div>
                <div className="card" onClick={() => navigate("/prescription")}>
                  <i className="fa-solid fa-file-prescription admin-icon Prescription-icon"></i>
                  <br />
                  <br />
                  Prescription
                </div>
                <div className="card" onClick={() => navigate("/dashboard")}>
                  <i className="fa-solid fa-grip admin-icon Dashboard-icon"></i>
                  <br />
                  <br />
                  Dashboard
                </div>
              </div>
              <aside className="right-sidebar">
                <div className="slot-box">
                  <h3>Today's Appointment</h3>
                  <br />
                  <h4>Total Slot</h4>
                  <span className="slot-value">99/100</span>
                </div>

                <div className="slot-box">
                  <h4>Last Day Served</h4>
                  <span className="slot-value">87</span>
                </div>
              </aside>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
