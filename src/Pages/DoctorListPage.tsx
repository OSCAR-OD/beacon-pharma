import React from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import "./AdminPanel.css";
import "./DoctorListPage.css";
export default function DoctorListPage() {
  const navigate = useNavigate();
  const doctors = [
    {
      id: 1,
      date: "30/June/2020",
      name: "Dr. Shamim Shakil",
      designation: "MBBS",
      division: "Dhaka",
      mobile: " 01779717674",
      specialty: "Orthopedics",
    },
    {
      id: 2,
      date: "30/June/2020",
      name: "Dr. Shamim Shakil",
      designation: "MBBS",
      division: "Dhaka",
      mobile: " 01779717674",
      specialty: "Orthopedics",
    },
    {
      id: 3,
      date: "30/June/2020",
      name: "Dr. Shamim Shakil",
      designation: "MBBS",
      division: "Dhaka",
      mobile: " 01779717674",
      specialty: "Orthopedics",
    },
    {
      id: 4,
      date: "30/June/2020",
      name: "Dr. Shamim Shakil",
      designation: "MBBS",
      division: "Dhaka",
      mobile: " 01779717674",
      specialty: "Orthopedics",
    },
  ];

  return (
    <div className="approval-page">
      {/* Header */}
      <header className="approval-header">
        <button className="menu-btn">
          <i className="fa-solid fa-bars"></i>
        </button>
        <h2>User &gt; Doctor List</h2>
      </header>
      {/* Sub Header */}
      <div className="sub-header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <div className="search-container">
          <i className="fa-solid fa-magnifying-glass search-icon"></i>
          <input
            type="text"
            placeholder="Search your message"
            className="search-input"
          />
        </div>

        <button className="download-btn">
          <i className="fa-solid fa-download"></i> Download All
        </button>
      </div>
      {/* Pending Section */}
      <div className="pending-info">
        <br />
        <h2>Doctor List</h2>
      </div>
      {/* Table */}
      <table className="approval-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Doctor Name</th>
            <th>Designation</th>
            <th>Division</th>
            <th>Mobile</th>
            <th>Specialty</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doc) => (
            <tr
              key={doc.id}
              onClick={() => navigate(`/doctor-profile/${doc.id}`)}
              style={{ cursor: "pointer" }}
            >
              <td>{doc.date}</td>
              <td>{doc.name}</td>
              <td>{doc.designation}</td>
              <td>{doc.division}</td>
              <td>{doc.mobile}</td>
              <td>{doc.specialty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
