import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Mainheader from "./components/main-header";
import Navigation from "./components/Navigation";
import Home from "./routes/Home";
import Introduce from "./routes/Introduce";
import Theme from "./routes/Theme";
import Footer from "./components/Footer";
import "./App.css";
class App extends React.Component {
  render() {
    return (
      //처음에 화면이 두개로 갈라진다.
      //메뉴가 없는 화면이 첫 번째인데 글자를 누르면, 이동
      //이동하고 나면 그게 두 번째 화면
      <HashRouter>
        <Mainheader />
        <Navigation />
        <Route exact path="/" component={Home} />
        <Route path="/introduce" component={Introduce} />
        <Route path="/years/:theme" component={Theme} />
        <Footer />
      </HashRouter>
    );
  }
}

export default App;
