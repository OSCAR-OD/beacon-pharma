import React, { useState } from "react";
import "./LoginPage.css";
import "./AdminPanel.css";
import { useNavigate } from "react-router-dom";
export default function AdminPanel() {
    const navigate = useNavigate();
  //const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <>
  <div className="admin-wrapper">
      {/* Sidebar */}
 {/* <aside className={`sidebar-nav ${isSidebarOpen ? "open" : "closed"}`}>
        <h3 className="sidebar-title">Menu</h3>
        <ul className="sidebar-menu">
          <li>
            <button onClick={() => navigate("/admin-dashboard")}>
              <img
                src="./img/icon/Dashboard.svg"
                alt="dashboard"
                className="menu-icon"
              />
              <span>Dashboard</span>
            </button>
          </li>
          <li>
            <button>
              <img src="./img/icon/Packages.svg" alt="Packages" className="menu-icon" />
              <span>Packages</span>
            </button>
          </li>
          <li>
            <button>
              <img
                src="./img/icon/IntranetService.svg"
                alt="Intranet Service"
                className="menu-icon"
              />
              <span>Intranet Service</span>
            </button>
          </li>
          <li>
            <button>
              <img src="./img/icon/Transaction.svg" alt="Transaction" className="menu-icon" />
              <span>Transaction</span>
            </button>
          </li>
          <li>
            <button>
              <img src="./img/icon/Retailers.svg" alt="Retailers" className="menu-icon" />
              <span>Retailers</span>
            </button>
          </li>
          <li>
            <button>
              <img src="./img/icon/Orders.svg" alt="Orders" className="menu-icon" />
              <span>Orders</span>
            </button>
          </li>
          <li>
            <button>
              <img src="./img/icon/Reports.svg" alt="Reports" className="menu-icon" />
              <span>Reports</span>
            </button>
          </li>
          <li>
            <button>
              <img src="./img/icon/Settings.svg" alt="Settings" className="menu-icon" />
              <span>Settings</span>
            </button>
          </li>
          <li>
            <button>
              <img src="./img/icon/Logout.svg" alt="Logout" className="menu-icon" />
              <span>Logout</span>
            </button>
          </li>
        </ul>
      </aside> */}
      {/* Admin Panel */}
      <div className="admin-panel">
        <header className="admin-header">
          <button className="menu-btn"
          //  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
           >
            <i className="fa-solid fa-bars"></i>
          </button>
          <h2>Admin Panel Home</h2>
        </header>

        <div className="admin-body">
          <div className="cards">
            <div className="card"
               onClick={() => navigate("/approval-page")}
            style={{ cursor: "pointer" }}
            >
              <i className="fa-solid fa-circle-check admin-icon approval-icon"></i>
              <br />
              <br />
              Approval
            </div>
            <div className="card">
              <i className="fa-solid fa-circle-user admin-icon User-icon"></i>
              <br />
              <br />
              User
            </div>
            <div className="card">
              <i className="fa-solid fa-magnifying-glass admin-icon Search-icon"></i>
              <br />
              <br />
              Search
            </div>
            <div className="card">
              <i className="fa-solid fa-clipboard-list admin-icon Appointment-icon"></i>
              <br />
              <br />
              Appointment
            </div>
            <div className="card">
              <i className="fa-solid fa-credit-card admin-icon Payment-icon"></i>
              <br />
              <br />
              Payment
            </div>
            <div className="card">
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
            <div className="card">
              <i className="fa-solid fa-envelope admin-icon Chat-icon"></i>
              <br />
              <br />
              Chat & FAQ
            </div>
            <div className="card">
              <i className="fa-solid fa-file-prescription admin-icon Prescription-icon"></i>
              <br />
              <br />
              Prescription
            </div>
            <div className="card">
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
        </div>
      </div>
      </div>
    </>
  );
}
