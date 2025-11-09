import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../Pages/AdminPanel.css"; 
import useAuth from "../../hooks/useAuth";

export default function ProfilePic() {
  const navigate = useNavigate();
  const { authEmail, isName, role, img, loading } = useAuth(); 
     const handleLogout = () => {
    localStorage.clear(); // clear all local storage data
    navigate("/login"); // redirect to login page
  };
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  //console.log("isName", isName);
  return (
    <div
      className="navbar-user"
      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
    >
      <img
        src={img || 'https://i.pravatar.cc/40'}
        alt="avatar"
        className="navbar-avatar"
      />

      {isDropdownOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-item">{isName}</div>
          <div className="dropdown-item">{authEmail}</div>
          <div className="dropdown-item">Role: {role}</div>
          <div
            className="dropdown-item logout"
             onClick={handleLogout}
          >
            Logout
          </div>
        </div>
      )}
    </div>
  );
}