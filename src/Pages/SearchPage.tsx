import {
  //React,
  useState,
  useEffect,
} from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import "./AdminPanel.css";
import "./SearchPage.css";
import axiosInstance from "../hooks/axiosInstance";
import Sidebar from "../Components/Sidebar/Sidebar";
import ProfilePic from "../Components/Sidebar/ProfilePic";

export default function SearchPage() {
  const navigate = useNavigate();
  const [doctors, setDoctors] = useState<any[]>([]);
  const [patients, setPatients] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const getDoctors = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get("/queries/getDoctors"); // <--- your API endpoint
      //console.log("responsedoctors", response.data);
      setDoctors(response.data || []); // assuming response: { success: true, data: [...] }
      //console.log("doctors", doctors);
    } catch (error) {
      console.error("Error fetching doctors:", error);
    } finally {
      setLoading(false);
    }
  };
  const getPatients = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get("/queries/getPatients");
      setPatients(response.data?.data || response.data || []);
    } catch (error) {
      console.error("Error fetching patients:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch on component mount
  useEffect(() => {
    getDoctors();
    getPatients();
  }, []);

  const [activeChat, setActiveChat] = useState<"doctor" | "patient">("doctor");
  const currentMessages = activeChat === "doctor" ? doctors : patients;

  if (loading)
    return <p style={{ textAlign: "center", marginTop: "20px" }}>Loading...</p>;

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
          <h2>Search</h2>
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
              <button
                className={`doctor-btn ${
                  activeChat === "doctor" ? "active-btn" : ""
                }`}
                onClick={() => setActiveChat("doctor")}
              >
                DOCTOR
              </button>
              <button
                className={`patient-btn ${
                  activeChat === "patient" ? "active-btn" : ""
                }`}
                onClick={() => setActiveChat("patient")}
              >
                PATIENT
              </button>
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
          <button
            className={`doctor-btn ${
              activeChat === "doctor" ? "active-btn" : ""
            }`}
            onClick={() => setActiveChat("doctor")}
          >
            DOCTOR
          </button>
          <button
            className={`patient-btn ${
              activeChat === "patient" ? "active-btn" : ""
            }`}
            onClick={() => setActiveChat("patient")}
          >
            PATIENT
          </button>
        </div>
        <div className="table-container">
          <table className="approval-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>
                  {activeChat === "doctor" ? "Doctor Name" : "Patient Name"}
                </th>
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
                  onClick={() =>
                    navigate(
                      `/${
                        activeChat === "doctor"
                          ? "doctor-profile"
                          : "patient-profile"
                      }/${doc._id}`
                    )
                  }
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
      </div>
    </div>
  );
}
