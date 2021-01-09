import React from "react";
import css3 from "../assets/css3.png";
import html from "../assets/html.jpg";
import javascript from "../assets/javascript.png";
import react_image from "../assets/react.png";
import "./Introduce.css";
class Introduce extends React.Component {
  componentDidMount() {
    const imageList = [css3, html, javascript, react_image];
    imageList.forEach((image) => {
      new Image().src = image;
    });
  }
  render() {
    console.log("제발");
    return (
      <main>
        <div className="router-container">
          <section className="introduce">
            <div className="introduce-container">
              <h1>소개</h1>
              <h3>GBM이란?</h3>
              <p>
                GBM이란 <b>Gun Bro Memory</b>이고, 나의 기억이라는 뜻이다. GBM을
                만들게 된 계기는 두가지 이유가 있다.{" "}
                <b>첫 번째, 동네 친구들과 추억을 공유하고 싶어서 만들었다.</b>
                카카오톡으로 추억을 공유하기에는 제한적이다. 네이버 클라우드나
                구글 클라우드 같은 클라우드는 깔아서 볼 수 있지만, GBM은
                사이트이므로 다운 할 필요가 없고 사진을 보고 싶을 때 접속하면
                된다.{" "}
                <b>두 번째, 나만의 포트폴리오를 만들고 싶어서 만들었다.</b>
              </p>
            </div>
            <div className="interested-language">
              <h3>관심 언어</h3>
              <div className="language-images-container">
                <div className="language-images">
                  <img src={css3} alt="css3" />
                </div>
                <div className="language-images">
                  <img src={html} alt="html" />
                </div>
                <div className="language-images">
                  <img src={javascript} alt="javascript" />
                </div>
                <div className="language-images">
                  <img src={react_image} alt="react" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    );
  }
}
export default Introduce;
