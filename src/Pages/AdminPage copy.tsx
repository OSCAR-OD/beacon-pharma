import React from "react";
import "./LoginPage.css";
import "./AdminPanel.css";

export default function AdminPanel() {
  return (<>
    <div className="admin-panel">
      <header className="admin-header">
        <button className="menu-btn">
          <i className="fa-solid fa-bars"></i>
        </button>
        <h2>Admin Panel Home</h2>
      </header>

      <div className="admin-body">
        <div className="cards">
          <div className="card">
            <i className="fa-solid fa-circle-check admin-icon approval-icon"></i><br /><br />
            Approval</div>
          <div className="card">
            <i className="fa-solid fa-circle-user admin-icon User-icon"></i><br /><br />
            User</div>
          <div className="card">
            <i className="fa-solid fa-magnifying-glass admin-icon Search-icon"></i><br /><br />
            Search</div>
          <div className="card">
            <i className="fa-solid fa-clipboard-list admin-icon Appointment-icon"></i><br /><br />
            Appointment</div>
          <div className="card">
            <i className="fa-solid fa-credit-card admin-icon Payment-icon"></i><br /><br />
            Payment</div>
          <div className="card">
            <i className="fa-solid fa-money-bill-wave admin-icon Disbursement-icon"></i><br /><br />
            Disbursement</div>
          <div className="card">
            <i className="fa-solid fa-folder-open admin-icon Communication-icon"></i><br /><br />
            Communication Modul</div>
          <div className="card">
            <i className="fa-solid fa-envelope admin-icon Chat-icon"></i><br /><br />
            Chat & FAQ</div>
          <div className="card">
            <i className="fa-solid fa-file-prescription admin-icon Prescription-icon"></i><br /><br />
            Prescription</div>
          <div className="card">
            <i className="fa-solid fa-grip admin-icon Dashboard-icon"></i><br /><br />
            Dashboard</div>
        </div>
        <aside className="sidebar">
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
    </>
  );
}