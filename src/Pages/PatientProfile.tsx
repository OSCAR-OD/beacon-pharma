import React from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import "./AdminPanel.css";
import "./DoctorDetail.css";
import "./PatientProfile.css";
export default function PatientProfile() {
  const navigate = useNavigate();

  return (
    <div className="doctor-detail-container">
      {/* Top Navbar */}
      <header className="approval-header">
        <button className="menu-btn">
          <i className="fa-solid fa-bars"></i>
        </button>
        <h2>Search &gt; Patient &gt; Profile</h2>
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
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Doctor"
            className="profile-img"
          />
          <div className="profile-info">
            <h2>Ramim Hasan</h2>
            <p>
              Sex: <span className="highlight">Male</span>
            </p><br />
            <p>
              Age: <span className="highlight">32</span>
            </p><br />
            <p>
              Mobile: <span className="highlight">01713043465</span>
            </p><br />
          </div>
        </div>

        {/* Appointment History */}
        <div className="history-card">
          <h3>Appointment History :</h3>
          <p>
            10 June 2020 | 07:00 PM | Dr. Shamim | 
            &nbsp;<span className="link"> Apt ID : 009834 </span>&nbsp; | Status : Done
          </p>
          <p>
            10 June 2020 | 07:00 PM | Dr. Shamim | 
            &nbsp;<span className="link"> Apt ID : 009834 </span>&nbsp; | Status : Upcoming
          </p>
        </div>

        {/* Payment History */}
        <div className="history-card">
          <h3>Payment History :</h3>
          <p>
            10 June 2020 | 700 TK | Dr. Shamim | 
            &nbsp;<span className="link"> Payment ID : 34467 </span>&nbsp; | Status : Paid
          </p>
          <p>
            10 June 2020 | 700 TK | Dr. Shamim | 
            &nbsp;<span className="link"> Payment ID : 34467 </span>&nbsp; | Status : Paid
          </p>
        </div>
      </main>
    </div>
  );
}
