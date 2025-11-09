import {
  //React,
  useEffect,
  useState,
} from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./LoginPage.css";
import "./AdminPanel.css";
import "./DoctorDetail.css";
import "./Popup.css";
import axiosInstance from "../hooks/axiosInstance";
import toast, { Toaster } from "react-hot-toast";
import EditPopupForm from "../Components/EditPopupForm";
import ProfilePic from "../Components/Sidebar/ProfilePic";
import Sidebar from "../Components/Sidebar/Sidebar";
export default function DoctorProfilePage() {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { id } = useParams();
  const [doctor, setDoctor] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [previewImg, setPreviewImg] = useState<string | null>(null);
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    degree: "",
    BMDCRegNo: "",
    specialty: "",
    relevantDegree: "",
    sex: "",
    age: "",
    mobile: "",
    email: "",
    institute: "",
    chamber: "",
    reference: "",
    docID: "",
    division: "",
    status: "APPROVED",
  });
  const getDoctorById = async () => {
    try {
      setPageLoading(true);
      const response = await axiosInstance.get(`/queries/getDoctorById/${id}`);
      const data = response.data?.data || response.data;
      setDoctor(data);
      setFormData({
        ...data,
        degree: data.designation,
        ID: data.docID,
      });
    } catch (error) {
      console.error("Error fetching doctor data:", error);
    } finally {
      setPageLoading(false);
    }
  };
  const handleDeleteDoctor = async () => {
    try {
      await axiosInstance.delete("/employees/deleteDoctor", {
        params: { id: doctor._id },
      });
      toast.success("Doctor deleted successfully!");
      setShowDeletePopup(false);
      // Wait for 3 seconds
      await new Promise((resolve) => setTimeout(resolve, 3000));
      navigate(-1); // go back after delete
    } catch (error) {
      console.error("Error deleting doctor:", error);
      toast.error("Failed to delete doctor.");
    }
  };
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async () => {
    try {
      setLoading(true);
      const form = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        form.append(key, value as string);
      });
      if (profileImage) form.append("profileImage", profileImage);
      if (pdfFile) {
        form.append("bmdcDocument", pdfFile);
      }
      const res = await axiosInstance.put(
        `/employees/updateDoctor?id=${doctor._id}`,
        form,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      if (res.status === 200) {
        toast.success("Doctor updated successfully!");
        //alert("Doctor updated successfully!");
        setShowEditPopup(false);
        getDoctorById(); // refresh data
      }
    } catch (error) {
      console.error("Error updating doctor:", error);
      toast.error("Failed to update doctor.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) getDoctorById();
  }, [id]);
  if (pageLoading) {
    return <p style={{ textAlign: "center" }}>Loading doctor details...</p>;
  }

  if (!doctor) {
    return <p style={{ textAlign: "center" }}>No doctor data found.</p>;
  }
  //console.log("doctor", doctor);
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
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
            <h2>User &gt; Doctor Profile</h2>
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
                </p>
                <br />
                <p>
                  <strong>BMDC Reg No:</strong>&nbsp;
                  <span className="highlight">{doctor.BMDCRegNo}</span>
                </p>
                <br />
                <p>
                  <strong>Specialty:</strong>&nbsp;
                  <span className="highlight">
                    {doctor.specialty}
                    {/* Orthopedics */}
                  </span>
                </p>
                <br />
                <p>
                  <strong>Relevant Degree:</strong>&nbsp;
                  <span className="highlight">
                    {doctor.relevantDegree}
                    {/* MS, Orthopedics */}
                  </span>
                </p>
                <br />
                <p>
                  <strong>Sex:</strong>&nbsp;
                  <span className="highlight">
                    {doctor.sex}
                    {/* Male */}
                  </span>
                </p>
                <br />
                <p>
                  <strong>Age:</strong>&nbsp;
                  <span className="highlight">
                    {doctor.age}
                    {/* 32 */}
                  </span>
                </p>
                <br />
                <p>
                  <strong>Mobile:</strong>&nbsp;
                  <span className="highlight">
                    <a href="tel:01711083447" className="link">
                      {doctor.mobile}
                      {/* 01711083447 */}
                    </a>
                  </span>
                </p>
                <br />
                <p>
                  <strong>Email:</strong>&nbsp;
                  <span className="highlight">
                    <a href="mailto:shamim009922@gmail.com" className="link">
                      {doctor.email}
                      {/* shamim009922@gmail.com */}
                    </a>
                  </span>
                </p>
                <br />
                <p>
                  <strong>Institute:</strong>&nbsp;
                  <span className="highlight">
                    {doctor.institute}
                    {/* Khilgaon Hospital */}
                  </span>
                </p>
                <br />
                <p>
                  <strong>Chamber:</strong>&nbsp;
                  <span className="highlight">
                    {doctor.chamber}
                    {/* Khilgaon Taltola */}
                  </span>
                </p>
                <br />
                <p>
                  <strong>Note/Reference:</strong>&nbsp;
                  <span className="highlight">
                    {doctor.reference}
                    {/* MIO, Khilgaon */}
                  </span>
                </p>
                <br />
                <p>
                  <strong>ID:</strong>&nbsp;
                  <span className="highlight">
                    {doctor.docID}
                    {/* 23561, 01985551231 */}
                  </span>
                </p>
                <div className="dr-profile-action-buttons">
                  <p className="action-txt">
                    If in disable status, then re-enable
                  </p>
                  <div className="edit-action-btn-row">
                    <button className="general-btn disable">
                      <i className="fa-solid fa-eye-slash"></i>
                      &nbsp;Disable
                    </button>
                    <button
                      className="general-btn delete"
                      onClick={() => setShowDeletePopup(true)}
                    >
                      <i className="fa-solid fa-trash"></i>
                      &nbsp;Delete
                    </button>
                    <button
                      className="general-btn edit"
                      onClick={() => setShowEditPopup(true)}
                    >
                      <i className="fa-solid fa-pen-to-square"></i>
                      &nbsp;Edit
                    </button>
                    {/* <button className="reenable-btn">RE-ENABLE</button> */}
                  </div>
                </div>
              </div>
            </div>
            {/* Right Section */}
            <div className="doctor-doc">
              <h3>BMDC Reg Document</h3>
              <div className="doc-placeholder"></div>
            </div>
          </div>
        </div>
      </div>
      {/* ✅ Edit Popup */}
      {showEditPopup && (
        <EditPopupForm
          doctor={doctor}
          formData={formData}
          setFormData={setFormData}
          profileImage={profileImage}
          setProfileImage={setProfileImage}
          pdfFile={pdfFile}
          setPdfFile={setPdfFile}
          previewImg={previewImg}
          setPreviewImg={setPreviewImg}
          handleSubmit={handleSubmit} // submit logic still in parent
          loading={loading}
          onClose={() => setShowEditPopup(false)}
        />
      )}
      {/* ✅ Delete Confirmation Popup */}
      {showDeletePopup && (
        <div className="popup-overlay">
          <div className="popup-content-medium popup-content-center">
            <h3>Want to delete permanently?</h3>
            <br />
            <div className="popup-action-btn-row">
              <button
                className="popup-btn confirm-delete"
                onClick={handleDeleteDoctor}
              >
                Delete
              </button>
              <button
                className="popup-btn cancel-delete"
                onClick={() => setShowDeletePopup(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
