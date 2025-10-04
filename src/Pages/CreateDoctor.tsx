import React from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import "./AdminPanel.css";
import "./DoctorDetail.css";
export default function CreateDoctor() {
  const navigate = useNavigate();
  return (
    <div className="doctor-detail-container">
      {/* Header */}
      <header className="approval-header">
        <button className="menu-btn">
          <i className="fa-solid fa-bars"></i>
        </button>
        <h2>User &gt; Create Doctor</h2>
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
            src="/assets/images/dr.png"
            alt="Doctor"
            className="doctor-photo"
          />
          <div>
            <h2 className="doctor-name">Dr. Shamim Shakil</h2>
            <p>
              <strong>Degree:</strong>&nbsp;
              <span className="highlight"></span>
            </p><br />
            <p>
              <strong>BMDC Reg No:</strong>&nbsp;
              <span className="highlight"></span>
            </p><br />
            <p>
              <strong>Specialty:</strong>&nbsp;
              <span className="highlight"></span>
            </p><br />
            <p>
              <strong>Relevant Degree:</strong>&nbsp;
              <span className="highlight"></span>
            </p><br />
            <p>
              <strong>Sex:</strong>&nbsp;
              <span className="highlight"></span>
            </p><br />
            <p>
              <strong>Age:</strong>&nbsp;
              <span className="highlight"></span>
            </p><br />
            <p>
              <strong>Mobile:</strong>&nbsp;
              <span className="highlight">
                <a href="tel:01711083447" className="link">
               
              </a></span>
            </p><br />
            <p>
              <strong>Email:</strong>&nbsp;
               <span className="highlight">
              <a href="" className="link">
                
              </a>
              </span>
            </p><br />
            <p>
              <strong>Institute:</strong>&nbsp;
               <span className="highlight">
              
              </span>
            </p><br />
            <p>
              <strong>Chamber:</strong>&nbsp;
               <span className="highlight">
              
              </span>
            </p><br />
            <p>
              <strong>Note/Reference:</strong>&nbsp;
              <span className="highlight">
                </span>
            </p><br />
            <p>
              <strong>ID:</strong>&nbsp;
              <span className="highlight"></span>
            </p><br />
            <div className="action-buttons">
              <button className="approve-btn">APPROVED</button>
              {/* <button className="doc-needed-btn">Further Doc Needed</button> */}
            </div>
          </div>
        </div>
        {/* Right Section */}
        <div className="doctor-doc">
          <h3>BMDC Reg Document</h3>
          <div className="reg-placeholder">
            <div className="reg-btn">
               <i className="fa-solid fa-cloud-arrow-up"></i>
            </div>
           </div>
        </div>
      </div>
    </div>
  );
}
