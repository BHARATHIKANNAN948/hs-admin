import React from "react";
import Sidebar from "../../shared/Sidebar";
import "./index.css";
import { Navigate } from "react-router-dom";

function DashboardLayout(props) {
  // const path = window.location.pathname;
  // let token  = localStorage.getItem("userToken") || "";
  //   if (!token) return <Navigate to="/" />;
  
  return (
    <>
      <div className="dashboard-maincontent">
        <Sidebar />
        <>{props.children}</>
      </div>
    </>
  );
}

export default DashboardLayout;
