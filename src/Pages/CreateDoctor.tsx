import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import "./AdminPanel.css";
import "./DoctorDetail.css";
import axiosInstance from "../hooks/axiosInstance";
import Sidebar from "../Components/Sidebar/Sidebar";
import PopupForm from "../Components/PopupForm";
import ProfilePic from "../Components/Sidebar/ProfilePic";
export default function CreateDoctor() {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);
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

  // handle input changes
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async () => {
    try {
      setLoading(true);
      // Validation
      if (!profileImage) {
        alert("Profile image is required.");
        return;
      }
      if (profileImage.size > 5 * 1024 * 1024) {
        alert("Profile image must be less than 5 MB.");
        return;
      }
      if (!pdfFile) {
        alert("BMDC Registration PDF is required.");
        return;
      }
      if (pdfFile.size > 8 * 1024 * 1024) {
        alert("PDF file must be less than 8 MB.");
        return;
      }
      const requiredFields = [
        "name",
        "degree",
        "BMDCRegNo",
        "specialty",
        "relevantDegree",
        "sex",
        "age",
        "mobile",
        "email",
        "institute",
        "chamber",
        "division",
        "docID",
      ];

      for (const field of requiredFields) {
        if (!formData[field] || formData[field].trim() === "") {
          alert(`Please fill out the required field: ${field}`);
          return;
        }
      }
      // Prepare data
      const data = new FormData();
      // append all text fields
      Object.entries(formData).forEach(([key, value]) => {
        data.append(key, value);
      });

      // append file if available
      if (profileImage) {
        data.append("profileImage", profileImage);
      }
      if (pdfFile) {
        data.append("bmdcDocument", pdfFile);
      }
      // for (let pair of data.entries()) {
      //   console.log(pair[0] + ": ", pair[1]);
      // }
      const response = await axiosInstance.post("employees/addDoctor", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      if (response.status === 200) {
        alert("Doctor created successfully!");
        setFormData({
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
        setProfileImage(null);
        setPreviewImg(null);
        setPdfFile(null);
        setShowPopup(false);
      } else {
        alert(response.data.message || "Something went wrong!");
      }
    } catch (error: any) {
      console.error(error);
      alert("Error occurred while creating doctor.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="doctor-detail-container">
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
            <h2>User &gt; Create Doctor</h2>
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
              <img
                // width={100}
                // height={100}
                src="/assets/images/surgeon.svg"
                alt="Doctor"
                className="surgeon-photo"
              />
              <div>
                <h2 className="doctor-name">Name:</h2>
                <p>
                  <strong>Degree:</strong>&nbsp;
                  <span className="highlight"></span>
                </p>
                <br />
                <p>
                  <strong>BMDC Reg No:</strong>&nbsp;
                  <span className="highlight"></span>
                </p>
                <br />
                <p>
                  <strong>Specialty:</strong>&nbsp;
                  <span className="highlight"></span>
                </p>
                <br />
                <p>
                  <strong>Relevant Degree:</strong>&nbsp;
                  <span className="highlight"></span>
                </p>
                <br />
                <p>
                  <strong>Sex:</strong>&nbsp;
                  <span className="highlight"></span>
                </p>
                <br />
                <p>
                  <strong>Age:</strong>&nbsp;
                  <span className="highlight"></span>
                </p>
                <br />
                <p>
                  <strong>Mobile:</strong>&nbsp;
                  <span className="highlight">
                    <a href="tel:01711083447" className="link"></a>
                  </span>
                </p>
                <br />
                <p>
                  <strong>Email:</strong>&nbsp;
                  <span className="highlight">
                    <a href="" className="link"></a>
                  </span>
                </p>
                <br />
                <p>
                  <strong>Institute:</strong>&nbsp;
                  <span className="highlight"></span>
                </p>
                <br />
                <p>
                  <strong>Chamber:</strong>&nbsp;
                  <span className="highlight"></span>
                </p>
                <br />
                <p>
                  <strong>Note/Reference:</strong>&nbsp;
                  <span className="highlight"></span>
                </p>
                <br />
                <p>
                  <strong>ID:</strong>&nbsp;
                  <span className="highlight"></span>
                </p>
                <br />
                <div className="action-buttons">
                  <button className="approve-btn">APPROVED</button>
                  {/* <button className="doc-needed-btn">Further Doc Needed</button> */}
                </div>
              </div>
            </div>
            {/* Right Section */}
            <div className="doctor-doc">
              <h3>BMDC Reg Document</h3>
              <div className="reg-placeholder">
                <div className="reg-btn" onClick={() => setShowPopup(true)}>
                  <i className="fa-solid fa-cloud-arrow-up"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Popup */}
        {showPopup && (
          <PopupForm
            formData={formData}
            setFormData={setFormData}
            profileImage={profileImage}
            setProfileImage={setProfileImage}
            pdfFile={pdfFile}
            setPdfFile={setPdfFile}
            previewImg={previewImg}
            setPreviewImg={setPreviewImg}
            handleSubmit={handleSubmit}
            loading={loading}
            handleChange={handleChange}
            closePopup={() => setShowPopup(false)}
          />
        )}
      </div>
    </>
  );
}
