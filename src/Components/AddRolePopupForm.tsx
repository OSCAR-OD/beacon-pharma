// src/Components/PopupForm.tsx
import React from "react";

interface PopupFormProps {
  roleFormData: any;
  setRoleFormData: React.Dispatch<React.SetStateAction<any>>;
  handleRoleSubmit: () => void;
  roleLoading: boolean;
  handleRoleFormChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  closePopup: () => void;
}

const AddRolePopupForm: React.FC<PopupFormProps> = ({
  roleFormData,
  setRoleFormData,
  handleRoleSubmit,
  roleLoading,
  handleRoleFormChange,
  closePopup,
}) => {
  const requiredFields = ["role"];
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h3>Employee Registration</h3>
        <br />
        <form className="popup-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-grid">
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
                  value={roleFormData[key]}
                  onChange={handleRoleFormChange}
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
                value={roleFormData.reference}
                onChange={handleRoleFormChange}
              ></textarea>
            </div>
          </div>

          <div className="popup-buttons">
            <button
              type="button"
              className="save-btn"
              onClick={handleRoleSubmit}
              disabled={roleLoading}
            >
              {roleLoading ? "Saving..." : "Save"}
            </button>
            <button
              type="button"
              className="cancel-btn"
              onClick={closePopup}
              disabled={roleLoading}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRolePopupForm;
