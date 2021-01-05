import React from "react";
import "./home-header.css";
import { Link } from "react-router-dom";
function Homeheader() {
  return (
    <header className="home-header">
      <Link to="/main">GBM</Link>
      <h2>우리들의 기억</h2>
    </header>
  );
}
export default Homeheader;
