import React from "react";
import PropTypeS from "prop-types";
import { Route } from "react-router-dom";
import Home from "./Home";
import Introduce from "./Introduce";
import Seeingfinedust from "./seeingFineDust";
import "./Main.css";
class Main extends React.Component {
  state = {
    isLoading: false,
    dusts: [],
  };

  render() {
    const { isLoading, dusts } = this.state;
    return (
      <main>
        {isLoading ? (
          <div className="loader-block">
            <span>로딩 중 입니다</span>
          </div>
        ) : (
          <div className="router-container">
            <Route path="/main" exact={true} component={Home} />
            <Route path="/main/introduce" component={Introduce} />
            <Route path="/main/seeing-fine-dust" component={Seeingfinedust} />
          </div>
        )}
      </main>
    );
  }
}

export default Main;
