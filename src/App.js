import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Homeheader from "./routes/home-header";
import Navigation from "./components/Navigation";
import Mainheader from "./routes/main-header";
import Main from "./routes/Main";
import Footer from "./components/Footer";
import "./App.css";
class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Route path="/" exact={true} component={Homeheader} />
        <Route path="/main" component={Mainheader} />
        <Navigation />
        <Route path="/main" component={Main} />
        <Footer />
      </HashRouter>
    );
  }
}

export default App;
