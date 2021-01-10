import React from "react";
import PropTypes from "prop-types";
import "./Theme.css";
class Theme extends React.Component {
  state = {
    isModal: false,
  };
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  shouldComponentUpdate() {
    //이미지를 미리 다운 받는 것
    const {
      location: { state },
    } = this.props;
    const { bestImages } = state;
    bestImages.forEach(({ image }) => {
      new Image().src = image;
    });
    return true;
  }
  componentDidUpdate() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  clickImage = () => {
    this.setState({ isModal: true });
  };
  // clickBtn = () => {
  //   this.setState({ isModal: false });
  // };
  render() {
    const {
      location: { state },
    } = this.props;
    const { isModal } = this.state;
    if (state) {
      const { bestImages } = state;
      return (
        <main>
          <div className="router-container">
            <section>
              <h1>{state.theme}</h1>
              <div className="container-years">
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
    } else {
      return null;
    }
  }
}
export default Theme;
