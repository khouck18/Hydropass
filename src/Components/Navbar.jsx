import React from "react";
import Logo from "../Images/logo_transparency.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="row mt-4 ms-lg-3">
      <div className="col-12 col-md-2 col-lg-2 me-3">
        <Link to="/home">
          <img src={Logo} alt="Hydropass Logo" className="w-100" />
        </Link>
      </div>
      <div className="col-3 col-md-2 col-lg-2 ms-lg-5">
        <Link to="/explore" className="text-primary text-decoration-none fs-4">
          Explore
        </Link>
      </div>
      <div className="col-5 col-md-4 col-lg-3">
        <Link
          to="/host"
          className="text-primary text-decoration-none fs-4"
        >
          Become a Host
        </Link>
      </div>
      <div className="col-4 col-md-3 col-lg-3 ms-lg-5">
        <div className="d-flex justify-content-end">
          <i className="bi bi-bell text-primary fs-4" />
          <i className="bi bi-chat-square-text text-primary fs-4 ms-3 me-3" />
          <button type="button" className="btn btn-primary">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
