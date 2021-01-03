import React from "react";
import "./home-header.css";
import { Link } from "react-router-dom";
function Homeheader() {
  return (
    <header className="home-header">
      <Link to="/">Fine Dust</Link>
    </header>
  );
}
export default Homeheader;
