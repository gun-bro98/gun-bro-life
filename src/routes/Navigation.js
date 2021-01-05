import { node } from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
class Navigation extends React.Component {
  state = {
    clickBtn: false,
  };
  clickOnButton = () => {
    this.setState({ clickBtn: true });
  };
  clickOffButton = () => {
    this.setState({ clickBtn: false });
  };
  render() {
    const { clickBtn } = this.state;
    return clickBtn ? (
      <nav className="onNav">
        <ul>
          <li>
            <Link to="/main" onClick={this.clickOffButton}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/main/introduce" onClick={this.clickOffButton}>
              Introdue
            </Link>
          </li>
          <li>
            <Link to="/main/seeing-fine-dust" onClick={this.clickOffButton}>
              2013
            </Link>
          </li>
          <div className="closeButton" onClick={this.clickOffButton}>
            <i className="fas fa-times"></i>
          </div>
        </ul>
      </nav>
    ) : (
      <div className="offNav">
        <button className="menuButton" onClick={this.clickOnButton}>
          <i className="fas fa-bars"></i>
        </button>
      </div>
    );
  }
}
export default Navigation;
