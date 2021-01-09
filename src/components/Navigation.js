import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import 춘천1 from "../assets/2015/춘천1.jpeg";
import 춘천2 from "../assets/2015/춘천2.jpeg";
import 춘천3 from "../assets/2015/춘천3.jpeg";
import 춘천4 from "../assets/2015/춘천4.jpeg";
import 춘천5 from "../assets/2015/춘천5.jpeg";
import 춘천6 from "../assets/2015/춘천6.jpeg";
import 춘천7 from "../assets/2015/춘천7.jpeg";
import 춘천8 from "../assets/2015/춘천8.jpeg";
import 춘천9 from "../assets/2015/춘천9.jpeg";
import 춘천10 from "../assets/2015/춘천10.jpeg";
import 춘천11 from "../assets/2015/춘천11.jpeg";
import 춘천12 from "../assets/2015/춘천12.jpeg";
import 춘천13 from "../assets/2015/춘천13.jpeg";
import 춘천14 from "../assets/2015/춘천14.jpeg";
import 춘천15 from "../assets/2015/춘천15.jpeg";
import 춘천16 from "../assets/2015/춘천16.jpeg";
import 춘천17 from "../assets/2015/춘천17.jpg";
import 춘천18 from "../assets/2015/춘천18.jpg";
class Navigation extends React.Component {
  state = {
    clickBtn: false,
    imageContents: [
      {
        theme: 2015,
        bestImages: [
          { id: 1, image: 춘천1, name: "줄서!1" },
          { id: 2, image: 춘천2, name: "줄서!2" },
          { id: 3, image: 춘천3, name: "멋쟁이들의 모임1" },
          { id: 4, image: 춘천4, name: "멋쟁이들의 모임2" },
          { id: 5, image: 춘천5, name: "존잘둘" },
          { id: 6, image: 춘천6, name: "멋쟁이들의 모임3" },
          { id: 7, image: 춘천7, name: "롤 잘하는 3명1" },
          { id: 8, image: 춘천8, name: "롤 잘하는 3명2" },
          { id: 9, image: 춘천9, name: "멋쟁이들의 모임4" },
          { id: 10, image: 춘천10, name: "멋쟁이들의 모임5" },
          { id: 11, image: 춘천11, name: "멋쟁이들의 모임6" },
          { id: 12, image: 춘천12, name: "멋쟁이들의 모임7" },
          { id: 13, image: 춘천13, name: "멋쟁이들의 모임8" },
          { id: 14, image: 춘천14, name: "내 머리 왜이래" },
          { id: 15, image: 춘천15, name: "멋쟁이들의 모임9" },
          { id: 16, image: 춘천16, name: "실세2명" },
          { id: 17, image: 춘천17, name: "환상의 트윈즈" },
          { id: 18, image: 춘천18, name: "진짜 오래된 프렌드" },
        ],
      },
      {
        theme: 2016,
        bestImages: [
          { id: 1, image: 춘천1, name: "줄서!1" },
          { id: 2, image: 춘천2, name: "줄서!2" },
          { id: 3, image: 춘천3, name: "멋쟁이들의 모임1" },
          { id: 4, image: 춘천4, name: "멋쟁이들의 모임2" },
          { id: 5, image: 춘천5, name: "존잘둘" },
          { id: 6, image: 춘천6, name: "멋쟁이들의 모임3" },
          { id: 7, image: 춘천7, name: "롤 잘하는 3명1" },
          { id: 8, image: 춘천8, name: "롤 잘하는 3명2" },
          { id: 9, image: 춘천9, name: "멋쟁이들의 모임4" },
          { id: 10, image: 춘천10, name: "멋쟁이들의 모임5" },
          { id: 11, image: 춘천11, name: "멋쟁이들의 모임6" },
          { id: 12, image: 춘천12, name: "멋쟁이들의 모임7" },
          { id: 13, image: 춘천13, name: "멋쟁이들의 모임8" },
          { id: 14, image: 춘천14, name: "내 머리 왜이래" },
          { id: 15, image: 춘천15, name: "멋쟁이들의 모임9" },
          { id: 16, image: 춘천16, name: "실세2명" },
          { id: 17, image: 춘천17, name: "환상의 트윈즈" },
          { id: 18, image: 춘천18, name: "진짜 오래된 프렌드" },
        ],
      },
      {
        theme: 2017,
        bestImages: [
          { id: 1, image: 춘천1, name: "줄서!1" },
          { id: 2, image: 춘천2, name: "줄서!2" },
          { id: 3, image: 춘천3, name: "멋쟁이들의 모임1" },
          { id: 4, image: 춘천4, name: "멋쟁이들의 모임2" },
          { id: 5, image: 춘천5, name: "존잘둘" },
          { id: 6, image: 춘천6, name: "멋쟁이들의 모임3" },
          { id: 7, image: 춘천7, name: "롤 잘하는 3명1" },
          { id: 8, image: 춘천8, name: "롤 잘하는 3명2" },
          { id: 9, image: 춘천9, name: "멋쟁이들의 모임4" },
          { id: 10, image: 춘천10, name: "멋쟁이들의 모임5" },
          { id: 11, image: 춘천11, name: "멋쟁이들의 모임6" },
          { id: 12, image: 춘천12, name: "멋쟁이들의 모임7" },
          { id: 13, image: 춘천13, name: "멋쟁이들의 모임8" },
          { id: 14, image: 춘천14, name: "내 머리 왜이래" },
          { id: 15, image: 춘천15, name: "멋쟁이들의 모임9" },
          { id: 16, image: 춘천16, name: "실세2명" },
          { id: 17, image: 춘천17, name: "환상의 트윈즈" },
          { id: 18, image: 춘천18, name: "진짜 오래된 프렌드" },
        ],
      },
    ],
  };
  clickOnButton = () => {
    this.setState({ clickBtn: true });
  };
  clickOffButton = () => {
    this.setState({ clickBtn: false });
  };
  render() {
    const { clickBtn, imageContents } = this.state;
    return clickBtn ? (
      <nav className="onNav">
        <ul>
          <li>
            <Link to="/" onClick={this.clickOffButton}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/introduce" onClick={this.clickOffButton}>
              Introdue
            </Link>
          </li>
          {imageContents.map(({ theme, bestImages }) => {
            return (
              <li key={theme}>
                <Link
                  to={{
                    pathname: `/years/${theme}`,
                    state: {
                      theme,
                      bestImages,
                    },
                  }}
                  onClick={this.clickOffButton}
                >
                  {theme}
                </Link>
              </li>
            );
          })}

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
