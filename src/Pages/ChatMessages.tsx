import //React, 
{ useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import "./AdminPanel.css";
import "./DoctorDetail.css";
import "./PatientProfile.css";
// Doctor Chat data array
const doctorMessages = [
  {
    id: 1,
    name: "Dr. Shamim Shakil",
    message: "I invited you in messenger.",
    time: "9:36pm",
    count: 3,
    active: true,
    img: "/assets/images/doctor.png",
  },
  {
    id: 2,
    name: "Dr. Nazmul Hasan",
    message: "Please check your appointment.",
    time: "8:22pm",
    count: 2,
    active: false,
    img: "https://randomuser.me/api/portraits/men/31.jpg",
  },
  {
    id: 3,
    name: "Dr. Rafi Khan",
    message: "Your report has been updated.",
    time: "6:40pm",
    count: 0,
    active: false,
    img: "https://randomuser.me/api/portraits/men/26.jpg",
  },
  {
    id: 4,
    name: "Dr. Tanay Rahman",
    message: "See you tomorrow at 10AM.",
    time: "5:15pm",
    count: 0,
    active: true,
    img: "https://randomuser.me/api/portraits/men/25.jpg",
  },
  {
    id: 5,
    name: "Dr. Harun Kabir",
    message: "See you tomorrow at 10AM.",
    time: "5:15pm",
    count: 0,
    active: true,
    img: "https://randomuser.me/api/portraits/men/24.jpg",
  },
  {
    id: 6,
    name: "Dr. Nayem Hasan",
    message: "See you tomorrow at 10AM.",
    time: "5:15pm",
    count: 0,
    active: false,
    img: "https://randomuser.me/api/portraits/men/23.jpg",
  },
  {
    id: 7,
    name: "Dr. Kabira Rahman",
    message: "See you tomorrow at 10AM.",
    time: "5:15pm",
    count: 0,
    active: true,
    img: "https://randomuser.me/api/portraits/men/22.jpg",
  },
];
// Patients Chat data array
const patientMessages = [
  {
    id: 1,
    name: "Rakib Hasan",
    message: "Doctor, I need your advice.",
    time: "7:40pm",
    count: 1,
    active: true,
    img: "https://randomuser.me/api/portraits/men/14.jpg",
  },
  {
    id: 2,
    name: "Mim Akter",
    message: "Thank you for the consultation!",
    time: "6:25pm",
    count: 0,
    active: false,
    img: "https://randomuser.me/api/portraits/women/32.jpg",
  },
  {
    id: 3,
    name: "Rayhan Hasan",
    message: "Thanks for your feedback.",
    time: "7:10pm",
    count: 1,
    active: true,
    img: "https://randomuser.me/api/portraits/men/13.jpg",
  },
  {
    id: 4,
    name: "Apan Jaman",
    message: "Thanks for your feedback.",
    time: "7:10pm",
    count: 1,
    active: true,
    img: "https://randomuser.me/api/portraits/men/12.jpg",
  },
];

export default function ChatMessages() {
  const navigate = useNavigate();
  const [activeChat, setActiveChat] = useState<"doctor" | "patient">("doctor");
  // Select correct message list based on activeChat
  const currentMessages =
    activeChat === "doctor" ? doctorMessages : patientMessages;

  return (
    <div className="doctor-detail-container">
      {/* Top Navbar */}
      <header className="approval-header">
        <button className="menu-btn">
          <i className="fa-solid fa-bars"></i>
        </button>
        <h2>Chat & FAQ &gt; Chat</h2>
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
            placeholder="Search with name, mobile no."
            className="search-input"
          />
        </div>
        <div></div>
      </div>

      {/* Main Message List */}
      <main className="m-container">
        <div className="message-btns">
          <div className="message-btn">
          <button
            className={`dr-btn ${
              activeChat === "doctor" ? "active-btn" : ""
            }`}
            onClick={() => setActiveChat("doctor")}
          >
            Chat with Doctor
          </button>&nbsp;
          <button
            className={`pt-btn ${
              activeChat === "patient" ? "active-btn" : ""
            }`}
            onClick={() => setActiveChat("patient")}
          >
            Chat with Patient
          </button>
        </div>
        </div>
        <div className="message-container">
          {currentMessages.map((msg) => (
            <div
              key={msg.id}
              className={`message-card ${msg.active ? "active" : ""}`}
            >
              <div className="message-profile-img-wrapper">
                <img
                  src={msg.img}
                  alt={msg.name}
                  className="message-profile-img"
                />
                {msg.active && <span className="m-active-status"></span>}
              </div>

              <div className="message-info">
                <h4>{msg.name}</h4>
                <p>{msg.message}</p>
              </div>

              <div className="message-time">
                <span className="msg-time-text">{msg.time}</span>
                {msg.count > 0 && (
                  <span className="msg-count">{msg.count}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
