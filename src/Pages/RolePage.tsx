import { useState } from "react";
import "./LoginPage.css";
import "./AdminPanel.css";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Components/Sidebar/Sidebar";
export default function RolePage() {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // 🧩 Dummy Employee Data
  const [employees] = useState([
    {
      id: 1,
      name: "Arian Rahman",
      email: "arian.rahman@example.com",
      role: "Super Admin",
      permissions: "Full Access",
    },
    {
      id: 2,
      name: "Rafiul Hasan",
      email: "rafiul.hasan@example.com",
      role: "Admin",
      permissions: "Manage Users, Reports",
    },
    {
      id: 3,
      name: "Tania Akter",
      email: "tania.akter@example.com",
      role: "Manager",
      permissions: "Read, Reply Tickets",
    },
    {
      id: 4,
      name: "Hasib Chowdhury",
      email: "hasib@example.com",
      role: "Developer",
      permissions: "Edit, Deploy, Manage APIs",
    },
    {
      id: 5,
      name: "Nadia Sultana",
      email: "nadia.sultana@example.com",
      role: "Viewer",
      permissions: "Read Only",
    },
  ]);

  return (
    <>
      <div className="role-page">
        <div className="admin-wrapper">
          <div className="admin-panel">
            {/* Sidebar */}
            <Sidebar
              isOpen={isSidebarOpen}
              toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
            />
            {/* Main Body */}
            {/* <div className="role-container"> */}
            <div className="container-body">
              <header className="admin-header">
                <button
                  className="menu-btn"
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                >
                  <i className="fa-solid fa-bars"></i>
                </button>
                <h2>Role Management</h2>
              </header>
              <div className="sub-header">
                <button className="back-btn" onClick={() => navigate(-1)}>
                  <i className="fa-solid fa-arrow-left"></i>
                </button>
              </div>

              <main className="role-container">
                <div className="role-cards">
                  <div className="overflow-x-auto">
                    <table className="approval-table">
                      <thead>
                        <tr>
                          <th>ID</th>
                          {/* <th>
                          Profile Picture
                        </th> */}
                          <th>Name</th>
                          <th>Email</th>
                          <th>Role</th>
                          <th>Permissions</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {employees.map((emp, idx) => (
                          <tr
                            key={emp.id}
                            className={`border-t text-sm ${
                              idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                            }`}
                          >
                            <td>{emp.id}</td>
                            {/* <td>
                            <div className="flex justify-center">
                              <img
                                width={32}
                                height={32}
                                src={`https://i.pravatar.cc/32?img=${idx + 7}`}
                                alt={emp.name}
                                className="w-10 h-10 rounded-full object-cover"
                              />
                            </div>
                          </td> */}
                            <td>{emp.name}</td>
                            <td>{emp.email}</td>
                            <td>{emp.role}</td>
                            <td>{emp.permissions}</td>
                            <td>
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
                <div className="role-cards">
                  <div className="overflow-x-auto">
                    <table className="approval-table">
                      <thead>
                        <tr>
                          <th>Serial</th>
                          <th>Role</th>
                          <th>Accessibility</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {employees.map((emp, idx) => (
                          <tr
                            key={emp.id}
                            className={`border-t text-sm ${
                              idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                            }`}
                          >
                            <td>{emp.id}</td>
                            {/* <td className="py-2 px-2 text-center">
                            <div className="flex justify-center">
                              <Image
                                width={32}
                                height={32}
                                src={`https://i.pravatar.cc/32?img=${idx + 7}`}
                                alt={emp.name}
                                className="w-10 h-10 rounded-full object-cover"
                              />
                            </div>
                          </td> */}
                            <td>{emp.role}</td>
                            <td>{emp.permissions}</td>
                            <td>
                              <button className="text-gray-500 hover:text-gray-700">
                                <i className="fa-solid fa-ellipsis"></i>
                                {/* <BsThreeDotsVertical size={18} /> */}
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
    </>
  );
}
