import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Box from "@mui/material/Box";

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
    <Box className={showSpacer ? "container-fluid" : null}>
      <Navbar />
        {showSpacer ? <Box style={{marginBottom: "14vh"}}/> : null}
      <Outlet />
    </Box>
  );
};

export default Layout;
