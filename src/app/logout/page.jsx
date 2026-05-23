"use client";

import React, { useContext, useEffect } from "react";
import { NoteContext } from "../../context/AuthContext";
import { useRouter } from "next/navigation";

const Logout = () => {
  const router = useRouter();

  const context = useContext(NoteContext);
  const LogoutUser = context?.LogoutUser;

  useEffect(() => {
    if (LogoutUser) {
      LogoutUser();
    }

    router.replace("/login");
  }, [LogoutUser, router]);

  return null;
};

export default Logout;