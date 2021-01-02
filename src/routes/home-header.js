import React from "react";
import "./home-header.css";
import { Link } from "react-router-dom";
function Homeheader() {
  return (
    <header className="home-header">
      <Link to="/">건형팍의 미세먼지 알아보기</Link>
    </header>
  );
}
export default Homeheader;
