import React from "react";
import "./Theme.css";
class Theme extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  componentDidUpdate() {
    const {
      location: { state },
    } = this.props;
    const { bestImages } = state;
    bestImages.forEach(({ image }) => {
      new Image().src = image;
    });
  }
  render() {
    const {
      location: { state },
    } = this.props;
    const { bestImages } = state;
    return (
      <main>
        <div className="router-container">
          <section>
            <h1>{state.theme}</h1>
            <div className="container-2013">
              {bestImages.map((content) => (
                <div key={content.id} className="image-container">
                  <img
                    src={content.image}
                    alt={content.name}
                    title={content.name}
                  />
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    );
  }
}
export default Theme;
