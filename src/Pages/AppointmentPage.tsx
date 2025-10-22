//import React from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import "./AdminPanel.css";
import "./SearchPage.css";
export default function AppointmentPage() {
  const navigate = useNavigate();
  const doctors = [
    {
      id: 1,
      date: "30/June | 2:28PM",
      name: "Dr. Shamim Shakil",
      appointmentId: "  2364565",
      patient: "Tanvir Hasan",
      mobile: " 01779717674",
      specialty: "Orthopedics",
    },
    {
      id: 2,
      date: "30/June | 2:28PM",
      name: "Dr. Shamim Shakil",
      appointmentId: "  2364565",
      patient: "Tanvir Hasan",
      mobile: " 01779717674",
      specialty: "Orthopedics",
    },
    {
      id: 3,
      date: "30/June | 2:28PM",
      name: "Dr. Shamim Shakil",
      appointmentId: "  2364565",
      patient: "Tanvir Hasan",
      mobile: " 01779717674",
      specialty: "Orthopedics",
    },
    {
      id: 4,
      date: "30/June | 2:28PM",
      name: "Dr. Shamim Shakil",
      appointmentId: "  2364565",
      patient: "Tanvir Hasan",
      mobile: " 01779717674",
      specialty: "Orthopedics",
    },
    {
      id: 5,
      date: "30/June | 2:28PM",
      name: "Dr. Shamim Shakil",
      appointmentId: "  2364565",
      patient: "Tanvir Hasan",
      mobile: " 01779717674",
      specialty: "Orthopedics",
    },
    {
      id: 6,
      date: "30/June | 2:28PM",
      name: "Dr. Shamim Shakil",
      appointmentId: "  2364565",
      patient: "Tanvir Hasan",
      mobile: " 01779717674",
      specialty: "Orthopedics",
    },
    {
      id: 7,
      date: "30/June | 2:28PM",
      name: "Dr. Shamim Shakil",
      appointmentId: "  2364565",
      patient: "Tanvir Hasan",
      mobile: " 01779717674",
      specialty: "Orthopedics",
    },
    {
      id: 8,
      date: "30/June | 2:28PM",
      name: "Dr. Shamim Shakil",
      appointmentId: "  2364565",
      patient: "Tanvir Hasan",
      mobile: " 01779717674",
      specialty: "Orthopedics",
    }
  ];

  return (
    <div className="approval-page">
      {/* Header */}
      <header className="approval-header">
        <button className="menu-btn">
          <i className="fa-solid fa-bars"></i>
        </button>
        <h2>Appointment</h2>
      </header>
      {/* Sub Header */}
      <div className="sub-header">
        <div className="left-section">
          <button className="back-btn" onClick={() => navigate(-1)}>
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <div className="role-btns">
            <button className="today-btn">TODAY-99</button>
            <button className="week-btn">WEEK-99</button>
            <button className="month-btn">MONTH-1543</button>
          </div>
        </div>
        <div className="search-container">
          <i className="fa-solid fa-magnifying-glass search-icon"></i>
          <input
            type="text"
            placeholder="Search by name, mobile, specialty"
            className="search-input"
          />
        </div>
        <button className="download-btn">
          <i className="fa-solid fa-download"></i> Download All
        </button>
      </div>
      <table className="approval-table">
        <thead>
          <tr>
            <th>Date & Time</th>
            <th>Doctor Name</th>
            <th>Appointment ID</th>
            <th>Patient</th>
            <th>Mobile</th>
            <th>Specialty</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doc) => (
            <tr
              key={doc.id}
              onClick={() => navigate(`/doctor-status/${doc.id}`)}
              style={{ cursor: "pointer" }}
            >
              <td>{doc.date}</td>
              <td>{doc.name}</td>
              <td>{doc.appointmentId}</td>
              <td>{doc.patient}</td>
              <td>{doc.mobile}</td>
              <td>{doc.specialty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
