import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Homeheader from "./routes/home-header";
import Navigation from "./routes/Navigation";
import Mainheader from "./routes/main-header";
import Main from "./routes/Main";
import Footer from "./components/Footer";
import "./App.css";
class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Route path="/" exact={true} component={Homeheader} />
        <Route path="/main">
          <Mainheader />
          <Navigation />
          <Main />
        </Route>
        <Footer />
      </HashRouter>
    );
  }
}

export default App;
