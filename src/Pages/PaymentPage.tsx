import {
  //React
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import "./AdminPanel.css";
import "./SearchPage.css";
import Sidebar from "../Components/Sidebar/Sidebar";
export default function PaymentPage() {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const doctors = [
    {
      id: 1,
      date: "30/June | 2:28PM",
      name: "Dr. Shamim Shakil",
      appointmentId: "2364565",
      patient: "Tanvir Hasan",
      mobile: " 01779717674",
      paymentId: "12544353",
      amount: "700tk",
    },
    {
      id: 1,
      date: "30/June | 2:28PM",
      name: "Dr. Shamim Shakil",
      appointmentId: "2364565",
      patient: "Tanvir Hasan",
      mobile: " 01779717674",
      paymentId: "12544353",
      amount: "700tk",
    },
    {
      id: 1,
      date: "30/June | 2:28PM",
      name: "Dr. Shamim Shakil",
      appointmentId: "2364565",
      patient: "Tanvir Hasan",
      mobile: " 01779717674",
      paymentId: "12544353",
      amount: "700tk",
    },
    {
      id: 1,
      date: "30/June | 2:28PM",
      name: "Dr. Shamim Shakil",
      appointmentId: "2364565",
      patient: "Tanvir Hasan",
      mobile: " 01779717674",
      paymentId: "12544353",
      amount: "700tk",
    },
    {
      id: 1,
      date: "30/June | 2:28PM",
      name: "Dr. Shamim Shakil",
      appointmentId: "2364565",
      patient: "Tanvir Hasan",
      mobile: " 01779717674",
      paymentId: "12544353",
      amount: "700tk",
    },
    {
      id: 1,
      date: "30/June | 2:28PM",
      name: "Dr. Shamim Shakil",
      appointmentId: "2364565",
      patient: "Tanvir Hasan",
      mobile: " 01779717674",
      paymentId: "12544353",
      amount: "700tk",
    },
    {
      id: 1,
      date: "30/June | 2:28PM",
      name: "Dr. Shamim Shakil",
      appointmentId: "2364565",
      patient: "Tanvir Hasan",
      mobile: " 01779717674",
      paymentId: "12544353",
      amount: "700tk",
    },
    {
      id: 1,
      date: "30/June | 2:28PM",
      name: "Dr. Shamim Shakil",
      appointmentId: "2364565",
      patient: "Tanvir Hasan",
      mobile: " 01779717674",
      paymentId: "12544353",
      amount: "700tk",
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
          <h2>Payment</h2>
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
              <th>Mobile</th>
              <th>Payment ID</th>
              <th>Amount</th>
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
                <td>{doc.name}</td>
                <td>{doc.appointmentId}</td>
                <td>{doc.patient}</td>
                <td>{doc.mobile}</td>
                <td>{doc.paymentId}</td>
                <td>{doc.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
