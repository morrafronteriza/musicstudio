import React from "react";
import "./mainnavbar.css";

import { Link } from "react-router-dom";

export default function MainNavbar() {
  return (
    <div className="mainNavbar">
      <Link to="/students">
        <a>Students</a>
      </Link>
      <Link to="/leaderboard">
        <a>Leaderboard</a>
      </Link>
      <Link to="/calendar">
        <a>Calendar</a>
      </Link>
      <Link to="/settings">
        <a>Settings</a>
      </Link>
      <Link to="/membership">
        <a>Membership</a>
      </Link>
    </div>
  );
}
