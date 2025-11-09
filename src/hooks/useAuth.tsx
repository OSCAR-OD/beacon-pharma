import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

interface DecodedUser {
  UserInfo: {
    email: string;
    name: string;
    role: string;
    img: string;
  };
}

const useAuth = () => {
  const [authData, setAuthData] = useState({
    authEmail: "",
    isName: "User",
    role: "User",
    img: "",
    isUser: false,
    isAdmin: false,
    status: "User",
     loading: true, 
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded: DecodedUser = jwtDecode(token);
        const { email, name, role, img } = decoded.UserInfo;
        //console.log("decoded.UserInfo", email);

    const isAdmin = role === "Admin" || role === "Super Admin";
        const isUser = role === "User" || role === "Employee";
        const status = isAdmin ? "Admin" : "User";

        setAuthData({
          authEmail:email,
          isName: name,
           role,
          img,
          isUser,
          isAdmin,
          status,
          loading: false,
        });
      } catch (err) {
        console.error("Invalid token", err);
         setAuthData((prev) => ({ ...prev, loading: false }));
      }
    } else {
      setAuthData((prev) => ({ ...prev, loading: false }));
    }
  }, []);

  return authData;
};

export default useAuth;