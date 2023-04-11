import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const Layout = () => {
  return (
    <div className="container-fluid">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
