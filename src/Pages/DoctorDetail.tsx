import React from "react";
import "./LoginPage.css";
import "./AdminPanel.css";
import "./DoctorDetail.css";
export default function DoctorDetailPage() {
  return (
  <div className="doctor-detail-container">
      <div className="breadcrumb">Approval &gt; Doctor's Detail</div>

      <div className="doctor-detail-card">
        {/* Left Section */}
        <div className="doctor-info">
          <img
            src="https://via.placeholder.com/100" 
            alt="Doctor"
            className="doctor-photo"
          />

          <h2 className="doctor-name">Dr. Shamim Shakil</h2>
          <p><strong>Degree:</strong> <span className="highlight">MBBS</span></p>
          <p><strong>BMDC Reg No:</strong> <span className="highlight">56707</span></p>
          <p><strong>Specialty:</strong> <span className="highlight">Orthopedics</span></p>
          <p><strong>Relevant Degree:</strong> <span className="highlight">MS, Orthopedics</span></p>
          <p><strong>Sex:</strong> <span className="highlight">Male</span></p>
          <p><strong>Age:</strong> 32</p>
          <p><strong>Mobile:</strong> <a href="tel:01711083447" className="link">01711083447</a></p>
          <p><strong>Email:</strong> <a href="mailto:shamim009922@gmail.com" className="link">shamim009922@gmail.com</a></p>
          <p><strong>Institute:</strong> Khilgaon Hospital</p>
          <p><strong>Chamber:</strong> Khilgaon Taltola</p>
          <p><strong>Note/Reference:</strong> MIO, Khilgaon</p>
          <p><strong>ID:</strong> 23561, 01985551231</p>

          <div className="action-buttons">
            <button className="approve-btn">APPROVE</button>
            <button className="doc-needed-btn">Further Doc Needed</button>
          </div>
        </div>

        {/* Right Section */}
        <div className="doctor-doc">
          <h3>BMDC Reg Document</h3>
          <div className="doc-placeholder"></div>
        </div>
      </div>
    </div>
  );
}
