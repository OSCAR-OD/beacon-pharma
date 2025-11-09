import {
  //React,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import "./AdminPanel.css";
// import "./DoctorListPage.css";
import "./SearchPage.css";
import axiosInstance from "../hooks/axiosInstance";
import Sidebar from "../Components/Sidebar/Sidebar";
import ProfilePic from "../Components/Sidebar/ProfilePic";
//getDoctors

interface Doctor {
  _id: number;
  date: string;
  name: string;
  designation: string;
  division: string;
  mobile: string;
  specialty: string;
  timestamp: string;
}
export default function DoctorListPage() {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const formatDate = (isoString: string) => {
    const date = new Date(isoString);
    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "long" }); // e.g. June
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };
  useEffect(() => {
    const getDoctors = async () => {
      try {
        const response = await axiosInstance.get("/queries/getDoctors"); // change this to your endpoint
        setDoctors(response.data);
        setLoading(false);
      } catch (err: any) {
        console.error("Error fetching doctors:", err);
        setError("Failed to load doctors");
        setLoading(false);
      }
    };

    getDoctors();
  }, []);
  if (loading) {
    return (
      <div className="loading-screen">
        <h3>Loading Doctors...</h3>
      </div>
    );
  }
  if (error) {
    return (
      <div className="loading-screen">
        <h3>{error}</h3>
      </div>
    );
  }
  //console.log("doctors", doctors);
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
          <h2>User &gt; Doctor List</h2>
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
        {/* Pending Section */}
        <div className="pending-info">
          <br />
          <h2>Doctor List</h2>
        </div>
        {/* Table */}
        <div className="table-container">
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
                  key={doc._id}
                  onClick={() => navigate(`/doctor-profile/${doc._id}`)}
                  style={{ cursor: "pointer" }}
                >
                  <td>{formatDate(doc.timestamp)}</td>
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
