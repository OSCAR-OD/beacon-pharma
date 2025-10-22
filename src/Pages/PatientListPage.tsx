import //React, 
{ useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import "./AdminPanel.css";
import "./SearchPage.css";
const doctors = [
  {
    id: 1,
    date: "30/June/2020",
    name: "Dr. Shamim Shakil",
    designation: "MBBS",
    division: "Dhaka",
    mobile: " 01779717674",
    specialty: "Orthopedics",
    url: "doctors-profile",
  },
  {
    id: 2,
    date: "30/June/2020",
    name: "Dr. Shamim Shakil",
    designation: "MBBS",
    division: "Dhaka",
    mobile: " 01779717674",
    specialty: "Orthopedics",
    url: "doctors-profile",
  },
  {
    id: 3,
    date: "30/June/2020",
    name: "Dr. Shamim Shakil",
    designation: "MBBS",
    division: "Dhaka",
    mobile: " 01779717674",
    specialty: "Orthopedics",
    url: "doctors-profile",
  },
  {
    id: 4,
    date: "30/June/2020",
    name: "Dr. Shamim Shakil",
    designation: "MBBS",
    division: "Dhaka",
    mobile: " 01779717674",
    specialty: "Orthopedics",
    url: "doctors-profile",
  },
  {
    id: 5,
    date: "30/June/2020",
    name: "Dr. Shamim Shakil",
    designation: "MBBS",
    division: "Dhaka",
    mobile: " 01779717674",
    specialty: "Orthopedics",
    url: "doctors-profile",
  },
  {
    id: 6,
    date: "30/June/2020",
    name: "Dr. Shamim Shakil",
    designation: "MBBS",
    division: "Dhaka",
    mobile: " 01779717674",
    specialty: "Orthopedics",
    url: "doctors-profile",
  },
  {
    id: 7,
    date: "30/June/2020",
    name: "Dr. Shamim Shakil",
    designation: "MBBS",
    division: "Dhaka",
    mobile: " 01779717674",
    specialty: "Orthopedics",
    url: "doctors-profile",
  },
  {
    id: 8,
    date: "30/June/2020",
    name: "Dr. Shamim Shakil",
    designation: "MBBS",
    division: "Dhaka",
    mobile: " 01779717674",
    specialty: "Orthopedics",
    url: "doctors-profile",
  },
];
const patients = [
  {
    id: 1,
    date: "30/June/2020",
    name: "Ramim Hasan",
    designation: "Job Holder",
    division: "Dhaka",
    mobile: " 01779717674",
    specialty: "Job",
    url: "patient-profile",
  },
  {
    id: 2,
    date: "30/June/2020",
    name: "Ramim Hasan",
    designation: "Job Holder",
    division: "Dhaka",
    mobile: " 01779717674",
    specialty: "Job",
    url: "patient-profile",
  },
];
export default function PatientListPage() {
  const navigate = useNavigate();
  const [activeChat] = useState<"doctor" | "patient">("patient");
  const currentMessages = activeChat === "patient" ? patients : doctors;

  return (
    <div className="approval-page">
      {/* Header */}
      <header className="approval-header">
        <button className="menu-btn">
          <i className="fa-solid fa-bars"></i>
        </button>
        <h2>Patient List</h2>
      </header>
      {/* Sub Header */}
      <div className="sub-header">
        <div className="left-section">
          <button className="back-btn" onClick={() => navigate(-1)}>
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          {/* <div className="role-btns">
            <button 
            className={`doctor-btn ${
              activeChat === "doctor" ? "active-btn" : ""
            }`}
            onClick={() => setActiveChat("doctor")}
          >
            DOCTOR</button>
            <button className={`patient-btn ${
              activeChat === "patient" ? "active-btn" : ""
            }`}
            onClick={() => setActiveChat("patient")}
          >
            PATIENT</button>
          </div> */}
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
            <th>Date</th>
            <th>Doctor Name</th>
            <th>Designation</th>
            <th>Division</th>
            <th>Mobile</th>
            <th>Specialty</th>
          </tr>
        </thead>
        <tbody>
          {currentMessages.map((doc) => (
            <tr
              key={doc.id}
              onClick={() => navigate(`/${doc.url}/${doc.id}`)}
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
