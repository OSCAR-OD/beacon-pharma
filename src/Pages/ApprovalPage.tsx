import React from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import "./AdminPanel.css";
import "./ApprovalPage.css";
export default function ApprovalPage() {
    const navigate = useNavigate();
  return (
    <div className="approval-page">
      {/* Header */}
      <header className="approval-header">
           <button className="menu-btn">
            <i className="fa-solid fa-bars"></i>
        </button>
        <h2>Approval</h2>
      </header>

      {/* Sub Header */}
      <div className="sub-header">
        <button className="back-btn"  onClick={() => navigate(-1)}>
          <i className="fa-solid fa-arrow-left"></i>
        </button>
      </div>

      {/* Action Buttons */}
      <div className="approval-actions">
        <button className="btn-approved">APPROVED</button>
        <button className="btn-doc-needed">Further Doc Needed</button>
      </div>

      {/* Pending Section */}
      <div className="pending-info">
        <h3>
          Pending Approval : <span>04</span>
        </h3>
      </div>

      {/* Table */}
      <table className="approval-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Doctor Name</th>
            <th>Designation</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>30/June/2020</td>
            <td>02:12PM</td>
            <td>Dr. Shamim Shakil</td>
            <td>MBBS</td>
            <td className="status pending">PENDING</td>
          </tr>
          <tr>
            <td>29/June/2020</td>
            <td>02:18PM</td>
            <td>Dr. Ramim Hasan</td>
            <td>MBBS</td>
            <td className="status pending">PENDING</td>
          </tr>
          <tr>
            <td>30/June/2020</td>
            <td>02:16PM</td>
            <td>Dr. Shamim Shakil</td>
            <td>MBBS</td>
            <td className="status pending">PENDING</td>
          </tr>
          <tr>
            <td>30/June/2020</td>
            <td>02:10PM</td>
            <td>Dr. Shamim Shakil</td>
            <td>MBBS</td>
            <td className="status pending">PENDING</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
