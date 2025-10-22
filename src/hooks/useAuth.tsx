"use client";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

interface DecodedUser {
  UserInfo: {
    email: string;
    firstName: string;
    roles: string[];
  };
}

const useAuth = () => {
  const [authData, setAuthData] = useState({
    email: "",
    isName: "User",
    roles: [] as string[],
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
        const { email, firstName, roles } = decoded.UserInfo;

        const isUser = roles.includes("User");
        const isAdmin = roles.includes("Admin");
        const status = isAdmin ? "Admin" : "User";

        setAuthData({
          email,
          isName: firstName,
          roles,
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