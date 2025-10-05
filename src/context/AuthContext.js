"use client";

import { useRouter } from "next/navigation";
import { createContext, useState, useEffect } from "react";

export const NoteContext = createContext();

const NoteState = ({ children }) => {
  const [token, setToken] = useState("");
  const [user, setUser] = useState(null);

  const router = useRouter();

  // Save token to localStorage
  const serverTokenLS = (serverToken) => {
    setToken(serverToken);
    localStorage.setItem("userDataToken", serverToken);
  };

  const LogoutUser = () => {
    setToken("");
    setUser(null);
    localStorage.removeItem("userDataToken");
    router.push("/login");
  };

  const isLoggedIn = !!token;

  // Fetch user data from API
  const userAuthentication = async () => {
    if (!token) return;
    try {
      const response = await fetch("/api/auth/users", {
        method: "GET",
        headers: {
          "auth-token": token,
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data.msg);
      } else {
        const errorData = await response.json();
        console.log("Failed to authenticate user:", errorData.msg);
      }
    } catch (error) {
      console.log("Invalid user:", error);
    }
  };


  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedToken = localStorage.getItem("userDataToken");
      if (savedToken) setToken(savedToken);
    }
  }, []);

  useEffect(() => {
    userAuthentication();
    // eslint-disable-next-line
  }, [token]);

  return (
    <NoteContext.Provider
      value={{ user, serverTokenLS, LogoutUser, isLoggedIn, userAuthentication }}
    >
      {children}
    </NoteContext.Provider>
  );
};

export default NoteState;
