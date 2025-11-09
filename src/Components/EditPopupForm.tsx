import React, { useState, useEffect } from "react";

interface EditPopupFormProps {
  doctor: any;
  formData: any;
  setFormData: (data: any) => void;
  profileImage: File | null;
  setProfileImage: (file: File | null) => void;
  previewImg: string | null;
  setPreviewImg: (url: string | null) => void;
  pdfFile: File | null;
  setPdfFile: React.Dispatch<React.SetStateAction<File | null>>;
  handleSubmit: () => void;
  loading: boolean;
  onClose: () => void;
}

const EditPopupForm: React.FC<EditPopupFormProps> = ({
  doctor,
  formData,
  setFormData,
  profileImage,
  setProfileImage,
  previewImg,
  setPreviewImg,
  pdfFile,
  setPdfFile,
  handleSubmit,
  loading,
  onClose,
}) => {
  useEffect(() => {
    if (doctor) {
      setFormData({
        ...doctor,
        degree: doctor.designation,
        ID: doctor.docID,
      });
      setPreviewImg(doctor.img || null);
    }
  }, [doctor]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h3>Edit Doctor Details</h3>
        <form className="popup-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-grid">
            <div className="form-group full-width">
              <label>Profile Image:</label>
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
            </div>
            <div className="form-group full-width">
              <div className="profile-img-wrapper">
                <img
                  src={previewImg || formData.img}
                  alt={formData.name}
                  className="doc-profile-img"
                />
              </div>
            </div>
            {/* PDF Upload */}
            <div className="form-group full-width">
              <label
              className="single-line"
             >
              <span style={{ color: "#f00" }}>*</span>
              BMDC Registration PDF:</label>
              <input
                type="file"
                name="bmdcDocument"
                accept="application/pdf"
                onChange={(e) => {
                  const file = e.target.files?.[0] || null;
                  setPdfFile(file);
                }}
              />
              {/* ✅ PDF size note */}
              <small style={{ color: "#888" }}>PDF file size max 8 MB</small>
              {pdfFile ? (pdfFile && <p className="file-name">📄 {pdfFile.name}</p>) : (<p className="file-name">📄 {formData.bmdcDocument}</p>) }
            </div>
            {[
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
              "reference",
              "division",
              "ID",
            ].map((field) => (
              <div className="form-group" key={field}>
                <label>{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
                <input
                  type="text"
                  name={field}
                  value={formData[field] || ""}
                  onChange={handleChange}
                />
              </div>
            ))}
            <div className="form-group">
              <label>Status:</label>
              <select name="status" value={formData.status || ""} onChange={handleChange}>
                <option value="APPROVED">APPROVED</option>
                <option value="PENDING">PENDING</option>
              </select>
            </div>
          </div>

          <div className="popup-buttons">
            <button type="button" className="save-btn" 
            onClick={handleSubmit}
            disabled={loading}
            >
              {loading ? "Saving..." : "Save"}
            </button>
            <button type="button" className="cancel-btn" 
            onClick={onClose}
            disabled={loading}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPopupForm;
