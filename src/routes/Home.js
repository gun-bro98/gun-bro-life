import React from "react";
import img0 from "../assets/2017베스트사진.jpg";
import img1 from "../assets/2021년1월1-1.jpg";
import img2 from "../assets/2021년1월1-2.jpg";
import img3 from "../assets/2021년1월1-3.jpg";
import img4 from "../assets/2021년1월1-4.jpg";
import "./Home.css";
class Home extends React.Component {
  state = {
    bestImages: [
      { id: 0, image: img0, name: "좋았다 2017" },
      { id: 1, image: img1, name: "존잘들" },
      { id: 2, image: img2, name: "거의 스위스1" },
      { id: 3, image: img3, name: "거의 스위스2" },
      { id: 4, image: img4, name: "2021화이팅" },
    ],
  };
  componentDidMount() {
    const { bestImages } = this.state;
    bestImages.forEach(({ image }) => {
      new Image().src = image;
    });
  }
  render() {
    const { bestImages } = this.state;
    return (
      <main>
        <div className="router-container">
          <section className="home">
            {bestImages.map((content) => (
              <div key={content.id} className="image-container">
                <img
                  src={content.image}
                  alt={content.name}
                  title={content.name}
                />
              </div>
            ))}
          </section>
        </div>
      </main>
    );
  }
}
export default Home;
