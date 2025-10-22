//import React from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import "./AdminPanel.css";
export default function ApprovalPage() {
  const navigate = useNavigate();
  const doctors = [
    {
      id: 1,
      date: "30/June/2020",
      time: "02:12PM",
      name: "Dr. Shamim Shakil",
      designation: "MBBS",
      status: "PENDING",
    },
    {
      id: 2,
      date: "29/June/2020",
      time: "02:18PM",
      name: "Dr. Shamim Shakil",
      designation: "MBBS",
      status: "PENDING",
    },
    {
      id: 3,
      date: "30/June/2020",
      time: "02:16PM",
      name: "Dr. Shamim Shakil",
      designation: "MBBS",
      status: "PENDING",
    },
    {
      id: 4,
      date: "30/June/2020",
      time: "02:10PM",
      name: "Dr. Shamim Shakil",
      designation: "MBBS",
      status: "PENDING",
    },
  ];

  return (
    <div className="approval-page">
      {/* Header */}
      <header className="approval-header">
        <button className="menu-btn">
          <i className="fa-solid fa-bars"></i>
        </button>
        <h2>Approval</h2>
        {/* <nav className="navbar">
              <div className="navbar-container">
                <div className="col-lg-2 col-xl-2"></div>
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

      {/* Sub Header */}
      <div className="sub-header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <i className="fa-solid fa-arrow-left"></i>
        </button>
      </div>

      {/* Action Buttons */}
      <div className="approval-actions">
        <button className="btn-approved">APPROVED</button>
        <button className="btn-doc-needed">Further Doc Needed</button>
      </div>

      {/* Pending Section */}
      <div className="pending-info">
        <h3>
          Pending Approval : <span>04</span>
        </h3>
      </div>

      {/* Table */}
      <table className="approval-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Doctor Name</th>
            <th>Designation</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doc) => (
            <tr
              key={doc.id}
              onClick={() => navigate(`/doctor-details-page/${doc.id}`)}
              style={{ cursor: "pointer" }}
            >
              <td>{doc.date}</td>
              <td>{doc.time}</td>
              <td>{doc.name}</td>
              <td>{doc.designation}</td>
              <td className={`status ${doc.status.toLowerCase()}`}>
                {doc.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
