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

import 혜화1 from "../assets/2016/혜화1.jpeg";
import 혜화2 from "../assets/2016/혜화2.jpeg";
import 혜화3 from "../assets/2016/혜화3.jpeg";
import 혜화4 from "../assets/2016/혜화4.jpeg";
import 혜화5 from "../assets/2016/혜화5.jpeg";
import 혜화6 from "../assets/2016/혜화6.jpeg";
import 혜화7 from "../assets/2016/혜화7.jpeg";
import 혜화8 from "../assets/2016/혜화8.jpeg";
import 혜화9 from "../assets/2016/혜화9.jpeg";
import 혜화10 from "../assets/2016/혜화10.jpeg";
import 혜화11 from "../assets/2016/혜화11.jpeg";
import 혜화12 from "../assets/2016/혜화12.jpeg";
import 혜화13 from "../assets/2016/혜화13.jpeg";
import 혜화14 from "../assets/2016/혜화14.jpeg";
import 혜화15 from "../assets/2016/혜화15.jpg";
import 혜화16 from "../assets/2016/혜화16.jpg";
import 혜화17 from "../assets/2016/혜화17.jpg";
import 혜화18 from "../assets/2016/혜화18.jpg";
import 혜화19 from "../assets/2016/혜화19.jpg";
import 혜화20 from "../assets/2016/혜화20.jpg";
import 혜화21 from "../assets/2016/혜화21.jpg";
import 혜화22 from "../assets/2016/혜화22.jpg";

import 전주1 from "../assets/2017/2017.1월 내일로 여행1/전주1.jpg";
import 전주2 from "../assets/2017/2017.1월 내일로 여행1/전주2.jpg";
import 전주3 from "../assets/2017/2017.1월 내일로 여행1/전주3.jpg";
import 전주4 from "../assets/2017/2017.1월 내일로 여행1/전주4.jpg";
import 전주5 from "../assets/2017/2017.1월 내일로 여행1/전주5.jpg";
import 전주6 from "../assets/2017/2017.1월 내일로 여행1/전주6.jpg";
import 전주7 from "../assets/2017/2017.1월 내일로 여행1/전주7.jpg";
import 전주8 from "../assets/2017/2017.1월 내일로 여행1/전주8.jpg";
import 전주9 from "../assets/2017/2017.1월 내일로 여행1/전주9.jpg";
import 전주10 from "../assets/2017/2017.1월 내일로 여행1/전주10.jpg";
import 전주11 from "../assets/2017/2017.1월 내일로 여행1/전주11.jpg";
import 전주12 from "../assets/2017/2017.1월 내일로 여행1/전주12.jpg";
import 전주13 from "../assets/2017/2017.1월 내일로 여행1/전주13.jpg";
import 전주14 from "../assets/2017/2017.1월 내일로 여행1/전주14.jpg";
import 전주15 from "../assets/2017/2017.1월 내일로 여행1/전주15.jpg";
import 전주16 from "../assets/2017/2017.1월 내일로 여행1/전주16.jpg";
import 전주17 from "../assets/2017/2017.1월 내일로 여행1/전주17.jpg";
import 전주18 from "../assets/2017/2017.1월 내일로 여행1/전주18.jpg";
import 전주19 from "../assets/2017/2017.1월 내일로 여행1/전주19.jpg";
import 전주20 from "../assets/2017/2017.1월 내일로 여행1/전주20.jpg";
import 전주21 from "../assets/2017/2017.1월 내일로 여행1/전주21.jpg";
import 전주22 from "../assets/2017/2017.1월 내일로 여행1/전주22.jpg";
import 전주23 from "../assets/2017/2017.1월 내일로 여행1/전주23.jpg";

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
          { id: 1, image: 혜화1, name: "줄서!1" },
          { id: 2, image: 혜화2, name: "줄서!2" },
          { id: 3, image: 혜화3, name: "멋쟁이들의 모임1" },
          { id: 4, image: 혜화4, name: "멋쟁이들의 모임2" },
          { id: 5, image: 혜화5, name: "존잘둘" },
          { id: 6, image: 혜화6, name: "멋쟁이들의 모임3" },
          { id: 7, image: 혜화7, name: "롤 잘하는 3명1" },
          { id: 8, image: 혜화8, name: "롤 잘하는 3명2" },
          { id: 9, image: 혜화9, name: "멋쟁이들의 모임4" },
          { id: 10, image: 혜화10, name: "멋쟁이들의 모임5" },
          { id: 11, image: 혜화11, name: "멋쟁이들의 모임6" },
          { id: 12, image: 혜화12, name: "멋쟁이들의 모임7" },
          { id: 13, image: 혜화13, name: "멋쟁이들의 모임8" },
          { id: 14, image: 혜화14, name: "내 머리 왜이래" },
          { id: 15, image: 혜화15, name: "멋쟁이들의 모임9" },
          { id: 16, image: 혜화16, name: "실세2명" },
          { id: 17, image: 혜화17, name: "환상의 트윈즈" },
          { id: 18, image: 혜화18, name: "진짜 오래된 프렌드" },
          { id: 19, image: 혜화19, name: "멋쟁이들의 모임9" },
          { id: 20, image: 혜화20, name: "실세2명" },
          { id: 21, image: 혜화21, name: "환상의 트윈즈" },
          { id: 22, image: 혜화22, name: "진짜 오래된 프렌드" },
        ],
      },
      {
        theme: "2017(전주)",
        bestImages: [
          { id: 1, image: 전주1, name: "줄서!1" },
          { id: 2, image: 전주2, name: "줄서!2" },
          { id: 3, image: 전주3, name: "멋쟁이들의 모임1" },
          { id: 4, image: 전주4, name: "멋쟁이들의 모임2" },
          { id: 5, image: 전주5, name: "존잘둘" },
          { id: 6, image: 전주6, name: "멋쟁이들의 모임3" },
          { id: 7, image: 전주7, name: "롤 잘하는 3명1" },
          { id: 8, image: 전주8, name: "롤 잘하는 3명2" },
          { id: 9, image: 전주9, name: "멋쟁이들의 모임4" },
          { id: 10, image: 전주10, name: "멋쟁이들의 모임5" },
          { id: 11, image: 전주11, name: "멋쟁이들의 모임6" },
          { id: 12, image: 전주12, name: "멋쟁이들의 모임7" },
          { id: 13, image: 전주13, name: "멋쟁이들의 모임8" },
          { id: 14, image: 전주14, name: "내 머리 왜이래" },
          { id: 15, image: 전주15, name: "멋쟁이들의 모임9" },
          { id: 16, image: 전주16, name: "실세2명" },
          { id: 17, image: 전주17, name: "환상의 트윈즈" },
          { id: 18, image: 전주18, name: "진짜 오래된 프렌드" },
          { id: 19, image: 전주19, name: "멋쟁이들의 모임9" },
          { id: 20, image: 전주20, name: "실세2명" },
          { id: 21, image: 전주21, name: "환상의 트윈즈" },
          { id: 22, image: 전주22, name: "진짜 오래된 프렌드" },
          { id: 23, image: 전주23, name: "진짜 오래된 프렌드" },
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
              Introduce
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
