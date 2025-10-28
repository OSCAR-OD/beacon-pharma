import {
  //React
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import "./AdminPanel.css";
import "./SearchPage.css";
import Sidebar from "../Components/Sidebar/Sidebar";
export default function PrescriptionPage() {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const doctors = [
    {
      id: 1,
      date: "30/June | 2:28PM",
      name: "Dr. Shamim Shakil",
      appointmentId: "2364565",
      patient: "Tanvir Hasan",
      prescription: "View",
    },
    {
      id: 1,
      date: "30/June | 2:28PM",
      name: "Dr. Shamim Shakil",
      appointmentId: "2364565",
      patient: "Tanvir Hasan",
      prescription: "View",
    },
    {
      id: 1,
      date: "30/June | 2:28PM",
      name: "Dr. Shamim Shakil",
      appointmentId: "2364565",
      patient: "Tanvir Hasan",
      prescription: "View",
    },
    {
      id: 1,
      date: "30/June | 2:28PM",
      name: "Dr. Shamim Shakil",
      appointmentId: "2364565",
      patient: "Tanvir Hasan",
      prescription: "View",
    },
    {
      id: 1,
      date: "30/June | 2:28PM",
      name: "Dr. Shamim Shakil",
      appointmentId: "2364565",
      patient: "Tanvir Hasan",
      prescription: "View",
    },
  ];

  return (
    <div className="approval-page">
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />
      <div className="container-body">
        {/* Header */}
        <header className="approval-header">
          <button
            className="menu-btn"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
          <h2>Prescription</h2>
        </header>
        {/* Sub Header */}
        <div className="sub-header">
          <div className="left-section">
            <button className="back-btn" onClick={() => navigate(-1)}>
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            <div className="role-btns">
              <button className="doctor-btn">FROM</button>
              <button className="patient-btn">TO-DATE</button>
            </div>
          </div>
          <div className="search-container">
            <i className="fa-solid fa-magnifying-glass search-icon"></i>
            <input
              type="text"
              placeholder="Search with Name, Payment ID, Mobile No."
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
              <th>Prescription</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doc) => (
              <tr
                key={doc.id}
                // onClick={() => navigate(`/patient-profile/${doc.id}`)}
                style={{ cursor: "pointer" }}
              >
                <td>{doc.date}</td>
                <td className="underline-text">{doc.name}</td>
                <td>{doc.appointmentId}</td>
                <td>{doc.patient}</td>
                <td className="underline-text">{doc.prescription}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
