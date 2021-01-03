import React from "react";
import dust1 from "../assets/dust1.jpg";
import dust2 from "../assets/dust2.jpg";

function Home() {
  return (
    <section className="home">
      <div className="image-container">
        <img src={dust1} alt="신발에 미세먼지" title="신발에 쌓인 미세먼지" />
      </div>
      <div className="image-container">
        <img src={dust2} alt="무자비한 공장" title="미세먼지의 원인: 공장" />
      </div>
    </section>
  );
}
export default Home;
