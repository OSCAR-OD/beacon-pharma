import React from "react";
import "../../Pages/AdminPanel.css"; 
import { useNavigate } from "react-router-dom";
interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
    //const navigate = useNavigate();

  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <button className="toggle-menu-btn" onClick={toggleSidebar}>
        <i className="fa-solid fa-xmark"></i>
      </button>
      <ul className="sidebar-menu">
        <li>
          <a href="/admin-dashboard">
            <i className="fa-solid fa-house-user sidebar-icon panel-icon"></i>
            &nbsp;&nbsp;<span>Admin Panel</span>
          </a>
        </li>
        <li>
          <a href="/approval-page">
            <i className="fa-solid fa-circle-check sidebar-icon approval-icon"></i>
            &nbsp;&nbsp;<span>Approval</span>
          </a>
        </li>
        <li>
          <a href="/user">
            <i className="fa-solid fa-circle-user sidebar-icon User-icon"></i>
            &nbsp;&nbsp;<span>User</span>
          </a>
        </li>
        <li>
          <a href="/search">
            <i className="fa-solid fa-magnifying-glass sidebar-icon Search-icon"></i>
            &nbsp;&nbsp;<span>Search</span>
          </a>
        </li>
        <li>
          <a href="/appointment">
            <i className="fa-solid fa-clipboard-list sidebar-icon Appointment-icon"></i>
            &nbsp;&nbsp;<span>Appointment</span>
          </a>
        </li>
        <li>
          <a href="/payment">
            <i className="fa-solid fa-credit-card sidebar-icon Payment-icon"></i>
            &nbsp;&nbsp;<span>Payment</span>
          </a>
        </li>
        <li>
          <a href="/disbursement">
            <i className="fa-solid fa-money-bill-wave sidebar-icon Disbursement-icon"></i>
            &nbsp;&nbsp;<span>Disbursement</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa-solid fa-folder-open sidebar-icon Communication-icon"></i>
            &nbsp;&nbsp;<span>Communication Modul</span>
          </a>
        </li>
        <li>
          <a href="/chat">
            <i className="fa-solid fa-envelope sidebar-icon Chat-icon"></i>
            &nbsp;&nbsp;<span>Chat & FAQ</span>
          </a>
        </li>
        <li>
          <a href="/prescription">
            <i className="fa-solid fa-file-prescription sidebar-icon Prescription-icon"></i>
            &nbsp;&nbsp;<span>Prescription</span>
          </a>
        </li>
        <li>
          <a href="/dashboard">
            <i className="fa-solid fa-grip sidebar-icon Dashboard-icon"></i>
            &nbsp;&nbsp;<span>Dashboard</span>
          </a>
        </li>
        <li>
          <a href="/role-management">
            <i className="fa-solid fa-shield-halved sidebar-icon Communication-icon"></i>
            &nbsp;&nbsp;<span>Role Management</span>
          </a>
        </li>
        {/* <li>
          <a 
            // onClick={handleLogout}
          >
            <i className="fa-solid fa-arrow-right-from-bracket sidebar-icon Prescription-icon"></i>
            &nbsp;&nbsp;<span>Logout</span>
          </a>
        </li> */}
      </ul>
    </aside>
  );
};

export default Sidebar;
