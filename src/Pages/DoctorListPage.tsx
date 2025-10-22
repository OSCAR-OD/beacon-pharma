import //React, 
{ useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import "./AdminPanel.css";
import "./DoctorListPage.css";
import axiosInstance from "../hooks/axiosInstance";
//getDoctors

interface Doctor {
  _id: number;
  date: string;
  name: string;
  designation: string;
  division: string;
  mobile: string;
  specialty: string;
}
export default function DoctorListPage() {
  const navigate = useNavigate();
    const [doctors, setDoctors] = useState<Doctor[]>([]);
      const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
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

  if (loading) return <p>Loading doctors...</p>;
  if (error) return <p>{error}</p>;

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
              key={doc._id}
              onClick={() => navigate(`/doctor-profile/${doc._id}`)}
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
