import React from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import "./AdminPanel.css";
import "./DoctorDetail.css";
import "./PatientProfile.css";
export default function FaqPage() {
  const navigate = useNavigate();
  return (
    <div className="doctor-detail-container">
      {/* Top Navbar */}
      <header className="approval-header">
        <button className="menu-btn">
          <i className="fa-solid fa-bars"></i>
        </button>
        <h2> Chat & FAQ &gt; FAQ</h2>
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
            placeholder="Search your query"
            className="search-input"
          />
        </div>
        <div></div>
      </div>
      {/* Main Profile Content */}
      <main className="faq-container">
        {/* Appointment History */}
        <div className="history-card">
          <h3 className="faq-qstn">How it works or use your device?</h3>
          <p>
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the. But I must explain to you how all this
            mistaken idea of denouncing pleasure and praising pain was born and
            I will give you a complete account of the system, and expound the
            actual teachings of the great explorer.
          </p>
        </div>
        <div className="history-card">
          <h3 className="faq-qstn">How it works on field?</h3>
          <p>
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the. But I must explain to you how all this
            mistaken idea of denouncing pleasure and praising pain was born and
            I will give you a complete account of the system, and expound the
            actual teachings of the great explorer.
          </p>
        </div>
        <div className="history-card">
          <h3 className="faq-qstn">How it works or use your device?</h3>
          <p>
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the. But I must explain to you how all this
            mistaken idea of denouncing pleasure and praising pain was born and
            I will give you a complete account of the system, and expound the
            actual teachings of the great explorer.
          </p>
        </div>
        <div className="history-card">
          <h3 className="faq-qstn">How it works on field?</h3>
          <p>
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the. But I must explain to you how all this
            mistaken idea of denouncing pleasure and praising pain was born and
            I will give you a complete account of the system, and expound the
            actual teachings of the great explorer.
          </p>
        </div>
        <div className="history-card">
          <h3 className="faq-qstn">How it works or use your device?</h3>
          <p>
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the. But I must explain to you how all this
            mistaken idea of denouncing pleasure and praising pain was born and
            I will give you a complete account of the system, and expound the
            actual teachings of the great explorer.
          </p>
        </div>
      </main>
    </div>
  );
}
