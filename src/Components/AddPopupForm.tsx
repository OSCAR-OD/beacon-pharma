// src/Components/PopupForm.tsx
import React from "react";

interface PopupFormProps {
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  profileImage: File | null;
  setProfileImage: React.Dispatch<React.SetStateAction<File | null>>;
  previewImg: string | null;
  setPreviewImg: React.Dispatch<React.SetStateAction<string | null>>;
  handleSubmit: () => void;
  empLoading: boolean;
  handleChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  closePopup: () => void;
}

const AddPopupForm: React.FC<PopupFormProps> = ({
  formData,
  setFormData,
  profileImage,
  setProfileImage,
  previewImg,
  setPreviewImg,
  handleSubmit,
  empLoading,
  handleChange,
  closePopup,
}) => {
  const requiredFields = [
    "name",
    "email",
    "mobile",
    "role",
    "empID",
  ];
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h3>Employee Registration</h3>
        <br/>
        <form className="popup-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-grid">
            {/* Profile Image Upload */}
            <div className="form-group full-width">
             <label 
             className="single-line"
             >
              <span style={{ color: "#f00" }}>*</span><span>Profile Image:</span>
              </label>
              <input
                type="file"
                name="profileImage"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0] || null;
                  setProfileImage(file);
                  setPreviewImg(file ? URL.createObjectURL(file) : null);
                }}
              />
              {/* ✅ Image size note */}
              <small style={{ color: "#888" }}>Image file size max 5 MB</small>
            </div>

            {previewImg && (
              <div className="form-group full-width">
                <div className="profile-img-wrapper">
                  <img
                    src={previewImg}
                    alt={formData.name}
                    className="doc-profile-img"
                  />
                </div>
              </div>
            )}
            {/* Input Fields */}
            {requiredFields.map((key) => (
              <div className="form-group" key={key}>
                <label className="single-line">
                  <span style={{ color: "#f00" }}>*</span>
                  {key.charAt(0).toUpperCase() + key.slice(1)}:</label>
                <input
                  type={
                    key === "email"
                      ? "email"
                      : key === "age"
                      ? "number"
                      : "text"
                  }
                  name={key}
                  value={formData[key]}
                  onChange={handleChange}
                />
              </div>
            ))}
           {/* ✅ Password Field */}
            <div className="form-group">
              <label className="single-line">
                <span style={{ color: "#f00" }}>*</span>
                Password:
              </label>
              <input
                type="password"
                name="password"
                value={formData.password || ""}
                onChange={handleChange}
                // placeholder="Enter password"
              />
            </div>

            <div className="form-group">
              <label className="single-line">
                <span style={{ color: "#f00" }}>*</span>
                Note/Reference:</label>
              <textarea
                name="reference"
                rows={2}
                value={formData.reference}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="form-group">
              <label className="single-line">
                <span style={{ color: "#f00" }}>*</span>
                Status:</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
              >
                <option value="APPROVED">APPROVED</option>
                <option value="PENDING">PENDING</option>
              </select>
            </div>
          </div>

          <div className="popup-buttons">
            <button
              type="button"
              className="save-btn"
              onClick={handleSubmit}
              disabled={empLoading}
            >
              {empLoading ? "Saving..." : "Save"}
            </button>
            <button
              type="button"
              className="cancel-btn"
              onClick={closePopup}
              disabled={empLoading}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPopupForm;
