import {
  //React,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import "./AdminPanel.css";
import "./SearchPage.css";
import axiosInstance from "../hooks/axiosInstance";
import Sidebar from "../Components/Sidebar/Sidebar";
import ProfilePic from "../Components/Sidebar/ProfilePic";
export default function AppointmentPage() {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [appointments, setAppointments] = useState([]);
  const [setLoading] = useState(true);
  const [searchTerm] = useState("");
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axiosInstance.get("/queries/getAppointmentData");
        setAppointments(response.data || []);
        //console.log("appointments", response.data);
      } catch (error) {
        console.error("Error fetching appointment data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);
  const formatDateTime = (dateString, timeString) => {
    try {
      const dateObj = new Date(`${dateString} ${timeString}`);
      if (isNaN(dateObj)) return `${dateString} | ${timeString}`;

      const day = dateObj.getDate();
      const month = dateObj.toLocaleString("default", { month: "long" });
      const hours = dateObj.getHours();
      const minutes = dateObj.getMinutes();
      const ampm = hours >= 12 ? "PM" : "AM";
      const formattedHour = hours % 12 || 12;
      const formattedMinutes = minutes.toString().padStart(2, "0");

      return `${day}/${month} | ${formattedHour}:${formattedMinutes}${ampm}`;
    } catch {
      return `${dateString} | ${timeString}`;
    }
  };
  // ✅ Filter by search
  const filteredAppointments = appointments.filter((appt) =>
    [appt.name, appt.mobile, appt.specialty, appt.patient]
      .join(" ")
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

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
          <h2>Appointment</h2>
               <nav className="navbar">
              <div className="navbar-container">
                <div className="navbar-right">
                  <ProfilePic />
                </div>
              </div>
            </nav>
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
        <div className="role-hidden-btn">
          <button className="today-btn">TODAY-99</button>
          <button className="week-btn">WEEK-99</button>
          <button className="month-btn">MONTH-1543</button>
        </div>
        <div className="table-container">
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
              {filteredAppointments.map((doc) => (
                <tr
                  key={doc._id}
                  onClick={() => navigate(`/doctor-status/${doc._id}`)}
                  style={{ cursor: "pointer" }}
                >
                  <td>{formatDateTime(doc.date, doc.time)}</td>
                  <td>{doc.doctorName}</td>
                  <td>{doc.appointmentID}</td>
                  <td>{doc.patient}</td>
                  <td>{doc.mobile}</td>
                  <td>{doc.specialty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
