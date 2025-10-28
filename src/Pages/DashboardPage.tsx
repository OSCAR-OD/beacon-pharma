import {
  //React
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import "./AdminPanel.css";
import "./DoctorDetail.css";
import "./PatientProfile.css";
import Sidebar from "../Components/Sidebar/Sidebar";
export default function DashboardPage() {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="doctor-detail-container">
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />
      <div className="container-body">
        {/* Top Navbar */}
        <header className="approval-header">
          <button
            className="menu-btn"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
          <h2>Dashboard</h2>
        </header>
        {/* Sub Header */}
        <div className="sub-header">
          <button className="back-btn" onClick={() => navigate(-1)}>
            <i className="fa-solid fa-arrow-left"></i>
          </button>
        </div>
        {/* Main Content */}
        <main className="appointment-container">
          <div className="appointment-card">
            <div className="appointment-info">
              <h2>Appointment</h2>
              <br />
              <div className="role-btns">
                <div className="appointment-btn">
                  <button className="appointment-btn-clk">Today</button>
                  126
                </div>
                <div className="appointment-btn">
                  <button className="appointment-btn-clk">This Week</button>
                  787
                </div>
                <div className="appointment-btn">
                  <button className="appointment-btn-clk">Month</button>
                  2787
                </div>
              </div>
            </div>
          </div>
          <div className="appointment-card">
            <div className="appointment-info">
              <h2>Doctor's</h2>
              <br />
              <div className="role-btns">
                <div className="appointment-btn">
                  <button className="appointment-btn-clk">Total</button>
                  1226
                </div>
                <div className="appointment-btn">
                  <button className="appointment-btn-clk">Male</button>
                  787
                </div>
                <div className="appointment-btn">
                  <button className="appointment-btn-clk">Female</button>
                  787
                </div>
              </div>
            </div>
          </div>
          <div className="appointment-card">
            <div className="appointment-info">
              <h2>Doctor Demographic Registered</h2>
              <br />
              <div className="role-btns">
                <button className="appointment-btn-clk">
                  Division
                  <i className="fa-solid fa-angle-down"></i>
                </button>
                <button className="appointment-btn-clk">
                  District
                  <i className="fa-solid fa-angle-down"></i>
                </button>
                <button className="appointment-btn-clk">326</button>
              </div>
            </div>
          </div>
          <div className="appointment-card">
            <div className="appointment-info">
              <h2>Doctor Speciality</h2>
              <br />
              <div className="role-btns">
                <button className="appointment-btn-clk">
                  Speciality
                  <i className="fa-solid fa-angle-down"></i>
                </button>
                <button className="appointment-btn-clk">852</button>
              </div>
            </div>
          </div>
          <div className="appointment-card">
            <div className="appointment-info">
              <h2>Patient Demographic Registered</h2>
              <br />
              <div className="role-btns">
                <button className="appointment-btn-clk">
                  Division
                  <i className="fa-solid fa-angle-down"></i>
                </button>
                <button className="appointment-btn-clk">
                  District
                  <i className="fa-solid fa-angle-down"></i>
                </button>
                <button className="appointment-btn-clk">326</button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
