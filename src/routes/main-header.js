import React from "react";
import "./main-header.css";
import { Link } from "react-router-dom";
function Mainheader() {
  return (
    <header className="main-header">
      <Link to="/">건형팍의 미세먼지 알아보기</Link>
    </header>
  );
}
export default Mainheader;
