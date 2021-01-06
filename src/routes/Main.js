import React from "react";
import PropTypeS from "prop-types";
import { HashRouter, Route } from "react-router-dom";
import Home from "./Home";
import Introduce from "./Introduce";
import image2015 from "./image2015";
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
            <Route path="/main/2013" component={image2015} />
          </HashRouter>
        </div>
      </main>
    );
  }
}

export default Main;
