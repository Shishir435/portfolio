"use client"
import AuthAdminCheck from "@/components/portfolio/AuthAdminCheck"
import React, { useState } from "react"

const AdminPage = () => {
  const [isAdmin, setIsAdmin] = useState(false)
  return (
    <div>
      {isAdmin ? (
        <div>You are admin</div>
      ) : (
        <AuthAdminCheck setIsAdmin={setIsAdmin} />
      )}
    </div>
  )
}

export default AdminPage
