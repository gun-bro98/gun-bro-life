import React from "react";
import css3 from "../assets/css3.png";
import html from "../assets/html.jpg";
import javascript from "../assets/javascript.png";
import react_image from "../assets/react.png";
function Introduce() {
  return (
    <section className="introduce">
      <div className="introduce-container">
        <h1>소개</h1>
        <p>
          저는 미세먼지 API를 이용해서 API를 쓰는 방법을 익히고 싶은 학생입니다.
          API를 무엇으로 정해야 API 학습하는데 도움될까 고민했습니다. 근데
          찾다가 OPEN API를 발견하고 요즘 많이 대두되고 있는 미세먼지 API를
          이용하게 되었습니다.
        </p>
      </div>
      <div className="interested-language">
        <h1>관심 언어</h1>
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
  );
}
export default Introduce;
