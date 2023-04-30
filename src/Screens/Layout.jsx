import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar";

const Layout = () => {
  const [showSpacer, setShowSpacer] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const currentUrl = location.pathname;
    if (
      currentUrl === "" ||
      currentUrl === "/" || 
      currentUrl === "/home"
    ) {
      setShowSpacer(false);
    } else {
      setShowSpacer(true);
    }
  }, [location.pathname]);

  return (
    <div className="container-fluid">
      <Navbar />
        {showSpacer ? <div style={{marginBottom: "14vh"}}/> : null}
      <Outlet />
    </div>
  );
};

export default Layout;
