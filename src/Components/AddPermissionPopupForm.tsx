// src/Components/PopupForm.tsx
import React from "react";
//import axiosInstance from "../hooks/axiosInstance";

interface PopupFormProps {
  roles: any[];
  rpFormData: any;
  setRPFormData: React.Dispatch<React.SetStateAction<any>>;
  handleRPSubmit: () => void;
  rpLoading: boolean;
  handleRPFormChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  closePopup: () => void;
}

const AddPermissionPopupForm: React.FC<PopupFormProps> = ({
  roles,
  rpFormData,
  setRPFormData,
  handleRPSubmit,
  rpLoading,
  handleRPFormChange,
  closePopup,
}) => {
  const requiredFields = ["permissions"];
   //const roleRes = await axiosInstance.get("/employees/getRoles");
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h3>Employee Registration</h3>
        <br />
        <form className="popup-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-grid">
            {/* === Dropdown for Role === */}
            <div className="form-group">
              <label className="single-line">
                <span style={{ color: "#f00" }}>*</span>
                Role:
              </label>
              <select
                name="role"
                value={rpFormData.role || ""}
                onChange={handleRPFormChange}
              >
                <option value="">Select a role</option>
                {roles.map((r) => (
                  <option key={r._id} value={r.role}>
                    {r.role}
                  </option>
                ))}
              </select>
             </div>
          {/* <div className="form-grid"> */}
            {/* Input Fields */}
            {requiredFields.map((key) => (
              <div className="form-group" key={key}>
                <label className="single-line">
                  <span style={{ color: "#f00" }}>*</span>
                  {key.charAt(0).toUpperCase() + key.slice(1)}:
                </label>
                <input
                  type={
                    key === "email"
                      ? "email"
                      : key === "age"
                      ? "number"
                      : "text"
                  }
                  name={key}
                  value={rpFormData[key]}
                  onChange={handleRPFormChange}
                />
              </div>
            ))}

            <div className="form-group">
              <label className="single-line">
                <span style={{ color: "#f00" }}>*</span>
                Note/Reference:
              </label>
              <textarea
                name="reference"
                rows={2}
                value={rpFormData.reference}
                onChange={handleRPFormChange}
              ></textarea>
            </div>
          </div>

          <div className="popup-buttons">
            <button
              type="button"
              className="save-btn"
              onClick={handleRPSubmit}
              disabled={rpLoading}
            >
              {rpLoading ? "Saving..." : "Save"}
            </button>
            <button
              type="button"
              className="cancel-btn"
              onClick={closePopup}
              disabled={rpLoading}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPermissionPopupForm;
