"use client";

import { useState } from "react";

import AuthAdminCheck from "@/components/portfolio/auth-admin-check";

const AdminPage = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  return (
    <div>
      {isAdmin ? (
        <div>You are admin</div>
      ) : (
        <AuthAdminCheck setIsAdmin={setIsAdmin} />
      )}
    </div>
  );
};

export default AdminPage;
