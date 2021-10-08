import * as React from "react";
import GeneralNav from "./components/pages/GeneralNav";

import Home from "./components/pages/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard";
import Dex from "./components/pages/Dex";
import store from "./redux/store";
import { Provider } from "react-redux";
import Main from "./components/pages/main";

class App extends React.Component {
  public render() {
    return <div className="App"></div>;
  }
}

export default App;
