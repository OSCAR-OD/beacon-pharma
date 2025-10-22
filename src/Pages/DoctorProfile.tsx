import //React, 
{ useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./LoginPage.css";
import "./AdminPanel.css";
import "./DoctorDetail.css";
import axiosInstance from "../hooks/axiosInstance";
export default function DoctorProfilePage() {
  const navigate = useNavigate();
   const { id } = useParams();
     const [doctor, setDoctor] = useState<any>(null);
     const [loading, setLoading] = useState(false);
     const getDoctorById = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get(`/queries/getDoctorById/${id}`);
      setDoctor(response.data?.data || response.data);
    } catch (error) {
      console.error("Error fetching doctor data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) getDoctorById();
  }, [id]);
 if (loading) {
    return <p style={{ textAlign: "center" }}>Loading doctor details...</p>;
  }

  if (!doctor) {
    return <p style={{ textAlign: "center" }}>No doctor data found.</p>;
  }
console.log("doctor", doctor);
  return (
    <div className="doctor-detail-container">
      {/* Header */}
      <header className="approval-header">
        <button className="menu-btn">
          <i className="fa-solid fa-bars"></i>
        </button>
        <h2>User &gt; Doctor Profile</h2>
      </header>
      {/* Sub Header */}
      <div className="sub-header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <i className="fa-solid fa-arrow-left"></i>
        </button>
      </div>
      <div className="doctor-detail-card">
        {/* Left Section */}
        <div className="doctor-info">
          <div className="profile-img-wrapper">
            <img
              // src="/assets/images/doctor.png"
               src={doctor.img}
               alt={doctor.name}
              className="doc-profile-img"
            />
            <span className="active-status"></span>
          </div>
          <div className="right-side">
            <h2 className="doctor-name">
              {doctor.name}
            {/* Dr. Shamim Shakil */}
              </h2>
            <p>
              <strong>Degree:</strong>&nbsp;
              <span className="highlight">
                {doctor.designation}
                {/* MBBS */}
                </span>
            </p><br />
            <p>
              <strong>
                BMDC Reg No:
                </strong>&nbsp;
              <span className="highlight">
                {doctor.BMDCRegNo}
                </span>
            </p><br />
            <p>
              <strong>
                Specialty:
                </strong>&nbsp;
              <span className="highlight">
                {doctor.specialty}
                {/* Orthopedics */}
                </span>
            </p><br />
            <p>
              <strong>Relevant Degree:</strong>&nbsp;
              <span className="highlight">
                 {doctor.relevantDegree}
                {/* MS, Orthopedics */}
                </span>
            </p><br />
            <p>
              <strong>Sex:</strong>&nbsp;
              <span className="highlight">
                 {doctor.sex}
                {/* Male */}
                </span>
            </p><br />
            <p>
              <strong>Age:</strong>&nbsp;
              <span className="highlight">
                {doctor.age}
                {/* 32 */}
                </span>
            </p><br />
            <p>
              <strong>Mobile:</strong>&nbsp;
              <span className="highlight">
                <a href="tel:01711083447" className="link">
                  {doctor.mobile}
                {/* 01711083447 */}
              </a></span>
            </p><br />
            <p>
              <strong>Email:</strong>&nbsp;
               <span className="highlight">
              <a href="mailto:shamim009922@gmail.com" className="link">
                {doctor.email}
                {/* shamim009922@gmail.com */}
              </a>
              </span>
            </p><br />
            <p>
              <strong>Institute:</strong>&nbsp;
               <span className="highlight">
                 {doctor.institute}
              {/* Khilgaon Hospital */}
              </span>
            </p><br />
            <p>
              <strong>Chamber:</strong>&nbsp;
               <span className="highlight">
                 {doctor.chamber}
              {/* Khilgaon Taltola */}
              </span>
            </p><br />
            <p>
              <strong>Note/Reference:</strong>&nbsp;
              <span className="highlight">
                 {doctor.reference}
                {/* MIO, Khilgaon */}
                </span>
            </p><br />
            <p>
              <strong>ID:</strong>&nbsp;
              <span className="highlight">
                 {doctor.docID}
                {/* 23561, 01985551231 */}
                </span>
            </p><br />
            <div className="dr-profile-action-buttons">
              <p className="action-txt">if in disable status, then reanable</p>
               <div className="action-btn-row">
              <button className="disable-btn">DISABLE</button>
              <button className="reenable-btn">RE-ENABLE</button>
              </div>
            </div>
          </div>
        </div>
        {/* Right Section */}
        <div className="doctor-doc">
          <h3>BMDC Reg Document</h3>
          <div className="doc-placeholder">
          </div>
        </div>
      </div>
    </div>
  );
}
