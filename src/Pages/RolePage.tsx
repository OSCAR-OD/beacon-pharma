import { useEffect, useState } from "react";
import "./LoginPage.css";
import "./AdminPanel.css";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Components/Sidebar/Sidebar";
import "./Popup.css";
import axiosInstance from "../hooks/axiosInstance";
import AddPopupForm from "../Components/AddPopupForm";
import RolePopupForm from "../Components/AddRolePopupForm";
import RPPopupForm from "../Components/AddPermissionPopupForm";
import useAuth from "../hooks/useAuth";
import ProfilePic from "../Components/Sidebar/ProfilePic";
export default function RolePage() {
  const navigate = useNavigate();
  const { authEmail } = useAuth();
  //console.log("authEmail", authEmail);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const [viewEmp, setViewEmp] = useState<any | null>(null);
  const [employees, setEmployees] = useState<any[]>([]);
  const [roles, setRoles] = useState<any[]>([]);
  const [rolePermissions, setRolePermissions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [empLoading, setEmpLoading] = useState(false);
  const [roleLoading, setRoleLoading] = useState(false);
  const [rpLoading, setRPLoading] = useState(false);
  const [showAddEmployeePopup, setShowAddEmployeePopup] = useState(false);
  const [addRolePopup, setAddRolePopup] = useState(false);
  const [addRPPopup, setAddRPPopup] = useState(false);
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [previewImg, setPreviewImg] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    role: "",
    password: "",
    reference: "",
    empID: "",
    status: "APPROVED",
  });
  const [roleFormData, setRoleFormData] = useState({
    role: "",
    reference: "",
  });
  const [rpFormData, setRPFormData] = useState({
    permissions: "",
    reference: "",
  });
  const [confirmDelete, setConfirmDelete] = useState<{
    roleId: string;
    roleName: string;
    permission: string;
  } | null>(null);
  // ✅ Fetch All Data
  const fetchAllData = async () => {
    try {
      // setLoading(true);
      const empRes = await axiosInstance.get("/employees/getEmployees");
      setEmployees(empRes.data?.data || empRes.data);

      const roleRes = await axiosInstance.get("/employees/getRoles");
      setRoles(roleRes.data?.data || roleRes.data);

      const rolePermRes = await axiosInstance.get(
        "/employees/getRolePermissions"
      );
      setRolePermissions(rolePermRes.data?.data || rolePermRes.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchAllData();
  }, []);

  // ✅ Remove Permission by Role
  const removePermission = (roleName: string, perm: string) => {
    setRolePermissions((prev) =>
      prev.map((r) =>
        r.role === roleName
          ? { ...r, permissions: r.permissions.filter((p) => p !== perm) }
          : r
      )
    );

    if (viewEmp && viewEmp.role === roleName) {
      setViewEmp({
        ...viewEmp,
        permissions: viewEmp.permissions.filter((p: string) => p !== perm),
      });
    }
  };

  const handleConfirmDelete = async () => {
    if (!confirmDelete) return;

    try {
      const { roleId, permission } = confirmDelete;
      console.log("confirmDelete", confirmDelete);

      const response = await axiosInstance.delete(
        `/employees/removeRolePermission/${roleId}`,
        {
          data: { permission }, // send which permission to remove
        }
      );

      if (response.status === 200) {
        alert("Permission deleted successfully!");

        // Update state instantly (remove from local list)
        setRolePermissions((prev) =>
          prev.map((r) =>
            r._id === roleId
              ? {
                  ...r,
                  permissions: r.permissions.filter((p) => p !== permission),
                }
              : r
          )
        );
      } else {
        alert(response.data.message || "Failed to delete permission.");
      }
    } catch (error) {
      console.error(error);
      alert("Error deleting permission.");
    } finally {
      setConfirmDelete(null);
    }
  };

  const handleRPFormChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setRPFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRPSubmit = async () => {
    try {
      setRPLoading(true);
      // Validation
      const requiredFields = ["permissions"];
      for (const field of requiredFields) {
        if (!rpFormData[field] || rpFormData[field].trim() === "") {
          alert(`Please fill out the required field: ${field}`);
          return;
        }
      }
      // Prepare JSON data
      const data = {
        authEmail,
        ...rpFormData,
      };
      console.log("sending:", data);
      const response = await axiosInstance.post(
        "employees/addRolePermission",
        data
      );
      if (response.status === 200) {
        alert("Permission created successfully!");
        setRPFormData({
          permissions: "",
          reference: "",
        });
        setAddRPPopup(false);
        fetchAllData();
      } else {
        alert(response.data.message || "Something went wrong!");
      }
    } catch (error: any) {
      console.error(error);
      alert("Error occurred while creating role.");
    } finally {
      setRPLoading(false);
    }
  };

  const handleRoleFormChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setRoleFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRoleSubmit = async () => {
    try {
      setRoleLoading(true);
      // Validation
      const requiredFields = ["role"];

      for (const field of requiredFields) {
        if (!roleFormData[field] || roleFormData[field].trim() === "") {
          alert(`Please fill out the required field: ${field}`);
          return;
        }
      }
      // Prepare JSON data
      const data = {
        authEmail,
        ...roleFormData,
      };
      //console.log("sending:", data);
      const response = await axiosInstance.post("employees/addRole", data);
      if (response.status === 200) {
        alert("Role created successfully!");
        setRoleFormData({
          role: "",
          reference: "",
        });
        setAddRolePopup(false);
        fetchAllData();
      } else {
        alert(response.data.message || "Something went wrong!");
      }
    } catch (error: any) {
      console.error(error);
      alert("Error occurred while creating role.");
    } finally {
      setRoleLoading(false);
    }
  };

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
      setEmpLoading(true);
      // Validation
      if (!profileImage) {
        alert("Profile image is required.");
        return;
      }
      if (profileImage.size > 5 * 1024 * 1024) {
        alert("Profile image must be less than 5 MB.");
        return;
      }

      const requiredFields = ["name", "email", "mobile", "role", "empID"];

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
      for (let pair of data.entries()) {
        console.log(pair[0] + ": ", pair[1]);
      }
      const response = await axiosInstance.post("employees/addEmployee", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      if (response.status === 200) {
        alert("Employee created successfully!");
        setFormData({
          name: "",
          email: "",
          mobile: "",
          role: "",
          password: "",
          reference: "",
          empID: "",
          status: "APPROVED",
        });
        setProfileImage(null);
        setPreviewImg(null);
        setShowAddEmployeePopup(false);
        fetchAllData();
      } else {
        alert(response.data.message || "Something went wrong!");
      }
    } catch (error: any) {
      console.error(error);
      alert("Error occurred while creating doctor.");
    } finally {
      setEmpLoading(false);
    }
  };

  // === Loading State ===
  if (loading) {
    return (
      <div className="loading-screen">
        <h3>Loading data...</h3>
      </div>
    );
  }

  // console.log("employees", employees);
  // console.log("roles", roles);
  //console.log("rolePermissions", rolePermissions);
  return (
    <>
      <div className="role-page">
        <div className="admin-wrapper">
          <div className="admin-panel">
            <Sidebar
              isOpen={isSidebarOpen}
              toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
            />
            <div className="container-body">
              <header className="admin-header">
                <button
                  className="menu-btn"
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                >
                  <i className="fa-solid fa-bars"></i>
                </button>
                <h2>Role Management</h2>
                <nav className="navbar">
                  <div className="navbar-container">
                    <div className="navbar-right">
                      <ProfilePic />
                    </div>
                  </div>
                </nav>
              </header>

              <div className="sub-header">
                <button className="back-btn" onClick={() => navigate(-1)}>
                  <i className="fa-solid fa-arrow-left"></i>
                </button>
              </div>

              <main className="role-container">
                {/* === 1️⃣ Employee Table === */}
                <div className="role-cards">
                  <div className="employee-header">
                    <h3 className="employee-title">Employee</h3>
                    <button
                      className="employee-add-btn"
                      onClick={() => setShowAddEmployeePopup(true)}
                    >
                      Add
                    </button>
                  </div>
                  <div className="table-container">
                    <table className="role-table">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Image</th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Role</th>
                          <th>Status</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {employees.map((emp) => (
                          <tr key={emp._id}>
                            <td>{emp.empID}</td>
                            <td className="dot-center">
                              <img
                                width={40}
                                height={40}
                                src={emp.img}
                                alt={emp.name}
                                className="w-10 h-10 rounded-full object-cover mx-auto role-img"
                              />
                            </td>
                            <td>{emp.name}</td>
                            <td>{emp.email}</td>
                            <td>{emp.role}</td>
                            <td
                              className={`${
                                emp.status === "Approved"
                                  ? "text-green-600"
                                  : "text-yellow-600"
                              }`}
                            >
                              {emp.status}
                            </td>
                            <td className="floating">
                              <div className="dot-center">
                                <button
                                  // className="text-gray-500 hover:text-gray-700"
                                  onClick={() =>
                                    setActiveMenu(
                                      activeMenu === emp.id ? null : emp.id
                                    )
                                  }
                                >
                                  <i className="fa-solid fa-ellipsis"></i>
                                </button>
                              </div>
                              {activeMenu === emp.id && (
                                <div className="floating-menu">
                                  <button
                                    onClick={() => {
                                      const rolePerm = rolePermissions.find(
                                        (r) => r.role === emp.role
                                      );
                                      setViewEmp({
                                        ...emp,
                                        permissions:
                                          rolePerm?.permissions || [],
                                      });
                                    }}
                                  >
                                    View
                                  </button>
                                  <button onClick={() => alert("Edit clicked")}>
                                    Edit
                                  </button>
                                </div>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* === 2️⃣ Role Table === */}
                <div className="role-cards">
                  <div className="employee-header">
                    <h3 className="employee-title">Role</h3>
                    <button
                      className="employee-add-btn"
                      onClick={() => setAddRolePopup(true)}
                    >
                      Add
                    </button>
                  </div>
                  <div className="table-container">
                    <table className="role-table">
                      <thead>
                        <tr>
                          <th>Serial</th>
                          <th>Role</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {roles.map((r, idx) => (
                          <tr key={r.id}>
                            <td>{idx + 1}</td>
                            <td>{r.role}</td>
                            <td className="dot-center">
                              <button className="text-gray-500 hover:text-gray-700">
                                <i className="fa-solid fa-ellipsis"></i>
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* === 3️⃣ Role & Permissions Table === */}
                <div className="role-cards">
                  <div className="employee-header">
                    <h3 className="employee-title">Role & Permissions</h3>
                    <button
                      className="employee-add-btn"
                      onClick={() => setAddRPPopup(true)}
                    >
                      Add
                    </button>
                  </div>
                  <div className="table-container">
                    <table className="role-table">
                      <thead>
                        <tr>
                          <th>Serial</th>
                          <th>Role</th>
                          <th>Permissions</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {rolePermissions.map((roleItem, idx) => (
                          <tr key={roleItem.role}>
                            <td>{idx + 1}</td>
                            <td>{roleItem.role}</td>
                            <td>
                              <div className="perm-tags">
                                {roleItem.permissions.map((perm) => (
                                  <span key={perm} className="perm-tag">
                                    {perm}
                                    <button
                                      className="remove-btn"
                                      onClick={() =>
                                        setConfirmDelete({
                                          roleId: roleItem._id,
                                          roleName: roleItem.role,
                                          permission: perm,
                                        })
                                      }
                                      // onClick={() =>
                                      //   removePermission(roleItem.role, perm)
                                      // }
                                    >
                                      ✕
                                    </button>
                                  </span>
                                ))}
                              </div>
                            </td>
                            <td className="dot-center">
                              <button className="text-gray-500 hover:text-gray-700">
                                <i className="fa-solid fa-ellipsis"></i>
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>

      {/* === Popup Modal === */}
      {viewEmp && (
        <div className="popup-overlay">
          <div className="popup-content-large popup-content-center">
            <h3>Employee Details</h3>
            <p>
              <strong>ID:</strong> {viewEmp.id}
            </p>
            <p>
              <strong>Name:</strong> {viewEmp.name}
            </p>
            <p>
              <strong>Email:</strong> {viewEmp.email}
            </p>
            <p>
              <strong>Role:</strong> {viewEmp.role}
            </p>
            <p>
              <strong>Status:</strong> {viewEmp.status}
            </p>

            <div className="permissions-list">
              <strong>Permissions:</strong>
              <div className="perm-tags">
                {viewEmp.permissions.map((perm: string) => (
                  <span key={perm} className="perm-tag">
                    {perm}
                    <button
                      className="remove-btn"
                      onClick={() =>
                        removePermission(viewEmp.role as string, perm)
                      }
                    >
                      ✕
                    </button>
                  </span>
                ))}
              </div>
            </div>

            <button className="close-btn" onClick={() => setViewEmp(null)}>
              Close
            </button>
          </div>
        </div>
      )}
      {/* Add employee Popup */}
      {showAddEmployeePopup && (
        <AddPopupForm
          formData={formData}
          setFormData={setFormData}
          profileImage={profileImage}
          setProfileImage={setProfileImage}
          previewImg={previewImg}
          setPreviewImg={setPreviewImg}
          handleSubmit={handleSubmit}
          empLoading={empLoading}
          handleChange={handleChange}
          closePopup={() => setShowAddEmployeePopup(false)}
        />
      )}
      {/* Add Role Popup */}
      {addRolePopup && (
        <RolePopupForm
          roleFormData={roleFormData}
          setRoleFormData={setRoleFormData}
          handleRoleSubmit={handleRoleSubmit}
          roleLoading={roleLoading}
          handleRoleFormChange={handleRoleFormChange}
          closePopup={() => setAddRolePopup(false)}
        />
      )}
      {/* Add Permission Popup */}
      {addRPPopup && (
        <RPPopupForm
          roles={roles}
          rpFormData={rpFormData}
          setRPFormData={setRPFormData}
          handleRPSubmit={handleRPSubmit}
          rpLoading={rpLoading}
          handleRPFormChange={handleRPFormChange}
          closePopup={() => setAddRPPopup(false)}
        />
      )}
      {/* permission delete popup */}
      {confirmDelete && (
        <div className="popup-overlay">
          <div className="popup-content popup-content-center">
            <h3>
              You want to delete the permission{" "}
              <strong className="popup-txt-blue">
                {confirmDelete.permission}
              </strong>{" "}
              for role{" "}
              <strong className="popup-txt-blue">
                {confirmDelete.roleName}
              </strong>
              ?
            </h3>
            <div className="popup-action-btn-row">
              <button
                className="popup-btn confirm-delete"
                onClick={handleConfirmDelete}
              >
                Delete
              </button>
              <button
                className="popup-btn cancel-delete"
                onClick={() => setConfirmDelete(null)}
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
