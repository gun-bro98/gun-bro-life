import React from "react";
import PropTypeS from "prop-types";
import { HashRouter, Route } from "react-router-dom";
import Home from "./Home";
import Introduce from "./Introduce";
import Seeingfinedust from "./seeingFineDust";
import "./Main.css";
import axios from "axios";
class Main extends React.Component {
  render() {
    return (
      <main>
        <div className="router-container">
          <HashRouter>
            <Route path="/main" exact={true} component={Home} />
            <Route path="/main/introduce" component={Introduce} />
            <Route path="/main/seeing-fine-dust" component={Seeingfinedust} />
          </HashRouter>
        </div>
      </main>
    );
  }
}

export default Main;
