import React from "react";
import { Link } from "react-router-dom";
function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/main">Home</Link>
        </li>
        <li>
          <Link to="/main/introduce">Introdue</Link>
        </li>
        <li>
          <Link to="/main/seeing-fine-dust">Seeing Fine Dust</Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navigation;
