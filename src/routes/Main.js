import React from "react";
import PropTypeS from "prop-types";
import { Route } from "react-router-dom";
import Home from "./Home";
import Introduce from "./Introduce";
import Seeingfinedust from "./seeingFineDust";
import "./Main.css";
import axios from "axios";
class Main extends React.Component {
  state = {
    isLoading: true,
    dusts: [],
  };
  getFineDust = async () => {
    const finedust = await axios.get(
      "http://openapi.airkorea.or.kr/openapi/services/rest/UlfptcaAlarmInqireSvc/getUlfptcaAlarmInfo?ServiceKey=LQtSbFT6l8%2F6E%2FGxkGcDCZ0mfvBGMKRuxfBYNpovn9j0w3tccQMFeFhQ5Ohp4LuoxnTXzoSC%2Fzc3fL56NZixJA%3D%3D&pageNo=1&numOfRows=2&year=2020&itemCode=PM10&_returnType=json"
    );
    this.setState({ isLoading: false, dusts: finedust });
    console.log(finedust);
  };
  componentDidMount() {
    this.getFineDust();
  }
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
