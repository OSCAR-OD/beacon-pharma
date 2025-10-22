//import React from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import "./AdminPanel.css";
import "./DoctorDetail.css";
export default function DoctorsProfilePage() {
  const navigate = useNavigate();
  return (
    <div className="doctor-detail-container">
      {/* Header */}
      <header className="approval-header">
        <button className="menu-btn">
          <i className="fa-solid fa-bars"></i>
        </button>
        <h2>Search &gt; Doctor Profile</h2>
      </header>
      {/* Sub Header */}
      <div className="sub-header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <i className="fa-solid fa-arrow-left"></i>
        </button>
      </div>
      <div className="doctor-detail-card">
        {/* Left Section */}
        <div className="doctor-info">
          <img
            // width={100}
            // height={100}
            src="/assets/images/drActive.png"
            alt="Doctor"
            className="doctor-photo"
          />
          <div>
            <h2 className="doctor-name">Dr. Shamim Shakil</h2>
            <p>
              <strong>Degree:</strong>&nbsp;
              <span className="highlight">MBBS</span>
            </p><br />
            <p>
              <strong>BMDC Reg No:</strong>&nbsp;
              <span className="highlight">56707</span>
            </p><br />
            <p>
              <strong>Specialty:</strong>&nbsp;
              <span className="highlight">Orthopedics</span>
            </p><br />
            <p>
              <strong>Relevant Degree:</strong>&nbsp;
              <span className="highlight">MS, Orthopedics</span>
            </p><br />
            <p>
              <strong>Sex:</strong>&nbsp;
              <span className="highlight">Male</span>
            </p><br />
            <p>
              <strong>Age:</strong>&nbsp;
              <span className="highlight">32</span>
            </p><br />
            <p>
              <strong>Mobile:</strong>&nbsp;
              <span className="highlight">
                <a href="tel:01711083447" className="link">
                01711083447
              </a></span>
            </p><br />
            <p>
              <strong>Email:</strong>&nbsp;
               <span className="highlight">
              <a href="mailto:shamim009922@gmail.com" className="link">
                shamim009922@gmail.com
              </a>
              </span>
            </p><br />
            <p>
              <strong>Institute:</strong>&nbsp;
               <span className="highlight">
              Khilgaon Hospital
              </span>
            </p><br />
            <p>
              <strong>Chamber:</strong>&nbsp;
               <span className="highlight">
              Khilgaon Taltola
              </span>
            </p><br />
            <p>
              <strong>Note/Reference:</strong>&nbsp;
              <span className="highlight">MIO, Khilgaon
                </span>
            </p><br />
            <p>
              <strong>ID:</strong>&nbsp;
              <span className="highlight">23561, 01985551231</span>
            </p><br />
            <div className="dr-profile-action-buttons">
              <p className="action-txt">if in disable status, then reanable</p>
               <div className="action-btn-row">
              <button className="disable-btn">DISABLE</button>
              <button className="reenable-btn">RE-ENABLE</button>
              </div>
            </div>
          </div>
        </div>
        {/* Right Section */}
        <div className="doctor-doc">
          <h3>BMDC Reg Document</h3>
          <div className="doc-placeholder">
          </div>
        </div>
      </div>
    </div>
  );
}
