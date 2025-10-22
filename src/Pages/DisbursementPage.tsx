import //React, 
{ useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import "./AdminPanel.css";
import "./SearchPage.css";
export default function DisbursementPage() {
  const navigate = useNavigate();
  const [selectedDoctor, setSelectedDoctor] = useState<any>(null); // store clicked doctor
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"account" | "note">("account");
  const doctors = [
    {
      id: 1,
      date: "30/June | 2:28PM",
      name: "Dr. Shamim Shakil",
      appointmentId: "2364565",
      paymentId: "12544353",
      amount: "700tk",
      note: "Paid",
      contact: "01711083447",
    },
    {
      id: 2,
      date: "30/June | 2:28PM",
      name: "Dr. Shamim Shakil",
      appointmentId: "2364565",
      paymentId: "12544353",
      amount: "700tk",
      note: "Paid",
      contact: "01711083447",
    },
    {
      id: 3,
      date: "30/June | 2:28PM",
      name: "Dr. Shamim Shakil",
      appointmentId: "2364565",
      paymentId: "12544353",
      amount: "700tk",
      note: "Paid",
      contact: "01711083447",
    },
  ];
  const handleOpenModal = (doc: any) => {
    setSelectedDoctor(doc);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedDoctor(null);
    setIsModalOpen(false);
  };

  return (
    <div className="approval-page">
      {/* Header */}
      <header className="approval-header">
        <button className="menu-btn">
          <i className="fa-solid fa-bars"></i>
        </button>
        <h2>Disbursement</h2>
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
            <th>Payment ID</th>
            <th>Amount</th>
            <th>Note</th>
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
              <td
                className="underline-text"
                onClick={() => handleOpenModal(doc)}
              >
                {doc.name}
              </td>
              <td>{doc.appointmentId}</td>
              <td>{doc.paymentId}</td>
              <td>{doc.amount}</td>
              <td>{doc.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Modal */}
      {isModalOpen && selectedDoctor && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // modal-এর ভিতরে ক্লিক করলে বন্ধ হবে না
          >
            <button className="close-btn" onClick={handleCloseModal}>
              ✖
            </button>
            <div className="modal-header">
            <h2 className="modal-heading">
              {selectedDoctor.name},&nbsp;
              <span className="modal-heading-span">({selectedDoctor.contact})
              </span>
            </h2>
            </div>
            <br />
            {/* Tabs */}
            <div className="tab-header">
              <button
                className={`tab-btn ${activeTab === "account" ? "active" : ""}`}
                onClick={() => setActiveTab("account")}
              >
                Account Details
              </button>
              <button
                className={`tab-btn ${activeTab === "note" ? "active" : ""}`}
                onClick={() => setActiveTab("note")}
              >
                Disbursement Note
              </button>
            </div>

            {/* Tab Content */}
            {activeTab === "account" && (
              <div className="tab-content">
                <p>
                  Dutch Bangla Bank Ltd.
                  <br />
                  Branch: Dhaka
                  <br />
                  Acc. Name: Shamim Ahamed Shakil
                  <br />
                  Acc. No.: 123.123.123434
                </p>
              </div>
            )}

            {activeTab === "note" && (
              <div className="tab-content">
                <p>Note: Paid</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
