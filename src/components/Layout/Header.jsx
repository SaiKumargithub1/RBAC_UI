import React from "react";
import { Link } from "react-router-dom";
import "../../styles/layout.css";

const Header = () => {
  return (
    <div className="header">
      <h1>RBAC Dashboard</h1>
      <nav>
        <Link to="/users">Manage Users</Link>
        <Link to="/roles">Manage Roles</Link>
        <Link to="/permissions">Permissions</Link>
      </nav>
    </div>
  );
};

export default Header;
