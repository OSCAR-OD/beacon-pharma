import {
  //React,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import "./AdminPanel.css";
import "./DoctorDetail.css";
import "./PatientProfile.css";
import ProfilePic from "../Components/Sidebar/ProfilePic";
import Sidebar from "../Components/Sidebar/Sidebar";
export default function DoctorStatus() {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="approval-page">
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />
      <div className="container-body">
      {/* Top Navbar */}
      <header className="approval-header">
        <button className="menu-btn"
         onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
          <i className="fa-solid fa-bars"></i>
        </button>
        <h2>Appointment &gt; Doctor Status</h2>
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
      {/* Main Profile Content */}
      <main className="profile-container">
        <div className="profile-card">
          <div className="profile-img-wrapper">
            <img
              src="/assets/images/doctor.png"
              alt="Doctor"
              className="profile-img"
            />
            <span className="active-status"></span>
          </div>
          <div className="profile-info">
            <h2>Dr. Shamim Shakil</h2>
            <p>
              Degree: &nbsp;<span className="highlight">MBBS</span>
            </p>
            <br />
            <p>
              BMDC Reg No: &nbsp;<span className="highlight">56707</span>
            </p>
            <br />
            <p>
              Specialty: &nbsp;<span className="highlight">Orthopedics</span>
            </p>
            <br />
            <br />
            <div className="status-btns">
              <button className="today-btn">TODAY-5/12</button>
              <button className="week-btn">WEEK-12/72</button>
              <button className="month-btn">MONTH-55/312</button>
            </div>
          </div>
        </div>
      </main>
    </div>
    </div>
  );
}
